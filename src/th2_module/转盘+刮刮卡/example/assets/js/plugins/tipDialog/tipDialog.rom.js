/**
 * Created with JetBrains WebStorm.
 * User: Rodey
 * To change this template use File | Settings | File Templates.
 */

/**
 * 提示弹窗  ( type类型预置四种，可以自己添加 )
 * @param type      类型:  success (成功) || warning (警告) || info (消息) || error (异常错误)
 * @param options   可选:  预留选项
 * @return { Object }
 *
 * Use:
 *
 * tipDialog({
                msg:'【公众号推荐】"理财宝宝大比拼"，新理财资讯一网打尽',  //内容
                type: 'success',                                     //状态
                title: '推送',                                       //标题
                btnOk: {                                             //确认按钮
                    val: '确认',                                     // 按钮文字
                    close: false                                     // 触发后是否关闭弹窗（ true: 关闭， false: 保留）
                    call: function(evt){                             // 确认按钮回调函数
                        console.log(evt)
                    }
                },
                btnCancel:{
                    val: '关闭',
                    close: true
                    call: function(evt){
                        console.log(evt)
                    }
                },
                autoClose: true,                                     // 是否自动关闭
                closeTime: 2000,                                     // 多长时间自动关闭
                ZorQ: 'Zepto'                                       // 基于 jQuery 还是 Zepto, 默认 'Zepto', 可选值：'jQuery' || 'Zepto'
            });
 *
 *
 */

;!(function(){

    'use strict';

    //模板
    var tipDialogHTML = '<div id="tipDialog" class="tipDialog-00" style="width:80%;">'+
        '<button type="button" class="close">×</button>'+
        '<h3 class="tipTitle"></h3>'+
        '<i class="tipType"></i>'+
        '<p class="tipContent"></p>'+
        '<div class="tipBtns">'+
        '<span class="btnCancel">关闭</span>'+
        '<span class="btnOk">确认</span>'+
        '</div>'+
        '</div>';

    //svg图标
    var svgs = {
        'success': '<svg><g id="icon-checkmark-circle" fill="#79C46C"><path d="M24 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zM19.5 39l-9.938-12.938 4.406-4.594 5.531 7.031 17.344-14.156 2.156 2.156-19.5 22.5z"></path></g></svg>',
        'error': '<svg><g id="icon-cancel-circle" fill="#FF645C"><path d="M24 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zM36 16.243l-7.757 7.757 7.757 7.757v4.243h-4.243l-7.757-7.757-7.757 7.757h-4.243v-4.243l7.757-7.757-7.757-7.757v-4.243h4.243l7.757 7.757 7.757-7.757h4.243v4.243z"></path></g></svg>',
        'warning': '<svg><g id="icon-question" fill="#EAB36E"><path d="M21 33h6v6h-6zM33 12c1.657 0 3 1.343 3 3v9l-9 6h-6v-3l9-6v-3h-15v-6h18zM24 4.5c-5.209 0-10.105 2.028-13.789 5.711s-5.711 8.58-5.711 13.789c0 5.209 2.028 10.106 5.711 13.789s8.58 5.711 13.789 5.711c5.209 0 10.106-2.028 13.789-5.711s5.711-8.58 5.711-13.789c0-5.209-2.028-10.105-5.711-13.789s-8.58-5.711-13.789-5.711zM24 0v0c13.255 0 24 10.745 24 24s-10.745 24-24 24c-13.255 0-24-10.745-24-24s10.745-24 24-24z"></path></g></svg>',
        'info': '<svg><g id="icon-info" fill="#62D1CD"><path d="M24 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zM21 9h6v6h-6v-6zM30 39h-12v-3h3v-12h-3v-3h9v15h3v3z"></path></g></svg>'
    };

    var tipDialog = function(options){

        //创建选项
        var defaults = {
            type: '',
            title: '',
            msg: '',
            msgStyle: null,
            btnOk: {
                val: '\u786e\u8ba4', //确认
                call: btnFunction,
                close: true
            },
            btnCancel: {
                val: '\u5173\u95ed', //关闭
                call: btnFunction,
                close: true
            },
            complate: null,
            lock: true,
            lockTouch: false,
            time: 'fast',
            autoClose: false,
            closeTime: 1500,
            ZorQ: 'Zepto' // 'jQuery' || 'Zepto'
        };

        if(options){
            for(var k in options){
                if(options.hasOwnProperty(k)){
                    defaults[k] = options[k];
                }
            }
        }

        //回调执行
        var handEvent = function(obj, callback){
            var self = this, args = [];
            for(var i = 2; i < arguments.length; i++)   args.push(arguments[i]);
            return function(e){
                e.preventDefault();
                e.stopPropagation();
                args.push(e);
                args.push(obj);
                btnFunction(obj.close || true);
                if(typeof callback === 'function'){
                    callback.apply(tipDialog, args);
                }
            }
        };

        var cache = [];
        var tipDialog    = $('#tipDialog')[0] ? $('#tipDialog') : $(tipDialogHTML);
        var tipCloseBtn  = tipDialog.find('.close');
        var tipType      = tipDialog.find('.tipType');
        var tipTitle     = tipDialog.find('.tipTitle');
        var tipContent   = tipDialog.find('.tipContent');

        //按钮
        var tipBtns      = tipDialog.find('.tipBtns');
        var btnOk        = tipDialog.find('.btnOk');
        var btnCancel    = tipDialog.find('.btnCancel');

        /* 创建背景遮罩层 */
        var masker = document.getElementById('tipDialogMasker00')
            ? document.getElementById('tipDialogMasker00')
            : document.createElement('div');
        masker.setAttribute('id', 'tipDialogMasker00');
        masker.setAttribute('class', 'tipDialogMasker');
        document.body.appendChild(masker);
        if(defaults.ZorQ == 'jQuery'){
            $(masker).stop().fadeIn(defaults.time);
        }else if(defaults.ZorQ == 'Zepto'){
            $(masker).off().show();
        }

        //获取页面窗口大小
        var ww = $(window).width();//document.documentElement.clientWidth;
        var wh = $(window).height();
        tipContent.css(defaults.msgStyle || {}).html(defaults.msg || '');
        masker.appendChild(tipDialog[0]);
        //console.log(tipDialog.width(), tipDialog.height(), ww, wh) ;
        //tipDialog.width(ww * .8);
        tipDialog.show();
        tipDialog.css({ left: "10%", top: "37%" });

        //类型定义
        if(defaults.type && defaults.type != ''){
            tipType.html(svgs[defaults.type]).css('display', 'block');
        }
        //显示标题
        if(defaults.title && defaults.title != ''){
            tipTitle.text(defaults.title).show();
        }else{
            tipTitle.text('').hide();
        }

        //自动隐藏
        if(true === defaults.autoClose){
            setTimeout(function(){
                _hide();
                (defaults.complate && typeof(defaults.complate) === 'function') && defaults.complate();
            }, defaults.closeTime);
        }

        //按钮存在
        var isOk        = defaults.btnOk && defaults.btnOk != {};
        var isCancel    = defaults.btnCancel && defaults.btnCancel != {};

        //确认按钮和关闭存在
        if(isOk && isCancel){
            btnOk.removeClass('btmRadius').addClass('btmRRadius betweenOk').text(defaults.btnOk.val);
            btnOk.on('tap', handEvent(defaults.btnOk, defaults.btnOk.call));

            btnCancel.removeClass('btmRadius').addClass('btmLRadius betweenCancel').text(defaults.btnCancel.val);
            btnCancel.on('tap', handEvent(defaults.btnCancel, defaults.btnCancel.call));
            //确认按钮存在, 关闭按钮不存在
        }else if(isOk && !isCancel){
            btnOk.removeClass('btmLRadius').addClass('btmRadius showOk').text(defaults.btnOk.val);
            btnOk.on('tap', handEvent(defaults.btnOk, defaults.btnOk.call));
            btnCancel.css({ 'display': 'none' });
            //确认按钮不存在, 关闭按钮存在
        }else if(!isOk && isCancel){
            btnCancel.removeClass('btmLRadius').addClass('btmRadius showCancel').text(defaults.btnCancel.val);
            btnCancel.on('tap', handEvent(defaults.btnCancel, defaults.btnCancel.call));
            btnOk.css({ 'display': 'none' });
            //确认按钮和关闭按钮都不存在
        }else if(!isOk && !isCancel){
            tipBtns.hide();
        }

        //btnOk.on('touchstart', _endEvent);
        //btnCancel.on('touchstart', _endEvent);

        //点击遮罩层是否消失
        if(true === defaults.lockTouch){
            $(masker).off().on('tap', _maskerHandler);
        }

        function _show(time, callback){
            //$(masker).fadeIn(defaults.time, callback);
            $(masker).off().show();
        }

        function _hide(time, callback){
            //$(masker).fadeOut(defaults.time, callback);
            $(masker).off().hide();
        }
        function _removeBind(){
            btnOk.off('tap');
            btnCancel.off('tap');
            $(masker).off('tap');
        }
        function _endEvent(evt){
            evt.preventDefault();
            evt.stopPropagation();
        }
        function _maskerHandler(evt){
            _endEvent(evt);
            if('tipDialogMasker' === evt.target.className){
                _hide();
            }
            return false;
        }

        //按钮默认事件
        var btnFunction = function(flag, callback){
            if(flag){
                _hide();
                _removeBind();
                return false;
            }
            //callback.call(this);
        };
        return this;
    };

    /*"function" == typeof define ? define(function() {
        return tipDialog;
    }) : "undefined" != typeof exports ? module.exports = tipDialog : window.tipDialog = tipDialog;*/

    window.tipDialog = tipDialog;
    //作为SYST框架的模块
    if(window.SYST){
        SYST.tipDialog = tipDialog;
    }

}).call(this);


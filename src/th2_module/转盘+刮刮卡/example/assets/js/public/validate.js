/**
 * Created with JetBrains WebStorm.
 * User: EX-LUOYONG002 （Rodey -- www.senuu.com）
 * Date: 14-1-17
 * Time: 下午4:51
 * To change this template use File | Settings | File Templates.
 */
/**
 * 验证模块
 */
define(['SYST'], function(SYST){

    var Validate = {
        /**
         * 验证登录手机号
         * @param mobile
         * @returns {boolean}
         */
        velidateMobile: function( mobile, options){
            var msg = (options && options['msg']) || '手机号';
            if(SYST.V.isEmpty(mobile)){
                this.errorTip( msg + '不能为空');
                return false;
            }
            else if(!/^\d{11}$/g.test(mobile) && mobile.length !== 11){
                this.errorTip(msg + '长度不对');
                return false;
            }
            else if(!/^1[3|4|5|7|8]{1}[\d]{9}/g.test(mobile)){
                this.errorTip('请填写有效的'+ msg +'码');
                return false;
            }else{
                return true;
            }
        },

        /**
         * 验证密码
         * @param password
         * @returns {boolean}
         */
        velidatePassword: function(target, password, options){
            if('' == password){
                this.errorTip(target, true, options['msg'] + '不能为空');
                return false;
            }else if(password.length < (options['min'] || 6) || password.length > (options['max'] || 12)){
                this.errorTip(target, true, options['msg'] + '应为6 ~ 12位');
                return false;
            }else{
                if(!SYST.V.isEmpty(options) && !SYST.V.isEmpty(options['val2']) && password !== options['val2']){
                    this.errorTip(target, true, '两次密码不一致');
                    return false;
                }
                this.errorTip(target, false);
                return true;
            }
        },

        /**
         * 验证验证码
         * @param target
         * @param code
         */
        velidateCode: function(target, code, options){
            if(!options) return;
            var msg = (options['msg'] || '密码'),
                len = options['length'] || 4;
            if(SYST.V.isEmpty(code)){
                this.errorTip(target, true, msg + '不能为空');
                return false;
            }else if(code.length !== len){
                this.errorTip(target, true, msg + '有误');
                return false;
            }else{
                this.errorTip(target, false);
                return true;
            }
        },

        /**
         * 验证零售商许可证号
         * @param target
         * @param code
         */
        velidateCardNum: function(target, code){
            if(SYST.V.isEmpty(code)){
                this.errorTip(target, true, '许可证号不能为空');
                return false;
            }else{
                this.errorTip(target, false);
                return true;
            }
        },
        /**
         * 提示
         * @param target 显示提示语的元素（id或对象）
         * @param flag   显示类型, true: 显示错误信息；false: 显示正常的信息
         * @param msg    提示语
         */
        /*errorTip: function(target, flag, msg){
            var flag = flag === false ? false : true;
            var target = ('object' === typeof(target)) ? $(target) : $('#' + target.replace('#', ''));
            (flag === true) ? target.html(msg) : target.removeClass('error-tip').html('');
        },*/
        errorTip: function(msg){
            var self = this;
            tipDialog({
                type: '',
                msg: msg || '手机号码有问题！',
                autoClose: false,
                lockTouch: true,
                btnOk: {
                    val: '确认',
                    style: '',
                    call: function(){

                    }
                },
                btnCancel: null
            });
        },

        /**
         * 针对请求按钮做加载进度设置
         * @param target
         * @param flag
         */
        rsDom: function(target, flag){
            flag === true ?
                (function(){
                    target.removeClass('btn-usable').addClass('btn-gray');
                    $('#loading').addClass('loading');
                })()
                :
                (function(){
                    target.removeClass('btn-gray').addClass('btn-usable');
                    $('#loading').removeClass('loading');
                })();

        },

        inputFocus: function(evt){
            evt.stopPropagation();
            var target = evt.currentTarget || evt.target;
            if(target.classList.item('error-tip')){
                target.classList.remove('error-tip');
            }
        },

        //倒计时
        timeout: function(time, id, text, callback){
            var self = this, dom = $('#' + id.replace('#', ''));
            dom.addClass('disabled');
            this.stin = window.setInterval(function(){
                if(0 > time){
                    window.clearInterval(self.stin);
                    self.stin = null;
                    (callback && SYST.V.isFunction(callback)) && callback();
                    dom.removeClass('disabled').html(text || '获取验证码');
                    return;
                }
                dom.html(time + 's');
                time--;
            }, 1000);
        },
        //清除倒计时
        removeTimeout: function(id, text, callback){
            if(this.stin){
                window.clearInterval(this.stin);
                this.stin = null;
                callback && ( (callback && SYST.V.isFunction(callback)) && callback() );
                id && ( $('#' + id).removeClass('disabled').html(text || '获取验证码') );
            }
        },

        //注册和找回密码共用的验证方法
        verProving: function(){
            var username = $('#username').val(),
                imgCode = SYST.T.trim($('#img-code').val()),
                mbCode = SYST.T.trim($('#mobile-code').val());
            //验证手机号
            if(!this.velidateMobile('username-tip', username)){
                return false;
            }
            //验证图形验证码...先屏蔽
            if(!this.velidateCode('img-code-tip', imgCode, { msg: '图形验证码', length: 4 })){
                return false;
            }
            //验证短信验证码
            if(!this.velidateCode('mobile-code-tip', mbCode, { msg: '短信验证码', length: 6 })){
                return false;
            }

            return true;

        },
        //验证密码
        verPassword: function(){
            var password = SYST.T.trim($('#password').val()),
                password2 = SYST.T.trim($('#password2').val());
            //验证密码
            if(!this.velidatePassword('pwd-tip', password, { msg: '密码' })){
                return false;
            }

            if(!this.velidatePassword('pwd2-tip', password2, { msg: '确认密码' })){
                return false;
            }

            if(!this.vEqualPassword(password, password2, 'pwd2-tip', '两次密码不一致')){
                return false;
            }

            return true;
        },

        //验证两次密码是否相等
        vEqualPassword: function(password, passwrod2, tipId, tipText){
            if(!SYST.V.isEmpty(password) && !SYST.V.isEmpty(passwrod2) && password !== passwrod2){
                this.errorTip(tipId, true, tipText || '两次密码不一致');
                return false;
            }
            return true;
        },

        //正在提交
        submiting: function(target, flag){
            var target = SYST.V.isString(target) ? $('#' + target) : target;
            if(true === flag){
                target.addClass('disabled').find('.text').hide();
                target.find('.loading').show();
            }else{
                target.find('.loading').hide();
                target.removeClass('disabled').find('.text').show();
            }
        },

        //设置图片验证码
        setImageCode: function(src, evt, errCallBack){
            var sImageCode = $('#scode-img'),
                timeStamp = Date.now() + this.getRandomStr(4);
            sessionStorage.setItem('_timeStamp_', timeStamp);

            if(evt && evt.currentTarget){
                sImageCode.attr('src', '');
            }
            sImageCode.addClass('loading');
            var self = this,
                imgSrc = src + '?timeStamp=' + timeStamp,
                image = new Image();

            image.onload = function(){
                sImageCode.removeClass('loading');
                sImageCode.attr('src', imgSrc);
            };
            image.oncomplate = image.onerror = function(){
                sImageCode.attr('src', '');
                sImageCode.removeClass('loading');
                (errCallBack && SYST.V.isFunction(errCallBack)) && errCallBack();
            };
            image.src = imgSrc;
        },

        inputBlur: function(evt){
            var self = this, target = evt.currentTarget || evt.target,
                id = target.id, value = target.value;
            /*if('username' === id){
                this.velidateMobile('username-tip', value);
                return false;
            }*/
            if('password' === id){
                this.velidatePassword('pwd-tip', value, { msg: '密码' });
                return false;
            }
            if('password2' === id){
                this.velidatePassword('pwd2-tip', value, { msg: '确认密码' });
                return false;
            }
            /*if('img-code'){
                this.velidateCode('img-code-tip', value, { msg: '图形验证码', length: 4 });
                return false;
            }
            if('mobile-code'){
                this.velidateCode('mobile-code-tip', mbCode, { msg: '短信验证码', length: 6 });
                return false;
            }*/
        },

        //生成随机字符串
        getRandomStr: function(len){
            var str = 'abcdefghijklmnopqrstuvwxyz', l = str.length, s = [], i = 0;
            for( ; i < len; ++i)
                s.push(str[Math.round(Math.random() * l)]);
            return s.join('');
        }

    };

    return Validate;
});

/**
 * Created by Rodey on 2015/7/23.
 * Share plugin （微信、新浪微博、QQ空间）
 */

;!(function(){
    'use strict';

    var tpl = '<div class="share-alert" id="share-alert" style="display: block;">' +
                '<div class="share-alert-wrap">' +
                    '<h3 class="share-alert-title">分享到<i class="close">&#10005;</i></h3>' +
                    '<div class="share-list">' +
                        '<a class="share-list-item weixin" data-handler="weixin" herf="javascript:void(0);"><i class="icon icon-weixin"></i></a>' +
                        '<a class="share-list-item sina-wb" data-handler="sina" herf="javascript:void(0);"><i class="icon icon-sina-wb"></i></a>' +
                        '<a class="share-list-item qzone" data-handler="qzone" herf="javascript:void(0);"><i class="icon icon-qzone"></i></a>' +
                    '</div>' +
                '</div>' +
              '</div>';


    var handlers = {
        weixinShare: function(url){

        },
        sinaShare: function(url){
            window.location.href = url || 'http://service.weibo.com/share/share.php';
            return false;
        },
        qzoneShare: function(url){
            window.location.href = url || 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey';
            return false;
        }
    };



    var shareDialog = function(options){

        var opts = options;

        var mask = $('#share-mask-0');
        if(!mask[0]){
            mask = (function(){
                var frame = document.createDocumentFragment();
                var div = document.createElement('div');
                div.setAttribute('id', 'share-mask-0');
                div.classList.add('share-mask-0');
                frame.appendChild(div);
                return $(div);
            })();
            mask.html(tpl);
            $('body').append(mask);
        }else{
            !$('#share_alert')[0] && mask.html(tpl);
        }

        mask.show();

        var weixin = mask.find('a.weinxin'),
            sian = mask.find('a.sina'),
            qzone = mask.find('a.qzone'),
            box = mask.find('#share-alert'),
            items = mask.find('.share-list-item'),
            closeBtn = mask.find('.close');

        closeBtn.on('touchend', _hide);
        mask.on('touchend', _hide);
        function _hide(evt){
            //mask.fadeOut('fast', function(){
                mask.hide();
                mask.removeClass('weixin-repx');
                box.css('display', 'block');
            //});
            closeBtn.off('touchend', _hide);
            mask.off('touchend', _hide);
            evt.preventDefault();
            evt.stopPropagation();
            return false;
        }

        //share
        items.on('touchend', shareHandler);

        function shareHandler(evt){
            var target = evt.currentTarget || evt.target,
                handler = target.getAttribute('data-handler');
            if(handler === 'weixin'){
                box.hide();
                mask.addClass('weixin-repx');
                return false;
            }
            handlers[handler + 'Share']((opts && opts[handler]) || null);
        }

    };

    window.shareDialog = shareDialog;

})();

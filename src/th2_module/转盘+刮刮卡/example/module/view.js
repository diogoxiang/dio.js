/**
 * Created by Rodey on 2015/8/7.
 */

define(['appModel'], function (appModel) {

    var appView = SYST.View({
        name: '__ view __',
        model: appModel,
        events: {
            'click #top-header>.icon-home'        : 'goHome',
            'click #top-header>.icon-return'      : 'goBack'
            //'touchend #top-header>.icon-exit'        : 'goExit'
        },
        init: function () {
            this.getLocas();

            //获取导航列表
          /*  this.getMenuList();*/
            //导航事件触发
            this.initMenuEvent();
            //IOS 和 Android滚动设置
            //SYST.N.isAndroid && this.setScroller();
        },

        getLocas: function(){
            //获取指定参数，判断活动是否需要验证 check: 0:不需要验证；1:需要验证
            this.check = this.model.getItemForKey('check');
            //对应的二维码是否有验证码  existPwd: 0: 无验证码；1:有验证码
            this.existPwd = this.model.getItemForKey('existPwd');
            //二维码是否已验证
            this.isCheck = this.model.getItemForKey('isCheck');
            //是否已经领取（已抽奖：[已领奖、未领奖]、未抽奖）
            this.winId = this.model.getItemForKey('winId');
            //是否已登录
            this.logined = this.model.getItemForKey('logined');
        },

        //设置滚动(Android兼容)
        setScroller: function(){
            var self = this;
            //在APP外面包一层，作为scroller
            var scrollElement = document.createElement('div');
            scrollElement.setAttribute('id', 'scroller');
            scrollElement.setAttribute('class','scroller-app');
            document.body.appendChild(document.createDocumentFragment().appendChild(scrollElement));
            scrollElement.appendChild(document.querySelector('#app'));

            if(iScroll){
                App.iscroller = new iScroll('scroller', {
                    vScroll: true,
                    hScroll: false,
                    //useTransition: false,
                    onBeforeScrollStart: function(evt){
                        //evt && evt.preventDefault();
                        return false;
                    },
                    onScrollEnd: function(evt){
                        //evt && evt.preventDefault();
                        return false;
                    }
                });
            }

        },

        /**
         * 页面滑动开关控制
         * @param flag  true: 开启；false: 关闭
         */
        switchScroller: function(flag){
            (SYST.N.isAndroid && App && App.iscroller) && (function(){
                App.iscroller.enabled = (!flag ? false : true);
                App.iscroller.refresh();
            })();
        },

        /**
         * 刷新滚动iscroller
         */
        refreshScroller: function(){
            (SYST.N.isAndroid && App.iscroller) && App.iscroller.refresh();
        },

        //获取导航列表
        getMenuList: function(){
            var self = this, menu = this.model.getItem('_navList_', true);
            /*if(!SYST.V.isEmpty(menu)){
                this.appendNavs(menu);
                return false;
            }*/
            var postData = { status: 1 };
            this.model.getMenuList(postData, function(res){
                if(200 == res.code && SYST.V.isArray(res.data)){
                    var data = self.formatNavs(res.data);
                    self.appendNavs(data);
                    self.model.setItem('_navList_', data, true);
                }
            });
        },

        /**
         * 将导航插入到dom中
         * @param navs
         */
        appendNavs: function(navs){
            var data = navs, i = 0, len = data.length, ns = '', item, icon, url, name;
            for( ; i < len; ++i ){
                item = data[i];
                icon = item['icon'] || '';
                url  = item['url'] || '';
                name = item['name'] || '';
                ns += '<a class="nav-verify icon '+ icon +'" data-href="'+ url +'" href="javascript:void(0);"><span>'+ name +'</span></a>';
            }
            $('#nav').html(ns);
        },

        formatNavs: function(data) {
            //alert(data);
            var rs = [], item, i = 0, len = data.length;
            for( ; i < len; ++i){
                item = data[i];
                rs.push({ icon: item['icon'], url: item['url'], name: item['name'] });
            }
            return rs;
        },

        //菜单导航事件
        initMenuEvent: function (){
            var self = this;

            //导航控制
            this.navSwitch();
            //导航菜单跳转
            this.navAction();

        },

        //控制导航显示
        navSwitch: function(){
            var self = this;
            $('#navigate-btn').on('click', function(evt){
                var target = evt.currentTarget || evt.target;
                evt.preventDefault();
                if($('body').hasClass('active')){
                    $('body').removeClass('active');
                }else{
                    $('body').addClass('active');
                }
                return false
            });

            $('body').on('click', function(evt){
                if($(this).hasClass('active')){
                    evt.preventDefault();
                    this.classList.remove('active');
                    return false;
                }
            });

        },
        //控制导航菜单跳转
        navAction: function(){
            var self = this;
            $('body').delegate('#nav>a', 'click', function(evt){
                //console.log(evt.currentTarget);
                var target = evt.currentTarget || evt.target,
                    href = target.getAttribute('data-href');
                evt.preventDefault();

                switch (href){
                    case 'member.html':
                        self.checkLogined(href);        break;//这里判断用户是否已登录
                    //case 'verify.html':
                    //    self.checkVerify(href);         break;//如果是验真防伪，则需要判断有验证码和无验证码
                    //case 'active.html':
                    //    self.checkActive(href);         break;//如果是活动中心
                    default:
                        window.location.href = href;
                        return false;
                        break;
                }

            });
        },

        checkLogined: function(url){
            //获取更新的本地数据
            this.getLocas();
            if(SYST.V.isEmpty(this.logined) || this.logined != 1){
                window.location.href = 'login.html';
            }else{
                window.location.href = url;
            }
            return false;
        },
        checkVerify: function(url){
            //获取更新的本地数据
            this.getLocas();
            var href = '';
            if(this.existPwd && 1 == this.existPwd){
                href = 'verify.html?existPwd=' + this.existPwd;
            }else{
                href = 'verify_shark.html?existPwd=' + this.existPwd;
            }
            window.location.href = href;
            return false;
        },

        //判断活动属性----????---之后可能会放到活动列表页面去
        checkActive: function(url){
            //获取更新的本地数据
            this.getLocas();

            //如果需要验证，则先跳转到验证页面 0:不验证；1:验证
            if(!SYST.V.isEmpty(this.check) && '0' === this.check){
                //不需要参与验证，直接跳到抽奖页面
                this.isChecked();
                return false;
            }

            //验证二维码是否已经验证过了 0: 未验证过；1:已经验证过
            if(!SYST.V.isEmpty(this.isCheck) && '1' === this.isCheck) {
                this.isChecked();
                return false;
            }

            //验证也分：0:无验证码；1:有验证码
            if (!SYST.V.isEmpty(this.existPwd) && '0' === this.existPwd) {
                //无验证码，跳到摇一摇验真页面
                window.location.href = 'verify_shark.html?active=active';
            } else {
                //有验证码，跳到输入验证码页面
                window.location.href = 'verify.html?active=active';
                return false;
            }

        },

        /**
         * 验证是否已经抽奖
         * @returns {boolean}
         */
        isChecked: function(){
            var self = this;
            //获取更新的本地数据
            this.getLocas();

            //获取server同步数据
            this.checkActivity();

        },

        //判断抽奖状态跟领奖状态
        checkActivity: function(){
            var self = this,
                postData = {};
            this.model.checkActivity(postData, function(res){
                if(res.code === 200)
                    self.checkActivitySuccess(res);
                else if(res.code === 2001) //已抽奖，未领奖
                    self.jumpToUnaward(res.data);
                else
                    self.checkActivityError(res);

            }, this.checkActivityError.bind(this));
        },
        //成功回调
        checkActivitySuccess: function(res){
            var data = res.data, winId = data && data.winId;
            if(!SYST.V.isEmpty(winId)){
                if(winId === '0'){
                    //已经领取
                    window.location.href = 'active_draw_tip.html?code=2006';
                }else if(winId === '-1'){
                    //未中奖
                    window.location.href = 'active_draw_tip.html?code=2005';
                }else{
                    //已抽奖未领取
                    var params = SYST.T.paramData({
                        neckCode: 2001,
                        winId: winId,
                        prizeType: data['prizeType'],
                        prizeName: data['prizeName'],
                        prizeValue: data['prizeValue']
                    }, true);
                    window.location.href = 'active_neck.html' + params;
                }
                return false;
            }
            window.location.href = 'active_take.html';
            return true;
        },
        //失败回调
        checkActivityError: function(res){
            if(res.code){
                window.location.href = 'active_draw_tip.html?code=' + res.code;
                return false;
            }
        },
        //有未领取的奖项
        jumpToUnaward: function(data){
            //一种是url带参，另一种是放到本地缓存
            var params = { neckCode: 2001, winId: data.winId, prizeType: data.prizeType, prizeName: data.prizeName, prizeValue: data.prizeValue };
            window.location.href = 'active_neck.html' + SYST.T.paramData(params, true);
            return false;
        },

        //返回首页
        goHome: function(evt){
            evt.preventDefault();
            window.location.href = 'main.html';
            return false;
        },

        //返回上一页
        goBack: function(evt){
            evt.preventDefault();
            window.history.back();
            return false;
        },

        //退出账号
        goExit: function(evt){
            evt.preventDefault();
            //清除本地缓存，（如果有退出接口，则调用退出接口）
            this.model.removeItem('_logined_');
            this.model.removeItem('_logined_', true);
            SYST.T.Cookie('_logined_', null);
        }

    });

    return appView;

});
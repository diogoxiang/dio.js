;(function() {
    window.App = window.App || new Object();
    /**
     * 常量定义
     */
    App.IS_DEBUG = false;

    //短信发送间隔时间
    App.sendTime = 60;

    // 服务器地址
    var webServiceUrls = {};
    var hosts = {
        //活动 cloud2.activity.api
        //active  : 'http://192.168.1.24:8082/cloud2.activity.api/',
        active  : 'http://192.168.0.101:44182/cloud2.activity.api/',
        //产品 cloud2.product.api
        //product : 'http://192.168.1.24:8082/cloud2.product.api/',
        product : 'http://192.168.1.24:44182/cloud2.product.api/',
        //二维码 cloud2.barcode.api
        //barcode : 'http://192.168.1.24:8082/cloud2.barcode.api/',
        barcode : 'http://192.168.1.24:44082/cloud2.barcode.api/',
        //权限 cloud2.sap.api
        //sap     : 'http://192.168.1.24:8082/cloud2.sap.api/',
        sap     : 'http://192.168.1.24:44182/cloud2.sap.api/',
        //会员 cloud2.member.api
        //member  : 'http://192.168.1.24:8084/cloud2.member.api/',
        member  : 'http://192.168.1.24:44182/cloud2.member.api/',
        //短信服务
        //sms     : 'http://192.168.1.24:8084/cloud2.sms/',
        sms     : 'http://192.168.1.24:44091/cloud2.sms/'
    };
    App.testEnv = ''; // 强制使用某个环境(测试用),默认就设置为空

    if(App.testEnv == 'stg' || App.testEnv == 'prd' || App.testEnv == ''){
        //测试环境
        App.ServerHost = hosts;

    }else if(App.testEnv == 'int'){
        //开发环境
        var host = 'http://192.168.1.24:8084/';  //（xxx）
        for(var k in hosts){
            if(hosts.hasOwnProperty(k)){
                //将host：port转换成指定的
                hosts[k] = matchHost(hosts[k], host);
            }
        }
        App.ServerHost = hosts;

    }else if(App.testEnv == 'local'){
        //本地环境
        var ma = (location.pathname.match(/[\w-]+.(html|do|action)/gi))[0];
        href = origin + '/' + location.pathname.replace(ma, '');
        App.ServerHost = href;
        // 会员登陆验证
        webServiceUrls = {
            //测试接口用
            test                : 'localData/test.json'
        };
    }

    // api接口地址
    webServiceUrls = {
        //获取导航菜单配置项
        getMenuList                 : App.ServerHost['active'] + 'app/menu/queryAppMenuSelectByAppId',

        /* -------------验证相关--------------- */
        verify                      : App.ServerHost['barcode'] + 'barcode/orderCheck/check',

        /* -------------活动相关--------------- */
        //抽奖接口
        lottery                     : App.ServerHost['active'] + 'market/drwaLottery/doDrwaLottery',
        //领奖接口
        neckAward                   : App.ServerHost['active'] + 'market/win/award',

        /* -------------产品相关--------------- */
        //获取产品分类
        getProductCateList          : App.ServerHost['active'] + 'app/menu/queryProductCategoryList',
        //获取产品分类详情
        getProductCate              : App.ServerHost['product'] + 'category/queryCategoryById',
        //获取分类下的产品列表
        getProductList              : App.ServerHost['active'] + 'app/menu/queryFrontEndProductList',
        //获取产品详情
        getProduct                  : App.ServerHost['product'] + 'product/product/showProduct',
        //获取产品动态属性
        getProductProp              : App.ServerHost['product'] + 'product/propertyset/queryProListByProsetId',

        /* -------------资讯相关--------------- */
        //获取咨询分类
        getNewsCategoryList         : App.ServerHost['active'] + 'app/menu/queryNewsCategoryList',
        //获取咨询列表
        getNewsList                 : App.ServerHost['active'] + 'app/menu/queryFrontEndNewsList',
        //获取咨询详情
        getNewsDetails              : App.ServerHost['product'] + 'news/queryNews',

        /* -------------评分相关--------------- */
        //获取总平均分
        getGradeAvg                 : App.ServerHost['product'] + 'evalueteInfo/queryTotalAvgValue',
        //获取总评分人数
        getGradePersonTotal         : App.ServerHost['product'] + 'evalueteInfo/queryTotalEevaluete',
        //获取评分项详情
        getGradeList                : App.ServerHost['product'] + 'evalueteInfo/queryScoreNameAndAvgValue',
        //提交评分
        setGrade                    : App.ServerHost['product'] + 'evalueteInfo/createEvalueteInfoAndScore',

        /* -------------会员中心--------------- */
        //获取图形验证码
        getImageCode                : App.ServerHost['member'] + 'member/userInfo/identifyingCode',
        //验证图形验证码
        verifyImageCode             : App.ServerHost['member'] + 'member/userInfo/verifyCode',
        //注册
        register                    : App.ServerHost['member'] + 'member/userInfo/register',
        //获取历史消息列表
        login                       : App.ServerHost['member'] + 'member/userInfo/login',
        //退出
        logout                      : App.ServerHost['member'] + 'member/userInfo/logout',
        //修改密码
        modPassword                 : App.ServerHost['member'] + 'member/userInfo/setPwd',
        //获取用户信息
        getCurLoginUser             : App.ServerHost['member'] + 'member/userInfo/getCurLoginUser',
        //验证手机号是否被注册
        checkPhone                  : App.ServerHost['member'] + 'member/userInfo/checkPhone',
        //验证专卖店
        checkCardNum                : App.ServerHost['member'] + 'member/userInfo/checkCardNum',
        //获取总积分
        getCountPoint               : App.ServerHost['member'] + 'member/userPoint/countPoint',
        //获取总话费
        getCountCalls               : App.ServerHost['member'] + 'member/userGain/sumCalls',
        //使用话费(充值)
        useCalls                    : App.ServerHost['member'] + 'member/userGain//useCalls',
        //领奖记录
        getDrawNotes                : App.ServerHost['member'] + 'member/userGain/list',
        //找回密码或修改密码
        setPassword                 : App.ServerHost['member'] + 'member/userInfo/setPwd',
        //发送短信验证码
        sendMCode                   : App.ServerHost['sms'] + 'sms/sendMessage.do',

        //测试用
        test                        : 'localData/test.json'

    };

    //更具key获取api地址
    App.webServiceUrls = webServiceUrls;
    App.getWebServiceUrl = function(name, host) {
        //return (host || App.ServerHost) + webServiceUrls[name];
        if(host){
            return matchHost(webServiceUrls[name], host);
        }
        return webServiceUrls[name];
    };

    //环境变化时，统一更改指定地址(host:port)
    function matchHost(rhost, host){
        return host + rhost.replace(rhost.split('cloud2')[0], '');
    }

}).call(this);

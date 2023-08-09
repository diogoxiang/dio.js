/**
 * Created with JetBrains WebStorm.
 * User: Rodey
 * Date: 15-6-16
 * Time: 下午1:06
 * To change this template use File | Settings | File Templates.
 */

//document.getElementById('app').style['height'] = document.documentElement.clientHeight + 'px';

require.config({
    baseUrl : '',
    shim : {
        'Zepto'         : { exports : '$' },
        'arttemplate'   : { exports : 'template' },
        'SYST'          : { deps: ['Zepto'] },
        'tipDialog'     : { deps: ['Zepto'] }
    },
    paths : {
        text            : 'assets/js/require/text.min',
        Zepto           : 'assets/js/zepto/zepto.min',
        FastClick       : 'assets/js/zepto/fastclick',
        artTemplate     : 'assets/js/art/artTemplate/arttemplate',
        iScroll         : 'assets/js/iscroll/iscroll.min',
        //server          : 'assets/js/config/server',
        //server          : '../config',
        SYST            : 'assets/js/SYST/SYST.min',
        APPDateField    : 'assets/js/plugins/APPDateField/APPDateField.min',
        tipDialog       : 'assets/js/plugins/tipDialog/tipDialog.min',
        ShareDialog     : 'assets/js/plugins/shareDialog/shareDialog.min',
        Validate        : 'assets/js/public/validate',
        Timeouter       : 'assets/js/public/timeouter',
        CircleChart     : 'assets/js/public/circleChart.min',
        Swiper          : 'assets/js/plugins/swiper/swiper.min',
        avalon          : 'assets/js/avalon/avalon.shim',
        Shark           : 'assets/js/plugins/shark/shark.min',
        Plugins         : 'assets/js/plugins',
        areaJs          : 'assets/js/public/area',
        dial            : 'assets/js/dial/dial',
        scratch         : 'assets/js/scratch/scratch'
    }
});
//引入公共js模块
define(['Zepto', 'SYST', 'tipDialog'], function($, SYST){

    require(['FastClick'], function(FastClick){
        FastClick.attach(document.body);
    });

    //定位当前页面
    var page = location.href.match(/[\w\d_-]+(.do|.html)/ig);
    var currentPage = page ? page.join().match(/[\w\d_-]+/ig)[0] : "index";
    var module = $('script[data-module]').attr('data-module') || 'module/' + currentPage;

    // 模块自动解析，以便引入时使用 ( 使用此功能需要 html文件名 和 js文件夹的名称相同,区分大小写 )
    require.config({
        paths : {
            appModel            : 'module/model',
            appController       : 'module/controller',
            appView             : 'module/view',
            currentModule       : module + '/',
            currentModel        : module +'/model',
            currentController   : module +'/controller',
            currentView         : module +'/view',
            currentTemplate     : module +'/template'
        }
    });

    //初始化页面内容
    autoLoad();
    //重置页面高度（移动端渲染问题，会被浏览器下部导航遮盖）
    document.documentElement.style.height = window.innerHeight + 'px';

    //自动加载入口文件
    function autoLoad(){
        //根据设备平台判断是否需要引入iScroll
        if(!SYST.N.isIos){
            $('body').addClass('android');
            require(['iScroll'], function(iScroll){
                loadRequire();
            });
        }else{
            $('body').addClass('ios');
            loadRequire();
        }
    }
    //根据在script标签上配置的属性值来进行加载
    function loadRequire(){

        //如果有指定的app存在，则引入指定的app入口
        if($('script[data-app]').attr('data-app')){
            require([$('script[data-app]').attr('data-app')]);
        }
        //不需要引入
        if('no' === $('script[data-view]').attr('data-view') ){
            require(['appView']);
            return false;
        }
        else if($('script[data-view]').attr('data-view')){
            //如果有指定的视图入口，则引入
            require(['appView', $('script[data-view]').attr('data-view')]);
        }else{
            //自动引入与文件名对应的视图
            require(['appView', 'currentView']);
        }

    }

});


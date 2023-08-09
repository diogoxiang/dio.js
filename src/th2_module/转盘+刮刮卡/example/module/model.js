/**
 * Created by Rodey on 2015/7/20.
 */

define([], function(){

    var appMpdel = SYST.Model({
        name: '__ xlongyun Model __',
        init: function(){
            //全局ajax请求方式
            this.type = 'GET';

        },

        /*--------------------------------------- 获取导航菜单配置列表 ----------------------------------------*/
        //抽奖

        //根据key获取本地存储对应的值
        getItemForKey: function(key){
            var k = '_' + key.replace(/^_|_$/gi, '') + '_';
            return  window.localStorage.getItem(k) || window.sessionStorage.getItem(k) || SYST.T.Cookie(k) || SYST.T.getParams(key);
        },

        //合并接口共需请求参数
        concatPostData: function(data){
            var postData = data;
            //企业ID
            postData['barcode'] = this.getItemForKey('barcode');        //二维码
            return postData;
        },
        checkLottery: function(postData, su, fail){
            this.doServer(App.getWebServiceUrl('checkLottery'), postData, su, fail);
        },
        getPrize: function(postData, su, fail){
            this.doServer(App.getWebServiceUrl('getPrize'), postData, su, fail);
        },
        getJzb: function(postData, su, fail){
            this.doServer(App.getWebServiceUrl('getJzb'), postData, su, fail);
        },
        //将合并接口共需后请求封装
        doServer: function(url, postData, su, fail){
            var data = this.concatPostData(postData);
            this.doAjax(url, data, su, fail, { type: this.type });
        }
    });

    return appMpdel;

});

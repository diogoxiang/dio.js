/**
 * Created by bawuzhan on 2016/12/5.
 */
//适配
if (document.documentElement.clientWidth / document.documentElement.clientHeight > 0.76) {
    viewWidth = Math.round(document.documentElement.clientHeight / 416 * 320);
    viewScale = viewWidth / 640;
} else {
    viewScale = document.documentElement.clientWidth / 640;
};
document.documentElement.style.fontSize = 100 * viewScale + 'px';

console.log(viewScale);
//禁止用户更改字号
(function(){
    if (typeof(WeixinJSBridge) == "undefined") {
        document.addEventListener("WeixinJSBridgeReady", function (e) {
            setTimeout(function(){
                WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {
                    // alert(JSON.stringify(res));
                });
            },0);
        });
    } else {
        setTimeout(function(){
            WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {
                // alert(JSON.stringify(res));
            });
        },0);
    }
})();
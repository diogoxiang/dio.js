/**
 * Created by lam on 2016/8/4.
 */

define(['scratch'], function (scratch) {

    var indexView = SYST.View({
        name: '__ indexView __',
        events: {

        },
        init: function () {
            //刮刮卡
            $("body").on('touchmove',function(e) {
                e.preventDefault();
            });
            $("body").on('touchstart',function(e) {
                e.preventDefault();
            });
            var width = $("body").width(),height = $("body").height();
            $("#myCanvas").attr("width",width);
            $("#myCanvas").attr("height",height);
            /*scratch({
                dom:'myCanvas',
                width:width,
                height:height,
                color:"#CCC",
                initx:0,
                inity:0,
                bg:'img',
                area:10,
                callback:function(){

                }
            });*/
            /*scratch({
                dom:'myCanvas',
                width:width,
                height:height,
                color:"#CCC",
                initx:0,
                inity:0,
                bg:'img',
                area:10,
                callback:function(){
                    alert('小伙子，你刮了很多了!');
                },
                font:"bold 16px Helvetica",
                text:"这是一个测试!",
                fontColor:"#FFF",
                textAlign:"center",
                fontx:100,
                fonty:100
            });*/
            /*scratch({
                dom:'myCanvas',
                width:width,
                height:height,
                img:"./assets/images/beautiful.jpg",
                initx:0,
                inity:0,
                bg:'img',
                area:10,
                callback:function(){
                    console.log(1);
                }
            });*/
            scratch({
             dom:'myCanvas',
             width:width,
             height:height,
             img:"./assets/images/beautiful.jpg",
             initx:0,
             inity:0,
             bg:'img',
             area:10,
             callback:function(){
             console.log(1);
             },
                font:"bold 16px Helvetica",
                text:"啦啦啦，这是一个测试!",
                fontColor:"#FFF",
                textAlign:"center",
                fontx:100,
                fonty:100
             });
        }


    });

    return {};

});
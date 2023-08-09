/**
 * Created by miki on 2015/7/24.
 */

define([], function(){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var W = canvas.width;
    var H = canvas.height;
    var deg=0,dif=0;
    var loop,re_loop;
    var text,text_w, new_deg, callback;

    var circleProgress = {
        start: function(cb){
        	clearInterval(loop);
        	loop = null;
            circleProgress.init();
            circleProgress.draw(360);
            callback = cb;

        },
        init: function(){
            ctx.clearRect(0,0,W,H);
            ctx.beginPath();
            ctx.strokeStyle="#0a2d4e";
            ctx.lineWidth=10;
            ctx.arc(W/2,H/2,70,0,Math.PI*2,false);
            ctx.stroke();

            var r = deg*Math.PI/180;
            ctx.beginPath();
            ctx.strokeStyle = "#3779c4";
            ctx.lineWidth=10;
            ctx.arc(W/2,H/2,70,1.5*Math.PI,r-0.5*Math.PI,false);
            ctx.stroke();

            ctx.fillStyle="#3779c4";
            ctx.font="20px Arial";
            text = Math.floor(deg/360*100)+"%";
            text_w = ctx.measureText(text).width;
            ctx.fillText(text,W/2 - text_w/2,H/2);
        },

        to: function(new_deg){
            var _deg = new_deg;
            if(_deg>=360)       deg=359.9;
            if(deg>=360)        deg=359.9;
            if(deg >= _deg)     circleProgress.end();
            if(deg<_deg)        deg++;
            circleProgress.init();
        },
        draw: function(new_deg){
            dif = new_deg-deg;
            loop = setInterval(function(){
                circleProgress.to(new_deg);
            },1000/dif);
        },
        end: function(){
            clearInterval(loop);
            loop = null;
            callback && callback.call(this);
        }
    };

    return circleProgress;

});

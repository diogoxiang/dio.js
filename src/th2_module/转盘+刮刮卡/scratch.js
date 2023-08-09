/**
 * Created with JetBrains WebStorm.
 * User: lam
 * Time: 2016/8/4
 * 使用时，被canvas遮住的部分需要设置visibility:hidden;否则渲染的时候会出现问题;并且要注意手机横竖屏切换的问题
 */

define(['Zepto'], function($){
    var scratch = function(options){

        //创建默认选项
        var defaults = {
            dom:"",//canvas的id
            width:"",//canvas的宽度
            height:"start",//canvas的高度
            color:"",//canvas覆盖的颜色（可选）
            img:"",//canvas覆盖的图片（可选）
            initx:0,//颜色和图片覆盖初始点的X坐标
            inity:0,//颜色和图片覆盖初始点的y坐标
            bg:"",//要被canvas遮住的部分的id
            area:"",//用户刮了多少面积之后触发回调函数
            callback:"",//回调函数
            font:"",//字体的大小设置等，如：bold 16px Helvetica
            text:"",//要显示的文字,（可选）
            fontColor:"",//要显示的文字的颜色
            textAlign:"center",//要显示的文字的text-align，如：center
            fontx:0,//开始绘制文本的 x 坐标位置（相对于画布）。
            fonty:0,//开始绘制文本的 y 坐标位置（相对于画布）。
            maxWidth:""//可选。允许的最大文本宽度，以像素计。
        };

        if(options){
            for(var k in options){
                if(options.hasOwnProperty(k)){
                    defaults[k] = options[k];
                }
            }
        };
        var width = defaults['width'],
            height = defaults['height'],
            initx  = defaults['initx'],
            inity = defaults['inity'],
            callback = defaults['callback'];
        //设置canvas的宽和高
        $('#'+defaults['dom']).attr("width",width);
        $('#'+defaults['dom']).attr("height",height);

        var c=document.getElementById(defaults['dom']);
        var ctx=c.getContext("2d");
        ctx.beginPath();
        if(defaults['color']){
            //设置填充的颜色
            ctx.fillStyle = defaults['color'];
            ctx.fillRect(initx, inity, width, height);
            $('#'+defaults['bg']).css('visibility','visible');
            if(defaults['text']) {
                ctx.font = defaults['font'];
                ctx.fillStyle = defaults['fontColor'];
                ctx.textAlign = defaults['textAlign'];
                defaults['maxWidth'] ? ctx.fillText(defaults['text'],defaults['fontx'],defaults['fonty'],defaults['maxWidth']) : ctx.fillText(defaults['text'],defaults['fontx'],defaults['fonty']);
                ctx.fill();
            }
        }else{
            var pic = new Image();   //创建图片对象
            pic.src = defaults['img'];   //定义图片的映射地址
            pic.onload=function(){
                //画布---刮刮
                ctx.drawImage(pic,initx,inity,width,height);
                $('#'+defaults['bg']).css('visibility','visible');
                if(defaults['text']){
                    ctx.font=defaults['font'];
                    ctx.fillStyle=defaults['fontColor'];
                    ctx.textAlign=defaults['textAlign'];
                    defaults['maxWidth'] ? ctx.fillText(defaults['text'],defaults['fontx'],defaults['fonty'],defaults['maxWidth']) : ctx.fillText(defaults['text'],defaults['fontx'],defaults['fonty']);
                }
                ctx.fill();
            }
        }
        //ox，oy为上一个点的位置
        var scrapei = 0,ox,oy,area=0,circle;
        function scrape(x,y,radius,ox,oy){
            if(ox){//如果不是第一个点，则需要将之前的点与最新的点用直线连接起来
                //直线的连接
                ctx.beginPath();
                ctx.lineWidth=2*radius;
                ctx.moveTo(ox,oy);
                ctx.lineTo(x,y);
                ctx.globalCompositeOperation = 'destination-out';
                //ctx.strokeStyle = '#F2EAE1';
                ctx.stroke();
                //连接完成绘图，画个圆
                ctx.lineWidth=1;
                ctx.moveTo(x,y);
                ctx.arc(x, y, radius, 0, Math.PI * 2, false);
                ctx.globalCompositeOperation = 'destination-out';
                //ctx.fillStyle = '#F2EAE1';
                ctx.fill();
            }else{
                //第一个点直接画圆即可。
                ctx.beginPath();
                ctx.moveTo(x,y);
                ctx.arc(x, y, radius, 0, Math.PI * 2, false);
                ctx.globalCompositeOperation = 'destination-out';
                //ctx.fillStyle = '#F2EAE1';
                ctx.fill();
            }
            area = countArea(ctx,width,height);
            if(area >= parseInt(defaults['area'])){
                callback();
            }
        }
        //计算面积
        function countArea(ctx, width, height){
            var imgData = ctx.getImageData(0, 0, width, height),
                pixles = imgData.data,
                transPixs = [];
            for (var i = 0, j = pixles.length; i < j; i += 4) {
                var a = pixles[i + 3];
                if (a < 128) {
                    transPixs.push(i);
                }
            }
            return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
        }


        $('#'+defaults['dom']).on('touchmove',function(e){
            scrapei+=1;
            e.preventDefault();
            var x = e.changedTouches[0].clientX,y = e.changedTouches[0].clientY;
            if(scrapei>1){//不是第一个点则需要传之前的值进去。
                scrape(x,y,10,ox,oy);
            }else{
                scrape(x,y,10);
            }
            ox = x;oy = y;
        });
        $('#'+defaults['dom']).on('touchstart',function(e){//初始化i值，判定下次滑动是第一个点
            e.preventDefault();
            scrapei=0;
        });
    }
    return scratch;
});
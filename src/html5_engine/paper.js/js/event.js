/**
 * Created by bawuzhan on 2017/9/20.
 */
//1.加首页动画
window.onload = addAnimate();
//2.点击开始
$('.start').on('click', start);
//3.重画
$('.again').on('touchstart', again);
//4.活动说明
$('.intro').on('touchstart', openIntro);
//5.返回
$('.goBack').on('touchstart', goBack);
//5.提交手机号
$('.submit').on('touchstart',submit);

var imgList = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img14', 'img15', 'img16', 'img17', 'img18', 'img20', 'img19']
var des = [
    '地球是圆的，<br/>你我绕一圈还会在一起！',
    '想和你一起吃火锅，<br/>却怎么也找不到你！',
    '美味不过家常菜，<br/>好吃不过妈妈的煎蛋！',
    '如果找到你，<br/>我愿此生被你平底锅打！',
    '愿我如星君如月，<br/>夜夜流光相皎洁。',
    '没有你的人生，<br/>就像没有糖的棒棒糖！',
    '看过那么多肥皂剧，<br/>却讲不好自己的故事！',
    '空有一颗想当学霸的心<br/>偏生了条学渣的命！',
    '都是熬夜玩手机的，<br/>为何我的黑眼圈这么重！',
    '我离不开你，<br/>就像筷子离不开碗！',
    '对你只有两个字：<br/>加油！',
    '床前明月光，<br/>有饼没包装。',
    '每年陪你——生日快乐！<br/>',
    '在这个看脸的世界，<br/>脸小我怕你看不清！',
    '别怕折叠时被撕扯，<br/>打开便是如花人生!',
    '我用坚硬面对整个世界，<br/>只为给你这份柔软。',
    '从你出生那天起，<br/>就把整个世界给了你。',
    '你在摩天轮上仰望幸福<br/>我在摩天轮下看你。',
    '老板，<br/>老婆饼里为啥没老婆？'
]
var imgList2 = ['iphone_03', 'kx_03','pander_03'];
var ran = null,ran_prize = null;
var audio = document.createElement('audio');
audio.loop = 'true';
document.body.appendChild(audio);
audio.src="../images/Dream for Today.mp3";
wx.ready(function () {
    wx.getNetworkType({
        success: function (res) {
            audio.play();
        }
    })
});
function random(a, b) {
    if (!b) {
        return Math.round(Math.random() * a);
    }
    return Math.round(Math.random() * (b - a) + a);
}
function offset(curEle) {
    var l = 0;
    var t = 0;
    var par = curEle.offsetParent;
    l += curEle.offsetLeft;
    t += curEle.offsetTop;
    while (par) {
        //IE8 offsetLeft/top已经包含了边框，但是其他浏览器不包含边框；
        if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
            l += par.clientLeft;
            t += par.clientTop;
        }
        l += par.offsetLeft;
        t += par.offsetTop;
        par = par.offsetParent;

    }
    return {left: l, top: t}
}

function addAnimate() {
    $('.star1').attr('id', 'star1');
    $('.star2').attr('id', 'star2');
    $('.tit').eq(0).attr('id', 'tit');
    $('.moon').attr('id', 'moon');
    $('.cloud').attr('id', 'cloud');
    $('.quan1').attr('id', 'quan1');
    $('.quan2').attr('id', 'quan2');
    $('.quan3').attr('id', 'quan3');
}

function start() {
    $('.page1').attr('id', 'page1');
    setTimeout(function () {
        $('.page1').css('display', 'none');
        var paper1 = new Paper1('canvas1');
        status = 1;
        again();
    }, 800);
}

function again() {
    $('.paint img') && $('.paint img').attr('src', '');
    $('.prize img') && $('.prize img').attr('src', '');
    $('.page3').hide();
    $('.page4').hide();
    $('.page2').show();
    $('.des').show();
    $('.result').hide();
    $('#canvas1').show();
    //清空canvas1的画布
    var canvas1 = document.getElementById("canvas1");
    var cxt = canvas1.getContext("2d");
    cxt.clearRect(0, 0, canvas1.width, canvas1.height);
    //初始化画圆的动画
    $('.des').eq(1).html('');

    $('#draw_temp') && $('#draw_temp').remove();
    $('.page3>img') && $('.page3>img').remove();
    $('.page4>img') && $('.page4>img').remove();
    $('.phone').show();
    $('.suc').hide();
    init();
}

function openIntro(){
    $('.page5').show();
}

function goBack(){
    $('.page5').hide();
}

function submit(){
    var val=$('#input').val().trim();
    var data={}
    var reg=/^1[34578]\d{9}$/;
    if(!reg.test(val)){
        alert("手机号码有误，请重填");
        return;
    }else{
        data.phone=val;
        data.type=['A','B','C','D'][ran_prize];
        $('#input').val("");
        $('.phone').hide();
        $.ajax({
            url:'http://microblog.people.com.cn/addGq2017CJRecord.action',
            type:'get',
            data:data,
            success:function(res){
                if(res==1){
                    $('.suc').show();
                }
            }
        })
    }
}

function addImg() {
    if (arguments[0] == 1) {//说明是没中奖的
        $('#tempImg').show();
        ran = random(imgList.length - 1)
        var src = '../images/' + imgList[ran] + '_temp.png';
        $('.des').eq(1).html(des[ran]);
        $('#tempImg').animate({
            height: "6.33rem",
            width: "3.75rem",
            left: '20%',
            top: '1rem',
            opacity: 0
        }, 1000, function () {
            $('#tempImg').remove();
            $('.paint img').attr('src', src);
            $('.paint img').fadeIn();
            setTimeout(function () {
                $('.paint img').attr('src', src.replace("_temp", ''));
                getShareImg();
                $('#canvas1').hide();
            }, 500);
        });
    } else {//中奖的
        $('#tempImg').show();
        ran_prize = random(imgList2.length-1)
        var src = '../images/' + imgList2[ran_prize] + '.png?v=1';
        $('#tempImg').animate({
            height: "6.33rem",
            width: "3.75rem",
            left: '20%',
            top: '1rem',
            opacity: 0
        }, 1000, function () {
            $('#tempImg').remove();
            $('.prize img').attr('src', src);
            $('.prize img').fadeIn();
            setTimeout(function () {
                getShareImg2(ran_prize);
            }, 500);
        });
    }

}

function getShareImg() {
    //画分享图
    var img2 = new Image();
    $('.page3').append(img2);
    img2.id = 'draw_temp';
    img2.src = '../images/bg4.png?v=1';
    img2.style.position = 'absolute';
    img2.style.top = '0';
    img2.style.left = '0';
    img2.style.zIndex = '-10';
    img2.onload = function () {
        //1.整宽高
        img2.width = document.documentElement.clientWidth;
        var canvas2 = document.getElementById('canvas2')
        canvas2.width = img2.width * 2;
        canvas2.height = img2.height * 2;
        var ctx = canvas2.getContext('2d');
        /*//解决模糊问题
         var getPixelRatio = function(context) {
         var backingStore = context.backingStorePixelRatio ||
         context.webkitBackingStorePixelRatio ||
         context.mozBackingStorePixelRatio ||
         context.msBackingStorePixelRatio ||
         context.oBackingStorePixelRatio ||
         context.backingStorePixelRatio || 1;

         return (window.devicePixelRatio || 1) / backingStore;
         };
         var ratio = getPixelRatio(ctx);*/
        //2.画图片
        if ($('.paint img').attr('src')) {
            setTimeout(function () {
                var centerImg = $('.paint img')[0];
                ctx.drawImage(centerImg, centerImg.offsetLeft * 2, centerImg.offsetTop * 2-10, centerImg.width * 2, centerImg.height * 2);
                //3.画背景
                ctx.drawImage(img2, 0, 0, img2.width * 2, img2.height * 2);
                //3.写字
                ctx.font = "32px '微软雅黑 宋体'";
                //设置字体填充颜色
                ctx.fillStyle = "#ffd800";
                //从坐标点(50,50)开始绘制文字
                var str = des[ran];
                str1 = str.slice(0, str.indexOf('<'));
                str2 = str.slice(str.indexOf('<') + 5);
                ctx.fillText(str1, 60 * 2, 450 * 2);
                ctx.fillText(str2, 60 * 2, 470 * 2);
                //4.生成图片
                var base64 = canvas2.toDataURL("image/png", 1);
                var img3 = new Image();
                img3.src = base64;
                $('.page3').append(img3);
                img3.style.position = 'absolute';
                img3.style.width = '100%';
                img3.style.height = '100%';
                img3.style.top = '0';
                img3.style.left = '0';
                img3.style.zIndex = '10';
                img3.style.opacity = '0';
                //5.清空画布
                ctx.clearRect(0, 0, canvas2.width, canvas2.height);
                //6.删除图片
                $('#draw_temp').remove();
            }, 300)
        }
    }
}
$(document).ready(function () {
    $('body').height($('body')[0].clientHeight);
    $('body').height($('body')[0].clientHeight);

});
function getShareImg2(ran_prize) {
    console.log(111)
    var img4 = new Image();
    $('.page4').append(img4);
    if(ran_prize==0){
        img4.src = '../images/save1.jpg?v=3';
    }else if(ran_prize==1){
        img4.src = '../images/save3.jpg?v=4';
    }else if(ran_prize==2){
        img4.src = '../images/save4.jpg?v=5';
    }
    img4.id = 'prize_temp';
    img4.style.position = 'absolute';
    img4.style.top = '0';
    img4.style.left = '0';
    img4.style.zIndex = '-10';
    img4.onload = function () {
        this.width = document.documentElement.clientWidth;
        var canvas3 = document.getElementById('canvas3')
        canvas3.width = this.width*2;
        canvas3.height = this.height*2;
        var ctx = canvas3.getContext('2d');
        setTimeout(function () {
            /*var centerImg = $('.prize img')[0];
            ctx.drawImage(centerImg, offset(centerImg).left * 2, offset(centerImg).top * 2, centerImg.width * 2, centerImg.height * 2);*/
            //3.画背景
            ctx.drawImage(img4, 0, 0, img4.width * 2, img4.height * 2);
            //4.生成图片
            var base64 = canvas3.toDataURL("image/png", 1);
            var img5 = new Image();
            img5.src = base64;
            $('.page4').append(img5);
            img5.style.position = 'absolute';
            img5.style.width = '100%';
            img5.style.height = '100%';
            img5.style.top = '0';
            img5.style.left = '0';
            img5.style.zIndex = '10';
            img5.style.opacity = '0';
            //5.清空画布
            ctx.clearRect(0, 0, canvas3.width, canvas3.height);
            //6.删除图片
            $('#prize_temp').remove();
        }, 300)
    }


}


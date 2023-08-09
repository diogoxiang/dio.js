/**
 * Created by Rodey on 2015/8/13.
 *
 * canvas绘制进度
 *
 */


define([], function(){

    var CircleChart = function(options){
        if(!options || {} === options || !options.id || '' === options.id)  return;
        this.options = options;
        //初始化对象属性
        this._initProp();
    };

    CircleChart.prototype = {
        construct: CircleChart,
        _initProp: function(){
            //获取canvas对象
            this.canvas = document.querySelector('#' + this.options.id);
            this.ctx = this.canvas.getContext('2d');
            //完成回调
            this.callback = this.options.callback;
            this.angleTotal = 360;
            //总段数
            this.total = this.options.total || 5;
            //需要显示的段数（角度填充）
            this.number = parseFloat(this.options.number || 2);
            //根据段数获取平均角度
            this.avg = this.angleTotal / this.total;
            //绘制样式
            this.style = {
                strokeStyle: this.options.style && this.options.style.strokeStyle || '#FFBA00',
                lineWidth: this.options.style && this.options.style.lineWidth || 6,
                fontColor: this.options.style && this.options.style.strokeStyle || '#FFBA00',
                font: this.options.style && this.options.style.font || 'normal 3.5em Microsoft Yahei'
            };
            //显示的文字
            this.text = this.options.text || this.number.toFixed(1) || '0.0';
            //canvas尺寸
            this.width = this.options.width || this.canvas.width || 130;
            this.height = this.options.height || this.canvas.height || 130;
            //半径
            this.raduis = this.width * .5 - this.style.lineWidth;
            //circle的坐标
            this.position = {
                x: this.width * .5,
                y: this.height * .5
            };
            this.index = 0;
            //递增角度
            this.deg = 0;
            //递增时间间隔
            this.dif = 0;
            //定时器
            this.stin = null;

        },

        /**
         * 对象初始化（只绘制背景, 不绘制填充）
         * @returns {CircleChart}
         */
        init: function(){
            this.drawBack();
            return this;
        },

        /**
         * 定时绘制
         * @returns {CircleChart}
         */
        draw: function(){
            var self = this;
            this.deg++;
            this.clearCanvas();
            this.drawBack(true);
            this.drawText(this.text);
            return this;
        },

        /**
         * 绘制背景
         * @param flag
         * @returns {CircleChart}
         */
        drawBack: function(flag){
            this.ctx.strokeStyle = 'rgba(255,255,255,1)';
            this.ctx.lineWidth = this.style.lineWidth;
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.raduis, 0, Math.PI * 2, false);
            this.ctx.stroke();
            flag && this.drawFill(this.deg);
            return this;
        },

        /**
         * 绘制填充
         * @param deg
         * @returns {CircleChart}
         */
        drawFill: function(deg){
            this.dif = this.angleTotal - deg;
            //console.log(this.deg, this.avg * this.number);
            var endAngle = deg * Math.PI / 180 + Math.PI * 1.5;
            this.ctx.strokeStyle = this.style.strokeStyle;
            this.ctx.lineWidth = this.style.lineWidth;
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.raduis, Math.PI * 1.5, endAngle, false);
            this.ctx.stroke();
            return this;
        },

        /**
         * 绘制文字
         * @param text
         * @returns {CircleChart}
         */
        drawText: function(text){
            this.text = text;
            this.ctx.fillStyle = this.style.fontColor;
            this.ctx.font = this.style.font;
            var tw = this.ctx.measureText(text).width,
                x = (this.width - tw) *.5,
                y = this.height *.52;
            this.ctx.fillText(Number(text).toFixed(1), x, y);
            //console.log(text, tw, y);
            return this;
        },

        /**
         * 开始绘制填充（动画平滑绘制）
         * @param data
         * @returns {CircleChart}
         */
        start: function(data){
            var self = this;
            this._extend(data);
            this._initProp();
            //console.log('timer: ', 500 / this.dif, this.dif);
            this.stin = window.setInterval(function(){
                if(self.deg >= self.number * self.avg){
                    self.end();
                    return false;
                }
                self.draw();
            }, 0);
            return this;
        },

        //清空canvas
        clearCanvas: function(){
            this.ctx.clearRect(0, 0, this.width, this.height);
        },

        //绘制结束，还原属性初始化值
        end: function(){
            window.clearInterval(this.stin);
            (this.callback && 'function' === typeof(this.callback)) && this.callback(this.options.target || this);
            this.stin = null;
            this.index = 0;
            this.radius = 0;
            this.deg = 0;
            this.dif = 0;
            this.callback = null;
        },

        _extend: function(data){
            for(var k in data){
                if(data.hasOwnProperty(k)){
                    this.options[k] = data[k];
                }
            }
        }

    };

    return CircleChart;
});

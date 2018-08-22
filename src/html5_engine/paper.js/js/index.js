/**
 * Created by bawuzhan on 2017/5/3.
 */
(function () { 
    //修正不支持jpeg压缩
    var c = document.createElement('canvas');
    c.width = c.height = 1;
    var str = c.toDataURL('image/jpeg');
    if (str.indexOf('data:image/jpeg') !== 0) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://t.people.com.cn/microblog-v3/2015subject/0211_chunjie/cvsjpeg.js';
        document.body.insertBefore(s, document.body.firstChild);
    }
})();

function Paper1(canvas) {
    if (canvas.nodeType) { //判断结点类型
        this.canvas = canvas;
    } else if (typeof canvas == 'string') {
        this.canvas = document.getElementById(canvas);
    } else {
        return;
    }
    this.init();
};

var printFlag = 0;
Paper1.prototype = {
    lineWidth: 0.5,
    color: '#000' /*'rgba(0,0,0, 0.6)'*/ , //前景色
    bgColor: 'rgba(255,255,255, 0)', //背景色
    penSize: 8,
    fontWidth: 320,
    init: function () {
        this.canvas.height = (document.documentElement.clientHeight) * 0.95;
        this.canvas.width = document.documentElement.clientWidth
        var _self = this;
        if (!this.canvas.getContext) { //判断是否支持Canvas
            return;
        };
        this.fontWidth = this.canvas.width;
        this.ctx = this.canvas.getContext('2d');

        this.clear();
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.bgColor;
        this.addEvent(this.canvas, 'selectstart', function () { //去掉选择
            return false;
        });
        this.__startEvent = function (e) {
            var x, y;
            _self.testStr = '';
            _self.testStr += e.type + ', ';
            if (e.type == 'touchstart') {
                if (e.touches.length >= 2) {
                    return
                }
                x = e.touches[0].pageX;
                y = e.touches[0].pageY;
                _self.removeEvent(document, 'mousedown', _self.__startEvent);
            } else {
                x = e.pageX;
                y = e.pageY;
            };
            _self.moveBegin(x, y, e.type);
            //e.preventDefault();
        };

        this.addEvent(document, 'touchstart', this.__startEvent);
        this.addEvent(document, 'mousedown', this.__startEvent);
    },
    uninit: function () {
        this.removeEvent(document, 'touchstart', this.__startEvent);
        this.removeEvent(document, 'mousedown', this.__startEvent);
    },
    moveBegin: function (x, y, type) {
        printFlag = 1
        var _self = this;

        this.canvasPos = this.canvas.getBoundingClientRect();
        this.canvasPos = {
            left: this.canvasPos.left + window.scrollX,
            top: this.canvasPos.top + window.scrollY
        };

        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty(); //清除文本的选中

        this.ctx.moveTo(x - this.canvasPos.left, y - this.canvasPos.top);
        this.preDot = null;
        this.moveOne = 0;

        this.moveQueue = [];
        this.lineWidth = this.penSize / 2 * (this.fontWidth / 320);

        if (this.__moveEvent) {
            this.removeEvent(document, 'mousemove', this.__moveEvent);
            this.removeEvent(document, 'touchmove', this.__moveEvent);
            this.removeEvent(document, 'mouseup', this.__endEvent);
            this.removeEvent(document, 'touchend', this.__endEvent);
        };

        this.__moveEvent = function (e) {
            var x, y;
            if (e.type == 'touchmove') {
                if (e.touches.length >= 2) {
                    return
                }
                x = e.touches[0].pageX;
                y = e.touches[0].pageY;
            } else {
                x = e.pageX;
                y = e.pageY;
            };

            _self.testStr += e.type + ', ';

            _self.moving(x, y);
            e.preventDefault();
        };
        this.__endEvent = function (e) {
            _self.moveEnd();
        };

        if (type == 'touchstart') {
            this.addEvent(document, 'touchmove', this.__moveEvent);
            this.addEvent(document, 'touchend', this.__endEvent);
        } else {
            this.addEvent(document, 'mousemove', this.__moveEvent);
            this.addEvent(document, 'mouseup', this.__endEvent);
        }


        this.clearPaint();
        this.moving(x, y);
    },
    moving: function (x, y) {
        var dot,
            c = 0;
        //上一次的点
        x = x - this.canvasPos.left;
        y = y - this.canvasPos.top;

        if (this.moveQueue.length) { //计算与下一点的距离
            dot = this.moveQueue[this.moveQueue.length - 1];
            c = Math.sqrt((dot.x - x) * (dot.x - x) + (dot.y - y) * (dot.y - y));
            if (c == 0) {
                return;
            }
        };

        //放入队列，缓执行
        this.moveQueue.push({
            x: x,
            y: y,
            c: c
        });
        if (this.moveQueue.length >= 3) {
            dot = this.moveQueue.shift();
            this.actionPaint(dot);
        };
    },
    actionPaint: function (dot, pw) {
        var x = dot.x,
            y = dot.y,
            c = dot.c;

        if (this.preDot && c === 0) {
            return;
        };
        var now = new Date();
        var nextDot = this.moveQueue.length ? this.moveQueue[0] : null;

        if (c) {
            this.ctx.moveTo(this.preDot.x, this.preDot.y);
        };
        this.ctx.lineWidth = this.lineWidth;
        this.preDot = dot;
        this.paintDot(x, y);
    },

    moveEnd: function () {
        this.removeEvent(document, 'mousemove', this.__moveEvent);
        this.removeEvent(document, 'touchmove', this.__moveEvent);
        this.removeEvent(document, 'mouseup', this.__endEvent);
        this.removeEvent(document, 'touchend', this.__endEvent);

        this.ctx.lineWidth = this.ctx.lineWidth - 1;
        var dot;

        while (this.moveQueue.length) {
            dot = this.moveQueue.shift();
            this.actionPaint(dot, this.penSize * (this.fontWidth / 320) / 4);
        }

        //document.getElementById('log').innerHTML = this.testStr;
    },

    clear: function () {
        this.preDot = null;
        this.ctx.fillStyle = this.bgColor; //背景色
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    },

    paintDot: function (x, y) {
        var cX,
            cY,
            s,
            c;
        //line

        this.ctx.fillStyle = this.bgColor;
        this.ctx.strokeStyle = this.color;

        this.ctx.lineTo(this.preDot.x, this.preDot.y);
        this.ctx.stroke();
        this.ctx.beginPath();

        //dot
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0)'; //透明

        if ((this.preDotX || this.preDotY)) { //上一次的点
            cX = this.preDotX - x;
            cY = this.preDotY - y;
            c = Math.sqrt((this.preDotX - x) * (this.preDotX - x) + (this.preDotY - y) * (this.preDotY - y));
            if (Math.abs(c) > (this.lineWidth / 3)) { //距离大于点距
                s = Math.floor(Math.abs(c) / (this.lineWidth / 3));
                for (var i = 1; i <= s; i++) {

                    if (Math.abs(this.lineWidth - this.toLW) > this.penSize * (this.fontWidth / 320) * 0.025) {
                        this.lineWidth -= (Math.round(this.lineWidth - this.toLW) / 8);
                        this.ctx.lineWidth = this.lineWidth;
                    }

                    this.ctx.arc(this.preDotX - (cX * (i / s)), this.preDotY - (cY * (i / s)), this.lineWidth, 0, 2 * Math.PI);
                    this.ctx.fill();
                    this.ctx.stroke();
                    this.ctx.beginPath();
                };
            }

        }

        this.ctx.arc(x, y, this.lineWidth, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.beginPath();
        this.preDotX = x;
        this.preDotY = y;
    },
    clearPaint: function () {
        this.preDotX = 0;
        this.preDotY = 0;
    },
    addEvent: function (obj, eventType, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventType, func);
        } else {
            obj.addEventListener(eventType, func, false)
        }
    },
    removeEvent: function (obj, eventType, func) {
        if (obj.detachEvent) {
            obj.detachEvent("on" + eventType, func)
        } else {
            obj.removeEventListener(eventType, func, false)
        }
    },
    getImageData: function (type, q) {
        type = type || 'jpeg';
        q = q || 0.7;
        return this.canvas.toDataURL('image/' + type, q);
    },
    getSmallImgData: function (type, q) {
        type = type || 'jpeg';
        q = q || 0.7;
        return this.canvas.toDataURL('image/' + type, q);
    }
};
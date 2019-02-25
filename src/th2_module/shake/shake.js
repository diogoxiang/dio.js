/**
 * Created by Rodey on 2015/8/3.
 *
 * 摇一摇组件
 * use:
 *
 * var shark = new Shark({
                threshold: 15, //默认摇动速度阔值
                timeout: 100, //摇动的时间间隔
                target: self, //回调作用域
                autoStart: true, //自动启用
                complate: function(){
                    alert('complate......');
                }
            });
 //shark.start();
 //shark.stop();
 */

(function(global, factory) {
    if (typeof define === 'function' && define.amd) {

        define(function() {
            return factory(global, global.document);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(global, global.document);
    } else {
        global.Shake = factory(global, global.document);
    }
} (typeof window !== 'undefined' ? window : this, function (window, document) {

    'use strict';

    function Shake(options) {

        var self = this;
        this.hasDeviceMotion = 'ondevicemotion' in window;

        this.options = {
            threshold: 15, //默认摇动速度阔值
            timeout: 1000, //摇动的时间间隔
            target: self, //回调作用域
            autoStart: true, //自动启用
            complate: null //new Function()
        };

        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    this.options[i] = options[i];
                }
            }
        }

        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;

        if(this.options.autoStart === true){
            this.start();
        }
    }

    //重置
    Shake.prototype.reset = function () {
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };

    //开始监听 devicemotion 事件
    Shake.prototype.start = function () {
        this.reset();
        if (this.hasDeviceMotion) {
            window.addEventListener('devicemotion', this, false);
        }else{
            alert("手机不支持摇一摇功能")
        }

    };

    //移出devicemotion监听
    Shake.prototype.stop = function () {
        if (this.hasDeviceMotion) {
            window.removeEventListener('devicemotion', this, false);
        }
        this.reset();
    };

    Shake.prototype.devicemotion = function (e) {
        var current = e.accelerationIncludingGravity;
        var currentTime;
        var timeDifference;
        var deltaX = 0;
        var deltaY = 0;
        var deltaZ = 0;

        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }

        deltaX = Math.abs(this.lastX - current.x);
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);

        if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();

            if (timeDifference > this.options.timeout) {
                (this.options.complate && typeof(this.options.complate) === 'function') && this.options.complate.call(this.options.target);
                this.lastTime = new Date();
            }
        }

        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;

    };

    Shake.prototype.handleEvent = function (e) {
        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };

    return Shake;
}));
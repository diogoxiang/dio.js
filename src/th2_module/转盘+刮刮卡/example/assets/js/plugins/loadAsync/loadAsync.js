/**
 * Created by Rodey on 2015/6/16.
 */

;(function(root){

    'use strict';

    var count = 0, total = 0,
        xhr = new XMLHttpRequest(),
        //load script start
        fragment = document.createDocumentFragment(),
        jsCount = 0, jsTotal = 0,
        config = null,
        nodes = [];

    /**
     * Load image, audio, video, script
     */

    //主加载器
    var loadAsycn = function(itemList, success, error){

        if(typeof itemList === 'string' && _getType(itemList) === 'json'){
            loadConfig(itemList, function(res){
                var paths = res.paths, len = paths.length;
                if(len === 0)   _call(success, 1, 1);
                _loadHandler(_getType(res.paths[count]), res.paths[count], res.paths, success, error);
            }, function(){
                throw 'Load config file failed!';
            });
        }else if(isArray(itemList)){
            _setInt(itemList);
            //console.log(total, itemList);
            _loadHandler(_getType(itemList[count]), itemList[count], itemList, success, error);
        }
    };

    //获取类型
    var  _getType = function(item) {
        var type = /(.(png|jpg|jpeg|gif|bmp|svg){1})$/gi.test(item)
            ? 'image' : /(.(mp3|wav){1})$/gi.test(item)
            ? 'audio' : /(.(ogg|mp4|wma){1})$/gi.test(item)
            ? 'video' : /(.js){1}$/gi.test(item)
            ? 'script' : /(.json){1}$/gi.test(item)
            ? 'json' : null;
        return type;
    };

    //加载回调
    var _loadHandler = function(type, item, items, success, error){
        if(!type) return;
        if('script' === type){
            _loadJsHandler(type, item, items, success, error);
            return;
        }
        //实例化对象，type：Image、Audio、Video
        var element = new window[(function(){
            var str = type;
            var first = type.substr(0, 1).toUpperCase() + str.substring(1);
            return first;
        })()]();

        element.onload = element.oncomplete = element.onreadystatechange = function(evt){
            element.onload = element.oncomplete = element.onreadystatechange = null;
            count++;
            _call(success, element, count, total);
            if(count >= total){
                count = 0;
                return;
            }
            //加载下一个
            _loadHandler(_getType(items[count]), items[count], items, success, error);

        };
        element.onerror = function(evt){
            element.onerror = null;
            count++;
            _call(error, element, count, total);
            if(count >= total){
                _call(success, element, count, total);
                count = 0;
                return;
            }
            _loadHandler(_getType(items[count]), items[count], items, success, error);
        };
        element.src = item;
    };

    //加载script专用
    var _loadJsHandler = function(type, item, items, success, error){
        var script = document.createElement('script');
        script.onload = script.oncomplete = script.onreadystatechange = function(evt){
            script.onload = script.oncomplete = script.onreadystatechange = null;
            //console.log(data);
            count++;
            _call(success, script, count, total);
            if(count >= total){
                count = 0;
                return;
            }
            //加载下一个
            _loadHandler(_getType(items[count]), items[count], items, success, error);
        };

        script.onerror = function(evt){
            script.onerror = null;
            console.log('load script: ' + item + ' failed!');
            count++;
            _call(error, script, count, total);
            if(count >= total){
                _call(success, script, count, total);
                count = 0;
                return;
            }
            //加载下一个
            _loadHandler(_getType(items[count]), items[count], items, success, error);
        };

        script.charset = 'utf-8';
        script.async = true;
        script.src = item;
        fragment.appendChild(script);
        document.querySelector('head').appendChild(fragment);

    };

    //加载配置文件
    var loadConfig = function(url, success, error){
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function(evt){
            if(this.readyState === 4 && this.status === 200){
                xhr.onreadystatechange = null;
                //处理配置文件
                config = _formateConfig(xhr.responseText);
                _call(success, xhr, config);
            }else{
                _call(error, xhr);
            }
        };
        xhr.send();
    };

    var loadScript = function(items, success, error){
        _setInt(items);
        _loadHandler('script', items[count], items, success, error);
    };

    var loadImage = function(items, success, error){
        _setInt(items);
        _loadHandler('image', items[count], items, success, error);
    };

    var loadAudio = function(items, success, error){
        _setInt(items);
        _loadHandler('audio', items[count], items, success, error);
    };

    var loadVideo = function(items, success, error){
        _setInt(items);
        _loadHandler('video', items[count], items, success, error);
    };

    //设置加载总数，保证一次设置
    var _setInt = function(items){
        total = items.length;
    };

    var _replaceScript = function(text){
        var txt = text.replace(/(\n|\t|\r)*/gi, '').replace(/\/\\*[\S\s\*]*\\*\//gi, '');
        console.log(txt);
        eval(txt);
    };

    //处理回调
    var _call = function(su, target){
        var args = [];
        for(var i = 2; i < arguments.length; ++i) args.push(arguments[i]);
        typeof(su) === 'function' && su.apply(target, args);
    };

    var isArray = function(value){ return '[object Array]' === toString.call(value); };

    var _formateConfig = function(text){
        var txt = text;
        try{
            txt = JSON.parse(text);
        }catch (e){}
        return text;
    };

    var LoadAsync = function(){
        this.loadConfig = loadConfig;
        this.loadAsync = loadAsycn;
        this.loadScript = loadScript;
        this.loadImage = loadImage;
        this.loadAudio = loadAudio;
        this.loadVideo = loadVideo;
    };

    if(typeof define === 'function'){
        define(function(){
            return LoadAsync;
        });
    }else if(typeof exports === 'object'){
        module.exports = LoadAsync;
    }

    root.LoadAsync = LoadAsync;


})(window);

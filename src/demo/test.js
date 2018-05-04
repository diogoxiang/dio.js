'use strict';
!function(m) {
  /**
   * @param {number} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Object} i
   * @param {string} index
   * @param {!Object} n
   * @return {undefined}
   */
  t.d = function(i, index, n) {
    if (!t.o(i, index)) {
      Object.defineProperty(i, index, {
        configurable : false,
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  t.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Object} t
   * @param {string} object
   * @return {?}
   */
  t.o = function(t, object) {
    return Object.prototype.hasOwnProperty.call(t, object);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 60);
}([function(options, gen34_options, moment) {
  (function(res) {
    /**
     * @param {string} a
     * @return {?}
     */
    function self(a) {
      return null == a ? "" : "object" == typeof a ? JSON.stringify(a, null, 2) : a + "";
    }
    /**
     * @param {!Object} t
     * @return {?}
     */
    function type(t) {
      /** @type {number} */
      var a = parseFloat(t);
      return isNaN(a) ? t : a;
    }
    /**
     * @param {string} size
     * @param {boolean} str
     * @return {?}
     */
    function makeMap(size, str) {
      /** @type {!Object} */
      var mods = Object.create(null);
      var deps = size.split(",");
      /** @type {number} */
      var i = 0;
      for (; i < deps.length; i++) {
        /** @type {boolean} */
        mods[deps[i]] = true;
      }
      return str ? function(p_Interval) {
        return mods[p_Interval.toLowerCase()];
      } : function(depModName) {
        return mods[depModName];
      };
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {?}
     */
    function remove(target, key) {
      if (target.length) {
        var n = target.indexOf(key);
        if (n > -1) {
          return target.splice(n, 1);
        }
      }
    }
    /**
     * @param {!Object} obj
     * @param {string} property
     * @return {?}
     */
    function hasOwn(obj, property) {
      return __hasProp.call(obj, property);
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function isArray(value) {
      return "string" == typeof value || "number" == typeof value;
    }
    /**
     * @param {!Function} callback
     * @return {?}
     */
    function params(callback) {
      /** @type {!Object} */
      var ret = Object.create(null);
      return function(i) {
        return ret[i] || (ret[i] = callback(i));
      };
    }
    /**
     * @param {!Object} value
     * @param {string} key
     * @return {?}
     */
    function expect(value, key) {
      /**
       * @param {?} a
       * @return {?}
       */
      function r(a) {
        /** @type {number} */
        var l = arguments.length;
        return l ? l > 1 ? value.apply(key, arguments) : value.call(key, a) : value.call(key);
      }
      return r._length = value.length, r;
    }
    /**
     * @param {!Array} s
     * @param {number} i
     * @return {?}
     */
    function toArray(s, i) {
      i = i || 0;
      /** @type {number} */
      var n = s.length - i;
      /** @type {!Array} */
      var ret = Array(n);
      for (; n--;) {
        ret[n] = s[n + i];
      }
      return ret;
    }
    /**
     * @param {!Object} obj
     * @param {!Object} arr
     * @return {?}
     */
    function extend(obj, arr) {
      var i;
      for (i in arr) {
        obj[i] = arr[i];
      }
      return obj;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function isObject(obj) {
      return null !== obj && "object" == typeof obj;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function isPlainObject(obj) {
      return objToString.call(obj) === OBJECT_ARRAY;
    }
    /**
     * @param {!Object} arr
     * @return {?}
     */
    function walk(arr) {
      var result = {};
      /** @type {number} */
      var i = 0;
      for (; i < arr.length; i++) {
        if (arr[i]) {
          extend(result, arr[i]);
        }
      }
      return result;
    }
    /**
     * @return {undefined}
     */
    function noop() {
    }
    /**
     * @param {!Object} command
     * @return {?}
     */
    function pushCommandPoints_(command) {
      return command.reduce(function(requestValuesAggs, m) {
        return requestValuesAggs.concat(m.staticKeys || []);
      }, []).join(",");
    }
    /**
     * @param {string} a
     * @param {string} b
     * @return {?}
     */
    function looseEqual(a, b) {
      var sourceIsObject = isObject(a);
      var destIsObject = isObject(b);
      return sourceIsObject && destIsObject ? JSON.stringify(a) === JSON.stringify(b) : !sourceIsObject && !destIsObject && a + "" == b + "";
    }
    /**
     * @param {!NodeList} arr
     * @param {string} val
     * @return {?}
     */
    function looseIndexOf(arr, val) {
      /** @type {number} */
      var i = 0;
      for (; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
          return i;
        }
      }
      return -1;
    }
    /**
     * @param {string} string
     * @return {?}
     */
    function isReserved(string) {
      /** @type {number} */
      var value = (string + "").charCodeAt(0);
      return 36 === value || 95 === value;
    }
    /**
     * @param {!Object} key
     * @param {string} name
     * @param {!Function} prop
     * @param {!Object} id
     * @return {undefined}
     */
    function def(key, name, prop, id) {
      Object.defineProperty(key, name, {
        value : prop,
        enumerable : !!id,
        writable : true,
        configurable : true
      });
    }
    /**
     * @param {string} path
     * @return {?}
     */
    function parsePath(path) {
      if (!hasExtRx.test(path)) {
        var fieldArry = path.split(".");
        return function(obj) {
          /** @type {number} */
          var i = 0;
          for (; i < fieldArry.length; i++) {
            if (!obj) {
              return;
            }
            obj = obj[fieldArry[i]];
          }
          return obj;
        };
      }
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function isNative(value) {
      return /native code/.test("" + value);
    }
    /**
     * @param {string} current
     * @return {undefined}
     */
    function mouseUpEvents(current) {
      if (Dep.target) {
        targetStack.push(Dep.target);
      }
      /** @type {string} */
      Dep.target = current;
    }
    /**
     * @return {undefined}
     */
    function getClickTarget() {
      Dep.target = targetStack.pop();
    }
    /**
     * @param {!Object} options
     * @param {!Object} app
     * @return {undefined}
     */
    function getItemsStringContent(options, app) {
      /** @type {!Object} */
      options.__proto__ = app;
    }
    /**
     * @param {!Object} scope
     * @param {!Object} helperOptions
     * @param {!NodeList} options
     * @return {undefined}
     */
    function getItemsFragContent(scope, helperOptions, options) {
      /** @type {number} */
      var i = 0;
      var rowsCount = options.length;
      for (; i < rowsCount; i++) {
        var key = options[i];
        def(scope, key, helperOptions[key]);
      }
    }
    /**
     * @param {!Object} value
     * @param {string} input
     * @return {?}
     */
    function observe(value, input) {
      if (isObject(value)) {
        var ob;
        return hasOwn(value, "__ob__") && value.__ob__ instanceof Observer ? ob = value.__ob__ : observerState.shouldConvert && !shutdown() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue && (ob = new Observer(value)), input && ob && ob.vmCount++, ob;
      }
    }
    /**
     * @param {!Object} object
     * @param {string} key
     * @param {?} val
     * @param {?} data
     * @return {undefined}
     */
    function defineReactive(object, key, val, data) {
      var dep = new Dep;
      /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
      var descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (!descriptor || false !== descriptor.configurable) {
        /** @type {(function(): ?|undefined)} */
        var getter = descriptor && descriptor.get;
        /** @type {(function(?): undefined|undefined)} */
        var setter = descriptor && descriptor.set;
        var childOb = observe(val);
        Object.defineProperty(object, key, {
          enumerable : true,
          configurable : true,
          get : function() {
            var value = getter ? getter.call(object) : val;
            return Dep.target && (dep.depend(), childOb && childOb.dep.depend(), Array.isArray(value) && traverse(value)), value;
          },
          set : function(value) {
            var other = getter ? getter.call(object) : val;
            if (!(value === other || value !== value && other !== other)) {
              if (setter) {
                setter.call(object, value);
              } else {
                val = value;
              }
              childOb = observe(value);
              dep.notify();
            }
          }
        });
      }
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {number} val
     * @return {?}
     */
    function set(obj, key, val) {
      if (Array.isArray(obj)) {
        return obj.length = Math.max(obj.length, key), obj.splice(key, 1, val), val;
      }
      if (hasOwn(obj, key)) {
        return void(obj[key] = val);
      }
      var ob = obj.__ob__;
      if (!(obj._isVue || ob && ob.vmCount)) {
        return ob ? (defineReactive(ob.value, key, val), ob.dep.notify(), val) : void(obj[key] = val);
      }
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @return {undefined}
     */
    function mutator(obj, key) {
      var ob = obj.__ob__;
      if (!(obj._isVue || ob && ob.vmCount)) {
        if (hasOwn(obj, key)) {
          delete obj[key];
          if (ob) {
            ob.dep.notify();
          }
        }
      }
    }
    /**
     * @param {number} object
     * @return {undefined}
     */
    function traverse(object) {
      var val = void 0;
      /** @type {number} */
      var i = 0;
      var length = object.length;
      for (; i < length; i++) {
        val = object[i];
        if (val && val.__ob__) {
          val.__ob__.dep.depend();
        }
        if (Array.isArray(val)) {
          traverse(val);
        }
      }
    }
    /**
     * @param {(Object|string)} data
     * @param {!Object} value
     * @return {?}
     */
    function done(data, value) {
      if (!value) {
        return data;
      }
      var key;
      var result;
      var object;
      /** @type {!Array<string>} */
      var new_value = Object.keys(value);
      /** @type {number} */
      var ii = 0;
      for (; ii < new_value.length; ii++) {
        /** @type {string} */
        key = new_value[ii];
        result = data[key];
        object = value[key];
        if (hasOwn(data, key)) {
          if (isPlainObject(result) && isPlainObject(object)) {
            done(result, object);
          }
        } else {
          set(data, key, object);
        }
      }
      return data;
    }
    /**
     * @param {!Object} b
     * @param {!Object} a
     * @return {?}
     */
    function D(b, a) {
      return a ? b ? b.concat(a) : Array.isArray(a) ? a : [a] : b;
    }
    /**
     * @param {string} parentVal
     * @param {!Object} childVal
     * @return {?}
     */
    function mergeAssets(parentVal, childVal) {
      /** @type {!Object} */
      var res = Object.create(parentVal || null);
      return childVal ? extend(res, childVal) : res;
    }
    /**
     * @param {!Object} options
     * @return {undefined}
     */
    function guardProps(options) {
      var obj = options.props;
      if (obj) {
        var part;
        var val;
        var name;
        var res = {};
        if (Array.isArray(obj)) {
          part = obj.length;
          for (; part--;) {
            if ("string" == typeof(val = obj[part])) {
              name = camelize(val);
              res[name] = {
                type : null
              };
            }
          }
        } else {
          if (isPlainObject(obj)) {
            var key;
            for (key in obj) {
              val = obj[key];
              name = camelize(key);
              res[name] = isPlainObject(val) ? val : {
                type : val
              };
            }
          }
        }
        options.props = res;
      }
    }
    /**
     * @param {!Object} config
     * @return {undefined}
     */
    function getType(config) {
      var dirs = config.directives;
      if (dirs) {
        var key;
        for (key in dirs) {
          var def = dirs[key];
          if ("function" == typeof def) {
            dirs[key] = {
              bind : def,
              update : def
            };
          }
        }
      }
    }
    /**
     * @param {string} parent
     * @param {!Object} child
     * @param {?} vm
     * @return {?}
     */
    function mergeOptions(parent, child, vm) {
      /**
       * @param {string} key
       * @return {undefined}
       */
      function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      guardProps(child);
      getType(child);
      var extendsFrom = child.extends;
      if (extendsFrom && (parent = "function" == typeof extendsFrom ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm)), child.mixins) {
        /** @type {number} */
        var i = 0;
        var patchLen = child.mixins.length;
        for (; i < patchLen; i++) {
          var mixin = child.mixins[i];
          if (mixin.prototype instanceof Vue) {
            mixin = mixin.options;
          }
          parent = mergeOptions(parent, mixin, vm);
        }
      }
      var key;
      var options = {};
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      return options;
    }
    /**
     * @param {!Object} options
     * @param {string} type
     * @param {boolean} id
     * @param {boolean} warnMissing
     * @return {?}
     */
    function resolveAsset(options, type, id, warnMissing) {
      if ("string" == typeof id) {
        var item = options[type];
        if (hasOwn(item, id)) {
          return item[id];
        }
        var name = camelize(id);
        if (hasOwn(item, name)) {
          return item[name];
        }
        var property = generatePropertyDefinition(name);
        if (hasOwn(item, property)) {
          return item[property];
        }
        return item[id] || item[name] || item[property];
      }
    }
    /**
     * @param {string} key
     * @param {!Object} prop
     * @param {!Object} obj
     * @param {!Object} v
     * @return {?}
     */
    function validateProp(key, prop, obj, v) {
      var val = prop[key];
      /** @type {boolean} */
      var i = !hasOwn(obj, key);
      var value = obj[key];
      if (is(Boolean, val.type) && (i && !hasOwn(val, "default") ? value = false : is(String, val.type) || "" !== value && value !== hyphenate(key) || (value = true)), void 0 === value) {
        value = find(v, val, key);
        /** @type {boolean} */
        var prevShouldConvert = observerState.shouldConvert;
        /** @type {boolean} */
        observerState.shouldConvert = true;
        observe(value);
        /** @type {boolean} */
        observerState.shouldConvert = prevShouldConvert;
      }
      return value;
    }
    /**
     * @param {!Object} vm
     * @param {!Object} options
     * @param {string} key
     * @return {?}
     */
    function find(vm, options, key) {
      if (hasOwn(options, "default")) {
        var value = options.default;
        return isObject(value), vm && vm.$options.propsData && void 0 === vm.$options.propsData[key] && void 0 !== vm[key] ? vm[key] : "function" == typeof value && options.type !== Function ? value.call(vm) : value;
      }
    }
    /**
     * @param {!Object} value
     * @return {?}
     */
    function resolve(value) {
      var match = value && ("" + value).match(/^\s*function (\w+)/);
      return match && match[1];
    }
    /**
     * @param {string} b
     * @param {!Object} a
     * @return {?}
     */
    function is(b, a) {
      if (!Array.isArray(a)) {
        return resolve(a) === resolve(b);
      }
      /** @type {number} */
      var i = 0;
      var az = a.length;
      for (; i < az; i++) {
        if (resolve(a[i]) === resolve(b)) {
          return true;
        }
      }
      return false;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function h(value) {
      return new VNode(void 0, void 0, void 0, value + "");
    }
    /**
     * @param {!Object} vnode
     * @return {?}
     */
    function apply(vnode) {
      var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
      return cloned.ns = vnode.ns, cloned.isStatic = vnode.isStatic, cloned.key = vnode.key, cloned.isCloned = true, cloned;
    }
    /**
     * @param {!NodeList} obj
     * @return {?}
     */
    function cloneVNodes(obj) {
      /** @type {!Array} */
      var res = Array(obj.length);
      /** @type {number} */
      var i = 0;
      for (; i < obj.length; i++) {
        res[i] = apply(obj[i]);
      }
      return res;
    }
    /**
     * @param {string} value
     * @param {string} data
     * @param {string} context
     * @param {!Object} node
     * @param {!Object} tag
     * @return {?}
     */
    function run(value, data, context, node, tag) {
      if (value) {
        var module = context.$options._base;
        if (isObject(value) && (value = module.extend(value)), "function" == typeof value) {
          if (!value.cid) {
            if (value.resolved) {
              value = value.resolved;
            } else {
              if (!(value = require(value, module, function() {
                context.$forceUpdate();
              }))) {
                return;
              }
            }
          }
          start(value);
          data = data || {};
          var result = recurse(data, value);
          if (value.options.functional) {
            return process(value, result, data, context, node);
          }
          var listeners = data.on;
          data.on = data.nativeOn;
          if (value.options.abstract) {
            data = {};
          }
          onError(data);
          var name = value.options.name || tag;
          return new VNode("vue-component-" + value.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {
            Ctor : value,
            propsData : result,
            listeners : listeners,
            tag : tag,
            children : node
          });
        }
      }
    }
    /**
     * @param {string} t
     * @param {!Object} f
     * @param {!Object} data
     * @param {!Object} context
     * @param {!Object} children
     * @return {?}
     */
    function process(t, f, data, context, children) {
      var out = {};
      var props = t.options.props;
      if (props) {
        var key;
        for (key in props) {
          out[key] = validateProp(key, props, f);
        }
      }
      /** @type {!Object} */
      var bytes = Object.create(context);
      /**
       * @param {!Object} subscriptionName
       * @param {!Object} message
       * @param {!Object} target
       * @param {!Object} type
       * @return {?}
       */
      var test = function(subscriptionName, message, target, type) {
        return format(bytes, subscriptionName, message, target, type, true);
      };
      var vnode = t.options.render.call(null, test, {
        props : out,
        data : data,
        parent : context,
        children : children,
        slots : function() {
          return filter(children, context);
        }
      });
      return vnode instanceof VNode && (vnode.functionalContext = context, data.slot && ((vnode.data || (vnode.data = {})).slot = data.slot)), vnode;
    }
    /**
     * @param {!Object} vnode
     * @param {!Object} parent
     * @param {!Function} className
     * @param {string} moduleName
     * @return {?}
     */
    function bind(vnode, parent, className, moduleName) {
      var vnodeComponentOptions = vnode.componentOptions;
      var options = {
        _isComponent : true,
        parent : parent,
        propsData : vnodeComponentOptions.propsData,
        _componentTag : vnodeComponentOptions.tag,
        _parentVnode : vnode,
        _parentListeners : vnodeComponentOptions.listeners,
        _renderChildren : vnodeComponentOptions.children,
        _parentElm : className || null,
        _refElm : moduleName || null
      };
      var inlineTemplate = vnode.data.inlineTemplate;
      return inlineTemplate && (options.render = inlineTemplate.render, options.staticRenderFns = inlineTemplate.staticRenderFns), new vnodeComponentOptions.Ctor(options);
    }
    /**
     * @param {!Object} value
     * @param {string} key
     * @param {!Function} name
     * @param {string} url
     * @return {undefined}
     */
    function send(value, key, name, url) {
      if (!value.componentInstance || value.componentInstance._isDestroyed) {
        (value.componentInstance = bind(value, activeInstance, name, url)).$mount(key ? value.elm : void 0, key);
      } else {
        if (value.data.keepAlive) {
          /** @type {!Object} */
          var target = value;
          _validate(target, target);
        }
      }
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {undefined}
     */
    function _validate(target, key) {
      var options = key.componentOptions;
      (key.componentInstance = target.componentInstance)._updateFromParent(options.propsData, options.listeners, key, options.children);
    }
    /**
     * @param {!Object} vnode
     * @return {undefined}
     */
    function mount(vnode) {
      if (!vnode.componentInstance._isMounted) {
        /** @type {boolean} */
        vnode.componentInstance._isMounted = true;
        callHook(vnode.componentInstance, "mounted");
      }
      if (vnode.data.keepAlive) {
        /** @type {boolean} */
        vnode.componentInstance._inactive = false;
        callHook(vnode.componentInstance, "activated");
      }
    }
    /**
     * @param {!Object} target
     * @return {undefined}
     */
    function destroyed(target) {
      if (!target.componentInstance._isDestroyed) {
        if (target.data.keepAlive) {
          /** @type {boolean} */
          target.componentInstance._inactive = true;
          callHook(target.componentInstance, "deactivated");
        } else {
          target.componentInstance.$destroy();
        }
      }
    }
    /**
     * @param {!Object} factory
     * @param {!Object} parent
     * @param {string} cb
     * @return {?}
     */
    function require(factory, parent, cb) {
      if (!factory.requested) {
        /** @type {boolean} */
        factory.requested = true;
        /** @type {!Array} */
        var globalFilters = factory.pendingCallbacks = [cb];
        /** @type {boolean} */
        var o = true;
        /**
         * @param {string} res
         * @return {undefined}
         */
        var resolve = function(res) {
          if (isObject(res) && (res = parent.extend(res)), factory.resolved = res, !o) {
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var gLen = globalFilters.length;
            for (; j < gLen; j++) {
              globalFilters[j](res);
            }
          }
        };
        /**
         * @param {?} theResponseTXT
         * @return {undefined}
         */
        var callback = function(theResponseTXT) {
        };
        var res = factory(resolve, callback);
        return res && "function" == typeof res.then && !factory.resolved && res.then(resolve, callback), o = false, factory.resolved;
      }
      factory.pendingCallbacks.push(cb);
    }
    /**
     * @param {!Object} data
     * @param {string} options
     * @return {?}
     */
    function recurse(data, options) {
      var toAdd = options.options.props;
      if (toAdd) {
        var model = {};
        var attrs = data.attrs;
        var props = data.props;
        var domProps = data.domProps;
        if (attrs || props || domProps) {
          var name;
          for (name in toAdd) {
            var node = hyphenate(name);
            if (!(result(model, props, name, node, true) || result(model, attrs, name, node))) {
              result(model, domProps, name, node);
            }
          }
        }
        return model;
      }
    }
    /**
     * @param {!Object} target
     * @param {!Object} obj
     * @param {string} key
     * @param {string} property
     * @param {string} fallback
     * @return {?}
     */
    function result(target, obj, key, property, fallback) {
      if (obj) {
        if (hasOwn(obj, key)) {
          return target[key] = obj[key], fallback || delete obj[key], true;
        }
        if (hasOwn(obj, property)) {
          return target[key] = obj[property], fallback || delete obj[property], true;
        }
      }
      return false;
    }
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    function onError(data) {
      if (!data.hook) {
        data.hook = {};
      }
      /** @type {number} */
      var i = 0;
      for (; i < product.length; i++) {
        /** @type {string} */
        var name = product[i];
        var callback = data.hook[name];
        var value = service[name];
        data.hook[name] = callback ? listen(value, callback) : value;
      }
    }
    /**
     * @param {?} obj
     * @param {?} fn
     * @return {?}
     */
    function listen(obj, fn) {
      return function(elem, locals, ext, key) {
        obj(elem, locals, ext, key);
        fn(elem, locals, ext, key);
      };
    }
    /**
     * @param {!Object} val
     * @param {string} type
     * @param {!Function} value
     * @param {string} key
     * @return {undefined}
     */
    function contains(val, type, value, key) {
      key = key + type;
      var closedFrames = val.__injected || (val.__injected = {});
      if (!closedFrames[key]) {
        /** @type {boolean} */
        closedFrames[key] = true;
        var item = val[type];
        val[type] = item ? function() {
          item.apply(this, arguments);
          value.apply(this, arguments);
        } : value;
      }
    }
    /**
     * @param {!Function} name
     * @return {?}
     */
    function parseType(name) {
      var helperOptions = {
        fn : name,
        invoker : function() {
          /** @type {!Arguments} */
          var original_arguments = arguments;
          var tmp = helperOptions.fn;
          if (Array.isArray(tmp)) {
            /** @type {number} */
            var i = 0;
            for (; i < tmp.length; i++) {
              tmp[i].apply(null, original_arguments);
            }
          } else {
            tmp.apply(null, arguments);
          }
        }
      };
      return helperOptions;
    }
    /**
     * @param {!Array} row
     * @param {!Array} columns
     * @param {!Function} f
     * @param {!Function} func
     * @param {?} hasher
     * @return {undefined}
     */
    function init(row, columns, f, func, hasher) {
      var key;
      var value;
      var result;
      var spec;
      for (key in row) {
        value = row[key];
        result = columns[key];
        spec = all(key);
        if (value) {
          if (result) {
            if (value !== result) {
              result.fn = value;
              row[key] = result;
            }
          } else {
            if (!value.invoker) {
              value = row[key] = parseType(value);
            }
            f(spec.name, value.invoker, spec.once, spec.capture);
          }
        }
      }
      for (key in columns) {
        if (!row[key]) {
          spec = all(key);
          func(spec.name, columns[key].invoker, spec.capture);
        }
      }
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function merge(obj) {
      /** @type {number} */
      var i = 0;
      for (; i < obj.length; i++) {
        if (Array.isArray(obj[i])) {
          return Array.prototype.concat.apply([], obj);
        }
      }
      return obj;
    }
    /**
     * @param {!Object} result
     * @return {?}
     */
    function display(result) {
      return isArray(result) ? [h(result)] : Array.isArray(result) ? render(result) : void 0;
    }
    /**
     * @param {!Object} t
     * @param {!Object} id
     * @return {?}
     */
    function render(t, id) {
      var j;
      var c;
      var last;
      /** @type {!Array} */
      var out = [];
      /** @type {number} */
      j = 0;
      for (; j < t.length; j++) {
        if (null != (c = t[j]) && "boolean" != typeof c) {
          last = out[out.length - 1];
          if (Array.isArray(c)) {
            out.push.apply(out, render(c, (id || "") + "_" + j));
          } else {
            if (isArray(c)) {
              if (last && last.text) {
                last.text += c + "";
              } else {
                if ("" !== c) {
                  out.push(h(c));
                }
              }
            } else {
              if (c.text && last && last.text) {
                out[out.length - 1] = h(last.text + c.text);
              } else {
                if (c.tag && null == c.key && null != id) {
                  /** @type {string} */
                  c.key = "__vlist" + id + "_" + j + "__";
                }
                out.push(c);
              }
            }
          }
        }
      }
      return out;
    }
    /**
     * @param {!Object} indices
     * @return {?}
     */
    function getChild(indices) {
      return indices && indices.filter(function(child) {
        return child && child.componentOptions;
      })[0];
    }
    /**
     * @param {!Function} obj
     * @param {!Object} name
     * @param {!Object} arg
     * @param {!Object} b
     * @param {!Object} a
     * @param {boolean} item
     * @return {?}
     */
    function format(obj, name, arg, b, a, item) {
      return (Array.isArray(arg) || isArray(arg)) && (a = b, b = arg, arg = void 0), item && (a = UNDEFINED), del(obj, name, arg, b, a);
    }
    /**
     * @param {string} context
     * @param {!Object} tag
     * @param {string} data
     * @param {string} value
     * @param {?} o
     * @return {?}
     */
    function del(context, tag, data, value, o) {
      if (data && data.__ob__) {
        return then();
      }
      if (!tag) {
        return then();
      }
      if (Array.isArray(value) && "function" == typeof value[0]) {
        data = data || {};
        data.scopedSlots = {
          default : value[0]
        };
        /** @type {number} */
        value.length = 0;
      }
      if (o === UNDEFINED) {
        value = display(value);
      } else {
        if (o === mutations_built) {
          value = merge(value);
        }
      }
      var result;
      var children;
      if ("string" == typeof tag) {
        var Ctor;
        children = config.getTagNamespace(tag);
        result = config.isReservedTag(tag) ? new VNode(config.parsePlatformTagName(tag), data, value, void 0, void 0, context) : (Ctor = resolveAsset(context.$options, "components", tag)) ? run(Ctor, data, context, value, tag) : new VNode(tag, data, value, void 0, void 0, context);
      } else {
        result = run(tag, data, context, value);
      }
      return result ? (children && addNS(result, children), result) : then();
    }
    /**
     * @param {!Object} data
     * @param {string} children
     * @return {undefined}
     */
    function addNS(data, children) {
      if (data.ns = children, "foreignObject" !== data.tag && data.children) {
        /** @type {number} */
        var n = 0;
        var numberOfFrustums = data.children.length;
        for (; n < numberOfFrustums; n++) {
          var entry = data.children[n];
          if (entry.tag && !entry.ns) {
            addNS(entry, children);
          }
        }
      }
    }
    /**
     * @param {!Object} vm
     * @return {undefined}
     */
    function getValidationModel(vm) {
      /** @type {null} */
      vm.$vnode = null;
      /** @type {null} */
      vm._vnode = null;
      /** @type {null} */
      vm._staticTrees = null;
      var entry = vm.$options._parentVnode;
      var result = entry && entry.context;
      vm.$slots = filter(vm.$options._renderChildren, result);
      vm.$scopedSlots = {};
      /**
       * @param {!Object} a
       * @param {!Object} s
       * @param {!Object} d
       * @param {!Object} className
       * @return {?}
       */
      vm._c = function(a, s, d, className) {
        return format(vm, a, s, d, className, false);
      };
      /**
       * @param {!Object} children
       * @param {!Object} tag
       * @param {!Object} data
       * @param {!Object} t
       * @return {?}
       */
      vm.$createElement = function(children, tag, data, t) {
        return format(vm, children, tag, data, t, true);
      };
    }
    /**
     * @param {!Object} children
     * @param {!Object} context
     * @return {?}
     */
    function filter(children, context) {
      var slots = {};
      if (!children) {
        return slots;
      }
      var slotName;
      var child;
      /** @type {!Array} */
      var defaultSlot = [];
      /** @type {number} */
      var i = 0;
      var length = children.length;
      for (; i < length; i++) {
        if (child = children[i], (child.context === context || child.functionalContext === context) && child.data && (slotName = child.data.slot)) {
          var nodesToSearch = slots[slotName] || (slots[slotName] = []);
          if ("template" === child.tag) {
            nodesToSearch.push.apply(nodesToSearch, child.children);
          } else {
            nodesToSearch.push(child);
          }
        } else {
          defaultSlot.push(child);
        }
      }
      return defaultSlot.length && (1 !== defaultSlot.length || " " !== defaultSlot[0].text && !defaultSlot[0].isComment) && (slots.default = defaultSlot), slots;
    }
    /**
     * @param {?} vm
     * @return {undefined}
     */
    function addComponentEventListener(vm) {
      /** @type {!Object} */
      vm._events = Object.create(null);
      /** @type {boolean} */
      vm._hasHookEvent = false;
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        isUndefined(vm, listeners);
      }
    }
    /**
     * @param {?} event
     * @param {undefined} callback
     * @param {?} toggle
     * @return {undefined}
     */
    function progress(event, callback, toggle) {
      if (toggle) {
        vm.$once(event, callback);
      } else {
        vm.$on(event, callback);
      }
    }
    /**
     * @param {?} event
     * @param {!Function} callback
     * @return {undefined}
     */
    function on(event, callback) {
      vm.$off(event, callback);
    }
    /**
     * @param {?} obj
     * @param {?} a
     * @param {number} v
     * @return {undefined}
     */
    function isUndefined(obj, a, v) {
      vm = obj;
      init(a, v || {}, progress, on, obj);
    }
    /**
     * @param {string} vm
     * @return {undefined}
     */
    function save(vm) {
      var options = vm.$options;
      var parent = options.parent;
      if (parent && !options.abstract) {
        for (; parent.$options.abstract && parent.$parent;) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
      /** @type {!Array} */
      vm.$children = [];
      vm.$refs = {};
      /** @type {null} */
      vm._watcher = null;
      /** @type {boolean} */
      vm._inactive = false;
      /** @type {boolean} */
      vm._isMounted = false;
      /** @type {boolean} */
      vm._isDestroyed = false;
      /** @type {boolean} */
      vm._isBeingDestroyed = false;
    }
    /**
     * @param {!Object} vm
     * @param {string} hook
     * @return {undefined}
     */
    function callHook(vm, hook) {
      var fns = vm.$options[hook];
      if (fns) {
        /** @type {number} */
        var i = 0;
        var l = fns.length;
        for (; i < l; i++) {
          fns[i].call(vm);
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit("hook:" + hook);
      }
    }
    /**
     * @return {undefined}
     */
    function _reconstruct_manageable_object() {
      /** @type {number} */
      a.length = 0;
      info = {};
      /** @type {boolean} */
      gasSum = costSum = false;
    }
    /**
     * @return {undefined}
     */
    function func() {
      /** @type {boolean} */
      costSum = true;
      var data;
      var time;
      var vm;
      a.sort(function(a, b) {
        return a.id - b.id;
      });
      /** @type {number} */
      i = 0;
      for (; i < a.length; i++) {
        data = a[i];
        time = data.id;
        /** @type {null} */
        info[time] = null;
        data.run();
      }
      /** @type {number} */
      i = a.length;
      for (; i--;) {
        data = a[i];
        vm = data.vm;
        if (vm._watcher === data && vm._isMounted) {
          callHook(vm, "updated");
        }
      }
      if (events && config.devtools) {
        events.emit("flush");
      }
      _reconstruct_manageable_object();
    }
    /**
     * @param {string} e
     * @return {undefined}
     */
    function outputPacket(e) {
      var hash = e.id;
      if (null == info[hash]) {
        if (info[hash] = true, costSum) {
          /** @type {number} */
          var num = a.length - 1;
          for (; num >= 0 && a[num].id > e.id;) {
            num--;
          }
          a.splice(Math.max(num, i) + 1, 0, e);
        } else {
          a.push(e);
        }
        if (!gasSum) {
          /** @type {boolean} */
          gasSum = true;
          nextTick(func);
        }
      }
    }
    /**
     * @param {!Object} obj
     * @return {undefined}
     */
    function checkAndAddDescendantIfModel(obj) {
      keys.clear();
      check(obj, keys);
    }
    /**
     * @param {!Object} val
     * @param {!Object} keys
     * @return {undefined}
     */
    function check(val, keys) {
      var i;
      var names;
      /** @type {boolean} */
      var isArr = Array.isArray(val);
      if ((isArr || isObject(val)) && Object.isExtensible(val)) {
        if (val.__ob__) {
          var i = val.__ob__.dep.id;
          if (keys.has(i)) {
            return;
          }
          keys.add(i);
        }
        if (isArr) {
          i = val.length;
          for (; i--;) {
            check(val[i], keys);
          }
        } else {
          /** @type {!Array<string>} */
          names = Object.keys(val);
          /** @type {number} */
          i = names.length;
          for (; i--;) {
            check(val[names[i]], keys);
          }
        }
      }
    }
    /**
     * @param {?} vm
     * @return {undefined}
     */
    function initState(vm) {
      /** @type {!Array} */
      vm._watchers = [];
      var options = vm.$options;
      if (options.props) {
        assign(vm, options.props);
      }
      if (options.methods) {
        initMethods(vm, options.methods);
      }
      if (options.data) {
        get(vm);
      } else {
        observe(vm._data = {}, true);
      }
      if (options.computed) {
        initComputed(vm, options.computed);
      }
      if (options.watch) {
        log(vm, options.watch);
      }
    }
    /**
     * @param {!Object} vm
     * @param {undefined} val
     * @return {undefined}
     */
    function assign(vm, val) {
      var required = vm.$options.propsData || {};
      /** @type {!Array<string>} */
      var resultKeys = vm.$options._propKeys = Object.keys(val);
      /** @type {boolean} */
      var isRoot = !vm.$parent;
      /** @type {boolean} */
      observerState.shouldConvert = isRoot;
      /** @type {number} */
      var i = 0;
      for (; i < resultKeys.length; i++) {
        !function(index) {
          /** @type {string} */
          var key = resultKeys[index];
          defineReactive(vm, key, validateProp(key, val, required, vm));
        }(i);
      }
      /** @type {boolean} */
      observerState.shouldConvert = true;
    }
    /**
     * @param {?} obj
     * @return {undefined}
     */
    function get(obj) {
      var val = obj.$options.data;
      val = obj._data = "function" == typeof val ? val.call(obj) : val || {};
      if (!isPlainObject(val)) {
        val = {};
      }
      /** @type {!Array<string>} */
      var keys = Object.keys(val);
      var props = obj.$options.props;
      /** @type {number} */
      var i = keys.length;
      for (; i--;) {
        if (!(props && hasOwn(props, keys[i]))) {
          proxy(obj, keys[i]);
        }
      }
      observe(val, true);
    }
    /**
     * @param {string} name
     * @param {!Object} fn
     * @return {undefined}
     */
    function initComputed(name, fn) {
      var f;
      for (f in fn) {
        var obj = fn[f];
        if ("function" == typeof obj) {
          desc.get = wrap(obj, name);
          /** @type {function(): undefined} */
          desc.set = noop;
        } else {
          desc.get = obj.get ? false !== obj.cache ? wrap(obj.get, name) : expect(obj.get, name) : noop;
          desc.set = obj.set ? expect(obj.set, name) : noop;
        }
        Object.defineProperty(name, f, desc);
      }
    }
    /**
     * @param {!Function} scope
     * @param {string} path
     * @return {?}
     */
    function wrap(scope, path) {
      var watcher = new Watcher(path, scope, noop, {
        lazy : true
      });
      return function() {
        return watcher.dirty && watcher.evaluate(), Dep.target && watcher.depend(), watcher.value;
      };
    }
    /**
     * @param {string} options
     * @param {!Object} instance
     * @return {undefined}
     */
    function initMethods(options, instance) {
      var method;
      for (method in instance) {
        options[method] = null == instance[method] ? noop : expect(instance[method], options);
      }
    }
    /**
     * @param {!Array} obj
     * @param {!Object} values
     * @return {undefined}
     */
    function log(obj, values) {
      var j;
      for (j in values) {
        var a = values[j];
        if (Array.isArray(a)) {
          /** @type {number} */
          var i = 0;
          for (; i < a.length; i++) {
            debug(obj, j, a[i]);
          }
        } else {
          debug(obj, j, a);
        }
      }
    }
    /**
     * @param {!Object} scope
     * @param {string} key
     * @param {!Object} callback
     * @return {undefined}
     */
    function debug(scope, key, callback) {
      var options;
      if (isPlainObject(callback)) {
        /** @type {!Object} */
        options = callback;
        callback = callback.handler;
      }
      if ("string" == typeof callback) {
        callback = scope[callback];
      }
      scope.$watch(key, callback, options);
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {undefined}
     */
    function proxy(target, key) {
      if (!isReserved(key)) {
        Object.defineProperty(target, key, {
          configurable : true,
          enumerable : true,
          get : function() {
            return target._data[key];
          },
          set : function(name) {
            target._data[key] = name;
          }
        });
      }
    }
    /**
     * @param {!Object} data
     * @param {!Object} options
     * @return {undefined}
     */
    function compile(data, options) {
      /** @type {!Object} */
      var opts = data.$options = Object.create(data.constructor.options);
      opts.parent = options.parent;
      opts.propsData = options.propsData;
      opts._parentVnode = options._parentVnode;
      opts._parentListeners = options._parentListeners;
      opts._renderChildren = options._renderChildren;
      opts._componentTag = options._componentTag;
      opts._parentElm = options._parentElm;
      opts._refElm = options._refElm;
      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }
    /**
     * @param {!Object} Ctor
     * @return {?}
     */
    function start(Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = Ctor.super.options;
        var cachedSuperOptions = Ctor.superOptions;
        var extendOptions = Ctor.extendOptions;
        if (superOptions !== cachedSuperOptions) {
          Ctor.superOptions = superOptions;
          extendOptions.render = options.render;
          extendOptions.staticRenderFns = options.staticRenderFns;
          extendOptions._scopeId = options._scopeId;
          options = Ctor.options = mergeOptions(superOptions, extendOptions);
          if (options.name) {
            /** @type {!Object} */
            options.components[options.name] = Ctor;
          }
        }
      }
      return options;
    }
    /**
     * @param {!Object} obj
     * @return {undefined}
     */
    function Vue(obj) {
      this._init(obj);
    }
    /**
     * @param {!Function} o
     * @return {undefined}
     */
    function request(o) {
      /**
       * @param {!Object} self
       * @return {?}
       */
      o.use = function(self) {
        if (!self.installed) {
          var rest = toArray(arguments, 1);
          return rest.unshift(this), "function" == typeof self.install ? self.install.apply(self, rest) : self.apply(null, rest), self.installed = true, this;
        }
      };
    }
    /**
     * @param {!Function} props
     * @return {undefined}
     */
    function mixin(props) {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      props.mixin = function(options) {
        this.options = mergeOptions(this.options, options);
      };
    }
    /**
     * @param {!Object} hash
     * @return {undefined}
     */
    function createRegistryWrapper(hash) {
      /** @type {number} */
      hash.cid = 0;
      /** @type {number} */
      var cid = 1;
      /**
       * @param {!Object} extendOptions
       * @return {?}
       */
      hash.extend = function(extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var name = Super.cid;
        var processedOptions = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (processedOptions[name]) {
          return processedOptions[name];
        }
        var i = extendOptions.name || Super.options.name;
        /**
         * @param {!Object} options
         * @return {undefined}
         */
        var Sub = function(options) {
          this._init(options);
        };
        return Sub.prototype = Object.create(Super.prototype), Sub.prototype.constructor = Sub, Sub.cid = cid++, Sub.options = mergeOptions(Super.options, extendOptions), Sub.super = Super, Sub.extend = Super.extend, Sub.mixin = Super.mixin, Sub.use = Super.use, config._assetTypes.forEach(function(key) {
          Sub[key] = Super[key];
        }), i && (Sub.options.components[i] = Sub), Sub.superOptions = Super.options, Sub.extendOptions = extendOptions, processedOptions[name] = Sub, Sub;
      };
    }
    /**
     * @param {!Function} callback
     * @return {undefined}
     */
    function collectBoards(callback) {
      config._assetTypes.forEach(function(component) {
        /**
         * @param {string} name
         * @param {!Object} definition
         * @return {?}
         */
        callback[component] = function(name, definition) {
          return definition ? ("component" === component && isPlainObject(definition) && (definition.name = definition.name || name, definition = this.options._base.extend(definition)), "directive" === component && "function" == typeof definition && (definition = {
            bind : definition,
            update : definition
          }), this.options[component + "s"][name] = definition, definition) : this.options[component + "s"][name];
        };
      });
    }
    /**
     * @param {!Object} opts
     * @return {?}
     */
    function parseArgs(opts) {
      return opts && (opts.Ctor.options.name || opts.tag);
    }
    /**
     * @param {string} v
     * @param {?} a
     * @return {?}
     */
    function m(v, a) {
      return "string" == typeof v ? v.split(",").indexOf(a) > -1 : v.test(a);
    }
    /**
     * @param {!Object} args
     * @param {!Function} cb
     * @return {undefined}
     */
    function call(args, cb) {
      var i;
      for (i in args) {
        var child = args[i];
        if (child) {
          var ret = parseArgs(child.componentOptions);
          if (ret && !cb(ret)) {
            destroy(child);
            /** @type {null} */
            args[i] = null;
          }
        }
      }
    }
    /**
     * @param {?} vnode
     * @return {undefined}
     */
    function destroy(vnode) {
      if (vnode) {
        if (!vnode.componentInstance._inactive) {
          callHook(vnode.componentInstance, "deactivated");
        }
        vnode.componentInstance.$destroy();
      }
    }
    /**
     * @param {!Object} node
     * @return {?}
     */
    function replace(node) {
      var key = node.data;
      /** @type {!Object} */
      var n = node;
      /** @type {!Object} */
      var innerNode = node;
      for (; innerNode.componentInstance;) {
        innerNode = innerNode.componentInstance._vnode;
        if (innerNode.data) {
          key = id(innerNode.data, key);
        }
      }
      for (; n = n.parent;) {
        if (n.data) {
          key = id(key, n.data);
        }
      }
      return getStyle(key);
    }
    /**
     * @param {!Object} el
     * @param {!Object} data
     * @return {?}
     */
    function id(el, data) {
      return {
        staticClass : equal(el.staticClass, data.staticClass),
        class : el.class ? [el.class, data.class] : data.class
      };
    }
    /**
     * @param {!Object} el
     * @return {?}
     */
    function getStyle(el) {
      var m = el.class;
      var value = el.staticClass;
      return value || m ? equal(value, match(m)) : "";
    }
    /**
     * @param {string} a
     * @param {number} b
     * @return {?}
     */
    function equal(a, b) {
      return a ? b ? a + " " + b : a : b || "";
    }
    /**
     * @param {!Object} a
     * @return {?}
     */
    function match(a) {
      /** @type {string} */
      var res = "";
      if (!a) {
        return res;
      }
      if ("string" == typeof a) {
        return a;
      }
      if (Array.isArray(a)) {
        var o;
        /** @type {number} */
        var i = 0;
        var az = a.length;
        for (; i < az; i++) {
          if (a[i] && (o = match(a[i]))) {
            /** @type {string} */
            res = res + (o + " ");
          }
        }
        return res.slice(0, -1);
      }
      if (isObject(a)) {
        var i;
        for (i in a) {
          if (a[i]) {
            /** @type {string} */
            res = res + (i + " ");
          }
        }
        return res.slice(0, -1);
      }
      return res;
    }
    /**
     * @param {!Object} name
     * @return {?}
     */
    function createNode(name) {
      return isNpmModule(name) ? "svg" : "math" === name ? "math" : void 0;
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function register(name) {
      if (!inBrowser) {
        return true;
      }
      if (define(name)) {
        return false;
      }
      if (name = name.toLowerCase(), null != processedOptions[name]) {
        return processedOptions[name];
      }
      /** @type {!Element} */
      var e = document.createElement(name);
      return name.indexOf("-") > -1 ? processedOptions[name] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : processedOptions[name] = /HTMLUnknownElement/.test("" + e);
    }
    /**
     * @param {string} id
     * @return {?}
     */
    function $(id) {
      if ("string" == typeof id) {
        if (!(id = document.querySelector(id))) {
          return document.createElement("div");
        }
      }
      return id;
    }
    /**
     * @param {string} node
     * @param {!Object} vnode
     * @return {?}
     */
    function createElement(node, vnode) {
      /** @type {!Element} */
      var select = document.createElement(node);
      return "select" !== node ? select : (vnode.data && vnode.data.attrs && "multiple" in vnode.data.attrs && select.setAttribute("multiple", "multiple"), select);
    }
    /**
     * @param {?} index
     * @param {?} name
     * @return {?}
     */
    function createGroup(index, name) {
      return document.createElementNS(args[index], name);
    }
    /**
     * @param {string} data
     * @return {?}
     */
    function createTextNode(data) {
      return document.createTextNode(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    function createComment(data) {
      return document.createComment(data);
    }
    /**
     * @param {!Object} node
     * @param {string} element
     * @param {boolean} reference
     * @return {undefined}
     */
    function insertBefore(node, element, reference) {
      node.insertBefore(element, reference);
    }
    /**
     * @param {!Node} t
     * @param {!Node} e
     * @return {undefined}
     */
    function doSplay(t, e) {
      t.removeChild(e);
    }
    /**
     * @param {!Element} text
     * @param {!Element} node
     * @return {undefined}
     */
    function appendChild(text, node) {
      text.appendChild(node);
    }
    /**
     * @param {!Node} p
     * @return {?}
     */
    function parent(p) {
      return p.parentNode;
    }
    /**
     * @param {!Node} elm
     * @return {?}
     */
    function nextSibling(elm) {
      return elm.nextSibling;
    }
    /**
     * @param {!Object} elm
     * @return {?}
     */
    function tagName(elm) {
      return elm.tagName;
    }
    /**
     * @param {!Node} e
     * @param {string} node
     * @return {undefined}
     */
    function setTextContent(e, node) {
      /** @type {string} */
      e.textContent = node;
    }
    /**
     * @param {!Object} name
     * @param {string} item
     * @param {string} key
     * @return {undefined}
     */
    function setAttribute(name, item, key) {
      name.setAttribute(item, key);
    }
    /**
     * @param {!Object} vnode
     * @param {boolean} options
     * @return {undefined}
     */
    function add(vnode, options) {
      var i = vnode.data.ref;
      if (i) {
        var vm = vnode.context;
        var k = vnode.componentInstance || vnode.elm;
        var refs = vm.$refs;
        if (options) {
          if (Array.isArray(refs[i])) {
            remove(refs[i], k);
          } else {
            if (refs[i] === k) {
              refs[i] = void 0;
            }
          }
        } else {
          if (vnode.data.refInFor) {
            if (Array.isArray(refs[i]) && refs[i].indexOf(k) < 0) {
              refs[i].push(k);
            } else {
              /** @type {!Array} */
              refs[i] = [k];
            }
          } else {
            refs[i] = k;
          }
        }
      }
    }
    /**
     * @param {!Object} s
     * @return {?}
     */
    function isUndef(s) {
      return null == s;
    }
    /**
     * @param {!Object} s
     * @return {?}
     */
    function isDef(s) {
      return null != s;
    }
    /**
     * @param {!Object} a
     * @param {!Object} b
     * @return {?}
     */
    function sameVnode(a, b) {
      return a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && !a.data == !b.data;
    }
    /**
     * @param {!Object} children
     * @param {number} beginIdx
     * @param {number} endIdx
     * @return {?}
     */
    function createKeyToOldIdx(children, beginIdx, endIdx) {
      var i;
      var key;
      var map = {};
      /** @type {number} */
      i = beginIdx;
      for (; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) {
          map[key] = i;
        }
      }
      return map;
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {undefined}
     */
    function connect(target, key) {
      if (target.data.directives || key.data.directives) {
        update(target, key);
      }
    }
    /**
     * @param {!Object} root
     * @param {!Object} name
     * @return {undefined}
     */
    function update(root, name) {
      var i;
      var prop;
      var dir;
      /** @type {boolean} */
      var isDocumentRoot = root === node;
      /** @type {boolean} */
      var selected = name === node;
      var config = join(root.data.directives, root.context);
      var result = join(name.data.directives, name.context);
      /** @type {!Array} */
      var argsArray = [];
      /** @type {!Array} */
      var w = [];
      for (i in result) {
        prop = config[i];
        dir = result[i];
        if (prop) {
          dir.oldValue = prop.value;
          defineProperty(dir, "update", name, root);
          if (dir.def && dir.def.componentUpdated) {
            w.push(dir);
          }
        } else {
          defineProperty(dir, "bind", name, root);
          if (dir.def && dir.def.inserted) {
            argsArray.push(dir);
          }
        }
      }
      if (argsArray.length) {
        /**
         * @return {undefined}
         */
        var equals = function() {
          /** @type {number} */
          var i = 0;
          for (; i < argsArray.length; i++) {
            defineProperty(argsArray[i], "inserted", name, root);
          }
        };
        if (isDocumentRoot) {
          contains(name.data.hook || (name.data.hook = {}), "insert", equals, "dir-insert");
        } else {
          equals();
        }
      }
      if (w.length && contains(name.data.hook || (name.data.hook = {}), "postpatch", function() {
        /** @type {number} */
        var i = 0;
        for (; i < w.length; i++) {
          defineProperty(w[i], "componentUpdated", name, root);
        }
      }, "dir-postpatch"), !isDocumentRoot) {
        for (i in config) {
          if (!result[i]) {
            defineProperty(config[i], "unbind", root, root, selected);
          }
        }
      }
    }
    /**
     * @param {!Array} params
     * @param {?} context
     * @return {?}
     */
    function join(params, context) {
      /** @type {!Object} */
      var res = Object.create(null);
      if (!params) {
        return res;
      }
      var i;
      var dir;
      /** @type {number} */
      i = 0;
      for (; i < params.length; i++) {
        dir = params[i];
        if (!dir.modifiers) {
          /** @type {!Object} */
          dir.modifiers = e;
        }
        res[convert(dir)] = dir;
        dir.def = resolveAsset(context.$options, "directives", dir.name, true);
      }
      return res;
    }
    /**
     * @param {!Object} dir
     * @return {?}
     */
    function convert(dir) {
      return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
    }
    /**
     * @param {!Object} key
     * @param {string} hook
     * @param {!Object} obj
     * @param {!Object} options
     * @param {boolean} prop
     * @return {undefined}
     */
    function defineProperty(key, hook, obj, options, prop) {
      var transform = key.def && key.def[hook];
      if (transform) {
        transform(obj.elm, key, obj, options, prop);
      }
    }
    /**
     * @param {!Object} obj
     * @param {string} data
     * @return {undefined}
     */
    function create(obj, data) {
      if (obj.data.attrs || data.data.attrs) {
        var attrName;
        var value;
        var elem = data.elm;
        var settings = obj.data.attrs || {};
        var attrs = data.data.attrs || {};
        if (attrs.__ob__) {
          attrs = data.data.attrs = extend({}, attrs);
        }
        for (attrName in attrs) {
          value = attrs[attrName];
          if (settings[attrName] !== value) {
            setAttr(elem, attrName, value);
          }
        }
        if (isIE9 && attrs.value !== settings.value) {
          setAttr(elem, "value", attrs.value);
        }
        for (attrName in settings) {
          if (null == attrs[attrName]) {
            if (attr(attrName)) {
              elem.removeAttributeNS(xlinkns, getAttribute(attrName));
            } else {
              if (!getAttrNamespace(attrName)) {
                elem.removeAttribute(attrName);
              }
            }
          }
        }
      }
    }
    /**
     * @param {!Element} elem
     * @param {string} attrName
     * @param {string} value
     * @return {undefined}
     */
    function setAttr(elem, attrName, value) {
      if (parseAttrName(attrName)) {
        if (isFunction(value)) {
          elem.removeAttribute(attrName);
        } else {
          elem.setAttribute(attrName, attrName);
        }
      } else {
        if (getAttrNamespace(attrName)) {
          elem.setAttribute(attrName, isFunction(value) || "false" === value ? "false" : "true");
        } else {
          if (attr(attrName)) {
            if (isFunction(value)) {
              elem.removeAttributeNS(xlinkns, getAttribute(attrName));
            } else {
              elem.setAttributeNS(xlinkns, attrName, value);
            }
          } else {
            if (isFunction(value)) {
              elem.removeAttribute(attrName);
            } else {
              elem.setAttribute(attrName, value);
            }
          }
        }
      }
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {undefined}
     */
    function updateClass(target, key) {
      var el = key.elm;
      var c = key.data;
      var data = target.data;
      if (c.staticClass || c.class || data && (data.staticClass || data.class)) {
        var cls = replace(key);
        var n = el._transitionClasses;
        if (n) {
          cls = equal(cls, match(n));
        }
        if (cls !== el._prevClass) {
          el.setAttribute("class", cls);
          el._prevClass = cls;
        }
      }
    }
    /**
     * @param {?} e
     * @param {!Function} f
     * @param {?} n
     * @param {?} type
     * @return {undefined}
     */
    function c(e, f, n, type) {
      if (n) {
        /** @type {!Function} */
        var f2 = f;
        var data = doc;
        /**
         * @param {?} D
         * @return {undefined}
         */
        f = function(D) {
          callback(e, f, type, data);
          if (1 === arguments.length) {
            f2(D);
          } else {
            f2.apply(null, arguments);
          }
        };
      }
      doc.addEventListener(e, f, type);
    }
    /**
     * @param {?} event
     * @param {!Function} caller
     * @param {?} options
     * @param {(Object|string)} elem
     * @return {undefined}
     */
    function callback(event, caller, options, elem) {
      (elem || doc).removeEventListener(event, caller, options);
    }
    /**
     * @param {!Object} target
     * @param {string} data
     * @return {undefined}
     */
    function updateEventListeners(target, data) {
      if (target.data.on || data.data.on) {
        var firstRow = data.data.on || {};
        var undefined = target.data.on || {};
        doc = data.elm;
        init(firstRow, undefined, c, callback, data.context);
      }
    }
    /**
     * @param {!Object} target
     * @param {!Object} data
     * @return {undefined}
     */
    function handler(target, data) {
      if (target.data.domProps || data.data.domProps) {
        var name;
        var value;
        var options = data.elm;
        var lastCookies = target.data.domProps || {};
        var obj = data.data.domProps || {};
        if (obj.__ob__) {
          obj = data.data.domProps = extend({}, obj);
        }
        for (name in lastCookies) {
          if (null == obj[name]) {
            /** @type {string} */
            options[name] = "";
          }
        }
        for (name in obj) {
          if (value = obj[name], "textContent" !== name && "innerHTML" !== name || (data.children && (data.children.length = 0), value !== lastCookies[name])) {
            if ("value" === name) {
              options._value = value;
              /** @type {string} */
              var output = null == value ? "" : value + "";
              if (main(options, data, output)) {
                /** @type {string} */
                options.value = output;
              }
            } else {
              options[name] = value;
            }
          }
        }
      }
    }
    /**
     * @param {!Object} input
     * @param {!Object} arg
     * @param {string} callback
     * @return {?}
     */
    function main(input, arg, callback) {
      return !input.composing && ("option" === arg.tag || parse(input, callback) || transform(arg, callback));
    }
    /**
     * @param {!Object} input
     * @param {string} origValue
     * @return {?}
     */
    function parse(input, origValue) {
      return document.activeElement !== input && input.value !== origValue;
    }
    /**
     * @param {!Object} op
     * @param {!Object} b
     * @return {?}
     */
    function transform(op, b) {
      var a = op.elm.value;
      var phone = op.elm._vModifiers;
      return phone && phone.number || "number" === op.elm.type ? type(a) !== type(b) : phone && phone.trim ? a.trim() !== b.trim() : a !== b;
    }
    /**
     * @param {!Element} state
     * @return {?}
     */
    function insert(state) {
      var value = isString(state.style);
      return state.staticStyle ? extend(state.staticStyle, value) : value;
    }
    /**
     * @param {!Object} a
     * @return {?}
     */
    function isString(a) {
      return Array.isArray(a) ? walk(a) : "string" == typeof a ? _isString(a) : a;
    }
    /**
     * @param {!Object} node
     * @param {boolean} array
     * @return {?}
     */
    function clone(node, array) {
      var body;
      var result = {};
      if (array) {
        /** @type {!Object} */
        var innerNode = node;
        for (; innerNode.componentInstance;) {
          innerNode = innerNode.componentInstance._vnode;
          if (innerNode.data && (body = insert(innerNode.data))) {
            extend(result, body);
          }
        }
      }
      if (body = insert(node.data)) {
        extend(result, body);
      }
      /** @type {!Object} */
      var item = node;
      for (; item = item.parent;) {
        if (item.data && (body = insert(item.data))) {
          extend(result, body);
        }
      }
      return result;
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {undefined}
     */
    function updateStyle(target, key) {
      var node = key.data;
      var data = target.data;
      if (node.staticStyle || node.style || data.staticStyle || data.style) {
        var spec;
        var i;
        var container = key.elm;
        var inputWin = target.data.staticStyle;
        var winRef = target.data.style || {};
        var egressPerm = inputWin || winRef;
        var val = isString(key.data.style) || {};
        key.data.style = val.__ob__ ? extend({}, val) : val;
        var ret = clone(key, true);
        for (i in egressPerm) {
          if (null == ret[i]) {
            setStyle(container, i, "");
          }
        }
        for (i in ret) {
          if ((spec = ret[i]) !== egressPerm[i]) {
            setStyle(container, i, null == spec ? "" : spec);
          }
        }
      }
    }
    /**
     * @param {!Element} element
     * @param {string} e
     * @return {undefined}
     */
    function success(element, e) {
      if (e && e.trim()) {
        if (element.classList) {
          if (e.indexOf(" ") > -1) {
            e.split(/\s+/).forEach(function(e) {
              return element.classList.add(e);
            });
          } else {
            element.classList.add(e);
          }
        } else {
          /** @type {string} */
          var value = " " + element.getAttribute("class") + " ";
          if (value.indexOf(" " + e + " ") < 0) {
            element.setAttribute("class", (value + e).trim());
          }
        }
      }
    }
    /**
     * @param {!Element} element
     * @param {!Object} key
     * @return {undefined}
     */
    function test(element, key) {
      if (key && key.trim()) {
        if (element.classList) {
          if (key.indexOf(" ") > -1) {
            key.split(/\s+/).forEach(function(e) {
              return element.classList.remove(e);
            });
          } else {
            element.classList.remove(key);
          }
        } else {
          /** @type {string} */
          var tpl = " " + element.getAttribute("class") + " ";
          /** @type {string} */
          var s = " " + key + " ";
          for (; tpl.indexOf(s) >= 0;) {
            /** @type {string} */
            tpl = tpl.replace(s, " ");
          }
          element.setAttribute("class", tpl.trim());
        }
      }
    }
    /**
     * @param {!Function} style
     * @return {undefined}
     */
    function transition(style) {
      restyle(function() {
        restyle(style);
      });
    }
    /**
     * @param {!Element} self
     * @param {string} val
     * @return {undefined}
     */
    function cb(self, val) {
      (self._transitionClasses || (self._transitionClasses = [])).push(val);
      success(self, val);
    }
    /**
     * @param {!Element} self
     * @param {string} a
     * @return {undefined}
     */
    function fn(self, a) {
      if (self._transitionClasses) {
        remove(self._transitionClasses, a);
      }
      test(self, a);
    }
    /**
     * @param {!Node} t
     * @param {string} name
     * @param {?} done
     * @return {?}
     */
    function setup(t, name, done) {
      var e = getComputedStyle(t, name);
      var key = e.type;
      var ms = e.timeout;
      var frames = e.propCount;
      if (!key) {
        return done();
      }
      var type = key === undefined ? eventName : event;
      /** @type {number} */
      var frame = 0;
      /**
       * @return {undefined}
       */
      var load = function() {
        t.removeEventListener(type, l);
        done();
      };
      /**
       * @param {!Event} prev
       * @return {undefined}
       */
      var l = function(prev) {
        if (prev.target === t && ++frame >= frames) {
          load();
        }
      };
      setTimeout(function() {
        if (frame < frames) {
          load();
        }
      }, ms + 1);
      t.addEventListener(type, l);
    }
    /**
     * @param {!Node} e
     * @param {string} value
     * @return {?}
     */
    function getComputedStyle(e, value) {
      var mode;
      var style = window.getComputedStyle(e);
      var table = style[transitionProperty + "Delay"].split(", ");
      var source = style[transitionProperty + "Duration"].split(", ");
      var a = read(table, source);
      var o = style[animationProp + "Delay"].split(", ");
      var c = style[animationProp + "Duration"].split(", ");
      var b = read(o, c);
      /** @type {number} */
      var t = 0;
      /** @type {number} */
      var end = 0;
      return value === undefined ? a > 0 && (mode = undefined, t = a, end = source.length) : value === next ? b > 0 && (mode = next, t = b, end = c.length) : (t = Math.max(a, b), mode = t > 0 ? a > b ? undefined : next : null, end = mode ? mode === undefined ? source.length : c.length : 0), {
        type : mode,
        timeout : t,
        propCount : end,
        hasTransform : mode === undefined && values.test(style[transitionProperty + "Property"])
      };
    }
    /**
     * @param {!Array} s
     * @param {!Array} value
     * @return {?}
     */
    function read(s, value) {
      for (; s.length < value.length;) {
        s = s.concat(s);
      }
      return Math.max.apply(null, value.map(function(a, i) {
        return f(a) + f(s[i]);
      }));
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function f(name) {
      return 1E3 * +name.slice(0, -1);
    }
    /**
     * @param {!Object} vnode
     * @param {!Function} cb
     * @return {undefined}
     */
    function enter(vnode, cb) {
      var el = vnode.elm;
      if (el._leaveCb) {
        /** @type {boolean} */
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }
      var self = query(vnode.data.transition);
      if (self && !el._enterCb && 1 === el.nodeType) {
        var cssPrefix = self.css;
        var type = self.type;
        var first = self.enterClass;
        var all = self.enterToClass;
        var key = self.enterActiveClass;
        var path = self.appearClass;
        var n = self.appearToClass;
        var items = self.appearActiveClass;
        var client = self.beforeEnter;
        var cb = self.enter;
        var _ = self.afterEnter;
        var name = self.enterCancelled;
        var stream = self.beforeAppear;
        var c = self.appear;
        var duration = self.afterAppear;
        var model = self.appearCancelled;
        var context = activeInstance;
        var transitionNode = activeInstance.$vnode;
        for (; transitionNode && transitionNode.parent;) {
          transitionNode = transitionNode.parent;
          context = transitionNode.context;
        }
        /** @type {boolean} */
        var value = !context._isMounted || !vnode.isRootInsert;
        if (!value || c || "" === c) {
          var node = value ? path : first;
          var target = value ? items : key;
          var m = value ? n : all;
          var type = value ? stream || client : client;
          var callback = value && "function" == typeof c ? c : cb;
          var id = value ? duration || _ : _;
          var text = value ? model || name : name;
          /** @type {boolean} */
          var enough = false !== cssPrefix && !isIE9;
          var finished = callback && (callback._length || callback.length) > 1;
          var data = el._enterCb = once(function() {
            if (enough) {
              fn(el, m);
              fn(el, target);
            }
            if (data.cancelled) {
              if (enough) {
                fn(el, node);
              }
              if (text) {
                text(el);
              }
            } else {
              if (id) {
                id(el);
              }
            }
            /** @type {null} */
            el._enterCb = null;
          });
          if (!vnode.data.show) {
            contains(vnode.data.hook || (vnode.data.hook = {}), "insert", function() {
              var parent = el.parentNode;
              var pendingNode = parent && parent._pending && parent._pending[vnode.key];
              if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
              }
              if (callback) {
                callback(el, data);
              }
            }, "transition-insert");
          }
          if (type) {
            type(el);
          }
          if (enough) {
            cb(el, node);
            cb(el, target);
            transition(function() {
              cb(el, m);
              fn(el, node);
              if (!(data.cancelled || finished)) {
                setup(el, type, data);
              }
            });
          }
          if (vnode.data.show) {
            if (cb) {
              cb();
            }
            if (callback) {
              callback(el, data);
            }
          }
          if (!(enough || finished)) {
            data();
          }
        }
      }
    }
    /**
     * @param {!Object} obj
     * @param {string} callback
     * @return {?}
     */
    function leave(obj, callback) {
      /**
       * @return {undefined}
       */
      function performLeave() {
        if (!options.cancelled) {
          if (!obj.data.show) {
            /** @type {!Object} */
            (el.parentNode._pending || (el.parentNode._pending = {}))[obj.key] = obj;
          }
          if (bind) {
            bind(el);
          }
          if (enough) {
            cb(el, data);
            cb(el, duration);
            transition(function() {
              cb(el, prop);
              fn(el, data);
              if (!(options.cancelled || finished)) {
                setup(el, type, options);
              }
            });
          }
          if (leave) {
            leave(el, options);
          }
          if (!(enough || finished)) {
            options();
          }
        }
      }
      var el = obj.elm;
      if (el._enterCb) {
        /** @type {boolean} */
        el._enterCb.cancelled = true;
        el._enterCb();
      }
      var me = query(obj.data.transition);
      if (!me) {
        return callback();
      }
      if (!el._leaveCb && 1 === el.nodeType) {
        var cssFiles = me.css;
        var type = me.type;
        var data = me.leaveClass;
        var prop = me.leaveToClass;
        var duration = me.leaveActiveClass;
        var bind = me.beforeLeave;
        var leave = me.leave;
        var unbind = me.afterLeave;
        var trigger = me.leaveCancelled;
        var delayLeave = me.delayLeave;
        /** @type {boolean} */
        var enough = false !== cssFiles && !isIE9;
        var finished = leave && (leave._length || leave.length) > 1;
        var options = el._leaveCb = once(function() {
          if (el.parentNode && el.parentNode._pending) {
            /** @type {null} */
            el.parentNode._pending[obj.key] = null;
          }
          if (enough) {
            fn(el, prop);
            fn(el, duration);
          }
          if (options.cancelled) {
            if (enough) {
              fn(el, data);
            }
            if (trigger) {
              trigger(el);
            }
          } else {
            callback();
            if (unbind) {
              unbind(el);
            }
          }
          /** @type {null} */
          el._leaveCb = null;
        });
        if (delayLeave) {
          delayLeave(performLeave);
        } else {
          performLeave();
        }
      }
    }
    /**
     * @param {!Object} data
     * @return {?}
     */
    function query(data) {
      if (data) {
        if ("object" == typeof data) {
          var options = {};
          return false !== data.css && extend(options, omit(data.name || "v")), extend(options, data), options;
        }
        return "string" == typeof data ? omit(data) : void 0;
      }
    }
    /**
     * @param {!Function} callback
     * @return {?}
     */
    function once(callback) {
      /** @type {boolean} */
      var e = false;
      return function() {
        if (!e) {
          /** @type {boolean} */
          e = true;
          callback();
        }
      };
    }
    /**
     * @param {!Object} target
     * @param {string} key
     * @return {undefined}
     */
    function activate(target, key) {
      if (!key.data.show) {
        enter(key);
      }
    }
    /**
     * @param {!Object} el
     * @param {!Object} event
     * @param {?} bubble
     * @return {?}
     */
    function setSelected(el, event, bubble) {
      var value = event.value;
      var r = el.multiple;
      if (!r || Array.isArray(value)) {
        var selected;
        var option;
        /** @type {number} */
        var i = 0;
        var patchLen = el.options.length;
        for (; i < patchLen; i++) {
          if (option = el.options[i], r) {
            /** @type {boolean} */
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
              /** @type {boolean} */
              option.selected = selected;
            }
          } else {
            if (looseEqual(getValue(option), value)) {
              return void(el.selectedIndex !== i && (el.selectedIndex = i));
            }
          }
        }
        if (!r) {
          /** @type {number} */
          el.selectedIndex = -1;
        }
      }
    }
    /**
     * @param {string} value
     * @param {!NodeList} options
     * @return {?}
     */
    function hasNoMatchingOption(value, options) {
      /** @type {number} */
      var i = 0;
      var r = options.length;
      for (; i < r; i++) {
        if (looseEqual(getValue(options[i]), value)) {
          return false;
        }
      }
      return true;
    }
    /**
     * @param {!Object} option
     * @return {?}
     */
    function getValue(option) {
      return "_value" in option ? option._value : option.value;
    }
    /**
     * @param {!Event} e
     * @return {undefined}
     */
    function onCompositionStart(e) {
      /** @type {boolean} */
      e.target.composing = true;
    }
    /**
     * @param {!Event} e
     * @return {undefined}
     */
    function onCompositionEnd(e) {
      /** @type {boolean} */
      e.target.composing = false;
      trigger(e.target, "input");
    }
    /**
     * @param {!Object} e
     * @param {string} type
     * @return {undefined}
     */
    function trigger(e, type) {
      /** @type {(Event|null)} */
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(type, true, true);
      e.dispatchEvent(evt);
    }
    /**
     * @param {!Object} vnode
     * @return {?}
     */
    function toString(vnode) {
      return !vnode.componentInstance || vnode.data && vnode.data.transition ? vnode : toString(vnode.componentInstance._vnode);
    }
    /**
     * @param {(HTMLDocument|boolean)} c
     * @return {?}
     */
    function factory(c) {
      var result = c && c.componentOptions;
      return result && result.Ctor.options.abstract ? factory(getChild(result.children)) : c;
    }
    /**
     * @param {!Object} self
     * @return {?}
     */
    function select(self) {
      var data = {};
      var options = self.$options;
      var k;
      for (k in options.propsData) {
        data[k] = self[k];
      }
      var listeners = options._parentListeners;
      var name;
      for (name in listeners) {
        data[camelize(name)] = listeners[name].fn;
      }
      return data;
    }
    /**
     * @param {?} comment
     * @param {!Object} e
     * @return {?}
     */
    function build(comment, e) {
      return /\d-keep-alive$/.test(e.tag) ? comment("keep-alive") : null;
    }
    /**
     * @param {!Object} parent
     * @return {?}
     */
    function _init(parent) {
      for (; parent = parent.parent;) {
        if (parent.data.transition) {
          return true;
        }
      }
    }
    /**
     * @param {!Object} vnode
     * @param {!Object} node
     * @return {?}
     */
    function getName(vnode, node) {
      return node.key === vnode.key && node.tag === vnode.tag;
    }
    /**
     * @param {?} vnode
     * @return {undefined}
     */
    function rm(vnode) {
      if (vnode.elm._moveCb) {
        vnode.elm._moveCb();
      }
      if (vnode.elm._enterCb) {
        vnode.elm._enterCb();
      }
    }
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    function show(event) {
      event.data.newPos = event.elm.getBoundingClientRect();
    }
    /**
     * @param {!Object} item
     * @return {undefined}
     */
    function reset(item) {
      var o = item.data.pos;
      var co = item.data.newPos;
      /** @type {number} */
      var firstException = o.left - co.left;
      /** @type {number} */
      var e = o.top - co.top;
      if (firstException || e) {
        /** @type {boolean} */
        item.data.moved = true;
        var style = item.elm.style;
        /** @type {string} */
        style.transform = style.WebkitTransform = "translate(" + firstException + "px," + e + "px)";
        /** @type {string} */
        style.transitionDuration = "0s";
      }
    }
    var hn;
    var _Set;
    var optionalEndTagInlineElements = makeMap("slot,component", true);
    /** @type {function(this:Object, *): boolean} */
    var __hasProp = Object.prototype.hasOwnProperty;
    /** @type {!RegExp} */
    var MapProto = /-(\w)/g;
    var camelize = params(function(coreFilePath) {
      return coreFilePath.replace(MapProto, function(canCreateDiscussions, e) {
        return e ? e.toUpperCase() : "";
      });
    });
    var generatePropertyDefinition = params(function(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    });
    /** @type {!RegExp} */
    var gridheaderCopy = /([^-])([A-Z])/g;
    var hyphenate = params(function(s) {
      return s.replace(gridheaderCopy, "$1-$2").replace(gridheaderCopy, "$1-$2").toLowerCase();
    });
    /** @type {function(this:*): string} */
    var objToString = Object.prototype.toString;
    /** @type {string} */
    var OBJECT_ARRAY = "[object Object]";
    /**
     * @return {?}
     */
    var no = function() {
      return false;
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    var identity = function(value) {
      return value;
    };
    var config = {
      optionMergeStrategies : Object.create(null),
      silent : false,
      devtools : false,
      errorHandler : null,
      ignoredElements : [],
      keyCodes : Object.create(null),
      isReservedTag : no,
      isUnknownElement : no,
      getTagNamespace : noop,
      parsePlatformTagName : identity,
      mustUseProp : no,
      _assetTypes : ["component", "directive", "filter"],
      _lifecycleHooks : ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
      _maxUpdateCount : 100
    };
    /** @type {!RegExp} */
    var hasExtRx = /[^\w.$]/;
    /** @type {boolean} */
    var stringOnly = "__proto__" in {};
    /** @type {boolean} */
    var inBrowser = "undefined" != typeof window;
    /** @type {(boolean|string)} */
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    /** @type {(boolean|string)} */
    var isIE = UA && /msie|trident/.test(UA);
    /** @type {(boolean|string)} */
    var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
    /** @type {(boolean|string)} */
    var isEdge = UA && UA.indexOf("edge/") > 0;
    /** @type {(boolean|string)} */
    var isAndroid = UA && UA.indexOf("android") > 0;
    /** @type {(boolean|string)} */
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
    /**
     * @return {?}
     */
    var shutdown = function() {
      return void 0 === hn && (hn = !inBrowser && void 0 !== res && "server" === res.process.env.VUE_ENV), hn;
    };
    var events = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    var nextTick = function() {
      /**
       * @return {undefined}
       */
      function fn() {
        /** @type {boolean} */
        tmp = false;
        /** @type {!Array<?>} */
        var crossfilterable_layers = charListNotLatin.slice(0);
        /** @type {number} */
        charListNotLatin.length = 0;
        /** @type {number} */
        var layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          crossfilterable_layers[layer_i]();
        }
      }
      var next;
      /** @type {!Array} */
      var charListNotLatin = [];
      /** @type {boolean} */
      var tmp = false;
      if ("undefined" != typeof Promise && isNative(Promise)) {
        /** @type {!Promise<?>} */
        var nativePromise = Promise.resolve();
        /**
         * @param {?} index
         * @return {undefined}
         */
        var onReject = function(index) {
        };
        /**
         * @return {undefined}
         */
        next = function() {
          nativePromise.then(fn).catch(onReject);
          if (isIOS) {
            setTimeout(noop);
          }
        };
      } else {
        if ("undefined" == typeof MutationObserver || !isNative(MutationObserver) && "" + MutationObserver != "[object MutationObserverConstructor]") {
          /**
           * @return {undefined}
           */
          next = function() {
            setTimeout(fn, 0);
          };
        } else {
          /** @type {number} */
          var prefix = 1;
          /** @type {!MutationObserver} */
          var observer = new MutationObserver(fn);
          /** @type {!Text} */
          var div = document.createTextNode(prefix + "");
          observer.observe(div, {
            characterData : true
          });
          /**
           * @return {undefined}
           */
          next = function() {
            /** @type {number} */
            prefix = (prefix + 1) % 2;
            /** @type {string} */
            div.data = prefix + "";
          };
        }
      }
      return function(t, selector) {
        var i;
        if (charListNotLatin.push(function() {
          if (t) {
            t.call(selector);
          }
          if (i) {
            i(selector);
          }
        }), tmp || (tmp = true, next()), !t && "undefined" != typeof Promise) {
          return new Promise(function(maxAtomIndex) {
            i = maxAtomIndex;
          });
        }
      };
    }();
    _Set = "undefined" != typeof Set && isNative(Set) ? Set : function() {
      /**
       * @return {undefined}
       */
      function LRUCache() {
        /** @type {!Object} */
        this.set = Object.create(null);
      }
      return LRUCache.prototype.has = function(index) {
        return true === this.set[index];
      }, LRUCache.prototype.add = function(b) {
        /** @type {boolean} */
        this.set[b] = true;
      }, LRUCache.prototype.clear = function() {
        /** @type {!Object} */
        this.set = Object.create(null);
      }, LRUCache;
    }();
    var Nn;
    /** @type {function(): undefined} */
    var checkTextarea = noop;
    /** @type {number} */
    var nextProfileItemId = 0;
    /**
     * @return {undefined}
     */
    var Dep = function() {
      /** @type {number} */
      this.id = nextProfileItemId++;
      /** @type {!Array} */
      this.subs = [];
    };
    /**
     * @param {string} sub
     * @return {undefined}
     */
    Dep.prototype.addSub = function(sub) {
      this.subs.push(sub);
    };
    /**
     * @param {undefined} sub
     * @return {undefined}
     */
    Dep.prototype.removeSub = function(sub) {
      remove(this.subs, sub);
    };
    /**
     * @return {undefined}
     */
    Dep.prototype.depend = function() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };
    /**
     * @return {undefined}
     */
    Dep.prototype.notify = function() {
      var chYxis = this.subs.slice();
      /** @type {number} */
      var i = 0;
      var len = chYxis.length;
      for (; i < len; i++) {
        chYxis[i].update();
      }
    };
    /** @type {null} */
    Dep.target = null;
    /** @type {!Array} */
    var targetStack = [];
    var proto = Array.prototype;
    /** @type {!Object} */
    var target = Object.create(proto);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(method) {
      var old = proto[method];
      def(target, method, function() {
        /** @type {!Arguments} */
        var myargs = arguments;
        /** @type {number} */
        var i = arguments.length;
        /** @type {!Array} */
        var args = Array(i);
        for (; i--;) {
          args[i] = myargs[i];
        }
        var val;
        var docgen = old.apply(this, args);
        var ob = this.__ob__;
        switch(method) {
          case "push":
          case "unshift":
            /** @type {!Array} */
            val = args;
            break;
          case "splice":
            /** @type {!Array<?>} */
            val = args.slice(2);
        }
        return val && ob.observeArray(val), ob.dep.notify(), docgen;
      });
    });
    /** @type {!Array<string>} */
    var helperOptions = Object.getOwnPropertyNames(target);
    var observerState = {
      shouldConvert : true,
      isSettingProps : false
    };
    /**
     * @param {!Object} value
     * @return {undefined}
     */
    var Observer = function(value) {
      if (this.value = value, this.dep = new Dep, this.vmCount = 0, def(value, "__ob__", this), Array.isArray(value)) {
        (stringOnly ? getItemsStringContent : getItemsFragContent)(value, target, helperOptions);
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };
    /**
     * @param {!Object} scope
     * @return {undefined}
     */
    Observer.prototype.walk = function(scope) {
      /** @type {!Array<string>} */
      var keys = Object.keys(scope);
      /** @type {number} */
      var i = 0;
      for (; i < keys.length; i++) {
        defineReactive(scope, keys[i], scope[keys[i]]);
      }
    };
    /**
     * @param {!Object} items
     * @return {undefined}
     */
    Observer.prototype.observeArray = function(items) {
      /** @type {number} */
      var i = 0;
      var items_length = items.length;
      for (; i < items_length; i++) {
        observe(items[i]);
      }
    };
    /** @type {!Object} */
    var strats = config.optionMergeStrategies;
    /**
     * @param {!Object} value
     * @param {!Object} key
     * @param {!Function} str
     * @return {?}
     */
    strats.data = function(value, key, str) {
      return str ? value || key ? function() {
        var err = "function" == typeof key ? key.call(str) : key;
        var data = "function" == typeof value ? value.call(str) : void 0;
        return err ? done(err, data) : data;
      } : void 0 : key ? "function" != typeof key ? value : value ? function() {
        return done(key.call(this), value.call(this));
      } : key : value;
    };
    config._lifecycleHooks.forEach(function(key) {
      /** @type {function(!Object, !Object): ?} */
      strats[key] = D;
    });
    config._assetTypes.forEach(function(type) {
      /** @type {function(string, !Object): ?} */
      strats[type + "s"] = mergeAssets;
    });
    /**
     * @param {!Object} key
     * @param {!Object} o
     * @return {?}
     */
    strats.watch = function(key, o) {
      if (!o) {
        return key;
      }
      if (!key) {
        return o;
      }
      var result = {};
      extend(result, key);
      var k;
      for (k in o) {
        var obj = result[k];
        var index = o[k];
        if (obj && !Array.isArray(obj)) {
          /** @type {!Array} */
          obj = [obj];
        }
        result[k] = obj ? obj.concat(index) : [index];
      }
      return result;
    };
    /** @type {function(!Object, !Object): ?} */
    strats.props = strats.methods = strats.computed = function(val, parentVal) {
      if (!parentVal) {
        return val;
      }
      if (!val) {
        return parentVal;
      }
      /** @type {!Object} */
      var options = Object.create(null);
      return extend(options, val), extend(options, parentVal), options;
    };
    /**
     * @param {number} parentVal
     * @param {number} childVal
     * @return {?}
     */
    var defaultStrat = function(parentVal, childVal) {
      return void 0 === childVal ? parentVal : childVal;
    };
    var propValue = Object.freeze({
      defineReactive : defineReactive,
      _toString : self,
      toNumber : type,
      makeMap : makeMap,
      isBuiltInTag : optionalEndTagInlineElements,
      remove : remove,
      hasOwn : hasOwn,
      isPrimitive : isArray,
      cached : params,
      camelize : camelize,
      capitalize : generatePropertyDefinition,
      hyphenate : hyphenate,
      bind : expect,
      toArray : toArray,
      extend : extend,
      isObject : isObject,
      isPlainObject : isPlainObject,
      toObject : walk,
      noop : noop,
      no : no,
      identity : identity,
      genStaticKeys : pushCommandPoints_,
      looseEqual : looseEqual,
      looseIndexOf : looseIndexOf,
      isReserved : isReserved,
      def : def,
      parsePath : parsePath,
      hasProto : stringOnly,
      inBrowser : inBrowser,
      UA : UA,
      isIE : isIE,
      isIE9 : isIE9,
      isEdge : isEdge,
      isAndroid : isAndroid,
      isIOS : isIOS,
      isServerRendering : shutdown,
      devtools : events,
      nextTick : nextTick,
      get _Set() {
        return _Set;
      },
      mergeOptions : mergeOptions,
      resolveAsset : resolveAsset,
      get warn() {
        return checkTextarea;
      },
      get formatComponentName() {
        return Nn;
      },
      validateProp : validateProp
    });
    /**
     * @param {string} tag
     * @param {!Object} data
     * @param {!Array} children
     * @param {string} text
     * @param {!Element} elm
     * @param {!Object} context
     * @param {?} componentOptions
     * @return {undefined}
     */
    var VNode = function(tag, data, children, text, elm, context, componentOptions) {
      /** @type {string} */
      this.tag = tag;
      /** @type {!Object} */
      this.data = data;
      /** @type {!Array} */
      this.children = children;
      /** @type {string} */
      this.text = text;
      /** @type {!Element} */
      this.elm = elm;
      this.ns = void 0;
      /** @type {!Object} */
      this.context = context;
      this.functionalContext = void 0;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = void 0;
      this.parent = void 0;
      /** @type {boolean} */
      this.raw = false;
      /** @type {boolean} */
      this.isStatic = false;
      /** @type {boolean} */
      this.isRootInsert = true;
      /** @type {boolean} */
      this.isComment = false;
      /** @type {boolean} */
      this.isCloned = false;
      /** @type {boolean} */
      this.isOnce = false;
    };
    var child = {
      child : {}
    };
    /**
     * @return {?}
     */
    child.child.get = function() {
      return this.componentInstance;
    };
    Object.defineProperties(VNode.prototype, child);
    var vm;
    /**
     * @return {?}
     */
    var then = function() {
      var node = new VNode;
      return node.text = "", node.isComment = true, node;
    };
    var service = {
      init : send,
      prepatch : _validate,
      insert : mount,
      destroy : destroyed
    };
    /** @type {!Array<string>} */
    var product = Object.keys(service);
    var all = params(function(event) {
      /** @type {boolean} */
      var e = "~" === event.charAt(0);
      event = e ? event.slice(1) : event;
      /** @type {boolean} */
      var capture = "!" === event.charAt(0);
      return event = capture ? event.slice(1) : event, {
        name : event,
        once : e,
        capture : capture
      };
    });
    /** @type {number} */
    var mutations_built = 1;
    /** @type {number} */
    var UNDEFINED = 2;
    /** @type {null} */
    var activeInstance = null;
    /** @type {!Array} */
    var a = [];
    var info = {};
    /** @type {boolean} */
    var gasSum = false;
    /** @type {boolean} */
    var costSum = false;
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var eventIdCounter = 0;
    /**
     * @param {string} vm
     * @param {!Function} expOrFn
     * @param {!Function} cb
     * @param {!Object} config
     * @return {undefined}
     */
    var Watcher = function(vm, expOrFn, cb, config) {
      /** @type {string} */
      this.vm = vm;
      vm._watchers.push(this);
      if (config) {
        /** @type {boolean} */
        this.deep = !!config.deep;
        /** @type {boolean} */
        this.user = !!config.user;
        /** @type {boolean} */
        this.lazy = !!config.lazy;
        /** @type {boolean} */
        this.sync = !!config.sync;
      } else {
        /** @type {boolean} */
        this.deep = this.user = this.lazy = this.sync = false;
      }
      /** @type {!Function} */
      this.cb = cb;
      /** @type {number} */
      this.id = ++eventIdCounter;
      /** @type {boolean} */
      this.active = true;
      this.dirty = this.lazy;
      /** @type {!Array} */
      this.deps = [];
      /** @type {!Array} */
      this.newDeps = [];
      this.depIds = new _Set;
      this.newDepIds = new _Set;
      /** @type {string} */
      this.expression = "";
      if ("function" == typeof expOrFn) {
        /** @type {!Function} */
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          /**
           * @return {undefined}
           */
          this.getter = function() {
          };
        }
      }
      this.value = this.lazy ? void 0 : this.get();
    };
    /**
     * @return {?}
     */
    Watcher.prototype.get = function() {
      mouseUpEvents(this);
      var value = this.getter.call(this.vm, this.vm);
      return this.deep && checkAndAddDescendantIfModel(value), getClickTarget(), this.cleanupDeps(), value;
    };
    /**
     * @param {string} dep
     * @return {undefined}
     */
    Watcher.prototype.addDep = function(dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
    /**
     * @return {undefined}
     */
    Watcher.prototype.cleanupDeps = function() {
      var this$1 = this;
      var i = this.deps.length;
      for (; i--;) {
        var dep = this$1.deps[i];
        if (!this$1.newDepIds.has(dep.id)) {
          dep.removeSub(this$1);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      /** @type {number} */
      this.newDeps.length = 0;
    };
    /**
     * @return {undefined}
     */
    Watcher.prototype.update = function() {
      if (this.lazy) {
        /** @type {boolean} */
        this.dirty = true;
      } else {
        if (this.sync) {
          this.run();
        } else {
          outputPacket(this);
        }
      }
    };
    /**
     * @return {undefined}
     */
    Watcher.prototype.run = function() {
      if (this.active) {
        var value = this.get();
        if (value !== this.value || isObject(value) || this.deep) {
          var oldValue = this.value;
          if (this.value = value, this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (bubbled_sets__3355) {
              if (!config.errorHandler) {
                throw bubbled_sets__3355;
              }
              config.errorHandler.call(null, bubbled_sets__3355, this.vm);
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    Watcher.prototype.evaluate = function() {
      this.value = this.get();
      /** @type {boolean} */
      this.dirty = false;
    };
    /**
     * @return {undefined}
     */
    Watcher.prototype.depend = function() {
      var declr = this;
      var i = this.deps.length;
      for (; i--;) {
        declr.deps[i].depend();
      }
    };
    /**
     * @return {undefined}
     */
    Watcher.prototype.teardown = function() {
      var this$1 = this;
      if (this.active) {
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        for (; i--;) {
          this$1.deps[i].removeSub(this$1);
        }
        /** @type {boolean} */
        this.active = false;
      }
    };
    var keys = new _Set;
    var desc = {
      enumerable : true,
      configurable : true,
      get : noop,
      set : noop
    };
    /** @type {number} */
    var _zipIdx = 0;
    !function(Vue) {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      Vue.prototype._init = function(options) {
        var vm = this;
        /** @type {number} */
        vm._uid = _zipIdx++;
        /** @type {boolean} */
        vm._isVue = true;
        if (options && options._isComponent) {
          compile(vm, options);
        } else {
          vm.$options = mergeOptions(start(vm.constructor), options || {}, vm);
        }
        vm._renderProxy = vm;
        vm._self = vm;
        save(vm);
        addComponentEventListener(vm);
        getValidationModel(vm);
        callHook(vm, "beforeCreate");
        initState(vm);
        callHook(vm, "created");
        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }(Vue);
    (function(Vue) {
      var description = {};
      /**
       * @return {?}
       */
      description.get = function() {
        return this._data;
      };
      Object.defineProperty(Vue.prototype, "$data", description);
      /** @type {function(!Object, string, number): ?} */
      Vue.prototype.$set = set;
      /** @type {function(!Object, string): undefined} */
      Vue.prototype.$delete = mutator;
      /**
       * @param {string} expOrFn
       * @param {!Function} cb
       * @param {!Object} options
       * @return {?}
       */
      Vue.prototype.$watch = function(expOrFn, cb, options) {
        var path = this;
        options = options || {};
        /** @type {boolean} */
        options.user = true;
        var watcher = new Watcher(path, expOrFn, cb, options);
        return options.immediate && cb.call(path, watcher.value), function() {
          watcher.teardown();
        };
      };
    })(Vue);
    (function(Vue) {
      /** @type {!RegExp} */
      var SIG_PATTERN = /^hook:/;
      /**
       * @param {?} type
       * @param {string} fn
       * @return {?}
       */
      Vue.prototype.$on = function(type, fn) {
        var emitter = this;
        return (emitter._events[type] || (emitter._events[type] = [])).push(fn), SIG_PATTERN.test(type) && (emitter._hasHookEvent = true), emitter;
      };
      /**
       * @param {?} event
       * @param {!Function} fn
       * @return {?}
       */
      Vue.prototype.$once = function(event, fn) {
        /**
         * @return {undefined}
         */
        function on() {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        var vm = this;
        return on.fn = fn, vm.$on(event, on), vm;
      };
      /**
       * @param {?} type
       * @param {!Function} fn
       * @return {?}
       */
      Vue.prototype.$off = function(type, fn) {
        var vm = this;
        if (!arguments.length) {
          return vm._events = Object.create(null), vm;
        }
        var r = vm._events[type];
        if (!r) {
          return vm;
        }
        if (1 === arguments.length) {
          return vm._events[type] = null, vm;
        }
        var item;
        var i = r.length;
        for (; i--;) {
          if ((item = r[i]) === fn || item.fn === fn) {
            r.splice(i, 1);
            break;
          }
        }
        return vm;
      };
      /**
       * @param {string} name
       * @return {?}
       */
      Vue.prototype.$emit = function(name) {
        var vm = this;
        var value = vm._events[name];
        if (value) {
          value = value.length > 1 ? toArray(value) : value;
          var pre = toArray(arguments, 1);
          /** @type {number} */
          var j = 0;
          var valueLength = value.length;
          for (; j < valueLength; j++) {
            value[j].apply(vm, pre);
          }
        }
        return vm;
      };
    })(Vue);
    (function(Vue) {
      /**
       * @param {!Object} el
       * @param {!Array} index
       * @return {?}
       */
      Vue.prototype._mount = function(el, index) {
        var vm = this;
        return vm.$el = el, vm.$options.render || (vm.$options.render = then), callHook(vm, "beforeMount"), vm._watcher = new Watcher(vm, function() {
          vm._update(vm._render(), index);
        }, noop), index = false, null == vm.$vnode && (vm._isMounted = true, callHook(vm, "mounted")), vm;
      };
      /**
       * @param {string} vnode
       * @param {number} path
       * @return {undefined}
       */
      Vue.prototype._update = function(vnode, path) {
        var vm = this;
        if (vm._isMounted) {
          callHook(vm, "beforeUpdate");
        }
        var prevEl = vm.$el;
        var parent = vm._vnode;
        var prevActiveInstance = activeInstance;
        activeInstance = vm;
        /** @type {string} */
        vm._vnode = vnode;
        vm.$el = parent ? vm.__patch__(parent, vnode) : vm.__patch__(vm.$el, vnode, path, false, vm.$options._parentElm, vm.$options._refElm);
        activeInstance = prevActiveInstance;
        if (prevEl) {
          /** @type {null} */
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
      };
      /**
       * @param {undefined} propsData
       * @param {!Object} listeners
       * @param {!Object} item
       * @param {!Object} renderChildren
       * @return {undefined}
       */
      Vue.prototype._updateFromParent = function(propsData, listeners, item, renderChildren) {
        var vm = this;
        /** @type {boolean} */
        var i = !(!vm.$options._renderChildren && !renderChildren);
        if (vm.$options._parentVnode = item, vm.$vnode = item, vm._vnode && (vm._vnode.parent = item), vm.$options._renderChildren = renderChildren, propsData && vm.$options.props) {
          /** @type {boolean} */
          observerState.shouldConvert = false;
          var notActiveCursors = vm.$options._propKeys || [];
          /** @type {number} */
          var i = 0;
          for (; i < notActiveCursors.length; i++) {
            var key = notActiveCursors[i];
            vm[key] = validateProp(key, vm.$options.props, propsData, vm);
          }
          /** @type {boolean} */
          observerState.shouldConvert = true;
          vm.$options.propsData = propsData;
        }
        if (listeners) {
          var callback = vm.$options._parentListeners;
          /** @type {!Object} */
          vm.$options._parentListeners = listeners;
          isUndefined(vm, listeners, callback);
        }
        if (i) {
          vm.$slots = filter(renderChildren, item.context);
          vm.$forceUpdate();
        }
      };
      /**
       * @return {undefined}
       */
      Vue.prototype.$forceUpdate = function() {
        var self = this;
        if (self._watcher) {
          self._watcher.update();
        }
      };
      /**
       * @return {undefined}
       */
      Vue.prototype.$destroy = function() {
        var vm = this;
        if (!vm._isBeingDestroyed) {
          callHook(vm, "beforeDestroy");
          /** @type {boolean} */
          vm._isBeingDestroyed = true;
          var parent = vm.$parent;
          if (!(!parent || parent._isBeingDestroyed || vm.$options.abstract)) {
            remove(parent.$children, vm);
          }
          if (vm._watcher) {
            vm._watcher.teardown();
          }
          var i = vm._watchers.length;
          for (; i--;) {
            vm._watchers[i].teardown();
          }
          if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
          }
          /** @type {boolean} */
          vm._isDestroyed = true;
          callHook(vm, "destroyed");
          vm.$off();
          if (vm.$el) {
            /** @type {null} */
            vm.$el.__vue__ = null;
          }
          vm.__patch__(vm._vnode, null);
        }
      };
    })(Vue);
    (function(Vue) {
      /**
       * @param {!Object} tree
       * @param {string} key
       * @param {boolean} isOnce
       * @return {undefined}
       */
      function markStatic(tree, key, isOnce) {
        if (Array.isArray(tree)) {
          /** @type {number} */
          var i = 0;
          for (; i < tree.length; i++) {
            if (tree[i] && "string" != typeof tree[i]) {
              markStaticNode(tree[i], key + "_" + i, isOnce);
            }
          }
        } else {
          markStaticNode(tree, key, isOnce);
        }
      }
      /**
       * @param {!Object} node
       * @param {string} key
       * @param {boolean} isOnce
       * @return {undefined}
       */
      function markStaticNode(node, key, isOnce) {
        /** @type {boolean} */
        node.isStatic = true;
        /** @type {string} */
        node.key = key;
        /** @type {boolean} */
        node.isOnce = isOnce;
      }
      /**
       * @param {!Function} fn
       * @return {?}
       */
      Vue.prototype.$nextTick = function(fn) {
        return nextTick(fn, this);
      };
      /**
       * @return {?}
       */
      Vue.prototype._render = function() {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        var _parentVnode = ref._parentVnode;
        if (vm._isMounted) {
          var key;
          for (key in vm.$slots) {
            vm.$slots[key] = cloneVNodes(vm.$slots[key]);
          }
        }
        if (_parentVnode && _parentVnode.data.scopedSlots) {
          vm.$scopedSlots = _parentVnode.data.scopedSlots;
        }
        if (staticRenderFns && !vm._staticTrees) {
          /** @type {!Array} */
          vm._staticTrees = [];
        }
        vm.$vnode = _parentVnode;
        var vnode;
        try {
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (bubbled_sets__3355) {
          if (!config.errorHandler) {
            throw bubbled_sets__3355;
          }
          config.errorHandler.call(null, bubbled_sets__3355, vm);
          vnode = vm._vnode;
        }
        return vnode instanceof VNode || (vnode = then()), vnode.parent = _parentVnode, vnode;
      };
      /** @type {function(string): ?} */
      Vue.prototype._s = self;
      /** @type {function(string): ?} */
      Vue.prototype._v = h;
      /** @type {function(!Object): ?} */
      Vue.prototype._n = type;
      /** @type {function(): ?} */
      Vue.prototype._e = then;
      /** @type {function(string, string): ?} */
      Vue.prototype._q = looseEqual;
      /** @type {function(!NodeList, string): ?} */
      Vue.prototype._i = looseIndexOf;
      /**
       * @param {string} index
       * @param {?} isInFor
       * @return {?}
       */
      Vue.prototype._m = function(index, isInFor) {
        var tree = this._staticTrees[index];
        return tree && !isInFor ? Array.isArray(tree) ? cloneVNodes(tree) : apply(tree) : (tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy), markStatic(tree, "__static__" + index, false), tree);
      };
      /**
       * @param {?} tree
       * @param {string} index
       * @param {string} key
       * @return {?}
       */
      Vue.prototype._o = function(tree, index, key) {
        return markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true), tree;
      };
      /**
       * @param {boolean} id
       * @return {?}
       */
      Vue.prototype._f = function(id) {
        return resolveAsset(this.$options, "filters", id, true) || identity;
      };
      /**
       * @param {string} obj
       * @param {?} wrap
       * @return {?}
       */
      Vue.prototype._l = function(obj, wrap) {
        var result;
        var i;
        var l;
        var fields;
        var key;
        if (Array.isArray(obj) || "string" == typeof obj) {
          /** @type {!Array} */
          result = Array(obj.length);
          /** @type {number} */
          i = 0;
          l = obj.length;
          for (; i < l; i++) {
            result[i] = wrap(obj[i], i);
          }
        } else {
          if ("number" == typeof obj) {
            /** @type {!Array} */
            result = Array(obj);
            /** @type {number} */
            i = 0;
            for (; i < obj; i++) {
              result[i] = wrap(i + 1, i);
            }
          } else {
            if (isObject(obj)) {
              /** @type {!Array<string>} */
              fields = Object.keys(obj);
              /** @type {!Array} */
              result = Array(fields.length);
              /** @type {number} */
              i = 0;
              /** @type {number} */
              l = fields.length;
              for (; i < l; i++) {
                /** @type {string} */
                key = fields[i];
                result[i] = wrap(obj[key], key, i);
              }
            }
          }
        }
        return result;
      };
      /**
       * @param {?} name
       * @param {?} fallback
       * @param {!Object} key
       * @param {!Object} data
       * @return {?}
       */
      Vue.prototype._t = function(name, fallback, key, data) {
        var text = this.$scopedSlots[name];
        if (text) {
          return key = key || {}, data && extend(key, data), text(key) || fallback;
        }
        var slotNodes = this.$slots[name];
        return slotNodes || fallback;
      };
      /**
       * @param {!Object} data
       * @param {undefined} fn
       * @param {!Object} obj
       * @param {?} index
       * @return {?}
       */
      Vue.prototype._b = function(data, fn, obj, index) {
        if (obj && isObject(obj)) {
          if (Array.isArray(obj)) {
            obj = walk(obj);
          }
          var name;
          for (name in obj) {
            if ("class" === name || "style" === name) {
              data[name] = obj[name];
            } else {
              var scope = data.attrs && data.attrs.type;
              var macroDict = index || config.mustUseProp(fn, scope, name) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
              macroDict[name] = obj[name];
            }
          }
        }
        return data;
      };
      /**
       * @param {?} key
       * @param {string} index
       * @param {string} array
       * @return {?}
       */
      Vue.prototype._k = function(key, index, array) {
        var type = config.keyCodes[index] || array;
        return Array.isArray(type) ? -1 === type.indexOf(key) : type !== key;
      };
    })(Vue);
    /** @type {!Array} */
    var checked = [String, RegExp];
    var Redirect = {
      name : "keep-alive",
      abstract : true,
      props : {
        include : checked,
        exclude : checked
      },
      created : function() {
        /** @type {!Object} */
        this.cache = Object.create(null);
      },
      destroyed : function() {
        var mech = this;
        var key;
        for (key in this.cache) {
          destroy(mech.cache[key]);
        }
      },
      watch : {
        include : function(obj) {
          call(this.cache, function(b) {
            return m(obj, b);
          });
        },
        exclude : function(obj) {
          call(this.cache, function(b) {
            return !m(obj, b);
          });
        }
      },
      render : function() {
        var vnode = getChild(this.$slots.default);
        var opts = vnode && vnode.componentOptions;
        if (opts) {
          var options = parseArgs(opts);
          if (options && (this.include && !m(this.include, options) || this.exclude && m(this.exclude, options))) {
            return vnode;
          }
          var id = null == vnode.key ? opts.Ctor.cid + (opts.tag ? "::" + opts.tag : "") : vnode.key;
          if (this.cache[id]) {
            vnode.componentInstance = this.cache[id].componentInstance;
          } else {
            this.cache[id] = vnode;
          }
          /** @type {boolean} */
          vnode.data.keepAlive = true;
        }
        return vnode;
      }
    };
    var arcSources = {
      KeepAlive : Redirect
    };
    !function(obj) {
      var description = {};
      /**
       * @return {?}
       */
      description.get = function() {
        return config;
      };
      Object.defineProperty(obj, "config", description);
      obj.util = propValue;
      /** @type {function(!Object, string, number): ?} */
      obj.set = set;
      /** @type {function(!Object, string): undefined} */
      obj.delete = mutator;
      obj.nextTick = nextTick;
      /** @type {!Object} */
      obj.options = Object.create(null);
      config._assetTypes.forEach(function(name) {
        /** @type {!Object} */
        obj.options[name + "s"] = Object.create(null);
      });
      /** @type {function(!Object): undefined} */
      obj.options._base = obj;
      extend(obj.options.components, arcSources);
      request(obj);
      mixin(obj);
      createRegistryWrapper(obj);
      collectBoards(obj);
    }(Vue);
    Object.defineProperty(Vue.prototype, "$isServer", {
      get : shutdown
    });
    /** @type {string} */
    Vue.version = "2.1.10";
    var doc;
    var element;
    var map = makeMap("input,textarea,option,select");
    /**
     * @param {!Object} value
     * @param {undefined} key
     * @param {string} undefined
     * @return {?}
     */
    var getOptionsFromValue = function(value, key, undefined) {
      return "value" === undefined && map(value) && "button" !== key || "selected" === undefined && "option" === value || "checked" === undefined && "input" === value || "muted" === undefined && "video" === value;
    };
    var getAttrNamespace = makeMap("contenteditable,draggable,spellcheck");
    var parseAttrName = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible");
    /** @type {string} */
    var xlinkns = "http://www.w3.org/1999/xlink";
    /**
     * @param {string} name
     * @return {?}
     */
    var attr = function(name) {
      return ":" === name.charAt(5) && "xlink" === name.slice(0, 5);
    };
    /**
     * @param {string} name
     * @return {?}
     */
    var getAttribute = function(name) {
      return attr(name) ? name.slice(6, name.length) : "";
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    var isFunction = function(value) {
      return null == value || false === value;
    };
    var args = {
      svg : "http://www.w3.org/2000/svg",
      math : "http://www.w3.org/1998/Math/MathML"
    };
    var isNormalModule = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template");
    var isNpmModule = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
    /**
     * @param {!Object} name
     * @return {?}
     */
    var define = function(name) {
      return isNormalModule(name) || isNpmModule(name);
    };
    /** @type {!Object} */
    var processedOptions = Object.create(null);
    var nodeOps = Object.freeze({
      createElement : createElement,
      createElementNS : createGroup,
      createTextNode : createTextNode,
      createComment : createComment,
      insertBefore : insertBefore,
      removeChild : doSplay,
      appendChild : appendChild,
      parentNode : parent,
      nextSibling : nextSibling,
      tagName : tagName,
      setTextContent : setTextContent,
      setAttribute : setAttribute
    });
    var eventListenersModule = {
      create : function(target, key) {
        add(key);
      },
      update : function(obj, key) {
        if (obj.data.ref !== key.data.ref) {
          add(obj, true);
          add(key);
        }
      },
      destroy : function(obj) {
        add(obj, true);
      }
    };
    var node = new VNode("", {}, []);
    /** @type {!Array} */
    var methods = ["create", "activate", "update", "remove", "destroy"];
    var eventListenersModule$1 = {
      create : connect,
      update : connect,
      destroy : function(target) {
        connect(target, node);
      }
    };
    /** @type {!Object} */
    var e = Object.create(null);
    /** @type {!Array} */
    var level = [eventListenersModule, eventListenersModule$1];
    var successRedirects = {
      create : create,
      update : create
    };
    var failureRedirects = {
      create : updateClass,
      update : updateClass
    };
    var successStatuses = {
      create : updateEventListeners,
      update : updateEventListeners
    };
    var componentSlotset = {
      create : handler,
      update : handler
    };
    var _isString = params(function(t) {
      var e = {};
      /** @type {!RegExp} */
      var slide_splitter = /;(?![^(]*\))/g;
      /** @type {!RegExp} */
      var TYPE_SEP = /:(.+)/;
      return t.split(slide_splitter).forEach(function(type) {
        if (type) {
          var termFragments = type.split(TYPE_SEP);
          if (termFragments.length > 1) {
            e[termFragments[0].trim()] = termFragments[1].trim();
          }
        }
      }), e;
    });
    /** @type {!RegExp} */
    var testRxp = /^--/;
    /** @type {!RegExp} */
    var template = /\s*!important$/;
    /**
     * @param {!Element} elem
     * @param {!Object} name
     * @param {string} params
     * @return {undefined}
     */
    var setStyle = function(elem, name, params) {
      if (testRxp.test(name)) {
        elem.style.setProperty(name, params);
      } else {
        if (template.test(params)) {
          elem.style.setProperty(name, params.replace(template, ""), "important");
        } else {
          /** @type {string} */
          elem.style[camelCase(name)] = params;
        }
      }
    };
    /** @type {!Array} */
    var prefixes = ["Webkit", "Moz", "ms"];
    var camelCase = params(function(prop) {
      if (element = element || document.createElement("div"), "filter" !== (prop = camelize(prop)) && prop in element.style) {
        return prop;
      }
      var name = prop.charAt(0).toUpperCase() + prop.slice(1);
      /** @type {number} */
      var i = 0;
      for (; i < 3; i++) {
        var p = prefixes[i] + name;
        if (p in element.style) {
          return p;
        }
      }
    });
    var uidModule = {
      create : updateStyle,
      update : updateStyle
    };
    /** @type {boolean} */
    var supportsHistory = inBrowser && !isIE9;
    /** @type {string} */
    var undefined = "transition";
    /** @type {string} */
    var next = "animation";
    /** @type {string} */
    var transitionProperty = "transition";
    /** @type {string} */
    var eventName = "transitionend";
    /** @type {string} */
    var animationProp = "animation";
    /** @type {string} */
    var event = "animationend";
    if (supportsHistory) {
      if (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend) {
        /** @type {string} */
        transitionProperty = "WebkitTransition";
        /** @type {string} */
        eventName = "webkitTransitionEnd";
      }
      if (void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend) {
        /** @type {string} */
        animationProp = "WebkitAnimation";
        /** @type {string} */
        event = "webkitAnimationEnd";
      }
    }
    var restyle = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
    /** @type {!RegExp} */
    var values = /\b(transform|all)(,|$)/;
    var omit = params(function(fxName) {
      return {
        enterClass : fxName + "-enter",
        leaveClass : fxName + "-leave",
        appearClass : fxName + "-enter",
        enterToClass : fxName + "-enter-to",
        leaveToClass : fxName + "-leave-to",
        appearToClass : fxName + "-enter-to",
        enterActiveClass : fxName + "-enter-active",
        leaveActiveClass : fxName + "-leave-active",
        appearActiveClass : fxName + "-enter-active"
      };
    });
    /** @type {({activate: function(!Object, string): undefined, create: function(!Object, string): undefined, remove: function(!Object, string): undefined}|{})} */
    var $window = inBrowser ? {
      create : activate,
      activate : activate,
      remove : function(target, key) {
        if (target.data.show) {
          key();
        } else {
          leave(target, key);
        }
      }
    } : {};
    /** @type {!Array} */
    var rendered = [successRedirects, failureRedirects, successStatuses, componentSlotset, uidModule, $window];
    /** @type {!Array<?>} */
    var modules = rendered.concat(level);
    var xhrClient = function(backend) {
      /**
       * @param {number} elm
       * @return {?}
       */
      function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], void 0, elm);
      }
      /**
       * @param {!Node} childElm
       * @param {!Object} listeners
       * @return {?}
       */
      function createRmCb(childElm, listeners) {
        /**
         * @return {undefined}
         */
        function remove() {
          if (0 == --remove.listeners) {
            removeNode(childElm);
          }
        }
        return remove.listeners = listeners, remove;
      }
      /**
       * @param {!Node} el
       * @return {undefined}
       */
      function removeNode(el) {
        var div = nodeOps.parentNode(el);
        if (div) {
          nodeOps.removeChild(div, el);
        }
      }
      /**
       * @param {!Object} vnode
       * @param {!Array} insertedVnodeQueue
       * @param {!HTMLElement} parentElm
       * @param {!Object} refElm
       * @param {boolean} nested
       * @return {undefined}
       */
      function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
        if (vnode.isRootInsert = !nested, !createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          var data = vnode.data;
          var children = vnode.children;
          var tag = vnode.tag;
          if (isDef(tag)) {
            vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          } else {
            if (vnode.isComment) {
              vnode.elm = nodeOps.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            } else {
              vnode.elm = nodeOps.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            }
          }
        }
      }
      /**
       * @param {!Object} b
       * @param {!Array} insertedVnodeQueue
       * @param {!Object} node
       * @param {(Object|string)} options
       * @return {?}
       */
      function createComponent(b, insertedVnodeQueue, node, options) {
        var i = b.data;
        if (isDef(i)) {
          var symbolFn = isDef(b.componentInstance) && i.keepAlive;
          if (isDef(i = i.hook) && isDef(i = i.init) && i(b, false, node, options), isDef(b.componentInstance)) {
            return initComponent(b, insertedVnodeQueue), symbolFn && reactivateComponent(b, insertedVnodeQueue, node, options), true;
          }
        }
      }
      /**
       * @param {string} vnode
       * @param {!Array} insertedVnodeQueue
       * @return {undefined}
       */
      function initComponent(vnode, insertedVnodeQueue) {
        if (vnode.data.pendingInsert) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          add(vnode);
          insertedVnodeQueue.push(vnode);
        }
      }
      /**
       * @param {!Object} vnode
       * @param {!Array} insertedVnodeQueue
       * @param {string} parentElm
       * @param {!Object} refElm
       * @return {undefined}
       */
      function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        /** @type {!Object} */
        var innerNode = vnode;
        for (; innerNode.componentInstance;) {
          if (innerNode = innerNode.componentInstance._vnode, isDef(i = innerNode.data) && isDef(i = i.transition)) {
            /** @type {number} */
            i = 0;
            for (; i < self.activate.length; ++i) {
              self.activate[i](node, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break;
          }
        }
        insert(parentElm, vnode.elm, refElm);
      }
      /**
       * @param {!HTMLElement} node
       * @param {undefined} el
       * @param {!Object} ref
       * @return {undefined}
       */
      function insert(node, el, ref) {
        if (node) {
          if (ref) {
            nodeOps.insertBefore(node, el, ref);
          } else {
            nodeOps.appendChild(node, el);
          }
        }
      }
      /**
       * @param {!Object} vnode
       * @param {!Object} children
       * @param {!Array} insertedVnodeQueue
       * @return {undefined}
       */
      function createChildren(vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          /** @type {number} */
          var i = 0;
          for (; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
          }
        } else {
          if (isArray(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
          }
        }
      }
      /**
       * @param {!Object} vnode
       * @return {?}
       */
      function isPatchable(vnode) {
        for (; vnode.componentInstance;) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
      }
      /**
       * @param {string} key
       * @param {!Array} queue
       * @return {undefined}
       */
      function invokeCreateHooks(key, queue) {
        /** @type {number} */
        var fn = 0;
        for (; fn < self.create.length; ++fn) {
          self.create[fn](node, key);
        }
        i = key.data.hook;
        if (isDef(i)) {
          if (i.create) {
            i.create(node, key);
          }
          if (i.insert) {
            queue.push(key);
          }
        }
      }
      /**
       * @param {!Object} vnode
       * @return {undefined}
       */
      function setScope(vnode) {
        var i;
        if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, "");
        }
        if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, "");
        }
      }
      /**
       * @param {!HTMLElement} parentElm
       * @param {!Object} refElm
       * @param {!Object} vnodes
       * @param {number} startIdx
       * @param {number} endIdx
       * @param {!Array} insertedVnodeQueue
       * @return {undefined}
       */
      function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
        }
      }
      /**
       * @param {!Object} a
       * @return {undefined}
       */
      function invokeDestroyHook(a) {
        var i;
        var j;
        var data = a.data;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) {
            i(a);
          }
          /** @type {number} */
          i = 0;
          for (; i < self.destroy.length; ++i) {
            self.destroy[i](a);
          }
        }
        if (isDef(i = a.children)) {
          /** @type {number} */
          j = 0;
          for (; j < a.children.length; ++j) {
            invokeDestroyHook(a.children[j]);
          }
        }
      }
      /**
       * @param {!Object} parentElm
       * @param {!Object} vnodes
       * @param {number} startIdx
       * @param {number} endIdx
       * @return {undefined}
       */
      function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else {
              removeNode(ch.elm);
            }
          }
        }
      }
      /**
       * @param {!Object} a
       * @param {!Object} e
       * @return {undefined}
       */
      function removeAndInvokeRemoveHook(a, e) {
        if (e || isDef(a.data)) {
          var listeners = self.remove.length + 1;
          if (e) {
            e.listeners += listeners;
          } else {
            e = createRmCb(a.elm, listeners);
          }
          if (isDef(i = a.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, e);
          }
          /** @type {number} */
          i = 0;
          for (; i < self.remove.length; ++i) {
            self.remove[i](a, e);
          }
          if (isDef(i = a.data.hook) && isDef(i = i.remove)) {
            i(a, e);
          } else {
            e();
          }
        } else {
          removeNode(a.elm);
        }
      }
      /**
       * @param {undefined} parentElm
       * @param {!Object} oldCh
       * @param {!Object} newCh
       * @param {!Array} insertedVnodeQueue
       * @param {?} removeOnly
       * @return {undefined}
       */
      function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var refElm;
        /** @type {number} */
        var oldStartIdx = 0;
        /** @type {number} */
        var newStartIdx = 0;
        /** @type {number} */
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        /** @type {number} */
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        /** @type {boolean} */
        var canMove = !removeOnly;
        for (; oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx;) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx];
          } else {
            if (isUndef(oldEndVnode)) {
              oldEndVnode = oldCh[--oldEndIdx];
            } else {
              if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
              } else {
                if (sameVnode(oldEndVnode, newEndVnode)) {
                  patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newEndVnode = newCh[--newEndIdx];
                } else {
                  if (sameVnode(oldStartVnode, newEndVnode)) {
                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                    if (canMove) {
                      nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                    }
                    oldStartVnode = oldCh[++oldStartIdx];
                    newEndVnode = newCh[--newEndIdx];
                  } else {
                    if (sameVnode(oldEndVnode, newStartVnode)) {
                      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                      if (canMove) {
                        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                      }
                      oldEndVnode = oldCh[--oldEndIdx];
                      newStartVnode = newCh[++newStartIdx];
                    } else {
                      if (isUndef(oldKeyToIdx)) {
                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                      }
                      idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
                      if (isUndef(idxInOld)) {
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                        newStartVnode = newCh[++newStartIdx];
                      } else {
                        elmToMove = oldCh[idxInOld];
                        if (sameVnode(elmToMove, newStartVnode)) {
                          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                          oldCh[idxInOld] = void 0;
                          if (canMove) {
                            nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
                          }
                          newStartVnode = newCh[++newStartIdx];
                        } else {
                          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                          newStartVnode = newCh[++newStartIdx];
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else {
          if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
          }
        }
      }
      /**
       * @param {!Object} a
       * @param {!Object} vnode
       * @param {!Array} insertedVnodeQueue
       * @param {?} removeOnly
       * @return {?}
       */
      function patchVnode(a, vnode, insertedVnodeQueue, removeOnly) {
        if (a !== vnode) {
          if (vnode.isStatic && a.isStatic && vnode.key === a.key && (vnode.isCloned || vnode.isOnce)) {
            return vnode.elm = a.elm, void(vnode.componentInstance = a.componentInstance);
          }
          var i;
          var data = vnode.data;
          var hasData = isDef(data);
          if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
            i(a, vnode);
          }
          var elm = vnode.elm = a.elm;
          var oldCh = a.children;
          var ch = vnode.children;
          if (hasData && isPatchable(vnode)) {
            /** @type {number} */
            i = 0;
            for (; i < self.update.length; ++i) {
              self.update[i](a, vnode);
            }
            if (isDef(i = data.hook) && isDef(i = i.update)) {
              i(a, vnode);
            }
          }
          if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
              if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
              }
            } else {
              if (isDef(ch)) {
                if (isDef(a.text)) {
                  nodeOps.setTextContent(elm, "");
                }
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              } else {
                if (isDef(oldCh)) {
                  removeVnodes(elm, oldCh, 0, oldCh.length - 1);
                } else {
                  if (isDef(a.text)) {
                    nodeOps.setTextContent(elm, "");
                  }
                }
              }
            }
          } else {
            if (a.text !== vnode.text) {
              nodeOps.setTextContent(elm, vnode.text);
            }
          }
          if (hasData && isDef(i = data.hook) && isDef(i = i.postpatch)) {
            i(a, vnode);
          }
        }
      }
      /**
       * @param {!Object} vnode
       * @param {!Array} queue
       * @param {boolean} initial
       * @return {undefined}
       */
      function invokeInsertHook(vnode, queue, initial) {
        if (initial && vnode.parent) {
          /** @type {!Array} */
          vnode.parent.data.pendingInsert = queue;
        } else {
          /** @type {number} */
          var i = 0;
          for (; i < queue.length; ++i) {
            queue[i].data.hook.insert(queue[i]);
          }
        }
      }
      /**
       * @param {!Element} a
       * @param {!Object} obj
       * @param {!Array} insertedVnodeQueue
       * @return {?}
       */
      function hydrate(a, obj, insertedVnodeQueue) {
        /** @type {!Element} */
        obj.elm = a;
        var tag = obj.tag;
        var data = obj.data;
        var children = obj.children;
        if (isDef(data) && (isDef(i = data.hook) && isDef(i = i.init) && i(obj, true), isDef(i = obj.componentInstance))) {
          return initComponent(obj, insertedVnodeQueue), true;
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            if (a.hasChildNodes()) {
              /** @type {boolean} */
              var item = true;
              var child = a.firstChild;
              /** @type {number} */
              var i = 0;
              for (; i < children.length; i++) {
                if (!child || !hydrate(child, children[i], insertedVnodeQueue)) {
                  /** @type {boolean} */
                  item = false;
                  break;
                }
                child = child.nextSibling;
              }
              if (!item || child) {
                return false;
              }
            } else {
              createChildren(obj, children, insertedVnodeQueue);
            }
          }
          if (isDef(data)) {
            var key;
            for (key in data) {
              if (!isRenderedModule(key)) {
                invokeCreateHooks(obj, insertedVnodeQueue);
                break;
              }
            }
          }
        } else {
          if (a.data !== obj.text) {
            a.data = obj.text;
          }
        }
        return true;
      }
      var i;
      var g;
      var self = {};
      /** @type {!Array<?>} */
      var modules = backend.modules;
      var nodeOps = backend.nodeOps;
      /** @type {number} */
      i = 0;
      for (; i < methods.length; ++i) {
        /** @type {!Array} */
        self[methods[i]] = [];
        /** @type {number} */
        g = 0;
        for (; g < modules.length; ++g) {
          if (void 0 !== modules[g][methods[i]]) {
            self[methods[i]].push(modules[g][methods[i]]);
          }
        }
      }
      var isRenderedModule = makeMap("attrs,style,class,staticClass,staticStyle,key");
      return function(oldVnode, vnode, elem, removeOnly, parentElm, refElm) {
        if (!vnode) {
          return void(oldVnode && invokeDestroyHook(oldVnode));
        }
        /** @type {boolean} */
        var isInitialPatch = false;
        /** @type {!Array} */
        var insertedVnodeQueue = [];
        if (oldVnode) {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
          } else {
            if (isRealElement) {
              if (1 === oldVnode.nodeType && oldVnode.hasAttribute("server-rendered") && (oldVnode.removeAttribute("server-rendered"), elem = true), elem && hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                return invokeInsertHook(vnode, insertedVnodeQueue, true), oldVnode;
              }
              oldVnode = emptyNodeAt(oldVnode);
            }
            var oldElm = oldVnode.elm;
            var parentElm = nodeOps.parentNode(oldElm);
            if (createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)), vnode.parent) {
              var ancestor = vnode.parent;
              for (; ancestor;) {
                ancestor.elm = vnode.elm;
                ancestor = ancestor.parent;
              }
              if (isPatchable(vnode)) {
                /** @type {number} */
                var i = 0;
                for (; i < self.create.length; ++i) {
                  self.create[i](node, vnode.parent);
                }
              }
            }
            if (null !== parentElm) {
              removeVnodes(parentElm, [oldVnode], 0, 0);
            } else {
              if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode);
              }
            }
          }
        } else {
          /** @type {boolean} */
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch), vnode.elm;
      };
    }({
      nodeOps : nodeOps,
      modules : modules
    });
    if (isIE9) {
      document.addEventListener("selectionchange", function() {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, "input");
        }
      });
    }
    var directive = {
      inserted : function(el, binding, vnode) {
        if ("select" === vnode.tag) {
          /**
           * @return {undefined}
           */
          var cb = function() {
            setSelected(el, binding, vnode.context);
          };
          cb();
          if (isIE || isEdge) {
            setTimeout(cb, 0);
          }
        } else {
          if (!("textarea" !== vnode.tag && "text" !== el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
              if (!isAndroid) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
              }
              if (isIE9) {
                /** @type {boolean} */
                el.vmodel = true;
              }
            }
          }
        }
      },
      componentUpdated : function(el, binding, vnode) {
        if ("select" === vnode.tag) {
          setSelected(el, binding, vnode.context);
          if (el.multiple ? binding.value.some(function(v) {
            return hasNoMatchingOption(v, el.options);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options)) {
            trigger(el, "change");
          }
        }
      }
    };
    var directiveBinding = {
      bind : function(target, key, text) {
        var value = key.value;
        text = toString(text);
        var ccType = text.data && text.data.transition;
        var dis = target.__vOriginalDisplay = "none" === target.style.display ? "" : target.style.display;
        if (value && ccType && !isIE9) {
          /** @type {boolean} */
          text.data.show = true;
          enter(text, function() {
            target.style.display = dis;
          });
        } else {
          target.style.display = value ? dis : "none";
        }
      },
      update : function(target, key, text) {
        var value = key.value;
        if (value !== key.oldValue) {
          text = toString(text);
          if (text.data && text.data.transition && !isIE9) {
            /** @type {boolean} */
            text.data.show = true;
            if (value) {
              enter(text, function() {
                target.style.display = target.__vOriginalDisplay;
              });
            } else {
              leave(text, function() {
                /** @type {string} */
                target.style.display = "none";
              });
            }
          } else {
            target.style.display = value ? target.__vOriginalDisplay : "none";
          }
        }
      },
      unbind : function(e, type, callback, priority, fn) {
        if (!fn) {
          e.style.display = e.__vOriginalDisplay;
        }
      }
    };
    var opts = {
      model : directive,
      show : directiveBinding
    };
    var value = {
      name : String,
      appear : Boolean,
      css : Boolean,
      mode : String,
      type : String,
      enterClass : String,
      leaveClass : String,
      enterToClass : String,
      leaveToClass : String,
      enterActiveClass : String,
      leaveActiveClass : String,
      appearClass : String,
      appearActiveClass : String,
      appearToClass : String
    };
    var data = {
      name : "transition",
      props : value,
      abstract : true,
      render : function(version) {
        var instance = this;
        var groups = this.$slots.default;
        if (groups && (groups = groups.filter(function(languageOption) {
          return languageOption.tag;
        }), groups.length)) {
          var outerMode = this.mode;
          var el = groups[0];
          if (_init(this.$vnode)) {
            return el;
          }
          var node = factory(el);
          if (!node) {
            return el;
          }
          if (this._leaving) {
            return build(version, el);
          }
          /** @type {string} */
          var prefix = "__transition-" + this._uid + "-";
          var zoom = node.key = null == node.key ? prefix + node.tag : isArray(node.key) ? 0 === (node.key + "").indexOf(prefix) ? node.key : prefix + node.key : node.key;
          var path = (node.data || (node.data = {})).transition = select(this);
          var range = this._vnode;
          var item = factory(range);
          if (node.data.directives && node.data.directives.some(function(engineDiscovery) {
            return "show" === engineDiscovery.name;
          }) && (node.data.show = true), item && item.data && !getName(node, item)) {
            var token = item && (item.data.transition = extend({}, path));
            if ("out-in" === outerMode) {
              return this._leaving = true, contains(token, "afterLeave", function() {
                /** @type {boolean} */
                instance._leaving = false;
                instance.$forceUpdate();
              }, zoom), build(version, el);
            }
            if ("in-out" === outerMode) {
              var text;
              /**
               * @return {undefined}
               */
              var comparator = function() {
                text();
              };
              contains(path, "afterEnter", comparator, zoom);
              contains(path, "enterCancelled", comparator, zoom);
              contains(token, "delayLeave", function(sectionAnchor) {
                text = sectionAnchor;
              }, zoom);
            }
          }
          return el;
        }
      }
    };
    var props = extend({
      tag : String,
      moveClass : String
    }, value);
    delete props.mode;
    var index = {
      props : props,
      render : function(h) {
        var tag = this.tag || this.$vnode.data.tag || "span";
        /** @type {!Object} */
        var row = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var BIG_CONTEXT = this.$slots.default || [];
        /** @type {!Array} */
        var children = this.children = [];
        var item = select(this);
        /** @type {number} */
        var j = 0;
        for (; j < BIG_CONTEXT.length; j++) {
          var d = BIG_CONTEXT[j];
          if (d.tag) {
            if (null != d.key && 0 !== (d.key + "").indexOf("__vlist")) {
              children.push(d);
              row[d.key] = d;
              (d.data || (d.data = {})).transition = item;
            } else {
            }
          }
        }
        if (prevChildren) {
          /** @type {!Array} */
          var kept = [];
          /** @type {!Array} */
          var removed = [];
          /** @type {number} */
          var i = 0;
          for (; i < prevChildren.length; i++) {
            var c = prevChildren[i];
            c.data.transition = item;
            c.data.pos = c.elm.getBoundingClientRect();
            if (row[c.key]) {
              kept.push(c);
            } else {
              removed.push(c);
            }
          }
          this.kept = h(tag, null, kept);
          /** @type {!Array} */
          this.removed = removed;
        }
        return h(tag, null, children);
      },
      beforeUpdate : function() {
        this.__patch__(this._vnode, this.kept, false, true);
        this._vnode = this.kept;
      },
      updated : function() {
        var dom = this.prevChildren;
        var err = this.moveClass || (this.name || "v") + "-move";
        if (dom.length && this.hasMove(dom[0].elm, err)) {
          dom.forEach(rm);
          dom.forEach(show);
          dom.forEach(reset);
          document.body.offsetHeight;
          dom.forEach(function(self) {
            if (self.data.moved) {
              var el = self.elm;
              var style = el.style;
              cb(el, err);
              /** @type {string} */
              style.transform = style.WebkitTransform = style.transitionDuration = "";
              el.addEventListener(eventName, el._moveCb = function t(p) {
                if (!(p && !/transform$/.test(p.propertyName))) {
                  el.removeEventListener(eventName, t);
                  /** @type {null} */
                  el._moveCb = null;
                  fn(el, err);
                }
              });
            }
          });
        }
      },
      methods : {
        hasMove : function(t, err) {
          if (!supportsHistory) {
            return false;
          }
          if (null != this._hasMove) {
            return this._hasMove;
          }
          cb(t, err);
          var computedStyle = getComputedStyle(t);
          return fn(t, err), this._hasMove = computedStyle.hasTransform;
        }
      }
    };
    var aCommands = {
      Transition : data,
      TransitionGroup : index
    };
    /** @type {function(string): ?} */
    Vue.config.isUnknownElement = register;
    /** @type {function(!Object): ?} */
    Vue.config.isReservedTag = define;
    /** @type {function(!Object): ?} */
    Vue.config.getTagNamespace = createNode;
    /** @type {function(!Object, undefined, string): ?} */
    Vue.config.mustUseProp = getOptionsFromValue;
    extend(Vue.options.directives, opts);
    extend(Vue.options.components, aCommands);
    Vue.prototype.__patch__ = inBrowser ? xhrClient : noop;
    /**
     * @param {string} obj
     * @param {?} name
     * @return {?}
     */
    Vue.prototype.$mount = function(obj, name) {
      return obj = obj && inBrowser ? $(obj) : void 0, this._mount(obj, name);
    };
    setTimeout(function() {
      if (config.devtools && events) {
        events.emit("init", Vue);
      }
    }, 0);
    /** @type {function(!Object): undefined} */
    options.exports = Vue;
  }).call(gen34_options, moment(57));
}, function(canCreateDiscussions, self, require) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function r(obj) {
    return "function" == typeof obj ? view.componentFactory(obj) : function(e) {
      return view.componentFactory(e, obj);
    };
  }
  var view = require(58);
  var Utils = require(108);
  self.createDecorator = Utils.createDecorator;
  Object.defineProperty(self, "__esModule", {
    value : true
  });
  /** @type {function(!Object): ?} */
  self.default = r;
}, function(mixin, canCreateDiscussions, require) {
  var store = require(28)("wks");
  var contentType = require(18);
  var opts = require(3).Symbol;
  /** @type {boolean} */
  var cb = "function" == typeof opts;
  (mixin.exports = function(target) {
    return store[target] || (store[target] = cb && opts[target] || (cb ? opts : contentType)("Symbol." + target));
  }).store = store;
}, function(module, canCreateDiscussions) {
  var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  if ("number" == typeof __g) {
    __g = global;
  }
}, function(module, canCreateDiscussions) {
  var core = module.exports = {
    version : "2.5.1"
  };
  if ("number" == typeof __e) {
    __e = core;
  }
}, function(mixin, canCreateDiscussions) {
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = {}.hasOwnProperty;
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    return hasOwn.call(target, key);
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  var global = __webpack_require__(3);
  var core = __webpack_require__(4);
  var hide = __webpack_require__(10);
  var redefine = __webpack_require__(13);
  var ctx = __webpack_require__(19);
  /**
   * @param {string} type
   * @param {string} name
   * @param {string} source
   * @return {undefined}
   */
  var $export = function(type, name, source) {
    var key;
    var own;
    var out;
    var returnThis;
    /** @type {number} */
    var IS_FORCED = type & $export.F;
    /** @type {number} */
    var IS_GLOBAL = type & $export.G;
    /** @type {number} */
    var IS_STATIC = type & $export.S;
    /** @type {number} */
    var IS_PROTO = type & $export.P;
    /** @type {number} */
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {}).prototype;
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports.prototype || (exports.prototype = {});
    if (IS_GLOBAL) {
      /** @type {string} */
      source = name;
    }
    for (key in source) {
      own = !IS_FORCED && target && void 0 !== target[key];
      out = (own ? target : source)[key];
      returnThis = IS_BIND && own ? ctx(out, global) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out;
      if (target) {
        redefine(target, key, out, type & $export.U);
      }
      if (exports[key] != out) {
        hide(exports, key, returnThis);
      }
      if (IS_PROTO && expProto[key] != out) {
        expProto[key] = out;
      }
    }
  };
  global.core = core;
  /** @type {number} */
  $export.F = 1;
  /** @type {number} */
  $export.G = 2;
  /** @type {number} */
  $export.S = 4;
  /** @type {number} */
  $export.P = 8;
  /** @type {number} */
  $export.B = 16;
  /** @type {number} */
  $export.W = 32;
  /** @type {number} */
  $export.U = 64;
  /** @type {number} */
  $export.R = 128;
  /** @type {function(string, string, string): undefined} */
  module.exports = $export;
}, function(canCreateDiscussions, minF, __webpack_require__) {
  var create = __webpack_require__(8);
  var _UiIcon = __webpack_require__(38);
  var getValidKey = __webpack_require__(27);
  /** @type {function(!Object, string, !Object): !Object} */
  var defineProp = Object.defineProperty;
  /** @type {!Function} */
  minF.f = __webpack_require__(9) ? Object.defineProperty : function(target, key, desc) {
    if (create(target), key = getValidKey(key, true), create(desc), _UiIcon) {
      try {
        return defineProp(target, key, desc);
      } catch (t) {
      }
    }
    if ("get" in desc || "set" in desc) {
      throw TypeError("Accessors not supported!");
    }
    return "value" in desc && (target[key] = desc.value), target;
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var recalcBody = saveNotifs(11);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    if (!recalcBody(target)) {
      throw TypeError(target + " is not an object!");
    }
    return target;
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  /** @type {boolean} */
  mixin.exports = !saveNotifs(16)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get : function() {
        return 7;
      }
    }).a;
  });
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var dP = __webpack_require__(7);
  var createDesc = __webpack_require__(17);
  /** @type {function(!Object, string, !Function): ?} */
  mixin.exports = __webpack_require__(9) ? function(target, key, value) {
    return dP.f(target, key, createDesc(1, value));
  } : function(target, key, prop) {
    return target[key] = prop, target;
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return "object" == typeof target ? null !== target : "function" == typeof target;
  };
}, function(mixin, canCreateDiscussions, require) {
  var toArray = require(41);
  var $ = require(25);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return toArray($(target));
  };
}, function(mixin, canCreateDiscussions, require) {
  var _webapp = require(3);
  var h = require(10);
  var next = require(5);
  var text = require(18)("src");
  var $toString = Function.toString;
  /** @type {!Array<string>} */
  var keys = ("" + $toString).split("toString");
  /**
   * @param {?} it
   * @return {?}
   */
  require(4).inspectSource = function(it) {
    return $toString.call(it);
  };
  (mixin.exports = function(target, key, val, s) {
    /** @type {boolean} */
    var cb = "function" == typeof val;
    if (cb) {
      if (!next(val, "name")) {
        h(val, "name", key);
      }
    }
    if (target[key] !== val) {
      if (cb) {
        if (!next(val, text)) {
          h(val, text, target[key] ? "" + target[key] : keys.join(key + ""));
        }
      }
      if (target === _webapp) {
        /** @type {!Function} */
        target[key] = val;
      } else {
        if (s) {
          if (target[key]) {
            /** @type {!Function} */
            target[key] = val;
          } else {
            h(target, key, val);
          }
        } else {
          delete target[key];
          h(target, key, val);
        }
      }
    }
  })(Function.prototype, "toString", function() {
    return "function" == typeof this && this[text] || $toString.call(this);
  });
}, function(mixin, canCreateDiscussions, n) {
  var r = n(40);
  var i = n(32);
  /** @type {function(!Object): !Array<string>} */
  mixin.exports = Object.keys || function(target) {
    return r(target, i);
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {function(this:*): string} */
  var type = {}.toString;
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return type.call(target).slice(8, -1);
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    try {
      return !!target();
    } catch (t) {
      return true;
    }
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {string} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    return {
      enumerable : !(1 & target),
      configurable : !(2 & target),
      writable : !(4 & target),
      value : key
    };
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {number} */
  var id = 0;
  /** @type {number} */
  var px = Math.random();
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return "Symbol(".concat(void 0 === target ? "" : target, ")_", (++id + px).toString(36));
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var recalcBody = saveNotifs(22);
  /**
   * @param {!Object} target
   * @param {?} key
   * @param {!Function} prop
   * @return {?}
   */
  mixin.exports = function(target, key, prop) {
    if (recalcBody(target), void 0 === key) {
      return target;
    }
    switch(prop) {
      case 1:
        return function(p1__3354_SHARP_) {
          return target.call(key, p1__3354_SHARP_);
        };
      case 2:
        return function(p1__3354_SHARP_, settings) {
          return target.call(key, p1__3354_SHARP_, settings);
        };
      case 3:
        return function(p1__3354_SHARP_, settings, callback) {
          return target.call(key, p1__3354_SHARP_, settings, callback);
        };
    }
    return function() {
      return target.apply(key, arguments);
    };
  };
}, function(canCreateDiscussions, exports) {
  /** @type {function(this:Object, string): boolean} */
  exports.f = {}.propertyIsEnumerable;
}, function(mixin, canCreateDiscussions) {
  mixin.exports = {};
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    if ("function" != typeof target) {
      throw TypeError(target + " is not a function!");
    }
    return target;
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var def = __webpack_require__(7).f;
  var setToStringTag = __webpack_require__(5);
  var TAG = __webpack_require__(2)("toStringTag");
  /**
   * @param {!Object} target
   * @param {string} key
   * @param {!Object} tag
   * @return {undefined}
   */
  mixin.exports = function(target, key, tag) {
    if (target && !setToStringTag(target = tag ? target : target.prototype, TAG)) {
      def(target, TAG, {
        configurable : true,
        value : key
      });
    }
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {boolean} */
  mixin.exports = false;
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    if (void 0 == target) {
      throw TypeError("Can't call method on  " + target);
    }
    return target;
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var isObject = __webpack_require__(11);
  var document = __webpack_require__(3).document;
  var after = isObject(document) && isObject(document.createElement);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return after ? document.createElement(target) : {};
  };
}, function(mixin, canCreateDiscussions, require) {
  var transform = require(11);
  /**
   * @param {!Object} obj
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(obj, key) {
    if (!transform(obj)) {
      return obj;
    }
    var fn;
    var postponed;
    if (key && "function" == typeof(fn = obj.toString) && !transform(postponed = fn.call(obj))) {
      return postponed;
    }
    if ("function" == typeof(fn = obj.valueOf) && !transform(postponed = fn.call(obj))) {
      return postponed;
    }
    if (!key && "function" == typeof(fn = obj.toString) && !transform(postponed = fn.call(obj))) {
      return postponed;
    }
    throw TypeError("Can't convert object to primitive value");
  };
}, function(mixin, canCreateDiscussions, floor) {
  var startYNew = floor(3);
  var graphiteData = startYNew["__core-js_shared__"] || (startYNew["__core-js_shared__"] = {});
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return graphiteData[target] || (graphiteData[target] = {});
  };
}, function(mixin, canCreateDiscussions, moment) {
  var max = moment(30);
  /** @type {function(...?): number} */
  var min = Math.min;
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return target > 0 ? min(max(target), 9007199254740991) : 0;
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {function(?): number} */
  var ceil = Math.ceil;
  /** @type {function(?): number} */
  var floor = Math.floor;
  /**
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(value) {
    return isNaN(value = +value) ? 0 : (value > 0 ? floor : ceil)(value);
  };
}, function(mixin, canCreateDiscussions, require) {
  var result = require(28)("keys");
  var assign = require(18);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return result[target] || (result[target] = assign(target));
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array<string>} */
  mixin.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(canCreateDiscussions, exports) {
  /** @type {function(!Object): !Array<?>} */
  exports.f = Object.getOwnPropertySymbols;
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var cof = __webpack_require__(15);
  var path = __webpack_require__(2)("toStringTag");
  /** @type {boolean} */
  var ARG = "Arguments" == cof(function() {
    return arguments;
  }());
  /**
   * @param {!Object} key
   * @param {string} val
   * @return {?}
   */
  var def = function(key, val) {
    try {
      return key[val];
    } catch (t) {
    }
  };
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    var O;
    var type;
    var B;
    return void 0 === target ? "Undefined" : null === target ? "Null" : "string" == typeof(type = def(O = Object(target), path)) ? type : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B;
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var defined = __webpack_require__(25);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return Object(defined(target));
  };
}, function(meta, canCreateDiscussions) {
  meta.exports = {
    description : "TinyPNG and TinyJPG Pro Account (1 year)",
    renewal_description : "TinyPNG and TinyJPG Pro Renewal (1 year)",
    price : 25
  };
}, function(mixin, canCreateDiscussions) {
  !function() {
    /**
     * @param {string} locale
     * @param {number} customTimezoneOffset
     * @param {boolean} useUtcTimezone
     * @return {?}
     */
    function Strftime(locale, customTimezoneOffset, useUtcTimezone) {
      /**
       * @param {string} format
       * @param {string} date
       * @return {?}
       */
      function _strftime(format, date) {
        var timestamp;
        if (date) {
          if (timestamp = date.getTime(), _useUtcBasedDate) {
            var age = getTimestampToUtcOffsetFor(date);
            if (date = new Date(timestamp + age + _customTimezoneOffset), getTimestampToUtcOffsetFor(date) !== age) {
              var method = getTimestampToUtcOffsetFor(date);
              /** @type {!Date} */
              date = new Date(timestamp + method + _customTimezoneOffset);
            }
          }
        } else {
          /** @type {number} */
          var currentTimestamp = Date.now();
          if (currentTimestamp > _cachedDateTimestamp) {
            /** @type {number} */
            _cachedDateTimestamp = currentTimestamp;
            /** @type {!Date} */
            _cachedDate = new Date(_cachedDateTimestamp);
            /** @type {number} */
            timestamp = _cachedDateTimestamp;
            if (_useUtcBasedDate) {
              /** @type {!Date} */
              _cachedDate = new Date(_cachedDateTimestamp + getTimestampToUtcOffsetFor(_cachedDate) + _customTimezoneOffset);
            }
          } else {
            timestamp = _cachedDateTimestamp;
          }
          date = _cachedDate;
        }
        return _processFormat(format, date, _locale, timestamp);
      }
      /**
       * @param {string} format
       * @param {!Object} date
       * @param {!Object} locale
       * @param {number} timestamp
       * @return {?}
       */
      function _processFormat(format, date, locale, timestamp) {
        /** @type {string} */
        var resultString = "";
        /** @type {null} */
        var padding = null;
        /** @type {boolean} */
        var f = false;
        var p = format.length;
        /** @type {boolean} */
        var extendedTZ = false;
        /** @type {number} */
        var index = 0;
        for (; index < p; index++) {
          var languageBlock = format.charCodeAt(index);
          if (true !== f) {
            if (37 !== languageBlock) {
              resultString = resultString + format[index];
            } else {
              /** @type {boolean} */
              f = true;
            }
          } else {
            if (45 === languageBlock) {
              /** @type {string} */
              padding = "";
              continue;
            }
            if (95 === languageBlock) {
              /** @type {string} */
              padding = " ";
              continue;
            }
            if (48 === languageBlock) {
              /** @type {string} */
              padding = "0";
              continue;
            }
            if (58 === languageBlock) {
              if (extendedTZ) {
                getTime("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime");
              }
              /** @type {boolean} */
              extendedTZ = true;
              continue;
            }
            switch(languageBlock) {
              case 37:
                /** @type {string} */
                resultString = resultString + "%";
                break;
              case 65:
                resultString = resultString + locale.days[date.getDay()];
                break;
              case 66:
                resultString = resultString + locale.months[date.getMonth()];
                break;
              case 67:
                resultString = resultString + padTill2(Math.floor(date.getFullYear() / 100), padding);
                break;
              case 68:
                resultString = resultString + _processFormat(locale.formats.D, date, locale, timestamp);
                break;
              case 70:
                resultString = resultString + _processFormat(locale.formats.F, date, locale, timestamp);
                break;
              case 72:
                resultString = resultString + padTill2(date.getHours(), padding);
                break;
              case 73:
                resultString = resultString + padTill2(hours12(date.getHours()), padding);
                break;
              case 76:
                resultString = resultString + getText(Math.floor(timestamp % 1E3));
                break;
              case 77:
                resultString = resultString + padTill2(date.getMinutes(), padding);
                break;
              case 80:
                resultString = resultString + (date.getHours() < 12 ? locale.am : locale.pm);
                break;
              case 82:
                resultString = resultString + _processFormat(locale.formats.R, date, locale, timestamp);
                break;
              case 83:
                resultString = resultString + padTill2(date.getSeconds(), padding);
                break;
              case 84:
                resultString = resultString + _processFormat(locale.formats.T, date, locale, timestamp);
                break;
              case 85:
                resultString = resultString + padTill2(weekNumber(date, "sunday"), padding);
                break;
              case 87:
                resultString = resultString + padTill2(weekNumber(date, "monday"), padding);
                break;
              case 88:
                resultString = resultString + _processFormat(locale.formats.X, date, locale, timestamp);
                break;
              case 89:
                resultString = resultString + date.getFullYear();
                break;
              case 90:
                if (_useUtcBasedDate && 0 === _customTimezoneOffset) {
                  /** @type {string} */
                  resultString = resultString + "GMT";
                } else {
                  /** @type {(Array<string>|null)} */
                  var rfl = ("" + date).match(/\(([\w\s]+)\)/);
                  /** @type {string} */
                  resultString = resultString + (rfl && rfl[1] || "");
                }
                break;
              case 97:
                resultString = resultString + locale.shortDays[date.getDay()];
                break;
              case 98:
                resultString = resultString + locale.shortMonths[date.getMonth()];
                break;
              case 99:
                resultString = resultString + _processFormat(locale.formats.c, date, locale, timestamp);
                break;
              case 100:
                resultString = resultString + padTill2(date.getDate(), padding);
                break;
              case 101:
                resultString = resultString + padTill2(date.getDate(), null == padding ? " " : padding);
                break;
              case 104:
                resultString = resultString + locale.shortMonths[date.getMonth()];
                break;
              case 106:
                /** @type {!Date} */
                var semiannualPing = new Date(date.getFullYear(), 0, 1);
                /** @type {number} */
                var i = Math.ceil((date.getTime() - semiannualPing.getTime()) / 864E5);
                resultString = resultString + getText(i);
                break;
              case 107:
                resultString = resultString + padTill2(date.getHours(), null == padding ? " " : padding);
                break;
              case 108:
                resultString = resultString + padTill2(hours12(date.getHours()), null == padding ? " " : padding);
                break;
              case 109:
                resultString = resultString + padTill2(date.getMonth() + 1, padding);
                break;
              case 110:
                /** @type {string} */
                resultString = resultString + "\n";
                break;
              case 111:
                i = date.getDate();
                if (locale.ordinalSuffixes) {
                  resultString = resultString + (i + "" + (locale.ordinalSuffixes[i - 1] || suffix(i)));
                } else {
                  /** @type {string} */
                  resultString = resultString + (i + "" + suffix(i));
                }
                break;
              case 112:
                resultString = resultString + (date.getHours() < 12 ? locale.AM : locale.PM);
                break;
              case 114:
                resultString = resultString + _processFormat(locale.formats.r, date, locale, timestamp);
                break;
              case 115:
                resultString = resultString + Math.floor(timestamp / 1E3);
                break;
              case 116:
                /** @type {string} */
                resultString = resultString + "\t";
                break;
              case 117:
                i = date.getDay();
                resultString = resultString + (0 === i ? 7 : i);
                break;
              case 118:
                resultString = resultString + _processFormat(locale.formats.v, date, locale, timestamp);
                break;
              case 119:
                resultString = resultString + date.getDay();
                break;
              case 120:
                resultString = resultString + _processFormat(locale.formats.x, date, locale, timestamp);
                break;
              case 121:
                resultString = resultString + ("" + date.getFullYear()).slice(2);
                break;
              case 122:
                if (_useUtcBasedDate && 0 === _customTimezoneOffset) {
                  /** @type {string} */
                  resultString = resultString + (extendedTZ ? "+00:00" : "+0000");
                } else {
                  var value;
                  /** @type {number} */
                  value = 0 !== _customTimezoneOffset ? _customTimezoneOffset / 6E4 : -date.getTimezoneOffset();
                  /** @type {string} */
                  var sign = value < 0 ? "-" : "+";
                  /** @type {string} */
                  var sep = extendedTZ ? ":" : "";
                  /** @type {number} */
                  var hours = Math.floor(Math.abs(value / 60));
                  /** @type {number} */
                  var mins = Math.abs(value % 60);
                  /** @type {string} */
                  resultString = resultString + (sign + padTill2(hours) + sep + padTill2(mins));
                }
                break;
              default:
                if (f) {
                  /** @type {string} */
                  resultString = resultString + "%";
                }
                resultString = resultString + format[index];
            }
            /** @type {null} */
            padding = null;
            /** @type {boolean} */
            f = false;
          }
        }
        return resultString;
      }
      var _cachedDate;
      var _locale = locale || DefaultLocale;
      var _customTimezoneOffset = customTimezoneOffset || 0;
      var _useUtcBasedDate = useUtcTimezone || false;
      /** @type {number} */
      var _cachedDateTimestamp = 0;
      /** @type {function(string, string): ?} */
      var strftime = _strftime;
      return strftime.localize = function(locale) {
        return new Strftime(locale || _locale, _customTimezoneOffset, _useUtcBasedDate);
      }, strftime.localizeByIdentifier = function(k) {
        var locale = _Locales[k];
        return locale ? strftime.localize(locale) : (getTime('[WARNING] No locale found with identifier "' + k + '".'), strftime);
      }, strftime.timezone = function(value) {
        var customTimezoneOffset = _customTimezoneOffset;
        var useUtcBasedDate = _useUtcBasedDate;
        /** @type {string} */
        var undefined = typeof value;
        if ("number" === undefined || "string" === undefined) {
          if (useUtcBasedDate = true, "string" === undefined) {
            /** @type {number} */
            var bSlope = "-" === value[0] ? -1 : 1;
            /** @type {number} */
            var mapWidth = parseInt(value.slice(1, 3), 10);
            /** @type {number} */
            var x1 = parseInt(value.slice(3, 5), 10);
            /** @type {number} */
            customTimezoneOffset = bSlope * (60 * mapWidth + x1) * 60 * 1E3;
          } else {
            if ("number" === undefined) {
              /** @type {number} */
              customTimezoneOffset = 60 * value * 1E3;
            }
          }
        }
        return new Strftime(_locale, customTimezoneOffset, useUtcBasedDate);
      }, strftime.utc = function() {
        return new Strftime(_locale, _customTimezoneOffset, true);
      }, strftime;
    }
    /**
     * @param {number} numberToPad
     * @param {string} paddingChar
     * @return {?}
     */
    function padTill2(numberToPad, paddingChar) {
      return "" === paddingChar || numberToPad > 9 ? numberToPad : (null == paddingChar && (paddingChar = "0"), paddingChar + numberToPad);
    }
    /**
     * @param {number} size
     * @return {?}
     */
    function getText(size) {
      return size > 99 ? size : size > 9 ? "0" + size : "00" + size;
    }
    /**
     * @param {number} hour
     * @return {?}
     */
    function hours12(hour) {
      return 0 === hour ? 12 : hour > 12 ? hour - 12 : hour;
    }
    /**
     * @param {!Object} date
     * @param {string} firstWeekday
     * @return {?}
     */
    function weekNumber(date, firstWeekday) {
      firstWeekday = firstWeekday || "sunday";
      var n = date.getDay();
      if ("monday" === firstWeekday) {
        if (0 === n) {
          /** @type {number} */
          n = 6;
        } else {
          n--;
        }
      }
      /** @type {number} */
      var r = Date.UTC(date.getFullYear(), 0, 1);
      /** @type {number} */
      var lastLineMinY = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
      /** @type {number} */
      var count = Math.floor((lastLineMinY - r) / 864E5);
      /** @type {number} */
      var daywidth = (count + 7 - n) / 7;
      return Math.floor(daywidth);
    }
    /**
     * @param {number} length
     * @return {?}
     */
    function suffix(length) {
      /** @type {number} */
      var leftoverLength = length % 10;
      /** @type {number} */
      var remainder = length % 100;
      if (remainder >= 11 && remainder <= 13 || 0 === leftoverLength || leftoverLength >= 4) {
        return "th";
      }
      switch(leftoverLength) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
      }
    }
    /**
     * @param {!Object} date
     * @return {?}
     */
    function getTimestampToUtcOffsetFor(date) {
      return 6E4 * (date.getTimezoneOffset() || 0);
    }
    /**
     * @param {string} hasMs
     * @return {undefined}
     */
    function getTime(hasMs) {
      if ("undefined" != typeof console) {
        console.warn;
      }
    }
    var namespace;
    var _Locales = {
      de_DE : {
        days : ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shortDays : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        months : ["Januar", "Februar", "M\u00e4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        shortMonths : ["Jan", "Feb", "M\u00e4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d.%m.%Y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      en_CA : {
        days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        ordinalSuffixes : ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d/%m/%y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%r",
          x : "%D"
        }
      },
      en_US : {
        days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        ordinalSuffixes : ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%m/%d/%y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%r",
          x : "%D"
        }
      },
      es_MX : {
        days : ["domingo", "lunes", "martes", "mi\u00e9rcoles", "jueves", "viernes", "s\u00e1bado"],
        shortDays : ["dom", "lun", "mar", "mi\u00e9", "jue", "vie", "s\u00e1b"],
        months : ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", " diciembre"],
        shortMonths : ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d/%m/%Y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      fr_FR : {
        days : ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        shortDays : ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        months : ["janvier", "f\u00e9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\u00fbt", "septembre", "octobre", "novembre", "d\u00e9cembre"],
        shortMonths : ["janv.", "f\u00e9vr.", "mars", "avril", "mai", "juin", "juil.", "ao\u00fbt", "sept.", "oct.", "nov.", "d\u00e9c."],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d/%m/%Y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      it_IT : {
        days : ["domenica", "luned\u00ec", "marted\u00ec", "mercoled\u00ec", "gioved\u00ec", "venerd\u00ec", "sabato"],
        shortDays : ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
        months : ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
        shortMonths : ["pr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d/%m/%Y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      nl_NL : {
        days : ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
        shortDays : ["zo", "ma", "di", "wo", "do", "vr", "za"],
        months : ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        shortMonths : ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d-%m-%y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      pt_BR : {
        days : ["domingo", "segunda", "ter\u00e7a", "quarta", "quinta", "sexta", "s\u00e1bado"],
        shortDays : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\u00e1b"],
        months : ["janeiro", "fevereiro", "mar\u00e7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
        shortMonths : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d-%m-%Y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      ru_RU : {
        days : ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],
        shortDays : ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"],
        months : ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],
        shortMonths : ["\u044f\u043d\u0432", "\u0444\u0435\u0432", "\u043c\u0430\u0440", "\u0430\u043f\u0440", "\u043c\u0430\u0439", "\u0438\u044e\u043d", "\u0438\u044e\u043b", "\u0430\u0432\u0433", "\u0441\u0435\u043d", "\u043e\u043a\u0442", "\u043d\u043e\u044f", "\u0434\u0435\u043a"],
        AM : "AM",
        PM : "PM",
        am : "am",
        pm : "pm",
        formats : {
          c : "%a %d %b %Y %X",
          D : "%d.%m.%y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      tr_TR : {
        days : ["Pazar", "Pazartesi", "Sal\u0131", "\u00c7ar\u015famba", "Per\u015fembe", "Cuma", "Cumartesi"],
        shortDays : ["Paz", "Pzt", "Sal", "\u00c7r\u015f", "Pr\u015f", "Cum", "Cts"],
        months : ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\u00fcl", "Ekim", "Kas\u0131m", "Aral\u0131k"],
        shortMonths : ["Oca", "\u015eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011fu", "Eyl", "Eki", "Kas", "Ara"],
        AM : "\u00d6\u00d6",
        PM : "\u00d6S",
        am : "\u00d6\u00d6",
        pm : "\u00d6S",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d-%m-%Y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%T",
          x : "%D"
        }
      },
      zh_CN : {
        days : ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
        shortDays : ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
        months : ["\u4e00\u6708\u4efd", "\u4e8c\u6708\u4efd", "\u4e09\u6708\u4efd", "\u56db\u6708\u4efd", "\u4e94\u6708\u4efd", "\u516d\u6708\u4efd", "\u4e03\u6708\u4efd", "\u516b\u6708\u4efd", "\u4e5d\u6708\u4efd", "\u5341\u6708\u4efd", "\u5341\u4e00\u6708\u4efd", "\u5341\u4e8c\u6708\u4efd"],
        shortMonths : ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
        AM : "\u4e0a\u5348",
        PM : "\u4e0b\u5348",
        am : "\u4e0a\u5348",
        pm : "\u4e0b\u5348",
        formats : {
          c : "%a %d %b %Y %X %Z",
          D : "%d/%m/%y",
          F : "%Y-%m-%d",
          R : "%H:%M",
          r : "%I:%M:%S %p",
          T : "%H:%M:%S",
          v : "%e-%b-%Y",
          X : "%r",
          x : "%D"
        }
      }
    };
    var DefaultLocale = _Locales.en_US;
    var adaptedStrftime = new Strftime(DefaultLocale, 0, false);
    /** @type {boolean} */
    var isProto = void 0 !== mixin;
    if (isProto) {
      namespace = mixin.exports = adaptedStrftime;
    } else {
      namespace = function() {
        return this || (0, eval)("this");
      }();
      namespace.strftime = adaptedStrftime;
    }
    if ("function" != typeof Date.now) {
      /**
       * @return {number}
       */
      Date.now = function() {
        return +new Date;
      };
    }
  }();
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  /** @type {boolean} */
  mixin.exports = !__webpack_require__(9) && !__webpack_require__(16)(function() {
    return 7 != Object.defineProperty(__webpack_require__(26)("div"), "a", {
      get : function() {
        return 7;
      }
    }).a;
  });
}, function(canCreateDiscussions, exports, __webpack_require__) {
  exports.f = __webpack_require__(2);
}, function(mixin, canCreateDiscussions, require) {
  var fn = require(5);
  var coerce = require(12);
  var h = require(42)(false);
  var internalSymbol = require(31)("IE_PROTO");
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    var name;
    var source = coerce(target);
    /** @type {number} */
    var keyLength = 0;
    /** @type {!Array} */
    var u = [];
    for (name in source) {
      if (name != internalSymbol && fn(source, name)) {
        u.push(name);
      }
    }
    for (; key.length > keyLength;) {
      if (fn(source, name = key[keyLength++])) {
        if (!~h(u, name)) {
          u.push(name);
        }
      }
    }
    return u;
  };
}, function(module, canCreateDiscussions, kvFn) {
  var r = kvFn(15);
  /** @type {!Function} */
  module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(target) {
    return "String" == r(target) ? target.split("") : Object(target);
  };
}, function(mixin, canCreateDiscussions, require) {
  var serveRender = require(12);
  var getBytesWithUnit = require(29);
  var spawn = require(66);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return function(vm, undefined, resolvedBin) {
      var demoRID2;
      var obj = serveRender(vm);
      var params = getBytesWithUnit(obj.length);
      var parent = spawn(resolvedBin, params);
      if (target && undefined != undefined) {
        for (; params > parent;) {
          if ((demoRID2 = obj[parent++]) != demoRID2) {
            return true;
          }
        }
      } else {
        for (; params > parent; parent++) {
          if ((target || parent in obj) && obj[parent] === undefined) {
            return target || parent || 0;
          }
        }
      }
      return !target && -1;
    };
  };
}, function(mixin, canCreateDiscussions, require) {
  var extend = require(8);
  var sanitize = require(68);
  var keys = require(32);
  var tagname = require(31)("IE_PROTO");
  /**
   * @return {undefined}
   */
  var Type = function() {
  };
  /**
   * @return {?}
   */
  var createDict = function() {
    var iframeDocument;
    var iframe = require(26)("iframe");
    var i = keys.length;
    /** @type {string} */
    iframe.style.display = "none";
    require(44).appendChild(iframe);
    /** @type {string} */
    iframe.src = "javascript:";
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write("<script>document.F=Object\x3c/script>");
    iframeDocument.close();
    createDict = iframeDocument.F;
    for (; i--;) {
      delete createDict.prototype[keys[i]];
    }
    return createDict();
  };
  /** @type {function((Object|null), (Object|null)=): !Object} */
  mixin.exports = Object.create || function(value, key) {
    var tags;
    return null !== value ? (Type.prototype = extend(value), tags = new Type, Type.prototype = null, tags[tagname] = value) : tags = createDict(), void 0 === key ? tags : sanitize(tags, key);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var doc = __webpack_require__(3).document;
  mixin.exports = doc && doc.documentElement;
}, function(canCreateDiscussions, minF, n) {
  var c = n(40);
  var d = n(32).concat("length", "prototype");
  /** @type {function(!Object): !Array<string>} */
  minF.f = Object.getOwnPropertyNames || function(target) {
    return c(target, d);
  };
}, function(canCreateDiscussions, isSlidingUp, require) {
  var whenDOMReady = require(34);
  var test = {};
  /** @type {string} */
  test[require(2)("toStringTag")] = "z";
  if (test + "" != "[object z]") {
    require(13)(Object.prototype, "toString", function() {
      return "[object " + whenDOMReady(this) + "]";
    }, true);
  }
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var $at = __webpack_require__(72)(true);
  __webpack_require__(48)(String, "String", function(gameFolder) {
    /** @type {string} */
    this._t = gameFolder + "";
    /** @type {number} */
    this._i = 0;
  }, function() {
    var point;
    var O = this._t;
    var index = this._i;
    return index >= O.length ? {
      value : void 0,
      done : true
    } : (point = $at(O, index), this._i += point.length, {
      value : point,
      done : false
    });
  });
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var isArray = __webpack_require__(24);
  var $export = __webpack_require__(6);
  var _defineProperty = __webpack_require__(13);
  var hide = __webpack_require__(10);
  var has = __webpack_require__(5);
  var Iterators = __webpack_require__(21);
  var next = __webpack_require__(73);
  var setToStringTag = __webpack_require__(23);
  var getPrototypeOf = __webpack_require__(74);
  var ITERATOR = __webpack_require__(2)("iterator");
  /** @type {boolean} */
  var BUGGY = !([].keys && "next" in [].keys());
  /**
   * @return {?}
   */
  var returnThis = function() {
    return this;
  };
  /**
   * @param {!Object} target
   * @param {string} key
   * @param {!Function} data
   * @param {(Object|string)} value
   * @param {string} DEFAULT
   * @param {(!Function|boolean)} IS_SET
   * @param {?} FORCED
   * @return {?}
   */
  mixin.exports = function(target, key, data, value, DEFAULT, IS_SET, FORCED) {
    next(data, key, value);
    var methods;
    var name;
    var IteratorPrototype;
    /**
     * @param {string} kind
     * @return {?}
     */
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto) {
        return proto[kind];
      }
      switch(kind) {
        case "keys":
        case "values":
          return function() {
            return new data(this, kind);
          };
      }
      return function() {
        return new data(this, kind);
      };
    };
    /** @type {string} */
    var TAG = key + " Iterator";
    /** @type {boolean} */
    var DEF_VALUES = "values" == DEFAULT;
    /** @type {boolean} */
    var VALUES_BUG = false;
    var proto = target.prototype;
    var $native = proto[ITERATOR] || proto["@@iterator"] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0;
    var $anyNative = "Array" == key ? proto.entries || $native : $native;
    if ($anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new target))) !== Object.prototype && IteratorPrototype.next && (setToStringTag(IteratorPrototype, TAG, true), isArray || has(IteratorPrototype, ITERATOR) || hide(IteratorPrototype, ITERATOR, returnThis)), DEF_VALUES && $native && "values" !== $native.name && (VALUES_BUG = true, $default = function() {
      return $native.call(this);
    }), isArray && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), Iterators[key] = $default, Iterators[TAG] = returnThis, DEFAULT) {
      if (methods = {
        values : DEF_VALUES ? $default : getMethod("values"),
        keys : IS_SET ? $default : getMethod("keys"),
        entries : $entries
      }, FORCED) {
        for (name in methods) {
          if (!(name in proto)) {
            _defineProperty(proto, name, methods[name]);
          }
        }
      } else {
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), key, methods);
      }
    }
    return methods;
  };
}, function(canCreateDiscussions, isSlidingUp, require) {
  var mixinLifecycleFnMap = require(75);
  var calculateMinHeightOfElement = require(14);
  var setLifecycleMixinHandler = require(13);
  var global = require(3);
  var link = require(10);
  var Iterators = require(21);
  var Symbol = require(2);
  var key = Symbol("iterator");
  var secret = Symbol("toStringTag");
  var $default = Iterators.Array;
  var $this = {
    CSSRuleList : true,
    CSSStyleDeclaration : false,
    CSSValueList : false,
    ClientRectList : false,
    DOMRectList : false,
    DOMStringList : false,
    DOMTokenList : true,
    DataTransferItemList : false,
    FileList : false,
    HTMLAllCollection : false,
    HTMLCollection : false,
    HTMLFormElement : false,
    HTMLSelectElement : false,
    MediaList : true,
    MimeTypeArray : false,
    NamedNodeMap : false,
    NodeList : true,
    PaintRequestList : false,
    Plugin : false,
    PluginArray : false,
    SVGLengthList : false,
    SVGNumberList : false,
    SVGPathSegList : false,
    SVGPointList : false,
    SVGStringList : false,
    SVGTransformList : false,
    SourceBufferList : false,
    StyleSheetList : true,
    TextTrackCueList : false,
    TextTrackList : false,
    TouchList : false
  };
  var crossfilterable_layers = calculateMinHeightOfElement($this);
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; layer_i++) {
    var lifecycleFn;
    var NAME = crossfilterable_layers[layer_i];
    var img = $this[NAME];
    var Collection = global[NAME];
    var gl = Collection && Collection.prototype;
    if (gl && (gl[key] || link(gl, key, $default), gl[secret] || link(gl, secret, NAME), Iterators[NAME] = $default, img)) {
      for (lifecycleFn in mixinLifecycleFnMap) {
        if (!gl[lifecycleFn]) {
          setLifecycleMixinHandler(gl, lifecycleFn, mixinLifecycleFnMap[lifecycleFn], true);
        }
      }
    }
  }
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var UNSCOPABLES = __webpack_require__(2)("unscopables");
  var ArrayProto = Array.prototype;
  if (void 0 == ArrayProto[UNSCOPABLES]) {
    __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
  }
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  mixin.exports = function(target) {
    /** @type {boolean} */
    ArrayProto[UNSCOPABLES][target] = true;
  };
}, function(mixin, canCreateDiscussions, iter_f) {
  var next = iter_f(8);
  /**
   * @param {!Object} value
   * @param {string} key
   * @param {!Object} data
   * @param {(Object|string)} callback
   * @return {?}
   */
  mixin.exports = function(value, key, data, callback) {
    try {
      return callback ? key(next(data)[0], data[1]) : key(data);
    } catch (e) {
      var x = value.return;
      throw void 0 !== x && next(x.call(value)), e;
    }
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var Iterators = __webpack_require__(21);
  var i = __webpack_require__(2)("iterator");
  var array = Array.prototype;
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return void 0 !== target && (Iterators.Array === target || array[i] === target);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var classof = __webpack_require__(34);
  var ITERATOR = __webpack_require__(2)("iterator");
  var Iterators = __webpack_require__(21);
  /** @type {function(!Object): ?} */
  mixin.exports = __webpack_require__(4).getIteratorMethod = function(it) {
    if (void 0 != it) {
      return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
    }
  };
}, function(module, canCreateDiscussions, require) {
  var defer;
  var channel;
  var port;
  var ctx = require(19);
  var bindCallback = require(81);
  var html = require(44);
  var cel = require(26);
  var global = require(3);
  var process = global.process;
  var setTask = global.setImmediate;
  var clearTask = global.clearImmediate;
  var MessageChannel = global.MessageChannel;
  var util = global.Dispatch;
  /** @type {number} */
  var value = 0;
  var ref = {};
  /**
   * @return {undefined}
   */
  var fn = function() {
    /** @type {number} */
    var name = +this;
    if (ref.hasOwnProperty(name)) {
      var format = ref[name];
      delete ref[name];
      format();
    }
  };
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  var listner = function(event) {
    fn.call(event.data);
  };
  if (!(setTask && clearTask)) {
    /**
     * @param {!Object} fn
     * @return {?}
     */
    setTask = function(fn) {
      /** @type {!Array} */
      var callback = [];
      /** @type {number} */
      var i = 1;
      for (; arguments.length > i;) {
        callback.push(arguments[i++]);
      }
      return ref[++value] = function() {
        bindCallback("function" == typeof fn ? fn : Function(fn), callback);
      }, defer(value), value;
    };
    /**
     * @param {!Object} name
     * @return {undefined}
     */
    clearTask = function(name) {
      delete ref[name];
    };
    if ("process" == require(15)(process)) {
      /**
       * @param {number} id
       * @return {undefined}
       */
      defer = function(id) {
        process.nextTick(ctx(fn, id, 1));
      };
    } else {
      if (util && util.now) {
        /**
         * @param {number} id
         * @return {undefined}
         */
        defer = function(id) {
          util.now(ctx(fn, id, 1));
        };
      } else {
        if (MessageChannel) {
          channel = new MessageChannel;
          port = channel.port2;
          /** @type {function(!Object): undefined} */
          channel.port1.onmessage = listner;
          defer = ctx(port.postMessage, port, 1);
        } else {
          if (global.addEventListener && "function" == typeof postMessage && !global.importScripts) {
            /**
             * @param {string} id
             * @return {undefined}
             */
            defer = function(id) {
              global.postMessage(id + "", "*");
            };
            global.addEventListener("message", listner, false);
          } else {
            /** @type {function(number): undefined} */
            defer = "onreadystatechange" in cel("script") ? function(it) {
              /**
               * @return {undefined}
               */
              html.appendChild(cel("script")).onreadystatechange = function() {
                html.removeChild(this);
                fn.call(it);
              };
            } : function(id) {
              setTimeout(ctx(fn, id, 1), 0);
            };
          }
        }
      }
    }
  }
  module.exports = {
    set : setTask,
    clear : clearTask
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  /**
   * @param {!Function} C
   * @return {undefined}
   */
  function PromiseCapability(C) {
    var resolve;
    var reject;
    this.promise = new C(function(res, rj) {
      if (void 0 !== resolve || void 0 !== reject) {
        throw TypeError("Bad Promise constructor");
      }
      /** @type {string} */
      resolve = res;
      /** @type {string} */
      reject = rj;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
  }
  var aFunction = __webpack_require__(22);
  /**
   * @param {!Object} obj
   * @return {?}
   */
  module.exports.f = function(obj) {
    return new PromiseCapability(obj);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var g = __webpack_require__(2)("iterator");
  /** @type {boolean} */
  var value = false;
  try {
    var iterator = [7][g]();
    /**
     * @return {undefined}
     */
    iterator.return = function() {
      /** @type {boolean} */
      value = true;
    };
    Array.from(iterator, function() {
      throw 2;
    });
  } catch (t) {
  }
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    if (!key && !value) {
      return false;
    }
    /** @type {boolean} */
    var safe = false;
    try {
      /** @type {!Array} */
      var out = [7];
      var deletedChar = out[g]();
      /**
       * @return {?}
       */
      deletedChar.next = function() {
        return {
          done : safe = true
        };
      };
      /**
       * @return {?}
       */
      out[g] = function() {
        return deletedChar;
      };
      target(out);
    } catch (t) {
    }
    return safe;
  };
}, function(module, canCreateDiscussions) {
  var g;
  g = function() {
    return this;
  }();
  try {
    g = g || Function("return this")() || (0, eval)("this");
  } catch (t) {
    if ("object" == typeof window) {
      /** @type {!Window} */
      g = window;
    }
  }
  module.exports = g;
}, function(canCreateDiscussions, def, require) {
  /**
   * @param {!Function} obj
   * @param {!Object} options
   * @return {?}
   */
  function init(obj, options) {
    if (void 0 === options) {
      options = {};
    }
    options.name = options.name || obj._componentTag;
    var o = obj.prototype;
    Object.getOwnPropertyNames(o).forEach(function(name) {
      if ("constructor" !== name) {
        if (keys.indexOf(name) > -1) {
          return void(options[name] = o[name]);
        }
        /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
        var descriptor = Object.getOwnPropertyDescriptor(o, name);
        if ("function" == typeof descriptor.value) {
          /** @type {!Function} */
          (options.methods || (options.methods = {}))[name] = descriptor.value;
        } else {
          if (descriptor.get || descriptor.set) {
            (options.computed || (options.computed = {}))[name] = {
              get : descriptor.get,
              set : descriptor.set
            };
          }
        }
      }
    });
    (options.mixins || (options.mixins = [])).push({
      data : function() {
        return BaseAttributesCreatedUpdated.collectDataFromConstructor(this, obj);
      }
    });
    def.$decoratorQueue.forEach(function(callback) {
      return callback(options);
    });
    /** @type {!Array} */
    def.$decoratorQueue = [];
    /** @type {(Object|null)} */
    var association = Object.getPrototypeOf(obj.prototype);
    return (association instanceof BelongsTo ? association.constructor : BelongsTo).extend(options);
  }
  var BelongsTo = require(0);
  var BaseAttributesCreatedUpdated = require(107);
  /** @type {!Array} */
  var keys = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render"];
  /** @type {!Array} */
  def.$decoratorQueue = [];
  /** @type {function(!Function, !Object): ?} */
  def.componentFactory = init;
}, function($scope, canCreateDiscussions) {
  $scope.exports = {
    identifier : "tinypng.com",
    description : "TinyPNG and TinyJPG Photoshop Plugin",
    price : 50,
    platforms : {
      osx : {
        name : "macOS (OS X)",
        version : "2.4",
        file : "https://tinypng-com.s3.amazonaws.com/binaries/OSX/TinyPNG-JPG-v2.4.zip"
      },
      windows : {
        name : "Windows",
        version : "2.4",
        file : "https://tinypng-com.s3.amazonaws.com/binaries/Win/TinyPNG-JPG-v2.4.exe"
      }
    }
  };
}, function(canCreateDiscussions, a, __webpack_require__) {
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function rotate(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function o(name, a) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? name : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits$1(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} s
   * @param {string} t
   * @return {?}
   */
  function get(s, t) {
    if (!s) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? s : t;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} selector
   * @param {!Function} data
   * @return {undefined}
   */
  function assign(selector, data) {
    if (!(selector instanceof data)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} done
   * @param {string} o
   * @return {?}
   */
  function type(done, o) {
    if (!done) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !o || "object" != typeof o && "function" != typeof o ? done : o;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function i(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @return {undefined}
   */
  function IELazyFacade() {
  }
  /**
   * @param {!Object} listeners
   * @param {!Function} listener
   * @return {?}
   */
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    for (; i--;) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function alias(name) {
    return function() {
      return this[name].apply(this, arguments);
    };
  }
  /**
   * @param {!AudioNode} error
   * @param {!Function} t
   * @return {undefined}
   */
  function createServer(error, t) {
    if (!(error instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {?} model
   * @param {string} method
   * @param {string} next
   * @param {string} response
   * @return {?}
   */
  function request(model, method, next, response) {
    var options;
    var result;
    var m;
    var msg;
    return regeneratorRuntime.async(function(_context4) {
      for (;;) {
        switch(_context4.prev = _context4.next) {
          case 0:
            if (!model || !model.updating) {
              /** @type {number} */
              _context4.next = 3;
              break;
            }
            return _context4.next = 3, regeneratorRuntime.awrap(new Promise(function(offHandler) {
              model.once("update", offHandler);
            }));
          case 3:
            return options = Object.assign({
              method : method
            }, response ? {
              body : JSON.stringify(response)
            } : {}, opts), _context4.next = 6, regeneratorRuntime.awrap(window.fetch(next, options));
          case 6:
            if (result = _context4.sent, !result.ok) {
              /** @type {number} */
              _context4.next = 15;
              break;
            }
            if (204 != result.status) {
              /** @type {number} */
              _context4.next = 10;
              break;
            }
            return _context4.abrupt("return");
          case 10:
            return _context4.next = 12, regeneratorRuntime.awrap(result.json());
          case 12:
            return _context4.abrupt("return", _context4.sent);
          case 15:
            return _context4.next = 17, regeneratorRuntime.awrap(result.json().catch(function(canCreateDiscussions) {
              return {
                message : "Invalid server response"
              };
            }));
          case 17:
            throw m = _context4.sent, msg = m.message, Error(msg);
          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this);
  }
  /**
   * @param {!AudioNode} f
   * @param {!Function} text
   * @return {undefined}
   */
  function startsWith(f, text) {
    if (!(f instanceof text)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} index
   * @param {string} value
   * @return {?}
   */
  function definition(index, value) {
    if (!index) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? index : value;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function on(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {string} src
   * @param {?} command
   * @return {?}
   */
  function run(src, command) {
    var obj = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    /** @type {(Element|null)} */
    var data = document.querySelector(src);
    if (data) {
      var app = new command;
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var a = false;
      var s = void 0;
      try {
        var $__6;
        var _iterator3 = Object.entries(obj)[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = $__6.value;
          var preventQuestModal = _preventQuestModal(item, 2);
          var signedTransactionsCounter = preventQuestModal[0];
          var signedTxHex = preventQuestModal[1];
          app[signedTransactionsCounter] = signedTxHex;
        }
      } catch (seocounter_meta) {
        /** @type {boolean} */
        a = true;
        s = seocounter_meta;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (a) {
            throw s;
          }
        }
      }
      if ("BODY" == data.tagName) {
        app.$mount();
        document.body.appendChild(app.$el);
      } else {
        /** @type {boolean} */
        var _iteratorNormalCompletion3 = true;
        /** @type {boolean} */
        var y = false;
        var m = void 0;
        try {
          var $__6;
          var _iterator3 = Object.entries(data.dataset)[Symbol.iterator]();
          for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = $__6.value;
            var preventQuestModal = _preventQuestModal(item, 2);
            var signedTransactionsCounter = preventQuestModal[0];
            var signedTxHex = preventQuestModal[1];
            if (signedTxHex) {
              app[signedTransactionsCounter] = signedTxHex;
            }
          }
        } catch (Some_title_here_0xtest) {
          /** @type {boolean} */
          y = true;
          m = Some_title_here_0xtest;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (y) {
              throw m;
            }
          }
        }
        app.$mount(data);
      }
      return app;
    }
  }
  /**
   * @param {?} res
   * @param {!Function} callback
   * @return {?}
   */
  function go(res, callback) {
    return callback ? callback(res) : res;
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function isFunction(value) {
    return !(null === value || void 0 === value);
  }
  /**
   * @param {string} obj
   * @param {string} name
   * @param {!Function} fn
   * @return {?}
   */
  function callback(obj, name, fn) {
    return go(obj && isFunction(obj[name]) ? obj[name] : defaults[name], fn);
  }
  /**
   * @param {?} digit
   * @return {?}
   */
  function parseHex(digit) {
    return parseInt(digit, 16);
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function parseColor(s) {
    /** @type {string} */
    var m = (s + "").replace(/[^0-9a-f]/gi, "");
    return m.length < 6 && (m = m[0] + m[0] + m[1] + m[1] + m[2] + m[2]), {
      r : parseHex(m.substring(0, 2)),
      g : parseHex(m.substring(2, 4)),
      b : parseHex(m.substring(4, 6))
    };
  }
  /**
   * @param {string} stylesheet
   * @return {?}
   */
  function transform(stylesheet) {
    var result = callback(stylesheet, "origin", Object);
    return result.x = callback(result, "x", Number), result.y = callback(result, "y", Number), result;
  }
  /**
   * @param {!Object} canvas
   * @return {undefined}
   */
  function Game(canvas) {
    var ctx = canvas.getContext("2d");
    /** @type {number} */
    var downSampling = window.devicePixelRatio || 1;
    var upSampling = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    /** @type {number} */
    var scale = downSampling / upSampling;
    /** @type {number} */
    canvas.width = document.documentElement.clientWidth * scale;
    /** @type {number} */
    canvas.height = document.documentElement.clientHeight * scale;
    /** @type {string} */
    canvas.style.width = document.documentElement.clientWidth + "px";
    /** @type {string} */
    canvas.style.height = document.documentElement.clientHeight + "px";
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function createCanvas(value) {
    /** @type {!Element} */
    var canvas = document.createElement("canvas");
    return Game(canvas), canvas.style.position = "absolute", canvas.style.top = "0px", canvas.style.left = "0px", canvas.style.pointerEvents = "none", canvas.style.zIndex = value, canvas;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function template(options) {
    /** @type {number} */
    var e = options.angle * (Math.PI / 180);
    /** @type {number} */
    var w = options.spread * (Math.PI / 180);
    return {
      x : options.x,
      y : options.y,
      depth : .5 * Math.random() + .6,
      wobble : 10 * Math.random(),
      velocity : .5 * options.startVelocity + Math.random() * options.startVelocity,
      angle2D : -e + (.5 * w - Math.random() * w),
      tiltAngle : Math.random() * Math.PI,
      color : parseColor(options.color),
      tick : 0,
      totalTicks : options.ticks,
      decay : options.decay,
      random : Math.random() + 5,
      tiltSin : 0,
      tiltCos : 0,
      wobbleX : 0,
      wobbleY : 0
    };
  }
  /**
   * @param {!CanvasRenderingContext2D} ctx
   * @param {!Object} p
   * @return {?}
   */
  function init(ctx, p) {
    p.x += Math.cos(p.angle2D) * p.velocity;
    p.y += Math.sin(p.angle2D) * p.velocity + 5 * p.depth;
    p.wobble += .1;
    p.velocity *= p.decay;
    p.tiltAngle += .02 * Math.random() + .12;
    /** @type {number} */
    p.tiltSin = Math.sin(p.tiltAngle);
    /** @type {number} */
    p.tiltCos = Math.cos(p.tiltAngle);
    /** @type {number} */
    p.random = Math.random() + 4;
    p.wobbleX = p.x + 10 * Math.cos(p.wobble) * p.depth;
    p.wobbleY = p.y + 10 * Math.sin(p.wobble) * p.depth;
    /** @type {number} */
    var n = p.tick++ / p.totalTicks;
    var width = p.x + p.random * p.tiltCos;
    var y = p.y + p.random * p.tiltSin;
    var radius = p.wobbleX + p.random * p.tiltCos;
    var height = p.wobbleY + p.random * p.tiltSin;
    /** @type {string} */
    ctx.fillStyle = "rgba(" + p.color.r + ", " + p.color.g + ", " + p.color.b + ", " + (1 - n) + ")";
    ctx.beginPath();
    p.depth;
    return ctx.moveTo(Math.floor(p.x), Math.floor(p.y)), ctx.lineTo(Math.floor(p.wobbleX), Math.floor(y)), ctx.lineTo(Math.floor(radius), Math.floor(height)), ctx.lineTo(Math.floor(width), Math.floor(p.wobbleY)), ctx.closePath(), ctx.fill(), p.tick < p.totalTicks;
  }
  /**
   * @param {!Object} canvas
   * @param {!Array} handler
   * @param {!Function} x
   * @return {?}
   */
  function initialize(canvas, handler, x) {
    /**
     * @return {undefined}
     */
    function onInspectorMove() {
      /** @type {null} */
      width = height = null;
    }
    var col = handler.slice();
    var ctx = canvas.getContext("2d");
    /** @type {number} */
    var width = parseInt(canvas.style.width, 10);
    /** @type {number} */
    var height = parseInt(canvas.style.height, 10);
    ctx.save();
    ctx.scale(canvas.width / width, canvas.height / height);
    /** @type {!Promise} */
    var taskPromise = new Promise(function(boneTmpl) {
      /**
       * @return {undefined}
       */
      function render() {
        if (!(width || height)) {
          Game(canvas);
          /** @type {number} */
          width = parseInt(canvas.style.width, 10);
          /** @type {number} */
          height = parseInt(canvas.style.height, 10);
          ctx.restore();
          ctx.scale(canvas.width / width, canvas.height / height);
        }
        ctx.clearRect(0, 0, width, height);
        col = col.filter(function(tar) {
          return init(ctx, tar);
        });
        if (col.length) {
          createContainer(render);
        } else {
          window.removeEventListener("resize", onInspectorMove);
          x();
          boneTmpl();
        }
      }
      createContainer(render);
    });
    return window.addEventListener("resize", onInspectorMove, false), {
      addFettis : function(obj) {
        return col = col.concat(obj), taskPromise;
      },
      canvas : canvas,
      promise : taskPromise
    };
  }
  /**
   * @param {!Node} text
   * @param {string} obj
   * @return {?}
   */
  function render(text, obj) {
    var r = callback(obj, "particleCount", Math.floor);
    var ret = callback(obj, "angle", Number);
    var out = callback(obj, "spread", Number);
    var velocity = callback(obj, "startVelocity", Number);
    var value = callback(obj, "decay", Number);
    var color = callback(obj, "colors");
    var result = callback(obj, "ticks", Number);
    var val = callback(obj, "zIndex", Number);
    var p = transform(obj);
    var i = r;
    /** @type {!Array} */
    var res = [];
    var data = response ? response.canvas : createCanvas(val);
    var Longitude = p.x;
    var Latitude = p.y;
    for (; i--;) {
      res.push(template({
        x : Longitude,
        y : Latitude,
        angle : ret,
        spread : out,
        startVelocity : velocity,
        color : color[i % color.length],
        ticks : result,
        decay : value
      }));
    }
    return response ? response.addFettis(res) : (text.style.position = "relative", text.style.overflow = "hidden", text.appendChild(data), response = initialize(data, res, function() {
      /** @type {null} */
      response = null;
      text.removeChild(data);
    }), response.promise);
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function forEach(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} collection
   * @param {string} value
   * @return {?}
   */
  function bind(collection, value) {
    if (!collection) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? collection : value;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function set(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function update(name) {
    /** @type {!Element} */
    var div = document.createElement("iframe");
    return div.src = name, div.style.visibility = "hidden", div.style.display = "block", div.style.width = div.style.height = div.style.borderWidth = 0, document.body.appendChild(div), div;
  }
  /**
   * @param {number} number
   * @param {number} n
   * @return {?}
   */
  function expect(number, n) {
    var f = (number || 0).toFixed(n || 0);
    var end = f.indexOf(".");
    if (-1 === end) {
      end = f.length;
    }
    /** @type {number} */
    end = end - 3;
    for (; end > 0; end = end - 3) {
      /** @type {string} */
      f = f.substring(0, end) + "\u2009" + f.substring(end);
    }
    return f;
  }
  /**
   * @param {number} t
   * @return {?}
   */
  function parse(t) {
    var round = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (t) {
      /** @type {number} */
      var unit = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E / 3);
      var n = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"][unit];
      return (t / Math.pow(10, 3 * unit)).toFixed(unit ? round : 0) + " " + n + "B";
    }
  }
  /**
   * @param {number} opt_value
   * @return {?}
   */
  function xScale(opt_value) {
    return opt_value > 0 ? "+" + opt_value + "%" : "\u2212" + Math.abs(opt_value) + "%";
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function emit(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} array
   * @param {string} a
   * @return {?}
   */
  function r(array, a) {
    if (!array) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? array : a;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function merge(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} e
   * @param {!Function} t
   * @return {undefined}
   */
  function q(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} selector
   * @param {string} o
   * @return {?}
   */
  function isEmpty(selector, o) {
    if (!selector) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !o || "object" != typeof o && "function" != typeof o ? selector : o;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function setPrototypeOf(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} type
   * @param {!Function} left
   * @return {undefined}
   */
  function join(type, left) {
    if (!(type instanceof left)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} t
   * @param {string} r
   * @return {?}
   */
  function validate(t, r) {
    if (!t) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !r || "object" != typeof r && "function" != typeof r ? t : r;
  }
  /**
   * @param {!Object} object
   * @param {!Object} superClass
   * @return {undefined}
   */
  function createClass(object, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    object.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : object,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(object, superClass);
      } else {
        /** @type {!Object} */
        object.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} w
   * @param {!Function} t
   * @return {undefined}
   */
  function repeat(w, t) {
    if (!(w instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} event
   * @param {string} a
   * @return {?}
   */
  function format(event, a) {
    if (!event) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? event : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function define(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} a
   * @param {!Function} b
   * @return {undefined}
   */
  function all(a, b) {
    if (!(a instanceof b)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} dst
   * @param {string} a
   * @return {?}
   */
  function clone(dst, a) {
    if (!dst) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? dst : a;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function Set(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function reset(name, a) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? name : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function subclass(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function $(obj) {
    return new User(options, obj);
  }
  /**
   * @param {!AudioNode} service
   * @param {!Function} name
   * @return {undefined}
   */
  function _get(service, name) {
    if (!(service instanceof name)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} methodName
   * @param {string} value
   * @return {?}
   */
  function call(methodName, value) {
    if (!methodName) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? methodName : value;
  }
  /**
   * @param {!Object} self
   * @param {!Object} t
   * @return {undefined}
   */
  function compile(self, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    self.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : self,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(self, t);
      } else {
        /** @type {!Object} */
        self.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} decorators
   * @param {!Function} target
   * @return {undefined}
   */
  function DecorateConstructor(decorators, target) {
    if (!(decorators instanceof target)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function Class(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function map(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!AudioNode} view
   * @param {!Function} obj
   * @return {undefined}
   */
  function subscribe(view, obj) {
    if (!(view instanceof obj)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} s
   * @param {string} a
   * @return {?}
   */
  function pick(s, a) {
    if (!s) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? s : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function inherit(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} e
   * @param {!Function} t
   * @return {undefined}
   */
  function callService$1(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function show(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} f
   * @param {string} t
   * @return {?}
   */
  function traverse(f, t) {
    if (!f) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? f : t;
  }
  /**
   * @param {!Object} model
   * @param {!Object} t
   * @return {undefined}
   */
  function attach(model, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    model.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : model,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(model, t);
      } else {
        /** @type {!Object} */
        model.__proto__ = t;
      }
    }
  }
  /**
   * @param {string} filename
   * @param {string} ext
   * @return {?}
   */
  function testDownload(filename, ext) {
    return "//platform.twitter.com/widgets/tweet_button.html?size=l&url=https://tiny" + ext + ".com&text=" + encodeURIComponent(filename) + "&hashtags=" + extensionMapping[ext] + "&via=TinyPNG&count=none";
  }
  /**
   * @param {!Array} b
   * @return {?}
   */
  function t(b) {
    return b[Math.floor(Math.random() * b.length)];
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function setData(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} host
   * @param {string} a
   * @return {?}
   */
  function normalize(host, a) {
    if (!host) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? host : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function inheritPrototype(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} ast
   * @param {!Function} text
   * @return {undefined}
   */
  function text(ast, text) {
    if (!(ast instanceof text)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} vol
   * @param {string} t
   * @return {?}
   */
  function load(vol, t) {
    if (!vol) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? vol : t;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function f(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} error
   * @param {!Function} success
   * @return {undefined}
   */
  function completeCallback(error, success) {
    if (!(error instanceof success)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} s
   * @param {string} o
   * @return {?}
   */
  function destroy(s, o) {
    if (!s) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !o || "object" != typeof o && "function" != typeof o ? s : o;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function assert(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} fn
   * @param {!Function} id
   * @return {undefined}
   */
  function defer(fn, id) {
    if (!(fn instanceof id)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} m
   * @param {!Object} t
   * @return {undefined}
   */
  function Map(m, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    m.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : m,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(m, t);
      } else {
        /** @type {!Object} */
        m.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function write(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} dt
   * @param {string} a
   * @return {?}
   */
  function warn(dt, a) {
    if (!dt) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? dt : a;
  }
  /**
   * @param {!Object} object
   * @param {!Object} superClass
   * @return {undefined}
   */
  function setup(object, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    object.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : object,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(object, superClass);
      } else {
        /** @type {!Object} */
        object.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function C(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} value
   * @return {?}
   */
  function validateProperty(name, value) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? name : value;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function create(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} name
   * @param {!Function} args
   * @return {undefined}
   */
  function fire(name, args) {
    if (!(name instanceof args)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!AudioNode} service
   * @param {!Function} name
   * @return {undefined}
   */
  function check(service, name) {
    if (!(service instanceof name)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} left
   * @param {string} value
   * @return {?}
   */
  function process(left, value) {
    if (!left) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? left : value;
  }
  /**
   * @param {!Object} model
   * @param {!Object} t
   * @return {undefined}
   */
  function setState(model, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    model.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : model,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(model, t);
      } else {
        /** @type {!Object} */
        model.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function observe(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} type
   * @param {string} a
   * @return {?}
   */
  function handler(type, a) {
    if (!type) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? type : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function supportsSubclassing(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} m
   * @return {undefined}
   */
  function first(t, m) {
    if (!(t instanceof m)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} datapoint
   * @param {string} value
   * @return {?}
   */
  function setValue(datapoint, value) {
    if (!datapoint) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? datapoint : value;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} t
   * @return {undefined}
   */
  function promisify(obj, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    obj.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : obj,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(obj, t);
      } else {
        /** @type {!Object} */
        obj.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function lookup(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} text
   * @param {string} a
   * @return {?}
   */
  function debug(text, a) {
    if (!text) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? text : a;
  }
  /**
   * @param {!Object} model
   * @param {!Object} t
   * @return {undefined}
   */
  function query(model, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    model.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : model,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(model, t);
      } else {
        /** @type {!Object} */
        model.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} s
   * @param {!Function} n
   * @return {undefined}
   */
  function log(s, n) {
    if (!(s instanceof n)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} response
   * @param {string} t
   * @return {?}
   */
  function patch(response, t) {
    if (!response) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? response : t;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} t
   * @return {undefined}
   */
  function trigger(obj, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    obj.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : obj,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(obj, t);
      } else {
        /** @type {!Object} */
        obj.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function n(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} acc
   * @param {string} t
   * @return {?}
   */
  function walk(acc, t) {
    if (!acc) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? acc : t;
  }
  /**
   * @param {!Object} self
   * @param {!Object} t
   * @return {undefined}
   */
  function start(self, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    self.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : self,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(self, t);
      } else {
        /** @type {!Object} */
        self.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} that
   * @param {!Function} size
   * @return {undefined}
   */
  function allocUnsafe(that, size) {
    if (!(that instanceof size)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} str
   * @param {string} a
   * @return {?}
   */
  function encode(str, a) {
    if (!str) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? str : a;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} t
   * @return {undefined}
   */
  function add(obj, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    obj.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : obj,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(obj, t);
      } else {
        /** @type {!Object} */
        obj.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} w
   * @param {!Function} t
   * @return {undefined}
   */
  function value(w, t) {
    if (!(w instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} signal
   * @param {string} value
   * @return {?}
   */
  function test(signal, value) {
    if (!signal) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? signal : value;
  }
  /**
   * @param {!Object} a
   * @param {!Object} t
   * @return {undefined}
   */
  function has(a, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    a.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : a,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(a, t);
      } else {
        /** @type {!Object} */
        a.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} type
   * @param {!Function} value
   * @return {undefined}
   */
  function getDate(type, value) {
    if (!(type instanceof value)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} o
   * @param {string} t
   * @return {?}
   */
  function notEmpty(o, t) {
    if (!o) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? o : t;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function exports(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} error
   * @param {!Function} t
   * @return {undefined}
   */
  function error(error, t) {
    if (!(error instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} t
   * @param {string} fn
   * @return {?}
   */
  function method(t, fn) {
    if (!t) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !fn || "object" != typeof fn && "function" != typeof fn ? t : fn;
  }
  /**
   * @param {!Object} a
   * @param {!Object} t
   * @return {undefined}
   */
  function main(a, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    a.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : a,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(a, t);
      } else {
        /** @type {!Object} */
        a.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function push(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} op
   * @param {string} a
   * @return {?}
   */
  function fail(op, a) {
    if (!op) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? op : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function extend(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {undefined} target
   * @param {string} key
   * @param {!Array} property
   * @param {undefined} source
   * @param {boolean} context
   * @return {?}
   */
  function _applyDecoratedDescriptor(target, key, property, source, context) {
    var desc = {};
    return Object.keys(source).forEach(function(key) {
      desc[key] = source[key];
    }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, ("value" in desc || desc.initializer) && (desc.writable = true), desc = property.slice().reverse().reduce(function(descriptor, decorator) {
      return decorator(target, key, descriptor) || descriptor;
    }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, key, desc), desc = null), desc;
  }
  /**
   * @param {!AudioNode} target
   * @param {!Function} type
   * @return {undefined}
   */
  function mixin(target, type) {
    if (!(target instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} dir
   * @param {string} t
   * @return {?}
   */
  function cleanup(dir, t) {
    if (!dir) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? dir : t;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {string} res
   * @return {?}
   */
  function resolve(res) {
    return res ? res.includes("pro") ? "/web" : res.includes("ps") ? "/photoshop" : res.includes("api") ? "/developers" : "/invoices" : "";
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function prepend(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function apply(name, a) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? name : a;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function __extends(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} t
   * @param {!Function} e
   * @return {undefined}
   */
  function toString(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} o
   * @return {?}
   */
  function require(name, o) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !o || "object" != typeof o && "function" != typeof o ? name : o;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function restore(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} object
   * @param {!Function} type
   * @return {undefined}
   */
  function getFile(object, type) {
    if (!(object instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} text
   * @param {string} value
   * @return {?}
   */
  function writeFile(text, value) {
    if (!text) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !value || "object" != typeof value && "function" != typeof value ? text : value;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _extendableBuiltin(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function from(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} response
   * @param {string} t
   * @return {?}
   */
  function print(response, t) {
    if (!response) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? response : t;
  }
  /**
   * @param {!Object} self
   * @param {!Object} t
   * @return {undefined}
   */
  function loop(self, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    self.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : self,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(self, t);
      } else {
        /** @type {!Object} */
        self.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} request
   * @param {!Function} region
   * @return {undefined}
   */
  function signV4(request, region) {
    if (!(request instanceof region)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} selector
   * @param {string} o
   * @return {?}
   */
  function h(selector, o) {
    if (!selector) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !o || "object" != typeof o && "function" != typeof o ? selector : o;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function send(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} selector
   * @param {!Function} count
   * @return {undefined}
   */
  function it_should_find(selector, count) {
    if (!(selector instanceof count)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!AudioNode} actual
   * @param {!Function} expected
   * @return {undefined}
   */
  function TestError(actual, expected) {
    if (!(actual instanceof expected)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!AudioNode} text
   * @param {!Function} comment
   * @return {undefined}
   */
  function append(text, comment) {
    if (!(text instanceof comment)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {?} h
   * @return {?}
   */
  function display(h) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    var itemData = e.split(" ");
    var reverseItemData = exec(itemData, 2);
    var reverseItemControlData = reverseItemData[0];
    var opt_pathToBitJS = reverseItemData[1];
    return h("p", null, [reverseItemControlData || 0, h("span", null, [" ", opt_pathToBitJS || ""])]);
  }
  /**
   * @param {!AudioNode} n
   * @param {!Function} e
   * @return {undefined}
   */
  function indexOf(n, e) {
    if (!(n instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function deprecate(name, a) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? name : a;
  }
  /**
   * @param {!Object} object
   * @param {!Object} superClass
   * @return {undefined}
   */
  function constructor(object, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    object.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : object,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(object, superClass);
      } else {
        /** @type {!Object} */
        object.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {!AudioNode} p
   * @param {!Function} i
   * @return {undefined}
   */
  function eq(p, i) {
    if (!(p instanceof i)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} s
   * @param {string} t
   * @return {?}
   */
  function result(s, t) {
    if (!s) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !t || "object" != typeof t && "function" != typeof t ? s : t;
  }
  /**
   * @param {!Object} item
   * @param {!Object} t
   * @return {undefined}
   */
  function wrapConstructor(item, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    item.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : item,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(item, t);
      } else {
        /** @type {!Object} */
        item.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} arg
   * @param {!Function} context
   * @return {undefined}
   */
  function coerce(arg, context) {
    if (!(arg instanceof context)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} name
   * @param {string} a
   * @return {?}
   */
  function tail(name, a) {
    if (!name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !a || "object" != typeof a && "function" != typeof a ? name : a;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} t
   * @return {undefined}
   */
  function wrap(obj, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    obj.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : obj,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(obj, t);
      } else {
        /** @type {!Object} */
        obj.__proto__ = t;
      }
    }
  }
  Object.defineProperty(a, "__esModule", {
    value : true
  });
  var data = (__webpack_require__(61), __webpack_require__(71), __webpack_require__(87), __webpack_require__(90), __webpack_require__(92), __webpack_require__(97), __webpack_require__(100), __webpack_require__(103), __webpack_require__(104), __webpack_require__(105), __webpack_require__(106));
  var __WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__ = __webpack_require__(0);
  var instance = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foundation_util_mediaQuery__);
  Object(data.polyfill)();
  /** @type {boolean} */
  instance.a.config.silent = true;
  /** @type {!Array} */
  instance.a.config.ignoredElements = ["modal"];
  var x;
  var y;
  var rn;
  var connect_sqlite3;
  var an;
  var defaultModule;
  var __WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__ = __webpack_require__(1);
  var $compile = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__);
  var PacChooser = (x = $compile()({
    props : ["session"]
  }))(y = function(_Renderer) {
    /**
     * @return {?}
     */
    function e() {
      var num;
      var a;
      var b;
      rotate(this, e);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return num = a = o(this, _Renderer.call.apply(_Renderer, [this].concat(args))), a.mail = "", a.pending = false, a.success = false, a.error = null, b = num, o(a, b);
    }
    return _inherits$1(e, _Renderer), e.prototype.render = function(createElement) {
      var a = this;
      return createElement("form", {
        on : {
          submit : this.submit
        },
        class : "loginform"
      }, [createElement("input", {
        attrs : {
          name : "mail",
          type : "email",
          placeholder : "Your mail address"
        },
        on : {
          input : function(target) {
            a.mail = target.target.value;
          }
        }
      }, []), this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : createElement("p", null, ["We will send you a link by mail that will sign you in instantly!"]), createElement("button", {
        attrs : {
          disabled : !this.mail.match(/.@./) || this.success
        },
        class : {
          success : this.success,
          developers : !this.success && this.mail.match(/.@./)
        }
      }, [createElement("p", null, [" ", this.success ? "Link sent" : "Send link", " "]), this.pending ? createElement("span", {
        class : "spinner"
      }, [createElement("span", {
        class : "circle"
      }, [])]) : this.success ? createElement("span", {
        class : "success"
      }, [createElement("span", {
        class : "checkfirst"
      }, [createElement("span", {
        class : "firstsuccess"
      }, []), createElement("span", {
        class : "checklast"
      }, [createElement("span", {
        class : "lastsuccess"
      }, [])])])]) : void 0])]);
    }, e.prototype.submit = function(target) {
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return this.pending = true, target.preventDefault(), self.prev = 2, self.next = 5, regeneratorRuntime.awrap(this.session.create(this.mail));
            case 5:
              /** @type {boolean} */
              this.success = true;
              /** @type {null} */
              this.error = null;
              /** @type {number} */
              self.next = 12;
              break;
            case 9:
              /** @type {number} */
              self.prev = 9;
              self.t0 = self.catch(2);
              this.error = self.t0.message;
            case 12:
              /** @type {boolean} */
              this.pending = false;
            case 13:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[2, 9]]);
    }, e;
  }(instance.a)) || y;
  var install = (rn = $compile()({
    props : ["session"]
  }))(connect_sqlite3 = function(callback) {
    /**
     * @return {?}
     */
    function Store() {
      var c;
      var s;
      var e;
      classCallCheck(this, Store);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return c = s = get(this, callback.call.apply(callback, [this].concat(args))), s.authenticated = false, s.expanded = false, s.pending = false, s.success = false, s.error = null, e = c, get(s, e);
    }
    return inherits(Store, callback), Store.prototype.mounted = function() {
      document.addEventListener("click", this.documentClick, true);
    }, Store.prototype.destroyed = function() {
      document.removeEventListener("click", this.documentClick, true);
    }, Store.prototype.documentClick = function(e) {
      if (this.expanded && !this.$el.contains(e.target)) {
        /** @type {boolean} */
        this.expanded = false;
      }
    }, Store.prototype.render = function(createElement) {
      var categoriesTreeElement = this;
      return this.session.updating ? void 0 : this.session.authenticated ? createElement("li", {
        class : "login"
      }, [createElement("a", {
        class : {
          active : this.expanded,
          pro : this.session.products.includes("pro")
        },
        on : {
          click : function() {
            /** @type {boolean} */
            categoriesTreeElement.expanded = !categoriesTreeElement.expanded;
          }
        }
      }, [createElement("span", {
        class : "hide-small"
      }, [this.session.name || "ACCOUNT"]), createElement("span", {
        class : "show-small"
      }, ["ACCOUNT"])]), createElement("transition", {
        attrs : {
          name : "fade"
        }
      }, [this.expanded ? createElement("div", {
        class : "dropdown loggedin"
      }, [this.session.restricted ? void 0 : createElement("a", {
        attrs : {
          href : "/dashboard"
        }
      }, ["Account page"]), createElement("a", {
        attrs : {
          href : ""
        },
        on : {
          click : this.logout
        }
      }, ["Logout"])]) : void 0])]) : createElement("li", {
        class : "login"
      }, [createElement("a", {
        class : {
          active : this.expanded
        },
        on : {
          click : function() {
            /** @type {boolean} */
            categoriesTreeElement.expanded = !categoriesTreeElement.expanded;
          }
        }
      }, ["LOGIN"]), createElement("transition", {
        attrs : {
          name : "fade"
        }
      }, [this.expanded ? createElement("div", {
        class : "dropdown"
      }, [createElement(PacChooser, {
        attrs : {
          session : this.session
        }
      }, [])]) : void 0])]);
    }, Store.prototype.logout = function(event) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return event.preventDefault(), this.expanded = false, context$5$0.next = 4, regeneratorRuntime.awrap(this.session.destroy());
            case 4:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, Store;
  }(instance.a)) || connect_sqlite3;
  var fn = (an = $compile()({
    props : ["session"]
  }))(defaultModule = function(f) {
    /**
     * @return {?}
     */
    function m() {
      var id;
      var name;
      var props;
      assign(this, m);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return id = name = type(this, f.call.apply(f, [this].concat(args))), name.mounted = false, props = id, type(name, props);
    }
    return i(m, f), m.prototype.mounted = function() {
      /** @type {boolean} */
      this.mounted = true;
    }, m.prototype.render = function(h) {
      if (!this.mounted || !this.session || !this.session.authenticated) {
        return h("a", {
          class : "block pro light",
          attrs : {
            href : "#",
            "data-home-probanner" : true
          }
        }, [h("h2", null, ["Introducing ", h("strong", null, ["TinyPNG\u00a0Pro"])]), h("p", null, ["Drag and drop all your files at once and have the 5 MB limit removed!"])]);
      }
    }, m;
  }(instance.a)) || defaultModule;
  /** @type {function((!Function|string)): ?} */
  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(context) {
    return typeof context;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var proto = IELazyFacade.prototype;
  /**
   * @param {?} target
   * @return {?}
   */
  proto.getListeners = function(target) {
    var result;
    var name;
    var properties = this._getEvents();
    if ("object" === (void 0 === target ? "undefined" : _typeof(target))) {
      result = {};
      for (name in properties) {
        if (properties.hasOwnProperty(name) && target.test(name)) {
          result[name] = properties[name];
        }
      }
    } else {
      result = properties[target] || (properties[target] = []);
    }
    return result;
  };
  /**
   * @param {!Array} listeners
   * @return {?}
   */
  proto.flattenListeners = function(listeners) {
    var i;
    /** @type {!Array} */
    var flatListeners = [];
    /** @type {number} */
    i = 0;
    for (; i < listeners.length; i = i + 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.getListenersAsObject = function(evt) {
    var response;
    var listeners = this.getListeners(evt);
    return listeners instanceof Array && (response = {}, response[evt] = listeners), response || listeners;
  };
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.addListener = function(evt, listener) {
    var key;
    var listeners = this.getListenersAsObject(evt);
    /** @type {boolean} */
    var listenerIsWrapped = "object" === (void 0 === listener ? "undefined" : _typeof(listener));
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && -1 === indexOfListener(listeners[key], listener)) {
        listeners[key].push(listenerIsWrapped ? listener : {
          listener : listener,
          once : false
        });
      }
    }
    return this;
  };
  proto.on = alias("addListener");
  /**
   * @param {string} evt
   * @param {!Object} listener
   * @return {?}
   */
  proto.addOnceListener = function(evt, listener) {
    return this.addListener(evt, {
      listener : listener,
      once : true
    });
  };
  proto.once = alias("addOnceListener");
  /**
   * @param {?} evt
   * @return {?}
   */
  proto.defineEvent = function(evt) {
    return this.getListeners(evt), this;
  };
  /**
   * @param {!NodeList} evts
   * @return {?}
   */
  proto.defineEvents = function(evts) {
    /** @type {number} */
    var i = 0;
    for (; i < evts.length; i = i + 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  /**
   * @param {string} evt
   * @param {!Function} listener
   * @return {?}
   */
  proto.removeListener = function(evt, listener) {
    var index;
    var key;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && -1 !== (index = indexOfListener(listeners[key], listener))) {
        listeners[key].splice(index, 1);
      }
    }
    return this;
  };
  proto.off = alias("removeListener");
  /**
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.addListeners = function(evt, listeners) {
    return this.manipulateListeners(false, evt, listeners);
  };
  /**
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.removeListeners = function(evt, listeners) {
    return this.manipulateListeners(true, evt, listeners);
  };
  /**
   * @param {boolean} remove
   * @param {!Array} evt
   * @param {!Object} listeners
   * @return {?}
   */
  proto.manipulateListeners = function(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if ("object" !== (void 0 === evt ? "undefined" : _typeof(evt)) || evt instanceof RegExp) {
      i = listeners.length;
      for (; i--;) {
        single.call(this, evt, listeners[i]);
      }
    } else {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          if ("function" == typeof value) {
            single.call(this, i, value);
          } else {
            multiple.call(this, i, value);
          }
        }
      }
    }
    return this;
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.removeEvent = function(value) {
    var key;
    var type = void 0 === value ? "undefined" : _typeof(value);
    var events = this._getEvents();
    if ("string" === type) {
      delete events[value];
    } else {
      if ("object" === type) {
        for (key in events) {
          if (events.hasOwnProperty(key) && value.test(key)) {
            delete events[key];
          }
        }
      } else {
        delete this._events;
      }
    }
    return this;
  };
  /**
   * @param {string} evt
   * @param {number} args
   * @return {?}
   */
  proto.emitEvent = function(evt, args) {
    var listener;
    var i;
    var key;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;
        for (; i--;) {
          listener = listeners[key][i];
          if (true === listener.once) {
            this.removeListener(evt, listener.listener);
          }
          if (listener.listener.apply(this, args || []) === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias("emitEvent");
  /**
   * @param {string} eventName
   * @return {?}
   */
  proto.emit = function(eventName) {
    /** @type {!Array<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(eventName, args);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.setOnceReturnValue = function(value) {
    return this._onceReturnValue = value, this;
  };
  /**
   * @return {?}
   */
  proto._getOnceReturnValue = function() {
    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  };
  /**
   * @return {?}
   */
  proto._getEvents = function() {
    return this._events || (this._events = {});
  };
  var opts = {
    credentials : "same-origin",
    headers : {
      Accept : "application/json",
      "Content-Type" : "application/json",
      "Cache-Control" : "no-cache"
    }
  };
  var User = function() {
    /**
     * @param {!Object} id
     * @param {string} url
     * @return {undefined}
     */
    function http(id, url) {
      createServer(this, http);
      /** @type {!Object} */
      this.session = id;
      /** @type {string} */
      this.url = "/web/" + url;
    }
    return http.prototype.get = function(name) {
      /** @type {string} */
      var newDocument = [this.url, name].filter(function(lookupSoFar) {
        return lookupSoFar;
      }).join("/");
      return request(this.session, "GET", newDocument, null);
    }, http.prototype.post = function(data) {
      return request(this.session, "POST", this.url, data);
    }, http.prototype.put = function(data) {
      return request(this.session, "PUT", this.url, data);
    }, http.prototype.patch = function(err, data) {
      /** @type {string} */
      var newDocument = [this.url, err].filter(function(res) {
        return res;
      }).join("/");
      return request(this.session, "PATCH", newDocument, data);
    }, http.prototype.delete = function(name) {
      /** @type {string} */
      var newDocument = [this.url, name].filter(function(result) {
        return result;
      }).join("/");
      return request(this.session, "DELETE", newDocument, null);
    }, http;
  }();
  var getMenu = function() {
    /**
     * @param {!Object} options
     * @param {number} index
     * @return {?}
     */
    function flattenElements(options, index) {
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var o = false;
      var i = void 0;
      try {
        var info;
        var _iterator3 = options[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (info = _iterator3.next()).done) && (result.push(info.value), !index || result.length !== index); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return result;
    }
    return function(arr, options) {
      if (Array.isArray(arr)) {
        return arr;
      }
      if (Symbol.iterator in Object(arr)) {
        return flattenElements(arr, options);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var user = new User(null, "session");
  var FullContactCardOptions = function(name) {
    /**
     * @return {?}
     */
    function init() {
      startsWith(this, init);
      var self = definition(this, name.call(this));
      if (self.authenticated = false, self.updating = false, "undefined" != typeof window) {
        /** @type {(Storage|null)} */
        self.storage = window.localStorage;
        /** @type {!Array<string>} */
        var id = window.location.hash.split("token/");
        var element = getMenu(id, 2);
        var i = (element[0], element[1]);
        if (i) {
          window.history.replaceState({}, "", window.location.pathname);
          self.update(i);
        } else {
          self.read();
          if (self.authenticated) {
            self.update();
          }
        }
      }
      return self;
    }
    return on(init, name), init.prototype.create = function(target) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(user.post({
                mail : target,
                url : window.location.pathname
              }));
            case 2:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, init.prototype.update = function(target) {
      var result;
      var value;
      var moduleName;
      var file;
      var resumePath;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return this.updating = true, self.prev = 1, self.next = 4, regeneratorRuntime.awrap(target ? user.patch(null, {
                token : target
              }) : user.get());
            case 4:
              result = self.sent;
              value = result.products;
              moduleName = result.fullName;
              file = result.mail;
              resumePath = result.restricted;
              this.storage.clear();
              this.storage.setItem("authenticated", "1");
              this.storage.setItem("mail", file.trim());
              this.storage.setItem("name", moduleName.trim());
              this.storage.setItem("products", JSON.stringify(value));
              this.storage.setItem("restricted", resumePath);
              this.read();
              /** @type {number} */
              self.next = 21;
              break;
            case 18:
              /** @type {number} */
              self.prev = 18;
              self.t0 = self.catch(1);
              this.storage.clear();
            case 21:
              /** @type {boolean} */
              this.updating = false;
              this.emit("update");
            case 23:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[1, 18]]);
    }, init.prototype.clear = function() {
      this.storage.clear();
      /** @type {boolean} */
      this.authenticated = false;
      /** @type {null} */
      this.mail = null;
      /** @type {null} */
      this.name = null;
      /** @type {!Array} */
      this.products = [];
      /** @type {boolean} */
      this.restricted = false;
    }, init.prototype.destroy = function() {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(user.delete());
            case 2:
              this.clear();
              this.emit("destroy");
            case 4:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, init.prototype.read = function() {
      try {
        /** @type {boolean} */
        this.authenticated = "1" == this.storage.getItem("authenticated");
        this.mail = this.storage.getItem("mail");
        this.name = this.storage.getItem("name");
        /** @type {*} */
        this.products = JSON.parse(this.storage.getItem("products"));
        /** @type {boolean} */
        this.restricted = "true" === this.storage.getItem("restricted");
      } catch (t) {
        /** @type {boolean} */
        this.authenticated = false;
        /** @type {!Array} */
        this.products = [];
      }
    }, init;
  }(IELazyFacade);
  var options = new FullContactCardOptions;
  var _preventQuestModal = function() {
    /**
     * @param {!Object} options
     * @param {number} index
     * @return {?}
     */
    function flattenElements(options, index) {
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var o = false;
      var i = void 0;
      try {
        var info;
        var _iterator3 = options[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (info = _iterator3.next()).done) && (result.push(info.value), !index || result.length !== index); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return result;
    }
    return function(arr, options) {
      if (Array.isArray(arr)) {
        return arr;
      }
      if (Symbol.iterator in Object(arr)) {
        return flattenElements(arr, options);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  run("[data-login]", install, {
    session : options
  });
  run("[data-home-probanner]", fn, {
    session : options
  });
  var _n;
  var defaultValue;
  var kn;
  var _Event_prototype;
  var scope;
  var En;
  var Sn;
  var Tn;
  var An;
  var Cn;
  var bottom;
  var Dn;
  var Rn;
  var zn;
  var In;
  var Ln;
  var defaultForm;
  var None;
  var qn;
  var noop;
  var Yn;
  var resizedImage;
  var Un;
  var appKey;
  var createContainer = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1E3 / 60);
  };
  var defaults = {
    particleCount : 50,
    angle : 90,
    spread : 100,
    startVelocity : 25,
    decay : .9,
    ticks : 500,
    zIndex : 100,
    colors : ["#5BC0EB", "#2176AE", "#FDE74C", "#9BC53D", "#E55934", "#FA7921", "#FF4242"]
  };
  var response = void 0;
  /**
   * @param {!Event} event
   * @return {?}
   */
  var onKeyDown = function(event) {
    return event.preventDefault();
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  var close = function(event) {
    return event.stopPropagation();
  };
  var action = (_n = $compile()({
    props : ["queue"]
  }))(defaultValue = function(target) {
    /**
     * @return {?}
     */
    function self() {
      var item;
      var value;
      var event;
      forEach(this, self);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return item = value = bind(this, target.call.apply(target, [this].concat(args))), value.hover = false, event = item, bind(value, event);
    }
    return set(self, target), self.prototype.mounted = function() {
      document.addEventListener("drop", this.uploadDropped);
      document.addEventListener("dragover", onKeyDown);
      document.addEventListener("dragleave", onKeyDown);
      document.addEventListener("dragend", onKeyDown);
    }, self.prototype.destroyed = function() {
      document.removeEventListener("drop", this.uploadDropped);
      document.removeEventListener("dragover", onKeyDown);
      document.removeEventListener("dragleave", onKeyDown);
      document.removeEventListener("dragend", onKeyDown);
    }, self.prototype.render = function(createElement) {
      var $txRows = this;
      return createElement("section", {
        on : {
          click : this.select,
          drop : function() {
            /** @type {boolean} */
            $txRows.hover = false;
          },
          dragover : function() {
            /** @type {boolean} */
            $txRows.hover = true;
          },
          dragleave : function() {
            /** @type {boolean} */
            $txRows.hover = false;
          }
        },
        class : {
          target : true,
          active : this.hover
        }
      }, [createElement("figure", {
        class : "icon"
      }, []), createElement("p", null, ["Drop your .png or .jpg files here!"]), createElement("p", null, [createElement("small", null, [this.queue.fileLimit ? "Up to " + this.queue.fileLimit : "Any number of", " images,", this.queue.sizeLimit ? " max " + this.queue.sizeLimit / 1024 / 1024 + " MB each" : " no size limit", "."])]), createElement("input", {
        attrs : {
          type : "file",
          multiple : true
        },
        ref : "input",
        on : {
          click : close,
          change : this.uploadSelected
        }
      }, [])]);
    }, self.prototype.select = function(ast) {
      this.$refs.input.click();
    }, self.prototype.uploadSelected = function(obj) {
      this.uploadFiles(obj.target.files);
      /** @type {(Element|null)} */
      var key = document.querySelector("header");
      /** @type {(Element|null)} */
      var target = document.querySelector("header section.target");
      if (key && target) {
        /** @type {!ClientRect} */
        var bboxClient = target.getBoundingClientRect();
        render(key, {
          origin : {
            x : (bboxClient.left + bboxClient.right) / 2 + window.scrollX,
            y : (bboxClient.top + bboxClient.bottom) / 2 + window.scrollY
          }
        });
      }
    }, self.prototype.uploadDropped = function(event) {
      event.preventDefault();
      /** @type {boolean} */
      this.hover = false;
      var files = event.dataTransfer.files;
      var winRef = event.dataTransfer.getData("URL");
      var inputWin = void 0;
      if (files.length) {
        this.uploadFiles(files);
      } else {
        if (winRef) {
          try {
            inputWin = this.findImage(event.dataTransfer.getData("text/html"));
          } catch (t) {
          }
          this.uploadUrl(inputWin || winRef);
        }
      }
      /** @type {(Element|null)} */
      var h = document.querySelector("header");
      if (h) {
        render(h, {
          origin : {
            x : event.pageX,
            y : event.pageY
          }
        });
      }
    }, self.prototype.uploadFiles = function(data) {
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var n = false;
      var r = void 0;
      try {
        var $__6;
        var _iterator3 = Array.from(data)[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = $__6.value;
          this.queue.push(item);
        }
      } catch (G__20648) {
        /** @type {boolean} */
        n = true;
        r = G__20648;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (n) {
            throw r;
          }
        }
      }
    }, self.prototype.uploadUrl = function(url) {
      this.queue.push(url);
    }, self.prototype.findImage = function(value) {
      /** @type {(Document|null)} */
      var html = (new DOMParser).parseFromString(value, "text/html");
      /** @type {(Element|null)} */
      var img = html.querySelector("img");
      return img && img.src;
    }, self;
  }(instance.a)) || defaultValue;
  var SlidesPicker = (kn = $compile()({
    props : ["request"]
  }))(_Event_prototype = function(t) {
    /**
     * @return {?}
     */
    function e() {
      var a;
      var d;
      var args;
      emit(this, e);
      /** @type {number} */
      var i = arguments.length;
      /** @type {!Array} */
      var f = Array(i);
      /** @type {number} */
      var k = 0;
      for (; k < i; k++) {
        f[k] = arguments[k];
      }
      return a = d = r(this, t.call.apply(t, [this].concat(f))), d.downloaded = false, args = a, r(d, args);
    }
    return merge(e, t), e.prototype.render = function(h) {
      var rootComponent = this;
      return h("li", {
        class : "upload"
      }, [h("div", {
        class : "before"
      }, [h("span", {
        class : "size"
      }, [parse(this.request.bytesIn)]), this.request.name || "&nbsp;"]), h("div", {
        class : ["progress", this.request.status]
      }, [h("div", {
        class : "bar",
        style : {
          width : this.request.progress + "%"
        }
      }, [this.request.message])]), "success" == this.request.status ? h("div", {
        class : "after"
      }, [h("span", {
        class : "size"
      }, [parse(this.request.bytesOut)]), h("a", {
        attrs : {
          href : this.request.url
        },
        on : {
          click : this.download
        },
        class : {
          downloaded : this.downloaded
        }
      }, ["download"]), h("span", {
        class : "saved"
      }, [xScale(this.request.percentage)])]) : "limited" == this.request.status ? h("div", {
        class : "after"
      }, ["Optimize now? ", h("a", {
        on : {
          click : function() {
            rootComponent.$emit("click-pro");
          }
        }
      }, ["Go Pro!"])]) : void 0]);
    }, e.prototype.download = function(event) {
      event.preventDefault();
      /** @type {boolean} */
      this.downloaded = true;
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        window.open(event.target.href);
      } else {
        update(event.target.href);
      }
    }, e;
  }(instance.a)) || _Event_prototype;
  var root = $compile()(scope = function(proxy) {
    /**
     * @return {?}
     */
    function f() {
      var origResult;
      var result;
      var allTypes;
      q(this, f);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return origResult = result = isEmpty(this, proxy.call.apply(proxy, [this].concat(args))), result.quantity = 1, allTypes = origResult, isEmpty(result, allTypes);
    }
    return setPrototypeOf(f, proxy), f.prototype.render = function(createElement) {
      var ele = this;
      return createElement("span", {
        class : "quantity"
      }, [createElement("input", {
        attrs : {
          type : "number",
          name : "copies",
          id : "copies",
          maxlength : "3",
          autocomplete : "off",
          tabindex : "1",
          pattern : "[0-9]*"
        },
        domProps : {
          value : this.quantity
        },
        on : {
          input : function(target) {
            ele.update(target.target.value);
          },
          blur : function(event) {
            event.target.value = ele.quantity;
          }
        }
      }, []), createElement("span", {
        class : "controls"
      }, [createElement("a", {
        class : "up",
        on : {
          click : this.increment
        }
      }, [createElement("span", null, [])]), createElement("a", {
        class : "down",
        on : {
          click : this.decrement
        }
      }, [createElement("span", null, [])])]), createElement("label", {
        attrs : {
          for : "copies"
        }
      }, [this.$slots.default])]);
    }, f.prototype.update = function(target) {
      /** @type {number} */
      this.quantity = Math.max(1, target);
      this.$emit("change", this.quantity);
    }, f.prototype.increment = function(b) {
      this.update(this.quantity + 1);
    }, f.prototype.decrement = function(instance) {
      this.update(this.quantity - 1);
    }, f;
  }(instance.a)) || scope;
  var lastVnode = (En = $compile()({
    props : ["session"]
  }))(Sn = function(original) {
    /**
     * @return {?}
     */
    function m() {
      var j;
      var result;
      var min;
      join(this, m);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return j = result = validate(this, original.call.apply(original, [this].concat(args))), result.details = {}, min = j, validate(result, min);
    }
    return createClass(m, original), m.prototype.mounted = function() {
      if (this.session) {
        this.details = {
          fullName : this.session.name,
          mail : this.session.mail
        };
        this.$emit("change", this.details);
      }
    }, m.prototype.render = function(h) {
      return h("div", {
        class : "personalinfo"
      }, [h("p", {
        class : "smartlayout"
      }, [h("input", {
        attrs : {
          type : "text",
          name : "fullName",
          id : "fullName",
          autocomplete : "name",
          tabindex : "2",
          placeholder : " Name ",
          required : true
        },
        class : "fullname",
        domProps : {
          value : this.details.fullName
        },
        on : {
          input : this.input
        }
      }, []), h("label", {
        attrs : {
          for : "fullName"
        }
      }, ["Name"])]), h("p", {
        class : "smartlayout"
      }, [h("input", {
        attrs : {
          type : "email",
          name : "mail",
          id : "mail",
          autocomplete : "email",
          placeholder : " Email address",
          tabindex : "3",
          required : true
        },
        class : "email",
        domProps : {
          value : this.details.mail
        },
        on : {
          input : this.input
        }
      }, []), h("label", {
        attrs : {
          for : "mail"
        }
      }, ["Email"])])]);
    }, m.prototype.input = function(target) {
      this.details[target.target.id] = target.target.value;
      this.$emit("change", this.details);
    }, m;
  }(instance.a)) || Sn;
  var div = (Tn = $compile()({
    props : {
      card : {},
      disabled : {
        default : false
      },
      checked : {
        default : "new"
      }
    }
  }))(An = function(type) {
    /**
     * @return {?}
     */
    function fn() {
      var origResult;
      var result;
      var typeA;
      repeat(this, fn);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return origResult = result = format(this, type.call.apply(type, [this].concat(args))), result.details = {}, typeA = origResult, format(result, typeA);
    }
    return define(fn, type), fn.prototype.render = function(h) {
      var self = this;
      return h("div", null, [this.$slots.downgrade ? h("input", {
        attrs : {
          disabled : this.disabled,
          type : "radio",
          name : "card",
          id : "downgrade"
        },
        domProps : {
          checked : "downgrade" === this.checked
        },
        on : {
          change : function() {
            self.switch("downgrade");
          }
        }
      }, []) : void 0, this.$slots.downgrade ? this.$slots.downgrade : void 0, this.card ? [h("input", {
        attrs : {
          disabled : this.disabled,
          type : "radio",
          name : "card",
          id : "existingCard"
        },
        domProps : {
          checked : "existing" === this.checked
        },
        on : {
          change : function() {
            self.switch("existing");
          }
        }
      }, []), h("label", {
        attrs : {
          for : "existingCard"
        }
      }, ["Use ", h("strong", null, ["existing card"]), " (", this.card, ")", h("br", null, [])]), h("input", {
        attrs : {
          disabled : this.disabled,
          type : "radio",
          name : "card",
          id : "newCard"
        },
        class : "new",
        on : {
          change : function() {
            self.switch("new");
          }
        }
      }, []), h("label", {
        attrs : {
          for : "newCard"
        }
      }, ["Enter ", h("strong", null, ["new credit card"]), " details"])] : void 0, "new" === this.checked ? h("div", {
        class : "card"
      }, [h("p", null, [h("input", {
        attrs : {
          disabled : this.disabled,
          type : "text",
          name : "cardNumber",
          id : "cardNumber",
          autocomplete : "cc-number",
          tabindex : "4",
          pattern : "[0-9]*"
        },
        class : "cardnumber",
        on : {
          input : this.change
        }
      }, []), h("label", {
        attrs : {
          for : "cardNumber"
        }
      }, ["Credit card number"])]), h("p", null, [h("input", {
        attrs : {
          disabled : this.disabled,
          type : "number",
          name : "cardExpMonth",
          id : "cardExpMonth",
          autocomplete : "cc-exp-month",
          tabindex : "5",
          placeholder : "mm",
          maxlength : "2",
          pattern : "[0-9]*"
        },
        class : "number month",
        on : {
          input : this.change
        }
      }, []), h("input", {
        attrs : {
          disabled : this.disabled,
          type : "number",
          name : "cardExpYear",
          id : "cardExpYear",
          autocomplete : "cc-exp-year",
          tabindex : "6",
          placeholder : "yyyy",
          maxlength : "4",
          pattern : "[0-9]*"
        },
        class : "number year",
        on : {
          input : this.change
        }
      }, []), h("label", {
        attrs : {
          for : "cardExpMonth"
        }
      }, ["Expiration date"])]), h("p", null, [h("input", {
        attrs : {
          disabled : this.disabled,
          type : "text",
          name : "cardCvc",
          id : "cardCvc",
          tabindex : "7",
          autocomplete : "cc-csc",
          maxlength : "4",
          pattern : "[0-9]*"
        },
        class : "number",
        on : {
          input : this.change
        }
      }, []), h("label", {
        attrs : {
          for : "cardCvc"
        }
      }, ["CVC code"])])]) : void 0]);
    }, fn.prototype.switch = function(data) {
      this.$emit("switch", data);
    }, fn.prototype.change = function(target) {
      this.details[target.target.id] = target.target.value;
      this.$emit("change", this.details);
    }, fn;
  }(instance.a)) || An;
  /** @type {!RegExp} */
  var name = RegExp([/^ATU[A-Z0-9]{8,8}$/, /^BE[0-9]{10,10}$/, /^BG[0-9]{9,9}$|^BG[0-9]{10,10}$/, /^CY[A-Z0-9]{9,9}$/, /^CZ[0-9]{8,10}$/, /^DE[0-9]{9,9}$/, /^DK[0-9]{8,8}$/, /^EE[0-9]{9,9}$/, /^EL[0-9]{9,9}$/, /^ES[A-Z0-9]{1,1}[0-9]{7,7}[A-Z0-9]{1,1}$/, /^FI[0-9]{8,8}$/, /^FR[A-Z0-9]{2,2}[0-9]{9,9}$/, /^GB[0-9]{9,9}$|^GB[0-9]{12,12}$|^GBGD[0-9]{3,3}$|^GBHA[0-9]{3,3}$/, /^HR[0-9]{11,11}$/, /^HU[0-9]{8,8}$/, /^IE[A-Z0-9]{8,8}$|^IE[A-Z0-9]{9,9}$/, /^IT[0-9]{11,11}$/, /^LT[0-9]{9,9}$|^LT[0-9]{12,12}$/, 
  /^LU[0-9]{8,8}$/, /^LV[0-9]{11,11}$/, /^MT[0-9]{8,8}$/, /^NL[A-Z0-9]{9,9}B[A-Z0-9]{2,2}$/, /^PL[0-9]{10,10}$/, /^RO[0-9]{2,10}$/, /^PT[0-9]{9,9}$/, /^SE[0-9]{12,12}$/, /^SI[0-9]{8,8}$/, /^SK[0-9]{10,10}$/].map(function(pOne) {
    return pOne.source;
  }).join("|"), "i");
  var style = (Cn = $compile()({
    props : ["vat", "disabled"]
  }))(bottom = function(b) {
    /**
     * @return {?}
     */
    function m() {
      var header_map;
      var headers;
      var seen;
      all(this, m);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return header_map = headers = clone(this, b.call.apply(b, [this].concat(args))), headers.hasVat = false, headers.correct = null, seen = header_map, clone(headers, seen);
    }
    return Set(m, b), m.prototype.mounted = function() {
      /** @type {boolean} */
      this.hasVat = !!this.vat;
    }, m.prototype.render = function(h) {
      return h("div", {
        class : "vat"
      }, [h("input", {
        attrs : {
          disabled : this.disabled,
          type : "checkbox",
          name : "europeanCompany",
          id : "europeanCompany",
          tabindex : "8"
        },
        domProps : {
          checked : this.hasVat
        },
        on : {
          change : this.toggle
        }
      }, []), h("label", {
        attrs : {
          for : "europeanCompany"
        }
      }, ["I have a European VAT number"]), this.hasVat ? h("p", null, [h("input", {
        attrs : {
          disabled : this.disabled,
          type : "text",
          name : "vatNumber",
          id : "vatNumber",
          tabindex : "9",
          placeholder : "e.g. DK12345678"
        },
        class : ["vat", true === this.correct ? "valid" : false === this.correct ? "invalid" : ""],
        domProps : {
          value : this.vat && this.vat.toUpperCase()
        },
        on : {
          input : this.update
        }
      }, []), h("label", {
        attrs : {
          for : "vatNumber"
        }
      }, ["VAT number"])]) : void 0]);
    }, m.prototype.toggle = function(target) {
      this.hasVat = target.target.checked;
      this.$emit("change", this.hasVat ? this.vat : void 0);
    }, m.prototype.update = function(target) {
      this.vat = target.target.value.replace(/[\s\.\-]/g, "");
      /** @type {boolean} */
      this.correct = name.test(this.vat);
      this.$emit("change", this.vat);
    }, m;
  }(instance.a)) || bottom;
  var __WEBPACK_IMPORTED_MODULE_4__foundation_plugin__ = __webpack_require__(59);
  var payload = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__foundation_plugin__);
  var __WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__ = __webpack_require__(36);
  var p = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__foundation_util_motion__);
  var ModList = (Dn = $compile()({
    props : ["price", "description"]
  }))(Rn = function(parent) {
    /**
     * @return {?}
     */
    function Tree() {
      return _classCallCheck(this, Tree), reset(this, parent.apply(this, arguments));
    }
    return subclass(Tree, parent), Tree.prototype.mounted = function() {
      this.loadPayPal();
    }, Tree.prototype.render = function(createElement) {
      return createElement("span", {
        attrs : {
          id : "paypal-container"
        },
        style : "display: inline-block; width: 70%;"
      }, []);
    }, Tree.prototype.loadPayPal = function() {
      var script;
      var ignoredHosts;
      var env;
      var $scope = this;
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              if ("undefined" != typeof paypal) {
                /** @type {number} */
                context$5$0.next = 6;
                break;
              }
              return script = document.createElement("script"), script.src = "https://www.paypalobjects.com/api/checkout.js", script.setAttribute("data-version-4", true), context$5$0.next = 6, regeneratorRuntime.awrap(new Promise(function(doNext) {
                document.head.appendChild(script);
                script.onload = doNext;
              }));
            case 6:
              return context$5$0.next = 8, regeneratorRuntime.awrap(new Promise(function(_nextEventFunc) {
                return setTimeout(_nextEventFunc, 20);
              }));
            case 8:
              /** @type {!Array} */
              ignoredHosts = ["tinypng.com", "tinyjpg.com", "tinify.com"];
              /** @type {string} */
              env = ignoredHosts.includes(window.location.hostname) ? "production" : "sandbox";
              paypal.Button.render({
                env : env,
                commit : true,
                style : {
                  size : "responsive",
                  color : "blue",
                  shape : "rect",
                  label : "pay",
                  tagline : false
                },
                client : {
                  sandbox : "ASNCseec_XBzh3qVWdJzPAVIDdNBx59D0h70OHh1_JfliG26cBecqBDzWSM84VAxDRwHHjd7KO_ENN5J",
                  production : "Aee4OiXfcuH04VTmXaSb6rris73uIPbygP3mPr68IVrylzdWxcVXaI__EP1VgE9NQuQ840L4NWuktD06"
                },
                payment : function(dst, params) {
                  return params.payment.create({
                    payment : {
                      transactions : [{
                        amount : {
                          total : $scope.price + ".00",
                          currency : "USD"
                        },
                        description : $scope.description
                      }]
                    }
                  });
                },
                onAuthorize : function(result) {
                  var eventDetails = {
                    paymentId : result.paymentID,
                    payerId : result.payerID
                  };
                  $scope.$emit("submit", null, eventDetails);
                }
              }, "#paypal-container");
            case 11:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, Tree;
  }(instance.a)) || Rn;
  var mstream = $("pro");
  var SiteRow = (zn = $compile()({
    props : ["session"]
  }))(In = function(data) {
    /**
     * @return {?}
     */
    function render() {
      var response;
      var request;
      var params;
      _get(this, render);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return response = request = call(this, data.call.apply(data, [this].concat(args))), request.quantity = 1, request.accountDetails = {}, request.paymentDetails = {}, request.paymentMethod = "stripe", request.pending = false, request.success = false, request.error = null, params = response, call(request, params);
    }
    return compile(render, data), render.prototype.render = function(createElement) {
      var self = this;
      return createElement("div", null, [createElement("div", {
        class : "goprobox"
      }, [createElement("div", {
        class : "bulletspecs"
      }, [createElement("h2", null, ["Sign up for TinyPNG ", createElement("strong", null, ["Web Pro"])]), createElement("p", null, ["Get your Pro account for the online ", createElement("strong", null, ["drag and drop"]), " web\u00a0interface!"]), createElement("ul", null, [createElement("li", null, ["Drag and drop more than 20\u00a0images at\u00a0once"]), createElement("li", null, ["Upgrade 5\u00a0MB to 25\u00a0MB filesize limit"]), createElement("li", null, ["Show detailed statistics on the Analyzer\u00a0tool"]), 
      createElement("li", null, ["Lots of hugs from Panda George"])]), createElement("p", null, ["Your Pro account will entitle you to a full year of compressing images with the ", createElement("strong", null, ["drag and drop"]), " web interface. You can either sign up as an individual or with your entire team. Make sure everyone on the team has access to this mail address in case you are signing up as a team. You can cancel the automatic renewal of a subscription anytime."]), createElement("p", 
      null, ["WordPress, Magento or Developer API user and need to compress more? You can upgrade to the ", createElement("a", {
        attrs : {
          href : "/dashboard/developers"
        }
      }, ["flexible plan"]), "."]), createElement("p", null, [createElement("em", null, ["Payments are securely handled by our payment partner Stripe. All prices include sales tax (VAT) when applicable."])])]), createElement("form", {
        class : {
          main : true,
          success : this.success,
          pending : this.pending,
          propayment : true
        },
        on : {
          submit : this.submit
        }
      }, [createElement("div", {
        class : "details"
      }, [this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : void 0, createElement("h2", null, ["Yearly subscription"]), createElement("p", null, [createElement(root, {
        on : {
          change : function(target) {
            /** @type {!Object} */
            self.quantity = target;
          }
        }
      }, [createElement("span", {
        class : "description"
      }, [1 == this.quantity ? "user" : "users"]), " ", createElement("strong", null, ["$"]), createElement("strong", {
        class : "price"
      }, [this.quantity * p.a.price]), " per year"])]), createElement("h2", null, [1 == this.quantity ? "Personal" : "Team", " information"]), createElement(lastVnode, {
        attrs : {
          session : this.session
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            self.accountDetails = target;
          }
        }
      }, []), createElement("h2", null, ["Payment details"]), createElement(div, {
        attrs : {
          disabled : "stripe" != this.paymentMethod
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            self.paymentDetails = target;
          }
        }
      }, []), createElement(style, {
        attrs : {
          vat : this.vatNumber
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            self.vatNumber = target;
          }
        }
      }, []), createElement("div", {
        class : "submit"
      }, [createElement("p", null, ["By submitting you agree to the ", createElement("a", {
        attrs : {
          href : "/terms"
        }
      }, ["terms of use"]), "."]), "paypal" == this.paymentMethod ? createElement("span", null, ["Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            self.paymentMethod = "stripe";
          }
        }
      }, ["credit card"]), "."]) : createElement("span", null, ["No creditcard? Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            self.paymentMethod = "paypal";
          }
        }
      }, ["PayPal"]), "!"]), createElement("p", null, ["paypal" == this.paymentMethod ? createElement(ModList, {
        on : {
          submit : this.submit
        },
        attrs : {
          price : this.quantity * p.a.price,
          description : p.a.description
        }
      }, []) : createElement("button", {
        attrs : {
          tabindex : "10",
          disabled : this.pending
        },
        class : "success"
      }, [createElement("p", null, ["Sign up for Pro"]), this.pending ? createElement("span", {
        class : "spinner"
      }, [createElement("span", {
        class : "circle"
      }, [])]) : this.success ? createElement("span", {
        class : "success"
      }, [createElement("span", {
        class : "checkfirst"
      }, [createElement("span", {
        class : "firstsuccess"
      }, []), createElement("span", {
        class : "checklast"
      }, [createElement("span", {
        class : "lastsuccess"
      }, [])])])]) : void 0]), createElement("a", {
        class : "cancel",
        on : {
          click : function() {
            return self.$emit("cancel");
          }
        }
      }, ["Cancel"])])])])])])]);
    }, render.prototype.submit = function(target, key) {
      var item;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return target && target.preventDefault(), key && (this.paymentDetails = key), this.pending = true, this.error = null, self.prev = 4, self.next = 7, regeneratorRuntime.awrap(mstream.post(Object.assign({
                quantity : this.quantity,
                vatNumber : this.vatNumber,
                paymentMethod : this.paymentMethod
              }, this.accountDetails, this.paymentDetails)));
            case 7:
              item = self.sent;
              /** @type {boolean} */
              this.success = true;
              this.$emit("success", item);
              if (window.ga) {
                window.ga("send", "event", "Pro", "Success", "Number of accounts purchased", this.quantity * p.a.price);
              }
              /** @type {number} */
              self.next = 16;
              break;
            case 13:
              /** @type {number} */
              self.prev = 13;
              self.t0 = self.catch(4);
              this.error = self.t0.message;
            case 16:
              return self.prev = 16, this.pending = false, self.finish(16);
            case 19:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[4, 13, 16, 19]]);
    }, render;
  }(instance.a)) || In;
  var form = (Ln = $compile()({
    props : {
      show : Boolean,
      width : Number,
      closable : {
        type : Boolean,
        default : true
      }
    }
  }))(defaultForm = function(constructor) {
    /**
     * @return {?}
     */
    function Tree() {
      return DecorateConstructor(this, Tree), possibleConstructorReturn(this, constructor.apply(this, arguments));
    }
    return Class(Tree, constructor), Tree.prototype.mounted = function() {
      document.addEventListener("keyup", this.documentKeyup, true);
      document.addEventListener("click", this.documentClick, true);
    }, Tree.prototype.destroyed = function() {
      document.removeEventListener("keyup", this.documentKeyup, true);
      document.removeEventListener("click", this.documentClick, true);
    }, Tree.prototype.documentKeyup = function(e) {
      if (27 === e.which) {
        this.close(e);
      }
    }, Tree.prototype.documentClick = function(e) {
      if (this.$refs.content && !this.$refs.content.contains(e.target)) {
        this.close(e);
      }
    }, Tree.prototype.render = function(h) {
      return h("transition", {
        attrs : {
          name : "modal"
        }
      }, [this.show ? h("modal", {
        class : "modal"
      }, [h("div", {
        class : "content",
        ref : "content",
        style : this.width ? "width: " + this.width / 10 + "rem" : null
      }, [this.closable ? h("a", {
        attrs : {
          title : "Close"
        },
        class : "close",
        on : {
          click : this.close
        }
      }, ["\u00d7"]) : void 0, this.$slots.default])]) : void 0]);
    }, Tree.prototype.close = function(instance) {
      this.$emit("close");
    }, Tree;
  }(instance.a)) || defaultForm;
  var expected = $compile()(None = function() {
    /**
     * @return {undefined}
     */
    function f() {
      map(this, f);
      /** @type {boolean} */
      this.open = false;
    }
    return f.prototype.mounted = function() {
      /** @type {boolean} */
      this.open = true;
    }, f.prototype.render = function(createElement) {
      return createElement(form, {
        on : {
          close : this.close
        },
        attrs : {
          show : this.open,
          width : 480
        }
      }, [createElement("center", null, [createElement("figure", {
        class : "crown"
      }, []), createElement("h2", null, ["Successfully upgraded to Pro"]), createElement("p", null, ["Your account has been successfully upgraded.", createElement("br", null, []), "Thank you for supporting TinyPNG."]), createElement("button", {
        class : "success",
        attrs : {
          autocomplete : "off"
        },
        on : {
          click : this.close
        }
      }, ["Continue"])])]);
    }, f.prototype.close = function(instance) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return this.open = false, context$5$0.next = 3, regeneratorRuntime.awrap(new Promise(function(_nextEventFunc) {
                return setTimeout(_nextEventFunc, 0);
              }));
            case 3:
              this.$destroy();
            case 4:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, f;
  }()) || None;
  var done = (qn = $compile()({
    props : ["queue"]
  }))(noop = function(value) {
    /**
     * @return {?}
     */
    function Store() {
      var key;
      var val;
      var keys;
      subscribe(this, Store);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return key = val = pick(this, value.call.apply(value, [this].concat(args))), val.showForm = false, keys = key, pick(val, keys);
    }
    return inherit(Store, value), Store.prototype.mounted = function() {
      /** @type {(Element|null)} */
      var openLoginScreenBtn = document.querySelector("aside a.pro");
      if (openLoginScreenBtn) {
        openLoginScreenBtn.addEventListener("click", this.togglePro);
      }
    }, Store.prototype.destroyed = function() {
      /** @type {(Element|null)} */
      var titleBarElement = document.querySelector("aside a.pro");
      if (titleBarElement) {
        titleBarElement.removeEventListener("click", this.togglePro);
      }
    }, Store.prototype.render = function(h) {
      var e = this;
      return h("div", null, [h("section", {
        class : {
          files : true,
          started : this.queue.state.started || this.showForm
        }
      }, [h("ul", null, [this.queue.requests.map(function(returnRequest) {
        return h(SlidesPicker, {
          attrs : {
            request : returnRequest
          },
          on : {
            "click-pro" : e.togglePro
          }
        }, []);
      })]), h("transition", {
        attrs : {
          name : "slide"
        },
        on : {
          enter : this.scroll
        }
      }, [h(SiteRow, {
        attrs : {
          session : this.queue.session
        },
        directives : [{
          name : "show",
          value : this.showForm
        }],
        on : {
          cancel : this.togglePro,
          success : this.activatePro
        }
      }, [])])]), this.queue.state.started || !this.queue.fileLimit || this.showForm ? void 0 : this.session && this.session.authenticated ? void 0 : h("section", {
        class : "gopro"
      }, [h("span", null, ["Like to compress more?"]), h("button", {
        class : "success",
        on : {
          click : this.togglePro
        }
      }, ["Go Pro!"])])]);
    }, Store.prototype.togglePro = function(event) {
      if (event) {
        event.preventDefault();
      }
      /** @type {boolean} */
      this.showForm = !this.showForm;
    }, Store.prototype.activatePro = function() {
      /** @type {boolean} */
      this.showForm = false;
      this.queue.session.update();
      run("body", expected);
    }, Store.prototype.scroll = function(target) {
      window.scroll({
        top : window.scrollY + target.getBoundingClientRect().top - 40,
        behavior : "smooth"
      });
    }, Store;
  }(instance.a)) || noop;
  var interpolateBar = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var func = function() {
    /**
     * @return {undefined}
     */
    function t() {
      callService$1(this, t);
      /** @type {null} */
      this.name = null;
      /** @type {null} */
      this.version = null;
    }
    return t.parse = function(obj) {
      var ret = new t;
      var charListNotLatin = obj.platform.toLowerCase();
      var searcher_name = obj.userAgent.toLowerCase();
      var aKeys = void 0;
      switch(charListNotLatin.slice(0, 3)) {
        case "mac":
          aKeys = searcher_name.match(/mac os x (\d+)[_.](\d+)/);
          if (aKeys) {
            /** @type {string} */
            ret.name = "osx";
            /** @type {string} */
            ret.version = [aKeys[1], aKeys[2]].join(".");
          }
          break;
        case "win":
          var a = {
            "5.1" : "xp",
            "5.2" : "xp",
            "6.0" : "vista",
            "6.1" : "7",
            "6.2" : "8",
            "6.3" : "8.1",
            "10.0" : "10"
          };
          if (aKeys = searcher_name.match(/windows nt (\d+\.\d+)/)) {
            var tag = a[aKeys[1]];
            if (tag) {
              /** @type {string} */
              ret.name = "windows";
              ret.version = tag;
            }
          }
      }
      return ret;
    }, interpolateBar(t, [{
      key : "known",
      get : function() {
        return this.name && this.version;
      }
    }, {
      key : "id",
      get : function() {
        return this.name + "-" + this.version.replace(".", "-");
      }
    }]), t;
  }();
  var m = "undefined" == typeof navigator ? null : func.parse(navigator);
  var pendingOps = (Yn = $compile()({
    props : ["queue"]
  }))(resizedImage = function(factory) {
    /**
     * @return {?}
     */
    function render() {
      var w;
      var result;
      var c;
      show(this, render);
      /** @type {number} */
      var i = arguments.length;
      /** @type {!Array} */
      var args = Array(i);
      /** @type {number} */
      var l = 0;
      for (; l < i; l++) {
        args[l] = arguments[l];
      }
      return w = result = traverse(this, factory.call.apply(factory, [this].concat(args))), result.zipFrame = update("/zip"), result.dropboxFrame = update("/dropbox"), c = w, traverse(result, c);
    }
    return attach(render, factory), render.prototype.render = function(createElement) {
      var stats = this;
      if (!this.queue.state.results) {
        return createElement("transition", {
          attrs : {
            name : "fade"
          }
        }, []);
      }
      var $menuGroup2 = createElement("div", {
        class : "buttons"
      }, [createElement("div", {
        attrs : {
          id : "dropbox"
        }
      }, [createElement("button", {
        class : "dropbox",
        attrs : {
          disabled : this.queue.length > 100 || this.queue.state.running,
          title : this.queue.length > 100 ? "Dropbox limits number of images to 100 at once" : null
        },
        on : {
          click : this.saveDropbox
        }
      }, ["Save to Dropbox"])]), createElement("div", {
        attrs : {
          id : "zip"
        }
      }, [createElement("button", {
        class : "download",
        attrs : {
          disabled : this.queue.state.running
        },
        on : {
          click : this.downloadZip
        }
      }, ["Download all"])])]);
      var $menuGroup3 = createElement("div", {
        class : "box"
      }, [createElement("div", {
        class : "phrase"
      }, ["Panda just saved you"]), createElement("div", {
        class : "percentage"
      }, [this.queue.percentage, "%"]), createElement("div", {
        class : "bytes"
      }, [parse(this.queue.bytes, 0), " total"])]);
      var o = function() {
        /** @type {string} */
        var m = "Panda just saved me " + stats.queue.percentage + "%, " + parse(stats.queue.bytes, 0) + " in total!";
        if (stats.queue.percentage > 20) {
          return createElement("div", {
            class : "share"
          }, [createElement("small", null, ["Share your savings"]), createElement("iframe", {
            class : "png",
            attrs : {
              seamless : true,
              scrolling : "no",
              src : testDownload(m, "png")
            }
          }, []), createElement("iframe", {
            class : "jpg",
            attrs : {
              seamless : true,
              scrolling : "no",
              src : testDownload(m, "jpg")
            }
          }, [])]);
        }
      }();
      return createElement("transition", {
        attrs : {
          name : "fade"
        }
      }, [createElement("section", {
        class : "overview"
      }, [$menuGroup2, $menuGroup3, o])]);
    }, render.prototype.downloadZip = function(data) {
      data.preventDefault();
      /** @type {boolean} */
      var onChromeDownloadStart = "osx" === m.name && ["10.4", "10.5", "10.6"].indexOf(m.version) >= 0;
      var e = this.queue.successful.map(function(stats) {
        var idObject = stats.url.split("/");
        return {
          id : idObject[idObject.length - 2],
          name : stats.name,
          size : stats.bytesOut
        };
      });
      this.zipFrame.contentWindow.download(e, onChromeDownloadStart);
      if (window.ga) {
        window.ga("send", "event", "Download", "Zip", e.length);
      }
    }, render.prototype.saveDropbox = function(event) {
      event.preventDefault();
      var level = this.queue.successful.map(function(result) {
        return {
          url : result.url,
          filename : result.name
        };
      });
      this.dropboxFrame.contentWindow.save(level);
      if (window.ga) {
        window.ga("send", "event", "Download", "Dropbox", level.length);
      }
    }, render;
  }(instance.a)) || resizedImage;
  var extensionMapping = function() {
    /** @type {!Array} */
    var n = ["compress, {plural}", "optimize, {plural}", "{singular}, compression", "{singular}, compressor", "{singular}, optimization"];
    var types = {
      jpg : [{
        singular : "jpg",
        plural : "jpg"
      }, {
        singular : "image",
        plural : "images"
      }, {
        singular : "photo",
        plural : "photos"
      }, {
        singular : "jpeg",
        plural : "jpeg"
      }],
      png : [{
        singular : "png",
        plural : "png"
      }, {
        singular : "image",
        plural : "images"
      }, {
        singular : "picture",
        plural : "pictures"
      }]
    };
    var label = t(n);
    var translation = t(types.jpg);
    var field = t(types.png);
    return {
      jpg : label.replace("{singular}", translation.singular).replace("{plural}", translation.plural),
      png : label.replace("{singular}", field.singular).replace("{plural}", field.plural)
    };
  }();
  /** @type {boolean} */
  var resultFound = false;
  var emptyOpSet = (Un = $compile()({
    props : ["queue"]
  }))(appKey = function(_GeneralWorker) {
    /**
     * @return {?}
     */
    function Bar() {
      return setData(this, Bar), normalize(this, _GeneralWorker.apply(this, arguments));
    }
    return inheritPrototype(Bar, _GeneralWorker), Bar.prototype.render = function(createElement) {
      /**
       * @param {string} data
       * @return {undefined}
       */
      var callback = function(data) {
        if (h) {
          render(h, {
            particleCount : 150,
            startVelocity : 45,
            origin : data
          });
        }
      };
      /** @type {(Element|null)} */
      var h = document.querySelector("header");
      if (this.queue.state.results && !resultFound) {
        /** @type {(Element|null)} */
        var previewElt = document.querySelector("figure.panda");
        if (previewElt) {
          /** @type {!ClientRect} */
          var rect = previewElt.getBoundingClientRect();
          /** @type {boolean} */
          resultFound = true;
          callback({
            x : (rect.left + rect.right) / 2 + window.scrollX,
            y : rect.top + window.scrollY
          });
        }
      }
      return createElement("div", null, [createElement("div", {
        class : {
          celebration : true,
          visible : this.queue.state.results
        },
        on : {
          click : function(event) {
            return callback({
              x : event.pageX,
              y : event.pageY
            });
          }
        }
      }, ["Celebrating", createElement("span", {
        class : "count"
      }, ["1\u2009000\u2009000\u2009000"]), "compressions!"]), createElement("figure", {
        class : {
          panda : true,
          confetti : true,
          cheering : this.queue.state.results
        }
      }, [])]);
    }, Bar;
  }(instance.a)) || appKey;
  var _createClass = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var nameArgs = function(name) {
    /**
     * @param {string} value
     * @return {?}
     */
    function init(value) {
      text(this, init);
      var config = load(this, name.call(this));
      return config.progress = 0, config.status = "waiting", config.res = {}, config.headers = {}, config.id = value, config;
    }
    return f(init, name), init.prototype.send = function() {
      /**
       * @param {!ProgressEvent} event
       * @return {undefined}
       */
      function onProgress(event) {
        /** @type {(null|number)} */
        this.progress = event.lengthComputable ? Math.round(event.loaded / event.total * 1E3) / 10 : null;
        if (100 === this.progress) {
          /** @type {string} */
          this.status = "compressing";
        }
        this.emit("change");
      }
      /**
       * @param {?} event
       * @return {undefined}
       */
      function doneHandler(event) {
        if (this.progress = 100, request.status) {
          try {
            /** @type {*} */
            this.res = JSON.parse(request.responseText);
          } catch (t) {
            this.res = {
              message : "Invalid server response"
            };
          }
        } else {
          this.res = {
            message : "Could not upload file"
          };
        }
        /** @type {string} */
        this.status = 201 === request.status ? "success" : "error";
        this.emit("complete");
      }
      this.res = {};
      /** @type {string} */
      this.status = "uploading";
      this.emit("change");
      /** @type {!XMLHttpRequest} */
      var request = new XMLHttpRequest;
      request.open("POST", "/web/shrink");
      request.upload.onprogress = onProgress.bind(this);
      request.onabort = request.onerror = request.onload = doneHandler.bind(this);
      var header;
      for (header in this.headers) {
        request.setRequestHeader(header, this.headers[header]);
      }
      request.send(this.body);
    }, init.prototype.error = function(target) {
      var status = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error";
      /** @type {number} */
      this.progress = 100;
      this.status = status;
      this.res = {
        message : target
      };
      this.emit("complete");
    }, _createClass(init, [{
      key : "bytesIn",
      get : function() {
        return this.res.input && this.res.input.size;
      }
    }, {
      key : "bytesOut",
      get : function() {
        return this.res.output && this.res.output.size;
      }
    }, {
      key : "percentage",
      get : function() {
        return this.res.output && Math.round(100 * (this.res.output.ratio - 1));
      }
    }, {
      key : "url",
      get : function() {
        return this.res.output && this.res.output.url + "/" + encodeURIComponent(this.name);
      }
    }, {
      key : "message",
      get : function() {
        return this.res.message;
      }
    }, {
      key : "contentType",
      get : function() {
        return this.res.input && this.res.input.type;
      }
    }]), init;
  }(IELazyFacade);
  var e = function(t) {
    /**
     * @param {?} r
     * @param {!Object} p
     * @return {?}
     */
    function e(r, p) {
      text(this, e);
      var page = load(this, t.call(this, r));
      return page.fileAttrs = {
        name : p.name,
        size : p.size
      }, page.file = p, page;
    }
    return f(e, t), e.prototype.send = function() {
      if (this.file.type && "image/jpeg" !== this.file.type.toLowerCase() && "image/png" !== this.file.type.toLowerCase()) {
        return void t.prototype.error.call(this, "This file type is not supported");
      }
      t.prototype.send.call(this);
    }, _createClass(e, [{
      key : "name",
      get : function() {
        return this.fileAttrs.name;
      }
    }, {
      key : "bytesIn",
      get : function() {
        return this.res.input ? this.res.input.size : this.fileAttrs.size;
      }
    }, {
      key : "body",
      get : function() {
        return this.file;
      }
    }]), e;
  }(nameArgs);
  var item = function(t) {
    /**
     * @param {?} options
     * @param {string} name
     * @return {?}
     */
    function e(options, name) {
      text(this, e);
      var res = load(this, t.call(this, options));
      return res.source = name, res.name = (new URL(name)).pathname.split("/").pop(), res.headers = {
        "content-type" : "application/json"
      }, res;
    }
    return f(e, t), _createClass(e, [{
      key : "body",
      get : function() {
        return JSON.stringify({
          source : {
            url : this.source
          }
        });
      }
    }]), e;
  }(nameArgs);
  var expectHandlerFor = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var Queue = function(name) {
    /**
     * @return {?}
     */
    function success() {
      var session = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      completeCallback(this, success);
      var self = destroy(this, name.call(this));
      return self.concurrency = 2, self.requests = [], self.head = 0, self.tail = 0, self.count = 0, self.bytesIn = 0, self.bytesOut = 0, self.session = session, session && session.on && session.on("update", function() {
        return self.retry();
      }), self;
    }
    return assert(success, name), success.prototype.resume = function() {
      if (this.count !== this.concurrency) {
        var t = void 0;
        for (; this.tail < this.head;) {
          var img = this.requests[this.tail++];
          if (["waiting", "limited"].includes(img.status)) {
            t = img;
            break;
          }
        }
        if (t) {
          if (this.count++, this.tail > this.fileLimit) {
            t.error("Too many files uploaded at once", "limited");
          } else {
            if (t.file && t.file.size > this.sizeLimit) {
              /** @type {string} */
              var type = t.file.size < 26214400 ? "limited" : "error";
              t.error("File is too large (max " + this.sizeLimit / 1024 / 1024 + " MB)", type);
            } else {
              t.send();
            }
          }
        }
      }
    }, success.prototype.push = function(obj) {
      var self = this;
      var type = "string" == typeof obj ? item : e;
      var data = new type(this.head++, obj);
      data.on("change", function() {
        self.emit("change", data);
      });
      data.on("complete", function() {
        if ("success" === data.status) {
          self.bytesIn += data.bytesIn;
          self.bytesOut += Math.min(data.bytesIn, data.bytesOut);
        }
        self.count--;
        self.resume();
        self.emit("complete", data);
      });
      this.requests.push(data);
      this.emit("add", data);
      this.resume();
    }, success.prototype.retry = function() {
      if (this.pro) {
        /** @type {number} */
        this.tail = 0;
        var t = this.concurrency;
        for (; t--;) {
          this.resume();
        }
      }
    }, expectHandlerFor(success, [{
      key : "length",
      get : function() {
        return this.requests.length;
      }
    }, {
      key : "percentage",
      get : function() {
        return Math.round(100 * (1 - this.bytesOut / this.bytesIn));
      }
    }, {
      key : "bytes",
      get : function() {
        return this.bytesIn - this.bytesOut;
      }
    }, {
      key : "state",
      get : function() {
        return {
          started : this.requests.length > 0,
          running : this.count > 0,
          results : this.bytesIn > 0
        };
      }
    }, {
      key : "pro",
      get : function() {
        return this.session && this.session.authenticated && this.session.products.includes("pro");
      }
    }, {
      key : "fileLimit",
      get : function() {
        if (!this.pro) {
          return 20;
        }
      }
    }, {
      key : "sizeLimit",
      get : function() {
        return this.pro ? 26214400 : 5242880;
      }
    }, {
      key : "successful",
      get : function() {
        return this.requests.filter(function(data) {
          return "success" === data.status;
        });
      }
    }]), success;
  }(IELazyFacade);
  if (document.querySelector("[data-drop-target]")) {
    var queue = new Queue(options);
    run("[data-drop-target]", action, {
      queue : queue
    });
    run("[data-file-list]", done, {
      queue : queue
    });
    run("[data-overview]", pendingOps, {
      queue : queue
    });
    run("[data-panda]", emptyOpSet, {
      queue : queue
    });
    queue.on("add", function(result) {
      if (window.ga) {
        result.on("complete", function() {
          var eventExtra = void 0;
          eventExtra = queue.pro && "error" !== result.status ? "Pro conversion" : result.status.charAt(0).toUpperCase() + result.status.slice(1);
          var value = "error" === result.status ? result.message : result.contentType;
          window.ga("send", "event", "Conversions", eventExtra, value);
        });
      }
    });
  }
  var Sr;
  var homeFolder;
  var Ar;
  var textNodeMap;
  var Mr;
  var mobile_redirect;
  var Rr;
  var defaultTrafficFilePath;
  var previous;
  var parent;
  var $r;
  var _Element_prototype;
  var qr;
  var smartDraft;
  var Yr;
  var none;
  var Ur;
  var publicSassPath;
  var Gr;
  var Hr;
  var entryToSend;
  var OverlayImage;
  var Jr;
  var MLA;
  var Qr;
  var DEFAULT_RECONNECT_TIME_INCREASE;
  var git;
  var Hotel;
  var no;
  var deviceCurrency;
  var _class;
  var io;
  var ao;
  var so;
  var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__(109);
  var mock = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
  var ButtonIcon = (Sr = $compile()({
    props : ["licenses"]
  }))(homeFolder = function(y) {
    /**
     * @return {?}
     */
    function m() {
      return defer(this, m), _possibleConstructorReturn(this, y.apply(this, arguments));
    }
    return Map(m, y), m.prototype.render = function(createElement) {
      if (this.licenses.length) {
        return createElement("section", {
          class : "history"
        }, [createElement("article", null, [createElement("h2", null, ["Change history"]), createElement("h3", null, ["Version 2.4 (April 23rd, 2018)"]), createElement("ul", null, [createElement("li", null, ["Export slices! We are proud to announce that the plugin now detects your user slices. It works similar to marquee selections and allows you to export different parts of an image. For ease of use you can add a custom name to your slices which will be applied to the file name when saving. The plugin first looks for a marquee, then a selected slice and then for a selected artboard."]), 
        createElement("li", null, ["The width and height have been added in the export window underneath the preview of the optimized image. This addition will definitely save you some time sooner or later. No need for a desktop calculator any more to calculate the final output dimensions."]), createElement("li", null, ["You can now add a copyright notice, description and url to your precious images."]), createElement("li", null, ["Transparent areas are turned into white when exporting to JPEG. This is similar to the default behavior in Photoshop. The plugin used to change these areas to black."]), 
        createElement("li", null, ["Ever compressed all your photos using the plugin and found out the file creation dates were stripped? Feeling sad it was impossible to sort your optimized images on a timeline? That is now a thing of the past. The original creation date will be preserved in your optimized images."]), createElement("li", null, ["We dropped OS X 10.8 support. The plugin now needs Windows 7+ or OS X 10.9+. Goodbye Mountain Lion!"])]), createElement("div", {
          attrs : {
            id : "readmore"
          }
        }, [createElement("a", {
          attrs : {
            href : "#",
            onclick : "document.getElementById('readmore').style.display='none';document.getElementById('history').style.display='block';return false;"
          }
        }, ["Show previous improvements "])]), createElement("div", {
          attrs : {
            id : "history"
          },
          style : "display:none"
        }, [createElement("h3", null, ["Version 2.3 (March 15th, 2016)"]), createElement("ul", null, [createElement("li", null, ["A much anticipated feature is finally here! The file size of the optimized images is now displayed in the preview window. Yes, we missed it too!"]), createElement("li", null, ["The next feature is for CC 2015 users. You now get first class support for artboards! When you use the plugin your current artboard is automatically selected and compressed. We even use the name of your artboard to suggest a file name. It\u2019s now easier than ever to save multiple optimized files from a single Photoshop document."]), 
        createElement("li", null, ["Resizing has been improved. Smart people have calculated what the correct way to resize images is. That method has now been adopted: the gamma (brightness curve) of the image is correctly used when resizing. Never heard of gamma or brightness curves? Don\u2019t worry. Scaling your image when compressing just gives better results. That\u2019s all."]), createElement("li", null, ["On OS X the image was sometimes glued to the bottom left corner when choosing a different scale. No longer! Fixed!"]), 
        createElement("li", null, ["This version requires Windows 7+ or OS X 10.8+. That means we dropped OS X 10.7 support for this plugin version. It\u2019s been fun, goodbye Lion!"])]), createElement("h3", null, ["Version 2.2 (December 23rd, 2015)"]), createElement("ul", null, [createElement("li", null, ["Improved support for shiny Retina displays and other High-DPI screens. The image previews are always displayed at the native pixel size, instead of twice the size. As you would expect."]), createElement("li", 
        null, ["Did you notice that the scrolling position of the preview image when changing the file format or scale could be improved? Well, we just did that too. If you didn\u2019t notice, that\u2019s okay too."]), createElement("li", null, ["Some added stability improvements when changing the file name so it should crash less often on OS X."])]), createElement("h3", null, ["Version 2.1 (June 17th, 2015)"]), createElement("ul", null, [createElement("li", null, ["Added support for Photoshop CC 2015 in installer (Windows)."])]), 
        createElement("h3", null, ["Version 2.0 (April 24th, 2015)"]), createElement("ul", null, [createElement("li", null, ["New compression engine with support for both JPEG and PNG. Save optimized images from Photoshop with the same compression as on TinyPNG and TinyJPG."])]), createElement("h3", null, ["Version 1.5 (April 10th, 2015)"]), createElement("ul", null, [createElement("li", null, ["You can use the marquee tool instead of cropping. Saving an image with a currently active selection only exports the selected portion of the document."])]), 
        createElement("h3", null, ["Version 1.4 (March 6th, 2015)"]), createElement("ul", null, [createElement("li", null, ["You can now resize your images directly when exporting by choosing a different scale."]), createElement("li", null, ["Better support for very large images."]), createElement("li", null, ["The file name no longer incorrectly includes the entire path in certain situations (Windows)."]), createElement("li", null, ["Stability improvements (Windows)."])]), createElement("h3", null, 
        ["Version 1.3 (December 15th, 2014)"]), createElement("ul", null, [createElement("li", null, ["Decreased memory usage (Windows)."]), createElement("li", null, ["Fix memory issues when converting many images with batch automation (Windows)."])]), createElement("h3", null, ["Version 1.2 (August 4th, 2014)"]), createElement("ul", null, [createElement("li", null, ["Compression improvements for images with large transparent areas."]), createElement("li", null, ["Added support for Adobe Photoshop CC 2014."]), 
        createElement("li", null, ["Fixed various installation issues with Photoshop CS 5.1 and Photoshop CC 64-bit (Windows)."]), createElement("li", null, ["Interface improvements (OS X)."])]), createElement("h3", null, ["Version 1.1 (February 27th, 2014)"]), createElement("ul", null, [createElement("li", null, ["Improved compression quality."]), createElement("li", null, ["Performance and stability improvements."])]), createElement("h3", null, ["Version 1.0 (February 13th, 2014)"]), createElement("ul", 
        null, [createElement("li", null, ["First version!"])])])])]);
      }
    }, m;
  }(instance.a)) || homeFolder;
  var __WEBPACK_IMPORTED_MODULE_0__foundation_util_box__ = __webpack_require__(37);
  var filter = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__foundation_util_box__);
  var Exceptions = (Ar = $compile()({
    props : ["licenses"]
  }))(textNodeMap = function(_GeneralWorker) {
    /**
     * @return {?}
     */
    function t() {
      return write(this, t), warn(this, _GeneralWorker.apply(this, arguments));
    }
    return setup(t, _GeneralWorker), t.prototype.render = function($) {
      return $("section", {
        class : "licenses"
      }, [this.licenses.length ? this.licenses.map(function(data) {
        return $("section", null, [$("aside", null, [$("h2", null, ["Photoshop plugin for ", $("span", {
          class : "platform"
        }, ["osx" == data.platform ? "macOS" : "Windows"])]), $("p", null, ["Purchased on ", filter()("%B %o, %Y", new Date(data.created)), data.invoice ? [" ", $("router-link", {
          attrs : {
            to : {
              path : "/invoices",
              query : {
                id : data.invoice
              }
            }
          }
        }, ["View invoice"])] : void 0]), $("p", null, [$("strong", null, ["Licensed to ", data.fullName]), $("br", null, []), data.mail]), data.copies > 1 ? $("em", null, ["Multi-user license for ", data.copies, " users or computers"]) : void 0]), $("article", null, [$("div", {
          class : "downloadable"
        }, [$("a", {
          attrs : {
            href : data.url
          }
        }, [$("figure", {
          class : "licensebox"
        }, []), "License", $("br", null, []), $("small", null, ["TinyPNG-JPG.license"])])]), $("div", {
          class : "downloadable"
        }, [$("a", {
          attrs : {
            href : data.plugin
          }
        }, [$("figure", {
          class : "pluginbox"
        }, []), "Plugin", $("br", null, []), $("small", null, [data.plugin.split("/").pop()])])])])]);
      }) : $("div", null, [$("h2", null, ["You do not have any Photoshop plugins yet"]), $("p", null, ["Go to the ", $("a", {
        attrs : {
          href : "/photoshop"
        }
      }, ["Photoshop plugin"]), " page for more information and to get your copy."])])]);
    }, t;
  }(instance.a)) || textNodeMap;
  var Notifications = (Mr = $compile()({
    props : ["licenses"]
  }))(mobile_redirect = function(V) {
    /**
     * @return {?}
     */
    function p() {
      return C(this, p), validateProperty(this, V.apply(this, arguments));
    }
    return create(p, V), p.prototype.render = function(createElement) {
      if (this.licenses.length) {
        return createElement("main", {
          class : "ribbon"
        }, [createElement("section", null, [createElement("article", null, [createElement("h2", null, ["Installation instructions"]), createElement("p", null, ["Please see our installation instructions for ", createElement("a", {
          attrs : {
            href : "/photoshop/support#osx-installation-instructions"
          }
        }, ["Mac"]), " or for ", createElement("a", {
          attrs : {
            href : "/photoshop/support#windows-installation-instructions"
          }
        }, ["Windows"]), "."])])])]);
      }
    }, p;
  }(instance.a)) || mobile_redirect;
  var currentRelations = Object(__WEBPACK_IMPORTED_MODULE_3__foundation_util_motion__.createDecorator)(function(t, k) {
    t[k] = t.methods[k];
    delete t.methods[k];
  });
  var addedRelations = currentRelations;
  var NEW_GIF = (Rr = $compile()({
    props : {
      header : String,
      details : String
    }
  }))(defaultTrafficFilePath = function() {
    /**
     * @return {undefined}
     */
    function m() {
      fire(this, m);
      /** @type {boolean} */
      this.open = false;
    }
    return m.prototype.mounted = function() {
      /** @type {boolean} */
      this.open = true;
    }, m.prototype.render = function(createElement) {
      return createElement(form, {
        on : {
          close : this.close
        },
        attrs : {
          show : this.open,
          width : 350
        }
      }, [createElement("h2", null, [this.header]), createElement("p", null, [this.details]), createElement("button", {
        class : "developers",
        on : {
          click : this.refresh
        }
      }, ["Reload page"]), createElement("button", {
        on : {
          click : this.close
        }
      }, ["Nah, I\u2019ll stay here"])]);
    }, m.prototype.refresh = function(instance) {
      window.location.reload(false);
    }, m.prototype.close = function(instance) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return this.open = false, context$5$0.next = 3, regeneratorRuntime.awrap(new Promise(function(_nextEventFunc) {
                return setTimeout(_nextEventFunc, 0);
              }));
            case 3:
              this.$destroy();
            case 4:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, m;
  }()) || defaultTrafficFilePath;
  /**
   * @param {!Object} retry
   * @return {?}
   */
  var next = function(retry) {
    var fiddleHeader;
    var leafDetails;
    return regeneratorRuntime.async(function(context$5$0) {
      for (;;) {
        switch(context$5$0.prev = context$5$0.next) {
          case 0:
            /** @type {string} */
            fiddleHeader = "Oops! Something went wrong";
            /** @type {string} */
            leafDetails = "An error occurred while loading data. The error was: " + retry.message + ".";
            run("body", NEW_GIF, {
              header : fiddleHeader,
              details : leafDetails
            });
          case 3:
          case "end":
            return context$5$0.stop();
        }
      }
    }, null, this);
  };
  /**
   * @param {!Object} stat
   * @param {!Object} req
   * @param {?} cmd
   * @return {?}
   */
  var cb = function(stat, req, cmd) {
    var m;
    return regeneratorRuntime.async(function(self) {
      for (;;) {
        switch(self.prev = self.next) {
          case 0:
            return self.prev = 0, self.next = 3, regeneratorRuntime.awrap(stat.get());
          case 3:
            m = self.sent;
            cmd(function(state) {
              state.data = m;
            });
            /** @type {number} */
            self.next = 16;
            break;
          case 7:
            if (self.prev = 7, self.t0 = self.catch(0), !self.t0.message.includes("not found")) {
              /** @type {number} */
              self.next = 14;
              break;
            }
            return cmd(), self.abrupt("return");
          case 14:
            if ("Please log in first" == self.t0.message) {
              options.clear();
            } else {
              next(self.t0);
            }
          case 15:
            if ("/" == req.path) {
              cmd();
            } else {
              cmd(false);
            }
          case 16:
          case "end":
            return self.stop();
        }
      }
    }, null, this, [[0, 7]]);
  };
  var out = $("licenses");
  var pair_target = $compile()((parent = function(data) {
    /**
     * @return {?}
     */
    function error() {
      var w;
      var result;
      var value;
      check(this, error);
      /** @type {number} */
      var i = arguments.length;
      /** @type {!Array} */
      var args = Array(i);
      /** @type {number} */
      var l = 0;
      for (; l < i; l++) {
        args[l] = arguments[l];
      }
      return w = result = process(this, data.call.apply(data, [this].concat(args))), result.data = [], value = w, process(result, value);
    }
    return setState(error, data), error.prototype.beforeRouteEnter = function(objIDs, fields, res) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(cb(out, fields, res));
            case 2:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, error.prototype.render = function(createElement) {
      return createElement("div", {
        class : "photoshop"
      }, [createElement("main", null, [createElement(Exceptions, {
        attrs : {
          licenses : this.data
        }
      }, [])]), createElement(Notifications, {
        attrs : {
          licenses : this.data
        }
      }, []), createElement("main", null, [createElement(ButtonIcon, {
        attrs : {
          licenses : this.data
        }
      }, [])])]);
    }, error;
  }(instance.a), function(target, key, headerPlusSegments, source, context) {
    var desc = {};
    return Object.keys(source).forEach(function(key) {
      desc[key] = source[key];
    }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, ("value" in desc || desc.initializer) && (desc.writable = true), desc = headerPlusSegments.slice().reverse().reduce(function(descriptor, decorator) {
      return decorator(target, key, descriptor) || descriptor;
    }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, key, desc), desc = null), desc;
  }(parent.prototype, "beforeRouteEnter", [addedRelations], Object.getOwnPropertyDescriptor(parent.prototype, "beforeRouteEnter"), parent.prototype), previous = parent)) || previous;
  var to1 = $("subscription/key");
  var currentDoc = ($r = $compile()({
    props : ["subscription"]
  }))(_Element_prototype = function(a) {
    /**
     * @return {?}
     */
    function Collection() {
      var Model;
      var response;
      var o;
      observe(this, Collection);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return Model = response = handler(this, a.call.apply(a, [this].concat(args))), response.showReset = false, response.highlight = false, o = Model, handler(response, o);
    }
    return supportsSubclassing(Collection, a), Collection.prototype.render = function(h) {
      var $scope = this;
      return h("div", {
        class : {
          apikey : true,
          highlight : this.highlight
        }
      }, [this.renderModal(h), h("h2", null, ["Grab your API key"]), this.subscription.identifier ? h("div", {
        class : "key"
      }, [this.subscription.identifier, h("input", {
        class : "key small",
        attrs : {
          type : "text",
          readonly : true,
          onclick : "this.select()"
        },
        domProps : {
          value : this.subscription.key
        }
      }, [])]) : h("input", {
        class : "key",
        attrs : {
          type : "text",
          readonly : true,
          onclick : "this.select()"
        },
        domProps : {
          value : this.subscription.key
        }
      }, []), h("p", null, ["You can ", h("a", {
        on : {
          click : function() {
            /** @type {boolean} */
            $scope.showReset = true;
          }
        }
      }, ["reset your key"]), " in case something bad happened to it.", h("br", null, []), "Detailed information and code samples are available in the ", h("a", {
        attrs : {
          href : "/developers/reference"
        }
      }, ["API reference"]), "."])]);
    }, Collection.prototype.renderModal = function(h) {
      var $scope = this;
      return h(form, {
        attrs : {
          show : this.showReset,
          width : 560
        },
        on : {
          close : function() {
            /** @type {boolean} */
            $scope.showReset = false;
          }
        }
      }, [h("h2", null, ["Please confirm you are ", h("em", null, ["really, really"]), " sure you want to ", h("strong", null, ["reset your API key"])]), h("p", null, ["Resetting your API key will invalidate your current key. You will need to update all applications and integrations that use your key. Resetting your key cannot be undone!"]), h("form", {
        class : "main developers",
        on : {
          submit : this.create
        }
      }, [h("p", null, [h("em", null, ["Are you sure you want to reset your API key?"])]), h("button", {
        attrs : {
          autocomplete : "off"
        },
        class : "danger"
      }, ["Yes, I\u2019m sure"]), h("button", {
        attrs : {
          autocomplete : "off"
        },
        on : {
          click : function(event) {
            /** @type {boolean} */
            $scope.showReset = false;
            event.preventDefault();
          }
        }
      }, ["No, get me out of here"]), h("span", {
        class : "spinner"
      }, [h("span", {
        class : "circle"
      }, [])]), h("span", {
        class : "success"
      }, [h("span", {
        class : "checkfirst"
      }, [h("span", {
        class : "firstsuccess"
      }, []), h("span", {
        class : "checklast"
      }, [h("span", {
        class : "lastsuccess"
      }, [])])])])])]);
    }, Collection.prototype.create = function(target) {
      var client;
      var tmp;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return target.preventDefault(), self.prev = 1, this.highlight = false, self.next = 5, regeneratorRuntime.awrap(to1.patch());
            case 5:
              client = self.sent;
              tmp = client.key;
              this.subscription.key = tmp;
              /** @type {boolean} */
              this.highlight = true;
              /** @type {boolean} */
              this.showReset = false;
              /** @type {number} */
              self.next = 16;
              break;
            case 12:
              /** @type {number} */
              self.prev = 12;
              self.t0 = self.catch(1);
              /** @type {boolean} */
              this.showReset = false;
              next(self.t0);
            case 16:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[1, 12]]);
    }, Collection;
  }(instance.a)) || _Element_prototype;
  var ODFDocumentElement = (qr = $compile()({
    props : ["subscription"]
  }))(smartDraft = function(object) {
    /**
     * @return {?}
     */
    function val() {
      return first(this, val), setValue(this, object.apply(this, arguments));
    }
    return promisify(val, object), val.prototype.render = function(h) {
      if ("flexible" === this.subscription.plan) {
        return h("div", {
          class : "usage"
        }, [h("h2", null, ["Your usage this month"]), h("p", {
          class : "total"
        }, ["Compressed images: ", h("strong", {
          class : "free"
        }, [expect(this.subscription.used)])]), h("p", {
          class : "notice"
        }, [" Current amount due is $", h("strong", null, [expect(this.subscription.amountDue, 2)])])]);
      }
      /** @type {string} */
      var type = this.subscription.used < this.subscription.available ? "free" : "full";
      return h("div", {
        class : "usage"
      }, [h("h2", null, ["Your usage this month"]), h("p", {
        class : "total"
      }, ["Compressed images: ", h("strong", {
        class : type
      }, [expect(this.subscription.used)]), " / ", h("strong", null, [expect(this.subscription.available)])]), "limited" === this.subscription.plan && this.subscription.amountDue > 0 ? h("p", {
        class : "notice"
      }, ["Payment due next month is $", h("strong", null, [expect(this.subscription.amountDue, 2)])]) : "free" === this.subscription.plan || "limited" === this.subscription.plan ? h("p", {
        class : "notice"
      }, ["Enter your payment details below to compress more images."]) : h("p", {
        class : "notice"
      }, ["Monthly subscription fee is $", h("strong", null, [expect(this.subscription.price, 2)])])]);
    }, val;
  }(instance.a)) || smartDraft;
  var flash = $("subscription");
  var namespace = (Yr = $compile()({
    props : ["subscription"]
  }))(none = function(node) {
    /**
     * @return {?}
     */
    function render() {
      var json;
      var data;
      var r;
      lookup(this, render);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return json = data = debug(this, node.call.apply(node, [this].concat(args))), data.card = "", data.vatNumber = null, data.paymentDetails = {}, data.pending = false, data.success = false, data.error = null, r = json, debug(data, r);
    }
    return query(render, node), render.prototype.mounted = function() {
      if ("limited" === this.subscription.plan) {
        /** @type {string} */
        this.card = "downgrade";
      } else {
        if (this.subscription.account.card) {
          /** @type {string} */
          this.card = "existing";
        } else {
          /** @type {string} */
          this.card = "new";
        }
      }
      this.vatNumber = this.subscription.account.vatNumber;
    }, render.prototype.render = function(h) {
      var data = this;
      return h("form", {
        class : {
          developers : true,
          success : this.success,
          pending : this.pending
        },
        on : {
          submit : this.submit
        }
      }, [h("div", {
        class : "details"
      }, [h("h2", null, ["Payment details"]), this.subscription.account.card ? h("p", null, ["You can update your account and payment details below."]) : h("p", null, ["Enter your payment details below to compress more images."]), this.error ? h("section", {
        class : "error"
      }, [h("span", {
        class : "icon"
      }, []), this.error]) : void 0, h(div, {
        attrs : {
          checked : this.card,
          card : this.subscription.account.card
        },
        on : {
          switch : function(payload) {
            /** @type {string} */
            data.card = payload;
          },
          change : function(target) {
            /** @type {!Object} */
            data.paymentDetails = target;
          }
        }
      }, [!this.subscription.account.card || "flexible" !== this.subscription.plan && "limited" !== this.subscription.plan ? void 0 : h("label", {
        slot : "downgrade",
        attrs : {
          for : "downgrade"
        }
      }, ["Limit to ", h("strong", null, ["500"]), " free compressions", h("br", null, [])])]), h(style, {
        attrs : {
          vat : this.vatNumber || this.subscription.account.vatNumber
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            data.vatNumber = target;
          }
        }
      }, []), h("div", {
        class : "terms"
      }, [h("p", null, ["By submitting you agree to the ", h("a", {
        attrs : {
          href : "/terms"
        }
      }, ["terms of use"]), "."])]), h("div", {
        class : "submit"
      }, [h("p", null, [h("button", null, ["Update payment details"]), h("span", {
        class : "spinner"
      }, [h("span", {
        class : "circle"
      }, [])]), h("span", {
        class : "success"
      }, [h("span", {
        class : "checkfirst"
      }, [h("span", {
        class : "firstsuccess"
      }, []), h("span", {
        class : "checklast"
      }, [h("span", {
        class : "lastsuccess"
      }, [])])])])])])]), h("div", {
        class : "info"
      }, [h("h2", null, ["Account details"]), "flexible" === this.subscription.plan ? h("p", null, ["You will be billed at the beginning of every month."]) : "free" === this.subscription.plan || "limited" === this.subscription.plan ? h("p", null, ["You are currently limited to ", h("strong", null, [this.subscription.available, " uploads"]), " per month."]) : h("p", null, ["You are currently using a payment plan with a fixed monthly fee."]), h("p", null, ["The account is linked to ", h("em", null, 
      [this.subscription.account.mail]), ". Contact us at ", h("a", {
        attrs : {
          href : "mailto:support@tinypng.com"
        }
      }, ["support@tinypng.com"]), " if you want to change your email address or if you need some help."]), h("p", null, ["TinyPNG is operated by Tinify B.V. (VAT number NL853431322B01). Payment details are securely handled by our payment partner Stripe. You will be billed for your API usage per calendar month."])])]);
    }, render.prototype.submit = function(target) {
      var item;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return target.preventDefault(), this.pending = true, this.error = null, self.prev = 3, self.next = 6, regeneratorRuntime.awrap(flash.patch(null, Object.assign({
                card : this.card,
                vatNumber : this.vatNumber
              }, this.paymentDetails)));
            case 6:
              item = self.sent;
              /** @type {boolean} */
              this.success = true;
              if (!("new" !== this.card || this.subscription.account.card)) {
                /** @type {string} */
                this.card = "existing";
              }
              this.$emit("success", item);
              /** @type {number} */
              self.next = 15;
              break;
            case 12:
              /** @type {number} */
              self.prev = 12;
              self.t0 = self.catch(3);
              this.error = self.t0.message;
            case 15:
              return self.prev = 15, this.pending = false, self.finish(15);
            case 18:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[3, 12, 15, 18]]);
    }, render;
  }(instance.a)) || none;
  var manager = $("subscription/notifications");
  var OBJECT = (Ur = $compile()({
    props : ["subscription"]
  }))(publicSassPath = function(t) {
    /**
     * @return {?}
     */
    function update() {
      var a;
      var res;
      var data;
      log(this, update);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return a = res = patch(this, t.call.apply(t, [this].concat(args))), res.pending = false, res.success = false, res.enabled = false, data = a, patch(res, data);
    }
    return trigger(update, t), update.prototype.mounted = function() {
      /** @type {boolean} */
      this.enabled = void 0 != this.subscription.notifyLevel;
    }, update.prototype.render = function(createElement) {
      var that = this;
      return createElement("section", {
        class : "notify"
      }, [createElement("form", {
        class : {
          developers : true,
          success : this.success,
          pending : this.pending
        },
        on : {
          submit : this.submit
        }
      }, [createElement("h2", null, ["Notifications"]), this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : void 0, createElement("p", null, [createElement("input", {
        attrs : {
          id : "notify",
          type : "checkbox",
          autocomplete : "off"
        },
        domProps : {
          checked : this.enabled
        },
        on : {
          change : function(target) {
            that.enabled = target.target.checked;
          }
        }
      }, []), createElement("label", {
        attrs : {
          for : "notify"
        }
      }, ["Send me an email when I reach"]), createElement("span", {
        class : "compressions"
      }, [createElement("input", {
        class : "number",
        attrs : {
          type : "text",
          disabled : !this.enabled
        },
        on : {
          input : function(target) {
            that.subscription.notifyLevel = target.target.value;
          }
        },
        domProps : {
          value : this.subscription.notifyLevel
        }
      }, []), "compressions"]), createElement("span", {
        class : "submit"
      }, [createElement("button", null, ["Update"]), createElement("span", {
        class : "spinner"
      }, [createElement("span", {
        class : "circle"
      }, [])]), createElement("span", {
        class : "success"
      }, [createElement("span", {
        class : "checkfirst"
      }, [createElement("span", {
        class : "firstsuccess"
      }, []), createElement("span", {
        class : "checklast"
      }, [createElement("span", {
        class : "lastsuccess"
      }, [])])])])])])])]);
    }, update.prototype.submit = function(target) {
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return this.pending = true, target.preventDefault(), self.prev = 2, self.next = 5, regeneratorRuntime.awrap(manager.patch(null, {
                level : this.enabled ? this.subscription.notifyLevel : void 0
              }));
            case 5:
              /** @type {boolean} */
              this.success = true;
              /** @type {number} */
              self.next = 12;
              break;
            case 8:
              /** @type {number} */
              self.prev = 8;
              self.t0 = self.catch(2);
              /** @type {boolean} */
              this.success = false;
              this.error = self.t0.message;
            case 12:
              /** @type {boolean} */
              this.pending = false;
            case 13:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[2, 8]]);
    }, update;
  }(instance.a)) || publicSassPath;
  var component = __webpack_require__(110);
  var eqPartial = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var audio = (Gr = $compile()({
    props : {
      pricing : {
        type : Array,
        default : function() {
          return component.pricing.normal;
        }
      }
    }
  }))(Hr = function(c) {
    /**
     * @return {?}
     */
    function render() {
      var menu;
      var item;
      var type;
      n(this, render);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return menu = item = walk(this, c.call.apply(c, [this].concat(args))), item.maximumQuantity = 5E6, item.quantity = "2 000", item.price = "$13.50", item.tier = "small", type = menu, walk(item, type);
    }
    return start(render, c), render.prototype.mounted = function() {
      this.moveSlider(this.sliderPosition(2E3, this.maximumQuantity));
    }, render.prototype.render = function(createElement) {
      var items = this;
      return createElement("section", {
        class : "pricing",
        attrs : {
          "data-pricing" : ""
        }
      }, [createElement("h2", {
        attrs : {
          id : "pricing"
        }
      }, ["Pricing"]), createElement("div", {
        class : "leftcolumn"
      }, [createElement("p", null, ["You only pay for what you use. The first 500 compressions each month are free. You will ", createElement("strong", null, ["only be billed"]), " if you compress more than 500 images."])]), createElement("div", {
        class : "rightcolumn"
      }, [createElement("p", null, ["There are no subscription costs, ", createElement("strong", null, ["no file size limits"]), " and no minimum fees. Only successful compressions will be charged."])]), createElement("div", {
        class : "break"
      }, []), createElement("div", {
        class : "leftcolumn"
      }, [createElement("div", {
        class : "prices",
        attrs : {
          id : "pricetable"
        }
      }, [createElement("h3", null, [createElement("span", {
        class : "description"
      }, ["Images uploaded with\u00a0API"]), createElement("span", {
        class : "price"
      }, ["Price per image"])]), createElement("ul", null, [this.pricing.map(function(newItem) {
        return items.pricingRow(createElement, newItem);
      })])]), createElement("div", {
        class : "arrow"
      }, [createElement("span", null, ["\u2026 or simply calculate your costs"]), createElement("figure", null, [])])]), createElement("div", {
        class : "rightcolumn"
      }, [createElement("div", {
        class : "calculator"
      }, [createElement("figure", {
        class : ["panda", this.tier]
      }, []), createElement("div", {
        class : "content"
      }, [createElement("h2", null, ["Price calculator"]), createElement("p", null, [createElement("label", null, ["Compressed images:"]), createElement("strong", {
        class : "quantity",
        attrs : {
          contenteditable : "true"
        },
        on : {
          keydown : this.onKeyPress,
          keyup : this.onChangeValue,
          blur : this.onBlurValue
        }
      }, [this.quantity])]), createElement("div", {
        class : "priceslider",
        on : {
          click : this.onClick
        }
      }, [createElement("span", {
        class : "active"
      }, []), createElement("span", {
        class : "handle",
        attrs : {
          tabindex : "0",
          role : "slider",
          "aria-valuemin" : "0",
          "aria-valuemax" : "100",
          "aria-valuenow" : Math.round(this.filled)
        },
        on : {
          mousedown : this.onStartDrag
        }
      }, [])]), createElement("p", null, [createElement("strong", {
        class : "price"
      }, [this.price]), createElement("span", null, ["per month"])])])])]), createElement("div", {
        class : "break"
      }, []), createElement("div", {
        class : "leftcolumn"
      }, [createElement("p", null, ["When you reach your compression limit the API will return the error message: ", createElement("em", null, ["Your monthly limit has been exceeded"]), ". Upgrade your account by entering your payment details on the API account page."])]), createElement("div", {
        class : "rightcolumn"
      }, [createElement("p", null, ["If you entered your payment details and want to disable using paid compressions, you can limit your account to free compressions only at any time on your account page."])]), createElement("div", {
        class : "break"
      }, []), createElement("div", {
        class : "leftcolumn"
      }, [createElement("h2", null, ["Corporate subscriptions"]), createElement("p", null, ["For corporations and large businesses we offer special subscription plans. They come with fixed fees, fair usage policy, priority support and optional yearly bank payment. Contact us at ", createElement("a", {
        attrs : {
          href : "mailto:support@tinypng.com"
        }
      }, ["support@tinypng.com"]), "."])]), createElement("div", {
        class : "rightcolumn"
      }, [createElement("h2", null, ["Documentation"]), createElement("p", null, ["For documentation and code examples in different programming languages you can ", createElement("a", {
        attrs : {
          href : "/developers/reference"
        }
      }, ["explore the API Reference"]), "."])])]);
    }, render.prototype.pricingRow = function(createElement, item) {
      return createElement("li", {
        attrs : {
          "data-size" : item.size,
          "data-price" : item.price
        }
      }, [0 == item.price ? createElement("span", {
        class : "description"
      }, ["First ", createElement("strong", null, [expect(item.size), " images"]), " per\u00a0month"]) : item.size ? createElement("span", {
        class : "description"
      }, ["Next ", createElement("strong", null, [expect(item.size), " images"]), " per\u00a0month"]) : createElement("span", {
        class : "description"
      }, ["After ", createElement("strong", null, [expect(this.totalSize), " images"]), " per\u00a0month"]), 0 == item.price ? createElement("span", {
        class : "price"
      }, [createElement("strong", {
        class : "free"
      }, ["free"])]) : createElement("span", {
        class : "price"
      }, [createElement("strong", null, ["$", expect(item.price / 100, 3)]), " per\u00a0image"])]);
    }, render.prototype.moveSlider = function(e) {
      this.updateMetrics();
      this.updateSlider(e);
      this.updateQuotes(e);
    }, render.prototype.onKeyPress = function(event) {
      /** @type {(Element|null)} */
      var viewSubjectsViewTitle = document.querySelector(".priceslider").parentElement.querySelector(".quantity");
      /** @type {string} */
      var hierarchySelector = String.fromCharCode(event.keyCode);
      if (!(13 !== event.keyCode && 27 !== event.keyCode)) {
        viewSubjectsViewTitle.blur();
        window.getSelection().removeAllRanges();
        event.preventDefault();
      }
      if (hierarchySelector.match(/[A-Za-z]/g)) {
        event.preventDefault();
      }
    }, render.prototype.onChangeValue = function(value) {
      this.sanitizeQuantity();
      var e = this.retrieveQuantity();
      var g = this.sliderPosition(e, this.maximumQuantity);
      this.updateSlider(g);
      this.updateVisual(e);
    }, render.prototype.onBlurValue = function(mutation) {
      var v = this.retrieveQuantity();
      mutation.target.textContent = this.numberFormat(v) || 0;
    }, render.prototype.onStartDrag = function() {
      var opts = this;
      this.updateMetrics();
      /**
       * @param {!Event} e
       * @return {?}
       */
      this.documentMoveListener = function(e) {
        return opts.onDrag(e);
      };
      /**
       * @return {?}
       */
      this.documentUpListener = function() {
        return opts.onStopDrag();
      };
      document.addEventListener("mousemove", this.documentMoveListener);
      document.addEventListener("mouseup", this.documentUpListener);
      document.body.classList.add("noselect");
    }, render.prototype.onDrag = function(event) {
      /** @type {number} */
      var process = Math.max(0, Math.min(100, 100 * (event.clientX - this.metrics.left) / this.metrics.width));
      this.updateSlider(process);
      this.updateQuotes(process);
    }, render.prototype.onStopDrag = function() {
      document.removeEventListener("mousemove", this.documentMoveListener);
      document.removeEventListener("mouseup", this.documentUpListener);
      document.body.classList.remove("noselect");
    }, render.prototype.onClick = function(e) {
      this.updateMetrics();
      this.onDrag(e);
    }, render.prototype.updateMetrics = function() {
      /** @type {!ClientRect} */
      var foodIconDefinition = document.querySelector(".priceslider").querySelector(".handle").getBoundingClientRect();
      /** @type {!ClientRect} */
      var restoreOptions = document.querySelector(".priceslider").getBoundingClientRect();
      this.metrics = {
        left : restoreOptions.left,
        margin : foodIconDefinition.width / 2,
        width : restoreOptions.width
      };
    }, render.prototype.updateSlider = function(newValue) {
      /** @type {string} */
      document.querySelector(".priceslider").querySelector(".handle").style.left = newValue + "%";
      /** @type {string} */
      document.querySelector(".priceslider").querySelector(".active").style.width = newValue + "%";
      /** @type {number} */
      this.filled = newValue;
    }, render.prototype.updateQuotes = function(t) {
      var v = this.sliderQuantity(t, this.maximumQuantity);
      document.querySelector(".priceslider").parentElement.querySelector(".quantity").textContent = this.numberFormat(v);
      this.updateVisual(v);
    }, render.prototype.updateVisual = function(count) {
      var blurAmount2 = this.calcPrice(count);
      this.price = "$" + this.numberFormat(blurAmount2 / 100, 2);
      /** @type {string} */
      this.tier = count <= 500 ? "free" : count < 1E4 ? "small" : "large";
    }, render.prototype.sanitizeQuantity = function() {
      /** @type {string} */
      var name = document.querySelector(".priceslider").parentElement.querySelector(".quantity").textContent;
      /** @type {string} */
      var content = name.replace(/[^\d\s]+/g, "");
      var v = this.retrieveQuantity();
      if (v === this.maximumQuantity) {
        content = this.numberFormat(v);
      }
      if (name !== content) {
        document.querySelector(".priceslider").parentElement.querySelector(".quantity").textContent = content;
      }
    }, render.prototype.retrieveQuantity = function() {
      /** @type {string} */
      var number = document.querySelector(".calculator").parentElement.querySelector(".quantity").textContent;
      return number = number.replace(/[\D]+/g, ""), number = +number, number = Math.min(number, this.maximumQuantity);
    }, render.prototype.numberFormat = function(v, precision) {
      var ret = v.toFixed(precision || 0);
      var end = ret.indexOf(".");
      if (-1 === end) {
        end = ret.length;
      }
      /** @type {number} */
      end = end - 3;
      for (; end > 0; end = end - 3) {
        ret = ret.substring(0, end) + "\u2009" + ret.substring(end);
      }
      return ret;
    }, render.prototype.calcPrice = function(i) {
      /** @type {number} */
      var ret = 0;
      var type;
      for (type in this.pricing) {
        var opts = this.pricing[type];
        var index = opts.size ? Math.min(opts.size, i) : i;
        if (0 === index) {
          return ret;
        }
        /** @type {number} */
        ret = ret + Math.round(opts.price * index);
        /** @type {number} */
        i = i - index;
      }
      return ret;
    }, render.prototype.sliderPosition = function(n, e) {
      var value;
      return n = n / 20, e = e / 20, value = Math.log(n) / Math.log(10) * (100 / (Math.log(e) / Math.log(10))) + 0, value < 0 && (value = 0), value;
    }, render.prototype.precisionRound = function(y, max) {
      if (y <= 0) {
        return 0;
      }
      var retinaScale;
      /** @type {number} */
      var n = Math.log(y) / Math.log(10) - max;
      /** @type {number} */
      var scale_highlight = Math.pow(10, Math.floor(n));
      /** @type {number} */
      var n10 = n % 1;
      return retinaScale = n10 < .2 ? .1 : n10 < .5 ? .25 : n10 < .9 ? .5 : 1, Math.round(y / scale_highlight / retinaScale) * scale_highlight * retinaScale;
    }, render.prototype.sliderQuantity = function(m, t) {
      var n;
      var j;
      return t = t / 20, n = Math.pow(10, (m - 0) / (100 / (Math.log(t) / Math.log(10)))), j = Math.round(this.precisionRound(n, 0)), 0 === m && (j = 0), 100 === m && (j = t), j = j * 20;
    }, eqPartial(render, [{
      key : "totalSize",
      get : function() {
        return this.pricing.map(function(fileOne) {
          return fileOne.size || 0;
        }).reduce(function(buckets, name) {
          return buckets + name;
        }, 0);
      }
    }]), render;
  }(instance.a)) || Hr;
  var children = $("subscription");
  var RemoteStatsContainer = $compile()((OverlayImage = function(right) {
    /**
     * @return {?}
     */
    function T() {
      var key;
      var val;
      var result;
      allocUnsafe(this, T);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return key = val = encode(this, right.call.apply(right, [this].concat(args))), val.data = {}, result = key, encode(val, result);
    }
    return add(T, right), T.prototype.beforeRouteEnter = function(objIDs, fields, res) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(cb(children, fields, res));
            case 2:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, T.prototype.render = function(createElement) {
      var tErr = this;
      return Object.keys(this.data).length ? createElement("div", {
        class : "developers"
      }, [this.renderActivatedModal(createElement), createElement("main", null, [createElement("section", null, [createElement(currentDoc, {
        attrs : {
          subscription : this.data
        }
      }, []), createElement(ODFDocumentElement, {
        attrs : {
          subscription : this.data
        }
      }, []), "free" !== this.data.plan && "limited" !== this.data.plan && "flexible" !== this.data.plan ? createElement("div", {
        class : "notification"
      }, [createElement("p", null, ["You are currently using a payment plan with a fixed monthly fee. You can stay on this plan or you can switch to flexible pricing. If you like to switch, please contact us at \u00a0", createElement("a", {
        attrs : {
          href : "mailto:support@tinypng.com"
        }
      }, ["support@tinypng.com"]), ". With flexible pricing you will be charged on a pay-per-use basis and if you don\u2019t upload any images you will not be charged. This system also creates an invoice every month. \u00a0", createElement("a", {
        attrs : {
          href : "#pricing"
        }
      }, ["Find out more details below."])])]) : void 0])]), createElement("main", null, [createElement("section", {
        class : "payment"
      }, [createElement(namespace, {
        attrs : {
          subscription : this.data
        },
        on : {
          success : function(text) {
            /** @type {!Object} */
            tErr.data = text;
          }
        }
      }, [])])]), createElement("main", {
        class : "ribbon"
      }, [createElement(OBJECT, {
        attrs : {
          subscription : this.data
        }
      }, [])]), createElement("main", {
        attrs : {
          id : "pricing"
        }
      }, [createElement(audio, {
        attrs : {
          pricing : this.data.pricing
        }
      }, [])])]) : createElement("div", {
        class : "developers"
      }, [createElement("main", null, [createElement("section", null, [createElement("h2", null, ["You do not have a Developer API key yet"]), createElement("p", null, ["Go to the ", createElement("a", {
        attrs : {
          href : "/developers"
        }
      }, ["Developer API"]), " page for more information and to obtain your API key."])])])]);
    }, T.prototype.renderActivatedModal = function(h) {
      var event = this;
      return h(form, {
        attrs : {
          show : this.data.activated,
          width : 560
        },
        on : {
          close : function() {
            /** @type {boolean} */
            event.data.activated = false;
          }
        }
      }, [h("h2", null, [this.data.identifier || "Plugin", " has been activated!"]), h("p", null, ["You are ready to start compressing images with TinyPNG. On this page you can change your payment or account details. You can always return to this page again via the ", h("a", {
        attrs : {
          href : "https://tinypng.com/developers"
        }
      }, ["TinyPNG website"]), "."]), this.data.link ? [h("button", {
        on : {
          click : function() {
            window.location.href = event.data.link;
          }
        }
      }, ["Return to plugin"]), h("button", {
        class : "unstyled",
        on : {
          click : function() {
            /** @type {boolean} */
            event.data.activated = false;
          }
        }
      }, ["No, stay here"])] : h("input", {
        attrs : {
          type : "button",
          value : "Okay, got it!"
        },
        on : {
          click : function() {
            /** @type {boolean} */
            event.data.activated = false;
          }
        },
        class : "developers"
      }, [])]);
    }, T;
  }(instance.a), function(target, key, headerPlusSegments, source, context) {
    var desc = {};
    return Object.keys(source).forEach(function(key) {
      desc[key] = source[key];
    }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, ("value" in desc || desc.initializer) && (desc.writable = true), desc = headerPlusSegments.slice().reverse().reduce(function(descriptor, decorator) {
      return decorator(target, key, descriptor) || descriptor;
    }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, key, desc), desc = null), desc;
  }(OverlayImage.prototype, "beforeRouteEnter", [addedRelations], Object.getOwnPropertyDescriptor(OverlayImage.prototype, "beforeRouteEnter"), OverlayImage.prototype), entryToSend = OverlayImage)) || entryToSend;
  var $mask = (Jr = $compile()({
    props : ["invoices"]
  }))(MLA = function(constructor) {
    /**
     * @return {?}
     */
    function type() {
      return value(this, type), test(this, constructor.apply(this, arguments));
    }
    return has(type, constructor), type.prototype.render = function($) {
      return $("section", {
        class : "invoices"
      }, [this.invoices.length ? $("div", null, [$("h2", null, ["Invoices"]), $("table", null, [$("thead", null, [$("tr", null, [$("th", {
        class : "hide-small"
      }, ["Invoice"]), $("th", null, ["Description"]), $("th", {
        class : "hide-mobile"
      }, ["Date"]), $("th", {
        class : "amount"
      }, ["Amount"]), $("th", null, ["Status"])])]), $("tbody", null, [this.invoices.map(function(e) {
        return $("tr", {
          class : "border"
        }, [$("td", {
          class : "hide-small"
        }, [e.number]), $("td", null, [$("router-link", {
          attrs : {
            to : {
              query : {
                id : e.number
              }
            },
            replace : true
          }
        }, [e.description])]), $("td", {
          class : "hide-mobile"
        }, [filter()("%Y-%m-%d", new Date(e.created))]), $("td", {
          class : "amount"
        }, ["$", expect(e.amount / 100, 2)]), $("td", null, [e.status])]);
      })])]), this.invoices[0].address && this.invoices[0].address.length ? $("div", {
        class : "column"
      }, [$("h2", null, ["Billing address information"]), $("p", null, ["The following billing address is used for the latest invoice. If needed you can modify this information within 30 days of invoice creation."]), $("p", null, [this.invoices[0].address.map(function(canCreateDiscussions) {
        return [canCreateDiscussions, $("br", null, [])];
      }), this.invoices[0].vatNumber]), $("p", null, ["This information will also be used when creating new invoices in future."])]) : $("div", {
        class : "column"
      }, [$("h2", null, ["Custom billing address"]), $("p", null, ["If needed you can modify the company information on your latest invoice. To do so click on the invoice and then click on the address to modify it. You can modify this information within 30 days after invoice creation."])])]) : $("p", null, ["You don\u2019t have any invoices."])]);
    }, type;
  }(instance.a)) || MLA;
  var self = $("invoices");
  var ApplyMods = (Qr = $compile()({
    props : ["invoice"]
  }))(DEFAULT_RECONNECT_TIME_INCREASE = function(proto) {
    /**
     * @return {?}
     */
    function e() {
      var n;
      var o;
      var key;
      getDate(this, e);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return n = o = notEmpty(this, proto.call.apply(proto, [this].concat(args))), o.modify = false, key = n, notEmpty(o, key);
    }
    return exports(e, proto), e.prototype.render = function(h) {
      var $scope = this;
      if (this.invoice) {
        return h(form, {
          attrs : {
            show : true
          },
          on : {
            close : this.close
          }
        }, [h("article", {
          class : "invoice"
        }, [h("p", null, ["Tinify B.V.", h("br", null, []), "Meeuwenlaan 100, Amsterdam", h("br", null, []), "The Netherlands", h("br", null, [])]), this.modify ? h("p", {
          class : "modify"
        }, [h("b", null, ["Billed to"]), h("form", {
          on : {
            submit : this.update
          }
        }, [h("textarea", {
          attrs : {
            placeholder : this.invoice.fullName
          },
          on : {
            input : this.input
          }
        }, [this.invoice.address && this.invoice.address.length ? this.invoice.address.join("\n") : void 0]), h("small", null, ["This information will automatically be used on future invoices."]), h("button", null, ["Save"])])]) : h("p", {
          class : {
            show : this.invoice.open
          },
          on : {
            click : function() {
              $scope.modify = $scope.invoice.open;
            }
          }
        }, [h("b", null, ["Billed to"]), this.invoice.open ? h("a", null, [" (modify)"]) : void 0, h("br", null, []), this.invoice.address && this.invoice.address.length ? this.invoice.address.map(function(canCreateDiscussions) {
          return [canCreateDiscussions, h("br", null, [])];
        }) : [this.invoice.fullName, h("br", null, [])], this.invoice.mail, h("br", null, []), this.invoice.vatNumber ? "VAT number " + this.invoice.vatNumber : null]), h("p", null, [h("b", null, ["Invoice #", this.invoice.number]), h("br", null, []), filter()("%B %o, %Y  %H:%M", new Date(this.invoice.created))]), h("div", {
          class : "overflow"
        }, [h("table", {
          class : "invoice"
        }, [h("thead", null, [h("tr", null, [h("th", null, ["Description"]), h("th", null, ["Quantity"]), h("th", null, ["Amount"]), h("th", null, [100 * this.invoice.specification[0].vatRate, "% VAT"]), h("th", null, ["Total Amount"])])]), h("tbody", null, [this.invoice.specification.map(function(v) {
          return h("tr", null, [h("td", null, [v.description]), h("td", null, [v.quantity]), h("td", null, ["$", ((v.totalAmount - v.vatAmount) / 100).toFixed(2)]), h("td", null, ["$", (v.vatAmount / 100).toFixed(2)]), h("td", null, ["$", (v.totalAmount / 100).toFixed(2)])]);
        }), this.invoice.specification.length > 1 ? h("tr", {
          class : "strong"
        }, [h("td", null, ["Total"]), h("td", null, [this.invoice.quantity]), h("td", null, ["$", ((this.invoice.amount - this.invoice.vatAmount) / 100).toFixed(2)]), h("td", null, ["$", (this.invoice.vatAmount / 100).toFixed(2)]), h("td", null, ["$", (this.invoice.amount / 100).toFixed(2)])]) : void 0])])]), "paid" == this.invoice.status ? h("p", null, [h("b", null, ["This invoice has been paid."])]) : void 0, h("p", null, ["VAT has been charged at ", 100 * this.invoice.specification[0].vatRate, 
        "%."]), h("p", null, ["For European customers 0% VAT is charged if a VAT number has been specified, otherwise 21% VAT is charged. For Dutch customers 21% VAT is charged. For the rest of the world 0% VAT is charged. TinyPNG is owned and operated by Tinify B.V. registered in the Netherlands with VAT number NL853431322B01. All services are offered under the ", h("a", {
          attrs : {
            href : "/terms"
          }
        }, ["terms of use"]), ". The software is shipped under the ", h("a", {
          attrs : {
            href : "/photoshop/eula"
          }
        }, ["license agreement"]), "."]), h("p", {
          class : "pdf"
        }, [h("em", null, ["You can follow the ", "osx" == m.name ? h("a", {
          attrs : {
            href : "https://support.apple.com/kb/PH25326",
            target : "_blank"
          }
        }, ["instructions for Mac"]) : "windows" == m.name ? h("a", {
          attrs : {
            href : "http://www.howtogeek.com/150891/how-to-print-to-pdf-in-windows-4-tips-and-tricks/",
            target : "_blank"
          }
        }, ["instructions for Windows"]) : void 0, " to save this invoice as a PDF."])])])]);
      }
    }, e.prototype.input = function(target) {
      this.address = target.target.value.split("\n");
    }, e.prototype.update = function(target) {
      var props;
      return regeneratorRuntime.async(function(_context) {
        for (;;) {
          switch(_context.prev = _context.next) {
            case 0:
              if (target.preventDefault(), !this.address) {
                /** @type {number} */
                _context.next = 13;
                break;
              }
              return _context.prev = 2, _context.next = 5, regeneratorRuntime.awrap(self.patch(this.invoice.id, {
                address : this.address
              }));
            case 5:
              props = _context.sent;
              this.invoice.address = props.address;
              /** @type {boolean} */
              this.address = false;
              /** @type {number} */
              _context.next = 13;
              break;
            case 10:
              /** @type {number} */
              _context.prev = 10;
              _context.t0 = _context.catch(2);
              next(_context.t0);
            case 13:
              /** @type {boolean} */
              this.modify = false;
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[2, 10]]);
    }, e.prototype.close = function(instance) {
      /** @type {boolean} */
      this.modify = false;
      /** @type {boolean} */
      this.address = false;
      this.$router.replace({
        query : null
      });
    }, e;
  }(instance.a)) || DEFAULT_RECONNECT_TIME_INCREASE;
  var scriptKeyHandler = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var User_AccountPassword_Current = $("invoices");
  var hostUser = $compile()((Hotel = function(data) {
    /**
     * @return {?}
     */
    function e() {
      var label;
      var value;
      var fn;
      error(this, e);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return label = value = method(this, data.call.apply(data, [this].concat(args))), value.data = [], fn = label, method(value, fn);
    }
    return main(e, data), e.prototype.beforeRouteEnter = function(objIDs, fields, res) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(cb(User_AccountPassword_Current, fields, res));
            case 2:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, e.prototype.render = function(createElement) {
      return createElement("div", {
        class : "invoices"
      }, [createElement("main", null, [createElement($mask, {
        attrs : {
          invoices : this.data
        }
      }, []), createElement(ApplyMods, {
        attrs : {
          invoice : this.selected
        }
      }, [])])]);
    }, scriptKeyHandler(e, [{
      key : "selected",
      get : function() {
        var number = this.$route && this.$route.query.id;
        if (number) {
          return this.data.filter(function(n3) {
            return n3.number === number;
          })[0];
        }
      }
    }]), e;
  }(instance.a), function(target, key, headerPlusSegments, source, context) {
    var desc = {};
    return Object.keys(source).forEach(function(key) {
      desc[key] = source[key];
    }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, ("value" in desc || desc.initializer) && (desc.writable = true), desc = headerPlusSegments.slice().reverse().reduce(function(descriptor, decorator) {
      return decorator(target, key, descriptor) || descriptor;
    }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, key, desc), desc = null), desc;
  }(Hotel.prototype, "beforeRouteEnter", [addedRelations], Object.getOwnPropertyDescriptor(Hotel.prototype, "beforeRouteEnter"), Hotel.prototype), git = Hotel)) || git;
  var PlayerVolumeControl = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var req = $("pro");
  var message = $("subscription");
  var tmpCurrency = (no = $compile()({
    props : ["session"]
  }))((_class = function(output) {
    /**
     * @return {?}
     */
    function $() {
      var response;
      var request;
      var err;
      push(this, $);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return response = request = fail(this, output.call.apply(output, [this].concat(args))), request.pending = false, request.success = false, request.quantity = 1, request.paymentDetails = {}, request.data = {
        account : {}
      }, request.cardStatus = false, request._paymentMethod = false, err = response, fail(request, err);
    }
    return extend($, output), $.prototype.beforeRouteEnter = function(objIDs, fields, res) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(cb(req, fields, res));
            case 2:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, $.prototype.beforeRouteLeave = function(data, linkedEntities, force) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              this.$destroy();
              force();
            case 2:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, $.prototype.formatDate = function(dateString) {
      return ("" + new Date(dateString)).split(" ").slice(0, 4).join(" ");
    }, $.prototype.render = function(createElement) {
      return "active" in this.data ? this.data.active && !this.expiring ? this.proPage(createElement) : this.renewPage(createElement) : this.signupPage(createElement);
    }, $.prototype.proPage = function(h) {
      var payload = this;
      return h("div", {
        class : "webinterface pro"
      }, [h("main", {
        class : "introduction"
      }, [h("section", null, [h("h2", null, ["You are a ", h("strong", null, ["Pro member"])]), h("p", null, ["You are a TinyPNG Pro member until", h("strong", null, [" ", this.formatDate(this.data.expires)]), ". Your subscription will ", false !== this.data.renew ? "automatically" : "not", " renew each year.", "paypal" != this.paymentMethod ? " You can change whether or not it will be renewed using the form below." : " You can manually renew your subscription one month before it expires from your dashboard."])])]), 
      h("main", {
        class : "paymentdetails"
      }, [h("section", null, [h("form", {
        class : {
          main : true,
          success : this.success,
          propayment : true
        },
        on : {
          submit : this.update
        }
      }, [h("div", {
        class : "column"
      }, [h("h2", null, ["You currently have ", h("b", null, [this.data.quantity]), " user Pro ", this.data.quantity > 1 ? "accounts" : "account"]), h("p", null, ["If you would like to change the number of users in your account, please contact us at ", h("a", {
        attrs : {
          href : "mailto:support@tinypng.com"
        }
      }, ["support@tinypng.com"]), "."]), h("h2", null, [1 == this.quantity ? "Personal" : "Team", " information"]), h("p", null, ["Name: ", h("span", {
        class : "name"
      }, [this.session.name])]), h("p", null, ["Email: ", h("span", {
        class : "email"
      }, [" ", this.session.mail])]), h("p", null, [h("em", null, ["Payments are securely handled by our payment partner Stripe. All prices include sales tax (VAT) when applicable."])])]), "paypal" == this.paymentMethod ? h("div", {
        class : "column"
      }, [h("h2", null, ["Payment details"]), h("p", null, ["Your Pro account has been ", h("b", null, ["paid using PayPal"]), " and you will be Pro member until ", h("b", null, [this.formatDate(this.data.expires)]), ". The invoice for the purchase can be found on the invoices tab."]), h("h2", null, ["Automatic renewal"]), h("p", null, ["Pro accounts purchased with PayPal ", h("b", null, ["will not renew"]), " automatically. One month before your Pro account expires, we will send a reminder with simple instructions on how to renew your Pro account."])]) : 
      h("div", {
        class : "column"
      }, [h("h2", null, ["Payment details"]), h("p", null, ["You can update your account and payment details below."]), this.error ? h("section", {
        class : "error"
      }, [h("span", {
        class : "icon"
      }, []), this.error]) : void 0, h(div, {
        attrs : {
          checked : this.card,
          card : this.data.account.card
        },
        on : {
          switch : function(id) {
            /** @type {string} */
            payload.card = id;
          },
          change : function(target) {
            /** @type {!Object} */
            payload.paymentDetails = target;
          }
        }
      }, []), h(style, {
        attrs : {
          vat : this.vatNumber
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            payload.data.account.vatNumber = target;
          }
        }
      }, []), h("p", null, ["By submitting you agree to the ", h("a", {
        attrs : {
          href : "/terms"
        }
      }, ["terms of use"]), "."]), h("h2", null, ["Automatic renewal"]), h("p", null, [h("input", {
        attrs : {
          type : "radio",
          name : "automaticRenewal",
          id : "automaticOn"
        },
        domProps : {
          checked : false !== this.data.renew
        },
        on : {
          change : function() {
            /** @type {boolean} */
            payload.data.renew = true;
          }
        }
      }, []), h("label", {
        attrs : {
          for : "automaticOn"
        }
      }, [h("strong", null, ["ON"]), h("br", null, [])]), h("input", {
        attrs : {
          type : "radio",
          name : "automaticRenewal",
          id : "automaticOff"
        },
        domProps : {
          checked : false === this.data.renew
        },
        on : {
          change : function() {
            /** @type {boolean} */
            payload.data.renew = false;
          }
        }
      }, []), h("label", {
        attrs : {
          for : "automaticOff"
        }
      }, [h("strong", null, ["OFF"])])]), h("div", {
        class : "submit"
      }, [h("button", {
        attrs : {
          tabindex : "10",
          disabled : this.pending
        },
        class : "success"
      }, [h("p", null, ["Update"]), this.pending ? h("span", {
        class : "spinner"
      }, [h("span", {
        class : "circle"
      }, [])]) : this.success ? h("span", {
        class : "success"
      }, [h("span", {
        class : "checkfirst"
      }, [h("span", {
        class : "firstsuccess"
      }, []), h("span", {
        class : "checklast"
      }, [h("span", {
        class : "lastsuccess"
      }, [])])])]) : void 0])])])])])])]);
    }, $.prototype.signupPage = function(createElement) {
      var $scope = this;
      return createElement("div", {
        class : "webinterface"
      }, [createElement("main", {
        class : "introduction"
      }, [createElement("section", null, [createElement("h3", null, ["You are using the free version of the web interface"]), createElement("h2", null, [createElement("strong", null, ["Sign up for TinyPNG Pro"])]), createElement("p", null, ["With the free web interface on the homepage you are limited to compressing 20 images each time and a maximum file size of 5\u00a0MB."]), createElement("p", null, ["Sign up for Pro to have the limits removed. You will get a full year of compressing an ", createElement("b", 
      null, ["unlimited"]), " number of images with a maximum file size of ", createElement("strong", null, ["25\u00a0MB"]), ". You can cancel the automatic renewal of your subscription ", createElement("strong", null, ["anytime"]), "."])])]), createElement("main", {
        class : "paymentdetails"
      }, [createElement("section", null, [createElement("form", {
        class : {
          main : true,
          success : this.success,
          pending : this.pending,
          propayment : true
        },
        on : {
          submit : this.submit
        }
      }, [createElement("div", {
        class : "column"
      }, [createElement("h2", null, ["Yearly subscription"]), createElement("p", null, [createElement(root, {
        on : {
          change : function(target) {
            /** @type {!Object} */
            $scope.quantity = target;
          }
        }
      }, [createElement("span", {
        class : "description"
      }, [1 == this.quantity ? "user" : "users"]), " ", createElement("strong", null, ["$"]), createElement("strong", {
        class : "price"
      }, [this.quantity * p.a.price]), " per year"])]), createElement("h2", null, [1 == this.quantity ? "Personal" : "Team", " information"]), createElement("p", null, ["Name: ", createElement("span", {
        class : "name"
      }, [" ", this.session.name, " "])]), createElement("p", null, ["Email: ", createElement("span", {
        class : "email"
      }, [" ", this.session.mail]), " "]), createElement("p", null, [createElement("em", null, ["Payments are securely handled by our payment partner Stripe. All prices include sales tax (VAT) when applicable."])])]), createElement("div", {
        class : "column"
      }, [createElement("h2", null, ["Payment details"]), this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : void 0, createElement(div, {
        attrs : {
          disabled : "stripe" != this.paymentMethod
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            $scope.paymentDetails = target;
          }
        }
      }, []), createElement(style, {
        attrs : {
          vat : this.vatNumber
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            $scope.data.account.vatNumber = target;
          }
        }
      }, []), createElement("div", {
        class : "submit"
      }, [createElement("p", null, ["By submitting you agree to the ", createElement("a", {
        attrs : {
          href : "/terms"
        }
      }, ["terms of use"]), "."]), createElement("p", null, ["paypal" == this.paymentMethod ? createElement("span", null, ["Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            $scope.paymentMethod = "stripe";
          }
        }
      }, ["credit card"]), "."]) : createElement("span", null, ["No creditcard? Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            $scope.paymentMethod = "paypal";
          }
        }
      }, ["PayPal"]), "!"])]), createElement("p", null, ["paypal" == this.paymentMethod ? createElement(ModList, {
        on : {
          submit : this.submit
        },
        attrs : {
          price : (this.data.quantity || this.quantity) * p.a.price,
          description : p.a.description
        }
      }, []) : createElement("button", {
        attrs : {
          tabindex : "10",
          disabled : this.pending
        },
        class : "success"
      }, [createElement("p", null, ["Sign up for Pro"]), this.pending ? createElement("span", {
        class : "spinner"
      }, [createElement("span", {
        class : "circle"
      }, [])]) : this.success ? createElement("span", {
        class : "success"
      }, [createElement("span", {
        class : "checkfirst"
      }, [createElement("span", {
        class : "firstsuccess"
      }, []), createElement("span", {
        class : "checklast"
      }, [createElement("span", {
        class : "lastsuccess"
      }, [])])])]) : void 0]), createElement("a", {
        class : "cancel",
        on : {
          click : function() {
            return $scope.$emit("cancel");
          }
        }
      }, ["Cancel"])])])])])])])]);
    }, $.prototype.renewPage = function(createElement) {
      var data = this;
      return createElement("div", {
        class : {
          webinterface : true,
          pro : !this.data.expired
        }
      }, [createElement("main", {
        class : "introduction"
      }, [createElement("section", null, [this.expiring ? createElement("h2", null, ["Your pro account will ", createElement("strong", null, ["expire soon"])]) : createElement("h2", null, ["Your pro account has ", createElement("strong", null, ["expired"])]), this.data.expired && false !== this.data.renew ? createElement("p", null, ["Your TinyPNG Pro membership expired on", createElement("strong", null, [" ", this.formatDate(this.data.expires)]), ". Your subscription could not be automatically renewed because of an issue with your payment details. Please check and update your payment details below."]) : 
      this.data.expired ? createElement("p", null, ["Your TinyPNG Pro membership expired on", createElement("strong", null, [" ", this.formatDate(this.data.expires)]), ". You can renew your subscription below."]) : this.data.active ? createElement("p", null, ["Your TinyPNG Pro membership will expire on", createElement("strong", null, [" ", this.formatDate(this.data.expires)]), ". You can renew your subscription below."]) : createElement("p", null, ["Your TinyPNG Pro membership has been cancelled. You can renew your subscription below."])])]), 
      createElement("main", {
        class : "paymentdetails"
      }, [createElement("section", null, [createElement("form", {
        class : {
          main : true,
          success : this.success,
          propayment : true
        },
        on : {
          submit : this.update
        }
      }, [createElement("div", {
        class : "column"
      }, [createElement("h2", null, ["You currently have ", createElement("b", null, [this.data.quantity]), " user Pro ", this.data.quantity > 1 ? "accounts" : "account"]), createElement("p", null, ["If you would like to change the number of users in your account, please contact us at ", createElement("a", {
        attrs : {
          href : "mailto:support@tinypng.com"
        }
      }, ["support@tinypng.com"]), "."]), createElement("h2", null, [1 == this.quantity ? "Personal" : "Team", " information"]), createElement("p", null, ["Name: ", createElement("span", {
        class : "name"
      }, [this.session.name])]), createElement("p", null, ["Email: ", createElement("span", {
        class : "email"
      }, [" ", this.session.mail])]), createElement("p", null, [createElement("em", null, ["Payments are securely handled by our payment partner Stripe. All prices include sales tax (VAT) when applicable."])])]), createElement("div", {
        class : "column"
      }, [createElement("h2", null, ["Renew your account for 1 year"]), this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : void 0, "Your account ", this.expiring ? "will expire soon" : "has expired", ". Here you can extend your account with another year, until ", this.formatDate(this.dateAfterRenew), ".", createElement(div, {
        attrs : {
          disabled : "stripe" != this.paymentMethod,
          checked : this.card,
          card : this.data.account.card
        },
        on : {
          switch : function(method) {
            /** @type {string} */
            data.card = method;
          },
          change : function(target) {
            /** @type {!Object} */
            data.paymentDetails = target;
          }
        }
      }, []), createElement(style, {
        attrs : {
          vat : this.vatNumber
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            data.data.account.vatNumber = target;
          }
        }
      }, []), createElement("div", {
        class : "terms"
      }, [createElement("p", null, ["By submitting you agree to the ", createElement("a", {
        attrs : {
          href : "/terms"
        }
      }, ["terms of use"]), "."])]), createElement("div", {
        class : "submit"
      }, [createElement("p", null, ["paypal" == this.paymentMethod ? createElement("span", null, ["Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            data.paymentMethod = "stripe";
          }
        }
      }, ["credit card"]), "."]) : createElement("span", null, ["No creditcard? Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            data.paymentMethod = "paypal";
          }
        }
      }, ["PayPal"]), "!"])]), createElement("p", null, ["paypal" == this.paymentMethod ? createElement(ModList, {
        on : {
          submit : this.update
        },
        attrs : {
          price : (this.data.quantity || this.quantity) * p.a.price,
          description : p.a.description
        }
      }, []) : createElement("button", {
        attrs : {
          tabindex : "10",
          disabled : this.pending
        },
        class : "success"
      }, [createElement("p", null, ["Renew Pro account"]), this.pending ? createElement("span", {
        class : "spinner"
      }, [createElement("span", {
        class : "circle"
      }, [])]) : this.success ? createElement("span", {
        class : "success"
      }, [createElement("span", {
        class : "checkfirst"
      }, [createElement("span", {
        class : "firstsuccess"
      }, []), createElement("span", {
        class : "checklast"
      }, [createElement("span", {
        class : "lastsuccess"
      }, [])])])]) : void 0])])])])])])])]);
    }, $.prototype.submit = function(target, key) {
      var item;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return this.pending = true, this.error = "", target && target.preventDefault(), key && (this.paymentDetails = key), self.prev = 4, self.next = 7, regeneratorRuntime.awrap(req.post(Object.assign({
                quantity : this.data.quantity || this.quantity,
                vatNumber : this.data.account.vatNumber,
                fullName : this.session.name,
                mail : this.session.mail,
                paymentMethod : this.paymentMethod
              }, this.paymentDetails)));
            case 7:
              return item = self.sent, this.card = "existing", this.success = true, this.$emit("success", item), self.next = 13, regeneratorRuntime.awrap(req.get());
            case 13:
              this.data = self.sent;
              /** @type {number} */
              self.next = 20;
              break;
            case 16:
              /** @type {number} */
              self.prev = 16;
              self.t0 = self.catch(4);
              /** @type {boolean} */
              this.success = false;
              this.error = self.t0.message;
            case 20:
              /** @type {boolean} */
              this.pending = false;
            case 21:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[4, 16]]);
    }, $.prototype.updateCard = function(event) {
      var item;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return this.pending = true, this.error = "", event.preventDefault(), self.prev = 3, self.next = 6, regeneratorRuntime.awrap(message.patch(null, Object.assign({
                card : this.card,
                vatNumber : this.data.account.vatNumber
              }, this.paymentDetails)));
            case 6:
              return item = self.sent, this.success = true, self.next = 10, regeneratorRuntime.awrap(req.get());
            case 10:
              this.data = self.sent;
              this.$emit("success", item);
              /** @type {number} */
              self.next = 18;
              break;
            case 14:
              /** @type {number} */
              self.prev = 14;
              self.t0 = self.catch(3);
              /** @type {boolean} */
              this.success = false;
              this.error = self.t0.message;
            case 18:
              /** @type {boolean} */
              this.pending = false;
            case 19:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[3, 14]]);
    }, $.prototype.update = function(target, key) {
      var item;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return this.pending = true, this.error = "", target && target.preventDefault(), key && (this.paymentDetails = key), self.prev = 4, self.next = 7, regeneratorRuntime.awrap(req.patch(null, Object.assign({
                purchase : !this.data.active || this.expiring,
                renew : false !== this.data.renew ? "on" : "off",
                card : this.card,
                vatNumber : this.data.account.vatNumber,
                paymentMethod : this.paymentMethod
              }, this.paymentDetails)));
            case 7:
              return item = self.sent, this.success = true, this.card = "existing", self.next = 12, regeneratorRuntime.awrap(req.get());
            case 12:
              this.data = self.sent;
              this.$emit("success", item);
              /** @type {number} */
              self.next = 20;
              break;
            case 16:
              /** @type {number} */
              self.prev = 16;
              self.t0 = self.catch(4);
              /** @type {boolean} */
              this.success = false;
              this.error = self.t0.message;
            case 20:
              /** @type {boolean} */
              this.pending = false;
            case 21:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[4, 16]]);
    }, PlayerVolumeControl($, [{
      key : "paymentMethod",
      get : function() {
        return this.$data._paymentMethod || this.data.paymentMethod || "stripe";
      },
      set : function(url) {
        /** @type {!Object} */
        this.$data._paymentMethod = url;
      }
    }, {
      key : "card",
      get : function() {
        return this.cardStatus || (this.cardStatus = this.data.account.card ? "existing" : "new"), this.cardStatus;
      },
      set : function(name) {
        /** @type {!Object} */
        this.cardStatus = name;
      }
    }, {
      key : "vatNumber",
      get : function() {
        if (this.data.account) {
          return this.data.account.vatNumber;
        }
      }
    }, {
      key : "expiring",
      get : function() {
        if (this.data.expires) {
          /** @type {!Date} */
          var calendarStartDate = new Date(this.data.expires);
          return calendarStartDate.setDate(calendarStartDate.getDate() - 31), calendarStartDate < Date.now() && this.data.active && false === this.data.renew;
        }
      }
    }, {
      key : "dateAfterRenew",
      get : function() {
        /** @type {!Date} */
        var dCurrent = new Date(Math.max(Date.now(), (new Date(this.data.expires)).getTime()));
        return new Date(Date.UTC(dCurrent.getFullYear(), dCurrent.getMonth() + 12, dCurrent.getDate() + 1));
      }
    }]), $;
  }(instance.a), _applyDecoratedDescriptor(_class.prototype, "beforeRouteEnter", [addedRelations], Object.getOwnPropertyDescriptor(_class.prototype, "beforeRouteEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "beforeRouteLeave", [addedRelations], Object.getOwnPropertyDescriptor(_class.prototype, "beforeRouteLeave"), _class.prototype), deviceCurrency = _class)) || deviceCurrency;
  var addr_high = (io = $compile()({
    props : ["session"]
  }))(ao = function(e) {
    /**
     * @return {?}
     */
    function Input() {
      var count;
      var first;
      var data;
      mixin(this, Input);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return count = first = cleanup(this, e.call.apply(e, [this].concat(args))), first.open = false, data = count, cleanup(first, data);
    }
    return _inherits(Input, e), Input.prototype.mounted = function() {
      /** @type {boolean} */
      this.open = true;
    }, Input.prototype.render = function(createElement) {
      return createElement(form, {
        attrs : {
          show : this.open,
          closable : false,
          width : 300
        }
      }, [createElement("h2", null, ["Login to your account"]), createElement(PacChooser, {
        attrs : {
          session : this.session
        }
      }, []), createElement("p", {
        class : "cancel"
      }, [createElement("a", {
        attrs : {
          href : "/"
        }
      }, ["Nah, take me to the homepage"])])]);
    }, Input;
  }(instance.a)) || ao;
  /** @type {null} */
  var router = null;
  if (document.querySelector("[data-dashboard]")) {
    instance.a.use(mock.a);
    router = new mock.a({
      mode : "history",
      base : "/dashboard",
      linkActiveClass : "active",
      routes : [{
        path : "/photoshop",
        component : pair_target
      }, {
        path : "/web",
        component : tmpCurrency
      }, {
        path : "/developers",
        component : RemoteStatsContainer
      }, {
        path : "/invoices",
        component : hostUser
      }, {
        path : "/",
        redirect : function() {
          return options.authenticated ? resolve(options.products) : "/web";
        }
      }]
    });
  }
  run("[data-dashboard]", $compile()({
    router : router,
    props : ["session"]
  })(so = function(Base) {
    /**
     * @return {?}
     */
    function Tree() {
      return prepend(this, Tree), apply(this, Base.apply(this, arguments));
    }
    return __extends(Tree, Base), Tree.prototype.mounted = function() {
      this.session.on("destroy", this.redirect);
    }, Tree.prototype.destroyed = function() {
      this.session.off("destroy", this.redirect);
    }, Tree.prototype.redirect = function() {
      /** @type {string} */
      window.location.href = "/";
    }, Tree.prototype.render = function(h) {
      return !this.session.authenticated || this.session.restricted ? h("div", null, [h("main", {
        class : "login"
      }, [h(addr_high, {
        attrs : {
          session : this.session
        }
      }, [])])]) : h("div", null, [h("main", {
        class : "welcome"
      }, [h("section", null, [h("h1", null, ["Welcome, ", this.session.name]), h("nav", null, [h("ul", null, [h("li", null, [h("router-link", {
        attrs : {
          to : "/web",
          exact : true
        },
        class : "web"
      }, ["Web interface"])]), h("li", null, [h("router-link", {
        attrs : {
          to : "/photoshop"
        },
        class : "photoshop"
      }, ["Photoshop plugin"])]), h("li", null, [h("router-link", {
        attrs : {
          to : "/developers"
        },
        class : "developers"
      }, ["WordPress & API"])]), h("li", null, [h("router-link", {
        attrs : {
          to : "/invoices"
        },
        class : "invoices"
      }, ["Invoices"])]), "/support" === this.$route.path ? h("li", null, [h("router-link", {
        attrs : {
          to : "/support"
        }
      }, ["Support"])]) : void 0])])])]), h("keep-alive", null, [h("router-view", {
        attrs : {
          session : this.session
        }
      }, [])])]);
    }, Tree;
  }(instance.a)) || so, {
    session : options
  });
  var mime;
  var Wo;
  var yuiMinifyConfig;
  var editor = $("subscription");
  var suspendedEvent = $compile()(mime = function(property) {
    /**
     * @return {?}
     */
    function fn() {
      var num;
      var settings;
      var callback;
      toString(this, fn);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return num = settings = require(this, property.call.apply(property, [this].concat(args))), settings.fullName = "", settings.mail = "", settings.success = false, settings.error = null, callback = num, require(settings, callback);
    }
    return restore(fn, property), fn.prototype.render = function(createElement) {
      var a = this;
      return createElement("div", {
        class : "getyourkey",
        attrs : {
          "data-developers-registration" : true
        }
      }, [this.success ? createElement("div", {
        class : "success"
      }, [createElement("div", {
        class : "icon"
      }, []), createElement("p", null, ["We have sent you an email with a link to your API key!"])]) : createElement("form", {
        class : "developers",
        on : {
          submit : this.submit
        }
      }, [this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : void 0, createElement("input", {
        attrs : {
          name : "fullName",
          autocomplete : "name",
          placeholder : "Your full name",
          required : true
        },
        on : {
          input : function(target) {
            a.fullName = target.target.value;
          }
        }
      }, []), createElement("input", {
        attrs : {
          name : "mail",
          type : "email",
          autocomplete : "email",
          placeholder : "Your email address",
          required : true
        },
        on : {
          input : function(target) {
            a.mail = target.target.value;
          }
        }
      }, []), createElement("input", {
        attrs : {
          type : "submit",
          value : "Get your API key",
          autocomplete : "off"
        }
      }, [])])]);
    }, fn.prototype.submit = function(target) {
      var _result3;
      return regeneratorRuntime.async(function(_context4) {
        for (;;) {
          switch(_context4.prev = _context4.next) {
            case 0:
              return target.preventDefault(), _context4.prev = 1, _context4.next = 4, regeneratorRuntime.awrap(editor.post({
                fullName : this.fullName,
                mail : this.mail
              }));
            case 4:
              _result3 = _context4.sent;
              /** @type {boolean} */
              this.success = true;
              /** @type {null} */
              this.error = null;
              /** @type {number} */
              _context4.next = 12;
              break;
            case 9:
              /** @type {number} */
              _context4.prev = 9;
              _context4.t0 = _context4.catch(1);
              this.error = _context4.t0.message;
            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[1, 9]]);
    }, fn;
  }(instance.a)) || mime;
  var statusByte = (Wo = $compile()({
    props : ["session"]
  }))(yuiMinifyConfig = function(result) {
    /**
     * @return {?}
     */
    function render() {
      var rawYaml;
      var page;
      var yaml;
      getFile(this, render);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return rawYaml = page = writeFile(this, result.call.apply(result, [this].concat(args))), page.mounted = false, yaml = rawYaml, writeFile(page, yaml);
    }
    return _extendableBuiltin(render, result), render.prototype.mounted = function() {
      /** @type {boolean} */
      this.mounted = true;
    }, render.prototype.render = function(createElement) {
      return this.mounted && this.session && this.session.authenticated ? createElement("a", {
        class : "authenticated",
        attrs : {
          href : "/dashboard/developers",
          "data-developers-login" : true
        }
      }, [createElement("div", {
        class : "block dark"
      }, [createElement("h2", null, ["View your account"]), createElement("p", null, ["You are logged in. Click here to manage your ", createElement("strong", null, ["account details"]), " and view your invoices."])])]) : createElement("div", {
        class : "block dark unauthenticated",
        attrs : {
          "data-developers-login" : true
        }
      }, [createElement("h2", null, ["Already subscribed?"]), createElement(PacChooser, {
        attrs : {
          session : this.session
        }
      }, [])]);
    }, render;
  }(instance.a)) || yuiMinifyConfig;
  run("[data-developers-registration]", suspendedEvent);
  run("[data-developers-login]", statusByte, {
    session : options
  });
  var Zo;
  var items = $("licenses");
  run("[data-photoshop-purchase]", $compile()({
    props : ["session"]
  })(Zo = function(obj) {
    /**
     * @return {?}
     */
    function render() {
      var message;
      var data;
      var result;
      from(this, render);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return message = data = print(this, obj.call.apply(obj, [this].concat(args))), data.platform = "osx", data.quantity = 1, data.vatNumber = null, data.accountDetails = {}, data.paymentDetails = {}, data.paymentMethod = "stripe", data.pending = false, data.success = false, data.error = null, result = message, print(data, result);
    }
    return loop(render, obj), render.prototype.render = function(createElement) {
      var info;
      var data = this;
      return createElement("section", {
        attrs : {
          "data-photoshop-purchase" : true
        }
      }, [this.success ? createElement("div", {
        class : "success"
      }, [createElement("div", {
        class : "artwork"
      }, [createElement("div", {
        class : "message"
      }, [createElement("div", {
        class : "icon"
      }, []), createElement("h2", null, ["Plugin ordered successfully"]), createElement("p", null, ["We have sent an email to ", createElement("strong", null, [this.accountDetails.mail || "you"]), " with a link\u00a0to\u00a0the\u00a0plugin!"])])])]) : createElement("form", {
        on : {
          submit : this.submit
        },
        class : (info = {
          photoshop : true,
          pending : this.pending
        }, info["running-" + (m ? m.id : "unknown")] = true, info)
      }, [createElement("h1", null, ["Choose your version"]), createElement("input", {
        class : "osx",
        attrs : {
          type : "radio",
          name : "platform",
          id : "osx",
          value : "osx"
        },
        on : {
          change : function(target) {
            data.platform = target.target.value;
          }
        }
      }, []), createElement("div", {
        class : "selection"
      }, [createElement("label", {
        class : "box active",
        attrs : {
          for : "osx"
        }
      }, [createElement("figure", {
        class : "oslogo osx"
      }, []), createElement("h2", null, ["Photoshop plugin", createElement("br", null, []), "for Mac"]), createElement("p", {
        class : "version"
      }, ["Latest version: 2.4"]), createElement("p", {
        class : "compatibility"
      }, ["Compatible with", createElement("br", null, []), "macOS (OS X) 10.9 to 10.13"]), createElement("div", {
        class : "action"
      }, [createElement("figure", {
        class : "circle"
      }, [])])])]), createElement("input", {
        class : "windows",
        attrs : {
          type : "radio",
          name : "platform",
          id : "windows",
          value : "windows"
        },
        on : {
          change : function(target) {
            data.platform = target.target.value;
          }
        }
      }, []), createElement("div", {
        class : "selection"
      }, [createElement("label", {
        class : "box active",
        attrs : {
          for : "windows"
        }
      }, [createElement("figure", {
        class : "oslogo windows"
      }, []), createElement("h2", null, ["Photoshop plugin", createElement("br", null, []), "for Windows"]), createElement("p", {
        class : "version"
      }, ["Latest version: 2.4"]), createElement("p", {
        class : "compatibility"
      }, ["Compatible with", createElement("br", null, []), "Windows 7, 8, 8.1 and 10"]), createElement("div", {
        class : "action"
      }, [createElement("figure", {
        class : "circle"
      }, [])])])]), createElement("div", {
        class : "details"
      }, [this.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), this.error]) : void 0, createElement("div", {
        class : "left"
      }, [createElement("div", {
        class : "price"
      }, [createElement("h2", null, ["Order total"]), createElement("h3", null, [createElement(root, {
        on : {
          change : function(target) {
            /** @type {!Object} */
            data.quantity = target;
          }
        }
      }, ["\u00d7 ", createElement("span", {
        class : "description"
      }, ["Photoshop plugin"]), " ", createElement("strong", null, ["$"]), createElement("strong", {
        class : "price"
      }, [this.quantity * payload.a.price])])])]), createElement("div", {
        class : "account"
      }, [createElement("h2", null, [1 == this.quantity ? "Personal" : "Team", " information"]), createElement(lastVnode, {
        attrs : {
          session : this.session
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            data.accountDetails = target;
          }
        }
      }, [])]), createElement("p", null, ["Payments are securely handled by our payment partner Stripe. All prices include sales tax (VAT) when applicable."])]), createElement("div", {
        class : "payment"
      }, [createElement("h2", null, ["Payment details"]), createElement(div, {
        attrs : {
          disabled : "stripe" != this.paymentMethod
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            data.paymentDetails = target;
          }
        }
      }, []), createElement(style, {
        attrs : {
          vat : this.vatNumber
        },
        on : {
          change : function(target) {
            /** @type {!Object} */
            data.vatNumber = target;
          }
        }
      }, []), createElement("div", {
        class : "submit"
      }, [createElement("p", null, ["By submitting you agree to the ", createElement("a", {
        attrs : {
          href : "/terms"
        }
      }, ["terms of use"]), " and the ", createElement("a", {
        attrs : {
          href : "/photoshop/eula"
        }
      }, ["license agreement"]), ".\u00a0", "paypal" == this.paymentMethod ? createElement("span", null, ["Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            data.paymentMethod = "stripe";
          }
        }
      }, ["credit card"]), "."]) : createElement("span", null, ["No creditcard? Use\u00a0", createElement("label", {
        on : {
          click : function() {
            /** @type {string} */
            data.paymentMethod = "paypal";
          }
        }
      }, ["PayPal"]), "!"])]), createElement("p", {
        style : "min-height: 4.4rem; line-height: 0;"
      }, ["paypal" == this.paymentMethod ? createElement(ModList, {
        on : {
          submit : this.submit
        },
        attrs : {
          price : this.quantity * payload.a.price,
          description : "Photoshop plugin for " + ("osx" == this.platform ? "macOS" : "Windows")
        }
      }, []) : createElement("button", {
        attrs : {
          disabled : this.pending
        }
      }, ["Get the plugin"]), createElement("span", {
        class : "spinner",
        style : "vertical-align: top; margin-top: 0.4rem"
      }, [createElement("span", {
        class : "circle"
      }, [])]), createElement("span", {
        class : "success",
        style : "vertical-align: top; margin-top: 0.4rem"
      }, [createElement("span", {
        class : "checkfirst"
      }, [createElement("span", {
        class : "firstsuccess"
      }, []), createElement("span", {
        class : "checklast"
      }, [createElement("span", {
        class : "lastsuccess"
      }, [])])])])])])])])])]);
    }, render.prototype.submit = function(target, key) {
      var item;
      return regeneratorRuntime.async(function(self) {
        for (;;) {
          switch(self.prev = self.next) {
            case 0:
              return target && target.preventDefault(), key && (this.paymentDetails = key), this.pending = true, this.error = null, self.prev = 4, self.next = 7, regeneratorRuntime.awrap(items.post(Object.assign({
                platform : this.platform,
                copies : this.quantity,
                vatNumber : this.vatNumber,
                paypal : "paypal" == this.paymentMethod
              }, this.accountDetails, this.paymentDetails)));
            case 7:
              item = self.sent;
              /** @type {boolean} */
              this.success = true;
              this.$emit("success", item);
              /** @type {number} */
              self.next = 15;
              break;
            case 12:
              /** @type {number} */
              self.prev = 12;
              self.t0 = self.catch(4);
              this.error = self.t0.message;
            case 15:
              return self.prev = 15, this.pending = false, self.finish(15);
            case 18:
            case "end":
              return self.stop();
          }
        }
      }, null, this, [[4, 12, 15, 18]]);
    }, render;
  }(instance.a)) || Zo, {
    session : options
  });
  run("[data-pricing]", audio);
  var ei;
  var getLayoutViewportWidth;
  var ri;
  var oi;
  var ii;
  var ai;
  var si;
  var geometry;
  var ui;
  var nvd3;
  var pi;
  var DEFAULT_MAX_RECONNECT_TRY_TIMES;
  var nsuCommand = (ei = $compile()({
    props : ["session", "analyzer"]
  }))(getLayoutViewportWidth = function(p) {
    /**
     * @return {?}
     */
    function m() {
      var text;
      var g;
      var children;
      signV4(this, m);
      /** @type {number} */
      var w = arguments.length;
      /** @type {!Array} */
      var args = Array(w);
      /** @type {number} */
      var i = 0;
      for (; i < w; i++) {
        args[i] = arguments[i];
      }
      return text = g = h(this, p.call.apply(p, [this].concat(args))), g.url = null, children = text, h(g, children);
    }
    return send(m, p), m.prototype.mounted = function() {
      /** @type {string} */
      var thousands = window.location.search.substr(1);
      if (thousands) {
        window.history.pushState(null, null, window.location.href.replace(window.location.search, "#" + thousands));
      }
      /** @type {string} */
      var url = window.location.hash.substr(1);
      if (url) {
        /** @type {string} */
        this.url = url;
        this.analyzer.analyze(this.url);
      }
    }, m.prototype.render = function(createElement) {
      var tmpsub = this;
      return createElement("form", {
        attrs : {
          novalidate : true
        },
        on : {
          submit : this.analyze
        }
      }, [this.analyzer.error ? createElement("section", {
        class : "error"
      }, [createElement("span", {
        class : "icon"
      }, []), createElement("span", null, [this.analyzer.error])]) : void 0, createElement("input", {
        attrs : {
          name : "url",
          autocomplete : "url",
          type : "url",
          placeholder : "Enter your web page URL here...",
          required : true
        },
        domProps : {
          value : this.url
        },
        on : {
          input : function(target) {
            tmpsub.url = target.target.value;
          }
        }
      }, []), createElement("button", {
        attrs : {
          autocomplete : "off",
          disabled : this.analyzer.state.running
        }
      }, [createElement("p", null, ["Analyze Page"]), createElement("span", {
        class : "spinner"
      }, [createElement("span", {
        class : "circle"
      }, [])])])]);
    }, m.prototype.analyze = function(target) {
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              target.preventDefault();
              window.history.pushState(null, null, this.url ? "#" + this.url : "");
              this.analyzer.analyze(this.url);
            case 3:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, m;
  }(instance.a)) || getLayoutViewportWidth;
  var tToRatios = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var status_byte = (ri = $compile()({
    props : ["id", "image"]
  }))(oi = function() {
    /**
     * @return {undefined}
     */
    function t() {
      it_should_find(this, t);
    }
    return t.prototype.render = function(createElement) {
      return createElement("tr", {
        class : {
          problem : !isFinite(this.savings)
        }
      }, [createElement("td", null, [createElement("a", {
        attrs : {
          href : this.image.url,
          target : "_blank"
        }
      }, [this.name])]), createElement("td", null, [parse(this.image.in)]), this.image.optimizable ? createElement("td", null, [parse(this.image.out)]) : void 0, isFinite(this.savings) ? this.image.optimizable ? createElement("td", {
        class : "savings"
      }, [this.savings, "% ", createElement("span", null, ["savings"])]) : this.image.intentional ? createElement("td", {
        attrs : {
          colspan : "2"
        }
      }, ["Intentionally not optimized :-)"]) : createElement("td", {
        attrs : {
          colspan : "2"
        },
        class : "optimized"
      }, ["Already optimized"]) : createElement("td", {
        attrs : {
          colspan : "2"
        }
      }, ["Problem processing image"])]);
    }, tToRatios(t, [{
      key : "name",
      get : function() {
        return this.image.url.split("/").pop();
      }
    }, {
      key : "savings",
      get : function() {
        return Math.round(100 * (1 - this.image.out / this.image.in));
      }
    }]), t;
  }()) || oi;
  var insertAd = function() {
    /**
     * @param {!Object} options
     * @param {number} index
     * @return {?}
     */
    function flattenElements(options, index) {
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var o = false;
      var i = void 0;
      try {
        var info;
        var _iterator3 = options[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (info = _iterator3.next()).done) && (result.push(info.value), !index || result.length !== index); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return result;
    }
    return function(arr, options) {
      if (Array.isArray(arr)) {
        return arr;
      }
      if (Symbol.iterator in Object(arr)) {
        return flattenElements(arr, options);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var sub_addr = (ii = $compile()({
    props : ["images"]
  }))(ai = function() {
    /**
     * @return {undefined}
     */
    function t() {
      TestError(this, t);
    }
    return t.prototype.render = function(h) {
      return h("table", {
        class : "images"
      }, [h("thead", null, [h("tr", null, [h("th", null, ["Image sizes"]), h("th", null, ["Original"]), h("th", null, ["Optimized"]), h("th", null, [])])]), h("tbody", null, [Object.entries(this.images).map(function(magnifier) {
        var $magnifier = insertAd(magnifier, 2);
        var CAPTURE_ID = $magnifier[0];
        var imgObject = $magnifier[1];
        return h(status_byte, {
          attrs : {
            id : CAPTURE_ID,
            image : imgObject
          }
        }, []);
      })])]);
    }, t;
  }()) || ai;
  var setStyleProps = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var exec = function() {
    /**
     * @param {!Object} options
     * @param {number} index
     * @return {?}
     */
    function flattenElements(options, index) {
      /** @type {!Array} */
      var result = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var o = false;
      var i = void 0;
      try {
        var info;
        var _iterator3 = options[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (info = _iterator3.next()).done) && (result.push(info.value), !index || result.length !== index); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return result;
    }
    return function(arr, options) {
      if (Array.isArray(arr)) {
        return arr;
      }
      if (Symbol.iterator in Object(arr)) {
        return flattenElements(arr, options);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var nspCommand = (si = $compile()({
    props : ["session", "analyzer"]
  }))(geometry = function() {
    /**
     * @return {undefined}
     */
    function el() {
      append(this, el);
      /** @type {boolean} */
      this.open = false;
      /** @type {boolean} */
      this.showForm = false;
    }
    return el.prototype.closeReport = function() {
      /** @type {boolean} */
      this.open = false;
      document.getElementById("scroll-target").scrollIntoView({
        block : "start",
        behavior : "smooth"
      });
    }, el.prototype.tweetUrl = function(line, text) {
      return "//platform.twitter.com/widgets/tweet_button.html?size=l&url=https://tiny" + text + ".com/analyzer" + encodeURIComponent("#" + this.analyzer.url) + "&text=" + encodeURIComponent(line) + '&hashtags=$"SEO"}&via=TinyPNG&count=none';
    }, el.prototype.activatePro = function() {
      /** @type {boolean} */
      this.showForm = false;
      /** @type {boolean} */
      this.open = true;
      this.session.update();
      document.getElementById("report").scrollIntoView({
        block : "start",
        behavior : "smooth"
      });
      run("body", expected);
    }, el.prototype.scroll = function(target) {
      window.scroll({
        top : window.scrollY + target.getBoundingClientRect().top - 30,
        behavior : "smooth"
      });
    }, el.prototype.render = function(h) {
      var $scope = this;
      return h("main", {
        class : {
          metrics : true,
          open : this.analyzer.state.results
        }
      }, [h("transition", {
        on : {
          enter : this.scroll
        }
      }, [this.analyzer.state.results ? h("section", {
        class : "metrics-box"
      }, [h("h2", {
        class : {
          long : this.analyzer.url.length > 114
        },
        attrs : {
          id : "scroll-target"
        }
      }, ["Web page optimization results for\u00a0", h("span", null, [this.analyzer.url])]), h("div", {
        class : "results"
      }, [h("ul", null, [h("li", null, [h("span", {
        class : "metric-title"
      }, ["found ", h("span", null, ["images"])]), h("p", null, [this.analyzer.length, h("span", {
        class : "unit"
      }, ["images"])])]), h("li", null, [h("span", {
        class : "metric-title"
      }, ["original ", h("span", null, ["image size"])]), display(h, parse(this.analyzer.bytesIn))]), h("li", {
        class : "image-size"
      }, [h("span", {
        class : "metric-title"
      }, ["optimized image size"]), display(h, parse(this.analyzer.bytesOut))]), h("li", {
        class : "total-reduction"
      }, [h("span", {
        class : "metric-title"
      }, ["total size savings"]), this.analyzer.running ? h("span", {
        class : "spinner"
      }, [h("span", {
        class : "circle"
      }, [])]) : h("p", null, [this.analyzer.percentage, h("span", null, [" %"]), h("span", {
        class : "unit"
      }, ["percent"])])]), h("li", {
        class : "load-speed"
      }, [h("span", {
        class : "metric-title"
      }, ["faster page load speed", h("span", {
        class : "info",
        attrs : {
          "aria-label" : "Based on global average bandwidth of 5.6Mbps"
        }
      }, [])]), this.analyzer.running ? h("span", {
        class : "spinner"
      }, [h("span", {
        class : "circle"
      }, [])]) : h("p", null, [this.fasterLoadSpeed, h("span", null, [" sec"]), h("span", {
        class : "unit"
      }, ["seconds"])])])]), h("div", {
        class : {
          slidecontainer : true,
          open : !this.analyzer.state.running
        }
      }, [this.analyzer.state.running ? void 0 : h("div", {
        class : "final-score"
      }, [h("figure", null, [h("img", {
        class : "display",
        attrs : {
          width : "246",
          src : "/images/screenshot-screen.png"
        }
      }, []), h("img", {
        class : "thumbnail",
        attrs : {
          width : "246",
          src : this.analyzer.thumbnail || "/images/savings-screen.png",
          alt : "Screenshot of your website"
        }
      }, [])]), h("div", {
        class : "success"
      }, [h("h2", null, [h("b", null, [this.recommendations.title])]), h("p", {
        class : "text"
      }, [this.recommendations.text]), h("iframe", {
        class : "png",
        attrs : {
          seamless : true,
          scrolling : "no",
          src : this.tweetUrl(this.recommendations.tweet, "png")
        }
      }, [])]), h("div", {
        class : "doughnut"
      }, [h("div", {
        class : "label"
      }, [h("h2", null, [this.analyzer.percentage, h("span", null, ["%"])]), h("p", null, ["savings"])]), h("svg", {
        attrs : {
          viewBox : "0 0 120 120"
        }
      }, [h("path", {
        class : "area",
        attrs : {
          fill : "transparent",
          "stroke-width" : "13",
          d : "M60,10c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50 S32.4,10,60,10"
        }
      }, []), h("path", {
        class : "chart",
        attrs : {
          fill : "transparent",
          "stroke-width" : "13",
          d : "M60,10c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50 S32.4,10,60,10"
        },
        style : "stroke-dashoffset: " + (3.1415 * (100 - this.analyzer.percentage)).toFixed()
      }, [])])])])])]), h("div", {
        class : {
          slidecontainerreport : true,
          open : this.open && !this.analyzer.running,
          active : this.open
        }
      }, [!this.analyzer.running && this.session.authenticated ? h("div", null, [h("div", {
        class : "show-report"
      }, [h("h2", null, ["Detailed report for ", h("strong", null, [this.analyzer.url])]), h("p", null, ["Use TinyPNG to shrink images for your apps, webshops and sites. Properly formatting and compressing images can save many bytes of data to make your site faster and SEO friendly."])]), h("div", {
        class : "report",
        attrs : {
          show : this.open
        }
      }, [h("table", {
        class : "speed"
      }, [h("thead", null, [h("tr", null, [h("th", null, ["Loading speed"]), h("th", null, ["Original"]), h("th", null, ["Optimized"]), h("th", null, [])])]), h("tbody", null, [h("tr", null, [h("td", null, [h("strong", null, ["Image load speed"])]), h("td", null, [this.originalLoadSpeed, h("span", null, [" sec"])]), h("td", null, [this.optimizedLoadSpeed, h("span", null, [" sec"])]), h("td", null, [this.fasterLoadSpeed, h("span", null, [" sec faster"])])])])]), h(sub_addr, {
        attrs : {
          images : this.analyzer.images
        }
      }, []), this.open ? h("button", {
        on : {
          click : this.closeReport
        }
      }, ["Hide detailed report"]) : void 0])]) : void 0]), h("div", {
        class : {
          slidecontainerreport : true,
          open : !this.analyzer.state.running
        },
        attrs : {
          id : "report"
        }
      }, [this.analyzer.state.results && !this.analyzer.state.running && this.analyzer.length && this.pro ? h("div", {
        class : "show-report"
      }, [this.open ? void 0 : h("div", null, [h("h2", null, ["Show detailed report for ", h("b", null, [this.analyzer.url])]), h("button", {
        on : {
          click : function() {
            /** @type {boolean} */
            $scope.open = true;
          }
        }
      }, ["Show detailed report"])])]) : this.analyzer.state.results && !this.analyzer.state.running && this.analyzer.length ? h("div", null, [h("div", {
        class : "sign-in-report"
      }, [h("h2", null, ["Like to view a detailed report?"]), h("p", null, ["Get your ", h("strong", {
        on : {
          click : function() {
            /** @type {boolean} */
            $scope.showForm = !$scope.showForm;
          }
        }
      }, ["TinyPNG Pro"]), " account now and make sure you are logged in to see the detailed report of the image optimization statistics for ", h("b", null, [this.analyzer.url]), " and any other websites you like to test."])]), h("div", {
        directives : [{
          name : "show",
          value : this.showForm
        }]
      }, [h("section", {
        class : "files started"
      }, [h("transition", {
        attrs : {
          name : "slide"
        },
        on : {
          enter : this.scroll
        }
      }, [h(SiteRow, {
        attrs : {
          session : this.session
        },
        directives : [{
          name : "show",
          value : this.showForm
        }],
        on : {
          cancel : function() {
            /** @type {boolean} */
            $scope.showForm = !$scope.showForm;
          },
          success : this.activatePro
        }
      }, [])])])])]) : void 0])]) : void 0])]);
    }, setStyleProps(el, [{
      key : "pro",
      get : function() {
        return this.session && this.session.authenticated && this.session.products.includes("pro");
      }
    }, {
      key : "recommendations",
      get : function() {
        /** @type {boolean} */
        this.open = false;
        var val = this.analyzer.percentage;
        if (!this.analyzer.length) {
          return {
            text : "The analyzer could not find any JPEG or PNG images. It could be that your page is text only or that it is relying on image formats like SVG or WebP.",
            title : "No images found on this web page",
            tweet : "Use the TinyPNG page performance analyzer to see how much you can save!"
          };
        }
        switch(true) {
          case val <= 15:
            return {
              text : "Panda is very impressed with your current compression. Seems like panda can rest easy for now.",
              title : "Wow! You sure know how to compress your webpage",
              tweet : "Wow! Panda just discovered that " + this.analyzer.url + " is perfectly optimized!"
            };
          case val <= 35:
            return {
              text : "Panda would still like to help you get even better compression. After all, panda loves compressing images.",
              title : "Seems like you already do quite a good job compressing your images!",
              tweet : "Thanks to Panda I just found out " + this.analyzer.url + " can still be optimized by " + this.analyzer.percentage + "%!"
            };
          case val <= 50:
            return {
              text : "Overall quite a spectacular score. With some help from panda you can still speed up your website quite a bit.",
              title : "You can optimize the images on your website quite a bit!",
              tweet : "Wow! I can improve the page speed of " + this.analyzer.url + " by " + this.analyzer.percentage + "%. Thank you Panda!"
            };
          default:
            return {
              text : "If you let panda help you he will perfectly compress your webpage without sacrificing quality!",
              title : "You can optimize the images on your website a lot!",
              tweet : "Wow! I can still optimize my site by " + this.analyzer.percentage + "% thanks to this page analyzer"
            };
        }
      }
    }, {
      key : "fasterLoadSpeed",
      get : function() {
        return this.analyzer.bytes / 7E5 < .1 ? (this.analyzer.bytes / 7E5).toFixed(2) : (this.analyzer.bytes / 7E5).toFixed(1);
      }
    }, {
      key : "originalLoadSpeed",
      get : function() {
        return this.analyzer.bytesIn / 7E5 < .1 ? (this.analyzer.bytesIn / 7E5).toFixed(2) : (this.analyzer.bytesIn / 7E5).toFixed(1);
      }
    }, {
      key : "optimizedLoadSpeed",
      get : function() {
        return this.originalLoadSpeed - this.fasterLoadSpeed < .114 ? (this.originalLoadSpeed - this.fasterLoadSpeed).toFixed(2) : (this.originalLoadSpeed - this.fasterLoadSpeed).toFixed(1);
      }
    }, {
      key : "share",
      get : function() {
        return "Panda can save my website " + this.analyzer.url + " " + this.analyzer.percentage + "%, " + parse(this.analyzer.bytes, 0) + " in total!";
      }
    }]), el;
  }()) || geometry;
  var auditCommand = (ui = $compile()({
    props : ["session", "analyzer"]
  }))(nvd3 = function(_GeneralWorker) {
    /**
     * @return {?}
     */
    function item() {
      return indexOf(this, item), deprecate(this, _GeneralWorker.apply(this, arguments));
    }
    return constructor(item, _GeneralWorker), item.prototype.render = function(h) {
      return h("main", {
        class : "analyzercalltoaction"
      }, [h("div", {
        class : "hgroup " + (this.analyzer.cms || "photoshop")
      }, [h("transition", {
        attrs : {
          name : "slide"
        }
      }, [h("div", null, [h("div", {
        class : "photoshop"
      }, [h("h2", null, ["Have you tried the ", h("b", null, ["Photoshop"]), " plugin?"]), h("p", null, ["Save your compressed JPEG and PNG images directly from Photoshop. Install the plugin and you will be ready to go. A new menu option will appear in Photoshop from where you can resize, preview, select a folder and save your images."]), h("button", {
        attrs : {
          onclick : "document.location.href='https://tinypng.com/photoshop#order'"
        }
      }, ["Get Photoshop Plugin"]), h("div", {
        class : "get-started"
      }, [h("img", {
        attrs : {
          src : "/images/smart-resizing/arrow-up.png"
        }
      }, []), " Get started now!"])]), h("div", {
        class : "wordpress"
      }, [h("h2", null, ["Make your life ", h("strong", null, ["even easier"]), "!"]), h("p", null, ["You are running on Wordpress\u2026 That\u2019s great news! You can connect it with the WordPress plugin. Once installed you can bulk optimize your existing media library and any new images will be automatically optimized on upload."]), h("button", {
        attrs : {
          onclick : "document.location.href='https://wordpress.org/plugins/tiny-compress-images/'"
        }
      }, ["Download Wordpress Plugin"])]), h("div", {
        class : "magento"
      }, [h("h2", null, ["Make your Magento store ", h("strong", null, ["even faster"]), "!"]), h("p", null, ["You are using Magento to power your store\u2026 That\u2019s great news! You can connect it to TinyPNG with the Magento extension. There are different versions for Magento Community Edition and Enterprise Edition for both Magento 1 and Magento 2. Once installed all your new product images will be automatically optimized."]), h("button", {
        attrs : {
          onclick : "document.location.href='https://marketplace.magento.com/tinify-tiny-compresss-images.html'"
        }
      }, ["Magento 1 CE"]), "\u00a0 \u00a0", h("button", {
        attrs : {
          onclick : "document.location.href='https://tig.nl/image-optimization-magento-extension-enterprise-edition/'"
        }
      }, ["Magento 1 EE"]), "\u00a0 \u00a0", h("button", {
        attrs : {
          onclick : "document.location.href='https://marketplace.magento.com/tinify-magento2.html'"
        }
      }, ["Magento 2 CE"])])])])])]);
    }, item;
  }(instance.a)) || nvd3;
  var path9 = (pi = $compile()({
    props : ["session", "analyzer"]
  }))(DEFAULT_MAX_RECONNECT_TRY_TIMES = function(t) {
    /**
     * @return {?}
     */
    function item() {
      return eq(this, item), result(this, t.apply(this, arguments));
    }
    return wrapConstructor(item, t), item.prototype.render = function(h) {
      return h("main", {
        class : "analyzerboxes " + (this.analyzer.cms || "photoshop")
      }, [h("transition", {
        attrs : {
          name : "slide"
        }
      }, [h("section", null, [h("h2", {
        class : "flavours"
      }, ["... or try one of the other flavours!"]), h("div", {
        class : "boxes"
      }, [h("div", {
        class : "box wordpress"
      }, [h("div", {
        class : "info"
      }, [h("h2", null, [h("strong", null, ["Wordpress"]), " Plugin"]), h("p", null, ["Speed up your WordPress site and save storage space. Optimize your JPEG and PNG images automatically."]), h("a", {
        attrs : {
          href : "https://wordpress.org/plugins/tiny-compress-images/"
        }
      }, ["Download Wordpress plugin"])]), h("figure", {
        class : "panda wordpress"
      }, []), h("figure", {
        class : "grass"
      }, [])]), h("div", {
        class : "box developers"
      }, [h("div", {
        class : "info"
      }, [h("h2", null, [h("strong", null, ["Developer"]), " tools"]), h("p", null, ["Ready made extensions for all popular programming languages will help you get up and running in a couple of minutes."]), h("a", {
        attrs : {
          href : "http://tinypng.com/developers"
        }
      }, ["Read more about the API"])]), h("figure", {
        class : "panda developers"
      }, []), h("figure", {
        class : "grass"
      }, [])]), h("div", {
        class : "box magento"
      }, [h("div", {
        class : "info"
      }, [h("h2", null, [h("strong", null, ["Magento"]), " extension"]), h("p", null, ["Make your shop faster. Boost your SEO ranking, improve customer experience and increase revenues."]), h("a", {
        attrs : {
          href : "https://marketplace.magento.com/tinify-tiny-compresss-images.html"
        }
      }, ["Download Magento plugin"])]), h("figure", {
        class : "panda magento"
      }, []), h("figure", {
        class : "grass"
      }, [])]), h("div", {
        class : "box photoshop"
      }, [h("div", {
        class : "info"
      }, [h("h2", null, [h("strong", null, ["Photoshop"]), " plugin"]), h("p", null, ["Compressing images just got a whole lot easier. Optimize your JPEG and PNG images straight out of Photoshop."]), h("a", {
        attrs : {
          href : "http://tinypng.com/photoshop#order"
        }
      }, ["Download Photoshop plugin"])]), h("figure", {
        class : "panda photoshop"
      }, []), h("figure", {
        class : "grass"
      }, [])])])])])]);
    }, item;
  }(instance.a)) || DEFAULT_MAX_RECONNECT_TRY_TIMES;
  var stopStep = function() {
    /**
     * @param {!Object} e
     * @param {string} a
     * @return {undefined}
     */
    function t(e, a) {
      /** @type {number} */
      var i = 0;
      for (; i < a.length; i++) {
        var o = a[i];
        o.enumerable = o.enumerable || false;
        /** @type {boolean} */
        o.configurable = true;
        if ("value" in o) {
          /** @type {boolean} */
          o.writable = true;
        }
        Object.defineProperty(e, o.key, o);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var TestSuite = function(name) {
    /**
     * @param {!Object} loc
     * @return {?}
     */
    function handler(loc) {
      coerce(this, handler);
      var args = tail(this, name.call(this));
      /** @type {string} */
      var otherProtocol = "https:" == loc.protocol ? "wss:" : "ws:";
      return args.endpoint = otherProtocol + "//" + loc.host + "/analyze", args.reset(), args;
    }
    return wrap(handler, name), handler.prototype.reset = function() {
      this.images = {};
      /** @type {null} */
      this.thumbnail = null;
      /** @type {null} */
      this.cms = null;
      /** @type {null} */
      this.error = null;
      /** @type {boolean} */
      this.running = false;
      /** @type {number} */
      this.bytesIn = 0;
      /** @type {number} */
      this.bytesOut = 0;
    }, handler.prototype.connect = function(url) {
      var status = this;
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return this.reset(), this.url = url, this.socket = new window.WebSocket(this.endpoint), this.socket.onclose = this.onclose.bind(this), this.socket.onmessage = this.onmessage.bind(this), this.running = true, context$5$0.next = 8, regeneratorRuntime.awrap(new Promise(function(connected) {
                status.socket.onopen = connected;
              }));
            case 8:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, handler.prototype.analyze = function(target) {
      var data;
      return regeneratorRuntime.async(function(context$5$0) {
        for (;;) {
          switch(context$5$0.prev = context$5$0.next) {
            case 0:
              return context$5$0.next = 2, regeneratorRuntime.awrap(this.connect(target));
            case 2:
              data = {
                event : "page:analyze",
                url : target
              };
              this.socket.send(JSON.stringify(data));
            case 4:
            case "end":
              return context$5$0.stop();
          }
        }
      }, null, this);
    }, handler.prototype.onclose = function(e) {
      var wasClean = e.wasClean;
      var code = e.code;
      if (this.running = false, !wasClean) {
        switch(code) {
          case 1006:
          default:
            /** @type {string} */
            this.error = "Unable to connect to performance analyzer service (error " + code + ").";
            this.emit("error", this);
        }
      }
    }, handler.prototype.onmessage = function(event) {
      var m = event.data;
      /** @type {*} */
      var result = JSON.parse(m);
      switch(result.event) {
        case "image:found":
          var type = result.id;
          var goURL = result.url;
          var tag = result.size;
          this.images[type] = {
            url : goURL,
            in : tag
          };
          this.bytesIn += tag;
          this.bytesOut += tag;
          break;
        case "image:optimized":
          var id = result.id;
          var value = result.size;
          var options = this.images[id];
          if (!options) {
            break;
          }
          if ("https://tinypng.com/images/example-orig.png" == options.url.split("?")[0]) {
            /** @type {boolean} */
            options.intentional = true;
            options.out = options.in;
          } else {
            if (value / options.in < .85) {
              /** @type {boolean} */
              options.optimizable = true;
              options.out = value;
              this.bytesOut -= options.in - value;
            } else {
              options.out = options.in;
            }
          }
          break;
        case "page:captured":
          this.thumbnail = result.thumbnail;
          break;
        case "page:detected":
          this.cms = result.cms;
          break;
        case "page:failed":
          var error = result.message;
          this.error = error;
          this.socket.close();
          this.emit("error", this);
          break;
        case "page:completed":
          this.socket.close();
          this.emit("success", this);
      }
    }, stopStep(handler, [{
      key : "length",
      get : function() {
        return Object.keys(this.images).length;
      }
    }, {
      key : "percentage",
      get : function() {
        return this.bytesIn ? Math.round(100 * (1 - this.bytesOut / this.bytesIn)) : 0;
      }
    }, {
      key : "bytes",
      get : function() {
        return this.bytesIn - this.bytesOut;
      }
    }, {
      key : "state",
      get : function() {
        return {
          started : !!this.url,
          running : this.running,
          results : this.bytesIn > 0 || !!this.thumbnail
        };
      }
    }]), handler;
  }(IELazyFacade);
  if (document.querySelector("[data-analyze-form]")) {
    var properties = new TestSuite(window.location);
    properties.on("success", function() {
      if (window.ga) {
        window.ga("send", "event", "Analyzer", "Success", properties.url, properties.percentage);
      }
    });
    properties.on("error", function() {
      if (window.ga) {
        window.ga("send", "event", "Analyzer", "Error", properties.url);
      }
    });
    run("[data-analyze-form]", nsuCommand, {
      session : options,
      analyzer : properties
    });
    run("[data-report]", nspCommand, {
      session : options,
      analyzer : properties
    });
    run("[data-cta]", auditCommand, {
      session : options,
      analyzer : properties
    });
    run("[data-cta-boxes]", path9, {
      session : options,
      analyzer : properties
    });
  }
  /** @type {!NodeList<Element>} */
  var s = document.querySelectorAll("iframe");
  /** @type {boolean} */
  var _iteratorNormalCompletion3 = true;
  /** @type {boolean} */
  var Si = false;
  var tRecord = void 0;
  try {
    var info;
    var _iterator3 = Array.from(s)[Symbol.iterator]();
    for (; !(_iteratorNormalCompletion3 = (info = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      info.value.setAttribute("scrolling", "no");
    }
  } catch (t) {
    /** @type {boolean} */
    Si = true;
    tRecord = t;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (Si) {
        throw tRecord;
      }
    }
  }
}, function(module, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(62);
  __webpack_require__(46);
  module.exports = __webpack_require__(4).Symbol;
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var global = __webpack_require__(3);
  var has = __webpack_require__(5);
  var DESCRIPTORS = __webpack_require__(9);
  var $export = __webpack_require__(6);
  var $redef = __webpack_require__(13);
  var META = __webpack_require__(63).KEY;
  var $fails = __webpack_require__(16);
  var shared = __webpack_require__(28);
  var setTag = __webpack_require__(23);
  var uid = __webpack_require__(18);
  var wks = __webpack_require__(2);
  var gOPS = __webpack_require__(39);
  var isArray = __webpack_require__(64);
  var eq = __webpack_require__(65);
  var escape = __webpack_require__(67);
  var copy = __webpack_require__(8);
  var toObject = __webpack_require__(12);
  var toPrimitive = __webpack_require__(27);
  var createDesc = __webpack_require__(17);
  var _create = __webpack_require__(43);
  var gOPNExt = __webpack_require__(69);
  var $ = __webpack_require__(70);
  var $DP = __webpack_require__(7);
  var $keys = __webpack_require__(14);
  var getDesc = $.f;
  var dP = $DP.f;
  var gOPN = gOPNExt.f;
  var Symbol = global.Symbol;
  var $JSON = global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var HIDDEN = wks("_hidden");
  var TO_PRIMITIVE = wks("toPrimitive");
  /** @type {function(this:Object, string): boolean} */
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = shared("symbol-registry");
  var AllSymbols = shared("symbols");
  var OPSymbols = shared("op-symbols");
  var ObjectProto = Object.prototype;
  /** @type {boolean} */
  var USE_NATIVE = "function" == typeof Symbol;
  var node = global.QObject;
  /** @type {boolean} */
  var setter = !node || !node.prototype || !node.prototype.findChild;
  var setDesc = DESCRIPTORS && $fails(function() {
    return 7 != _create(dP({}, "a", {
      get : function() {
        return dP(this, "a", {
          value : 7
        }).a;
      }
    })).a;
  }) ? function(target, key, x) {
    var desc = getDesc(ObjectProto, key);
    if (desc) {
      delete ObjectProto[key];
    }
    dP(target, key, x);
    if (desc && target !== ObjectProto) {
      dP(ObjectProto, key, desc);
    }
  } : dP;
  /**
   * @param {!Function} tag
   * @return {?}
   */
  var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create(Symbol.prototype);
    return sym._k = tag, sym;
  };
  /** @type {function(?): ?} */
  var isSymbol = USE_NATIVE && "symbol" == typeof Symbol.iterator ? function(x) {
    return "symbol" == typeof x;
  } : function(name) {
    return name instanceof Symbol;
  };
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {!Object} desc
   * @return {?}
   */
  var defineProperty = function(obj, key, desc) {
    return obj === ObjectProto && defineProperty(OPSymbols, key, desc), copy(obj), key = toPrimitive(key, true), copy(desc), has(AllSymbols, key) ? (desc.enumerable ? (has(obj, HIDDEN) && obj[HIDDEN][key] && (obj[HIDDEN][key] = false), desc = _create(desc, {
      enumerable : createDesc(0, false)
    })) : (has(obj, HIDDEN) || dP(obj, HIDDEN, createDesc(1, {})), obj[HIDDEN][key] = true), setDesc(obj, key, desc)) : dP(obj, key, desc);
  };
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  var set = function(target, key) {
    copy(target);
    var p;
    var r = eq(key = toObject(key));
    /** @type {number} */
    var i = 0;
    var n = r.length;
    for (; n > i;) {
      defineProperty(target, p = r[i++], key[p]);
    }
    return target;
  };
  /**
   * @param {!Object} obj
   * @param {?} key
   * @return {?}
   */
  var create = function(obj, key) {
    return void 0 === key ? _create(obj) : set(_create(obj), key);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  var propertyIsEnumerable = function(key) {
    /** @type {boolean} */
    var e = isEnum.call(this, key = toPrimitive(key, true));
    return !(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) && (!(e || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || e);
  };
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  var getOwnPropertyDescriptor = function(target, key) {
    if (target = toObject(target), key = toPrimitive(key, true), target !== ObjectProto || !has(AllSymbols, key) || has(OPSymbols, key)) {
      var desc = getDesc(target, key);
      return !desc || !has(AllSymbols, key) || has(target, HIDDEN) && target[HIDDEN][key] || (desc.enumerable = true), desc;
    }
  };
  /**
   * @param {!Object} target
   * @return {?}
   */
  var getOwnPropertyNames = function(target) {
    var key;
    var names = gOPN(toObject(target));
    /** @type {!Array} */
    var result = [];
    /** @type {number} */
    var i = 0;
    for (; names.length > i;) {
      if (!(has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META)) {
        result.push(key);
      }
    }
    return result;
  };
  /**
   * @param {!Object} target
   * @return {?}
   */
  var getOwnPropertySymbols = function(target) {
    var key;
    /** @type {boolean} */
    var IS_OP = target === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toObject(target));
    /** @type {!Array} */
    var result = [];
    /** @type {number} */
    var i = 0;
    for (; names.length > i;) {
      if (!(!has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key))) {
        result.push(AllSymbols[key]);
      }
    }
    return result;
  };
  if (!USE_NATIVE) {
    /**
     * @return {?}
     */
    Symbol = function() {
      if (this instanceof Symbol) {
        throw TypeError("Symbol is not a constructor!");
      }
      var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
      /**
       * @param {!Object} name
       * @return {undefined}
       */
      var set = function(name) {
        if (this === ObjectProto) {
          set.call(OPSymbols, name);
        }
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) {
          /** @type {boolean} */
          this[HIDDEN][tag] = false;
        }
        setDesc(this, tag, createDesc(1, name));
      };
      return DESCRIPTORS && setter && setDesc(ObjectProto, tag, {
        configurable : true,
        set : set
      }), wrap(tag);
    };
    $redef(Symbol.prototype, "toString", function() {
      return this._k;
    });
    /** @type {function(!Object, string): ?} */
    $.f = getOwnPropertyDescriptor;
    /** @type {function(!Object, string, !Object): ?} */
    $DP.f = defineProperty;
    /** @type {function(!Object): ?} */
    __webpack_require__(45).f = gOPNExt.f = getOwnPropertyNames;
    /** @type {function(!Object): ?} */
    __webpack_require__(20).f = propertyIsEnumerable;
    /** @type {function(!Object): ?} */
    __webpack_require__(33).f = getOwnPropertySymbols;
    if (DESCRIPTORS && !__webpack_require__(24)) {
      $redef(ObjectProto, "propertyIsEnumerable", propertyIsEnumerable, true);
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    gOPS.f = function(obj) {
      return wrap(wks(obj));
    };
  }
  $export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Symbol : Symbol
  });
  /** @type {!Array<string>} */
  var symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",");
  /** @type {number} */
  var i = 0;
  for (; symbols.length > i;) {
    wks(symbols[i++]);
  }
  var keys = $keys(wks.store);
  /** @type {number} */
  var LIMIT = 0;
  for (; keys.length > LIMIT;) {
    isArray(keys[LIMIT++]);
  }
  $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
    for : function(key) {
      return has(SymbolRegistry, key = key + "") ? SymbolRegistry[key] : SymbolRegistry[key] = Symbol(key);
    },
    keyFor : function(key) {
      if (!isSymbol(key)) {
        throw TypeError(key + " is not a symbol!");
      }
      var attrText;
      for (attrText in SymbolRegistry) {
        if (SymbolRegistry[attrText] === key) {
          return attrText;
        }
      }
    },
    useSetter : function() {
      /** @type {boolean} */
      setter = true;
    },
    useSimple : function() {
      /** @type {boolean} */
      setter = false;
    }
  });
  $export($export.S + $export.F * !USE_NATIVE, "Object", {
    create : create,
    defineProperty : defineProperty,
    defineProperties : set,
    getOwnPropertyDescriptor : getOwnPropertyDescriptor,
    getOwnPropertyNames : getOwnPropertyNames,
    getOwnPropertySymbols : getOwnPropertySymbols
  });
  if ($JSON) {
    $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
      var S = Symbol();
      return "[null]" != _stringify([S]) || "{}" != _stringify({
        a : S
      }) || "{}" != _stringify(Object(S));
    })), "JSON", {
      stringify : function(value) {
        if (void 0 !== value && !isSymbol(value)) {
          var type;
          var method;
          /** @type {!Array} */
          var args = [value];
          /** @type {number} */
          var i = 1;
          for (; arguments.length > i;) {
            args.push(arguments[i++]);
          }
          return type = args[1], "function" == typeof type && (method = type), !method && escape(type) || (type = function(path, value) {
            if (method && (value = method.call(this, path, value)), !isSymbol(value)) {
              return value;
            }
          }), args[1] = type, _stringify.apply($JSON, args);
        }
      }
    });
  }
  if (!Symbol.prototype[TO_PRIMITIVE]) {
    __webpack_require__(10)(Symbol.prototype, TO_PRIMITIVE, Symbol.prototype.valueOf);
  }
  setTag(Symbol, "Symbol");
  setTag(Math, "Math", true);
  setTag(global.JSON, "JSON", true);
}, function(module, canCreateDiscussions, __webpack_require__) {
  var META = __webpack_require__(18)("meta");
  var isObject = __webpack_require__(11);
  var has = __webpack_require__(5);
  var setDesc = __webpack_require__(7).f;
  /** @type {number} */
  var id = 0;
  /** @type {function(!Object): boolean} */
  var isExtensible = Object.isExtensible || function() {
    return true;
  };
  /** @type {boolean} */
  var FREEZE = !__webpack_require__(16)(function() {
    return isExtensible(Object.preventExtensions({}));
  });
  /**
   * @param {!Object} it
   * @return {undefined}
   */
  var setMeta = function(it) {
    setDesc(it, META, {
      value : {
        i : "O" + ++id,
        w : {}
      }
    });
  };
  /**
   * @param {string} it
   * @param {?} create
   * @return {?}
   */
  var fastKey = function(it, create) {
    if (!isObject(it)) {
      return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
    }
    if (!has(it, META)) {
      if (!isExtensible(it)) {
        return "F";
      }
      if (!create) {
        return "E";
      }
      setMeta(it);
    }
    return it[META].i;
  };
  /**
   * @param {undefined} it
   * @param {?} create
   * @return {?}
   */
  var getWeak = function(it, create) {
    if (!has(it, META)) {
      if (!isExtensible(it)) {
        return true;
      }
      if (!create) {
        return false;
      }
      setMeta(it);
    }
    return it[META].w;
  };
  /**
   * @param {undefined} it
   * @return {?}
   */
  var onFreeze = function(it) {
    return FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it), it;
  };
  var meta = module.exports = {
    KEY : META,
    NEED : false,
    fastKey : fastKey,
    getWeak : getWeak,
    onFreeze : onFreeze
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var global = __webpack_require__(3);
  var core = __webpack_require__(4);
  var LIBRARY = __webpack_require__(24);
  var a = __webpack_require__(39);
  var callback = __webpack_require__(7).f;
  /**
   * @param {string} target
   * @return {undefined}
   */
  mixin.exports = function(target) {
    var obj = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (!("_" == target.charAt(0) || target in obj)) {
      callback(obj, target, {
        value : a.f(target)
      });
    }
  };
}, function(mixin, canCreateDiscussions, require) {
  var r = require(14);
  var fileData = require(33);
  var pIE = require(20);
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    var result = r(target);
    var callback = fileData.f;
    if (callback) {
      var key;
      var r = callback(target);
      var isEnum = pIE.f;
      /** @type {number} */
      var offset = 0;
      for (; r.length > offset;) {
        if (isEnum.call(target, key = r[offset++])) {
          result.push(key);
        }
      }
    }
    return result;
  };
}, function(mixin, canCreateDiscussions, saveNotifs) {
  var normalizeTarget = saveNotifs(30);
  /** @type {function(...?): number} */
  var log = Math.max;
  /** @type {function(...?): number} */
  var method = Math.min;
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    return target = normalizeTarget(target), target < 0 ? log(target + key, 0) : method(target, key);
  };
}, function(mixin, canCreateDiscussions, kvFn) {
  var r = kvFn(15);
  /** @type {function(*): boolean} */
  mixin.exports = Array.isArray || function(target) {
    return "Array" == r(target);
  };
}, function(mixin, canCreateDiscussions, require) {
  var dP = require(7);
  var searchFormContains = require(8);
  var write = require(14);
  /** @type {!Function} */
  mixin.exports = require(9) ? Object.defineProperties : function(target, key) {
    searchFormContains(target);
    var P;
    var w = write(key);
    var s = w.length;
    /** @type {number} */
    var ref5 = 0;
    for (; s > ref5;) {
      dP.f(target, P = w[ref5++], key[P]);
    }
    return target;
  };
}, function(module, canCreateDiscussions, require) {
  var $ = require(12);
  var callback = require(45).f;
  /** @type {function(this:*): string} */
  var fnToStr = {}.toString;
  /** @type {!Array} */
  var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var toArray = function(obj) {
    try {
      return callback(obj);
    } catch (t) {
      return a.slice();
    }
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  module.exports.f = function(value) {
    return a && "[object Window]" == fnToStr.call(value) ? toArray(value) : callback($(value));
  };
}, function(canCreateDiscussions, exports, require) {
  var keymap = require(20);
  var extend = require(17);
  var normalizeTarget = require(12);
  var getValidKey = require(27);
  var a = require(5);
  var TagHourlyStat = require(38);
  /** @type {function(T, string): (ObjectPropertyDescriptor<T>|undefined)} */
  var gOPD = Object.getOwnPropertyDescriptor;
  /** @type {!Function} */
  exports.f = require(9) ? gOPD : function(target, key) {
    if (target = normalizeTarget(target), key = getValidKey(key, true), TagHourlyStat) {
      try {
        return gOPD(target, key);
      } catch (t) {
      }
    }
    if (a(target, key)) {
      return extend(!keymap.f.call(target, key), target[key]);
    }
  };
}, function(module, canCreateDiscussions, require) {
  require(46);
  require(47);
  require(49);
  require(77);
  module.exports = require(4).Promise;
}, function(mixin, canCreateDiscussions, filter) {
  var map = filter(30);
  var mod = filter(25);
  /**
   * @param {!Object} value
   * @return {?}
   */
  mixin.exports = function(value) {
    return function(module, doc) {
      var page;
      var a;
      var m = mod(module) + "";
      var c = map(doc);
      var r = m.length;
      return c < 0 || c >= r ? value ? "" : void 0 : (page = m.charCodeAt(c), page < 55296 || page > 56319 || c + 1 === r || (a = m.charCodeAt(c + 1)) < 56320 || a > 57343 ? value ? m.charAt(c) : page : value ? m.slice(c, c + 2) : a - 56320 + (page - 55296 << 10) + 65536);
    };
  };
}, function(mixin, canCreateDiscussions, require) {
  var extend = require(43);
  var $ = require(17);
  var equal = require(23);
  var value = {};
  require(10)(value, require(2)("iterator"), function() {
    return this;
  });
  /**
   * @param {!Object} target
   * @param {string} key
   * @param {!Function} data
   * @return {undefined}
   */
  mixin.exports = function(target, key, data) {
    target.prototype = extend(value, {
      next : $(1, data)
    });
    equal(target, key + " Iterator");
  };
}, function(mixin, canCreateDiscussions, require) {
  var hasOwn = require(5);
  var normalizeTarget = require(35);
  var name = require(31)("IE_PROTO");
  var ObjectProto = Object.prototype;
  /** @type {function(!Object): (Object|null)} */
  mixin.exports = Object.getPrototypeOf || function(target) {
    return target = normalizeTarget(target), hasOwn(target, name) ? target[name] : "function" == typeof target.constructor && target instanceof target.constructor ? target.constructor.prototype : target instanceof Object ? ObjectProto : null;
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  var addToUnscopables = __webpack_require__(50);
  var step = __webpack_require__(76);
  var Iterators = __webpack_require__(21);
  var toIObject = __webpack_require__(12);
  module.exports = __webpack_require__(48)(Array, "Array", function(iterated, kind) {
    this._t = toIObject(iterated);
    /** @type {number} */
    this._i = 0;
    /** @type {!Function} */
    this._k = kind;
  }, function() {
    var O = this._t;
    var undefined = this._k;
    /** @type {number} */
    var index = this._i++;
    return !O || index >= O.length ? (this._t = void 0, step(1)) : "keys" == undefined ? step(0, index) : "values" == undefined ? step(0, O[index]) : step(0, [index, O[index]]);
  }, "values");
  Iterators.Arguments = Iterators.Array;
  addToUnscopables("keys");
  addToUnscopables("values");
  addToUnscopables("entries");
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    return {
      value : key,
      done : !!target
    };
  };
}, function(canCreateDiscussions, isSlidingUp, require) {
  var remove;
  var template;
  var defer;
  var p5;
  var LIBRARY = require(24);
  var global = require(3);
  var ctx = require(19);
  var minify = require(34);
  var $export = require(6);
  var isFunction = require(11);
  var isPromise = require(22);
  var fn = require(78);
  var resolve = require(79);
  var factory = require(80);
  var map = require(54).set;
  var asap = require(82)();
  var tpl = require(55);
  var create = require(83);
  var dropRequireCache = require(84);
  var TypeError = global.TypeError;
  var process = global.process;
  var Promise = global.Promise;
  /** @type {boolean} */
  var isNode = "process" == minify(process);
  /**
   * @return {undefined}
   */
  var cb = function() {
  };
  var $ = template = tpl.f;
  /** @type {boolean} */
  var USE_NATIVE = !!function() {
    try {
      var promise = Promise.resolve(1);
      /** @type {function(?): undefined} */
      var FakePromise = (promise.constructor = {})[require(2)("species")] = function(find_options) {
        find_options(cb, cb);
      };
      return (isNode || "function" == typeof PromiseRejectionEvent) && promise.then(cb) instanceof FakePromise;
    } catch (t) {
    }
  }();
  /**
   * @param {?} value
   * @return {?}
   */
  var isThenable = function(value) {
    var then;
    return !(!isFunction(value) || "function" != typeof(then = value.then)) && then;
  };
  /**
   * @param {!Object} promise
   * @param {boolean} isReject
   * @return {undefined}
   */
  var notify = function(promise, isReject) {
    if (!promise._n) {
      /** @type {boolean} */
      promise._n = true;
      var chain = promise._c;
      asap(function() {
        var value = promise._v;
        /** @type {boolean} */
        var ok = 1 == promise._s;
        /** @type {number} */
        var i = 0;
        for (; chain.length > i;) {
          !function(reaction) {
            var result;
            var then;
            var cb = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            try {
              if (cb) {
                if (!ok) {
                  if (2 == promise._h) {
                    onHandleUnhandled(promise);
                  }
                  /** @type {number} */
                  promise._h = 1;
                }
                if (true === cb) {
                  result = value;
                } else {
                  if (domain) {
                    domain.enter();
                  }
                  result = cb(value);
                  if (domain) {
                    domain.exit();
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError("Promise-chain cycle"));
                } else {
                  if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else {
                    resolve(result);
                  }
                }
              } else {
                reject(value);
              }
            } catch (reasons) {
              reject(reasons);
            }
          }(chain[i++]);
        }
        /** @type {!Array} */
        promise._c = [];
        /** @type {boolean} */
        promise._n = false;
        if (isReject && !promise._h) {
          onUnhandled(promise);
        }
      });
    }
  };
  /**
   * @param {!Object} promise
   * @return {undefined}
   */
  var onUnhandled = function(promise) {
    map.call(global, function() {
      var p;
      var handler;
      var console;
      var value = promise._v;
      var show = isUnhandled(promise);
      if (show && (p = create(function() {
        if (isNode) {
          process.emit("unhandledRejection", value, promise);
        } else {
          if (handler = global.onunhandledrejection) {
            handler({
              promise : promise,
              reason : value
            });
          } else {
            if ((console = global.console) && console.error) {
              console.error("Unhandled promise rejection", value);
            }
          }
        }
      }), promise._h = isNode || isUnhandled(promise) ? 2 : 1), promise._a = void 0, show && p.e) {
        throw p.v;
      }
    });
  };
  /**
   * @param {!Object} promise
   * @return {?}
   */
  var isUnhandled = function(promise) {
    if (1 == promise._h) {
      return false;
    }
    var object;
    var args = promise._a || promise._c;
    /** @type {number} */
    var argIndex = 0;
    for (; args.length > argIndex;) {
      if (object = args[argIndex++], object.fail || !isUnhandled(object.promise)) {
        return false;
      }
    }
    return true;
  };
  /**
   * @param {!Object} promise
   * @return {undefined}
   */
  var onHandleUnhandled = function(promise) {
    map.call(global, function() {
      var handler;
      if (isNode) {
        process.emit("rejectionHandled", promise);
      } else {
        if (handler = global.onrejectionhandled) {
          handler({
            promise : promise,
            reason : promise._v
          });
        }
      }
    });
  };
  /**
   * @param {number} value
   * @return {undefined}
   */
  var $reject = function(value) {
    var promise = this;
    if (!promise._d) {
      /** @type {boolean} */
      promise._d = true;
      promise = promise._w || promise;
      /** @type {number} */
      promise._v = value;
      /** @type {number} */
      promise._s = 2;
      if (!promise._a) {
        promise._a = promise._c.slice();
      }
      notify(promise, true);
    }
  };
  /**
   * @param {number} value
   * @return {undefined}
   */
  var $resolve = function(value) {
    var then;
    var promise = this;
    if (!promise._d) {
      /** @type {boolean} */
      promise._d = true;
      promise = promise._w || promise;
      try {
        if (promise === value) {
          throw TypeError("Promise can't be resolved itself");
        }
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              _w : promise,
              _d : false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          /** @type {number} */
          promise._v = value;
          /** @type {number} */
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({
          _w : promise,
          _d : false
        }, e);
      }
    }
  };
  if (!USE_NATIVE) {
    /**
     * @param {!Object} target
     * @return {undefined}
     */
    Promise = function(target) {
      fn(this, Promise, "Promise", "_h");
      isPromise(target);
      remove.call(this);
      try {
        target(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch (e) {
        $reject.call(this, e);
      }
    };
    /**
     * @param {?} trendId
     * @return {undefined}
     */
    remove = function(trendId) {
      /** @type {!Array} */
      this._c = [];
      this._a = void 0;
      /** @type {number} */
      this._s = 0;
      /** @type {boolean} */
      this._d = false;
      this._v = void 0;
      /** @type {number} */
      this._h = 0;
      /** @type {boolean} */
      this._n = false;
    };
    remove.prototype = require(85)(Promise.prototype, {
      then : function(value, fn) {
        var d = $(factory(this, Promise));
        return d.ok = "function" != typeof value || value, d.fail = "function" == typeof fn && fn, d.domain = isNode ? process.domain : void 0, this._c.push(d), this._a && this._a.push(d), this._s && notify(this, false), d.promise;
      },
      catch : function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    /**
     * @return {undefined}
     */
    defer = function() {
      var promise = new remove;
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject = ctx($reject, promise, 1);
    };
    /** @type {function(undefined): ?} */
    tpl.f = $ = function(obj) {
      return obj === Promise || obj === p5 ? new defer(obj) : template(obj);
    };
  }
  $export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Promise : Promise
  });
  require(23)(Promise, "Promise");
  require(86)("Promise");
  p5 = require(4).Promise;
  $export($export.S + $export.F * !USE_NATIVE, "Promise", {
    reject : function(e) {
      var op = $(this);
      return (0, op.reject)(e), op.promise;
    }
  });
  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), "Promise", {
    resolve : function(target) {
      return dropRequireCache(LIBRARY && this === p5 ? Promise : this, target);
    }
  });
  $export($export.S + $export.F * !(USE_NATIVE && require(56)(function(t) {
    Promise.all(t).catch(cb);
  })), "Promise", {
    all : function(t) {
      var msg = this;
      var d = $(msg);
      var resolve = d.resolve;
      var reject = d.reject;
      var e = create(function() {
        /** @type {!Array} */
        var paths = [];
        /** @type {number} */
        var _g = 0;
        /** @type {number} */
        var a = 1;
        resolve(t, false, function(t) {
          /** @type {number} */
          var i = _g++;
          /** @type {boolean} */
          var c = false;
          paths.push(void 0);
          a++;
          msg.resolve(t).then(function(p) {
            if (!c) {
              /** @type {boolean} */
              c = true;
              paths[i] = p;
              if (!--a) {
                resolve(paths);
              }
            }
          }, reject);
        });
        if (!--a) {
          resolve(paths);
        }
      });
      return e.e && reject(e.v), d.promise;
    },
    race : function(entries) {
      var o = this;
      var d = $(o);
      var reject = d.reject;
      var msg = create(function() {
        resolve(entries, false, function(t) {
          o.resolve(t).then(d.resolve, reject);
        });
      });
      return msg.e && reject(msg.v), d.promise;
    }
  });
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @param {!Object} key
   * @param {!Function} name
   * @param {?} method
   * @return {?}
   */
  mixin.exports = function(target, key, name, method) {
    if (!(target instanceof key) || void 0 !== method && method in target) {
      throw TypeError(name + ": incorrect invocation!");
    }
    return target;
  };
}, function(mixin, exports, $) {
  var filter = $(19);
  var cb = $(51);
  var next = $(52);
  var validate = $(8);
  var a = $(29);
  var callback = $(53);
  var BREAK = {};
  var RETURN = {};
  /** @type {function(!Object, string, !Function, (Object|string), boolean): ?} */
  exports = mixin.exports = function(obj, key, type, source, condition) {
    var m;
    var data;
    var keys;
    var result;
    var t = condition ? function() {
      return obj;
    } : callback(obj);
    var fn = filter(type, source, key ? 2 : 1);
    /** @type {number} */
    var k = 0;
    if ("function" != typeof t) {
      throw TypeError(obj + " is not iterable!");
    }
    if (next(t)) {
      m = a(obj.length);
      for (; m > k; k++) {
        if ((result = key ? fn(validate(data = obj[k])[0], data[1]) : fn(obj[k])) === BREAK || result === RETURN) {
          return result;
        }
      }
    } else {
      keys = t.call(obj);
      for (; !(data = keys.next()).done;) {
        if ((result = cb(keys, fn, data.value, key)) === BREAK || result === RETURN) {
          return result;
        }
      }
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
}, function(mixin, canCreateDiscussions, require) {
  var gm = require(8);
  var compare = require(22);
  var resizeFn = require(2)("species");
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    var latest_verCode;
    var file = gm(target).constructor;
    return void 0 === file || void 0 == (latest_verCode = gm(file)[resizeFn]) ? key : compare(latest_verCode);
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} value
   * @param {string} key
   * @param {?} x
   * @return {?}
   */
  mixin.exports = function(value, key, x) {
    /** @type {boolean} */
    var done = void 0 === x;
    switch(key.length) {
      case 0:
        return done ? value() : value.call(x);
      case 1:
        return done ? value(key[0]) : value.call(x, key[0]);
      case 2:
        return done ? value(key[0], key[1]) : value.call(x, key[0], key[1]);
      case 3:
        return done ? value(key[0], key[1], key[2]) : value.call(x, key[0], key[1], key[2]);
      case 4:
        return done ? value(key[0], key[1], key[2], key[3]) : value.call(x, key[0], key[1], key[2], key[3]);
    }
    return value.apply(x, key);
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var global = __webpack_require__(3);
  var macrotask = __webpack_require__(54).set;
  var Observer = global.MutationObserver || global.WebKitMutationObserver;
  var process = global.process;
  var Promise = global.Promise;
  /** @type {boolean} */
  var notKeyPress = "process" == __webpack_require__(15)(process);
  /**
   * @return {?}
   */
  mixin.exports = function() {
    var link;
    var sel;
    var fn;
    /**
     * @return {undefined}
     */
    var flush = function() {
      var d;
      var item;
      if (notKeyPress && (d = process.domain)) {
        d.exit();
      }
      for (; link;) {
        item = link.fn;
        link = link.next;
        try {
          item();
        } catch (r) {
          throw link ? fn() : sel = void 0, r;
        }
      }
      sel = void 0;
      if (d) {
        d.enter();
      }
    };
    if (notKeyPress) {
      /**
       * @return {undefined}
       */
      fn = function() {
        process.nextTick(flush);
      };
    } else {
      if (Observer) {
        /** @type {boolean} */
        var a = true;
        /** @type {!Text} */
        var c = document.createTextNode("");
        (new Observer(flush)).observe(c, {
          characterData : true
        });
        /**
         * @return {undefined}
         */
        fn = function() {
          /** @type {boolean} */
          c.data = a = !a;
        };
      } else {
        if (Promise && Promise.resolve) {
          var controller = Promise.resolve();
          /**
           * @return {undefined}
           */
          fn = function() {
            controller.then(flush);
          };
        } else {
          /**
           * @return {undefined}
           */
          fn = function() {
            macrotask.call(global, flush);
          };
        }
      }
    }
    return function(continueWith) {
      var item = {
        fn : continueWith,
        next : void 0
      };
      if (sel) {
        sel.next = item;
      }
      if (!link) {
        link = item;
        fn();
      }
      sel = item;
    };
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    try {
      return {
        e : false,
        v : target()
      };
    } catch (clnInput) {
      return {
        e : true,
        v : clnInput
      };
    }
  };
}, function(mixin, canCreateDiscussions, n) {
  var l = n(8);
  var next = n(11);
  var end = n(55);
  /**
   * @param {!Object} target
   * @param {string} key
   * @return {?}
   */
  mixin.exports = function(target, key) {
    if (l(target), next(key) && key.constructor === target) {
      return key;
    }
    var ioDeferred = end.f(target);
    return (0, ioDeferred.resolve)(key), ioDeferred.promise;
  };
}, function(mixin, canCreateDiscussions, filter) {
  var set = filter(13);
  /**
   * @param {!Object} target
   * @param {string} key
   * @param {!Function} data
   * @return {?}
   */
  mixin.exports = function(target, key, data) {
    var k;
    for (k in key) {
      set(target, k, key[k], data);
    }
    return target;
  };
}, function(mixin, canCreateDiscussions, require) {
  var translation = require(3);
  var $ = require(7);
  var type = require(9);
  var index = require(2)("species");
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  mixin.exports = function(target) {
    var result = translation[target];
    if (type && result && !result[index]) {
      $.f(result, index, {
        configurable : true,
        get : function() {
          return this;
        }
      });
    }
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(47);
  __webpack_require__(88);
  module.exports = __webpack_require__(4).Array.from;
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var ctx = __webpack_require__(19);
  var $export = __webpack_require__(6);
  var toObject = __webpack_require__(35);
  var call = __webpack_require__(51);
  var isArrayIter = __webpack_require__(52);
  var toLength = __webpack_require__(29);
  var createProperty = __webpack_require__(89);
  var getIterFn = __webpack_require__(53);
  $export($export.S + $export.F * !__webpack_require__(56)(function(t) {
    Array.from(t);
  }), "Array", {
    from : function(target) {
      var length;
      var result;
      var step;
      var iterator;
      var O = toObject(target);
      var C = "function" == typeof this ? this : Array;
      /** @type {number} */
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : void 0;
      /** @type {boolean} */
      var mapping = void 0 !== mapfn;
      /** @type {number} */
      var index = 0;
      var iterFn = getIterFn(O);
      if (mapping && (mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2)), void 0 == iterFn || C == Array && isArrayIter(iterFn)) {
        length = toLength(O.length);
        result = new C(length);
        for (; length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      } else {
        iterator = iterFn.call(O);
        result = new C;
        for (; !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      }
      return result.length = index, result;
    }
  });
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var dP = __webpack_require__(7);
  var createDesc = __webpack_require__(17);
  /**
   * @param {!Object} target
   * @param {string} key
   * @param {!Function} value
   * @return {undefined}
   */
  mixin.exports = function(target, key, value) {
    if (key in target) {
      dP.f(target, key, createDesc(0, value));
    } else {
      /** @type {!Function} */
      target[key] = value;
    }
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(91);
  mixin.exports = __webpack_require__(4).Array.includes;
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var $export = __webpack_require__(6);
  var reduce = __webpack_require__(42)(true);
  $export($export.P, "Array", {
    includes : function(target) {
      return reduce(this, target, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  __webpack_require__(50)("includes");
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(93);
  mixin.exports = __webpack_require__(4).String.includes;
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var $export = __webpack_require__(6);
  var filter = __webpack_require__(94);
  $export($export.P + $export.F * __webpack_require__(96)("includes"), "String", {
    includes : function(target) {
      return !!~filter(this, target, "includes").indexOf(target, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function(mixin, canCreateDiscussions, n) {
  var next = n(95);
  var l = n(25);
  /**
   * @param {!Object} target
   * @param {string} key
   * @param {!Function} prop
   * @return {?}
   */
  mixin.exports = function(target, key, prop) {
    if (next(key)) {
      throw TypeError("String#" + prop + " doesn't accept regex!");
    }
    return l(target) + "";
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var eachTextNode = __webpack_require__(11);
  var recalcBody = __webpack_require__(15);
  var i = __webpack_require__(2)("match");
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    var insTarget;
    return eachTextNode(target) && (void 0 !== (insTarget = target[i]) ? !!insTarget : "RegExp" == recalcBody(target));
  };
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  var ref = __webpack_require__(2)("match");
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    /** @type {!RegExp} */
    var e = /./;
    try {
      "/./"[target](e);
    } catch (n) {
      try {
        return e[ref] = false, !"/./"[target](e);
      } catch (t) {
      }
    }
    return true;
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(98);
  module.exports = __webpack_require__(4).Object.assign;
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  var $export = __webpack_require__(6);
  $export($export.S + $export.F, "Object", {
    assign : __webpack_require__(99)
  });
}, function(module, canCreateDiscussions, require) {
  var moment = require(14);
  var constants = require(33);
  var pIE = require(20);
  var numeral = require(35);
  var serveRender = require(41);
  /** @type {function(!Object, ...(Object|null)): !Object} */
  var $assign = Object.assign;
  /** @type {!Function} */
  module.exports = !$assign || require(16)(function() {
    var A = {};
    var B = {};
    var S = Symbol();
    /** @type {string} */
    var K = "abcdefghijklmnopqrst";
    return A[S] = 7, K.split("").forEach(function(k) {
      /** @type {string} */
      B[k] = k;
    }), 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K;
  }) ? function(target, key) {
    var a = numeral(target);
    /** @type {number} */
    var length = arguments.length;
    /** @type {number} */
    var i = 1;
    var format = constants.f;
    var isEnum = pIE.f;
    for (; length > i;) {
      var key;
      var obj = serveRender(arguments[i++]);
      var value = format ? moment(obj).concat(format(obj)) : moment(obj);
      var length = value.length;
      /** @type {number} */
      var j = 0;
      for (; length > j;) {
        if (isEnum.call(obj, key = value[j++])) {
          a[key] = obj[key];
        }
      }
    }
    return a;
  } : $assign;
}, function(obj, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(101);
  obj.exports = __webpack_require__(4).Object.entries;
}, function(canCreateDiscussions, isSlidingUp, require) {
  var $def = require(6);
  var EnumerableOwnPropertiesAbstraction = require(102)(true);
  $def($def.S, "Object", {
    entries : function(obj) {
      return EnumerableOwnPropertiesAbstraction(obj);
    }
  });
}, function(mixin, canCreateDiscussions, require) {
  var h = require(14);
  var open = require(12);
  var callback = require(20).f;
  /**
   * @param {!Object} target
   * @return {?}
   */
  mixin.exports = function(target) {
    return function(url) {
      var prop;
      var window = open(url);
      var p = h(window);
      var c = p.length;
      /** @type {number} */
      var midcolumn = 0;
      /** @type {!Array} */
      var values = [];
      for (; c > midcolumn;) {
        if (callback.call(window, prop = p[midcolumn++])) {
          values.push(target ? [prop, window[prop]] : window[prop]);
        }
      }
      return values;
    };
  };
}, function(module, canCreateDiscussions, __webpack_require__) {
  __webpack_require__(49);
  module.exports = __webpack_require__(4).Array.values;
}, function(module, gen34_options, moment) {
  (function(object) {
    !function(global) {
      /**
       * @param {!Function} innerFn
       * @param {!Function} model
       * @param {!Function} self
       * @param {!Array} tryLocsList
       * @return {?}
       */
      function wrap(innerFn, model, self, tryLocsList) {
        var data = model && model.prototype instanceof Model ? model : Model;
        /** @type {!Object} */
        var generator = Object.create(data.prototype);
        var context = new Context(tryLocsList || []);
        return generator._invoke = render(innerFn, self, context), generator;
      }
      /**
       * @param {!Function} fn
       * @param {!Object} obj
       * @param {!Object} arg
       * @return {?}
       */
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type : "normal",
            arg : fn.call(obj, arg)
          };
        } catch (keystableId) {
          return {
            type : "throw",
            arg : keystableId
          };
        }
      }
      /**
       * @return {undefined}
       */
      function Model() {
      }
      /**
       * @return {undefined}
       */
      function GeneratorFunction() {
      }
      /**
       * @return {undefined}
       */
      function GeneratorFunctionPrototype() {
      }
      /**
       * @param {!Object} prototype
       * @return {undefined}
       */
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          /**
           * @param {!Array} args
           * @return {?}
           */
          prototype[method] = function(args) {
            return this._invoke(method, args);
          };
        });
      }
      /**
       * @param {!Object} generator
       * @return {undefined}
       */
      function AsyncIterator(generator) {
        /**
         * @param {string} method
         * @param {!Array} arg
         * @param {!Function} done
         * @param {!Function} reject
         * @return {?}
         */
        function error(method, arg, done, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if ("throw" !== record.type) {
            var result = record.arg;
            var value = result.value;
            return value && "object" == typeof value && hasOwn.call(value, "__await") ? Promise.resolve(value.__await).then(function(name) {
              error("next", name, done, reject);
            }, function(name) {
              error("throw", name, done, reject);
            }) : Promise.resolve(value).then(function(t) {
              /** @type {!Object} */
              result.value = t;
              done(result);
            }, reject);
          }
          reject(record.arg);
        }
        /**
         * @param {string} type
         * @param {!Array} arg
         * @return {?}
         */
        function enqueue(type, arg) {
          /**
           * @return {?}
           */
          function callback() {
            return new Promise(function(number, cb) {
              error(type, arg, number, cb);
            });
          }
          return context = context ? context.then(callback, callback) : callback();
        }
        if ("object" == typeof global.process && global.process.domain) {
          error = global.process.domain.bind(error);
        }
        var context;
        /** @type {function(string, !Array): ?} */
        this._invoke = enqueue;
      }
      /**
       * @param {!Function} fn
       * @param {string} self
       * @param {!Object} context
       * @return {?}
       */
      function render(fn, self, context) {
        /** @type {string} */
        var state = GenStateSuspendedStart;
        return function(foo, undefined) {
          if (state === GenStateExecuting) {
            throw Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if ("throw" === foo) {
              throw undefined;
            }
            return next();
          }
          /** @type {string} */
          context.method = foo;
          /** @type {string} */
          context.arg = undefined;
          for (;;) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) {
                  continue;
                }
                return delegateResult;
              }
            }
            if ("next" === context.method) {
              context.sent = context._sent = context.arg;
            } else {
              if ("throw" === context.method) {
                if (state === GenStateSuspendedStart) {
                  throw state = GenStateCompleted, context.arg;
                }
                context.dispatchException(context.arg);
              } else {
                if ("return" === context.method) {
                  context.abrupt("return", context.arg);
                }
              }
            }
            /** @type {string} */
            state = GenStateExecuting;
            var record = tryCatch(fn, self, context);
            if ("normal" === record.type) {
              if (state = context.done ? GenStateCompleted : GenStateSuspendedYield, record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value : record.arg,
                done : context.done
              };
            }
            if ("throw" === record.type) {
              /** @type {string} */
              state = GenStateCompleted;
              /** @type {string} */
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      /**
       * @param {!Object} delegate
       * @param {!Object} context
       * @return {?}
       */
      function maybeInvokeDelegate(delegate, context) {
        var selector = delegate.iterator[context.method];
        if (selector === undefined) {
          if (context.delegate = null, "throw" === context.method) {
            if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) {
              return ContinueSentinel;
            }
            /** @type {string} */
            context.method = "throw";
            /** @type {!TypeError} */
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(selector, delegate.iterator, context.arg);
        if ("throw" === record.type) {
          return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        }
        var result = record.arg;
        return result ? result.done ? (context[delegate.resultName] = result.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : result : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }
      /**
       * @param {!Array} locs
       * @return {undefined}
       */
      function pushTryEntry(locs) {
        var entry = {
          tryLoc : locs[0]
        };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      /**
       * @param {!Object} entry
       * @return {undefined}
       */
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        /** @type {string} */
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      /**
       * @param {!Array} tryLocsList
       * @return {undefined}
       */
      function Context(tryLocsList) {
        /** @type {!Array} */
        this.tryEntries = [{
          tryLoc : "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      /**
       * @param {!Object} value
       * @return {?}
       */
      function values(value) {
        if (value) {
          var command = value[prop];
          if (command) {
            return command.call(value);
          }
          if ("function" == typeof value.next) {
            return value;
          }
          if (!isNaN(value.length)) {
            /** @type {number} */
            var i = -1;
            /**
             * @return {?}
             */
            var vert = function next() {
              for (; ++i < value.length;) {
                if (hasOwn.call(value, i)) {
                  return next.value = value[i], next.done = false, next;
                }
              }
              return next.value = undefined, next.done = true, next;
            };
            return vert.next = vert;
          }
        }
        return {
          next : next
        };
      }
      /**
       * @return {?}
       */
      function next() {
        return {
          value : undefined,
          done : true
        };
      }
      var undefined;
      var Op = Object.prototype;
      /** @type {function(this:Object, *): boolean} */
      var hasOwn = Op.hasOwnProperty;
      /** @type {(function(string=): ?|{})} */
      var $Symbol = "function" == typeof Symbol ? Symbol : {};
      var prop = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      /** @type {boolean} */
      var inModule = "object" == typeof module;
      var runtime = global.regeneratorRuntime;
      if (runtime) {
        return void(inModule && (module.exports = runtime));
      }
      runtime = global.regeneratorRuntime = inModule ? module.exports : {};
      /** @type {function(!Function, !Function, !Function, !Array): ?} */
      runtime.wrap = wrap;
      /** @type {string} */
      var GenStateSuspendedStart = "suspendedStart";
      /** @type {string} */
      var GenStateSuspendedYield = "suspendedYield";
      /** @type {string} */
      var GenStateExecuting = "executing";
      /** @type {string} */
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      var collection = {};
      /**
       * @return {?}
       */
      collection[prop] = function() {
        return this;
      };
      /** @type {function(!Object): (Object|null)} */
      var getProto = Object.getPrototypeOf;
      /** @type {(Object|null)} */
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, prop)) {
        /** @type {!Object} */
        collection = NativeIteratorPrototype;
      }
      /** @type {!Object} */
      var config = GeneratorFunctionPrototype.prototype = Model.prototype = Object.create(collection);
      /** @type {function(): undefined} */
      GeneratorFunction.prototype = config.constructor = GeneratorFunctionPrototype;
      /** @type {function(): undefined} */
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      /** @type {string} */
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
      /**
       * @param {!Object} obj
       * @return {?}
       */
      runtime.isGeneratorFunction = function(obj) {
        /** @type {(!Function|boolean|null)} */
        var ctor = "function" == typeof obj && obj.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      };
      /**
       * @param {!Object} genFun
       * @return {?}
       */
      runtime.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, toStringTagSymbol in genFun || (genFun[toStringTagSymbol] = "GeneratorFunction")), genFun.prototype = Object.create(config), genFun;
      };
      /**
       * @param {?} arg
       * @return {?}
       */
      runtime.awrap = function(arg) {
        return {
          __await : arg
        };
      };
      defineIteratorMethods(AsyncIterator.prototype);
      /**
       * @return {?}
       */
      AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
      };
      /** @type {function(!Object): undefined} */
      runtime.AsyncIterator = AsyncIterator;
      /**
       * @param {!Function} innerFn
       * @param {!Object} fn
       * @param {!Function} self
       * @param {!Array} tryLocsList
       * @return {?}
       */
      runtime.async = function(innerFn, fn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, fn, self, tryLocsList));
        return runtime.isGeneratorFunction(fn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      defineIteratorMethods(config);
      /** @type {string} */
      config[toStringTagSymbol] = "Generator";
      /**
       * @return {?}
       */
      config[prop] = function() {
        return this;
      };
      /**
       * @return {?}
       */
      config.toString = function() {
        return "[object Generator]";
      };
      /**
       * @param {!Object} target
       * @return {?}
       */
      runtime.keys = function(target) {
        /** @type {!Array} */
        var e = [];
        var property;
        for (property in target) {
          e.push(property);
        }
        return e.reverse(), function next() {
          for (; e.length;) {
            var key = e.pop();
            if (key in target) {
              return next.value = key, next.done = false, next;
            }
          }
          return next.done = true, next;
        };
      };
      /** @type {function(!Object): ?} */
      runtime.values = values;
      Context.prototype = {
        constructor : Context,
        reset : function(noalert) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = false, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !noalert) {
            var name;
            for (name in this) {
              if ("t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop : function() {
          /** @type {boolean} */
          this.done = true;
          var entry = this.tryEntries[0];
          var record = entry.completion;
          if ("throw" === record.type) {
            throw record.arg;
          }
          return this.rval;
        },
        dispatchException : function(exception) {
          /**
           * @param {string} callback
           * @param {boolean} download
           * @return {?}
           */
          function handle(callback, download) {
            return record.type = "throw", record.arg = exception, t.next = callback, download && (t.method = "next", t.arg = undefined), !!download;
          }
          if (this.done) {
            throw exception;
          }
          var t = this;
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if ("root" === entry.tryLoc) {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              /** @type {boolean} */
              var hasCatch = hasOwn.call(entry, "catchLoc");
              /** @type {boolean} */
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else {
                  if (!hasFinally) {
                    throw Error("try statement without catch or finally");
                  }
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                }
              }
            }
          }
        },
        abrupt : function(type, arg) {
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            /** @type {null} */
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete : function(record, afterLoc) {
          if ("throw" === record.type) {
            throw record.arg;
          }
          return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish : function(line) {
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === line) {
              return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          }
        },
        catch : function(callback) {
          /** @type {number} */
          var i = this.tryEntries.length - 1;
          for (; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === callback) {
              var record = entry.completion;
              if ("throw" === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield : function(iterable, resultName, nextLoc) {
          return this.delegate = {
            iterator : values(iterable),
            resultName : resultName,
            nextLoc : nextLoc
          }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
      };
    }("object" == typeof object ? object : "object" == typeof window ? window : "object" == typeof self ? self : this);
  }).call(gen34_options, moment(57));
}, function(canCreateDiscussions, isSlidingUp) {
  !function(self) {
    /**
     * @param {string} str
     * @return {?}
     */
    function normalizeName(str) {
      if ("string" != typeof str && (str = str + ""), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(str)) {
        throw new TypeError("Invalid character in header field name");
      }
      return str.toLowerCase();
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function normalizeValue(value) {
      return "string" != typeof value && (value = value + ""), value;
    }
    /**
     * @param {!Array} items
     * @return {?}
     */
    function each(items) {
      var iterable = {
        next : function() {
          var _eof = items.shift();
          return {
            done : void 0 === _eof,
            value : _eof
          };
        }
      };
      return support.iterable && (iterable[Symbol.iterator] = function() {
        return iterable;
      }), iterable;
    }
    /**
     * @param {!Object} headers
     * @return {undefined}
     */
    function Headers(headers) {
      this.map = {};
      if (headers instanceof Headers) {
        headers.forEach(function(children, contents) {
          this.append(contents, children);
        }, this);
      } else {
        if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else {
          if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(key) {
              this.append(key, headers[key]);
            }, this);
          }
        }
      }
    }
    /**
     * @param {?} body
     * @return {?}
     */
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      /** @type {boolean} */
      body.bodyUsed = true;
    }
    /**
     * @param {!Object} reader
     * @return {?}
     */
    function fileReaderReady(reader) {
      return new Promise(function(callback, reject) {
        /**
         * @return {undefined}
         */
        reader.onload = function() {
          callback(reader.result);
        };
        /**
         * @return {undefined}
         */
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    /**
     * @param {?} blob
     * @return {?}
     */
    function readBlobAsArrayBuffer(blob) {
      /** @type {!FileReader} */
      var reader = new FileReader;
      var promise = fileReaderReady(reader);
      return reader.readAsArrayBuffer(blob), promise;
    }
    /**
     * @param {?} blob
     * @return {?}
     */
    function readBlobAsText(blob) {
      /** @type {!FileReader} */
      var reader = new FileReader;
      var promise = fileReaderReady(reader);
      return reader.readAsText(blob), promise;
    }
    /**
     * @param {?} buf
     * @return {?}
     */
    function readArrayBufferAsText(buf) {
      /** @type {!Uint8Array} */
      var array = new Uint8Array(buf);
      /** @type {!Array} */
      var pairs = Array(array.length);
      /** @type {number} */
      var i = 0;
      for (; i < array.length; i++) {
        /** @type {string} */
        pairs[i] = String.fromCharCode(array[i]);
      }
      return pairs.join("");
    }
    /**
     * @param {!Object} buf
     * @return {?}
     */
    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0);
      }
      /** @type {!Uint8Array} */
      var result = new Uint8Array(buf.byteLength);
      return result.set(new Uint8Array(buf)), result.buffer;
    }
    /**
     * @return {?}
     */
    function Body() {
      return this.bodyUsed = false, this._initBody = function(body) {
        if (this._bodyInit = body, body) {
          if ("string" == typeof body) {
            /** @type {string} */
            this._bodyText = body;
          } else {
            if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              /** @type {string} */
              this._bodyBlob = body;
            } else {
              if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                /** @type {string} */
                this._bodyFormData = body;
              } else {
                if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  /** @type {string} */
                  this._bodyText = "" + body;
                } else {
                  if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    /** @type {!Blob} */
                    this._bodyInit = new Blob([this._bodyArrayBuffer]);
                  } else {
                    if (!support.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(body) && !isArrayBufferView(body)) {
                      throw Error("unsupported BodyInit type");
                    }
                    this._bodyArrayBuffer = bufferClone(body);
                  }
                }
              }
            }
          }
        } else {
          /** @type {string} */
          this._bodyText = "";
        }
        if (!this.headers.get("content-type")) {
          if ("string" == typeof body) {
            this.headers.set("content-type", "text/plain;charset=UTF-8");
          } else {
            if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else {
              if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          }
        }
      }, support.blob && (this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        }
        if (this._bodyFormData) {
          throw Error("could not read FormData body as blob");
        }
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function() {
        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer);
      }), this.text = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        }
        if (this._bodyFormData) {
          throw Error("could not read FormData body as text");
        }
        return Promise.resolve(this._bodyText);
      }, support.formData && (this.formData = function() {
        return this.text().then(text2formData);
      }), this.json = function() {
        return this.text().then(JSON.parse);
      }, this;
    }
    /**
     * @param {string} method
     * @return {?}
     */
    function normalizeMethod(method) {
      var looseWord = method.toUpperCase();
      return methods.indexOf(looseWord) > -1 ? looseWord : method;
    }
    /**
     * @param {!Object} input
     * @param {!Object} options
     * @return {undefined}
     */
    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError("Already read");
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!(body || null == input._bodyInit)) {
          body = input._bodyInit;
          /** @type {boolean} */
          input.bodyUsed = true;
        }
      } else {
        /** @type {string} */
        this.url = input + "";
      }
      if (this.credentials = options.credentials || this.credentials || "omit", !options.headers && this.headers || (this.headers = new Headers(options.headers)), this.method = normalizeMethod(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(body);
    }
    /**
     * @param {!Object} body
     * @return {?}
     */
    function text2formData(body) {
      /** @type {!FormData} */
      var form = new FormData;
      return body.trim().split("&").forEach(function(clusterShardData) {
        if (clusterShardData) {
          var headersAndBody = clusterShardData.split("=");
          var url = headersAndBody.shift().replace(/\+/g, " ");
          var filePath = headersAndBody.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(url), decodeURIComponent(filePath));
        }
      }), form;
    }
    /**
     * @param {string} dates
     * @return {?}
     */
    function headers(dates) {
      var control = new Headers;
      return dates.split(/\r?\n/).forEach(function(clusterShardData) {
        var headersAndBody = clusterShardData.split(":");
        var e = headersAndBody.shift().trim();
        if (e) {
          var head = headersAndBody.join(":").trim();
          control.append(e, head);
        }
      }), control;
    }
    /**
     * @param {string} bodyInit
     * @param {!Object} options
     * @return {undefined}
     */
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      /** @type {string} */
      this.type = "default";
      this.status = "status" in options ? options.status : 200;
      /** @type {boolean} */
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = "statusText" in options ? options.statusText : "OK";
      this.headers = new Headers(options.headers);
      this.url = options.url || "";
      this._initBody(bodyInit);
    }
    if (!self.fetch) {
      var support = {
        searchParams : "URLSearchParams" in self,
        iterable : "Symbol" in self && "iterator" in Symbol,
        blob : "FileReader" in self && "Blob" in self && function() {
          try {
            return new Blob, true;
          } catch (t) {
            return false;
          }
        }(),
        formData : "FormData" in self,
        arrayBuffer : "ArrayBuffer" in self
      };
      if (support.arrayBuffer) {
        /** @type {!Array} */
        var orderedPaneIds = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
        /**
         * @param {string} obj
         * @return {?}
         */
        var isDataView = function(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        };
        /** @type {function(*): boolean} */
        var isArrayBufferView = ArrayBuffer.isView || function(id) {
          return id && orderedPaneIds.indexOf(Object.prototype.toString.call(id)) > -1;
        };
      }
      /**
       * @param {!Object} name
       * @param {string} key
       * @return {undefined}
       */
      Headers.prototype.append = function(name, key) {
        name = normalizeName(name);
        key = normalizeValue(key);
        var obj = this.map[name];
        this.map[name] = obj ? obj + "," + key : key;
      };
      /**
       * @param {string} name
       * @return {undefined}
       */
      Headers.prototype.delete = function(name) {
        delete this.map[normalizeName(name)];
      };
      /**
       * @param {!Object} name
       * @return {?}
       */
      Headers.prototype.get = function(name) {
        return name = normalizeName(name), this.has(name) ? this.map[name] : null;
      };
      /**
       * @param {boolean} name
       * @return {?}
       */
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      /**
       * @param {!Object} name
       * @param {string} key
       * @return {undefined}
       */
      Headers.prototype.set = function(name, key) {
        this.map[normalizeName(name)] = normalizeValue(key);
      };
      /**
       * @param {!Function} callback
       * @param {?} thisp
       * @return {undefined}
       */
      Headers.prototype.forEach = function(callback, thisp) {
        var i;
        for (i in this.map) {
          if (this.map.hasOwnProperty(i)) {
            callback.call(thisp, this.map[i], i, this);
          }
        }
      };
      /**
       * @return {?}
       */
      Headers.prototype.keys = function() {
        /** @type {!Array} */
        var items = [];
        return this.forEach(function(canCreateDiscussions, n) {
          items.push(n);
        }), each(items);
      };
      /**
       * @return {?}
       */
      Headers.prototype.values = function() {
        /** @type {!Array} */
        var items = [];
        return this.forEach(function(e) {
          items.push(e);
        }), each(items);
      };
      /**
       * @return {?}
       */
      Headers.prototype.entries = function() {
        /** @type {!Array} */
        var items = [];
        return this.forEach(function(name, i) {
          items.push([i, name]);
        }), each(items);
      };
      if (support.iterable) {
        /** @type {function(): ?} */
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      /** @type {!Array} */
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      /**
       * @return {?}
       */
      Request.prototype.clone = function() {
        return new Request(this, {
          body : this._bodyInit
        });
      };
      Body.call(Request.prototype);
      Body.call(Response.prototype);
      /**
       * @return {?}
       */
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status : this.status,
          statusText : this.statusText,
          headers : new Headers(this.headers),
          url : this.url
        });
      };
      /**
       * @return {?}
       */
      Response.error = function() {
        var response = new Response(null, {
          status : 0,
          statusText : ""
        });
        return response.type = "error", response;
      };
      /** @type {!Array} */
      var exact_keys = [301, 302, 303, 307, 308];
      /**
       * @param {!Object} target
       * @param {string} key
       * @return {?}
       */
      Response.redirect = function(target, key) {
        if (-1 === exact_keys.indexOf(key)) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, {
          status : key,
          headers : {
            location : target
          }
        });
      };
      /** @type {function(!Object): undefined} */
      self.Headers = Headers;
      /** @type {function(!Object, !Object): undefined} */
      self.Request = Request;
      /** @type {function(string, !Object): undefined} */
      self.Response = Response;
      /**
       * @param {string} method
       * @param {!Object} url
       * @return {?}
       */
      self.fetch = function(method, url) {
        return new Promise(function(resolve, reject) {
          var request = new Request(method, url);
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          /**
           * @return {undefined}
           */
          xhr.onload = function() {
            var options = {
              status : xhr.status,
              statusText : xhr.statusText,
              headers : headers(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            /** @type {(Object|null|string)} */
            var tres = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(tres, options));
          };
          /**
           * @return {undefined}
           */
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          /**
           * @return {undefined}
           */
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.open(request.method, request.url, true);
          if ("include" === request.credentials) {
            /** @type {boolean} */
            xhr.withCredentials = true;
          }
          if ("responseType" in xhr && support.blob) {
            /** @type {string} */
            xhr.responseType = "blob";
          }
          request.headers.forEach(function(type, i) {
            xhr.setRequestHeader(i, type);
          });
          xhr.send(void 0 === request._bodyInit ? null : request._bodyInit);
        });
      };
      /** @type {boolean} */
      self.fetch.polyfill = true;
    }
  }("undefined" != typeof self ? self : this);
}, function(mixin, canCreateDiscussions, n) {
  !function(w, document, undefined) {
    /**
     * @return {undefined}
     */
    function polyfill() {
      /**
       * @param {!Object} target
       * @param {number} key
       * @return {undefined}
       */
      function value(target, key) {
        /** @type {!Object} */
        this.scrollLeft = target;
        /** @type {number} */
        this.scrollTop = key;
      }
      /**
       * @param {number} value
       * @return {?}
       */
      function ease(value) {
        return .5 * (1 - Math.cos(Math.PI * value));
      }
      /**
       * @param {!Object} options
       * @return {?}
       */
      function shouldBailOut(options) {
        if ("object" != typeof options || null === options || options.behavior === undefined || "auto" === options.behavior || "instant" === options.behavior) {
          return true;
        }
        if ("object" == typeof options && "smooth" === options.behavior) {
          return false;
        }
        throw new TypeError("behavior not valid");
      }
      /**
       * @param {!Object} elem
       * @return {?}
       */
      function scrollIntoView(elem) {
        var ret;
        var err;
        var res;
        do {
          elem = elem.parentNode;
          /** @type {boolean} */
          ret = elem === document.body;
          /** @type {boolean} */
          err = elem.clientHeight < elem.scrollHeight || elem.clientWidth < elem.scrollWidth;
          /** @type {boolean} */
          res = "visible" === w.getComputedStyle(elem, null).overflow;
        } while (!ret && (!err || res));
        return ret = err = res = null, elem;
      }
      /**
       * @param {!Object} context
       * @return {undefined}
       */
      function step(context) {
        var value;
        var currentX;
        var currentY;
        /** @type {number} */
        var time = now();
        /** @type {number} */
        var ratio = (time - context.startTime) / duration;
        /** @type {number} */
        ratio = ratio > 1 ? 1 : ratio;
        value = ease(ratio);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY);
        if (!(currentX === context.x && currentY === context.y)) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      /**
       * @param {!Object} el
       * @param {number} to
       * @param {number} value
       * @return {undefined}
       */
      function smoothScroll(el, to, value) {
        var scrollable;
        var x;
        var startY;
        var method;
        /** @type {number} */
        var startTime = now();
        if (el === document.body) {
          /** @type {!Window} */
          scrollable = w;
          /** @type {number} */
          x = w.scrollX || w.pageXOffset;
          /** @type {number} */
          startY = w.scrollY || w.pageYOffset;
          /** @type {function(this:Window, number, number): undefined} */
          method = original.scroll;
        } else {
          /** @type {!Object} */
          scrollable = el;
          x = el.scrollLeft;
          startY = el.scrollTop;
          /** @type {function(!Object, number): undefined} */
          method = value;
        }
        step({
          scrollable : scrollable,
          method : method,
          startTime : startTime,
          startX : x,
          startY : startY,
          x : to,
          y : value
        });
      }
      if (!("scrollBehavior" in document.documentElement.style)) {
        var me = w.HTMLElement || w.Element;
        /** @type {number} */
        var duration = 468;
        var original = {
          scroll : w.scroll || w.scrollTo,
          scrollBy : w.scrollBy,
          elScroll : me.prototype.scroll || value,
          scrollIntoView : me.prototype.scrollIntoView
        };
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /** @type {function(number=, number=): undefined} */
        w.scroll = w.scrollTo = function() {
          if (shouldBailOut(arguments[0])) {
            return void original.scroll.call(w, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
          }
          smoothScroll.call(w, document.body, ~~arguments[0].left, ~~arguments[0].top);
        };
        /**
         * @param {number=} p0
         * @param {number=} p1
         * @return {undefined}
         */
        w.scrollBy = function() {
          if (shouldBailOut(arguments[0])) {
            return void original.scrollBy.call(w, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
          }
          smoothScroll.call(w, document.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        /** @type {function(): ?} */
        me.prototype.scroll = me.prototype.scrollTo = function() {
          if (shouldBailOut(arguments[0])) {
            return void original.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
          }
          var v = arguments[0].left;
          var t = arguments[0].top;
          smoothScroll.call(this, this, "number" == typeof v ? v : this.scrollLeft, "number" == typeof t ? t : this.scrollTop);
        };
        /**
         * @return {undefined}
         */
        me.prototype.scrollBy = function() {
          var s = arguments[0];
          if ("object" == typeof s) {
            this.scroll({
              left : s.left + this.scrollLeft,
              top : s.top + this.scrollTop,
              behavior : s.behavior
            });
          } else {
            this.scroll(this.scrollLeft + s, this.scrollTop + arguments[1]);
          }
        };
        /**
         * @return {?}
         */
        me.prototype.scrollIntoView = function() {
          if (shouldBailOut(arguments[0])) {
            return void original.scrollIntoView.call(this, arguments[0] === undefined || arguments[0]);
          }
          var obj = scrollIntoView(this);
          var elLocation = obj.getBoundingClientRect();
          var s = this.getBoundingClientRect();
          if (obj !== document.body) {
            smoothScroll.call(this, obj, obj.scrollLeft + s.left - elLocation.left, obj.scrollTop + s.top - elLocation.top);
            w.scrollBy({
              left : elLocation.left,
              top : elLocation.top,
              behavior : "smooth"
            });
          } else {
            w.scrollBy({
              left : s.left,
              top : s.top,
              behavior : "smooth"
            });
          }
        };
      }
    }
    mixin.exports = {
      polyfill : polyfill
    };
  }(window, document);
}, function(canCreateDiscussions, action_group, n) {
  /**
   * @param {undefined} o
   * @param {!Function} g
   * @return {?}
   */
  function group(o, g) {
    /**
     * @return {undefined}
     */
    g.prototype._init = function() {
      var e = this;
      Object.getOwnPropertyNames(o).forEach(function(m) {
        Object.defineProperty(e, m, {
          get : function() {
            return o[m];
          },
          set : function(name) {
            return o[m] = name;
          }
        });
      });
    };
    var w = new g;
    var r = {};
    return Object.keys(w).forEach(function(k) {
      if (void 0 !== w[k]) {
        r[k] = w[k];
      }
    }), r;
  }
  /** @type {function(undefined, !Function): ?} */
  action_group.collectDataFromConstructor = group;
}, function(canCreateDiscussions, Utils, getArgument) {
  /**
   * @param {?} t
   * @return {?}
   */
  function create(t) {
    return function(canCreateDiscussions, val_error, body) {
      if ("number" != typeof body) {
        body = void 0;
      }
      desc.$decoratorQueue.push(function(e) {
        return t(e, val_error, body);
      });
    };
  }
  var desc = getArgument(58);
  /**
   * @return {undefined}
   */
  Utils.noop = function() {
  };
  /** @type {function(?): ?} */
  Utils.createDecorator = create;
}, function(mixin, canCreateDiscussions, n) {
  /**
   * @param {boolean} where
   * @param {string} first
   * @return {undefined}
   */
  function debug(where, first) {
  }
  /**
   * @param {string} doc
   * @param {!Array} options
   * @return {?}
   */
  function cb(doc, options) {
    if (void 0 === options && (options = {}), doc) {
      var ret;
      try {
        ret = run(doc);
      } catch (t) {
        ret = {};
      }
      var i;
      for (i in options) {
        ret[i] = options[i];
      }
      return ret;
    }
    return options;
  }
  /**
   * @param {string} response
   * @return {?}
   */
  function run(response) {
    var ret = {};
    return (response = response.trim().replace(/^(\?|#|&)/, "")) ? (response.split("&").forEach(function(commaParam) {
      var headersAndBody = commaParam.replace(/\+/g, " ").split("=");
      /** @type {string} */
      var r = d(headersAndBody.shift());
      /** @type {(null|string)} */
      var bar = headersAndBody.length > 0 ? d(headersAndBody.join("=")) : null;
      if (void 0 === ret[r]) {
        /** @type {(null|string)} */
        ret[r] = bar;
      } else {
        if (Array.isArray(ret[r])) {
          ret[r].push(bar);
        } else {
          /** @type {!Array} */
          ret[r] = [ret[r], bar];
        }
      }
    }), ret) : ret;
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function stringify(object) {
    /** @type {(null|string)} */
    var rev = object ? Object.keys(object).map(function(key) {
      var method = object[key];
      if (void 0 === method) {
        return "";
      }
      if (null === method) {
        return escape(key);
      }
      if (Array.isArray(method)) {
        /** @type {!Array} */
        var buf = [];
        return method.slice().forEach(function(search_text) {
          if (void 0 !== search_text) {
            if (null === search_text) {
              buf.push(escape(key));
            } else {
              buf.push(escape(key) + "=" + escape(search_text));
            }
          }
        }), buf.join("&");
      }
      return escape(key) + "=" + escape(method);
    }).filter(function(inRevIdx) {
      return inRevIdx.length > 0;
    }).join("&") : null;
    return rev ? "?" + rev : "";
  }
  /**
   * @param {!Object} record
   * @param {!Object} location
   * @param {!Object} req
   * @return {?}
   */
  function createRoute(record, location, req) {
    var route = {
      name : location.name || record && record.name,
      meta : record && record.meta || {},
      path : location.path || "/",
      hash : location.hash || "",
      query : location.query || {},
      params : location.params || {},
      fullPath : getFullPath(location),
      matched : record ? formatMatch(record) : []
    };
    return req && (route.redirectedFrom = getFullPath(req)), Object.freeze(route);
  }
  /**
   * @param {!Object} record
   * @return {?}
   */
  function formatMatch(record) {
    /** @type {!Array} */
    var res = [];
    for (; record;) {
      res.unshift(record);
      record = record.parent;
    }
    return res;
  }
  /**
   * @param {!Object} req
   * @return {?}
   */
  function getFullPath(req) {
    var path = req.path;
    var query = req.query;
    if (void 0 === query) {
      query = {};
    }
    var cwd = req.hash;
    return void 0 === cwd && (cwd = ""), (path || "/") + stringify(query) + cwd;
  }
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  function isSameRoute(a, b) {
    return b === START ? a === b : !!b && (a.path && b.path ? a.path.replace(value, "") === b.path.replace(value, "") && a.hash === b.hash && callback(a.query, b.query) : !(!a.name || !b.name) && (a.name === b.name && a.hash === b.hash && callback(a.query, b.query) && callback(a.params, b.params)));
  }
  /**
   * @param {!Array} p
   * @param {!Array} a
   * @return {?}
   */
  function callback(p, a) {
    if (void 0 === p) {
      p = {};
    }
    if (void 0 === a) {
      a = {};
    }
    /** @type {!Array<string>} */
    var obj = Object.keys(p);
    /** @type {!Array<string>} */
    var result = Object.keys(a);
    return obj.length === result.length && obj.every(function(i) {
      return p[i] + "" == a[i] + "";
    });
  }
  /**
   * @param {!Object} current
   * @param {!Object} target
   * @return {?}
   */
  function isIncludedRoute(current, target) {
    return 0 === current.path.replace(value, "/").indexOf(target.path.replace(value, "/")) && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
  }
  /**
   * @param {!Object} current
   * @param {?} target
   * @return {?}
   */
  function queryIncludes(current, target) {
    var k;
    for (k in target) {
      if (!(k in current)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @param {!Event} e
   * @return {?}
   */
  function guardEvent(e) {
    if (!(e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
      if (e.target && e.target.getAttribute) {
        if (/\b_blank\b/i.test(e.target.getAttribute("target"))) {
          return;
        }
      }
      return e.preventDefault(), true;
    }
  }
  /**
   * @param {!NodeList} children
   * @return {?}
   */
  function findAnchor(children) {
    if (children) {
      var child;
      /** @type {number} */
      var i = 0;
      for (; i < children.length; i++) {
        if (child = children[i], "a" === child.tag) {
          return child;
        }
        if (child.children && (child = findAnchor(child.children))) {
          return child;
        }
      }
    }
  }
  /**
   * @param {!Object} Vue
   * @return {undefined}
   */
  function install(Vue) {
    if (!install.installed) {
      /** @type {boolean} */
      install.installed = true;
      /** @type {!Object} */
      $ = Vue;
      Object.defineProperty(Vue.prototype, "$router", {
        get : function() {
          return this.$root._router;
        }
      });
      Object.defineProperty(Vue.prototype, "$route", {
        get : function() {
          return this.$root._route;
        }
      });
      Vue.mixin({
        beforeCreate : function() {
          if (this.$options.router) {
            this._router = this.$options.router;
            this._router.init(this);
            Vue.util.defineReactive(this, "_route", this._router.history.current);
          }
        }
      });
      Vue.component("router-view", View);
      Vue.component("router-link", def);
      var strats = Vue.config.optionMergeStrategies;
      strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
    }
  }
  /**
   * @param {string} val
   * @param {string} data
   * @param {boolean} count
   * @return {?}
   */
  function f(val, data, count) {
    if ("/" === val.charAt(0)) {
      return val;
    }
    if ("?" === val.charAt(0) || "#" === val.charAt(0)) {
      return data + val;
    }
    var objs = data.split("/");
    if (!(count && objs[objs.length - 1])) {
      objs.pop();
    }
    var states = val.replace(/^\//, "").split("/");
    /** @type {number} */
    var i = 0;
    for (; i < states.length; i++) {
      var value = states[i];
      if ("." !== value) {
        if (".." === value) {
          objs.pop();
        } else {
          objs.push(value);
        }
      }
    }
    return "" !== objs[0] && objs.unshift(""), objs.join("/");
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function escape_html(str) {
    /** @type {string} */
    var adminhash = "";
    /** @type {string} */
    var qstring = "";
    var pathSepIdx = str.indexOf("#");
    if (pathSepIdx >= 0) {
      adminhash = str.slice(pathSepIdx);
      str = str.slice(0, pathSepIdx);
    }
    var i = str.indexOf("?");
    return i >= 0 && (qstring = str.slice(i + 1), str = str.slice(0, i)), {
      path : str,
      query : qstring,
      hash : adminhash
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function cleanPath(name) {
    return name.replace(/\/\//g, "/");
  }
  /**
   * @param {!Array} routes
   * @return {?}
   */
  function createRouteMap(routes) {
    /** @type {!Object} */
    var pathMap = Object.create(null);
    /** @type {!Object} */
    var nameMap = Object.create(null);
    return routes.forEach(function(route) {
      addRouteRecord(pathMap, nameMap, route);
    }), {
      pathMap : pathMap,
      nameMap : nameMap
    };
  }
  /**
   * @param {!Object} pathMap
   * @param {!Object} nameMap
   * @param {!Object} route
   * @param {!Object} parent
   * @param {string} matchAs
   * @return {undefined}
   */
  function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
    var path = route.path;
    var name = route.name;
    var record = {
      path : normalizePath(path, parent),
      components : route.components || {
        default : route.component
      },
      instances : {},
      name : name,
      parent : parent,
      matchAs : matchAs,
      redirect : route.redirect,
      beforeEnter : route.beforeEnter,
      meta : route.meta || {}
    };
    if (route.children && route.children.forEach(function(child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : void 0;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    }), void 0 !== route.alias) {
      if (Array.isArray(route.alias)) {
        route.alias.forEach(function(apexRestPath) {
          var aliasRoute = {
            path : apexRestPath,
            children : route.children
          };
          addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
        });
      } else {
        var aliasRoute = {
          path : route.alias,
          children : route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      }
    }
    if (!pathMap[record.path]) {
      pathMap[record.path] = record;
    }
    if (name) {
      if (!nameMap[name]) {
        nameMap[name] = record;
      }
    }
  }
  /**
   * @param {string} path
   * @param {!Object} parent
   * @return {?}
   */
  function normalizePath(path, parent) {
    return path = path.replace(/\/$/, ""), "/" === path[0] ? path : null == parent ? path : cleanPath(parent.path + "/" + path);
  }
  /**
   * @param {!Object} o
   * @param {!Object} options
   * @return {?}
   */
  function parse(o, options) {
    var m;
    /** @type {!Array} */
    var keys = [];
    /** @type {number} */
    var key = 0;
    /** @type {number} */
    var i = 0;
    /** @type {string} */
    var c = "";
    var defaultModule = options && options.delimiter || "/";
    for (; null != (m = re.exec(o));) {
      /** @type {string} */
      var number = m[0];
      /** @type {string} */
      var args = m[1];
      /** @type {number} */
      var n = m.index;
      if (c = c + o.slice(i, n), i = n + number.length, args) {
        c = c + args[1];
      } else {
        var p = o[i];
        /** @type {string} */
        var prefix = m[2];
        /** @type {string} */
        var name = m[3];
        /** @type {string} */
        var line = m[4];
        /** @type {string} */
        var parsed = m[5];
        /** @type {string} */
        var tag = m[6];
        /** @type {string} */
        var newVersion = m[7];
        if (c) {
          keys.push(c);
          /** @type {string} */
          c = "";
        }
        /** @type {boolean} */
        var partial = null != prefix && null != p && p !== prefix;
        /** @type {boolean} */
        var repeat = "+" === tag || "*" === tag;
        /** @type {boolean} */
        var optional = "?" === tag || "*" === tag;
        var match = m[2] || defaultModule;
        /** @type {string} */
        var options = line || parsed;
        keys.push({
          name : name || key++,
          prefix : prefix || "",
          delimiter : match,
          optional : optional,
          repeat : repeat,
          partial : partial,
          asterisk : !!newVersion,
          pattern : options ? exec(options) : newVersion ? ".*" : "[^" + replace(match) + "]+?"
        });
      }
    }
    return i < o.length && (c = c + o.substr(i)), c && keys.push(c), keys;
  }
  /**
   * @param {!Object} str
   * @param {!Object} options
   * @return {?}
   */
  function compile(str, options) {
    return tokensToFunction(parse(str, options));
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function encodeURIComponentPretty(str) {
    return encodeURI(str).replace(/[\/?#]/g, function(strUtf8) {
      return "%" + strUtf8.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  /**
   * @param {?} str
   * @return {?}
   */
  function encodeAsterisk(str) {
    return encodeURI(str).replace(/[?#]/g, function(strUtf8) {
      return "%" + strUtf8.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  /**
   * @param {!NodeList} tokens
   * @return {?}
   */
  function tokensToFunction(tokens) {
    /** @type {!Array} */
    var arr = Array(tokens.length);
    /** @type {number} */
    var i = 0;
    for (; i < tokens.length; i++) {
      if ("object" == typeof tokens[i]) {
        /** @type {!RegExp} */
        arr[i] = RegExp("^(?:" + tokens[i].pattern + ")$");
      }
    }
    return function(int_width, methodOrOptions) {
      /** @type {string} */
      var path = "";
      var defines = int_width || {};
      var options = methodOrOptions || {};
      /** @type {!Function} */
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
      /** @type {number} */
      var i = 0;
      for (; i < tokens.length; i++) {
        var token = tokens[i];
        if ("string" != typeof token) {
          var segment;
          var value = defines[token.name];
          if (null == value) {
            if (token.optional) {
              if (token.partial) {
                /** @type {string} */
                path = path + token.prefix;
              }
              continue;
            }
            throw new TypeError('Expected "' + token.name + '" to be defined');
          }
          if (isArray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
            }
            if (0 === value.length) {
              if (token.optional) {
                continue;
              }
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
            /** @type {number} */
            var j = 0;
            for (; j < value.length; j++) {
              if (segment = encode(value[j]), !arr[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
              }
              /** @type {string} */
              path = path + ((0 === j ? token.prefix : token.delimiter) + segment);
            }
          } else {
            if (segment = token.asterisk ? encodeAsterisk(value) : encode(value), !arr[i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
            }
            /** @type {string} */
            path = path + (token.prefix + segment);
          }
        } else {
          /** @type {string} */
          path = path + token;
        }
      }
      return path;
    };
  }
  /**
   * @param {string} tag
   * @return {?}
   */
  function replace(tag) {
    return tag.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  /**
   * @param {string} st
   * @return {?}
   */
  function exec(st) {
    return st.replace(/([=!:$\/()])/g, "\\$1");
  }
  /**
   * @param {!Object} elem
   * @param {!Object} value
   * @return {?}
   */
  function set(elem, value) {
    return elem.keys = value, elem;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function flags(options) {
    return options.sensitive ? "" : "i";
  }
  /**
   * @param {!Object} obj
   * @param {!Object} keys
   * @return {?}
   */
  function clone(obj, keys) {
    var selectorPieces = obj.source.match(/\((?!\?)/g);
    if (selectorPieces) {
      /** @type {number} */
      var s = 0;
      for (; s < selectorPieces.length; s++) {
        keys.push({
          name : s,
          prefix : null,
          delimiter : null,
          optional : false,
          repeat : false,
          partial : false,
          asterisk : false,
          pattern : null
        });
      }
    }
    return set(obj, keys);
  }
  /**
   * @param {!Object} val
   * @param {!Object} type
   * @param {!Object} options
   * @return {?}
   */
  function update(val, type, options) {
    /** @type {!Array} */
    var defaultParts = [];
    /** @type {number} */
    var i = 0;
    for (; i < val.length; i++) {
      defaultParts.push(add(val[i], type, options).source);
    }
    return set(RegExp("(?:" + defaultParts.join("|") + ")", flags(options)), type);
  }
  /**
   * @param {!Object} path
   * @param {!Object} keys
   * @param {!Object} options
   * @return {?}
   */
  function create(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
  }
  /**
   * @param {!NodeList} tokens
   * @param {!Object} keys
   * @param {!Object} options
   * @return {?}
   */
  function tokensToRegExp(tokens, keys, options) {
    if (!isArray(keys)) {
      options = keys || options;
      /** @type {!Array} */
      keys = [];
    }
    options = options || {};
    var strict = options.strict;
    /** @type {boolean} */
    var end = false !== options.end;
    /** @type {string} */
    var path = "";
    /** @type {number} */
    var i = 0;
    for (; i < tokens.length; i++) {
      var node = tokens[i];
      if ("string" == typeof node) {
        /** @type {string} */
        path = path + replace(node);
      } else {
        var f = replace(node.prefix);
        /** @type {string} */
        var e = "(?:" + node.pattern + ")";
        keys.push(node);
        if (node.repeat) {
          /** @type {string} */
          e = e + ("(?:" + f + e + ")*");
        }
        /** @type {string} */
        e = node.optional ? node.partial ? f + "(" + e + ")?" : "(?:" + f + "(" + e + "))?" : f + "(" + e + ")";
        /** @type {string} */
        path = path + e;
      }
    }
    var replaced = replace(options.delimiter || "/");
    /** @type {boolean} */
    var endsWithSlash = path.slice(-replaced.length) === replaced;
    return strict || (path = (endsWithSlash ? path.slice(0, -replaced.length) : path) + "(?:" + replaced + "(?=$))?"), path = path + (end ? "$" : strict && endsWithSlash ? "" : "(?=" + replaced + "|$)"), set(RegExp("^" + path, flags(options)), keys);
  }
  /**
   * @param {!Object} value
   * @param {!Object} args
   * @param {!Object} options
   * @return {?}
   */
  function add(value, args, options) {
    return isArray(args) || (options = args || options, args = []), options = options || {}, value instanceof RegExp ? clone(value, args) : isArray(value) ? update(value, args, options) : create(value, args, options);
  }
  /**
   * @param {string} path
   * @return {?}
   */
  function getRouteRegex(path) {
    var keys;
    var regexp;
    var hit = regexpCache[path];
    return hit ? (keys = hit.keys, regexp = hit.regexp) : (keys = [], regexp = index(path, keys), regexpCache[path] = {
      keys : keys,
      regexp : regexp
    }), {
      keys : keys,
      regexp : regexp
    };
  }
  /**
   * @param {string} path
   * @param {number} params
   * @param {string} routeMsg
   * @return {?}
   */
  function fillParams(path, params, routeMsg) {
    try {
      return (requirs[path] || (requirs[path] = index.compile(path)))(params || {}, {
        pretty : true
      });
    } catch (t) {
      return "";
    }
  }
  /**
   * @param {!Object} value
   * @param {!Object} current
   * @param {!Object} append
   * @return {?}
   */
  function get(value, current, append) {
    var next = "string" == typeof value ? {
      path : value
    } : value;
    if (next.name || next._normalized) {
      return next;
    }
    if (!next.path && next.params && current) {
      next = assign({}, next);
      /** @type {boolean} */
      next._normalized = true;
      var params = assign(assign({}, current.params), next.params);
      if (current.name) {
        next.name = current.name;
        next.params = params;
      } else {
        if (current.matched) {
          var rawPath = current.matched[current.matched.length - 1].path;
          next.path = fillParams(rawPath, params, "path " + current.path);
        }
      }
      return next;
    }
    var options = escape_html(next.path || "");
    var to = current && current.path || "/";
    var apexRestPath = options.path ? f(options.path, to, append || next.append) : current && current.path || "/";
    var name = cb(options.query, next.query);
    var a = next.hash || options.hash;
    return a && "#" !== a.charAt(0) && (a = "#" + a), {
      _normalized : true,
      path : apexRestPath,
      query : name,
      hash : a
    };
  }
  /**
   * @param {!Object} t
   * @param {!Object} s
   * @return {?}
   */
  function assign(t, s) {
    var k;
    for (k in s) {
      t[k] = s[k];
    }
    return t;
  }
  /**
   * @param {!Array} routes
   * @return {?}
   */
  function createMatcher(routes) {
    /**
     * @param {!Object} response
     * @param {!Object} node
     * @param {!Object} n
     * @return {?}
     */
    function match(response, node, n) {
      var location = get(response, node);
      var key = location.name;
      if (key) {
        var record = nameMap[key];
        var exact_keys = getRouteRegex(record.path).keys.filter(function(auctionDelegate) {
          return !auctionDelegate.optional;
        }).map(function(engineDiscovery) {
          return engineDiscovery.name;
        });
        if ("object" != typeof location.params && (location.params = {}), node && "object" == typeof node.params) {
          var key;
          for (key in node.params) {
            if (!(key in location.params) && exact_keys.indexOf(key) > -1) {
              location.params[key] = node.params[key];
            }
          }
        }
        if (record) {
          return location.path = fillParams(record.path, location.params, 'named route "' + key + '"'), cb(record, location, n);
        }
      } else {
        if (location.path) {
          location.params = {};
          var j;
          for (j in val) {
            if (matchRoute(j, location.params, location.path)) {
              return cb(val[j], location, n);
            }
          }
        }
      }
      return cb(null, location);
    }
    /**
     * @param {!Object} record
     * @param {!Object} location
     * @return {?}
     */
    function redirect(record, location) {
      var originalRedirect = record.redirect;
      var item = "function" == typeof originalRedirect ? originalRedirect(createRoute(record, location)) : originalRedirect;
      if ("string" == typeof item && (item = {
        path : item
      }), !item || "object" != typeof item) {
        return cb(null, location);
      }
      var re = item;
      var name = re.name;
      var path = re.path;
      var query = location.query;
      var hash = location.hash;
      var params = location.params;
      if (query = re.hasOwnProperty("query") ? re.query : query, hash = re.hasOwnProperty("hash") ? re.hash : hash, params = re.hasOwnProperty("params") ? re.params : params, name) {
        nameMap[name];
        return match({
          _normalized : true,
          name : name,
          query : query,
          hash : hash,
          params : params
        }, void 0, location);
      }
      if (path) {
        var rawPath = resolveRecordPath(path, record);
        return match({
          _normalized : true,
          path : fillParams(rawPath, params, 'redirect route with path "' + rawPath + '"'),
          query : query,
          hash : hash
        }, void 0, location);
      }
      return debug(false, "invalid redirect option: " + JSON.stringify(item)), cb(null, location);
    }
    /**
     * @param {!Object} record
     * @param {!Object} location
     * @param {string} matchAs
     * @return {?}
     */
    function alias(record, location, matchAs) {
      var aliasedPath = fillParams(matchAs, location.params, 'aliased route with path "' + matchAs + '"');
      var aliasedMatch = match({
        _normalized : true,
        path : aliasedPath
      });
      if (aliasedMatch) {
        var matched = aliasedMatch.matched;
        var value = matched[matched.length - 1];
        return location.params = aliasedMatch.params, cb(value, location);
      }
      return cb(null, location);
    }
    /**
     * @param {!Object} record
     * @param {!Object} location
     * @param {!Object} name
     * @return {?}
     */
    function cb(record, location, name) {
      return record && record.redirect ? redirect(record, name || location) : record && record.matchAs ? alias(record, location, record.matchAs) : createRoute(record, location, name);
    }
    var ref = createRouteMap(routes);
    var val = ref.pathMap;
    var nameMap = ref.nameMap;
    return match;
  }
  /**
   * @param {string} path
   * @param {!Window} params
   * @param {string} url
   * @return {?}
   */
  function matchRoute(path, params, url) {
    var ref = getRouteRegex(path);
    var regexp = ref.regexp;
    var keys = ref.keys;
    var m = url.match(regexp);
    if (!m) {
      return false;
    }
    if (!params) {
      return true;
    }
    /** @type {number} */
    var i = 1;
    var c = m.length;
    for (; i < c; ++i) {
      var key = keys[i - 1];
      var gtColumn = "string" == typeof m[i] ? decodeURIComponent(m[i]) : m[i];
      if (key) {
        params[key.name] = gtColumn;
      }
    }
    return true;
  }
  /**
   * @param {string} path
   * @param {!Object} record
   * @return {?}
   */
  function resolveRecordPath(path, record) {
    return f(path, record.parent ? record.parent.path : "/", true);
  }
  /**
   * @param {!NodeList} token
   * @param {!Function} fn
   * @param {!Function} cb
   * @return {undefined}
   */
  function runQueue(token, fn, cb) {
    /**
     * @param {number} index
     * @return {undefined}
     */
    var step = function(index) {
      if (index >= token.length) {
        cb();
      } else {
        if (token[index]) {
          fn(token[index], function() {
            step(index + 1);
          });
        } else {
          step(index + 1);
        }
      }
    };
    step(0);
  }
  /**
   * @param {string} base
   * @return {?}
   */
  function normalizeBase(base) {
    if (!base) {
      if (inBrowser) {
        /** @type {(Element|null)} */
        var baseEl = document.querySelector("base");
        /** @type {string} */
        base = baseEl ? baseEl.getAttribute("href") : "/";
      } else {
        /** @type {string} */
        base = "/";
      }
    }
    return "/" !== base.charAt(0) && (base = "/" + base), base.replace(/\/$/, "");
  }
  /**
   * @param {!Array} current
   * @param {!Array} next
   * @return {?}
   */
  function resolveQueue(current, next) {
    var i;
    /** @type {number} */
    var cell_amount = Math.max(current.length, next.length);
    /** @type {number} */
    i = 0;
    for (; i < cell_amount && current[i] === next[i]; i++) {
    }
    return {
      activated : next.slice(i),
      deactivated : current.slice(i)
    };
  }
  /**
   * @param {?} definition
   * @param {string} key
   * @return {?}
   */
  function extractGuard(definition, key) {
    return "function" != typeof definition && (definition = $.extend(definition)), definition.options[key];
  }
  /**
   * @param {?} matched
   * @return {?}
   */
  function extractLeaveGuards(matched) {
    return flatten(flatMapComponents(matched, function(track, number) {
      var value = extractGuard(track, "beforeRouteLeave");
      if (value) {
        return Array.isArray(value) ? value.map(function(tResult) {
          return map(tResult, number);
        }) : map(value, number);
      }
    }).reverse());
  }
  /**
   * @param {!Function} t
   * @param {?} e
   * @return {?}
   */
  function map(t, e) {
    return function() {
      return t.apply(e, arguments);
    };
  }
  /**
   * @param {?} matched
   * @param {!Array} cbs
   * @param {!Function} isValid
   * @return {?}
   */
  function extractEnterGuards(matched, cbs, isValid) {
    return flatten(flatMapComponents(matched, function(def, canCreateDiscussions, e, next) {
      var v = extractGuard(def, "beforeRouteEnter");
      if (v) {
        return Array.isArray(v) ? v.map(function(t) {
          return test(t, cbs, e, next, isValid);
        }) : test(v, cbs, e, next, isValid);
      }
    }));
  }
  /**
   * @param {?} t
   * @param {!Array} file
   * @param {!Object} match
   * @param {!Function} key
   * @param {!Function} isValid
   * @return {?}
   */
  function test(t, file, match, key, isValid) {
    return function(i, val_error, nodeSha1) {
      return t(i, val_error, function(id) {
        nodeSha1(id);
        if ("function" == typeof id) {
          file.push(function() {
            poll(id, match.instances, key, isValid);
          });
        }
      });
    };
  }
  /**
   * @param {?} condition
   * @param {string} handler
   * @param {string} key
   * @param {!Function} isValid
   * @return {undefined}
   */
  function poll(condition, handler, key, isValid) {
    if (handler[key]) {
      condition(handler[key]);
    } else {
      if (isValid()) {
        setTimeout(function() {
          poll(condition, handler, key, isValid);
        }, 16);
      }
    }
  }
  /**
   * @param {?} matched
   * @return {?}
   */
  function resolveAsyncComponents(matched) {
    return flatMapComponents(matched, function(fn, canCreateDiscussions, multilinestring, i) {
      if ("function" == typeof fn && !fn.options) {
        return function(canCreateDiscussions, i, complete) {
          /**
           * @param {!Function} url
           * @return {undefined}
           */
          var resolve = function(url) {
            /** @type {!Function} */
            multilinestring.components[i] = url;
            complete();
          };
          /**
           * @param {string} data
           * @return {undefined}
           */
          var reject = function(data) {
            debug(false, "Failed to resolve async component " + i + ": " + data);
            complete(false);
          };
          var stream = fn(resolve, reject);
          if (stream && "function" == typeof stream.then) {
            stream.then(resolve, reject);
          }
        };
      }
    });
  }
  /**
   * @param {?} matched
   * @param {!Function} fn
   * @return {?}
   */
  function flatMapComponents(matched, fn) {
    return flatten(matched.map(function(value) {
      return Object.keys(value.components).map(function(index) {
        return fn(value.components[index], value.instances[index], value, index);
      });
    }));
  }
  /**
   * @param {?} array
   * @return {?}
   */
  function flatten(array) {
    return Array.prototype.concat.apply([], array);
  }
  /**
   * @param {string} key
   * @return {undefined}
   */
  function saveScrollPosition(key) {
    if (key) {
      centerPoints[key] = {
        x : window.pageXOffset,
        y : window.pageYOffset
      };
    }
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function getScrollPosition(key) {
    if (key) {
      return centerPoints[key];
    }
  }
  /**
   * @param {!Element} aElement
   * @return {?}
   */
  function getElementPosition(aElement) {
    /** @type {!ClientRect} */
    var o = document.documentElement.getBoundingClientRect();
    var p0 = aElement.getBoundingClientRect();
    return {
      x : p0.left - o.left,
      y : p0.top - o.top
    };
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isValidPosition(obj) {
    return isNumber(obj.x) || isNumber(obj.y);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function normalizePosition(obj) {
    return {
      x : isNumber(obj.x) ? obj.x : window.pageXOffset,
      y : isNumber(obj.y) ? obj.y : window.pageYOffset
    };
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function isNumber(val) {
    return "number" == typeof val;
  }
  /**
   * @param {string} base
   * @return {?}
   */
  function getLocation(base) {
    /** @type {string} */
    var path = window.location.pathname;
    return base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash;
  }
  /**
   * @param {?} fragment
   * @param {boolean} replace
   * @return {undefined}
   */
  function pushState(fragment, replace) {
    /** @type {!History} */
    var history = window.history;
    try {
      if (replace) {
        history.replaceState({
          key : _key
        }, "", fragment);
      } else {
        _key = genKey();
        history.pushState({
          key : _key
        }, "", fragment);
      }
      saveScrollPosition(_key);
    } catch (n) {
      window.location[replace ? "replace" : "assign"](fragment);
    }
  }
  /**
   * @param {?} url
   * @return {undefined}
   */
  function replaceState(url) {
    pushState(url, true);
  }
  /**
   * @return {?}
   */
  function ensureSlash() {
    var path = getHash();
    return "/" === path.charAt(0) || (replaceHash("/" + path), false);
  }
  /**
   * @return {?}
   */
  function getHash() {
    /** @type {string} */
    var url = window.location.href;
    /** @type {number} */
    var i = url.indexOf("#");
    return -1 === i ? "" : url.slice(i + 1);
  }
  /**
   * @param {string} id
   * @return {undefined}
   */
  function pushHash(id) {
    /** @type {string} */
    window.location.hash = id;
  }
  /**
   * @param {string} fragment
   * @return {undefined}
   */
  function replaceHash(fragment) {
    /** @type {number} */
    var hashIndex = window.location.href.indexOf("#");
    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + "#" + fragment);
  }
  /**
   * @param {string} base
   * @param {string} key
   * @param {string} undefined
   * @return {?}
   */
  function createHref(base, key, undefined) {
    var path = "hash" === undefined ? "#" + key : key;
    return base ? cleanPath(base + "/" + path) : path;
  }
  var $;
  var View = {
    name : "router-view",
    functional : true,
    props : {
      name : {
        type : String,
        default : "default"
      }
    },
    render : function(callback, options) {
      var _props = options.props;
      var group = options.children;
      var parent = options.parent;
      var data = options.data;
      /** @type {boolean} */
      data.routerView = true;
      var name = _props.name;
      var route = parent.$route;
      var returnedData = parent._routerViewCache || (parent._routerViewCache = {});
      /** @type {number} */
      var depth = 0;
      /** @type {boolean} */
      var e = false;
      for (; parent;) {
        if (parent.$vnode && parent.$vnode.data.routerView) {
          depth++;
        }
        if (parent._inactive) {
          /** @type {boolean} */
          e = true;
        }
        parent = parent.$parent;
      }
      if (data.routerViewDepth = depth, e) {
        return callback(returnedData[name], data, group);
      }
      var matched = route.matched[depth];
      if (!matched) {
        return returnedData[name] = null, callback();
      }
      var cached_wifi_network_list = returnedData[name] = matched.components[name];
      var hooks = data.hook || (data.hook = {});
      return hooks.init = function(target) {
        matched.instances[name] = target.child;
      }, hooks.prepatch = function(target, key) {
        matched.instances[name] = key.child;
      }, hooks.destroy = function(target) {
        if (matched.instances[name] === target.child) {
          matched.instances[name] = void 0;
        }
      }, callback(cached_wifi_network_list, data, group);
    }
  };
  /** @type {function(string): string} */
  var escape = encodeURIComponent;
  /** @type {function(string): string} */
  var d = decodeURIComponent;
  /** @type {!RegExp} */
  var value = /\/?$/;
  var START = createRoute(null, {
    path : "/"
  });
  /** @type {!Array} */
  var toTypes = [String, Object];
  var def = {
    name : "router-link",
    props : {
      to : {
        type : toTypes,
        required : true
      },
      tag : {
        type : String,
        default : "a"
      },
      exact : Boolean,
      append : Boolean,
      replace : Boolean,
      activeClass : String,
      event : {
        type : [String, Array],
        default : "click"
      }
    },
    render : function(h) {
      var originalBaseURL = this;
      var router = this.$router;
      var current = this.$route;
      var ref = router.resolve(this.to, current, this.append);
      var to = ref.normalizedTo;
      var resolved = ref.resolved;
      var href = ref.href;
      var classes = {};
      var activeClass = this.activeClass || router.options.linkActiveClass || "router-link-active";
      var compareTarget = to.path ? createRoute(null, to) : resolved;
      classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);
      /**
       * @param {!Event} e
       * @return {undefined}
       */
      var handler = function(e) {
        if (guardEvent(e)) {
          if (originalBaseURL.replace) {
            router.replace(to);
          } else {
            router.push(to);
          }
        }
      };
      var on = {
        click : guardEvent
      };
      if (Array.isArray(this.event)) {
        this.event.forEach(function(name) {
          /** @type {function(!Event): undefined} */
          on[name] = handler;
        });
      } else {
        /** @type {function(!Event): undefined} */
        on[this.event] = handler;
      }
      var data = {
        class : classes
      };
      if ("a" === this.tag) {
        data.on = on;
        data.attrs = {
          href : href
        };
      } else {
        var a = findAnchor(this.$slots.default);
        if (a) {
          /** @type {boolean} */
          a.isStatic = false;
          var extend = $.util.extend;
          (a.data = extend({}, a.data)).on = on;
          (a.data.attrs = extend({}, a.data.attrs)).href = href;
        } else {
          data.on = on;
        }
      }
      return h(this.tag, data, this.$slots.default);
    }
  };
  /** @type {function(*): boolean} */
  var _isArray = Array.isArray || function(target) {
    return "[object Array]" == Object.prototype.toString.call(target);
  };
  /** @type {function(*): boolean} */
  var isArray = _isArray;
  /** @type {function(!Object, !Object, !Object): ?} */
  var index = add;
  /** @type {function(!Object, !Object): ?} */
  var parse_1 = parse;
  /** @type {function(!Object, !Object): ?} */
  var compile_1 = compile;
  /** @type {function(!NodeList): ?} */
  var tokensToFunction_1 = tokensToFunction;
  /** @type {function(!NodeList, !Object, !Object): ?} */
  var tokensToRegExp_1 = tokensToRegExp;
  /** @type {!RegExp} */
  var re = RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))", "g");
  /** @type {function(!Object, !Object): ?} */
  index.parse = parse_1;
  /** @type {function(!Object, !Object): ?} */
  index.compile = compile_1;
  /** @type {function(!NodeList): ?} */
  index.tokensToFunction = tokensToFunction_1;
  /** @type {function(!NodeList, !Object, !Object): ?} */
  index.tokensToRegExp = tokensToRegExp_1;
  /** @type {!Object} */
  var regexpCache = Object.create(null);
  /** @type {!Object} */
  var requirs = Object.create(null);
  /** @type {boolean} */
  var inBrowser = "undefined" != typeof window;
  var supportsHistory = inBrowser && function() {
    /** @type {string} */
    var ua = window.navigator.userAgent;
    return (-1 === ua.indexOf("Android 2.") && -1 === ua.indexOf("Android 4.0") || -1 === ua.indexOf("Mobile Safari") || -1 !== ua.indexOf("Chrome") || -1 !== ua.indexOf("Windows Phone")) && (window.history && "pushState" in window.history);
  }();
  /**
   * @param {!Object} router
   * @param {string} base
   * @return {undefined}
   */
  var History = function(router, base) {
    /** @type {!Object} */
    this.router = router;
    this.base = normalizeBase(base);
    this.current = START;
    /** @type {null} */
    this.pending = null;
  };
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  History.prototype.listen = function(callback) {
    /** @type {!Function} */
    this.cb = callback;
  };
  /**
   * @param {!Object} path
   * @param {!Function} onComplete
   * @param {!Function} onAbort
   * @return {undefined}
   */
  History.prototype.transitionTo = function(path, onComplete, onAbort) {
    var this$1 = this;
    var route = this.router.match(path, this.current);
    this.confirmTransition(route, function() {
      this$1.updateRoute(route);
      if (onComplete) {
        onComplete(route);
      }
      this$1.ensureURL();
    }, onAbort);
  };
  /**
   * @param {string} route
   * @param {!Function} onComplete
   * @param {!Function} onAbort
   * @return {?}
   */
  History.prototype.confirmTransition = function(route, onComplete, onAbort) {
    var this$1 = this;
    var current = this.current;
    /**
     * @return {undefined}
     */
    var abort = function() {
      if (onAbort) {
        onAbort();
      }
    };
    if (isSameRoute(route, current)) {
      return this.ensureURL(), abort();
    }
    var ref = resolveQueue(this.current.matched, route.matched);
    var deactivated = ref.deactivated;
    var activated = ref.activated;
    /** @type {!Array<?>} */
    var i = [].concat(extractLeaveGuards(deactivated), this.router.beforeHooks, activated.map(function(s) {
      return s.beforeEnter;
    }), resolveAsyncComponents(activated));
    /** @type {string} */
    this.pending = route;
    /**
     * @param {?} hook
     * @param {?} next
     * @return {?}
     */
    var iterator = function(hook, next) {
      if (this$1.pending !== route) {
        return abort();
      }
      hook(route, current, function(key) {
        if (false === key) {
          this$1.ensureURL(true);
          abort();
        } else {
          if ("string" == typeof key || "object" == typeof key) {
            if ("object" == typeof key && key.replace) {
              this$1.replace(key);
            } else {
              this$1.push(key);
            }
            abort();
          } else {
            next(key);
          }
        }
      });
    };
    runQueue(i, iterator, function() {
      /** @type {!Array} */
      var postEnterCbs = [];
      runQueue(extractEnterGuards(activated, postEnterCbs, function() {
        return this$1.current === route;
      }), iterator, function() {
        if (this$1.pending !== route) {
          return abort();
        }
        /** @type {null} */
        this$1.pending = null;
        onComplete(route);
        if (this$1.router.app) {
          this$1.router.app.$nextTick(function() {
            postEnterCbs.forEach(function(saveNotifs) {
              return saveNotifs();
            });
          });
        }
      });
    });
  };
  /**
   * @param {!Object} route
   * @return {undefined}
   */
  History.prototype.updateRoute = function(route) {
    var prev = this.current;
    /** @type {!Object} */
    this.current = route;
    if (this.cb) {
      this.cb(route);
    }
    this.router.afterHooks.forEach(function(hook) {
      if (hook) {
        hook(route, prev);
      }
    });
  };
  /** @type {!Object} */
  var centerPoints = Object.create(null);
  /** @type {(Performance|function(new:Date, ?=, ?=, ?=, ?=, ?=, ?=, ?=): string)} */
  var clock = inBrowser && window.performance && window.performance.now ? window.performance : Date;
  /**
   * @return {?}
   */
  var genKey = function() {
    return clock.now() + "";
  };
  var _key = genKey();
  var HTML5History = function(History) {
    /**
     * @param {!Object} router
     * @param {?} base
     * @return {undefined}
     */
    function HTML5History(router, base) {
      var this$1 = this;
      History.call(this, router, base);
      var behavior = router.options.scrollBehavior;
      window.addEventListener("popstate", function(prevComponent) {
        _key = prevComponent.state && prevComponent.state.key;
        var current = this$1.current;
        this$1.transitionTo(getLocation(this$1.base), function(route) {
          if (behavior) {
            this$1.handleScroll(route, current, true);
          }
        });
      });
      if (behavior) {
        window.addEventListener("scroll", function() {
          saveScrollPosition(_key);
        });
      }
    }
    return History && (HTML5History.__proto__ = History), HTML5History.prototype = Object.create(History && History.prototype), HTML5History.prototype.constructor = HTML5History, HTML5History.prototype.go = function(i) {
      window.history.go(i);
    }, HTML5History.prototype.push = function(obj) {
      var this$1 = this;
      var current = this.current;
      this.transitionTo(obj, function(route) {
        pushState(cleanPath(this$1.base + route.fullPath));
        this$1.handleScroll(route, current, false);
      });
    }, HTML5History.prototype.replace = function(target) {
      var this$1 = this;
      var current = this.current;
      this.transitionTo(target, function(route) {
        replaceState(cleanPath(this$1.base + route.fullPath));
        this$1.handleScroll(route, current, false);
      });
    }, HTML5History.prototype.ensureURL = function(push) {
      if (getLocation(this.base) !== this.current.fullPath) {
        var current = cleanPath(this.base + this.current.fullPath);
        if (push) {
          pushState(current);
        } else {
          replaceState(current);
        }
      }
    }, HTML5History.prototype.handleScroll = function(to, from, isPop) {
      var router = this.router;
      if (router.app) {
        var behavior = router.options.scrollBehavior;
        if (behavior) {
          router.app.$nextTick(function() {
            var position = getScrollPosition(_key);
            var shouldScroll = behavior(to, from, isPop ? position : null);
            if (shouldScroll) {
              /** @type {boolean} */
              var isObject = "object" == typeof shouldScroll;
              if (isObject && "string" == typeof shouldScroll.selector) {
                /** @type {(Element|null)} */
                var target = document.querySelector(shouldScroll.selector);
                if (target) {
                  position = getElementPosition(target);
                } else {
                  if (isValidPosition(shouldScroll)) {
                    position = normalizePosition(shouldScroll);
                  }
                }
              } else {
                if (isObject && isValidPosition(shouldScroll)) {
                  position = normalizePosition(shouldScroll);
                }
              }
              if (position) {
                window.scrollTo(position.x, position.y);
              }
            }
          });
        }
      }
    }, HTML5History;
  }(History);
  var HashHistory = function(History) {
    /**
     * @param {?} router
     * @param {?} base
     * @param {?} fallback
     * @return {undefined}
     */
    function HashHistory(router, base, fallback) {
      History.call(this, router, base);
      if (!(fallback && this.checkFallback())) {
        ensureSlash();
      }
    }
    return History && (HashHistory.__proto__ = History), HashHistory.prototype = Object.create(History && History.prototype), HashHistory.prototype.constructor = HashHistory, HashHistory.prototype.checkFallback = function() {
      var location = getLocation(this.base);
      if (!/^\/#/.test(location)) {
        return window.location.replace(cleanPath(this.base + "/#" + location)), true;
      }
    }, HashHistory.prototype.onHashChange = function() {
      if (ensureSlash()) {
        this.transitionTo(getHash(), function(route) {
          replaceHash(route.fullPath);
        });
      }
    }, HashHistory.prototype.push = function(obj) {
      this.transitionTo(obj, function(route) {
        pushHash(route.fullPath);
      });
    }, HashHistory.prototype.replace = function(target) {
      this.transitionTo(target, function(route) {
        replaceHash(route.fullPath);
      });
    }, HashHistory.prototype.go = function(i) {
      window.history.go(i);
    }, HashHistory.prototype.ensureURL = function(push) {
      var current = this.current.fullPath;
      if (getHash() !== current) {
        if (push) {
          pushHash(current);
        } else {
          replaceHash(current);
        }
      }
    }, HashHistory;
  }(History);
  var AbstractHistory = function(History) {
    /**
     * @param {?} router
     * @param {?} base
     * @return {undefined}
     */
    function AbstractHistory(router, base) {
      History.call(this, router, base);
      /** @type {!Array} */
      this.stack = [];
      /** @type {number} */
      this.index = -1;
    }
    return History && (AbstractHistory.__proto__ = History), AbstractHistory.prototype = Object.create(History && History.prototype), AbstractHistory.prototype.constructor = AbstractHistory, AbstractHistory.prototype.push = function(obj) {
      var err = this;
      this.transitionTo(obj, function(obj) {
        err.stack = err.stack.slice(0, err.index + 1).concat(obj);
        err.index++;
      });
    }, AbstractHistory.prototype.replace = function(target) {
      var expression = this;
      this.transitionTo(target, function(args) {
        expression.stack = expression.stack.slice(0, expression.index).concat(args);
      });
    }, AbstractHistory.prototype.go = function(n) {
      var this$1 = this;
      var targetIndex = this.index + n;
      if (!(targetIndex < 0 || targetIndex >= this.stack.length)) {
        var route = this.stack[targetIndex];
        this.confirmTransition(route, function() {
          this$1.index = targetIndex;
          this$1.updateRoute(route);
        });
      }
    }, AbstractHistory.prototype.ensureURL = function() {
    }, AbstractHistory;
  }(History);
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  var VueRouter = function(target) {
    if (void 0 === target) {
      target = {};
    }
    /** @type {null} */
    this.app = null;
    /** @type {!Object} */
    this.options = target;
    /** @type {!Array} */
    this.beforeHooks = [];
    /** @type {!Array} */
    this.afterHooks = [];
    this.match = createMatcher(target.routes || []);
    var mode = target.mode || "hash";
    switch(this.fallback = "history" === mode && !supportsHistory, this.fallback && (mode = "hash"), inBrowser || (mode = "abstract"), this.mode = mode, mode) {
      case "history":
        this.history = new HTML5History(this, target.base);
        break;
      case "hash":
        this.history = new HashHistory(this, target.base, this.fallback);
        break;
      case "abstract":
        this.history = new AbstractHistory(this, target.base);
    }
  };
  var v = {
    currentRoute : {}
  };
  /**
   * @return {?}
   */
  v.currentRoute.get = function() {
    return this.history && this.history.current;
  };
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  VueRouter.prototype.init = function(target) {
    var this$1 = this;
    /** @type {!Object} */
    this.app = target;
    var history = this.history;
    if (history instanceof HTML5History) {
      history.transitionTo(getLocation(history.base));
    } else {
      if (history instanceof HashHistory) {
        /**
         * @return {undefined}
         */
        var setupHashListener = function() {
          window.addEventListener("hashchange", function() {
            history.onHashChange();
          });
        };
        history.transitionTo(getHash(), setupHashListener, setupHashListener);
      }
    }
    history.listen(function(method) {
      /** @type {string} */
      this$1.app._route = method;
    });
  };
  /**
   * @param {string} fn
   * @return {undefined}
   */
  VueRouter.prototype.beforeEach = function(fn) {
    this.beforeHooks.push(fn);
  };
  /**
   * @param {string} fn
   * @return {undefined}
   */
  VueRouter.prototype.afterEach = function(fn) {
    this.afterHooks.push(fn);
  };
  /**
   * @param {string} obj
   * @return {undefined}
   */
  VueRouter.prototype.push = function(obj) {
    this.history.push(obj);
  };
  /**
   * @param {!Object} target
   * @return {undefined}
   */
  VueRouter.prototype.replace = function(target) {
    this.history.replace(target);
  };
  /**
   * @param {number} i
   * @return {undefined}
   */
  VueRouter.prototype.go = function(i) {
    this.history.go(i);
  };
  /**
   * @return {undefined}
   */
  VueRouter.prototype.back = function() {
    this.go(-1);
  };
  /**
   * @return {undefined}
   */
  VueRouter.prototype.forward = function() {
    this.go(1);
  };
  /**
   * @param {undefined} to
   * @return {?}
   */
  VueRouter.prototype.getMatchedComponents = function(to) {
    var route = to ? this.resolve(to).resolved : this.currentRoute;
    return route ? [].concat.apply([], route.matched.map(function(t) {
      return Object.keys(t.components).map(function(name) {
        return t.components[name];
      });
    })) : [];
  };
  /**
   * @param {!Object} target
   * @param {!Object} key
   * @param {!Object} callback
   * @return {?}
   */
  VueRouter.prototype.resolve = function(target, key, callback) {
    var element = get(target, key || this.history.current, callback);
    var resolved = this.match(element, key);
    var basePath = resolved.redirectedFrom || resolved.fullPath;
    return {
      normalizedTo : element,
      resolved : resolved,
      href : createHref(this.history.base, basePath, this.mode)
    };
  };
  Object.defineProperties(VueRouter.prototype, v);
  /** @type {function(!Object): undefined} */
  VueRouter.install = install;
  /** @type {string} */
  VueRouter.version = "2.1.3";
  if (inBrowser && window.Vue) {
    window.Vue.use(VueRouter);
  }
  /** @type {function(!Object): undefined} */
  mixin.exports = VueRouter;
}, function(self, canCreateDiscussions) {
  self.exports = {
    plans : {
      free : {
        price : 0,
        limit : 500
      },
      small : {
        price : 15,
        limit : 3500
      },
      large : {
        price : 100,
        limit : 5E4
      },
      xlarge : {
        price : 200,
        limit : 15E4
      },
      flexible : {
        price : 0,
        limit : 0
      },
      limited : {
        price : 0,
        limit : 500
      }
    },
    pricing : {
      normal : [{
        size : 500,
        price : 0
      }, {
        size : 9500,
        price : .9
      }, {
        size : void 0,
        price : .2
      }],
      "discount-thomas" : [{
        size : 500,
        price : 0
      }, {
        size : 9500,
        price : .8
      }, {
        size : void 0,
        price : .1
      }],
      "discount-20" : [{
        size : 500,
        price : 0
      }, {
        size : 9500,
        price : .9
      }, {
        size : void 0,
        price : .16
      }],
      "discount-50" : [{
        size : 500,
        price : 0
      }, {
        size : 9500,
        price : .9
      }, {
        size : void 0,
        price : .1
      }],
      ewww : [{
        size : 500,
        price : 0
      }, {
        size : 1999500,
        price : .05
      }, {
        size : void 0,
        price : .1
      }],
      complimentary : [{
        size : void 0,
        price : 0
      }]
    }
  };
}]);

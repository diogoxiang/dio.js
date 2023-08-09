# 营销活动运营系统

## 基于vue-cli3 + vue-router + vuex + element-ui + webpack4 技术栈

### 项目目录
```
|--bak                       临时文件存放目录
|--build                     脚本
|--dist                      dist包
|--coverage                  单元测试覆盖率报告
|--node_modules              第三方依赖
|--public                    html模板
|--src                       
  |--assets                  静态资源
  |--common                  公共js/css/font等
  |--components              公共组件
  |--http                    http请求
  |--router                  路由
  |--views                   页面文件夹
  |--app.vue                 入口页面
  |--main.js                 入口
  |--permission.js           路由权限控制
  |--store.js                vuex
|--.browserslistrc           浏览器支持
|--.env.dev                  开发环境配置
|--.env.prod                 生产环境配置
|--.env.sit                  sit环境配置
|--babel.config.js           babel配置
|--karma.conf.js             单元测试配置
|--package.json              package.json
|--poctcess.config.js        postcess配置
|--vue.config.js             webpack打包配置
|--readme.md                 说明文档
```

### 开发必看！！！！！！！！！！！！！

#### 一，模块化

- 文件夹名称（模块）即对应的路由名；
- 项目所有的路由关系会通过build/getRoutes.js脚本自动生成，保存到src/router/asyncRouterMap.js文件中；
- 除页面文件外，每一个模块下必须包含一个routes.json文件，该文件须包含对应的所有子路由，否则编译时该路由不会渲染出来；
- 如果是页面的路由，则该文件夹下面必须包含index.vue作为该路由的页面；
- 当前支持三级路由；
- routes.json文件配置说明如下：
    - json对象的key值，即代表路由名，必须与文件夹名保持一致
    - title定义路由的标题，必填
    - 路由需要展示的svg图标，非必填，默认不展示
    - 该级路由是否隐藏，非必填，默认false不隐藏

```json
{
    "customer": {
        "title": "客户运营",
        "icon": "xx",
        "hidden": false
    },
    "activities": {
        "title": "活动运营"
    },
    "advertisement": {
        "title": "广告运营"
    },
    "rights": {
        "title": "权益管理"
    },
    "floors": {
        "title": "楼层管理"
    }
}
```

#### 二，开发注意事项

- 开发人员仅能修改views下面的业务代码，如果涉及到公共代码的更改，请提前联系相关人员更改；
- 每个页面对应的接口和可能用到的配置文件、页面独有的组件、图片等等，请放在该页面对应的目录下面，做到页面可以单独剥离出来，即插即用，实现页面的模块化；
- 新建好的页面，还要添加对应的路由信息到数据库，并给相应的角色赋予该路由权限，才能最终显示出来。


#### 三，git规范

- 每位开发人员请在自己的分支上开发，不要多人混用同一个分支；
- 不要在master、dev、sit、uat、test等版本分支上提交任何代码；
- 分支命名规则必须按如下方式命名：
    - 姓名首字母缩写_开发任务_分支创建时间。比如张三在2019年11月4日创建了一个分支，做一单活动管理的需求，那么他的分支命名应该是：zs_activity_20191104
- 每人每天应至少保持2次代码提交，中午前一次，下班前一次，每次提交时请详细说明commit内容，方便以后查找提交记录；


#### 四，script脚本

#### npm run iconfont：将bak/iconfont字体图标复制到src/common/fonts下面

#### npm run getRoutes：遍历模块下的routes.json文件，自动生成路由

#### npm run dev

- 直接执行npm run dev会询问是否打包全部模块，回车键确定，输入n则进入手动选择模块的功能，选择完模块后按回车键开始执行dev程序

- npm run dev也可以传入你想打包的模块名称，按回车键确定即开始执行dev程序，多个模块名之间必须用逗号(,)隔空

```js
// 比如我要打包dashboard，abTest，customerGroup三个模块，执行如下命令，再按回车确认即可
npm run dev dashboard,abTest,customerGroup
```

#### npm run unit：单元测试
```

1，控制台会显示每条单元测试是否通过和总体的覆盖率；
2，生成coverage文件夹，可以查看每个文件具体的覆盖率报告
```

#### 打包

- 打包也可以按指定模块打包，步骤同npm run dev（见上文）

```
生产环境打包：npm run build
sit环境打包：npm run build:sit
uat环境打包：npm run build:uat
test环境打包：npm run build:test
```


# 编码规范

## 1、模块和页面命名规范
使用驼峰命名，首字母小写
	about/regarding.vue
	dimensionCode/paySafety.vue

***


## 2、注释规范
###1)js注释
1、使用[JSDoc标准注释](http://www.css88.com/doc/jsdoc/index.html)
2、页面文件头部应包含页面描述、作者、开发时间、使用的接口、接收到页面参数等
```html
<!--
    商品详情页面
    @author baoyd 2017-8-22
    @interface MAL313-商品详情接口
    @interface MAL301-收藏接口
    @param {String} gooId - 商品ID
-->
```
3、每个变量都需要注释，包含类型、说明、枚举值等
```js
let certType; //{Number}证件类型，1-身份证 2-驾驶证
```
4、每个__公用函数__都需要注释
```js
/**
 * 格式化数字
 * @param {Number|String} num - 数字或数字字符串
 * @param {Boolean} [round] - 是否清除后导0
 * @param {Number} [precision=2] - 保留小数位
 * @return {String} 格式化后的字符串
 * @example Math.format('123456.555'); //"123,456.56"
 *          Math.format(1.8999, false, 3); //1.900
 */
```
5、调用接口的每个参数都需要注释，包含说明、枚举值等
6、vue实例的每个data属性都需要注释，包含类型、说明、枚举值等
```js
data: {
    goodData: {}, //{Object}商品所有的数据
    isPageShow: false //{Boolean}是否显示当前页
}
```
***


##3、html规范
1、层级间缩进一个tab（4个空格）长度
```html
<v-header>
	<v-back></v-back>
	<h1>客户提醒</h1>
</v-header>
```
2、禁止使用元素id
3、禁止使用内联样式
4、遵循html的语义化规则，比如链接用`<a>`，列表用`<ul>` `<li>`

***


##4、css规范
###1)css3规范
1、类名使用`-`分隔短语
2、避免使用!important
3、选择器顺序尽量与html结构的顺序保持一致
4、属性声明顺序，遵循先布局后样式，参考顺序：定位→布局→盒子→尺寸→表现，特殊地，伪类元素的content应放于最前面
  >定位属性包括：position（包括top、right、bottom、left、z-index）、float、clear，
  >布局属性包括：display（包括vertical-align、盒子布局的flex-direction、align-items）、overflow，
  >盒子属性包括：box-sizing、margin、padding、border，
  >尺寸属性包括：width、height、line-height，
  >表现属性包括：transform、font、color、background、transition、content等等

###2)scss规范
1、要求使用嵌套选择器，嵌套缩进一个tab（4个空格）长度
2、变量、宏、继承、占位符统一使用`-`分隔短语
3、选择器顺序遵循先结构后声明，参考顺序：
  >1、当前选择器属性
  >2、伪类元素
  >3、子选择器
  >4、伪类
  >5、声明样式

```css
.ui-checkbox {
    position: relative;
    background-color:#fff;
    &:after {
        content: "\ea3c";
        float: right;
    }
    > i {
        position: absolute;
        top: 0.3rem;
        left: 0.5rem;
        box-sizing: border-box;
        margin-right: 0.5rem;
        border: solid 1px #999;
        border-radius: $border-radius;
        width: 1.4rem;
        height: 1.4rem;
        background-color: #fff;
        text-align: center;
        transition: background-color 0.2s,border-color .2s;
    }
    &.active{
        background-color: $bg-orange;
    }
    &.ui-checked {
        > i {
            background-color: $checkbox-checked;
        }
        > label {
            color: $checkbox-checked;
        }
    }
    &.ui-disabled,
    .ui-disabled & {
        opacity: .6;
    }
}
```



##5、js规范
###1)js规范
1、变量、函数名用驼峰格式，首字母小写
2、代码块缩进一个tab（4个空格）长度
3、变量在代码块开头声明
4、提交代码前把打印日志语句去掉

###2)es6规范
1、使用let、const代替var，变量使用let，常量使用const
2、使用对象的简写形式
```js
const atom = {
    ref,
    value: 1,
    addValue(value){
        ...
    }
};
```
3、使用模板字符串替代字符串连接
```js
let msg = `金额必须在${min}和${max}之内！`;
```

###3)vue规范
1、html节点属性顺序：指令→属性→class→事件
```html
<v-button
        v-for="(item,i) in list"
        :key="item" :icon="item.icon"
        class="my-cls"
        @click="onClick(i)">
</v-button>
```
2、vue实例使用vm结尾
	vm、childVm
3、使用$refs访问节点
4、vue属性顺序遵循：引用→属性→方法：
  >1. components
  >2. filters
  >3. props
  >4. data
  >5. computed
  >6. watch
  >7. metods
  >8. beforeCreate、created、mounted等生命周期函数

5、props、data、computed、methods的属性按字母顺序编写

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

let remain = JSON.parse(process.env.npm_config_argv).remain[0] // 通过脚本传进来到参数
let scriptParams = remain ? remain.split(',') : [] 
console.log('传入的参数：', scriptParams)
let allMenus = [] // inquirer提问用
let routes = [] // 存储所有的路由关系
let level = 0 // 路由层级，从0开始取值

// 处理路径
function resolve(url) {
    return path.resolve(__dirname, '../src/views', url.concat(['routes.json']).join('/'))
}

// 判断文件是否存在
function fsExistsSync(path) {
    try{
        fs.accessSync(path,fs.F_OK)
    }catch(e){
        return false;
    }
    return true;
}

/**
 * 递归获取views文件夹下面的所有routes.json文件，生成路由关系
 * @param {*} urls routes.json的路径
 * @param {*} arr 存储的数组
 * @param {*} level 路由层级
 * @param {Array} routesName 路由名称中文
 */
function getRoutes (urls, arr, level, routesName) {
    let data = fs.readFileSync(resolve(urls), 'utf8') // 同步读取routes.json文件
    data = JSON.parse(data)
    Object.keys(data).forEach(key => {
        let path = data[key].path
        let obj = {
            name: key,
            title: data[key].title,
            icon: data[key].icon || '',
            level: level,
            hidden: data[key].hidden || false, // 是否隐藏
            cache: data[key].cache || false, // 是否需要缓存
            path: path ? (path.startsWith('/') ? path : `/${path}`) : null,
            children: []
        }
        arr.push(obj)
        let url = Array.from(urls)
        let routeName = Array.from(routesName)
            routeName.push(data[key].title) 
        url.push(key)
        // routes.json存在，递归遍历子目录下的页面
        if (fsExistsSync(resolve(url))) {
            allMenus.push(new inquirer.Separator(`${''.padStart(level * 2 + 2, ' ')}|- ${data[key].title}(${key})`)) // 设置分隔符
            getRoutes(url, arr[arr.length - 1].children, level + 1, routeName)
        } else {
            // console.log(url, routesName.concat(data[key].title))
            allMenus.push({
                name: `${''.padStart(level + 2, ' ')}- ${data[key].title}(${key})`,
                value: url.join('-'),
                checked: url.some(item => scriptParams.includes(item))
            })
        }
    })
}

// 打印路由关系图谱
function consoleRelations (arr, level) {
    arr.forEach(item => {
        console.log(''.padEnd(level * 4, ' ') + '-' + item.title)
        if (item.children && item.children.length) {
            consoleRelations(item.children, level + 1)
        }
    })
}

// 生成src/router/asyncRouterMap.js文件
function createAsyncRouterMapJs (_routes) {
    let str = `
    import page from '@page/page/page.vue'

    export default [`

    /**
     * 遍历routes路由，生成路由文件
     * @param {*} _arr 
     * @param {*} _path 
     */
    function createFile (_arr, _path) {
        let str = ''
        _arr.forEach(item => {
            str += `
        {
            path: '${item.name}',
            name: '${item.name}',
            component: ${item.children.length ? 'page' : `() => import(/* webpackChunkName: '${item.name}' */ '@page/${item.path ? (_path.join('/') + item.path + '.vue') : _path.concat([item.name]).join('/')}')`}, // ${item.title}
            hidden: ${item.hidden},
            meta: {
                title: '${item.title}',
                // requireAuth: true,
                icon: '${item.icon}',
                hidden: ${item.hidden},
                cache: ${item.cache}
            },
            children: [
                ${createFile(item.children, _path.concat([item.name]))}
            ]
        },`
        })
        return str.slice(0, -1)
    }

    str += createFile(_routes, [])

    str += `
    ]`

    // 存入src/router/asyncRouterMap.js文件
    fs.writeFile(path.resolve(__dirname, '../src/router', 'asyncRouterMap.js'), str, {encoding: 'utf-8'}, function (err) {
        if (err) {
            throw err
        }
        console.log('\n')
        console.log('----------路由处理完成！---------------')
        console.log('\n')
    })
}

// 从_routes中提取包含在_arr里面的路由保存到_res中
function getChoosedRoutes (_arr, _routes, _res) {
    _routes.forEach(item => {
        if (_arr.includes(item.name)) {
            _res.push({
                name: item.name,
                title: item.title,
                level: item.level,
                hidden: item.hidden,
                icon: item.icon,
                path: item.path,
                children: []
            })

            if (item.children && item.children.length) {
                getChoosedRoutes(_arr, item.children, _res[_res.length - 1].children)
            }
        }
    })
}

// 开始生成路由文件
function begin_init (_routes) {
    console.log('\n')
    console.log('----------当前编译的模块如下：---------------')
    console.log('\n')
    // 打印路由关系图谱
    consoleRelations(_routes, 0)
    // 生成选中的路由的路由文件
    createAsyncRouterMapJs(_routes)
}

// 执行获取路由
getRoutes([], routes, level, [])

// 传入的参数包含all，a，代表打包全部的模块
if (scriptParams.includes('all') || scriptParams.includes('a')) {
    begin_init(routes)
    return
}

// inquirer问题
let questions = []

// 如果有通过script传参，直接展示选中到模块
if (scriptParams.length) {
    questions = [{
        name: 'project',
        type: 'checkbox',
        message: '请确认您要编译的模块(空格键选中，上下键移动，a全选，i反选，enter键确认)：',
        choices: allMenus,
        pageSize: allMenus.length
    }]
} else {
    // script没有传参
    questions = [
        {
          name: 'conf',
          type: 'confirm',
          message: '是否要编译全部模块（默认为全部，enter键确认）',
        },
        {
          name: 'project',
          type: 'checkbox',
          message: '请选择你想编译的模块(空格键选中，上下键移动，a全选，i反选，enter键确认)：',
          choices: allMenus,
          pageSize: allMenus.length,
        // pageSize: 30,
          when: res => !Boolean(res.conf)
        }
    ]
}

const prompts = () => new Promise(resolve => {
    inquirer.prompt(questions).then(({ conf,  project }) => {
        let params
        if (conf) {
            params = 'allMenus'
        } else {
            params = project // 选中的菜单
        }
        resolve({
            params,
        })
    })
})

prompts().then(({ params}) => {
    // 未选择任何模块
    if (!params.length) {
        console.error('未选择任何模块，请重新选择！！')
        process.exit(1)
        return
    }
    let resultRoutes = [] // 要打包的路由模块

    if (params === 'allMenus') {
        // 打包所有模块
        resultRoutes = routes
    } else {
        // 打包部分模块
        let arr = []
        params.forEach(item => {
            item = item.split('-')
            item.forEach(key => {
                arr.push(key)
            })
        })
        // 提取选中的路由名称
        arr = Array.from(new Set(arr))
        // 从所有的路由（routes）中遍历出选中的路由（arr），存入choosedRoutes中
        getChoosedRoutes(arr, routes, resultRoutes)
    }
    begin_init(resultRoutes)
})




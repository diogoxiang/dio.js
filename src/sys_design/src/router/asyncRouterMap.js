
    import page from '@page/page/page.vue'

    export default [
        {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: 'dashboard' */ '@page/dashboard'), // 工作台
            hidden: false,
            meta: {
                title: '工作台',
                // requireAuth: true,
                icon: '',
                hidden: false,
                cache: false
            },
            children: [
                
            ]
        },
        {
            path: 'systemManage',
            name: 'systemManage',
            component: page, // 系统管理
            hidden: false,
            meta: {
                title: '系统管理',
                // requireAuth: true,
                icon: '',
                hidden: false,
                cache: false
            },
            children: [
                
        {
            path: 'roleManage',
            name: 'roleManage',
            component: () => import(/* webpackChunkName: 'roleManage' */ '@page/systemManage/roleManage/rolesList.vue'), // 角色管理
            hidden: false,
            meta: {
                title: '角色管理',
                // requireAuth: true,
                icon: 'jiaoseguanli',
                hidden: false,
                cache: false
            },
            children: [
                
            ]
        },
        {
            path: 'setRoleMenus',
            name: 'setRoleMenus',
            component: () => import(/* webpackChunkName: 'setRoleMenus' */ '@page/systemManage/roleManage/setRoleMenus.vue'), // 设置角色菜单信息
            hidden: true,
            meta: {
                title: '设置角色菜单信息',
                // requireAuth: true,
                icon: '',
                hidden: true,
                cache: false
            },
            children: [
                
            ]
        },
        {
            path: 'userManage',
            name: 'userManage',
            component: () => import(/* webpackChunkName: 'userManage' */ '@page/systemManage/userManage/usersList.vue'), // 用户管理
            hidden: false,
            meta: {
                title: '用户管理',
                // requireAuth: true,
                icon: 'yonghuguanli',
                hidden: false,
                cache: true
            },
            children: [
                
            ]
        },
        {
            path: 'userConfig',
            name: 'userConfig',
            component: () => import(/* webpackChunkName: 'userConfig' */ '@page/systemManage/userManage/userConfig.vue'), // 用户编辑
            hidden: true,
            meta: {
                title: '用户编辑',
                // requireAuth: true,
                icon: '',
                hidden: true,
                cache: false
            },
            children: [
                
            ]
        },
        {
            path: 'setUserRoles',
            name: 'setUserRoles',
            component: () => import(/* webpackChunkName: 'setUserRoles' */ '@page/systemManage/userManage/setUserRoles.vue'), // 设置用户角色信息
            hidden: true,
            meta: {
                title: '设置用户角色信息',
                // requireAuth: true,
                icon: '',
                hidden: true,
                cache: false
            },
            children: [
                
            ]
        },
        {
            path: 'menuManage',
            name: 'menuManage',
            component: () => import(/* webpackChunkName: 'menuManage' */ '@page/systemManage/menuManage/menusList.vue'), // 菜单管理
            hidden: false,
            meta: {
                title: '菜单管理',
                // requireAuth: true,
                icon: 'caidanguanli',
                hidden: false,
                cache: false
            },
            children: [
                
            ]
        }
            ]
        }
    ]
<template>
    <v-page-transition :title="'设置角色菜单信息'">
        <div class="page-container">
            <v-tree ref="tree"
                :data="allMenuDatas"
                :showCheckbox="true"
                :defaultExpandAll="true"
                :showEditBtn="false"></v-tree>
            <div class="page-footer">
                <v-button @click="onUpdateMenusConfig"
                  :isLoading="loading">保存</v-button>
            </div>
        </div>
    </v-page-transition>
</template>

<script>
import { mapState } from 'vuex'
import { updateRoleMenus, queryMenusByRoles } from './api' // api
import { queryMenusList } from '@page/systemManage/menuManage/api' // 菜单列表api

export default {
    data () {
        return {
            allMenuDatas: [], // 所有的菜单
            roleId: '' // 要配置的角色id
        }
    },
    computed: {
        ...mapState(['loading'])
    },
    methods: {
        /**
         * 配置菜单权限确认按钮点击事件
         */
        onUpdateMenusConfig () {
            let checkedKeys = this.$refs.tree.getCheckedKeys()
            let halfCheckedKeys = this.$refs.tree.getHalfCheckedKeys()
            let param = {
                menuIds: [].concat(checkedKeys, halfCheckedKeys),
                roleId: this.roleId
            }

            updateRoleMenus(param).then(res => {
                if (res.code === '000000') {
                    this.$message('角色权限配置成功')
                    this.$router.replace({
                        name: 'roleManage'
                    })
                }
            })
        },
        /**
         * 查询所有菜单列表接口
         */
        async queryAllMenus () {
            let res = await queryMenusList({})
            if (res.code === '000000') {
                let allMenus = res.data
                // 获取最外层菜单目录
                allMenus.forEach((item, index) => {
                    if (item.parentId === 0) {
                        item.children = [] // 用于放置子菜单
                        this.allMenuDatas.push(item)
                    }
                })
                // 添加子菜单
                this.getChildrenNodes(this.allMenuDatas, allMenus)
            }
        },
        /**
         * 给菜单目录添加子菜单的方法
         * @param { Array } _arr 菜单目录
         * @param { Array } _allMenus 原始菜单数据
         */
        getChildrenNodes (_arr, _allMenus) {
            _arr.forEach(item => {
                _allMenus.forEach(item1 => {
                if (item.id === item1.parentId) {
                        item1.children = []
                        item.children.push(item1)
                    }
                })
                this.getChildrenNodes(item.children, _allMenus)
            })
        },
        /**
         * 查询所选角色拥有的菜单权限
         */
        queryMenusByRole () {
            queryMenusByRoles(this.roleId).then(res => {
                if (res.code === '000000') {
                    let menus = res.data.map(item => item.id)
                    this.$refs.tree.setCheckedKeys(menus)
                }
            })
        }
    },
    async mounted () {
        this.roleId = this.$route.query.id
        await this.queryAllMenus()
        this.queryMenusByRole()
    }
}
</script>

<style lang="scss" scoped>
.page-container {
    padding: 20px 30% 0;
}
</style>
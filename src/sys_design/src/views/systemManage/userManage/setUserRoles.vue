<template>
    <v-page-transition :title="'设置用户角色信息'">
        <div class="page-container">
            <v-table ref="rolesTable"
                 :data="allRoleDatas"
                 @selection-change="onSelectChange">
                    <v-table-column type="selection"></v-table-column>
                    <v-table-column label="角色名称"
                                    prop="name"></v-table-column>
                    <v-table-column label="角色描述"
                                    prop="description"></v-table-column>
                </v-table>
            <div class="page-footer">
                <v-button :isLoading="loading" @click="onUpdateUserRoles">保存</v-button>
            </div>
        </div>
    </v-page-transition>
</template>

<script>
import { queryRolesByUser, updateUserRoles } from './api' // api
import { queryRolesList } from '@page/systemManage/roleManage/api' // 角色列表api

import { mapState } from 'vuex'

export default {
    data () {
        return {
            userId: '', // 要设置的用户id
            selectRoles: [], // 选中的角色
            allRoleDatas: [] // 所有角色
        }
    },
    computed: {
        ...mapState(['loading'])
    },
    methods: {
        /**
         * 角色表格选中事件
         */
        onSelectChange (val) {
            this.selectRoles = val
        },
        /**
         * 给用户设置角色接口
         */
        onUpdateUserRoles () {
            let param = {
                roleIds: this.selectRoles.map(item => item.id), // 选中的角色
                userId: this.userId // 用户id
            }
            updateUserRoles(param).then(res => {
                if (res.code === '000000') {
                this.$message('用户角色配置成功')
                this.$router.replace({
                    name: 'userManage'
                })
                }
            })
        },
        /**
         * 根据用户id查询用户所拥有的角色接口
         */
        queryRolesByUser () {
            if (!this.userId) return
            queryRolesByUser(this.userId).then(res => {
                if (res.code === '000000') {
                    let selectedRoleIds = res.data.map(item => item.id)
                    let selectedRowIdx = []
                    this.allRoleDatas.forEach((item, index) => {
                        if (selectedRoleIds.includes(item.id)) {
                        selectedRowIdx.push(index)
                        }
                    })
                    this.$refs.rolesTable.clearSelection()
                    selectedRowIdx.forEach(num => {
                        this.$refs.rolesTable.toggleRowSelection(num)
                    })
                }
            })
        },
        /**
         *  查询所有的角色数据接口
         */
        async queryAllRoles () {
            let res = await queryRolesList()
            this.allRoleDatas = res.data.content
        }
    },
    async mounted () {
        this.userId = this.$route.query.id // 用户id
        await this.queryAllRoles()
        await this.queryRolesByUser()
    }
}
</script>

<style lang="scss" scoped>
.page-container {
    padding: 20px 30% 0;
}
</style>
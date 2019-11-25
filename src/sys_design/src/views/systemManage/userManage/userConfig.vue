<!--
    用户管理
    @author jackyli 2019-09-19
    @interface addUser          - 新增用户
    @interface updateUser       - 修改用户
    @interface queryUserDetail  - 查询单个用户详情
-->
<template>
    <v-page-transition :title="(editType === 'add' ? '新增' : '修改') + '用户'">
        <div class="user-config-container">
            <v-form-component ref="form"
                            :formConfig="formConfig"
                            :formData="formData"
                            :formRules="formRules"
                            @confirm="onConfirm"
                            @cancel="onCancel"></v-form-component>
        </div>
    </v-page-transition>
</template>

<script>
import { vFormComponent } from '@cp/extend/formComponent' // 表单组件
import { userFormConfig, userFormRules } from './config'     //配置文件
import { addUser, updateUser, queryUserDetail } from './api'  //api文件

export default {
    components: {
        vFormComponent
    },
    data () {
        return {
            userFormConfig: userFormConfig, // 搜索条件表单配置
            formRules: userFormRules, // 新增修改表单验证规则
            formData: {},     // 新增/修改表单数据
            editType: '',   //判断是否点击编辑图标进入该路由
            id: '',     //点击表格行的id
        }
    },
     computed: {
        // 新增/修改表单配置, 修改时不能修改账号密码
        formConfig () {
            if (this.editType === 'edit') {
                let config = JSON.parse(JSON.stringify(userFormConfig))
                config.formItems[0].splice(2, 2)
                return config
            } else {
                return userFormConfig
            }
        }
    },
    methods: {
        //确定按钮
        onConfirm (_form) {
            let data = JSON.parse(JSON.stringify(_form))
            // 修改时带上要修改的id
            if (this.editType === 'edit') {
                data.id = this.id
            }
            // 新增和修改接口
            let operate = new Map([
                ['add', addUser],
                ['edit', updateUser]
            ])
            operate.get(this.editType)(data).then(res => {
                if (res.code === '000000') {
                    this.$message('保存成功')
                    this.$router.replace({
                        name: 'userManage'
                    })
                    } else {
                    this.$message({
                        message: res.message,
                        type: 'error'
                    })
                }
            })
        },
        // 取消
        onCancel () {
            this.$router.replace({
                name: 'userManage'
            })
        },
        /**
         * 查询用户详情接口
         */
        queryDetail () {
            queryUserDetail(this.id).then(res => {
                this.formData = res.data
            })
        },
    },
    beforeMount () {
        //点击编辑图标进入该路由
        this.editType = this.$route.query.param
        // 修改时查询详情
        if(this.editType == 'edit'){
            this.id = this.$route.query.id
            this.queryDetail()
        }
    }
}
</script>

<style lang="scss" scoped>
.user-config-container {
    padding: 20px 20% 0;
}
</style>
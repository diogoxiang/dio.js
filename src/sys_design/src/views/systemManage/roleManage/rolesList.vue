<!--
    角色管理
    @author jackyli 2019-09-19
    @interface addRole          - 新增角色
    @interface queryRolesList   - 查询角色列表
    @interface deleteRole       - 删除角色
    @interface updateRole       - 修改角色
-->
<template>
  <div>
    <!-- 页面组件 -->
    <v-table-page-component ref="page"
                            :pageConfig="pageConfig"
                            :dataList="dataList"
                            @handleEdit="handleClick">
      <!-- 自定义按钮 -->
      <span slot="headerBtn"
            v-if="selectDatas.length">
        <v-button plain
                  @click="onSetRoleMenus">配置菜单权限</v-button>
      </span>
    </v-table-page-component>
    <!-- 新增修改角色弹窗 -->
    <v-dialog :visible.sync="dialogSwitch"
              :title="(editType === 'add' ? '新增' : '修改') + '角色'">
      <v-form-component :formConfig="formConfig"
                        :formData="formData"
                        :formRules="formRules"
                        @confirm="onConfirm"
                        @cancel="dialogSwitch = false"></v-form-component>
    </v-dialog>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import { vTablePageComponent } from '@cp/extend/tablePageComponent' // 页面组件
import { vFormComponent } from '@cp/extend/formComponent' // 表单组件
import { pageConfig, roleFormConfig, roleFormRules } from './config' // 配置
import { addRole, queryRolesList, deleteRole, updateRole } from './api' // api

export default {
  name: 'roleManage',
  components: {
    vTablePageComponent,
    vFormComponent
  },
  data () {
    return {
      editType: '', // 区分新增还是修复
      dialogSwitch: false, // 弹出框开关
      pageConfig: pageConfig, // 页面配置
      searchForm: {}, // 搜索表单数据
      formConfig: roleFormConfig, // 新增/修改表单配置
      formRules: roleFormRules, // 新增/修改表单验证规则
      formData: {}, // 新增/修改表单数据
      dataList: [], // 表格数据
      selectDatas: [] // 选中的表格数据
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    /**
     * 页面组件触发
     * @param { Object } _param 页面组件操作传参
     */
    handleClick (_param) {
      let { type, param } = _param
      // 新增角色
      if (type === 'btnClick') {
        this.editType = 'add'
        this.formData = {}
        this.dialogSwitch = true
      }

      // 表格编辑
      if (type === 'edit') {
        if (param.svg.type === 'delete') {
          // 删除
          this.onDeleteData(param.row.id)
        } else if (param.svg.type === 'edit') {
          // 修改
          this.editType = 'edit'
          this.formData = param.row
          this.dialogSwitch = true
        }
      }

      // 分页查询
      if (type === 'pageChange') {
        this.queryData()
      }

      // 表格多选
      if (type === 'select') {
        this.selectDatas = param
      }
    },
    /**
     * 弹窗提交按钮点击
     * @param { Object } _form 新增修改的表单数据
     */
    onConfirm (_form) {
      let data = JSON.parse(JSON.stringify(_form))
      // 修改时带上要修改的id
      if (this.editType === 'edit') {
        data.id = this.formData.id
      }
      // 新增和修改接口
      let operate = new Map([
        ['add', addRole],
        ['edit', updateRole]
      ])
      operate.get(this.editType)(data).then(res => {
        this.dialogSwitch = false
        if (res.code === '000000') {
          this.$message(this.editType === 'edit' ? '修改成功' : '新增成功')
          this.queryData()
        } else {
          this.$message({
            message: res.message,
            type: 'error'
          })
        }
      })
    },
    /**
     * 删除提示
     * @param { String|Number } _id 要删除的数据的id
     */
    onDeleteData (_id) {
      this.$confirm('确认删除该角色吗?', '确认').then(res => {
        this.deleteData(_id)
      }).catch(err => {
        console.log(err, '取消删除')
      })
    },
    // 设置角色菜单点击事件
    onSetRoleMenus () {
      this.$router.push({
        name: 'setRoleMenus',
        query: {
          id: this.selectDatas[0].id
        }
      })
    },
    /**
     * 列表查询接口
     * @param { Object } _form 查询条件
     */
    queryData () {
      this.selectDatas = []
      // 分页参数
      let params = {
        page: this.$refs.page.currentPage - 1,
        size: this.$refs.page.pageSize
      }

      // 取有值的搜索条件
      Object.keys(this.searchForm).forEach(key => {
        if (this.searchForm[key]) {
          params[key] = this.searchForm[key]
        }
      })

      queryRolesList(params).then(res => {
        if (res.code === '000000') {
          this.dataList = res.data.content
          this.$refs.page.setVal('total', res.data.totalElements)
        }
      })
    },
    /**
     * 删除接口
     * @param { String|Number } _id 要删除的数据的id
     */
    deleteData (_id) {
      deleteRole(_id).then(res => {
        console.log(res)
        if (res.code === '000000') {
          this.$message('删除成功')
          this.queryData()
        } else {
          this.$message({
            message: res.message,
            type: 'error'
          })
        }
      })
    }
  },
  mounted () {
    this.queryData()
  }
}
</script>

<style lang="scss" scoped>
.role-config-container {
  height: 350px;
  overflow-x: hidden;
}
</style>

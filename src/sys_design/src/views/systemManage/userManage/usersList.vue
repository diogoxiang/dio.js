<!--
    用户管理
    @author jackyli 2019-09-19
    @interface queryUsersList   - 查询用户列表
    @interface deleteUser       - 删除用户
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
                  @click="onSetUserRoles">设置角色</v-button>
      </span>
      <!-- 条件搜索 -->
      <div slot="pageSearch"
           :class="['page-search', {'is-folding': isFoldSearch}]">
        <v-form-component ref="searchForm"
                          :formConfig="searchFormConfig"
                          @confirm="onSearchByCondition"
                          @cancel="onReset"></v-form-component>
      </div>
    </v-table-page-component>
  </div>
</template>

<script>
import { vTablePageComponent } from '@cp/extend/tablePageComponent' // 页面组件
import { vFormComponent } from '@cp/extend/formComponent' // 表单组件
import { pageConfig, searchFormConfig } from './config' // 配置
import { queryUsersList, deleteUser } from './api' // api

export default {
  name: 'userManage',
  components: {
    vTablePageComponent,
    vFormComponent
  },
  data () {
    return {
      isFoldSearch: true, // 是否折叠更多搜索条件栏
      pageConfig: pageConfig, // 页面配置
      searchFormConfig: searchFormConfig, // 搜索条件表单配置
      searchForm: {}, // 搜索表单数据
      formData: {}, // 新增/修改表单数据
      dataList: [], // 表格数据
      selectDatas: [] // 页面组件选中的表格数据
    }
  },
  methods: {
    /**
     * 页面组件触发点击事件
     * @param { Object } _param 页面组件操作传参
     */
    handleClick (_param) {
      let { type, param } = _param
      // 新增用户
      if (type === 'btnClick') {
          this.$router.push({
          name: 'userConfig',
          query: {
            param: 'add'
          }
        })
      }
      // 条件搜索
      if (type === 'moreSearch') {
        this.isFoldSearch = !this.isFoldSearch
      }

      if (type === 'edit') {
        if (param.svg.type === 'delete') {
          // 删除
          this.onDeleteData(param.row.id)
        } else if (param.svg.type === 'edit') {
          // 修改
          this.$router.push({
            name: 'userConfig',
            query: {
              param: "edit",
              id: param.row.id
            }
          })
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
     * 条件查询
     * @param { Object } _form 查询条件
     */
    onSearchByCondition (_form) {
      this.$refs.page.setVal('currentPage', 1)
      this.searchForm = _form
      this.queryData()
    },
    /**
     * 条件查询重置
     */
    onReset () {
      this.$refs.searchForm.resetVal()
    },
    /**
     * 删除提示
     * @param { String|Number } _id 要删除的数据的id
     */
    onDeleteData (_id) {
      this.$confirm('确认删除该用户吗?', '确认').then(res => {
        this.deleteData(_id)
      }).catch(err => {
        console.log(err, '取消删除')
      })
    },
    /**
     * 用户设置角色按钮的点击事件
     */
    onSetUserRoles () {
      this.$router.push({
        name: 'setUserRoles',
        query: {
          id: this.selectDatas[0].id
        }
      })
    },
    /**
     * 列表查询接口
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

      queryUsersList(params).then(res => {
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
      deleteUser(_id).then(res => {
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

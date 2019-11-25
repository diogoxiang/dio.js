<template>
  <div class="page-container">
    <v-tree class="menus-tree"
            :data="treeData"
            @handleEdit="handleEdit"></v-tree>
    <!-- 编辑弹窗 -->
    <v-dialog :visible.sync="dialogSwitch"
              :title="(editType === 'add' ? '新增' : '修改') + '菜单'">
      <v-form-component :formConfig="formConfig"
                        :formData="formData"
                        @confirm="onConfirm"
                        @cancel="dialogSwitch = false"></v-form-component>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { vFormComponent } from '@cp/extend/formComponent' // 表单组件
import { addMenu, queryMenusList, updateMenu, deleteMenu, queryMenuDetail } from './api' // api

export default {
  name: 'menusList',
  components: {
    vFormComponent
  },
  data () {
    return {
      editType: '', // 区分新增修改
      dialogSwitch: false, // 菜单编辑弹窗
      formConfig: {
        cols: 1,
        confirmBtnText: '保存',
        cancelBtnText: '取消',
        formItems: [
          [
            {
              label: '菜单名称',
              key: 'name'
            },
            {
              label: '跳转路由',
              key: 'routeUrl'
            },
            {
              label: '类型',
              key: 'type',
              type: 'radio',
              options: [
                { label: '目录', value: '0' },
                { label: '菜单', value: '1' },
                { label: '按钮', value: '2' }
              ]
            },
            {
              label: 'url',
              key: 'url'
            },
            {
              label: 'HTTP请求',
              key: 'httpMethod',
              type: 'radio',
              options: [
                { label: 'get', value: 'get' },
                { label: 'post', value: 'post' },
                { label: 'put', value: 'put' },
                { label: 'delete', value: 'delete' }
              ]
            },
            {
              label: '权限',
              key: 'perms'
            },
            {
              label: '排序',
              key: 'orderNum'
            }
          ]
        ]
      }, // 编辑表单配置
      formData: {
        type: '1',
        httpMethod: 'get'
      }, // 编辑表单
      treeData: [{
        id: 0,
        name: '菜单列表',
        children: []
      }],
      parentMenusId: 0
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    /**
     * 树形菜单触发事件
     * @param { String } _type 操作类型
     * @param { Object } _form 节点数据
     */
    handleEdit (_type, _data) {
      this.editType = _type
      // 新增和修改
      if (['add', 'edit'].includes(_type)) {
        if (_type === 'edit') {
          this.parentMenusId = _data.parentId // 父菜单Id
          this.formData = _data
        } else {
          this.parentMenusId = _data.id // 父菜单Id
          this.formData = {
            type: '1',
            httpMethod: 'get'
          }
        }
        this.dialogSwitch = true
      }

      // 删除
      if (_type === 'delete') {
        this.onDeleteData(_data.id)
      }
    },
    /**
     * 弹窗提交按钮点击
     * @param { Object } _form 新增修改的表单数据
     */
    onConfirm (_form) {
      let data = JSON.parse(JSON.stringify(_form))
      data.parentId = this.parentMenusId

      // 修改时带上要修改的id
      if (this.editType === 'edit') {
        data.id = this.formData.id
      }
      console.log(data)
      // 新增和修改接口
      let operate = new Map([
        ['add', addMenu],
        ['edit', updateMenu]
      ])
      operate.get(this.editType)(data).then(res => {
        this.dialogSwitch = false
        if (res.code === '000000') {
          this.$message((this.editType === 'edit' ? '修改成功' : '新增成功'))
        } else {
          this.$message({
            message: res.data,
            type: 'error'
          })
        }
        this.queryData()
      })
    },
    /**
     * 删除提示
     * @param { String|Number } _id 要删除的数据的id
     */
    onDeleteData (_id) {
      this.$confirm('确认删除该菜单吗?', '确认').then(res => {
        this.deleteData(_id)
      }).catch(err => {
        console.log(err, '取消删除')
      })
    },
    /**
     * 列表查询接口
     */
    queryData () {
      queryMenusList({}).then(res => {
        if (res.code === '000000') {
          let allMenus = res.data
          // 获取最外层菜单目录
          this.treeData[0].children = []
          allMenus.forEach((item, index) => {
            if (item.parentId === 0) {
              item.children = [] // 用于放置子菜单
              this.treeData[0].children.push(item)
            }
          })
          // 添加子菜单
          this.getChildrenNodes(this.treeData[0].children, allMenus)
          // console.log(this.treeData)
        }
      })
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
     * 删除接口
     * @param { String|Number } _id 要删除的数据的id
     */
    deleteData (_id) {
      deleteMenu(_id).then(res => {
        if (res.code === '000000') {
          this.$message('删除成功')
        } else {
          this.$message({
            message: res.data,
            type: 'error'
          })
        }
        this.queryData()
      })
    }
  },
  mounted () {
    this.queryData()
  }
}
</script>

<style lang="scss" scoped>
.menus-tree {
  width: 600px;
}
</style>

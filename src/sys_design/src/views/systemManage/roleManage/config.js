/**
 * 角色管理页面配置信息
 * {Object}   pageConfig        - 页面配置
 * {Object}   roleFormConfig    - 角色新增修改表单配置
 * {Object}   roleFormRules     - 角色新增修改表单验证
 */

// 页面配置
export const pageConfig = {
  header: {
    buttons: [{
      text: '新建角色',
      svg: 'xinzeng',
      type: 'newRole'
    }],
    filters: {
      isSearch: false,
      searchPlaceholder: '请输入关键字/名称、说明等',
      isMoreSearch: false,
      isSortable: false,
      sortList: [] // 排序条件
    }
  },
  tableIndex: 'index',
  tableProps: [
    {
      prop: 'name',
      label: '角色名称'
    },
    {
      prop: 'description',
      label: '角色描述'
    },
    {
      prop: 'modifyTime',
      label: '最后修改日期'
    },
    {
      prop: 'edit',
      label: '操作',
      isEdit: true
    }
  ]
}

// 角色新增修改表单配置
export const roleFormConfig = {
  cols: 1,
  confirmBtnText: '保存',
  cancelBtnText: '取消',
  needValidate: true, // 是否需要验证
  formItems: [
    [{
      label: '角色名称',
      key: 'name',
      maxLength: 20
    }, {
      label: '角色描述',
      key: 'description'
    }]
  ]
}

// 角色新增修改表单验证
export const roleFormRules = {
  name: [{
    required: true,
    message: '请输入角色名称',
    trigger: 'blur'
  }],
  description: [{
    required: true,
    message: '请输入角色描述',
    trigger: 'blur'
  }]
}
  
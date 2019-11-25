/**
 * 用户管理页面配置信息
 * {Object}   pageConfig        - 页面配置
 * {Object}   searchFormConfig  - 搜索表单配置
 * {Object}   userFormConfig    - 用户新增修改表单配置
 * {Object}   userFormRules     - 新增修改表单验证规则
 */

// 用户性别枚举值
const allSex = [{
    label: '男',
    value: '0'
  },
  {
    label: '女',
    value: '1'
  }
]
  
// 格式化用户性别
const formatSex = _row => {
    let mySex = allSex.filter(item => item.value === _row.sex)[0]
    return mySex ? mySex.label : ''
}

// 页面配置
export const pageConfig = {
header: {
    buttons: [{
    text: '新建用户',
    svg: 'xinzeng',
    type: 'newUser'
    }],
    filters: {
    isSearch: false,
    searchPlaceholder: '请输入关键字/名称、说明等',
    isMoreSearch: true,
    isSortable: false,
    sortList: [] // 排序条件
    }
},
tableIndex: 'index',
tableProps: [{
    prop: 'account',
    label: '账号'
},
{
    prop: 'name',
    label: '姓名'
},
{
    prop: 'sex',
    label: '性别',
    func: formatSex
},
{
    prop: 'phoneNumber',
    label: '手机号'
},
{
    prop: 'email',
    label: '邮箱'
},
{
    prop: 'edit',
    label: '操作',
    isEdit: true
}
]
}

// 搜索表单配置
export const searchFormConfig = {
confirmBtnText: '查询',
cancelBtnText: '重置',
isSearch: true,
formItems: [
    [{
    label: '账号',
    key: 'account'
    }, {
    label: '姓名',
    key: 'name'
    }]
]
}
  
// 用户新增修改表单配置
export const userFormConfig = {
cols: 2,
confirmBtnText: '保存',
cancelBtnText: '取消',
needValidate: true, // 是否需要验证
formItems: [
    [{
    label: '姓名',
    key: 'name',
    maxLength: 8
    }, {
    label: '性别',
    key: 'sex',
    type: 'radio',
    options: allSex
    }, {
    label: '账号',
    key: 'account',
    maxLength: 12
    }, {
    label: '密码',
    key: 'password',
    maxLength: 18
    }, {
    label: '手机号',
    key: 'phoneNumber',
    maxLength: 11
    }, {
    label: '邮箱',
    key: 'email',
    isShowWordLimit: false
    }, {
    label: '身份证',
    key: 'idNumber',
    maxLength: 18
    }, {
    label: '描述',
    key: 'description',
    maxLength: 30
    }]
]
}

// 新增修改表单验证规则
export const userFormRules = {
name: [{
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
}],
sex: [{
    required: true,
    message: '请选择性别',
    trigger: 'change'
}],
account: [{
    required: true,
    message: '请输入账号',
    trigger: 'blur'
}],
password: [{
    required: true,
    message: '请输入密码',
    trigger: 'blur'
}, {
    min: 6,
    max: 18,
    message: '密码长度在 6 到 18 位',
    trigger: 'blur'
}, {
    validator: (rule, value, callback) => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value) ? callback() : callback(new Error('密码必须包含数字和大小写字母'))
}],
phoneNumber: [{
    required: true,
    message: '请输入手机号',
    trigger: 'change'
}, {
    validator: (rule, value, callback) => /^1[3|4|5|6|7|8|9]\d{9}$/.test(value) ? callback() : callback(new Error('手机号格式不正确'))
}],
email: [{
    required: true,
    message: '请输入邮箱',
    trigger: 'blur'
},{ 
    type: 'email',
    message: '请输入正确的邮箱地址',
    trigger: ['blur', 'change']
}]
}

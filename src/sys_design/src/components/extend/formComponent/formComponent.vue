<template>
  <div class="form-edit-container">
    <h3 v-if="formConfig.title">{{formConfig.title}}</h3>
    <v-form ref="myForm"
            :model="form"
            :inline="formConfig.isSearch"
            :rules="formRules">
      <v-row>
        <!-- 如果两列占用栅栏树都为24,则会形成两行 -->
        <v-col :span="24"
               v-for="(arr, index) in formConfig.formItems"
               :key="index">
          <v-col :span="item.span || colSpan"
                 class="form-edit-col"
                 :class="{'search-form-item-col': formConfig.isSearch}"
                 v-for="(item, index1) in arr"
                 :key="index + '-' + index1">
            <v-form-item v-if="getDisplayCondition(item) && !item.slot && !item.isHidden"
                         :label="item.label"
                         :prop="item.key">
              <!-- 文本框 -->
              <template v-if="item.type === 'textarea'">
                <v-input type="textarea"
                         v-model="form[item.key]"
                         :placeholder="item.placeholder || item.label"
                         :maxLength="item.maxLength || defaultMaxLength"
                         :rows="item.rows || defaultTextareaRows"
                         :disabled="item.disabled || defaultDisable"
                         :size="size"
                         :showWordLimit="formConfig.isSearch ? false : (item.isShowWordLimit === undefined ? defaultShowWordLimit : item.isShowWordLimit)"
                         @change="onValueChange(item)"></v-input>
              </template>
              <!-- radio单选框 -->
              <template v-else-if="item.type === 'radio'">
                <v-radio-group v-model="form[item.key]"
                               :size="size"
                               :disabled="item.disabled || defaultDisable"
                               @change="onValueChange(item)">
                  <v-radio v-for="item1 in (item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))"
                           :key="item1.value"
                           :label="item1.value">{{item1.label}}</v-radio>
                </v-radio-group>
              </template>
              <!-- 多选框 -->
              <template v-else-if="item.type === 'checkbox'">
                <v-checkbox-group v-model="form[item.key]"
                                  :size="size"
                                  :disabled="item.disabled || defaultDisable"
                                  @change="onValueChange(item)">
                  <v-checkbox v-for="item1 in (item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))"
                              :key="item1.value"
                              :label="item1.value"
                              @change="onCheckboxChange(item, item1, item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))">{{item1.label}}</v-checkbox>
                </v-checkbox-group>
              </template>
              <!-- select选择框 -->
              <template v-else-if="item.type === 'select'">
                <v-select v-model="form[item.key]"
                          :placeholder="item.placeholder || item.label"
                          :size="size"
                          :disabled="item.disabled || defaultDisable"
                          @change="onChangeVals(item)">
                  <v-option v-for="item1 in (item.options ? item.options : item.optionsRelationShips(form[item.optionsDepends]))"
                            :key="item1.value"
                            :label="item1.label"
                            :value="item1.value"></v-option>
                </v-select>
              </template>
              <!-- 富文本编辑 -->
              <template v-else-if="item.type === 'quillEditor'">
                <v-editor v-model="form[item.key]"></v-editor>
              </template>
              <!-- 上传组件 -->
              <template v-else-if="item.type === 'upload'">
                <!-- 图片预览 -->
                <div v-if="form[item.key] && item.previewUrl && !isManualUpload"
                     class="upload-picture-wrapper">
                  <img class="upload-picture"
                       :src="`${item.previewUrl(form[item.key])}`"
                       alt="">
                  <v-svg class="close-svg"
                         :svg="'shanchu-'"
                         @click.native="onDelPic(item)"></v-svg>
                </div>
                <!-- 图片上传 -->
                <v-upload v-else
                          ref="upload"
                          :config="Object.assign(defaultUploadConfig, item.uploadConfig)"
                          :data="isManualUpload ? form : {}"
                          @onChange="onfileChange(item, arguments)"
                          @onRemove="onFileRemove(item, arguments)"
                          @onError="onUploadError(item, $event)"
                          @onSuccess="onUploadSuccess(item, $event)"></v-upload>
                <!-- 模板下载 -->
                <div v-if="item.template && item.template.url"
                     class="download-template">
                  <a :href="item.template.url"
                     target="_blank">{{item.template.label}}</a>
                </div>
              </template>
              <!-- 日期选择器 -->
              <template v-else-if="['date', 'year', 'month', 'week', 'daterange', 'dates', 'datetime', 'datetimerange'].includes(item.type)">
                <v-date-picker v-model="form[item.key]"
                               :type="item.type"
                               :size="size"
                               :disabled="item.disabled || defaultDisable"
                               :placeholder="item.placeholder || item.label"
                               :start-placeholder="item.startPlaceholder || '开始时间'"
                               :end-placeholder="item.endPlaceholder || '结束时间'"
                               :editable="false"
                               :valueFormat="item.format || defaultDateFormat"
                               :format="item.format || defaultDateFormat"
                               @change="onValueChange(item)"></v-date-picker>
              </template>
              <!-- 颜色选择器 -->
              <template v-else-if="['colorPicker'].includes(item.type)">
                <v-color-picker v-model="form[item.key]"
                               :size="size"
                               :disabled="item.disabled || defaultDisable"
                               @change="onValueChange(item)"></v-color-picker>
              </template>
              <!-- 输入框 -->
              <template v-else>
                <v-input type="text"
                         v-model="form[item.key]"
                         :size="size"
                         :disabled="item.disabled || defaultDisable"
                         :readonly="item.readonly || false"
                         :placeholder="item.placeholder || item.label"
                         :maxLength="item.maxLength || defaultMaxLength"
                         :showWordLimit="formConfig.isSearch ? false : (item.isShowWordLimit === undefined ? defaultShowWordLimit : item.isShowWordLimit)"
                         @change="onValueChange(item)"></v-input>
              </template>
              <div v-if="item.tips" class="form-item-tips">{{item.tips}}</div>
            </v-form-item>
            <div class="form-sub-title"
                 v-if="getDisplayCondition(item) && item.slot">
              <slot :name="item.slot">{{item.label}}</slot>
            </div>
          </v-col>
          <!-- 按钮 -->
          <v-col v-if="formConfig.isSearch && (formConfig.confirmBtnText || formConfig.cancelBtnText)" class="search-form-btns">
            <v-form-item label=" ">
              <div class="form-edit-btns-search">
                <v-button @click="onConfirm"
                          v-if="formConfig.confirmBtnText"
                          :isLoading="loading && searchLoading"
                          :size="'mini'"
                          :loadingText="'查询中···'">{{formConfig.confirmBtnText || defaultConfirmBtnText}}</v-button>
                <v-button plain
                          v-if="formConfig.cancelBtnText"
                          :size="'mini'"
                          @click="onCancel">{{formConfig.cancelBtnText || defaultCancelBtnText}}</v-button>
                <slot name="btn"></slot>
              </div>
            </v-form-item>
          </v-col>
        </v-col>
        
        <v-col v-if="!formConfig.isSearch && (formConfig.confirmBtnText || formConfig.cancelBtnText)"
               :span="24">
          <v-form-item label=" ">
            <div class="form-edit-btns">
              <v-button @click="onConfirm"
                        v-if="formConfig.confirmBtnText"
                        :isLoading="loading"
                        :loadingText="'保存中···'">{{formConfig.confirmBtnText || defaultConfirmBtnText}}</v-button>
              <v-button plain
                        v-if="formConfig.cancelBtnText"
                        @click="onCancel">{{formConfig.cancelBtnText || defaultCancelBtnText}}</v-button>
              <slot name="btn"></slot>
            </div>
          </v-form-item>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { vEditor } from '@cp/extend/quillEditor' // 富文本框编辑组件
import { _typeof } from '@cm/js/utils'

import { mapState } from 'vuex'

export default {
  components: {
    vEditor
  },
  data () {
    return {
      defaultMaxLength: 50, // 默认最大长度
      defaultTextareaRows: 3, // textarea默认行数
      defaultShowWordLimit: true, // 默认是否显示字数统计
      defaultDateFormat: 'yyyy-MM-dd', // 日期组件默认格式
      defaultConfirmBtnText: '保存', // 确认按钮文本
      defaultCancelBtnText: '取消', // 取消按钮文本
      defaultDisable: false, // 默认是否禁用
      defaultUploadConfig: {
        name: 'fileUpload', // 上传的文件字段名，默认fileUpload
        action: '#', // 上传地址
        limit: 1, // 最大允许上传个数，默认1
        autoUpload: true, // 是否立即上传，默认true
        accept: '.jpg, .jpeg, .png', // 接受的文件类型，默认图片
        headers: {
          env: process.env.ENV_CONFIG
        }, // 设置请求头
      }, // 上传文件默认配置
      defaultVals: new Map([
        ['checkbox', []],
        ['daterange', []],
        ['datetimerange', []]
      ]), // 字段的默认值
      depends: {}, // 字段依赖关系
      form: {}
    }
  },
  computed: {
    ...mapState(['loading', 'searchLoading']),
    colSpan () {
      if (this.formConfig.cols) {
        return 24 / this.formConfig.cols
      } else {
        return 12
      }
    },
    size () {
      return this.formConfig.isSearch ? 'small' : 'normal'
    },
    // 是否包含upload组件并且为手动上传
    isManualUpload () {
      let res = false
      this.formConfig.formItems.forEach(arr => {
        arr.forEach(item => {
          if (item.type === 'upload' && item.uploadConfig && item.uploadConfig.autoUpload === false) {
            res = true // 手动上传
          }
        })
      })
      return res
    },

  },
  props: {
    // 表单配置
    formConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表单验证规则
    formRules: {
      type: Object
    },
    // 表单数据
    formData: {
      type: Object,
      default () {
        return {}
      }
    },
    // size

  },
  methods: {
    // 选择文件时
    onfileChange (item, files) {
      // 自动上传时return
      if (!this.isManualUpload) return
      let [, [file]] = Array.from(files)
      this.setFormValue(item.key, file) // 验证用
    },
    // 移除文件时
    onFileRemove (item, files) {
      // 自动上传时return 
      if (!this.isManualUpload) return
      let [, [file]] = Array.from(files)
      this.setFormValue(item.key, file) // 验证用
    },
    // 文件上传成功
    onUploadSuccess (item, response) {
      console.log('上传成功', response)
      // 因为上传成功之后，不是简单的给变量赋值，不同业务的处理不一样，所以此处将处理过程交给具体的业务处理
      this.$emit('uploadSuccess', item, response, this.form)
      // if (!this.isManualUpload) { // 自动上传
      //   this.$set(this.form, item.key, response.id)
      //   this.form[item.cdnUrl] = response.cdnUrl || response.path
      //   this.$refs.myForm.validateField(item.cdnUrl)
      //   this.onValueChange(item)
      // } else {
      //   // 手动上传
      //   this.$emit('uploadSuccess', response, this.form)
      // }
    },
    // 文件上传失败
    onUploadError (item, response) {
      this.$message({
        message: '文件上传失败，请检查',
        type: 'error'
      })
      console.log('上传失败', item, response)
    },
    // 删除图片
    onDelPic (item) {
      this.$set(this.form, item.key, '')
      // this.form[item.cdnUrl] = ''
      // this.$refs.myForm.validateField(item.cdnUrl)
      this.onValueChange(item)
    },
    // 表单值发生改变时
    onValueChange (item) {
      if (!item.immediate) return
      this.$emit('formValueChange', item.key, this.form[item.key])
    },
    // 重置表单的值
    resetVal () {
      this.getFormKeys()
    },
    // 设置某个key的值
    setFormValue (key, val) {
      this.$set(this.form, key, val)
      this.$refs.myForm.validateField(key) // 验证
    },
    // 获取表单的key和默认的值
    getFormKeys () {
      let formItems = this.formConfig.formItems
      formItems.forEach(arr => {
        arr.forEach(item => {
          let key = item.key
          if (![undefined, ''].includes(this.formData[key])) {
            this.$set(this.form, key, this.formData[key]) // 有值时，取传入的formData的值
          } else {
            this.$set(this.form, key, this.defaultVals.get(item.type) || '') // 没有传入值时，取默认值
          }

          // 图片cdn地址
          // if (item.cdnUrl) {
          //   this.$set(this.form, item.cdnUrl, this.formData[item.cdnUrl] || '')
          // }
        })
      })

      // if (this.$slots.formItem) {
      //   this.$slots.formItem.forEach(item => {
      //     let key = item.data.key
      //     if (![undefined, ''].includes(this.formData[key])) {
      //       this.$set(this.form, key, this.formData[key]) // 有值时，取传入的formData的值
      //     } else {
      //       this.$set(this.form, key, this.defaultVals.get(item.type) || '') // 没有传入值时，取默认值
      //     }
      //   })
      // }

      this.$nextTick(() => {
        this.clearValidate()
      })
    },
    // 计算字段的依赖关系，控制显示隐藏
    getDisplayCondition (_item) {
      if (!_item.displayCondition) {
        return true // 没有依赖关系，一直显示
      } else {
        let arr = []
        for (let key of Object.keys(_item.displayCondition)) {
          let res
          // 将显示条件统一转成数组
          if (['string', 'number', 'boolean', 'undefined', 'null', 'object'].includes(_typeof(_item.displayCondition[key]))) {
            res = [_item.displayCondition[key]]
          } else {
            res = _item.displayCondition[key]
          }

          if (['string', 'number', 'boolean', 'object', 'undefined', 'null'].includes(_typeof(this.form[key]))) {
            arr.push(res.includes(this.form[key]))
          } else {
            let arr1 = []
            res.forEach(item1 => {
              arr1.push(this.form[key].includes(item1))
            })
            arr.push(arr1.every(item1 => item1))
          }
        }
        // console.log(arr)
        // 判断是否满足所有条件
        return arr.every(item => item)
      }
    },
    // 计算字段的依赖关系，控制值是否重置
    getDepends () {
      this.formConfig.formItems.forEach(arr => {
        arr.forEach(item => {
          if (item.optionsDepends) {
            this.depends[item.optionsDepends] = item.key
          }
        })
      })
    },
    // 选择某一个字段时，清空有依赖关系的字段的值
    onChangeVals (item) {
      this.onValueChange(item)
      if (!this.depends[item.key]) return
      // 当有依赖关系时，被依赖的值改变，依赖的字段置为默认值
      this.$set(this.form, this.depends[item.key], this.defaultVals.get(item.type) || '')
    },
    // 表单清除验证
    clearValidate (_arr = []) {
      // console.log('清除表单验证提示')
      if (_arr.length) {
        this.$refs.myForm.clearValidate(_arr)
      } else {
        this.$refs.myForm.clearValidate()
      }
    },
    // 表单验证
    async validate () {
      let res = await this.$refs.myForm.validate().then(res => {
        return res
      }).catch(err => {
        return err
      })
      return res === true ? '1' : '0' // 1 验证通过  0 验证不通过
    },
    // 获取表单数据
    getFormData () {
      return this.form
    },
    // 多选组件checkbox选择时触发
    onCheckboxChange (item, check, options) {
      if (!item.hasAll) return
      let key = item.key
      // 点击全部时, 其他项不选中
      if (check.value === 'all') {
        this.$set(this.form, key, ['all'])
      } else {
        // 选择其他项时，去除'全部'选项选中状态
        if (this.form[key].includes('all')) {
          this.form[key].splice(this.form[key].indexOf('all'), 1)
        }

        // 选择了所有的项之后，改变为选择'全部'选项
        let arr = options.filter(item => item.value !== 'all')
        if (arr.length === this.form[key].length) {
          this.$set(this.form, key, ['all'])
        }
      }
    },
    // 点击确认按钮
    onConfirm () {
      console.log('form表单数据：', this.form)
      if (this.loading) return
      if (this.formConfig.isSearch) {
        this.$store.commit('SET_SEARCH_LOADING', true)
      }
      if (this.formConfig.needValidate) {
        // validate()如果不传入回调函数,则会返回一个Promise对象
        this.$refs.myForm.validate().then(res => {
          if (res) {
            if (this.isManualUpload) {
              this.$refs.upload[0].submit() // 手动上传
            } else {
              this.$emit('confirm', this.form)
            }
          }
        }).catch(() => {
          this.$message({
            message: '表单验证失败，请检查！',
            type: 'error'
          })
        })
      } else {
        if (this.isManualUpload) {
          this.$refs.upload[0].submit() // 手动上传
        } else {
          this.$emit('confirm', this.form)
        }
      }
    },
    // 点击取消按钮
    onCancel () {
      if (this.loading) return
      this.$emit('cancel', this.form)
    }
  },
  created () {
    this.getDepends()
  },
  mounted () {
    // 初始化form属性
    this.getFormKeys()
  },
  watch: {
    formData: {
      handler () {
        console.log('formdata改变')
        this.getFormKeys()
      }
    },
    formConfig: {
      handler () {
        console.log('formConfig改变')
        this.getFormKeys()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-edit-container {
  background-color: #fff;
  h3 {
    font-size: 16px;
    color: #333;
    line-height: 22px;
    padding: 20px;
  }
  .form-edit-col {
    padding: 0 20px;
    &.search-form-item-col {
      display: inline-block;
      width: auto !important;
      padding: 0;
    }
    /deep/.el-radio-group,
    /deep/.ui-checkbox-group {
      line-height: 40px;
    }

    .form-sub-title {
      margin: 20px 0;
      padding-left: 10px;
      font-size: 16px;
      border-left: 4px solid #a2a2a2;
    }

    
  }
  /deep/.search-form-btns {
    display: inline-block;
    width: auto !important;
  }
  .form-edit-line .form-edit-col:last-child {
    border-right: 0 none;
  }

  .form-edit-btns {
    text-align: right;
    padding: 10px 20px 0;
    /deep/.ui-button {
      padding: 0 20px;
    }
  }

  .form-edit-btns-search {
    text-align: center;
  }

  // 提示语
  .form-item-tips {
    padding: 6px 0;
    color: #a2a2a2;
    font-size: 12px;
  }

  // 图片预览
  .upload-picture-wrapper {
    .upload-picture {
      width: 100px;
    }
    .close-svg {
      vertical-align: top;
      margin-left: -10px;
    }
  }

  // 上传模板下载
  .download-template {
    padding-top: 20px;
    a {
      color: $mainColor;
    }
  }
}
</style>

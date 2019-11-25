<template>
  <el-upload ref="uploadComponent"
             class="ui-upload"
             :class="['ui-upload-' + size]"
             :action="config.action"
             :headers="config.headers"
             :data="data"
             :limit="config.limit"
             :name="config.name"
             :auto-upload="config.autoUpload"
             :accept="config.accept"
             :with-credentials="withCredentials"
             :show-file-list="showFileList"
             :http-request="httpRequest"
             :multiple="multiple"
             :disabled="disabled"
             :on-preview="onPreview"
             :on-remove="onRemove"
             :on-success="onSuccess"
             :on-error="onError"
             :on-progress="onProgress"
             :on-change="onChange"
             :before-upload="beforeUpload"
             :before-remove="beforeRemove"
             :on-exceed="onExceed">
    <slot>
      <v-svg :svg="'tijiao'"></v-svg>
      <slot name="text">
        <span class="upload-text">浏览</span>
      </slot>
    </slot>
    <template slot="tip">
      <slot name="tip"></slot>
    </template>
  </el-upload>
</template>

<script>
import { Upload } from 'element-ui'

export default {
  name: 'vUpload',
  components: {
    [Upload.name]: Upload
  },
  props: {
    config: {
      type: Object,
      default () {
        return {
          name: 'fileUpload', // 上传的文件字段名
          action: '#', // 上传地址
          limit: 1, // 最大允许上传个数
          autoUpload: true, // 是否立即上传
          accept: '.jpg, .jpeg, .png', // 接受上传的文件类型
          headers: {} // 设置请求头
        }
      }
    },
    data: {
      type: Object,
      default () {
        return {}
      }
    }, // 额外参数
    multiple: Boolean, // 是否支持多选
    withCredentials: {
      type: Boolean,
      default: true
    }, // 是否携带cookie
    showFileList: {
      type: Boolean,
      default: true
    }, // 是否显示已上传文件列表
    httpRequest: Function, // 自定义上传行为
    disabled: Boolean, // 是否禁用
    size: String // 尺寸
  },
  methods: {
    // 点击文件列表中已上传的文件时
    onPreview (file) {
      this.$emit('onPreview', file)
    },
    // 文件列表移除文件
    onRemove (file, fileList) {
      this.$emit('onRemove', file, fileList)
    },
    // 文件上传成功
    onSuccess (response, file, fileList) {
      // if (response.code) {
      //   this.$message({
      //     message: response.message,
      //     type: 'error'
      //   })
      //   return
      // }
      this.$refs.uploadComponent.clearFiles() // 上传成功，清空上传文件
      this.$emit('onSuccess', response, file, fileList)
    },
    // 文件上传失败
    onError (err, file, fileList) {
      console.log(err, fileList, file)
      this.$emit('onError', err, file, fileList)
    },
    // 文件上传过程中
    onProgress (event, file, fileList) {
      this.$emit('onProgress', event, file, fileList)
    },
    // 文件状态改变时的，添加文件、上传成功和上传失败时都会被调用
    onChange (file, fileList) {
      this.$emit('onChange', file, fileList)
    },
    // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
    beforeUpload (file) {
      this.$emit('beforeUpload', file)
    },
    // 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除
    beforeRemove (file, fileList) {
      this.$emit('beforeRemove', file, fileList)
    },
    // 文件超出个数限制时
    onExceed (file, fileList) {
      this.$emit('onExceed', file, fileList)
    },
    // 手动提交
    submit () {
      this.$refs.uploadComponent.submit()
    }
  }
}
</script>

<style lang="scss">
.ui-upload {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #eaeaea;
  display: inline-block;
  text-align: right;
  position: relative;
  box-sizing: border-box;
  &.ui-upload-mini {
    height: 28px;
    line-height: 28px;
  }
  .el-upload--text {
    padding-right: 24px;
  }
  .icon {
    color: $mainColor;
  }
  .upload-text {
    color: #333333;
    font-size: 14px;
    padding-left: 6px;
  }

  .el-upload-list {
    width: 80%;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    text-align: left;
    .el-upload-list__item {
      margin: 0;
    }
  }
}
</style>

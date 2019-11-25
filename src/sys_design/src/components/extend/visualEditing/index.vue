<template>
    <div class="visual-editing-container">
      <!-- 头部栏 -->
      <h3>{{editType === 'visualEditing' ? '可视化编辑' : '指标绑定'}}</h3>
      <div class="html-edit-header">
        <v-tabs v-model="currentTab" :tabData="tabData" @tabClick="onTabClick"></v-tabs>
        <div class="html-edit-header-btn">
          <!-- 查看所有指标 -->
          <!-- <v-select v-if="editType === 'quotaBinding'" :size="'mini'" :width="'150px'" :placeholder="'查看所有指标'">
            <v-option v-for="item in quotas" :key="item.name">{{item.name}}</v-option>
          </v-select> -->
          <!-- 模式切换 -->
          <v-radio-group v-model="model" @change="onModelChange">
            <v-radio :label="'edit'" :type="'button'">编辑模式</v-radio>
            <v-radio :label="'preview'" :type="'button'">预览模式</v-radio>
          </v-radio-group>
          <!-- 前进后退按钮 -->
          <span class="history-btn" v-if="editType === 'visualEditing'">
            <v-svg :class="['pre', {'disable': !history.preStep}]" :svg="'chehui-copy'" @click.native="preStep"></v-svg>
            <v-svg :class="['next', {'disable': !history.nextStep}]" :svg="'chehui-copy'" @click.native="nextStep"></v-svg>
          </span>
          <!-- 保存取消按钮 -->
          <v-button :size="'mini'" :isLoading="loading" @click="onVersionSave">保存</v-button>
          <v-button :size="'mini'" plain @click="onCancel">取消</v-button>
        </div>
      </div>
      <div class="edit-content" :class="{'edit-content-pc': platformType === '2'}">
        <!-- iframe -->
        <div class="iframe-wrap" :class="{'is-mobile': isMobile, 'is-pc': !isMobile}">
          <div class='mobile_preview_header' v-if="isMobile">
            <i class='mobile_preview_header_icon'></i>
          </div>
          <div
            :class="{
              'iframe-wrap-pc': platformType === '2',
              'iframe-wrap-mobile': isMobile
            }"
            v-for="item in tabData"
            :key="item.code"
            v-show="item.code === currentTab">
            <iframe :ref="'iframe' + item.code"
                    :src="getIframe(item.url)"></iframe>
            <div class="iframe-loading-wrap" v-if="iframeLoading['iframe' + item.code]">
              <v-loading class="iframe-loading"></v-loading>
            </div>
          </div>
          <div class='mobile_preview_footer' v-if="isMobile">
            <i class='mobile_preview_footer_icon'></i>
          </div>
        </div>
        <!-- 指标绑定预览 -->
        <div class="quota-bind-preview" :class="{'quota-bind-preview-mobile': isMobile}" v-if="editType === 'quotaBinding'">
          <ul>
            <li>
              <span>指标名称</span>
              <span>点击次数</span>
              <span class="bind-element">绑定的元素</span>
              <span>操作</span>
            </li>
            <li v-for="(item, index) in quotasPreview" :key="index">
              <span>{{item.name}}</span>
              <span>{{item.num}}</span>
              <span class="bind-element">{{item.bindSelector || '未绑定，请选择元素进行绑定'}}</span>
              <span>
                <v-button :type="'text'" v-if="item.bindSelector" :size="'mini'" @click="onRemoveBind(item)">解除绑定</v-button>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 属性编辑组件 -->
      <attributes-edit :isEdit="editSwitch" :attributes="attributes" @save="onSave"></attributes-edit>
      <!-- 指标绑定弹出框 -->
      <v-dialog :width="'40%'" :visible.sync="quotaBindSwitch">
        <span>当点击时上报此指标：</span> 
        <v-select v-model="quota" :size="'mini'" :width="'150px'" :placeholder="'查看所有指标'" @change="tipMessage = ''">
          <v-option v-for="item in notBindedAuota" :key="item.name" :label="item.name" :value="item.code"></v-option>
        </v-select>
        <span class="tipMessage" v-if="tipMessage">{{tipMessage}}</span>
        <div slot="footer">
          <v-button @click="onBindQuota">确定</v-button>
          <v-button plain @click="onCancelBindQuota">取消</v-button>
        </div>
      </v-dialog>
    </div>
</template>

<script>
import attributesEdit from './attributeEdit'
import HTMLEdit from '@cm/htmlEdit'
import { getIframe } from './api' // api

import { mapState } from 'vuex'

// import { quotaBindTest } from '@/api/labManage' // api

export default {
  name: 'customerPortrait',
  components: {
    attributesEdit
  },
  data () {
    return {
      iframeLoading: {}, // iframe加载loading
      model: 'edit', // 编辑模式｜ 预览模式
      htmlEditInstance: {}, // htmlEdit编辑实例
      history: {
        preStep: false,
        nextStep: false
      }, // 回退前进是否可用
      currentTab: '', // 当前页面id
      tabData: [], // 要编辑的页面数据
      editSwitch: false, // 可视化编辑框开关
      quotaBindSwitch: false, // 指标绑定开关
      quotaBindPreviewData: {}, // 指标绑定数据预览
      quota: '', // 选择的指标
      tipMessage: '', // 未选择指标提示语
      attributes: {}, // 编辑的元素属性
      getIframe: getIframe
    }
  },
  computed: {
    ...mapState(['loading']),
    quotasPreview () {
      return this.quotaBindPreviewData['iframe' + this.currentTab] || []
    },
    notBindedAuota () {
      // 未绑定的指标
      let arr =  this.quotasPreview.filter(item => {
        return !item.bindSelector
      }).map(item => item.name)
      return this.quotas.filter(quota => {
        return arr.includes(quota.name)
      })
    },
    isMobile () {
      return ['1', '3'].includes(this.platformType)
    }
  },
  props: {
    // 要编辑的页面信息
    // pageInfor: {
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // },
    // 当前操作
    editType: {
      type: String,
      default: 'visualEditing' // visualEditing-可视化编辑 ，quotaBinding-指标绑定
    },
    // 要编辑的页面信息
    pages: {
      type: Array,
      default () {
        return []
      }
    },
    // 要绑定的指标数据
    quotas: {
      type: Array,
      default () {
        return []
      }
    },
    // 平台类型 1-移动端 2-PC端 3-小程序
    platformType: {
      type: String,
      default: '2'
    },
    // 编辑历史
    versionEditHistory: Map,
    // 实验code
    experimentCode: [String, Number]
  },
  methods: {
    // 版本切换时
    onTabClick () {
      console.log(this.currentTab)
      //处理指标的绑定状态
      this.getQuotaIsBind()
      this.onModelChange()
    },
    // 取消指标绑定
    onCancelBindQuota () {
      this.quotaBindSwitch = false
      this.tipMessage = ''
      this.quota = ''
      this.$refs['iframe' + this.currentTab][0].contentWindow.postMessage({type: 'bindQuotaCancel'}, '*')
    },
    // 确定绑定指标
    onBindQuota () {
      if (!this.quota) {
        this.tipMessage = '请选择指标'
        return
      }
      this.quotaBindSwitch = false
      // 通知iframe绑定指标
      this.$refs['iframe' + this.currentTab][0].contentWindow.postMessage({type: 'bindQuota', data: this.quota}, '*')
      this.tipMessage = ''
      this.quota = ''
    },
    // 解除指标的绑定
    onRemoveBind (item) {
      this.$confirm('是否解除已绑定的指标？', '提示').then(res => {
        this.$refs['iframe' + this.currentTab][0].contentWindow.postMessage({type: 'removeQuotaBind', data: item}, '*')
      })
    },
    // 上一步
    preStep () {
      if (!this.history.preStep || this.model === 'preview') return
      this.htmlEditInstance['iframe' + this.currentTab].preStep()
    },
    // 下一步
    nextStep () {
      if (!this.history.nextStep || this.model === 'preview') return
      this.htmlEditInstance['iframe' + this.currentTab].nextStep()
    },
    // 切换模式
    onModelChange () {
      let func
      if(this.model === 'edit') {
        func = 'setEditModel' // 编辑模式
      } else if (this.model === 'preview') {
        func = 'setPreviewModel' // 预览模式
      }
      this.htmlEditInstance['iframe' + this.currentTab][func]()
      // console.log(this.$refs.iframe2019111200071[0].contentWindow)
    },
    // 版本编辑保存
    onVersionSave () {
      // 可视化编辑时
      if (this.editType === 'visualEditing') {
        // 获取文件名
        let url = this.tabData.filter(item => item.code === this.currentTab)[0].url
        let filename = url.split('/').pop()
        // 页面html
        let {html, quotaBind} = this.htmlEditInstance['iframe' + this.currentTab].getHtml()
        let version = {
          code: this.currentTab,
          filename: filename,
          html: html,
          quotaBind: quotaBind
        }
        // 上传保存
        this.$emit('editFinished', [version])
      } else {
        //  指标绑定时
        let result = []
        this.tabData.forEach(item => {
          // 文件名
          let url = item.url
          let filename = url.split('/').pop()
          // 页面html
          let {html, quotaBind} = this.htmlEditInstance['iframe' + item.code].getHtml('quotaBinding')
          result.push({
            code: item.code,
            filename: filename,
            html: html,
            quotaBind: quotaBind
          })
        })

        // 上传保存
        this.$emit('editFinished', result)
      }
    },
    // 版本编辑取消保存
    onCancel () {
      console.log(this.quotaBindPreviewData)
      this.$confirm('当前更改未保存，是否取消？', '提示').then(res => {
        this.$emit('cancel')
      })
    },
    // 生成html文件
    createHtml (iframe, filename) {
      iframe.delBodyOverlay() // 删除最外面的蒙层
      let content = iframe.document.children[0].innerHTML
      let blob = new Blob([content], {
        type: 'text/html'
      })
      return new File([blob], filename)
      // // 创建a标签
      // let linkNode = document.createElement('a');
      // linkNode.download = filename;
      // linkNode.style.display = 'none';
      // // 利用Blob对象将字符内容转变成二进制数据
      // let blob = new Blob([content]);
      // linkNode.href = URL.createObjectURL(blob);
      // // 点击
      // document.body.appendChild(linkNode);
      // linkNode.click();
      // // 移除
      // document.body.removeChild(linkNode);
    },
    // 获取iframe传递的值
    getIframeData (e) {
      console.log(e.data)
      let { type, data} = e.data
      if (type === 'visualEditing') { // 可视化编辑模式：获取可视化编辑的数据
        this.attributes = data
        this.editSwitch = true
      } else if (type === 'history') { // 历史记录：获取是否可前进后退
        this.history = data
      } else if (type === 'quotaBinding') { // 指标绑定：弹出指标选择框
        this.attributes = data
        this.quotaBindSwitch = true
      } else if (type === 'testBinding') { // 测试指标绑定是否成功
        if (this.model === 'edit') return
        // 如果返回success_tracked，则代表测试时请求成功
        if (data.message === 'success_tracked') {
          let arr = this.quotaBindPreviewData['iframe' + this.currentTab]
          arr.forEach(item => {
            if (data.quota.includes(item.code)) {
              item.num = item.num + 1
            }
          })
          this.$set(this.quotaBindPreviewData, 'iframe' + this.currentTab, arr)
        }
        
      } else if (type === 'quotaBindSuccess') { // 指标绑定成功时，更改页面提示
        this.quotaBindPreviewData[data.key].forEach(item => {
          if (data.quota.includes(item.code)) {
            item.bindSelector = data.selector
          }
        })
      } else if (type === 'quotaRemoveBindSuccess') { // 指标解除绑定成功，更改页面提示
        this.quotaBindPreviewData[data.key].forEach(item => {
          if (item.code === data.quota) {
            item.bindSelector = ''
          }
        })
      } else if (type === 'quotaBindFail') { // 指标绑定失败
        this.$message({
          message: data,
          type: 'error'
        })
      }
    },
    // 元素编辑保存
    onSave (type, data) {
      this.editSwitch = false
      // 通知iframe保存或取消
      this.$refs['iframe' + this.currentTab][0].contentWindow.postMessage({type, data}, '*')
    },
    // 处理指标的绑定状态
    getQuotaIsBind () {
      if (!this.versionEditHistory.get('iframe' + this.currentTab)) return
      // if (!this.versionEditHistory.get('iframe' + this.currentTab).quotaBind) return
      for(let [key, val] of this.versionEditHistory.get('iframe' + this.currentTab).quotaBind) {
        this.quotaBindPreviewData['iframe' + this.currentTab].forEach(item => {
          if (val.includes(item.code)) {
            this.$set(item, 'bindSelector', key)
          }
        })
      }
    }
  },
  mounted () {
    // this.currentTab = this.pageInfor.code
    // this.$set(this.iframeLoading, 'iframe' + this.currentTab, true)
    // let page = {
    //   name: this.pageInfor.code,
    //   label: this.pageInfor.name,
    //   url: this.pageInfor.url
    // }
    // this.tabData.push(page)

    this.pages.forEach((item, index) => {
      if (index === 0) {
        this.currentTab = item.code
      }
      let page = {
        name: item.code,
        code: item.code,
        label: item.name,
        url: item.url
      }

      this.tabData.push(page)
      this.$set(this.iframeLoading, 'iframe' + page.code, true)
      this.$set(this.quotaBindPreviewData, 'iframe' + item.code, this.quotas.map(quota => {
        return {
          name: quota.name,
          code: quota.code,
          num: 0,
          bindSelector: '' // 指标绑定的元素
        }
      }))
    })
    this.$nextTick(() => {
      Object.keys(this.$refs).forEach( key => {
        this.$refs[key][0].onload = () => {
          this.$set(this.iframeLoading, key, false) // iframe加载完成，关闭loading
          this.htmlEditInstance[key] = new HTMLEdit(key, this.$refs[key][0].contentWindow, {
            editType: this.editType,
            version: this.versionEditHistory.get(key),
            experimentId: this.experimentCode,
            domain: process.env.VUE_APP_CASEURL
          }) // 每个页面的编辑实例
          window.addEventListener("message", this.getIframeData)
        }
      })
      //处理指标的绑定状态
      this.getQuotaIsBind()
    })
  },
  beforeDestroy () {
    console.log('页面销毁')
    window.removeEventListener('message', this.getIframeData)
    this.htmlEditInstance = {}
  }
}
</script>

<style lang="scss" scoped>
.visual-editing-container {
  position: fixed;
  padding-top: 10px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: #fff;
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    font-size: 16px;
  }
  .html-edit-header { 
    position: relative;
    height: 45px;
    .html-edit-header-btn {
      position: absolute;
      right: 10px;
      top: 0;
      .history-btn {
        padding: 0 10px;
        font-size: 16px;
        vertical-align: middle;
        .pre, .next {
          padding: 0 10px;
          &.disable {
            color: rgba(0, 0, 0, 0.3);
            cursor: not-allowed;
          }
        }
        .next {
          transform: rotateY(180deg);
        }
      }
    }
  }
  .edit-content {
    flex: 1;
    display: flex;
    position: relative;
    overflow-x: hidden;
    .mobile_preview_header {
      display: block;
      // position: absolute;
      // top: 0;
      // left: 0;
      height: 40px;
      line-height: 40px;
      width: 387px;
      background-color: #eeeff2;
      text-align: center;
      border-top-right-radius: 50px;
      border-top-left-radius: 50px;
    }
    .mobile_preview_header_icon {
      display: inline-block;
      width: 65px;
      height: 10px;
      background: #c8c9cc;
      border-radius: 9px;
      vertical-align: middle;
      margin-top: 18px;
    }

    .mobile_preview_footer {
      display: block;
      // position: absolute;
      // bottom: 0;
      // left: 0;
      height: 52px;
      width: 387px;
      background: #eeeff2;
      text-align: center;
      line-height: 45px;
      border-bottom-right-radius: 50px;
      border-bottom-left-radius: 50px;
    }
 
    .mobile_preview_footer_icon {
      display: inline-block;
      width: 43px;
      height: 43px;
      background: #c8c9cc;
      border-radius: 50%;
      vertical-align: middle;
    }

    &.edit-content-pc {
      flex-direction: column;
    }
  }
  .iframe-wrap {
    // border: 1px solid #ccc;
    position: relative;
    display: flex;
    flex-direction: column;
    &.is-mobile {
      width: 375px;
      padding-left: 20px;
    }
    &.is-pc {
      flex: 1;
    }
    .iframe-wrap-pc {
      width: 100%;
      flex: 1;
    }
    .iframe-wrap-mobile {
      // margin-left: 20px;
      width: 375px;
      min-height: 600px;
      flex: 1;
      // min-height: 294px;
      // max-height: calc(100vh - 166px);
      border: 6px solid #eeeff2;
      background-color: #fff;
      // top: 40px;
      // position: absolute;
      // left: 20px;
      // transform: translateX(-50%);
    }
    iframe {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
    .iframe-loading-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 100;
    }
    .iframe-loading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .quota-bind-preview {
    padding: 20px;
    &.quota-bind-preview-mobile {
      flex: 1;
    }
    ul {
      border: 1px solid #ccc;
      border-bottom: 0 none;
      border-right: 0 none;
      li {
        display: flex;
        border-bottom: 1px solid #ccc;
        span {
          width: 180px;
          text-align: center;
          height: 30px;
          line-height: 30px;
          border-right: 1px solid #ccc;
          &.bind-element {
            flex: 1;
          }
        }
      }
    }
  }
}

.tipMessage {
  color: red;
}

</style>

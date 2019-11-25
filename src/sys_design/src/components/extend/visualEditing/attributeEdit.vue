<template>
<div class="attributes-edit-container" v-if="isEdit">
    <div class="attributes-edit" id="attributes_edit_wrap">
        <div>
            <h3>
                <span>&lt;{{attributes.nodeName}}&gt;标签</span>
                <!-- <v-button class="attribute-save-btn" :size="'mini'" :type="'text'" @click="onSave('preview')">预览</v-button> -->
                <v-button class="attribute-save-btn" :size="'mini'" :type="'text'" @click="onSave('save')">应用</v-button>
                <v-button class="attribute-save-btn" :size="'mini'" :type="'text'" @click="onSave('cancel')">取消</v-button>
            </h3>
            <v-tabs v-model="cssTab" :tabData="tabs" @tabClick="onTabClick"></v-tabs>
        </div>
        <div class="edit-wrap">
            <v-form-component ref="cssForm" :formConfig="formConfig" :formData="formData" @formValueChange="onFormValueChange"></v-form-component>
        </div>
    </div>
</div>
    
</template>

<script>
import { vFormComponent } from '@cp/extend/formComponent' // 表单组件

export default {
    components: {
        vFormComponent
    },
    directives: {
        drag: {
            bind (el) {
                function setDragable(drg,mov){
                    let drgObj=drg;
                    let moveObj=mov||drg;
                    function G(o){return document.querySelector(o)}
                    //获取元素的纵坐标,距离文档顶部的高度
                    function getTop(e) {
                    var offset = e.offsetTop;
                    if (e.offsetParent != null) offset += getTop(e.offsetParent);
                    return offset;
                    }
                    //获取元素的横坐标,距离文档左边的宽度
                    function getLeft(e) {
                    var offset = e.offsetLeft;
                    if (e.offsetParent != null) offset += getLeft(e.offsetParent);
                    return offset;
                    }
                    //拖放开始
                    function dragstart(e){
                        let off={x:e.x-getLeft(moveObj),y:e.y-getTop(moveObj)};
                        moveObj.dragOff=off;
                    }
                    //拖放结束
                    function dragend(e){
                        let off=moveObj.dragOff;
                        moveObj.style.top=e.y-off.y+"px";
                        moveObj.style.left=e.x-off.x+"px";
                    }
                
                    if(typeof drg !="object")
                        drgObj=G(drg);
                    if(typeof mov != "object")
                        moveObj=G(mov||drg);
                    drgObj.draggable = true;
                    drgObj.style.cursor= "move";
                    moveObj.style.position = "absolute";
                    //监听拖动事件
                    drgObj.addEventListener("dragstart",dragstart,true);
                    drgObj.addEventListener("dragend",dragend,true);
                }
                setDragable(el, document.querySelector('.attributes-edit-container'))
                // console.log('bind指令', el)
                // el.ondragstart = event => {
                //     event.dataTransfer.setData('wrap', event.target.id)
                //     document.querySelector('.attributes-edit-container').ondragover = function(evt){
                //         //取消事件的默认行为
                //         evt.preventDefault()
                //         return false
                //     }

                //     document.querySelector('.attributes-edit-container').ondrop = function(evt){
                //         console.log(evt)
                //         el.style.left = evt.pageX + "px"
                //         el.style.top = evt.pageY + "px"
                //         //取消事件的默认行为
                //         return false;
                //     }
                // }
            },
            inserted (e) {
                console.log('inserted指令', e)
            }
        }
    },
    data () {
        return {
            formData: {},
            cssTab: 'text',
            tabs: [
                { name: 'text', label: '文本', attrs: ['html', 'href', 'placeholder', 'value', 'src', 'alt']},
                { name: 'box', label: '盒模型', attrs: ['width', 'height', 'margin', 'padding']},
                { name: 'font', label: '文字', attrs: ['font_size', 'font_weight', 'color', 'text_align']},
                { name: 'background', label: '背景', attrs: ['background_color']},
                { name: 'border', label: '边框', attrs: ['border_color', 'border_width', 'border_style']},
                { name: 'other', label: '其他', attrs: ['visibility']}
            ],
            allFormItems: [
                // { label: '文字', key: 'text', span: 24},
                { label: 'html', key: 'html', type: 'textarea', span: 24, rows: 6},
                { label: 'href', key: 'href', span: 24, displayCondition: {
                    nodeName: 'A'
                }},
                { label: 'placeholder', key: 'placeholder', span: 24, displayCondition: {
                    nodeName: ['INPUT', 'TEXTAREA']
                }},
                { label: '输入框内容', key: 'value', span: 24, displayCondition: {
                    nodeName: ['INPUT', 'TEXTAREA']
                }},
                { label: '图片地址', key: 'src', span: 24, displayCondition: {
                    nodeName: 'IMG'
                }},
                { label: 'alt', key: 'alt', span: 24, displayCondition: {
                    nodeName: 'IMG'
                }},
                { label: '宽', key: 'width'},
                { label: '高', key: 'height'},
                { label: 'margin', key: 'margin'},
                { label: 'padding', key: 'padding'},
                { label: '字体大小', key: 'font_size'},
                { label: '颜色', key: 'color', type: 'colorPicker'},
                { label: '字号', key: 'font_weight', type: 'select', options: [
                    { label: '100', value: '100'},
                    { label: '200', value: '200'},
                    { label: '300', value: '300'},
                    { label: '400', value: '400'},
                    { label: '500', value: '500'},
                    { label: '600', value: '600'},
                    { label: '700', value: '700'},
                    { label: '800', value: '800'},
                    { label: '900', value: '900'}
                ]},
                { label: '文字对齐方式', key: 'text_align', type: 'select', options: [
                    { label: 'left', value: 'left'},
                    { label: 'center', value: 'center'},
                    { label: 'right', value: 'right'}
                ]},
                { label: '背景颜色', key: 'background_color', type: 'colorPicker'},
                { label: '边框颜色', key: 'border_color', type: 'colorPicker', span: 24 },
                { label: '边框宽度', key: 'border_width', span: 24 },
                { label: '边框样式', key: 'border_style', type: 'select', options: [
                    { label: 'solid', value: 'solid'},
                    { label: 'dotted', value: 'dotted'},
                    { label: 'double', value: 'double'},
                    { label: 'dashed', value: 'dashed'},
                ], span: 24 },
                { label: 'visibility', key: 'visibility'}
            ]
        }
    },
    computed: {
        attrs () {
            return this.tabs.filter(item => item.name === this.cssTab)[0].attrs || []
        },
        formConfig () {
            let attrs = this.tabs.filter(item => item.name === this.cssTab)[0].attrs || []

            let formItems = []
            this.allFormItems.forEach(item => {
                if (attrs.includes(item.key)) {
                    formItems.push(Object.assign({}, item, {
                        isShowWordLimit: false,
                        immediate: true
                    }))
                }
            })
            return {
                cols: 2,
                formItems: [formItems]
            }
        }
    },
    props: {
        // 元素的属性集合
        attributes: {
            type: [Object, String],
            default() {
                return {}
            }
        },
        isEdit: Boolean
    },
    methods: {
        // tab切换
        onTabClick () {
            this.$nextTick(() => {
                this.$refs.cssForm.getFormKeys()
            })
        },
        // 获取表单的值
        getFormValues () {
            Object.keys(this.attributes).forEach(key => {
                if (!['css', 'attributes'].includes(key)) {
                    this.formData[key] = this.attributes[key]
                }
            })
            this.formData = Object.assign( this.formData, this.attributes.css, this.attributes.attributes)
            setTimeout(() => {
                this.$refs.cssForm.setFormValue('nodeName', this.attributes['nodeName'])
            }, 100)
            console.log(this.formData)
        },
        // form表单值改变时实时触发
        onFormValueChange (key, val) {
            console.log(key, val)
            // if (key === 'text') {
            //     this.$set(this.formData, 'html', this.formData['html'].replace(new RegExp(this.formData[key], 'g'), val))
            //     this.$refs.cssForm.setFormValue('html', this.formData['html'])
            // }
            this.$set(this.formData, key, val)
        },
        // 保存
        onSave (type) {
            let data = JSON.parse(JSON.stringify(this.attributes))
            Object.keys(data).forEach(key => {
                if (!['css', 'attributes'].includes(key)) {
                    data[key] = this.formData[key]
                } else {
                    Object.keys(data[key]).forEach(key1 => {
                        data[key][key1] = this.formData[key1]
                    })
                }
            })
            this.$emit('save', type, data)
        }
    },
    mounted () {
        
    },
    watch: {
        isEdit () {
            if (this.isEdit) {
                console.log('编辑状态:')
                this.getFormValues()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .attributes-edit-container {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: rgba(0,0,0,0.3);
        .attributes-edit {
            position: absolute;
            border: 1px solid #accbff;
            padding: 5px;
            width: 500px;
            right: 20px;
            top: 100px;
            // transform: translateY(-50%);
            background-color: #fff;
            box-shadow: 0px 2px 10px 0px rgba(191, 196, 205, 0.4);
            display: flex;
            max-height: 400px;
            flex-direction: column;
            h3 {
                padding: 0px 10px;
                height: 36px;
                line-height: 36px;
                position: relative;
            }
            .edit-wrap {
                flex: 1;
                overflow-x: hidden;
            }
        }
        
    }
</style>
<template>
    <el-progress :percentage="percentage"
                 :type="type"
                 :stroke-width="strokeWidth"
                 :text-inside="textInside"
                 :color="color"
                 :show-text="showText"
                 >

    </el-progress>
</template>

<script>
import { Progress } from 'element-ui';
export default {
    name: 'vProgress',
    components: {
        [Progress.name]: Progress
    },
    props: {
        //百分比（必填）
        percentage: {
            type: Number ,
            default: 0
        },
        //进度条类型 line/circle/dashboard
        type: {
            type: String,
            default: 'line'
        },
        //进度条的宽度，单位 px
        strokeWidth: {
            type: Number ,
            default: 6
        },
        //进度条显示文字内置在进度条内（只在 type=line 时可用）
        textInside: {
            type: Boolean,
            default: false
        },
        //进度条当前状态 success/exception/warning
        status: String,
        //进度条背景色（会覆盖 status 状态颜色）
        color:[ String, Function, Array ],
        //是否显示进度条文字内容
        showText: {
            type: Boolean,
            default: true
        } 
    }
}
</script>
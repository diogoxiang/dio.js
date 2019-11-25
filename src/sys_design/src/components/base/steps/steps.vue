<template>
    <el-steps 
            class="ui-steps"
            :space="space" 
            :direction="direction"
            :active="active"
            :process-status="processStatus"
            :finish-status="finishStatus"
            :align-center="alignCenter"
            :simple="simple">
        <el-step v-for="(item,index) in stepsList"
                :key="index"
                :title="item.title"
                :description="item.description"
                :icon="item.icon"
                :status="item.status"
                @click.native="onStepClick(index)">
        </el-step>

    </el-steps>
</template>

<script>
import { Steps,Step } from 'element-ui';
export default {
    name: 'vSteps',
    components: {
        [Steps.name]: Steps,
        [Step.name]: Step
    },
    props: {
        //步骤条内容
        stepsList: Array,
        //每个 step 的间距，不填写将自适应间距。支持百分比。
        space: {
            type: [Number , String],
            default: '100%'
        },
        //显示方向 可选水平或垂直 vertical/horizontal
        direction: {
            type: String,
            default: 'horizontal'
        },
        //设置当前激活步骤
        active:{
            type: Number,
            default: 0
        },
        //设置当前步骤的状态 wait/process/finish/error/success
        processStatus:{
            type: String,
            default: 'success'
        },
        //设置结束步骤的状态
        finishStatus:{
            type: String,
            default: 'success'
        },
        //进行居中对齐
        alignCenter:{
            type: Boolean,
            default: false
        },
        //是否应用简洁风格
        simple:{
            type: Boolean,
            default: true
        },
    },
    methods: {
        onStepClick (idx) {
            this.$emit('stepClick', idx)
        }
    }
}
</script>

<style lang="scss" scoped>
.el-steps.ui-steps{
    margin: 15px 0;
    background: rgba(54, 187, 66, .1);
}
</style>
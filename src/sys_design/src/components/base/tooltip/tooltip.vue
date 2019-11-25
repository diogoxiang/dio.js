<template>
    <el-tooltip
        :popper-class="'ui-tooltip'"
        :effect="effect"
        :offset="offset"
        :content="content"
        :placement="placement"
        :disabled="disabled"
        :visible-arrow="visibleArrow">
        <span v-if="!content" slot='content'>
            <slot name="content"></slot>
        </span>
        <slot></slot>
    </el-tooltip>
</template>

<script>
import { Tooltip } from 'element-ui'
import { type } from 'os'

export default {
    components: {
        [Tooltip.name]: Tooltip
    },
    props: {
        // 主题颜色 light ｜ dark
        effect: {
            type: String,
            default: 'light'
        },
        // 显示的内容
        content: String,
        // 出现的位置
        placement: {
            type: String,
            default: 'top'
        },
        // 是否可用
        disabled: Boolean,
        // 出现位置的偏移量
        offset: {
            type: Number,
            default: 0
        },
        // 是否显示箭头
        visibleArrow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.ui-tooltip.el-tooltip__popper {
    padding: 6px !important;
    line-height: 1 !important;
    margin-bottom: 2px !important;
    border-radius: 2px;
    &.is-light {
        border-color: #ccc !important;
    }
}
</style>
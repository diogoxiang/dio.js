<template>
    <transition name="slide">
        <div class="page-transition-container">
            <!-- 标题 -->
            <h2>
                {{title || $route.meta.title}}
                <v-svg
                    class="page-transition-close"
                    :svg="'shanchu-1'"
                    @click.native="onClosePage"></v-svg>
            </h2>
            <div class="page-transition-wrap">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        // 弹出框标题
        title: {
            type: String,
            default: ''
        },
        // 打开弹出页面的方式，router路由跳转进入 ｜ component页面组件方式进入
        enterType: {
            type: String,
            default: 'route'
        }
    },
    methods: {
        /**
         * 关闭页面
         * 如果是路由跳转进入，则使用路由返回上一页
         * 如果是组件引用的形式进入，则触发父组件去关闭
         */
        onClosePage () {
            if (this.enterType === 'route') {
                this.$router.back()
            } else if (this.enterType === 'component') {
                this.$emit('close', false)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-transition-container {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 50;
        background-color: #fff;
        transition: all 0.2s ease-in;
        display: flex;
        flex-direction: column;
        h2 {
            position: relative;
            width: 100%;
            height: $bannerHeight;
            line-height: $bannerHeight;
            padding-left: 20px;
            background-color: $mainColor;
            color: #fff;
            font-size: 16px;
            box-sizing: border-box;
            .page-transition-close {
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 24px;
            }
        }
        .page-transition-wrap {
            flex: 1;
            overflow-x: hidden;
        }
    }
</style>
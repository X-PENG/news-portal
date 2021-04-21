<template>
    <div class="app-footer">
        <div class="app-footer-content">
            <h1 style="text-align: center">Footer</h1>
        </div>
        <div class="copy-right">
            <span class="copy-right-symbol">©</span>2021 江西财经大学 谢志朋 版权所有
        </div>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
@import '~@/styles/variables.scss';

.app-footer {
    height: 160px;
    background-color: $topic-color;
    color: #FFFFFF;

    * {
        margin: 0;
    }

    .app-footer-content {
        height: 100px;
    }

    .copy-right {
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;

        .copy-right-symbol {
            font-size: 16px;
            font-family: 微软雅黑, 黑体, STHeiti, "Microsoft YaHei";
        }
    }
}
</style>
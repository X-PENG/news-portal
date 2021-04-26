<template>
    <div class="app-footer">
        <div class="app-footer-content">
            <!-- <h1 style="text-align: center">Footer</h1> -->
            <span>关于我们</span>
            <i>|</i>
            <span>投稿须知</span>
            <i>|</i>
            <span>投稿邮箱：xxxxxxxxxx@163.com</span>
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
    height: 140px;
    background-color: $topic-color;
    color: #FFFFFF;

    * {
        margin: 0;
    }

    .app-footer-content {
        height: 80px;
        font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;


        span {
            color: #fff;
            font-style: normal;
            font-size: 14px;
            line-height: 28px;
            display: inline-block;
        }

        i {
            color: #fff;
            font-style: normal;
            font-size: 14px;
            line-height: 28px;
            display: inline-block;
            margin: 0px 15px;
        }
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
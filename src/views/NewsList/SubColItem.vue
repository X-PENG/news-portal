<template>
    <div class="sub-col-item">
        <router-link :to="{ name: '栏目新闻列表', params: {colId: colInfo.id} }">
            <h2>
                {{ colInfo.title }}
            </h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        //子栏目项
        name:'SubColItem',
        props: {
            colInfo: {
                type: Object,
                default: {},
                required: true
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
.sub-col-item {
    margin-top: 20px;
    a {
        text-decoration: none;
        outline: none;
        color: #323232;

        h2 {
            line-height: normal;
            font-size: 14px;
            background-color: #f2f1f1;
            padding: 10px 15px;
            font-family: Arial, Helvetica, sans-serif,微软雅黑;
            font-weight: bold;
        }

        &:hover {
            color: #94070a;
        }
    }
}
</style>
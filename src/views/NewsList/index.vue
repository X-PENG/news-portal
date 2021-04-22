<template>
    <div class="news-list">
        <h2 class="listTitle01">头条新闻</h2>

        <NewsItem  v-for="(item, index) in 10" :key="'新闻项'+index" :imgShowRight="false"/>
    </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

    export default {
        name:'NewsList',
        components: { NewsItem },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
.news-list {
    box-sizing: border-box;
    // padding: 0 5%;

    h2 {
        margin: 0;
    }

    .listTitle01 {
        line-height: normal;
        font-size: 30px;
        background-color: #f2f1f1;
        padding: 10px 15px;
        font-family: '华文宋体','宋体';
        font-weight: bold;
        margin: 35px 0;
    }
}
</style>
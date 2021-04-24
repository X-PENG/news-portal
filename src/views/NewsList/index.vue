<template>
    <div class="news-list" 
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
    >
        <h2 class="listTitle01">
            {{ columnInfo.title }}
        </h2>

        <NewsItem v-for="(item, index) in queryResult.records" :key="'新闻项'+index" :newsInfo="item" :imgShowRight="imgShowRight"/>
    </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import { newsListPageByColId } from '@/api/newsList'

const defaultPage = 1
const defaultPageSize = 10

function getDefaultQueryParam() {
    return {
        page: defaultPage,
        pageSize: defaultPageSize
    }
}

    export default {
        name:'NewsList',
        components: { NewsItem },
        props: {
            //通过路由传参
            colId: {
                type: String | Number,
                default: undefined,
                required: true
            }
        },
        data() {
            return {
                loading: false,
                queryParam: getDefaultQueryParam(),
                columnInfo: {},
                queryResult: {
                    total: 0,
                    current: defaultPage,
                    size: defaultPageSize,
                    records: []                  
                }
            }
        },
        computed: {
            imgShowRight() {
                let settingsInfo = this.columnInfo.settings
                if(settingsInfo && settingsInfo.showImgOnTheRight) {
                    return true
                }
                return false
            }
        },
        created() {
            console.log('colId = ' + this.colId)
            this.init()
        },
        methods: {
            init() {
                this.queryList()
            },
            queryList() {
                this.loading = true
                newsListPageByColId(this.colId, this.queryParam).then(resp => {
                    this.columnInfo = resp.column
                    //是一个分页对象
                    this.queryResult = resp.news
                    this.loading = false
                }).catch(error => {
                    this.loading = false
                    this.$message({
                        message: '加载新闻列表失败',
                        type: 'error'
                    })
                })
            }
        }
    }
</script>

<style lang="scss">
.news-list {
    box-sizing: border-box;
    // padding: 0 5%;
    min-height: 400px;

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
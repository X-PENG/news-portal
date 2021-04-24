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

        <!-- 分页组件 -->
        <div class="my-pagination-container">
            <pagination
            v-show="queryResult.total > 0"
            :layout="'total, prev, pager, next, jumper'"
            :total="queryResult.total"
            :page="queryResult.current"
            :limit="queryResult.size"
            @pagination="handlePagination"
            />
        </div>
    </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'
import Pagination from "@/components/Pagination";
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
        components: { NewsItem, Pagination },
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
            },
            handlePagination({ page, limit }) {
                this.queryParam.page = page;
                this.queryParam.pageSize = limit;
                this.queryList();
            }, 
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

    .my-pagination-container{
        //通过设置父元素的字体来控制分页组件的字体
        font-family: "Microsoft YaHei", SimSun, SimHei, "STHeiti Light", STHeiti, "Lucida Grande", Tahoma, Arial, Helvetica, sans-serif;        
        margin: 40px 0;

        //修改element-ui原始css样式
        .pagination-container {
            padding: 0px 0px;
            font-size: 16px;
            line-height: 40px;
            .el-pagination {
                //内部元素水平居中！
                display: flex;
                justify-content: center;

                .el-pagination__total, button, .el-pager li, .el-pagination__jump, .el-input__inner {
                    font-size: 16px;
                    height: 40px;
                    line-height: inherit;
                }
                button, .el-pager li{
                    min-width: 40px;
                    color: #969696;
                    background-color: #FFFFFF;
                    border: 1px solid #969696;
                    border-radius: 0;

                    &:hover{
                        border: 1px solid #94070a;
                        color: #94070a;
                    }

                    &.active {
                        color: #94070a;
                        background-color: #FFFFFF;
                        border: 0;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="position-nav">
        <div class="bread">
            <span>
                <template v-for="(item, index) in positionList">
                    <router-link :to="item.route" :key="'位置导航'+index">
                        {{ item.title }}
                    </router-link>
                    <i v-if="index < positionList.length-1" :key="'位置导航的i标签'+index">/</i>
                </template>
                <!-- <a href="../index.htm">首页</a><i>/</i><a href="index.htm">新闻纵横</a> -->
            </span>
        </div>
    </div>
</template>

<script>
//首页导航
const indexRoute = { name: '首页' }

    export default {
        name:'PositionNav',
        props: {
            newsColumnInfo: {
                type: Object,
                default: null,
                required: true
            }
        },
        data() {
            return {

            }
        },
        computed: {
            positionList() {
                let positionList = []
                positionList.push({ title: '首页', route: indexRoute })//第一个一定是首页导航
                //解析栏目信息
                this.resolveColumnInfo(this.newsColumnInfo, positionList)
                return positionList
            }
        },
        mounted() {
            // for debug
            // console.log('位置导航 新闻栏目信息')
            // console.log(this.newsColumnInfo)
        },
        methods: {
            resolveColumnInfo(col, positoinList) {
                let parent = col.parent
                if(parent) {
                    //有父栏目先处理父栏目
                    this.resolveColumnInfo(parent, positoinList)
                }
                //处理完父栏目或没有父栏目，再处理自己
                positoinList.push({ title: col.title, route: { name: '栏目新闻列表', params: {colId: col.id} }})
            }
        }
    }
</script>

<style lang="scss">
.position-nav {
    font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;
    font-size: 14px;

    .bread {
        padding: 10px 0px 30px 0px;
        overflow: hidden;
        span {
            display: inline-block;
            min-width: 187px;
            border-top: 3px solid #94070a;
            padding: 10px 15px 0 0;
            line-height: 20px;
            color: #828282;
        }
        a {
            outline: none;
            text-decoration: none;
            color: #828282;
        }
        i {
            margin: 0 5px;
            font-style: normal;
        }
    }
}
</style>
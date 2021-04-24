<template>
    <div class="news-detail">
        <div class="preview-container">
            <div class="peng-news-show-container" v-loading='loading'>
                <!-- 江财heahder -->
                <!-- <el-row>
                    <el-col :span="24">
                        <p style="text-align:center; font-size:20px; font-weight:bold; color:#0066CC;"><span style="font-size:24px">{{ newsInfo.title }}</span></p>
                    </el-col>
                    <el-col :span="24">
                        <p style="text-align:center; height:28px; line-height:28px; background:#F0F0F0; border:1px dashed #CCCCCC; margin-top:5px;">
                                日期：2021-04-10 16:49:05　　
                                文章点击数：<span id="dr_show_hits_108788">2606</span>
                                稿源：      
                        </p>           
                    </el-col>
                </el-row>             -->

                <el-row class="peng-news-show-header">
                    <el-col :span="24" class="articleTitle">
                        <h3> {{ newsInfo.title }} </h3>		 					
                    </el-col>
                    <el-col :span="24" class="articleAuthor">
                            <p>
                                <span> {{ authorInfo.time }}</span>
                                <span> 阅读：{{ authorInfo.count }}次</span>
                                <!-- <span>信息来源： 融媒体中心 </span>						 -->
                            </p>
                            <span>文字：{{ authorInfo.articleSource }}</span><i>|</i>    
                            <span>图片：{{ authorInfo.imgSource }}</span><i>|</i>    						  
                            <span>编辑：{{ authorInfo.editors }}</span><i>|</i>    						
                            <span>审核：{{ authorInfo.reviewers }}</span>    						
                    </el-col>
                </el-row> 

                <div class="peng-news-show-content" v-html="newsInfo.content">
                </div>
            </div> 
        </div>        
    </div>
</template>

<script>
import { getOneNews } from '@/api/newsDetail'

function getDefaultNewsInfo(){
    return {
        title: '',
        content: ''
    }
}

    export default {
        // 新闻详情组件
        name:'NewsDetail',
        props: {
            //通过路由传参
            newsId: {
                required: true                
            }
        },
        data() {
            return {
                loading: false,
                newsInfo: getDefaultNewsInfo(),
                authorInfo: {
                    time: '0000-00-00',
                    count: 0,
                    articleSource: '',
                    imgSource: '',
                    editors: '',
                    reviewers: ''
                }
            }
        },
        created() {
            console.log("新闻详情 newsId=" + this.newsId)
            this.initNews()
        },
        methods: {
            initNews(){
                //开始初始化
                this.loading = true
                getOneNews(this.newsId).then(resp => {
                    if(!resp) {
                        this.$message({
                            message: '加载失败！',
                            type: 'error'
                        })
                    }else {
                        this.newsInfo = resp

                        //检查外链，有外链就跳转到外网？
                        let externalUrl = this.newsInfo.externalUrl
                        if(externalUrl) {
                            //如果设置了外链，就跳转到外网
                            // window.location.href = externalUrl
                            window.open(externalUrl, '_blank');
                            this.$router.back()
                            return 
                        }

                        //填充作者信息
                        this.authorInfo.time = this.newsInfo.showPubTime || this.authorInfo.time
                        //阅读量 = 初始设置的阅读量 + 实际阅读量
                        this.authorInfo.count = (this.newsInfo.initReadingCount || 0) + (this.newsInfo.realReadingCount || 0) 
                        this.authorInfo.articleSource = this.newsInfo.articleSource || this.authorInfo.articleSource
                        this.authorInfo.imgSource = this.newsInfo.imgSource || this.authorInfo.imgSource
                        this.authorInfo.editors = this.format(this.newsInfo.editors || this.authorInfo.editors)
                        this.authorInfo.reviewers = this.format(this.newsInfo.reviewers || this.authorInfo.reviewers)
                    }

                    this.loading = false 
                }).catch(errpr => {
                    this.$message({
                        message: '加载失败！',
                        type: 'error'
                    })
                })
            },
            //去掉字符串末尾的分隔符，比如：顿号
            format(str) {
                if(str) {
                    let c = str[str.length - 1]
                    if(c === '、') {
                        return str.substring(0, str.length - 1)
                    }
                }
                return str
            }
        }     
    }
</script>

<style lang="scss">
.news-detail {
    font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;
    font-size: 16px;

    .preview-container * {
        padding: 0;
        margin: 0;
    }
    .preview-container {
        // display: flex;
        // justify-content: center;  
        // flex-wrap: wrap;
        // background: url(~@/assets/bg.gif) repeat-x #e4f1f9;
        min-height: 100%;
    }
    .peng-news-show-container {
        // width: 72%;
        width: 100%;
        padding: 0px 10px 30px 0px;
        // border:1px solid #c8d8e7;
        background:#FFFFFF;
    }
    .peng-news-show-header {
        margin-bottom:35px;
    }
    .articleTitle {
        color: #000;
        line-height: 26px;
        padding: 0 0 25px;
        height: auto;
        font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;    
    }
    .articleTitle h3 {
        font-size: 26px;
        line-height: 36px;
        font-weight: normal;
    }
    .articleAuthor {
        padding: 10px 0 10px 10px;
        color: #646464;
        font-size: 13px;
        border-left: 5px solid #dbdbdb;
    }
    .articleAuthor span {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        margin: 0 10px;
        color: #646464;
    }
    .articleAuthor i {
        font-style: normal;
        color: #646464;
    }
    .peng-news-show-content{
        font-size: 1em;
        font-family: Arial, Helvetica, sans-serif,微软雅黑;
        color: #292929;
        line-height: 2em;
    }
    .peng-news-show-content img{
        min-width: 70%;
        max-width: 70%;
        height: auto;
    }
}
</style>
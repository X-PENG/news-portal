<template>
    <!-- 轮播图新闻描述 -->
    <el-carousel 
        ref="carouselForNewsInfo" 
        class="carousel-txt" 
        arrow="never" 
        indicator-position="none" 
        :autoplay="false"
    >
        <el-carousel-item v-for="(item, index) in newsInfoList" :key="'轮播新闻描述'+index">
            <div class="slide-txt">
                <h3><a href="https://news.pku.edu.cn/ztwz111/jdbnzt/">【{{ index+1 }}】{{ item.title }}</a></h3>
                <p class="item-date-view"><span>{{ formatPubTime(item.showPubTime) }}</span>
                </p>
                <p class="item-detail"> 
                    <a href="https://news.pku.edu.cn/ztwz111/jdbnzt/">
                        {{ item.articleFragmentForShow }}
                    </a>
                </p>
            </div>
            <!-- <div class="slide-txt">
                <h3><a href="xwzh/3f1fb4b67c43428dba688ea34891484b.htm">【{{item}}】深入推进“人才战略年”的各项工作——北京大学召开院长（系主任）行政月度会</a></h3>
                <p class="item-date-view">
                    <span>2021/04/15</span>
                </p>
                <p class="item-detail"> <a href="xwzh/3f1fb4b67c43428dba688ea34891484b.htm">
                                                                    4月14日下午，北京大学在英杰交流中心阳光厅召开院长（系主任）行政月度会。会议聚焦“人才战略年”的各项重点任务，交流经验，明确任务，着力为“十四五”时期北大人才工作开好局。校长郝平，常务副校长龚旗煌，副校长王博、张平文、黄如，校长助理孙庆伟、董志勇等出席。各学部、院系、职能部门负责人参加。会议由龚旗煌主持。 会议现场 学校始终高度重视人事人才工作，... </a></p>
            </div>                                   -->
        </el-carousel-item>     
    </el-carousel>
</template>

<script>
import { formatTime } from '@/utils/format'

    export default {
        //轮播文本的box
        name:'CarouselTxtBox',
        props: {
            newsInfoList: {
                type: Array,
                default: [],
                required: true
            }
        }, 
        data() {
            return {

            }
        },
        methods: {
            setActiveItem(index) {
                // console.log('设置子组件的ActiveItem index=' + index)
                this.$refs.carouselForNewsInfo.setActiveItem(index)
            },
            formatPubTime(pubTime) {
                return formatTime(pubTime)
            }
        },
    }
</script>

<style lang="scss">
.carousel-txt {

    .el-carousel__container{
        height: 174px;
        @media screen and (max-width: 979px) {
            height: 200px;
        }
    }

    .item-date-view {
        color: #797979;
        font-size: 12px;
    }

    a {
        outline: none;
        text-decoration: none;
        color: #323232;
    }

    .slide-txt {
        
        width: 100%;
        overflow: hidden;
        padding: 20px 0;
        position: relative;
        transition: all 0.3s ease;
        font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;

        * {
            margin: 0;
        }


        h3, .item-detail{
            position: relative;
            z-index: 20;
        }

        .item-detail {
            font-size: 14px;
            color: #787878;
            padding: 16px 0 16px;
            background: url(~@/assets/arrow.png) no-repeat left bottom;

            a {
                display: block;
                line-height: 22px;
                height: 66px;
                overflow: hidden;
                color: #787878;
            }
        }

        h3 {
            font-size: 24px;
            margin-right: 185px;
            font-weight: normal;
            height: 30px;
            line-height: 30px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

            @media screen and (max-width: 1480px) {
                font-size: 18px;
            }

            @media screen and (max-width: 1024px) {
                margin: 0 0 10px 0;
            }

            @media screen and (max-width: 768px) {
                font-size: 16px;
            }

            a {
                color: #505050;
                &:hover {
                    color: #94070a;
                    text-decoration: none;
                }
            }
        }
        .item-date-view {
            position: absolute;
            right: 0;
            top: 22px;
            z-index: 20;

            @media screen and (max-width: 1024px) {
                position: static;
            }

            span, strong {
                color: #8c8c8c;
                display: inline-block;
                font-size: 12px;
                margin-right: 20px;
                font-weight: normal;
            }
        }
    }
}
</style>
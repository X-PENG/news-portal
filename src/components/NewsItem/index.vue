<template>
    <div class="news-item" :class="{'news-item-when-ImgShowRight': !isShowImg || imgShowRight}">
        <section ref="sectionContainer" class="imgHover" :style="{'min-height': contentMinHeight}">
            <div class="item-lf">
                <span class="item-date">
                    {{ yearOfTime + '/' + monthOfTime + '/' }}
                    <strong>{{ dateOfTime }}</strong>
                </span>
            </div>
            <div v-if="isShowImg" class="item-img" :class="{'item-img-when-ImgShowRight': isShowImg && imgShowRight}" :style="{'max-height': contentMinHeight}">
                <router-link class="imgResponsive" :to="{name: '新闻详情', params: {newsId: newsInfo.id}}">
                <!-- <a class="imgResponsive"> -->
                    <img :src="imgForShowOnNewsList" alt="加载失败" title="" style="outline: red dashed 1px;">
                <!-- </a> -->
                </router-link>
            </div>
            <div class="item-txt" :class="{'item-txt-when-ImgShowRight': isShowImg && imgShowRight, 'item-txt-when-notShowImg': !isShowImg}">
                <div>
                    <h3>
                        <router-link :to="{name: '新闻详情', params: {newsId: newsInfo.id}}">
                            <!-- <a>{{ newsInfo.title }}</a> -->
                            {{ newsInfo.title }}
                        </router-link>
                    </h3>
                </div>
                <p>{{ newsInfo.articleFragmentForShow }}</p>
            </div>
        </section>
    </div>
</template>

<script>
//参照北大的比例
const percentage =  180/970

    export default {
        //该组件表示新闻列表中的一个新闻
        name:'NewsItem',
        props: {
            //是否在右边显示新闻图片
            imgShowRight: {
                type: Boolean,
                default: false
            },
            //新闻信息
            newsInfo: {
                type: Object,
                default: null,
                required: true
            }
        },
        created(){
            //for debug
            // console.log('新闻信息')
            // console.log(this.newsInfo)
        },
        mounted() {
            //在挂载完成之后，获取宽度从而设置高度
            this.$nextTick(() => {
                //this.$refs.sectionContainer是DOM元素，而clientWidth是DOM元素的属性
                let initWidth = this.$refs.sectionContainer.clientWidth
                this.contentMinHeight = (initWidth * percentage) + 'px'
                console.log('初始section的宽 * 高 =' + initWidth + '*' + this.contentMinHeight)
            })            
        },
        data() {
            return {
                contentMinHeight: undefined
            }
        },
        computed: {
            screenWidth() {
                let newWidth = this.$store.state.onresize.screenWidth
                console.log('重新计算NewsItem组件的screenWidth属性 = ' + newWidth)
                return newWidth
            },
            imgForShowOnNewsList() {
                let imgUrl = this.newsInfo.imgForShowOnNewsList
                if(!imgUrl || (imgUrl = imgUrl.trim()) === '') {
                    return null
                }
                return imgUrl
            },
            isShowImg() {
                return !!this.imgForShowOnNewsList
            },
            pubTime() {
                let time = this.newsInfo.showPubTime
                return new Date(time)
            },
            yearOfTime() {
                return this.pubTime.getFullYear()
            },
            monthOfTime(){
                let month = this.pubTime.getMonth() + 1 + ''
                if(month.length == 1) {
                    return '0'+month
                }
                return month
            },
            dateOfTime() {
                let date = this.pubTime.getDate() + ''
                if(date.length == 1) {
                    return '0'+date
                }
                return date
            }
        },
        watch: {
            //监听属性值的改变
            screenWidth(val){
                console.log('监听到NewsItem组件的screenWidth属性改变 newVal='+val)
                this.$nextTick(() => {
                    //clientWidth是dom元素的属性，不是css属性
                    let newWidth = this.$refs.sectionContainer.clientWidth
                    this.contentMinHeight = (newWidth * percentage) + 'px'
                    console.log('新的宽*高 = ' + newWidth + '*' + this.contentMinHeight)
                })
            }
        },        
    }
</script>

<style lang="scss">
//内容的最小高度。即窗口最宽时的高度
// 北大的 高:宽 = 180/970 = 0.185567
// $content-min-height: 212.3px;
// $content-min-height: 189px;

.news-item {
    font-family: 'Microsoft YaHei',SimSun,SimHei ,"STHeiti Light",STHeiti,"Lucida Grande", Tahoma,Arial, Helvetica, sans-serif;

    section {
        padding: 38px 0;
        border-bottom: 1px solid #ededed;
        transition: all 0.3s ease-in-out;
        // min-height: $content-min-height;//设置为响应式的
    }

    /**可以不用，重复定义了
    .imgHover, .imgHover * {
        transition: all 0.3s ease-in-out;
    }
    */


/**

    总结，hover时出现红框的动画是使用 before + transition 做的，原理是：
        先使用before选择器，在元素之前加上 红框，但是height设为0，即没显示；
        当，hover的时（即hover:before），再将height变成100%，就会出现红框；
        再搭配上top left的移动 和 transition过渡，就是完整的红框出现动画了。

*/

    .imgHover {
        position: relative;

        &:hover {
            z-index: 10;
            position: relative;
            a, span, strong, p {
                color: #FFFFFF;
            }
        }

        //hover时的红框，此时没有显示出来 
        &:before {
            content: '';
            background-color: #94070a;
            display: block;
            position: absolute;
            z-index: 10;
            //红框初始宽度就是100%
            width: 100%;
            //初始时，红框没有高度，即显示不出来
            height: 0;
            left: 0%;
            //红框从中间出现渐渐出现
            top: 50%;
            background-size: 50% 50%;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in-out;
            border-radius: 0 15px 0 15px;            
        }

        //hover之后，红框就会显示出来，因为height从0 -> 100%
        &:hover:before {
            //hover时，红框宽度的变化，可以变得更长也可以更短。即，hover时，从100%->104%，（给人一种变大的动态感）
            width: 104%;
            //红框往左移动2%，由于width：104%，所以，最终，左边补2%，右边出2%。最终的动画效果是，红框的宽度会往两边各扩大2%。
            left: -2%;
            //hover时，height 从0% -> 100%
            height: 100%;
            //hover时，红框从top 50% -> 0%，高度完全罩住盒子。效果就是，红色从中间往上往下逐渐填满
            top: 0%;
            content: '';
            //阴影
            box-shadow: 3px 35px 77px -17px rgb(139 0 18 / 50%);
        } 

        &:after {
            height: 0;
            width: 0;
        }

        //花纹背景
        &:hover:after {
            content: '';
            width: 104%;
            height: 100%;
            background: url(~@/assets/li_bg2.svg) no-repeat bottom right;
            overflow: hidden;
            position: absolute;
            left: -2%;
            top: 0;
            z-index: 11;
        } 

        /**
        .imgHover:hover:after {
            height: 106%;
            top: -3%;
            width: 106%;
            left: -3%;
        }
        */

        .item-lf {
            // width: 99px;
            width: 10%;//使用百分比布局
            float: left;
            border-top: 2px solid #94070a;
            padding-top: 10px;
            position: relative;
            z-index: 33;

            .item-date {
                display: block;
                font-size: 12px;
                color: #8c8c8c;
                text-align: right;
                padding-bottom: 2px;
                line-height: 36px;
            }

            .item-date strong {
                color: #94070a;
                font-size: 30px;
                padding: 0 0 0 3px;
                display: block;
            }            
        }

        .item-img {
            // width: 320px;
            width: 31%;//使用百分比布局
            float: left;
            // margin-left: 40px;
            margin-left: 4%;//使用百分比布局
            position: relative;
            z-index: 30;
            //当窗口变窄，图片宽度变小，高度也一定变小，而窗口最宽时，图片高度最大，且是内容高度$content-min-height，所以max-height设置成$content-min-height即可
            // max-height: $content-min-height;//设置为响应式的
            overflow: hidden;

            //当在右边显示图片时的样式
            &.item-img-when-ImgShowRight {
                position: absolute;
                right: 0;
                // top: 38px;
            }

            .imgResponsive {
                padding-bottom: 56.25%
            }

            .imgResponsive {
                width: 100%;
                height: 0;
                padding-bottom: 66.67%;
                overflow: hidden;
                display: block;

                img {
                    width: 100%;
                    transition: all 0.3s ease;
                }
            }      

            a {
                outline: none;
                text-decoration: none;
                color: #323232;
            }
        }

        .item-txt {
            // margin-left: 495px;
            margin-left: 48%;//使用百分比布局。显示文本的盒子占52% = 100% - 48%
            position: relative;
            z-index: 30;

            //当在右边显示图片时的样式
            &.item-txt-when-ImgShowRight {
                margin-left: 14%;
                margin-right: 34%;
            }

            //当不显示图片时的样式
            &.item-txt-when-notShowImg {
                margin-left: 14%;
                margin-right: 0%;
            }

            h3 {
                font-size: 18px;
                line-height: 24px;
                max-height: 48px;
                overflow: hidden;
                font-weight: normal;
                margin-bottom: 20px;

                a {
                    outline: none;
                    text-decoration: none;
                    color: #323232;
                }
            }     

            p {
                line-height: 21px;
                height: 84px;
                overflow: hidden;
                color: #828282;
            }
        }
    }

    .imgHover:hover {
        h3 a, .item-lf .item-date, .item-lf .item-date strong, p {
           color: #FFFFFF; 
        }
        .item-lf {
            border-color: #FFFFFF;
        }
    }

    //设置右边显示图片时红框的背景图
    &.news-item-when-ImgShowRight .imgHover:after {
        background: url(~@/assets/li_bg3.svg) no-repeat 25px center;
    }
}
</style>
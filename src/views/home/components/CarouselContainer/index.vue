<template>
    <div>
        <CarouselImgBox ref="carouselImgBox" :newsInfoList="newsList" :autoplay="autoplay" @change-img="handleChangeImg"/>

        <CarouselTxtBox ref="carouselTxtBox" :newsInfoList="newsList"/>

        <div class="carousel-pagination">
            <ol class="flex-control-nav flex-control-paging">
                <li v-for="(item, index) in newsList.length" :key="'li'+index" @click="handleClick(index)">
                   <a :class="{'flex-active': (activeIndex == index)}">{{ index + 1 }}</a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import CarouselImgBox from './CarouselImgBox'
import CarouselTxtBox from './CarouselTxtBox'
import { getCarouselNews } from '@/api/homePage'

    export default {
        name:'CarouselContainer',
        components: { CarouselImgBox, CarouselTxtBox },
        data() {
            return {
                activeIndex: null,
                newsList: [],
                autoplay: true,
                timer: null
            }
        },
        created() {
            getCarouselNews(5).then(resp => {
                this.newsList = resp
            }).catch(error => {
                this.$message({
                    message: '轮播加载失败',
                    type: 'error'
                })
            })
        },
        mounted() {
            this.$nextTick(() => {
                //默认选择第一个
                this.handleClick(0)
            })
        },
        methods: {
            handleChangeImg(newIndex) {
                // console.log('监听到子组件切换图片 newIndex=' + newIndex)
                this.$refs.carouselTxtBox.setActiveItem(newIndex)
                this.activeIndex = newIndex
            },
            handleClick(index) {
                console.log('click index=' + index)
                this.activeIndex = index
                //手动切换轮播图
                this.$refs.carouselImgBox.setActiveItem(index)
                this.$refs.carouselTxtBox.setActiveItem(index)

                //设置成不自动播放
                this.autoplay = false
                //先删除旧timer，再新建一个timer
                window.clearTimeout(this.timer)
                let that = this
                this.timer = setTimeout(function() {
                    //5秒后再自动播放
                    that.autoplay = true
                }, 3000)
            }
        }
    }
</script>

<style lang="scss">
.carousel-pagination {

    * {
        margin: 0;
    }

    ol {
        padding-inline-start: 0px;
    }

    ol, li {
        list-style: none outside none;
    }

    .flex-control-nav {
        width: 100%;
        text-align: center;
        background-color: #f2f1f1;
        height: 26px;
        line-height: 26px;
        font-size: 12px;

        li { 
            display: inline-block;
            zoom: 1; 
            *display: inline;
            *vertical-align: middle;
        }
    }
    .flex-control-paging li {
        a {
            width: 29px;
            height: 12px; 
            display: block;
            cursor: pointer;
            border-right: 1px solid #515151;
            line-height: 12px;
            text-align: center;
            color:#515151;
            *height: 26px;
            *line-height: 26px;
            border-right: 1px solid #bbb;

            &:hover {
                color:#94070a;
            }

            &.flex-active { cursor: default;color:#94070a; }

        }
         
        &:first-child{
            *border-left: 1px solid #bbb;
        }
    }
}
</style>
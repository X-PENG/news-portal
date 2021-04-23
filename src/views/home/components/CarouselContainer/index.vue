<template>
    <div>
        <CarouselImgBox ref="carouselImgBox" @change-img="handleChangeImg"/>

        <CarouselTxtBox ref="carouselTxtBox"/>

        <div class="carousel-pagination">
            <ol class="flex-control-nav flex-control-paging">
                <li v-for="(item, index) in 8" :key="'li'+index" @click="handleClick(index)">
                   <a :class="{'flex-active': (activeIndex == index)}">{{ index + 1 }}</a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import CarouselImgBox from './CarouselImgBox'
import CarouselTxtBox from './CarouselTxtBox'

    export default {
        name:'CarouselContainer',
        components: { CarouselImgBox, CarouselTxtBox },
        data() {
            return {
                activeIndex: null,
            }
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
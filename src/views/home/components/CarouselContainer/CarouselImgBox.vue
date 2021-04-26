<template>
<!-- 轮播图片 -->
    <el-carousel
        ref="carousel"
        class="carousel-box"
        :height="carouselHeight"
        indicator-position="none"
        :autoplay="autoplay"
        :interval="4000"
        @change="handleChange"
        >
        <el-carousel-item v-for="(item, index) in newsInfoList" :key="'轮播图片'+index">
            <!-- <a :href="item" target="_blank">
                <el-image
                    :src="item"
                >
                    <div slot="error" class="error-image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </a> -->
            <router-link :to="{name: '新闻详情', params: {newsId: item.id}}">
                <el-image
                    :src="getCarouselImgUrl(item)"
                >
                    <div slot="error" class="error-image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </router-link>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
/**
 * 尽量小比例，不要太高，否则轮播组件太高，而图片没有那么高；
 * 比例小不要紧，若图片太高的话，溢出部分会隐藏，图片还是原比例显示
 */
const percentage = 0.561//轮播图 高:宽 参照北大的

    export default {
        //轮播图片的盒子
        name:'CarouselImgBox',
        props: {
            newsInfoList: {
                type: Array,
                default: [],
                required: true
            },
            autoplay: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                //动态控制轮播的高度，达到自适应
                carouselHeight: null
            }
        },
        computed: {
            screenWidth() {
                let newWidth = this.$store.state.onresize.screenWidth
                console.log('重新计算CarouselImgBox组件的screenWidth属性 = ' + newWidth)
                return newWidth
            }
        },
        mounted() {
            //在挂载完成之后，获取宽度从而设置轮播组件的高度
            this.$nextTick(() => {
                // 获取轮播组件
                let carousel = this.$refs.carousel
                console.log('carousel组件')
                console.log(carousel)
                console.log('初始carousel宽度')
                // $el是Vue 实例使用的根 DOM 元素
                let carouselWidth = carousel.$el.clientWidth
                console.log(carouselWidth)
                //设置轮播组件的高度
                this.carouselHeight =  (carouselWidth * percentage) + 'px'
            })
        },
        watch: {
            //监听属性值的改变
            screenWidth(val){
                console.log('监听到CarouselImgBox组件的screenWidth属性改变 newVal='+val)
                this.$nextTick(() => {
                    let newWidth = this.$refs.carousel.$el.clientWidth
                    this.carouselHeight =  (newWidth * percentage) + 'px'
                    console.log('轮播图新的宽*高 = ' + newWidth + '*' + this.carouselHeight)
                })
            }
        },
        methods: {
            handleChange(newIndex, oldIndex) {
                // console.log('切换图片')
                // console.log('newIndex = ' + newIndex)
                // console.log('oldIndex = ' + oldIndex)
                this.$emit('change-img', newIndex)
            },
            setActiveItem(index) {
                // console.log('设置显示的图片 index=' + index)
                this.$refs.carousel.setActiveItem(index)
            },
            getCarouselImgUrl(newsInfo) {
                //从轮播新闻的信息中得到轮播图地址
                return JSON.parse(newsInfo.extra)['CAROUSEL_IMAGE_URL']            
            }
        }
    }

</script>

<style lang="scss">
.carousel-box {
 .el-carousel__item {
     .el-image {
         width: 100%;
         height: 100%;
         //图片溢出的高度隐藏掉
         overflow: hidden;

        img {
            //宽度100%，填满整个盒子
            width: 100%;
            //高度一定不能固定，否则比例就会变
            height: auto;
        }

        .error-image-slot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background: #f5f7fa;
            color: #909399;
            font-size: 20em;
        }
     }
  }
}
</style>
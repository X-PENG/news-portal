<template>
    <el-carousel ref="carousel" class="carousel-box" :height="carouselHeight">
        <el-carousel-item v-for="(item, index) in imgResources" :key="'轮播项目'+index">
              <a :href="item" target="_blank">
                <el-image
                    :src="item"
                >
                    <div slot="error" class="error-image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
              </a>
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
        name:'MyCarouselBox',
        props: {
            width: {
                default: ''
            }
        },
        data() {
            return {
                screenWidth: undefined,
                timer: null,
                //动态控制轮播的高度，达到自适应
                carouselHeight: null,
                imgResources: imgs
            }
        },
        mounted() {
            //在挂载完成之后，获取宽度从而设置轮播组件的高度
            this.$nextTick(() => {
                // 获取轮播组件
                let carousel = this.$refs.carousel
                console.log(carousel)
                console.log('carousel 宽度')
                // $el是Vue 实例使用的根 DOM 元素
                let carouselWidth = carousel.$el.clientWidth
                console.log(carouselWidth)
                //设置轮播组件的高度
                this.carouselHeight =  (carouselWidth * percentage) + 'px'
            })            
            const that = this
            //处理resize事件
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    //变更screenWidth属性值
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        watch: {
            //监听属性值的改变
            screenWidth(val){
                // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
                if(!this.timer){
                    // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function(){
                        that.$nextTick(() => {
                            // 打印screenWidth变化的值
                            console.log(that.screenWidth)
                            let newWidth = that.$refs.carousel.$el.clientWidth
                            console.log('轮播图新的宽度')
                            console.log(newWidth) 
                            that.carouselHeight =  (newWidth * percentage) + 'px'                
                        })
                        that.timer = false
                    }, 500)
                }
            }
        }
    }


const imgs = [
    'http://news.pku.edu.cn/images/2021-03/b816f03ccb78427e8a608a61af83a454.jpg',
    'http://news.pku.edu.cn/images/2021-03/b2eb70d25bed46d18b22fe4ee49b9078.jpg',
    'http://news.pku.edu.cn/images/2021-03/18b06166d596494ca4142f02c8eebab1.jpeg',
    'http://news.jxufe.edu.cn/uploadfile/82/1618880686944.jpg',
    'http://www.news.zju.edu.cn/_upload/article/images/62/97/8613225d4b7893d6d7aa8b8cf3f3/706276a0-4331-494a-846f-6fe131fa11f1.jpg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
]    
</script>

<style lang="scss">
.carousel-box {
 .el-carousel__item {
     .el-image {
         width: 100%;
         height: 100%;

        img {
            width: 100%;
            //高度一定不能设置，否则比例就会变
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
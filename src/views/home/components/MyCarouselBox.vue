<template>
    <el-carousel ref="carousel" class="carousel-box" :height="carouselHeight">
        <el-carousel-item v-for="item in 4" :key="item">
             <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script>

const percentage = 0.6//轮播图 高:宽

    export default {
        name:'MyCarouselBox',
        props: {
            width: {
                default: ''
            }
        },
        data() {
            return {
                screenWidth: document.body.clientWidth,
                timer: null,
                carouselHeight: '300px'
            }
        },
        mounted() {
            //在挂载完成之后，设置轮播组件的高度
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
</script>

<style lang="scss">
.carousel-box {
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>
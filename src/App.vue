<template>
  <div id="app" :style="styleObject">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      styleObject: {
        backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')',
        backgroundRepeat: 'repeat'
      },
      screenWidth: document.body.clientWidth,
      //是否正在处理onresize事件
      isProcessing: false
    }
  },
  mounted() {
    console.log('设置window.onresize事件监听器')
    window.onresize = () => {
      console.log('发生resize')
      window.screenWidth = document.body.clientWidth
      this.screenWidth = window.screenWidth
    }
  },
  watch: {
    //监听属性值的改变
    screenWidth(val){
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if(!this.isProcessing) {
        this.isProcessing = true
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val
        let that = this
        setTimeout(function(){
            console.log('真正处理resize')
            that.$nextTick(() => {
              that.$store.commit('onresize/SET_SCREEN_WIDTH', that.screenWidth)
              that.isProcessing = false
            })
        }, 500)
      }
    }
  }
}
</script>

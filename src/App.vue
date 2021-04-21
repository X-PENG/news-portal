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
      }
    }
  }
}
</script>

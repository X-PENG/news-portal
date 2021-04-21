<template>
  <div class="app-main">
    <div class="app-main-content">
      <router-view :key="key"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style>
.app-main {
  padding-top: 35px;
  padding-bottom: 30px;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
}
.app-main .app-main-content {
  width: 75%;
  height: 800px;
  border: 2px solid red;
}
</style>

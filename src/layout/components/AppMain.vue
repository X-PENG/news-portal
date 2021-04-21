<template>
  <div class="app-main">
    <div class="app-main-inner">
      <!-- 搜索框 -->
      <SearchBox/>
      <div class="app-main-content">
        <router-view :key="key"/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox'

export default {
  name: 'AppMain',
  components: { SearchBox },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/variables.scss';

.app-main {
  padding-top: 20px;
  padding-bottom: 30px;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  min-height: 800px;
  overflow: hidden;

  .app-main-inner {
    box-sizing: border-box;
    width: $content-percentage;   

    .app-main-content {
      box-sizing: border-box;
      margin-top: 20px;
      padding: 20px 20px;
      background-color: #FFFFFF;
    }
  }

}
</style>

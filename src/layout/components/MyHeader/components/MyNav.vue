<template>
  <div class="app-header-nav">
      <MyMenuBar :menuBarId="'menubar1_'" :defaultActive="activeIndex" :menuItems="menu1" @select-menu="handleSelectMenu"/>
      <MyMenuBar :menuBarId="'menubar2_'" :defaultActive="activeIndex" :menuItems="menu2" @select-menu="handleSelectMenu"/>
  </div>
</template>

<script>
import MyMenuBar from './MyMenuBar'
import { cols } from '@/api/homePage'

export default {
  name: "MyNav",
  components: { MyMenuBar },
  data() {
    return {
        //由该组件的activeIndex属性统一控制两个子组件<MyMenuBar/>的激活菜单
        activeIndex: "-1",
        allMeuns: [],
    };
  },
  computed: {
      menu1() {
        let len = this.allMeuns.length
        let end = parseInt((len + 1)/2)
        return this.allMeuns.slice(0, end)
      },
      menu2() {
        let len = this.allMeuns.length
        let start = parseInt((len + 1)/2)
        return this.allMeuns.slice(start, len)    
      }
  },
  created() {
      cols().then(resp => {
          this.allMeuns = resp
      }).catch(error => {
          this.$message({
            message: '查询新闻栏目失败',
            type: 'error'
          })
      })
  },
  methods: {
      handleSelectMenu(menuItemIndex) {
          this.activeIndex = menuItemIndex
      }
  }
};

const menu1 = [
    "要闻聚焦",
    "信息公告",
    "教学资讯",
    "科研动态",
    "学生天地",
    "缤纷校园"
]

const menu2 = [
    "专题报道",
    "媒体校园",
    "交流合作",
    "人物风采",
    "校友动态",
    "校史钩沉"
]

</script>

<style lang="scss">
.app-header-nav {
  padding: 0 10px;
}
</style>
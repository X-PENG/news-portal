import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

/**
 * 配置vue-router 全局守卫
 */

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  //for debug
  // console.log('beforeEach')
  // console.log(from)
  // console.log(to)
  // start progress bar
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  // finish progress bar
  NProgress.done()

  // console.log(to.matched)
  //没有匹配到任何路由，就回到首页
  if(to.matched.length == 0) {
      router.replace({name: '首页'})
  }
})

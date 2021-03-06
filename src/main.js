import Vue from "vue";

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.min.css'

import '@/styles/index.scss' // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/router-guard'//路由导航守卫

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

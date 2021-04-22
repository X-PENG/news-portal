import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//布局组件
import Layout from '@/layout'
import Home from '@/views/home'

const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;

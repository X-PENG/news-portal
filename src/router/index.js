import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//布局组件
import Layout from '@/layout'


const routes = [
  {
    path: "/",
    component: Layout
  }
];

const router = new VueRouter({
  routes,
});

export default router;

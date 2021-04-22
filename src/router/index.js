import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//布局组件
import Layout from '@/layout'
import Home from '@/views/home'
import NewsList from '@/views/NewsList'
const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      }, {
        path: '/newsList',
        component: NewsList
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;

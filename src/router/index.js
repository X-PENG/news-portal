import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//布局组件
import Layout from '@/layout'
import Home from '@/views/home'
import NewsList from '@/views/NewsList'
import NewsDetail from '@/components/NewsDetail'
import SearchResult from '@/views/SearchResult'

const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: '/',
        name: '首页',
        component: Home,
      }, {
        path: '/search',
        name: '搜索',
        component: SearchResult
      }, {
        path: '/newsList/:colId',
        name: '栏目新闻列表',
        component: NewsList,
        props: true
      }, {
        path: '/newsDetail/:newsId',
        name: '新闻详情',
        component: NewsDetail,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;

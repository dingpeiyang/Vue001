import Vue from 'vue'
import Router from 'vue-router'

// 导入底部tabbar路由
import HomeContainer from '../components/tabbar/HomeContainer';
import MemberContainen from '../components/tabbar/MemberContainer';
import SearchContainer from '../components/tabbar/SearchContainer';
import ShopcarContainer from '../components/tabbar/ShopcarContainer';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',redirect:'/home'
    },
    {
      path: '/home',
      component:HomeContainer
    },
    {
      path: '/member',
      component:MemberContainen
    },
    {
      path: '/search',
      component:SearchContainer
    },
    {
      path: '/shopcar',
      component:ShopcarContainer
    }

  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入自己的路由模块
import router from './router'
// 导入mui 的样式
import './lib/mui/css/mui.min.css'
//导入mui 扩展样式(扩展字体库还要拷贝 .ttf文件)
import './lib/mui/css/icons-extra.css'
// 按需导入mint-ui
import { Header,Swipe,SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

// 使用vue-resource获取数据

import VueResource from 'vue-resource';
Vue.use(VueResource);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})

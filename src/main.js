// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from 'axios';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/css/index.css';

Vue.use(VueRouter);
Vue.use(axios);
//定义路由
const routes = [
	{ path: '/goods', component: goods },
	{ path: '/ratings', component: ratings},
	{ path: '/seller', component: seller}
];
//创建路由示例
const router = new VueRouter({
	routes 
});

//创建和挂在根示例,通过router参数注入路由
const app = new Vue({
	router,
	axios,
	template: '<App/>',
	components: { App }
}).$mount('#app');
//自动跳转
router.push('goods');

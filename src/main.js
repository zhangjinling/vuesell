// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
Vue.use(VueRouter)

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
	template: '<App/>',
	components: { App }
}).$mount('#app');
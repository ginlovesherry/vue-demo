import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import routerConfig from './router.config.js'

import './assets/css/animate.min.css'

import Loading from './components/loading'

import store from './store/'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Loading);


const router = new VueRouter(routerConfig);

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
})

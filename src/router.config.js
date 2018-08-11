import Home from './components/Home.vue'
import News from './components/News.vue'
import UserDetail from './components/UserDetail.vue'

export default {
	routes: [
		{
			path: '/home',
			component: Home,
			children: [
				{path: ':username/age/:age', component: UserDetail}
			]
		},
		{path: '/news', component: News},
		{path: '*', redirect: '/home'}
	]
}
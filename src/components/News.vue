<template>
	<div id="news">
		<h3>我是新闻页</h3>
		<ul>
			<li v-for="(val, index) in news">
				{{val}}
			</li>
		</ul>
		<input type="button" name="" value="请求数据" @click="get">
	</div>
</template>
<script>
	export default {
		name: 'news',
		data () {
			return {
				news: ['111111', '22222222', '333333333', '444444444']
			}
		},
		methods: {
			get () {
				this.axios.get('https://api.github.com/users/ginlovesherry')
				.then((res) => {
				  console.log(res.data)
				}).catch((res) => {
					console.log(res);
				});
			}
		}
	}
</script>
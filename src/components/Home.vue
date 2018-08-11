<template>
	<div id="home">
		<h3>我是主页</h3>
		<ul>
			<li>
				<router-link to="/home/strive/age/10">Strive</router-link>
			</li>
			<li>
				<router-link to="/home/blue/age/80">Blue</router-link>
			</li>
			<li>
				<router-link to="/home/eric/age/70">Eric</router-link>
			</li>
		</ul>
		<div>
			<transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
				<router-view class="animated"></router-view>
			</transition>
		</div>
	</div>
</template>
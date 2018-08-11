<template>
    <div id="app">
        {{msg}}
        <ul>
            <li>
                <router-link to="/home">主页</router-link>
                <router-link to="/news">新闻</router-link>
            </li>
        </ul>
        <div>
            <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
                <router-view class="animated"></router-view>
            </transition>
        </div>
        <Loading></Loading>
        <input type="button" name="" value="增加" @click="increment">
        <input type="button" name="" value="减少" @click="decrement">
        <input type="button" name="" value="偶数点击增加" @click="clickOdd">
        <input type="button" name="" value="点击异步" @click="clickAsync">
        <div>
            现在的数字为： {{count}} ，它现在是 {{getOdd}}
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'app',
        data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
        },
        computed: mapGetters([
            'count',
            'getOdd'
        ]),
        methods: mapActions([
            'increment',
            'decrement',
            'clickOdd',
            'clickAsync'
        ])
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
html, body {
    overflow: hidden;
}
.router-link-active{
    font-size: 20px;
    color: #f60;
}
</style>

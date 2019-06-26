<!-- template：模版标签，相当于 react 中的 render 标签返回的jsx标签 -->
<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- 路由试图容器，相当于react中的 <Route path='/' component={}/> -->
		<!-- <router-view/> -->
		<!-- 3.调用当前组件 -->
		<!-- <KeyboardEvent/> -->
		<!-- click.native 表示事件绑定到当前组件的根元素上 -->
		<!-- <MyVue @click.native="yo"/> -->
		<!-- $event 是用来接受子组件发送来的数据 -->
		<!-- <MyEmit @myEmit="jojo($event)"/>
		<div>父组件: {{words}}</div>-->
		<!-- <div class="myStyle">App my style</div>
		<a href>123</a>-->
		<!-- <MyStyle/> -->
		<!-- <MyForms/> -->
		<LifeCycle/>
		<!-- <MyProps a="1" b="2" c="3"/> -->
		<!-- <MyProps @abc="prop($event)"/> -->
	</div>
</template>

<!-- 当前的模版的js代码 -->
<script>
import MyVue from './components/MyVue' // 1.导入组件
import KeyboardEvent from './components/KeyboardEvent'
import MyEmit from './components/MyEmit'
import MyStyle from './components/MyStyle'
import MyForms from './components/MyForms'
import MyProps from './components/MyProps'
import LifeCycle from './components/LifeCycle'

export default {
	// 2.注册组件到当前 App.vue 中
	name: 'App',
	components: {
		MyVue,
		KeyboardEvent,
		MyEmit,
		MyStyle,
		MyForms,
		LifeCycle,
		MyProps
	},
	data() {
		return { words: '' }
	},
	methods: {
		yo() {
			console.log('Yo.')
		},
		jojo(a) {
			console.log('olaolaolaola', a)
			this.words = a
		},
		prop(a) {
			console.log(a)
		}
	}
}
</script>

<!-- 当前的模版的css代码 -->
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	/* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
	/* text-align: center; */
	color: #2c3e50;
	/* margin-top: 60px; */
}
</style>

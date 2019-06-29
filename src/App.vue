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
		<!-- <MyProps a="1" b="2" c="3"/> -->
		<!-- <MyProps @abc="prop($event)"/> -->
		<!-- <LifeCycle/> -->
		<!-- <InstanceProperties yo="yo." wangergou="ergou" @click="yo"/> -->
		<!-- <MyRef/> -->
		<!-- <ProvideInject jojo="olaolaola"/> -->
		<!-- 
			provide 和 inject 绑定并不是可响应的。这是刻意为之的。
			然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
		-->
		<!-- <input type="text" v-model="inp">
		inp:{{inp}}-->
		<!-- <MyMixins/> -->
		<!-- <MyExtends/> -->
		<!-- <MyPlugin/> -->
		<!-- <MyData/> -->
		<!-- <MyFilter/> -->
		<!-- <MyComputed/> -->
		<!-- <MyWatch/> -->
		<!-- <MyDirective/> -->
		<!-- <MyColor /> -->
		<MySlot>
			<template v-slot:default>
				<h4>slot to App.vue</h4>
				<h5>slot to App.vue</h5>
			</template>
			<!-- 自定义名称插槽 v-slot:插槽名称="插槽数据"-->
			<template v-slot:box1>
				<h6 style="background:pink">slot to App.vue</h6>
			</template>
			<!-- v-slot: 可以缩写为 # -->
			<template #box2="data">
				<div>接收数据 :</div>
				data.jojo: {{data.jojo}}
				<br />
				data.dio: {{data.dio}}
			</template>
			<!-- 使用解构赋值，重名接收的数据 -->
			<template v-slot:box3="{jojo, dio}">
				<div>接收数据 :</div>
				jojo: {{jojo}}
				<br />
				dio: {{dio}}
				<br />
				tmp: {{tmp}}
			</template>
		</MySlot>
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
import MyRef from './components/MyRef'
import MyMixins from './components/MyMixins'
import MyExtends from './components/MyExtends'
import MyData from './components/MyData'
import MyPlugin from './components/MyPlugin.vue'
import MyFilter from './components/MyFilter'
import MyComputed from './components/MyComputed'
import MyWatch from './components/MyWatch'
import MyDirective from './components/MyDirective'
import MyColor from './components/MyColor'
import MySlot from './components/MySlot'
import LifeCycle from './components/LifeCycle'
import InstanceProperties from './components/InstanceProperties'
import ProvideInject from './components/ProvideInject'

export default {
	// 2.注册组件到当前 App.vue 中
	name: 'App',
	components: {
		MyVue,
		KeyboardEvent,
		MyEmit,
		MyStyle,
		MyForms,
		MyRef,
		MyMixins,
		MyExtends,
		MyPlugin,
		MyData,
		MyFilter,
		MyComputed,
		MyWatch,
		MyDirective,
		LifeCycle,
		MyProps,
		MyColor,
		MySlot,
		InstanceProperties,
		ProvideInject
	},
	data() {
		return { words: '', dio: 'mudamuda', jojo: 'olaola' }
	},
	provide() {
		return { inp: this.jojo }
	},
	methods: {
		yo() {
			console.log('Yo.')
		},
		// jojo(a) {
		// 	console.log('olaolaolaola', a)
		// 	this.words = a
		// },
		prop(a) {
			console.log(a)
		}
	},
	mounted() {
		// this.$children 表示当前实例的直接子组件
		// console.log('children', this.$children)
		console.log('-------App.vue Mounted-------')
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

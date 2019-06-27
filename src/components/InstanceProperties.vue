<template>
	<div class="instanceProperties">
		<p>实例属性</p>
		<div>
			<!-- 获取父实例的数据，如果当前实例有的话 -->
			<h3>.$parent</h3>
			parent.dio: {{$parent.dio}}
			<br>
			parent.jojo: {{$parent.jojo}}
			<br>
		</div>
		<div>
			<!-- 当前组件树的根 Vue 实例的数据。如果当前实例没有父实例，此实例将会是其自己。 -->
			<!-- 当前组件的根组件为 #App ,即：main.js文件中声明的实例  -->
			<h3>.$root</h3>
			root.dio: {{$root.dio}}
			<br>
			root.jojo: {{$root.jojo}}
			<br>
		</div>
		<div>
			<!-- 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 -->
			<h3>.$attrs</h3>
			attrs.yo: {{$attrs.yo}}
		</div>
		<div>
			<!-- 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 -->
			<h3>.$porps</h3>
			porps.wangergou: {{wangergou}}
		</div>
		<!-- 可在子组件中直接调用 -->
		{{$listeners.click()}}
		<!-- Yo. -->
	</div>
</template>

<script>
export default {
	name: 'InstanceProperties',
	props: ['wangergou'],
	data() {
		return {
			a: 'a',
			b: 'b'
		}
	},
	my_option1: 'my_option1',
	my_option2: 'my_option2',
	mounted() {
		// 获取props属性所有的数据
		console.log('this.$props', this.$props)
		// 获data方法中所有的数据
		console.log('this.$data', this.$data)
		// 获取当前组件的根元素
		console.log('this.$el', this.$el)
		// 获取当前自定义的属性
		console.log('this.$options.my_option1', this.$options.my_option1)
		console.log('this.$options.my_option2', this.$options.my_option2)
		// 获取包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
		console.log('this.$listeners', this.$listeners)
	}
}
</script>

<style scoped>
.instanceProperties > div {
	border: 2px solid red;
	margin: 5px;
	padding: 5px;
}
</style>




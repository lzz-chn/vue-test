<template>
	<div class="lifeCycle">
		<p>life cycle</p>
		<input type="text" v-model="message">
		<button @click="$destroy()">destroy</button>
	</div>
</template>

<script>
export default {
	name: 'LifeCycle',
	data() {
		return { message: 'Yo.', jojo: 'olaolaola', dio: 'mudamudamuda' }
	},
	beforeCreate() {
		//beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳
		console.group('beforeCreate 创建前状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		) //undefined
		console.log('%c%s', 'color:red', 'message: ' + this.message)
	},
	created() {
		//这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数
		console.group('created 创建完毕状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		) //已被初始化
		console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
	},
	beforeMount() {
		//虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated
		console.group('beforeMount 挂载前状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
		console.log(this.$el)
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		) //已被初始化
		console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
	},
	mounted() {
		//组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了
		console.group('mounted 挂载结束状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
		console.log(this.$el)
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		) //已被初始化
		console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
	},
	beforeUpdate() {
		console.group('beforeUpdate 更新前状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el)
		console.log(this.$el)
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		)
		console.log('%c%s', 'color:red', 'message: ' + this.message)
	},
	updated() {
		console.group('updated 更新完成状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el)
		console.log(this.$el)
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		)
		console.log('%c%s', 'color:red', 'message: ' + this.message)
	},
	beforeDestroy() {
		//实例销毁之前调用。在这一步，实例仍然完全可用
		console.group('beforeDestroy 销毁前状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el)
		console.log(this.$el)
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		)
		console.log('%c%s', 'color:red', 'message: ' + this.message)
	},
	destroyed() {
		//组件的数据绑定、监听...都去掉了,只剩下dom空壳
		console.group('destroyed 销毁完成状态===============')
		console.log('%c%s', 'color:red', 'el     : ' + this.$el)
		console.log(this.$el)
		console.log(
			'%c%s',
			'color:red',
			'data   : ' + JSON.stringify(this.$data)
		)
		console.log('%c%s', 'color:red', 'message: ' + this.message)
	}
}
</script>



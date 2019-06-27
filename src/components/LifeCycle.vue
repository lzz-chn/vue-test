<template>
	<div class="lifeCycle">
		<p>life cycle</p>
		<input type="text" v-model="message">
		<button @click="$destroy()">destroy</button>
		<br>
		<!-- 强制更新 -->
		<button @click="$forceUpdate()">forceUpdate</button>
		<br>
		<!-- 更新数据并完成dom绑定 -->
		<button @click="my_nextTick">my_nextTick</button>
		<button @click="my_update">my_update</button>
		<ul class="list">
			<li v-for="v in list" :key="v">{{v}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'LifeCycle',
	data() {
		return {
			message: 'Yo.',
			jojo: 'olaolaola',
			dio: 'mudamudamuda',
			list: [1, 2, 3]
		}
	},
	methods: {
		my_update() {
			console.log('my_update')
			this.list = [4, 5, 6]
			// 为所有的选中元素增加样式，结果只有部分元素增加了样式
			// 原因时在dom更新没有完成时就执行了以下代码
			let l = document.getElementsByClassName('list')[0].children
			for (let i = 0; i < l.length; i++) {
				l[i].style.background = 'red'
			}
		},
		my_nextTick() {
			console.log('my_nextTick')
			this.list = [7, 8, 9]
			// .$nextTick() 方法会等待dom更新完成后在执行
			this.$nextTick(() => {
				let l = document.getElementsByClassName('list')[0].children
				for (let i = 0; i < l.length; i++) {
					l[i].style.background = 'red'
				}
			})
		}
	},
	beforeCreate() {
		// beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳
		// 此周期无法执行 this.$destroy() 方法
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
		// 这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数
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
		// 虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated
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
		// 组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了
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
		// 在数据更新时触发此生命周期，可在此方法中对更新的数据进行过滤
		// this.message = 'mudamudamuda'
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
		// 在数据更新完成后触发此生命周期，尽量避免在此周期中更改数据，
		// 若存在同一属性不停更新数据，就会进入更新死循环
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
		// 实例销毁之前调用。在这一步，实例仍然完全可用
		// this.message = 'olaolaola' // 可以在此周期中更改数据，但数据不会渲染到页面中
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
		// 组件的数据绑定、监听...都去掉了,只剩下dom空壳
		// Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
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



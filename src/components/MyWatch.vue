<template>
	<div class="myWatch">
		<h3>my watch</h3>
		<input type="text" v-model="num">
		<span v-if="num">num: {{num}}</span>
		<br>
		<input type="text" v-model="erGou.age">
		<span v-if="erGou.age">erGou.age: {{erGou.age}}</span>
		<br>
		<button @click="startWatch">start watch</button>
		<button @click="endWatch">end watch</button>
	</div>
</template>

<script>
let watchStatus // 存储监听实例

export default {
	name: 'MyWatch',
	data() {
		return {
			num: 123,
			erGou: {
				age: 42
			},
			dio: 'mudamudamuda'
		}
	},
	methods: {
		startWatch() {
			// 声明监听实例
			watchStatus = this.$watch('num', function(val, oldVal) {
				console.log('--------------------')
				console.log('val:', val)
				console.log('oldVal:', oldVal)
				console.log('--------------------')
			})
		},
		endWatch() {
			// 调用自身 停止监听
			watchStatus()
		}
	},
	watch: {
		erGou: {
			// handler 为监听执行函数，固定写法
			handler: function(val, oldVal) {
				console.log('--------------------')
				console.log('val.age:', val.age)
				console.log('oldVal.age:', oldVal.age)
				console.log('--------------------')
			},
			// deep 代表是否监听深层次数据
			deep: true
		},
		dio: {
			handler: function(val, oldVal) {
				console.log('--------------------')
				console.log('val:', val)
				console.log('oldVal:', oldVal)
				console.log('--------------------')
			},
			// immediate 表示是否在监听开始后立即执行
			immediate: true
		}
	}
}
</script>


<template>
	<div class="myComputed">
		<h3>my computed</h3>
		<div>arr: {{arr}}</div>
		<div>arrAsc: {{arrAsc}}</div>
		<div>arrDesc: {{arrDesc}}</div>
		<div>arrProcess: {{arrProcess}}</div>
		<button @click="arrProcess=456">arrXXX</button>
	</div>
</template>

<script>
export default {
	name: 'MyComputed',
	data() {
		return {
			arr: [11, 22, 33, 6566, 88, 5, 77],
			arrXXX: 123
		}
	},
	computed: {
		arrAsc() {
			return [...this.arr].sort((a, b) => a - b)
		},
		arrDesc() {
			return [...this.arr].sort((a, b) => b - a)
		},
		arrProcess: {
			// 当调用 arrProcess 时，会自动调用 get()方法
			get() {
				return this.arrXXX
			},
			// 当调用 arrProcess=xxx 时，会自动调用 set()方法，使用 val接收xxx数据
			set(val) {
				this.arrXXX = val
			}
		}
	}
}
</script>

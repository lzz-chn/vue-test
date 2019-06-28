<template>
	<div class="myFilter">
		<h3>my filter</h3>
		<div>日期：{{new Date() | dateFilter}}</div>
		<div>时间：{{new Date() | timeFilter}}</div>
		<div>随机数：{{Math.random() | randomFilter}}</div>
		<input type="text" v-bind:numbers="Math.random() | randomFilter">
	</div>
</template>

<script>
export default {
	name: 'MyFilter',
	filters: {
		dateFilter(val) {
			return val.toLocaleDateString()
		},
		timeFilter(val) {
			return val.toLocaleTimeString()
		},
		randomFilter(num) {
			return num.toFixed(4)
		}
	}
}
</script>

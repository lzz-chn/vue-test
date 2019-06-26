<template>
	<div class="myEmit">
		<span>子组件：</span>
		<input type="text" v-on:keyup="$emit('myEmit',dio)" v-model="dio">
	</div>
</template>

<script>
export default {
	data() {
		return { dio: '' }
	}
}
</script>


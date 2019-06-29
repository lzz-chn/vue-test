<template>
	<div class="mySlot">
		<h3>my slot</h3>
		<!-- 默认 slot 插槽 -->
		<slot></slot>
		<!-- 自定义名称插槽，名称要与发送插槽方相同 -->
		<slot name="box1"></slot>
		<slot name="box2" jojo="olaolaola" dio="mudamudamuda" ></slot>
		<slot name="box3" jojo="olaolaola" dio="mudamudamuda" ></slot>
	</div>
</template>

<script>
export default {
	name: 'MySlot',
	mounted() {
		// this.$slots : {default: Array(4), box1: Array(1)}
		console.log('this.$slots :', this.$slots)
	}
}
</script>

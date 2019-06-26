<template>
	<div class="myProps">
		<p>my props</p>
		{{a}}----{{b}}----{{c}}
		{{rePorp()}}
	</div>
</template>

<script>
export default {
	name: 'MyProps',
	props: ['a', 'b', 'c'],
	methods: {
		rePorp() {
			this.$emit('abc', '123')
		}
	}
}
</script>


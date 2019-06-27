<template>
	<div class="myExtends">
		<h3>My Extends</h3>
		{{jojo}}
		{{yo()}}
		<!-- 全局混入 -->
		{{mixin_ajax()}}
		{{extend_ajax()}}
	</div>
</template>

<script>
let my_extends = {
	methods: {
		yo() {
			console.log('Yo.')
		}
	},
	data() {
		return {
			jojo: 'olaolaola'
		}
	}
}
export default {
	name: 'MyExtends',
	extends: my_extends
}
</script>

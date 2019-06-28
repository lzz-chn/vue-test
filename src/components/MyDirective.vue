<template>
	<div class="yyDirective">
		<h3>my directive</h3>
		<button v-green>green</button>
	</div>
</template>

<script>
export default {
	name: 'MyDirective',
	directives: {
		green: {
			// bind()  只调用一次，指令第一次绑定到元素时调用
			bind(el) {
				console.log('标签绑定指令')
			},
			// 被绑定元素插入父节点时调用
			inserted(el) {
				el.parentElement.style.border = '2px solid blue'
			},
			update(el) {
				console.log('标签即将更新')
			},
			componentUpdated() {
				console.log('标签更新完成')
			},
			unbind(el) {
				console.log('标签解绑指令')
			}
		}
	}
}
</script>



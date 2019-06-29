<template>
	<div class="compDynamic">
		<h3>Components Dynamic</h3>
		<button @click="dynamic='MySlot'">MySlot</button>
		<button @click="dynamic='MyColor'">MyColor</button>
		<!-- 
			keep-alive 可以保持动态组件的状态，可以避免重复渲染。 
			默认保留所有组件的状态
			include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
			exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
			max - 数字。最多可以缓存多少组件实例。
		-->
		<keep-alive include="MySlot">
			<!-- 
				component :is="组件名称"或 v-bind:is="" 表示动态组件 
				通过控制不同的组件名称来实现切换组件的效果
			-->
			<component :is="dynamic"></component>
		</keep-alive>
	</div>
</template>

<script>
import MyColor from './MyColor'
import MySlot from './MySlot'
export default {
	name: 'CompDynamic',
	data() {
		return {
			dynamic: 'MySlot'
		}
	},
	components: {
		MyColor,
		MySlot
	}
}
</script>

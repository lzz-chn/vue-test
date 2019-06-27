<template>
	<div class="myRef">
		<p>My Ref</p>
		<!-- ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。-->
		<button ref="myRefBtn">myRefBtn</button>
		<MyStyle ref="myRefStyle"/>
		<ul>
			<li ref="myLi" v-for="v in [1,2,3]" :key="v">{{v}}</li>
		</ul>
	</div>
</template>

<script>
import MyStyle from './MyStyle'
export default {
	name: 'MyRef',
	components: { MyStyle },
	mounted() {
		// 获取持有注册过 ref 特性 的所有 DOM 元素和组件实例
		// 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
		// .$refs 属性只有在组件挂载完成之后才可以访问
		console.log('this.$refs', this.$refs)
	}
}
</script>




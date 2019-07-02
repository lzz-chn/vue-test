<template>
	<div class="myRouter">
		<h3>MyRouter</h3>
		<div
			class="base"
			v-if="false"
		>
			<!-- 
			tag 可以修改标签类型，默认为 a 标签 
			exact 表示绝对匹配 active-class名 
			active-class 设置当前匹配的 class名
			exact-active-class 设置绝对匹配的 class名
			正常链接跳转都是 push ,可以使用 replace 修改跳转方式
			-->
			<router-link
				exact
				tag="div"
				to="/"
				replace
				active-class="my-index"
				exact-active-class="my-index-exact"
			>
				<b-badge variant="primary">home</b-badge>
			</router-link>
			<router-link to="/yo">yo</router-link>
			<router-link to="/jojo">jojo</router-link>
			<router-link to="/dio">dio</router-link>
			<router-link to="/dio/123">dio/123</router-link>
			<router-link to="/dio/456">dio/456</router-link>

			<!-- 动态写法 -->
			<router-link :to="{name: 'Yo'}">name : yo</router-link>
			<router-link :to="{path:'/dio/789'}">path : dio/789</router-link>
			<!-- params 只能配合 name 使用 -->
			<router-link :to="{name:'Dio/',params:{id:666}}">name : dio, params: 666</router-link>
			<p></p>
			<!-- 通过 js逻辑跳转 -->
			<!-- $router.push()跳转会产生新的历史记录 -->
			<b-button
				variant="primary"
				@click="$router.push('/dio/push')"
			>dio/push</b-button>
			<!-- $router.replace()跳转会替换当前的历史历史记录，不会产生新的记录 -->
			<b-button
				variant="primary"
				@click="$router.replace('/dio/replace')"
			>dio/replace</b-button>
			<b-button @click="$router.back()">back</b-button>
			<b-button @click="$router.forward()">forward</b-button>
			<b-button @click="$router.back(2)">back : 2</b-button>
			<b-button @click="$router.forward(2)">forward : 2</b-button>
			<p></p>
		</div>

		<div class="nested">
			<router-link to="/">
				<b-badge variant="info">home</b-badge>
			</router-link>
			<router-link to="/web">
				<b-badge variant="info">web</b-badge>
			</router-link>
		</div>
		<b-alert
			variant="primary"
			show
		>
			<router-view />
		</b-alert>
	</div>
</template>

<script>
export default {
	name: 'MyRouter',
	data() {
		return {}
	}
}
</script>

<style scoped>
/* a {
	border: 2px solid rgb(57, 168, 168);
} */
</style>

<template>
	<div class="myMixins">
		<h3>my ximins</h3>
		a : {{a}}
		<br>
		b : {{b}}
		<br>
		c : {{c}}
		<br>
	</div>
</template>
<script>
export default {
	name: 'MyMixins',
	data() {
		return {
			a: 6,
			c: 3
		}
	},
	// 混入 mixins 就是把其他模块的数据配置合并到当前组件中来
	// 格式 mixins[{模块1},{模块2},{模块3}]
	mixins: [
		{
			// 把当前的data()中的数据混入到 组件的 data()中去
			data() {
				return { a: 1, b: 2 }
			}
		}
	],
	mounted() {
		console.log('this.a', this.a)
		console.log('this.b', this.b)
		console.log('this.c', this.c)
	}
}
</script>


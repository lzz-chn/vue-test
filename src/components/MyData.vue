<template>
	<div class="myData">
		<h3>my data</h3>
		$data:{{$data}}
		<br>
		<input type="text" v-model="a">
		一级数据 a:{{a}}
		<br>
		<input type="text" v-model="d.name">
		二级数据 d:{{d}}
		<br>
		<!-- 无效的新增数据方法 -->
		<button @click="$data.e=1">增加数据e</button>
		<button @click="e=1">增加数据e</button>
		<button @click="$set(e,666)">.$set()增加数据e</button>
		<br>
		<!-- 
            $set()
            向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。
            它必须用于向响应式对象上添加新属性
		    对象不能是 Vue 实例，或者 Vue 实例的根数据对象
		-->
		<button @click="$set(d,'sex','male')">.$set()增加数据d.sex</button>
		<!-- 
            $delete()
            删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。
            这个方法主要用于避开 Vue 不能检测到属性被删除的限制 
            目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。
		-->
		<button @click="$delete(d,'sex')">.$delete()删除数据d.sex</button>
	</div>
</template>
<script>
// let myData = { a: '1', b: '2', c: '3' }
export default {
	name: 'MyData',
	data() {
		return { a: '1', b: '2', c: '3', d: { name: '123', age: '456' } }
	},
	updated() {
		console.log('this.$data:', this.$data)
	}
}
</script>


<template>
	<div class="myStyle">
		my style
		<a href="http://www.baidu.com" target="_blank">点我</a>
		<!-- 传统写法 -->
		<div class="ms_color ms_border">周一</div>
		<!-- 数组写法 -->
		<div :class="['ms_color' , 'ms_border']">周二</div>
		<div :class="['ms_color' , 'ms_border'][0]">周三</div>
		<!-- 对象写法 -->
		<div :class="ms">周四</div>
		<div :class="ms[1]">周五</div>
		<!-- 对象数据混合写法 -->
		<div :class="{ms_color:true,ms_border:false}">周六</div>
		<div :class="[{ms_color:false}, 'ms_border']">周日</div>

		<!-- 传统写法 -->
		<div style="font-size:40px;color:green">一月</div>
		<!-- 对象写法 -->
		<div :style="{'font-size':'40px','color':'green'}">二月</div>
		<!-- 数组写法 -->
		<div :style="[{'font-size':'40px'},{'color':'green'}]">三月</div>
	</div>
</template>

<script>
// 使用 es6 导入样式的应用范围为全局
// import './../assets/MyStyle.css'
export default {
	name: 'MyStyle',
	data() {
		return {
			ms: ['ms_color', 'ms_border']
		}
	}
}
</script>

// scoped 样式范围 表示以下样式只堆当前组件生效
<style scoped>
/*  scoped 中导入的样式的应用范围为当前组将 */
/* @import url('../assets/myStyle.css'); */

a {
	color: blue;
}
.ms_color {
	color: red;
	padding: 5px;
}
.ms_border {
	border: 3px solid black;
}
</style>

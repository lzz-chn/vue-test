<template>
	<div class="myForms">
		<p>my forms</p>
		<!-- 文本框 -->
		<input type="text" v-model="user">
		input:{{user}}
		<br>

		<!-- 复选框 -->
		<div>
			<!-- 单个复选框 -->
			<label>
				记住账号：
				<input type="checkbox" v-model="boolean">
			</label>
			<br>
			<!-- 多个复选框 -->
			<label>
				炸酱面
				<input type="checkbox" value="炸酱面" v-model="food">
			</label>
			<label>
				肉夹馍
				<input type="checkbox" value="肉夹馍" v-model="food">
			</label>
			<p>选择：{{food.join()}}</p>
		</div>

		<!-- 单选按钮 -->
		<div>
			<label>
				男
				<input type="radio" name="sex" value="male" v-model="sex">
			</label>
			<label>
				女
				<input type="radio" name="sex" value="female" v-model="sex">
			</label>
			<p>选择：{{sex}}</p>
		</div>

		<!-- 列表选择 -->
		<select v-model="selected">
			<option disabled value="0">请选择</option>
			<option value="1">选项1</option>
			<option value="2">选项2</option>
			<option value="3">选项3</option>
			<option value="4">选项4</option>
		</select>
		<br>
		<p v-if="selected">选择是：{{selected}}</p>

		<!-- 预定义默认的值 -->
		<input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
		<span>toggle：{{toggle}}</span>
		<br>

		<!-- v-on:input 输入事件 等价与 v-model -->
		<input v-bind:value="inp" v-on:input="inp = $event.target.value">
		inp: {{inp}}
	</div>
</template>

<script>
export default {
	name: 'MyForms',
	data() {
		return {
			user: '',
			boolean: true,
			food: [], // 使用数据存放多个数据
			sex: 'male',
			selected: 0,
			toggle: 'yes',
			inp: ''
		}
	}
}
</script>

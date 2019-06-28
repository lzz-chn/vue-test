<template>
	<div class="myPlugin">
		<h3>My Plugin</h3>
		<!-- 插件调用 -->
		{{myPlugin_1()}}
		{{myPlugin_2()}}
		{{plugin_log()}}
	</div>
</template>

<script>
export default {
	name: 'MyPlugin',
	mixins: ['MyPlugin_Fun']
}
</script>

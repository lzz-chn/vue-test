<template>
	<div class="provideInject">
		<h3>Provide and Inject</h3>
		<div>父级组件数据 jojo: {{jojo}}</div>
		<div>祖父级组件数据 dio: {{dio}}</div>
        <div>provide 和 inject 绑定并不是可响应的 inp: {{inp}}</div>
	</div>
</template>

<script>
export default {
	name: 'ProvideInject',
	props: ['jojo'],
    inject: ['dio','inp'],
}
</script>


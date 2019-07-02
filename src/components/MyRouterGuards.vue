<template>
	<div class="myRouterGuards">
		<h3>MyRouterGuards</h3>
		<router-link to="/">
			<b-badge variant="info">home</b-badge>
		</router-link>
		<router-link to="/web">
			<b-badge variant="info">web</b-badge>
		</router-link>
        
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
	name: 'MyRouterGuards',
	data() {
		return {}
	}
}
</script>
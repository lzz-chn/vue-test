<template>
	<div class="myVuex">
		<h4>MyVuex</h4>
		<b-alert show>
			<h5>store.state</h5>
			<b-badge>data1 :</b-badge>
			{{$store.state.data1}}
			<br />
			<b-badge>data2 :</b-badge>
			{{$store.state.data2}}
		</b-alert>
		<b-alert
			show
			variant="success"
		>
			<h5>store.getters</h5>
			<b-badge>data1_UpperCase :</b-badge>
			{{$store.getters.data1_UpperCase}}
			<br />
			<b-badge>data2_Int :</b-badge>
			{{$store.getters.data2_Int}}
		</b-alert>
		<b-alert
			show
			variant="warning"
		>
			<h5>store.commit(mutations)</h5>
			<b-button
				small
				variant="info"
				@click="$store.commit('setData1','yooooooo')"
			>setData1</b-button>
			<b-button
				small
				variant="info"
				@click="$store.commit('setData2','789.123')"
			>setData2</b-button>
		</b-alert>
		<b-alert
			show
			variant="dark"
		>
			<h5>store.dispatch(actions)</h5>
			<b-button
				small
				variant="info"
				@click="$store.dispatch('commitMu',['muhaha','6666.6666'])"
			>commitMu</b-button>
		</b-alert>
		<b-alert
			show
			variant="primary"
		>
			<h5>store.state.modules</h5>
			<b-badge>modules1.data :</b-badge>
			{{$store.state.modules1.data}}
			<br />
			<b-badge>modules2.data :</b-badge>
			{{$store.state.modules2.data}}
            <br />
			<b-badge>getters['modules1/modules1Get'] :</b-badge>
            {{$store.getters['modules1/modules1Get']}}
			<p></p>
			<b-button
				small
				variant="info"
				@click="$store.commit('modules1/setModules1Data','olaola')"
			>modules1/setModules1Data</b-button>
			<b-button
				small
				variant="info"
                class="btn"
				@click="$store.commit('modules2/setModules2Data','mudamuda')"
			>modules2/setModules2Data</b-button>
			<b-button
				small
				variant="info"
                class="btn"
				@click="$store.dispatch('modules1/modules1Ac','mudamuda')"
			>modules1/modules1Ac</b-button>
			
		</b-alert>
	</div>
</template>

<script>
export default {
	name: 'Myvuex',
	data() {
		return {}
	},
	mounted() {}
}
</script>
<style lang="less" scoped>
.btn{
    margin-top: 7px;
}
</style>

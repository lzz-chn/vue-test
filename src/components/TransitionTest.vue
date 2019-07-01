<template>
	<div class="transitionTest">
		<h3>Transition Test</h3>
		<!-- <button @click="names.push('123')">添加</button>
		<transition-group
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
			v-on:after-leave="xx"
		>
			<div v-for="(uName,i) in names" :key="i" v-if="n!=i">
				{{uName}}
				<button @click="del(i)">删除</button>
			</div>
		</transition-group> -->

		<button v-on:click="add">Add</button>
		<button v-on:click="remove">Remove</button>
		<transition-group
			tag="div"
			enter-active-class="animated lightSpeedIn"
			leave-active-class="animated lightSpeedOut"
		>
			<div v-for="item in items" v-bind:key="item" class="list-item">
                {{ item }}
            </div>
		</transition-group>
	</div>
</template>

<script>
export default {
	name: 'TransitionTest',
	data() {
		return {
			names: ['11', '22'],
			n: -1,
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10
		}
	},
	// methods: {
	// 	del(v) {
	// 		this.n = v
	// 	},
	// 	xx() {
	// 		if (this.n >= 0) {
	// 			this.names.splice(this.n, 1)
	// 		}
	// 		console.log('删除成功')
	// 	}
	// }

	methods: {
		randomIndex: function() {
			return Math.floor(Math.random() * this.items.length)
		},
		add: function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove: function() {
			this.items.splice(this.randomIndex(), 1)
		}
	}
}
</script>

<style scoped>
@import url(../../node_modules/animate.css/animate.min.css);
</style>

<template>
	<div class="myTransition">
		<h3>My Transition</h3>
		<div class="transition-css">
			<!-- <button v-on:click="display=!display">切换</button> -->

			<!--name="名称" 指定过渡所使用的 "名称"-过度的类名 -->
			<!--appear指定 页面一打开的时候 就开始显示过渡效果 前提是 标签要在显示的状态-->
			<transition name="md" appear>
				<!-- <div
					class="box"
					v-if="display"
				>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>-->
			</transition>

			<!-- duration 表示设置动画播放  或过渡效果  持续的时间 -->
			<!-- 
				通过6个固定的属性名来自定义过渡的类名 
				enter-class
				enter-active-class
				enter-to-class
				leave-class
				leave-active-class
				leave-to-class
			-->
			<transition
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
				appear
			>
				<div
					class="box"
					v-show="display"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
			</transition>
			
			<button @click="mm=true">mm显示</button>
			<button @click="mm=false">mm隐藏</button>
			<!-- 
				通常情况下 transition 中包含多个过渡标签时过渡会同时进行。
				若需要实现同一时间只有一个标签执行过渡效果，需要使用 mode 指令

				in-out：新元素先进行过渡，完成之后当前元素过渡离开。
				out-in：当前元素先进行过渡，完成之后新元素过渡进入。
			-->
			<transition
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
				appear
				mode="out-in"
			>
				<!-- <div
					class="box"
					v-show="display"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>-->
				<span v-if="mm" key="k1">Lorem ipsum dolor</span>
				<span v-if="!mm" key="k2">Lorem ipsum dolor</span>
			</transition>
			<transition-group
				tag="div"
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
			>
				<div v-if="mm" key="k1">Lorem ipsum dolor</div>
				<div v-if="mm" key="k2">Lorem ipsum dolor</div>
				<div v-if="mm" key="k3">Lorem ipsum dolor</div>
				<div v-if="mm" key="k4">Lorem ipsum dolor</div>
			</transition-group>
		</div>
		<div class="transition-js">
			<!-- <button v-on:click="mm=true">显示</button>
			<button v-on:click="mm=false">隐藏</button>
			<transition
				name="fade"
				appear
				v-on:before-enter="beforeEnter"
				v-on:enter="enter"
				v-on:after-enter="afterEnter"
				v-on:enter-cancelled="enterCancelled"
				v-on:before-leave="beforeLeave"
				v-on:leave="leave"
				v-on:after-leave="afterLeave"
				v-on:leave-cancelled="leaveCancelled"
			>
				<div v-if="mm" class="box">Lorem</div>
			</transition>-->
		</div>
	</div>
</template>
<script>
import Velocity from 'velocity-animate'
export default {
	name: 'MyTransition',
	data() {
		return {
			display: false,
			mm: true
		}
	},
	methods: {
		// 进入中
		beforeEnter: function(el) {
			console.log('进入之前')
			el.style.opacity = '0'
			el.style.background = 'green'
		},
		enter: function(el, done) {
			el.style.transition = 'all 2s'
			console.log('进入中')
			//done() 表示调用afterEnter方法
			//需要把done()调用写在定时器里面 才能产生过渡的效果
			setTimeout(() => {
				done()
			}, 100)
		},
		afterEnter: function(el) {
			el.style.opacity = '1'
			el.style.background = 'green'
			console.log('进入之后')
		},
		enterCancelled: function(el) {
			//在进入的时候 但还没有进入完成 就离开了 就会触发这个事件
			console.log('进入取消')
		},

		// 离开时
		beforeLeave: function(el) {
			console.log('离开的之前')
		},
		leave: function(el, done) {
			console.log('离开中')
			//done() 表示调用afterLeave方法
			done()
		},
		afterLeave: function(el) {
			console.log('离开之后')
		},
		// leaveCancelled 只用于 v-show 中
		leaveCancelled: function(el) {
			//在离开的状态中 但是还没离开完成 又进入了 这个事件就会执行
			console.log('取消离开')
		}
	}
}
</script>	

<style scoped>
/* @import url(../../node_modules/animate.css/animate.min.css); */
/* 通过以下特性来自定义过渡类名，他们的优先级高于普通的类名 */
/* md 为自定义过渡类名 */
/* .box {
	font-size: 100px;
} */
.md-enter {
	/*过渡效果进入样式，md-enter被插入到标签后的下一帧就会被删除*/
	font-size: 12px;
}
.md-enter-active {
	/* 此类名定义过渡的属性，例如：时间、速度、延时*/
	transition: font-size 5s;
}
.md-enter-to {
	/*此类名定义过渡进入的最终样式 */
	font-size: 50px;
}
/*离开*/
.md-leave {
	/*过渡效果离开样式，md-leave被插入到标签后的下一帧就会被删除*/
	font-size: 50px;
}
.md-leave-active {
	/* 此类名定义过渡的属性，例如：时间、速度、延时*/
	transition: font-size 5s;
}
.md-leave-to {
	/*此类名定义过渡离开的最终样式 */
	font-size: 12px;
}

.en {
	background-color: black;
}
.en-ac {
	transition: background-color 5s;
}
.en-to {
	background-color: pink;
}

.le {
	background-color: black;
}
.le-ac {
	transition: background-color 5s;
}
.le-to {
	background-color: aqua;
}
</style>

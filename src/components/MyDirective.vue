<template>
	<div class="yyDirective">
		<h3>my directive</h3>
		<button @click="$forceUpdate()">force update</button>
		<button v-green:num.a.b="jojo" v-if="state">green</button>
		<br />
		<input type="text" v-model="jojo" />
		jojo: {{jojo}}
		<br />
		<button @click="state=!state">bind or unbind</button>
		<button @click="$destroy()">destroy template</button>
		<div>
			<button v-my:[dio]>v-my</button>
			<button @click="$set(dio,dio.length,Math.random().toFixed(1)*10)">set dio</button>
			{{dio}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'MyDirective',
	data() {
		return {
			jojo: 'olaolaola',
			dio: [1],
			state: true
		}
	},
	directives: {
		my: {
			update(el, binding) {
				console.log('binding.arg:', binding.arg)
			}
		},
		green: {
			// bind()  只调用一次，指令第一次绑定到元素时调用
			bind(el, binding) {
				el.style.backgroundColor = 'green'
				console.log('指令第一次绑定到元素')
				// 无法获取绑定标签的父级
				console.log('el.parentElement:', el.parentElement) // null
				// 指令名，不包括 v- 前缀。
				console.log('binding.name:', binding.name) // green
				// 指令的绑定值
				console.log('binding.value:', binding.value) // olaolaola
				// 绑定值的表达式或变量名
				console.log('binding.expression:', binding.expression) // jojo
				// 传给指令的参数
				console.log('binding.arg:', binding.arg) // num
				// 一个包含修饰符的对象
				console.log('binding.modifiers:', binding.modifiers) // {a: true, b: true}
			},
			// 被绑定元素插入父节点时调用
			inserted(el) {
				el.parentElement.style.border = '2px solid blue'
				console.log('绑定元素插入父节点')
			},
			// 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。
			update(el, binding, vnode, oldVnode) {
				console.log('模板更新')
				console.log('vnode:', vnode)
				//  指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
				console.log('binding.oldValue:', binding.oldValue) // undefined
			},
			// 被绑定元素所在模板完成一次更新周期时调用。
			componentUpdated(binding, oldVnode) {
				console.log('模板完成一次更新周期')
				//  指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
				console.log('binding.oldValue:', binding.oldValue) // undefined
			},
			// 只调用一次， 指令与元素解绑时调用
			unbind(el) {
				console.log('指令与元素解绑')
				// 若解绑后，当前元素未被删除则可以获取元素的父级标签
				console.log('el.parentElement :', el.parentElement)
			}
		}
	}
}
</script>
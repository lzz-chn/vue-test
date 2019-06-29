<template>
	<div class="myColor">
		<h3>my color</h3>
		<div v-color:[color]="'pink'"></div>
		color: {{color.default}}
	</div>
</template>
<script>
export default {
	name: 'MyColor',
	data() {
		return {
			color: {
				default: '#666',
				tmpThis: this
			}
		}
	},
	directives: {
		color: {
			bind(el, binds) {
				el.style.cssText = `
                    height: 20px; 
                    width: 20px;
                    border: 1px solid blue;
                    background-color: ${binds.arg.default};
                    position: relative;
                    `
				let colorBox = document.createElement('div')
				colorBox.style.cssText = `
                    width: 200px;
                    box-shadow: 0 3px 5px 1px #ccc;
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    display: none;
                    flex-wrap: wrap;
                `
				el.appendChild(colorBox)
				for (let i = 0; i < 256; i++) {
					var rBox = document.createElement('span')
					rBox.style.cssText = `
                        display: inline-block;
                        height: 10px;
                        width: 10px;
                        margin: 1px;
                        background-color: rgb( ${i}, 255, 0 );
                    `
					colorBox.appendChild(rBox)
				}
				el.onclick = function(e) {
					if (event.target.tagName == 'SPAN') {
						let tmp = binds.arg.tmpThis
						let bgColor = event.target.style.backgroundColor

						el.style.backgroundColor = bgColor
						tmp.$set(tmp.color, 'default', bgColor)
					} else {
						e.stopPropagation()
					}
					colorBox.style.display = 'flex'
				}
				document.onclick = function() {
					colorBox.style.display = 'none'
				}
			}
		}
	}
}
</script>

<style scoped>
</style>


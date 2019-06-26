<template>
	<div class="keyboardEvent">
		<!--1.键盘松开-->
		<div>
			<span>keyup</span>
			<input type="text" @keyup="clo('keyup')">
		</div>

		<!--2.键盘按下-->
		<div>
			<span>keydown</span>
			<input type="text" @keydown="clo('keydown')">
		</div>

		<!--3.按enter健-->
		<div>
			<span>keyup.enter</span>
			<input type="text" @keyup.enter="clo('keyup.enter')">
		</div>

		<!--4.按方向健-->
		<div>
			<span>up</span>
			<input type="text" @keyup.up="clo('keyup.up')">
			<br>
			<span>down</span>
			<input type="text" @keyup.down="clo('keyup.down')">
			<br>
			<span>left</span>
			<input type="text" @keyup.left="clo('keyup.left')">
			<br>
			<span>right</span>
			<input type="text" @keyup.right="clo('keyup.right')">
			<br>
		</div>

		<!--5.按空格键-->
		<div>
			<span>space</span>
			<input type="text" @keyup.space="clo('space')">
		</div>

		<!--6.返回键-->
		<div>
			<span>esc</span>
			<input type="text" @keyup.esc="clo('esc')">
		</div>

		<!--7.使用其他组合键-->
		<div>
			<span>crtl+a</span>
			<!-- ctrl.65 代表 crtl + a, 65为字母a在键盘中的编码 -->
			<input type="text" @keyup.ctrl.65="clo('crtl+a')">
			<br>
			<!-- ctrl+shift+a -->
			<span>ctrl+shift+a</span>
			<input type="text" @keyup.ctrl.shift.65="clo('ctrl+shift+a')">
			<br>
			<span>alt</span>
			<input type="text" @keyup.alt="clo('alt')">
			<br>
			<span>shift</span>
			<input type="text" @keyup.shift="clo('shift')">
			<br>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		clo: str => {
			console.log(str);
		}
	}
};
</script>


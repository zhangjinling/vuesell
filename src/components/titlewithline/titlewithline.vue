<template>
	<div class="titlewithline">
		<div class="line"></div>
		<div class="text">{{word}}</div>
		<div class="line"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			word: {
				type: String
			},
		}
	}
</script>
<style lang="stylus" type="stylesheet/stylus">
	.titlewithline	
		display: flex
		width: 80%
		margin: 28px auto 24px auto
		.line
			flex: 1
			position: relative
			top: -6px
			border-bottom: 1px solid rgba(255,255,255,0.2)
		.text
			padding: 0 12px
			font-size: 14px
			font-weight: 700
</style>
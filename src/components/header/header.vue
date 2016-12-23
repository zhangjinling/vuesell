<template>
	<div class="header">
		{{seller.avatar}}		
		{{seller.name}}
	</div>
</template>
<script type="text/javascript">
	export default{
		data() {
			return {
			}
		},
		props:{
			seller:{
				type: Object
			}
		},
		created:function () {
			console.log(this.seller)
		}
	}
</script>
<style lang="stylus" type="stylesheet/stylus">
	
</style>
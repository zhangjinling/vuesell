<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="deacription">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper">
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data: function () {
			return {
			}
		},
		props:{
			seller:{
				type: Object
			}
		},
		created() {
			this.classMap = ['decrease','discount','invoice','invoice','guarantee'];

		}
	};
</script>

<style type="text/css">
	.header{
		color: #fff;
		background-color: black;
	}
	.header .content-wrapper{
		padding:24px 12px 18px 24px;
		font-size: 0;
	}
	.header .content-wrapper .avatar{
		vertical-align: top;

	}
	.header .content-wrapper .avatar img{
		border-radius: 2px;		
	}
	.header .content-wrapper .avatar,.header .content-wrapper .content{
		display: inline-block;
	}
	.header .content-wrapper .content{
		font-size: 14px;
		margin-left: 16px;
	}
	.content .title{
		margin: 2px 0 8px 0;
	}
	.content .title .brand{
		width: 30px;
		height: 18px;
		display: inline-block;
		background-image: url(brand@2x.png);
		background-size: 30px 18px;
		background-repeat: no-repeat;
		vertical-align: top;
	}
	.content .title .name{
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	.content .deacription{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.content .support .icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
	}
	.content .support .decrease{
		background-image: url(decrease_1@2x.png);
	}
	.content .support .discount{
		background-image: url(discount_1@2x.png);
	}
	.content .support .guarantee{
		background-image: url(guarantee_1@2x.png);
	}
	.content .support .invoice{
		background-image: url(invoice_1@2x.png);
	}
	.content .support .special{
		background-image: url(special_1@2x.png);
	}
	.content .support .text{
		line-height: 12px;
		font-size: 10px;
		vertical-align: top;
	}





</style>
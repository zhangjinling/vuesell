<template>
	<div class="cartcontrol">
		<div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click="deareaseCount"></div>
		<div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			deareaseCount(event) {
				if (!event._constructed) {
					return;
				};
				if (this.food.count) {
					this.food.count --;
				};
			},
			addCart(event) {
				if (!event._constructed) {
					return;
				};
				if (!this.food.count) {
					Vue.set(this.food,'count',1);
				}else{
					this.food.count ++;
				}
			}
		}
	};
</script>

<style lang="stylus" type="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.cart-decrease, .cart-add
			display: inline-block
			padding: 6px
			font-size: 24px
			line-height: 24px
			color: rgb(0,160,220)
		.cart-count
			display: inline-block
			vertical-align: top
			width: 12px
			padding-top: 6px
			line-height: 24px
			text-align: center
			font-size: 10px
			color: rgb(0,33,44)
		.cart-add
			display: inline-block
</style>
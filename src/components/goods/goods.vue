<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item, $index) in goods" class="menu-item" :class="{'current':currentIndex === $index}" @click="selectMenu($index,$event)">
					<span class="text border-1px">
						<span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
						{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li v-for="item in goods" class="food-list food-list-hook" >
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li class="food-item border-1px" v-for="food in item.foods">
							<div class="icon">
								<img width="57" height="57" :src="food.icon">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span>
									<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
								<div class="cartcontent-wrapper">
									<cartcontrol :food="food"></cartcontrol>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shopcart :selectFoods="selectFoods" :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice"></shopcart>
	</div>
</template>
<script type="text/javascript">
	import BScroll from 'better-scroll';
	import shopcart from 'components/shopcart/shopcart';
	import cartcontrol from 'components/cartcontrol/cartcontrol';
	const ERR_OK = 0;
	export default{
		props: {
			seller: {
				type: Object
			}
		},
		components: {
			shopcart,
			cartcontrol
		},
		data() {
			return {
				goods:[],
				listHeight:[],
				scrollY:0
			};
		},
		computed:{
			currentIndex() {
				for (var i = 0; i < this.listHeight.length; i++) {
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i + 1];
					if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						return i;
					}
				}
				return 0;
			},
			selectFoods() {
				let foods = [];
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						if (food.count) {
							foods.push(food);
						};
					})
				});
				console.log(foods);
				return foods;
			}
		},
		created() {
			this.$http.get('/api/goods').then((response) => {
				if (response.body.errno == ERR_OK) {
					this.goods = response.body.data
				};
				//dom更新完毕
				this.$nextTick(() => {
					//初始化滚动条
					this._initScroll();
					//计算高度
					this._calculateHeight();
				});
			}, (response) => {

			});
			this.classMap = ['decrease','discount','special','invoice','guarantee'];
		},
		methods: {
			selectMenu($index,$event) {
				if (!$event._constructed) {
					return;
				}
				let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
				let el = foodList[$index];
				console.log(el)
				this.foodsScroll.scrollToElement(el,500);

			},
			_initScroll() {
				this.menuScroll = new BScroll(this.$refs.menuWrapper,{
					click: true
				});
				this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
					probeType: 3,
					click: true

				});
				//bacroll 申出来的滚动位置事件
				this.foodsScroll.on('scroll', (pos) => {
					this.scrollY =Math.abs(Math.round(pos.y));
				});
			},
			_calculateHeight() {
				let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
				let height = 0;
				this.listHeight.push(height);
				for (let i = 0; i < foodList.length; i++) {
					let item = foodList[i];
					height += item.clientHeight;
					this.listHeight.push(height);

				};
			}
		}
	}
</script>
<style lang="stylus" type="stylesheet/stylus">
	@import "../../common/stylus/mixin";

	.goods
		display: flex
		position: absolute
		width: 100%
		top: 174px
		bottom: 46px
		overflow: hidden
		.menu-wrapper
			flex: 0 0 80px
			width: 80px
			background: #f3f5f7
			.menu-item
				display: table
				height: 54px
				width: 56px
				line-height: 14px
				padding: 0 12px
				&.current
					position: relative
					margin-top: -1px
					font-weight: 700
					background: #fff
					.text
						border-none()
				.icon
					display: inline-block
					height: 12px
					width: 12px
					margin-right: 2px
					background-size: 12px 12px
					backgroud-repeat: no-repeat
					vertical-align: top
					&.decrease
						bg-image('decrease_3')
					&.discount
						bg-image('discount_3')
					&.guarantee
						bg-image('guarantee_3')
					&.invoice
						bg-image('invoice_3')
					&.special
						bg-image('special_3')
				.text
					display: table-cell
					font-size: 12px
					vertical-align: middle
					width: 56px
					border-1px(rgba(7,17,27,0.1))
		.foods-wrapper
			flex: 1
			.title
				padding-left: 14px
				height: 26px
				line-height: 26px
				border-left: 2px solid #d9dde1
				font-size: 12px
				color: rgb(147,153,159)
				background-color: #f3f5f7
			.food-item
				display: flex
				margin: 18px
				padding-bottom: 18px
				border-1px(rgba(7,17,27,0.1))
				&:last-child
					border-none()
					margin-bottom: 0
				.icon
					flex: 0 0 57px
					margin-right: 10px
				.content
					flex: 1
					.name
						margin: 2px 0 8px 0
						height: 14px
						line-height: 14px
						font-size: 14px
						color: rgb(7,17,27)
					.desc,.extra
						line-height: 10px
						font-size: 10px
						color: rgb(147,153,159)
					.desc
						margin-bottom: 8px
						line-height: 12px
					.extra
						.count
							margin-right:12px
					.price
						font-weight: 700
						line-height: 24px
						.now
							margin-right: 8px
							font-size: 14px
							color: rgb(240,20,20)
						.old
							text-decoration: line-through
							font-size: 10px
							color: rgb(147,153,159)
					.cartcontent-wrapper
						position: absolute
						right: 0
						bottom: 12px













</style>
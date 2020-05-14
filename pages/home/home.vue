<template>
	<view class="home">
		<view class="box">
			<view class="left_box"><view class="left_item"></view></view>
			<view class="right_box"><view class="right_item"></view></view>
			<view class="mask"></view>
			<view class="text">25:00</view>
		</view>
		<text class="test">劝君莫惜金缕衣，劝君惜取少年时</text>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	created() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.home {
	position: relative;
	width: 100%;
	height: 900rpx;
	background: #3197ed;
	.test {
		position: absolute;
		bottom: 40%;
		left: 20%;
		font-size: 30rpx;
	}
	.box {
		/* 最外层的盒子 */
		width: 200px;
		height: 200px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		border-radius: 50%;
		background-color: pink;
	}
	.left_box,
	.right_box {
		/* 
	        左右两边用于 隐藏 旋转的div的盒子 
	        通过overflow来隐藏内部div旋转出去的部分
	      */
		position: absolute;
		top: 0;
		width: 100px;
		height: 200px;
		overflow: hidden;
		z-index: 1;
	}
	.left_box {
		left: 0;
	}
	.right_box {
		right: 0;
	}
	.left_item,
	.right_item {
		/* 
	       这是需要旋转的div(没有被mask遮盖展示出来的部分作为倒计时的线条)
	       为了方便理解，下面用deeppink和cyan分别设置了左右两边div的颜色
	      */
		width: 100px;
		height: 200px;
	}
	.left_item {
		/*
	       1.设置圆角，圆角大小为高度的一半
	       2.这只旋转的中心点，这是左边圆，中心点设置到右边中心点，右边圆则设置到左边中心点
	       */
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
		-webkit-transform-origin: right center;
		transform-origin: right center;
		-webkit-animation: loading_left 3s linear;
		background-color: deeppink;
	}
	.right_item {
		border-top-right-radius: 100px;
		border-bottom-right-radius: 100px;
		-webkit-transform-origin: left center;
		transform-origin: left center;
		-webkit-animation: loading_right 3s linear;
		background-color: cyan;
	}
	.mask {
		/* 遮住div多余的部分，呈现出线条的效果 */
		position: absolute;
		top: 15px;
		left: 15px;
		right: 15px;
		bottom: 15px;
		z-index: 2;
		border-radius: 50%;
		background-color: #3197ed;
	}
	.text {
		position: absolute;
		top: 36%;
		left: 28%;
		z-index: 2;
		font-size: 40px;
		color: #fff;
		font-weight: lighter;
		transition: font-size 0.3s;
	}
	@-webkit-keyframes loading_left {
		0% {
			-webkit-transform: rotate(0deg);
		}
		50% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(180deg);
		}
	}
	@-webkit-keyframes loading_right {
		0% {
			-webkit-transform: rotate(0deg);
		}
		50% {
			-webkit-transform: rotate(180deg);
		}
		100% {
			-webkit-transform: rotate(180deg);
		}
	}
}
</style>

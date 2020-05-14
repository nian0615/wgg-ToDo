<template>
	<view class="content">
		<view class="image">
			<image src="../../static/nodata.png" mode=""></image>
			<view class="text">暂无任何记录哦</view>
		</view>		
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.content {
	.image {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		image {
			width: 46px;
			height: 46px;
		}
	}
	.text {
		color: #dedede;
		font-size: 12px;
		margin-left: 60px;
	    margin-top: -40px;
	}
}
</style>

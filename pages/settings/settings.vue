<template>
	<view class="container">
		<view class="set_time">
			<text class="text">工作时长(分钟)</text>
			<slider value="1" @change="sliderChange" min="1" max="60" show-value />
		</view>
		<view class="set_time">
			<text class="text">休息时长(分钟)</text>
			<slider value="5" @change="sliderChange" min="5" max="60" show-value />
		</view>
		<view class="set_time">
			<text class="text">主页背景</text>
			<view class="set_body">
				<text>选择背景 ></text>
			</view>
		</view>
		<view class="set_time">
			<checkbox-group>
				<label class="text">
					<checkbox value="cb" checked="true"  />
					启用铃声
				</label>
			</checkbox-group>
			<view class="set_body">
				<text>选择铃声 ></text>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {};
	},
	created() {},
	methods: {
		sliderChange(e) {
			console.log('value 发生变化：' + e.detail.value);
		}
	}
};
</script>
<style lang="scss" scoped>
.container {
	padding: 15px 10px;
	height: 100%;
	font-size: 12px;
	background-color: #f5f5f5;
	.set_time {
		background: #fff;
		min-height: 66px;
		border-radius: 3px;
		padding: 5px 10px;
		margin-bottom: 10px;
		.text {
			
			color: #999;
		}
		.set_body{
			margin-top: 15px;
			text-align: right;
			color: #CEC9C9;
		}
	}
}
</style>

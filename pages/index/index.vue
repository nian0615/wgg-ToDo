<template>
	<view class="content">
		<input class="uni-input" type="text" v-model="username" />
		<view class="uni-form-item uni-column">
			<text class="title">密码：</text>
			<input class="uni-input" password type="number" v-model="password" />
		</view>
		<button class="mini-btn" type="default" @click="btn" size="mini">确认</button>
	</view>
</template>

<script>
	import {login} from '../../apis/login.js'
export default {
	data() {
		return {
			password: '',
			username:''
		};
	},
	onLoad() {},
	methods: {
		btn(){
			console.log(this.username);
			console.log(login);			
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>

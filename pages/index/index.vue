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
			uni.request({
			    url: 'http://rap2.taobao.org:38080/app/mock/255027/user/login', 
				method:'POST',
			    data: {
			        password: 'admin',
			        username: '123456'
			    },
			    header: {
			        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
			    }
			});
				
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

<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
            <swiper-item v-for="(item,index) in swiper" :key="index">
				<view class="imglist">
					<image :src="item.url" ></image>
				</view>
            </swiper-item>
          </swiper>
	</view>
</template>

<script>
import service from '../../untils/service.js'
export default {
	data() {
		return {
			swiper:[],
			loading:false,
			indicatorDots: true,
			autoplay: true,
			interval: 4000,
			duration: 300
		};
	},
	onLoad() {
		this.getBanner()
	},
	methods: {
		getBanner(){
		  uni.showLoading({
				    title: '加载中...'
			});
			uni.request({
				    url: service.getBanner, //仅为示例，并非真实接口地址。
				    data: {},
					method:'GET',
				    success: (res) => {
						console.log(res.data);
						this.swiper = res.data.data.imgList;
				    },
					fail:(err) => {
						uni.showToast({
						    title: '网络请求错误',
							icon:'none',
						    duration: 2000
						});
					},
					complete:() =>{
						this.loading = false;
						uni.hideLoading()
					}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	.content {
		.imglist {
			width: 100%;
			image {
				width: 100%;
				height: 150px;
			}
		}
	}
</style>

import apiList from './apiList'

const apiRequest = (url, methods, data, header) => {
	let Promise = new Promise((resolve, reject) => {
		uni.request({
			url: url,
			data: data ? data : null,
			method: method,
			header: header ? header : {
				'content-type': 'application/json'
			},
			success: (res) => {
				resolve(res)
			},
			fail: (res) => {
				reject({
					errmsg: '网络请求错误',
					code: -1
				})
			}
		})
	});
	return promise;
}

export default apiRequest;
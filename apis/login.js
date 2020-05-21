import apiRequest from '/untils/request/request.js'
import apiList from '/untils/request/apiList.js'

let login = (data) => {
	return new Promise((resolve,reject) =>{
		resolve(apiRequest(apiList.login,'get',data))
	})
};
export default {
	login
}
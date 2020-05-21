let host  = "http://rap2.taobao.org/repository/editor?id=255027";
let apiList = {
	login:host +'/user/login',  // 用户登录
	register:host +'/user/register'  // 用户注册
}
module.exports = apiList;
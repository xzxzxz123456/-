

define(['jquery','jqueryCookie'], function ($) {

	//退出登陆功能实现 
	$("#logout").on("click", function () {
		console.log(123)
		$.ajax({
			url: '/api/logout',
			type: "post",
			success: function (data) {
				if (data.code == 200) {
					location.href = '/login'
				}
			}
		})

	})
	// 不登陆无法访问 首页
	if (location.pathname !== "/login" && !$.cookie('PHPSESSID')) {
		location.href = '/login'
	}
	console.log( $.cookie() )

})


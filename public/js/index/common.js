
define(['jquery','template','jqueryCookie'], function ($,template) {
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
	$(".profile").find("img").attr("src",$.cookie( 'tc_avatar' ))
	$(".profile").find("h4").html( $.cookie( 'tc_name' ) )
	console.log( $.cookie() )

	// 首页个人信息 用模板引擎渲染
	var html = template.render(`<div class="avatar img-circle">
            <img src="{{tc_avatar}}">
        </div>
        <h4>{{tc_name}}</h4>`,$.cookie() )

	$("#profile").html(html)


	

})


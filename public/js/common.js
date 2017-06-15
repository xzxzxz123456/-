
NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});



//退出登陆功能实现 
$("#logout").on("click", function () {
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
if ( location.pathname !== "/login" && !$.cookie('PHPSESSID') ) {

	location.href = '/login'


}
	//  console.log( $.cookie() );
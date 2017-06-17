define(['jquery', 'jqueryCookie'], function ($) {

    //登陆的思路
    // 1  给(form表单) 按钮绑定事件
    // 2 获取用户名和密码 
    // 3 发送ajax 请求登接口
    $("#form").on('submit', function () {
        //表单序列化 来 获取 表单中的所有 val() 值    serialize()
        var vals = decodeURI($("#form").serialize())
        console.log(vals)
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: vals,
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.code === 200) {

                    // $.cookie('tc_avatar', data.result.tc_avatar, { expires: 1 })
                    // $.cookie('tc_name', data.result.tc_name, { expires: 1 })
                    $.cookie('tc_avatar', '/1.jpg')
                    $.cookie('tc_name', '落寒澈.')
                    location.href = '/index';
                }
            }
        })
        return false;
    })
});
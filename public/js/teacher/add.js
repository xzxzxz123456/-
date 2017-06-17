define(['jquery'], function ($) {



    try {
      var  id = location.href.split('?')[1].split("=")[1]
    } finally {
        console.log(id)
        if ( !id ) {
            $(".submit").on('click', function () {

                $.ajax({
                    url: '/api/teacher/add',
                    type: "post",
                    data: {
                        tc_name: $('.teacherName').val(),
                        tc_pass: $('.teacherPass').val(),
                        tc_join_date: $('.teacherTime').val(),
                        tc_type: $('option:checked').attr('value'),
                        tc_gender: $('.radio:checked').val()
                    },
                    success: function (data) {
                        alert("添加成功")
                        location.href = '/teacher/list'
                    }
                })

                return false;
            })

        } else {
            $(".submit").html('修改')
            $('.mima').css({ display: "none" })
            // 设置原来信息
            $.ajax({
                url: '/api/teacher/edit',
                type: "post",
                data: {
                    tc_id: id
                },
                success: function (data) {
                    console.log(data)
                    $('.teacherName').val(data.result.tc_name),
                        $('.teacherTime').val(data.result.tc_join_date),
                        $('option').val(data.result.tc_type).prop("checked", true),
                        $('.radio').val(data.result.tc_gender).prop("checked", true)
                }
            })

            // 获取修改后的信息 然后ajax提交
            $(".submit").on('click', function () {
                $.ajax({
                    url: '/api/teacher/update',
                    type: "post",
                    data: {
                        tc_id: id,
                        tc_name: $('.teacherName').val(),
                        tc_join_date: $('.teacherTime').val(),
                        tc_type: $('option:checked').attr('value'),
                        tc_gender: $('.radio:checked').val()
                    },
                    success: function (data) {
                        alert("修改成功")
                        location.href = '/teacher/list'
                    }
                })

                return false;
            })

        }

    }


});
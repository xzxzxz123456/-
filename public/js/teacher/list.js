
define(['jquery', 'template', 'bootstrap'], function ($, template) {
    //  获取讲师列表
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (data) {
            console.log(data)
            if (data.code === 200) {
                var html = template('teacher_list_tpl', data)
                $("#teacherList").html(html)

                // 查看讲师详情
                $("#teacherList").on('click', ".btn-view", function () {
                    $.ajax({
                        url: '/api/teacher/view?tc_id=' + $(this).parent().data('id'),
                        type: "get",
                        success: function (data) {
                            // console.log(data)
                            if (data.code === 200) {
                                var html = template("teacher_view_tpl", data.result)
                                $("#xiangqing").html(html)
                                //让模态框显示
                                $("#teacherModal").modal();
                            }
                        }
                    })
                })

                //注销和启用功能
                $("#teacherList").on('click', '.btn-enable', function () {
                    var $this = $(this)
                    var tc_id = $this.parent().data("id")
                    var tc_status = $this.data("status")
                    $.ajax({
                        url: '/api/teacher/handle',
                        type: 'post',
                        data: {
                            tc_id: tc_id,
                            tc_status: tc_status
                        },
                        success: function (data) {
                            console.log(data)
                            if (data.code == 200) {
                                var text = data.result.tc_status === 0 ? "注销" : "启用";
                                $this.text(text)
                                //改变 自定义属性 (如果不写这个 就不会变了,点上去就没反应了)
                                $this.data('status', data.result.tc_status )
                            }

                        }

                    })
                })

            }
        }
    })




})
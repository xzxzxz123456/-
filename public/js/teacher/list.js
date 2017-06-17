
define(['jquery','template','bootstrap'],function($,template){
    //  获取讲师列表
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(data){
            if(data.code === 200){
                var  html = template( 'teacher_list_tpl' ,data)
                $("#teacherList").html(html)

                // 查看讲师详情
                $(".btn-xs").on('click',function(){
                    $.ajax({
                        url:'/api/teacher/view?tc_id=' + $(this).parent().data('id'),
                        type:"get",
                        success:function(data){
                            if(data.code === 200){
                                var html = template("teacher_view_tpl",data.result)
                                console.log(html)
                                $("#xiangqing").html(html)
                                //让模态框显示
                                $("#teacherModal").modal();
                            }
                        }
                    })
                })
            }
        }
    })

    


})
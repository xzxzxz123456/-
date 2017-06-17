
define(['jquery','template'],function($,template){
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function(data){
            if(data.code === 200){
                var  html = template( 'teacher_list_tpl' ,data)
                $("#teacherList").html(html)
            }
        }
    })
})
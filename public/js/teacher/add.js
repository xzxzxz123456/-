define(['jquery'], function ($) {

        $(".submit").on('click',function(){
     
            $.ajax({
                url:'/api/teacher/add',
                type:"post",
                data:{
                    tc_name:$('.teacherName').val(),
                    tc_pass:$('.teacherPass').val(),
                    tc_join_date:$('.teacherTime').val(),
                    tc_type:$('option:checked').attr('value'),
                    tc_gender:$('.radio:checked').val()
                },
                success:function(data){
                    alert("添加成功")
                    location.href='/teacher/list'
                }
            })

            return false;
        })

});
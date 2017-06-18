define(['jquery', 'template', 'form','datepicker','language'], function ($, template) {


    //原始方式 比较繁琐
    // try {
    //     var id = location.href.split('?')[1].split("=")[1]
    //     //  可以简化 直接用 location.search.substr(1)
    // } finally {
    //     // console.log(id)
    //     if (!id) {
    //         //添加讲师
    //         $(".submit").on('click', function () {

    //             $.ajax({
    //                 url: '/api/teacher/add',
    //                 type: "post",
    //                 data: {
    //                     tc_name: $('.teacherName').val(),
    //                     tc_pass: $('.teacherPass').val(),
    //                     tc_join_date: $('.teacherTime').val(),
    //                     tc_type: $('option:checked').attr('value'),
    //                     tc_gender: $('.radio:checked').val()
    //                 },
    //                 success: function (data) {
    //                     alert("添加成功")
    //                     location.href = '/teacher/list'
    //                 }
    //             })

    //             return false;
    //         })

    //     } else {
    //         //编辑讲师

    //         $(".submit").html('修改')
    //         $('.mima').css({ display: "none" })
    //         // 设置原来信息
    //         $.ajax({
    //             url: '/api/teacher/edit',
    //             type: "post",
    //             data: {
    //                 tc_id: id
    //             },
    //             success: function (data) {
    //                 // console.log(data)
    //                 if (data.code == 200) {
    //                     $('.teacherName').val(data.result.tc_name),
    //                     $('.teacherTime').val(data.result.tc_join_date),
    //                     $('option').val(data.result.tc_type).prop("checked", true),
    //                     // opcation $('option').val(data.result.tc_type) 直接这样就可以了
    //                     $('.radio').val(data.result.tc_gender).prop("checked", true)
    //                 }
    //             }
    //         })

    //         // 获取修改后的信息 然后ajax提交
    //         $(".submit").on('click', function () {
    //             $.ajax({
    //                 url: '/api/teacher/update',
    //                 type: "post",
    //                 data: {
    //                     tc_id: id,
    //                     tc_name: $('.teacherName').val(),
    //                     tc_join_date: $('.teacherTime').val(),
    //                     tc_type: $('option:checked').attr('value'),
    //                     tc_gender: $('.radio:checked').val()
    //                 },
    //                 success: function (data) {
    //                     alert("修改成功")
    //                     location.href = '/teacher/list'
    //                 }
    //             })

    //             return false;
    //         })

    //     }

    // }




    //简化版  插件版

    var id = location.search.substr(1).split("=")[1]
    console.log(id)
    // 封装函数获取id 

    if (id) {
        //编辑
        edit()
    } else {
        //添加
        add()
    }


    //编辑
    function edit() {
        $.ajax({
            url: '/api/teacher/edit?tc_id=' + id,
            type: "get",
            success: function (data) { 
                console.log(data)
                data.result.title = '讲师修改'
                data.result.url = '/api/teacher/update'
                data.result.isAdd = false
                data.result.btnTxt = '更 新'
                var html = template("teacher-add-edit-tpl", data.result)
                $(".teacher").html(html)
            }
        })

    }

    //添加
    function add() {
        var html = template("teacher-add-edit-tpl", {
            title: '讲师添加',
            url: '/api/teacher/add',
            isAdd: true,
            tc_gender: 0,
            btnTxt: "添加"
        })

        $(".teacher").html(html)
    }

    //请求数据
    $(".teacher").on('submit', 'form', function () {

        $(this).ajaxSubmit({
            type: 'post',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if (data.code == 200) {
                    // if (id) {
                    //     alert("修改成功")
                    // } else {
                    //     alert("添加成功")
                    // }
                    location.href = '/teacher/list'
                }
                
            }
        })
        return false;
    })


    //表单验证函数
    function validate(){
        
    }




});
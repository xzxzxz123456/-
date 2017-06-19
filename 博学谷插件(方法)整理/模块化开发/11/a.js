// 定义一个模块

//  注意 依赖项 和 后面的参数是一一对象的 所以 不传参数的放后面
define(['jquery'],function($){
    var a = $('<p>123</p>')
    console.log( a );
})
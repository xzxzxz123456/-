(function(){
    
require.config({
    baseUrl : '/public',

    paths : {
        jquery : 'assets/jquery/jquery.min',
        bootstrap : 'assets/bootstrap/js/bootstrap.min',
        nprogress : 'assets/nprogress/nprogress',
        echarts : 'assets/echarts/echarts.min',
        jqueryCookie : 'assets/jquery-cookie/jquery.cookie',
        template:'assets/artTemplate/template-web'
    },
    // 模块之间的依赖配置 
    // 因为 定义 模板  依赖项是 顺序是 不确定的 所以 要配置下
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
})

})()
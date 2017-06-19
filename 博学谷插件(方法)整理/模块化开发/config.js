    // 配置 require 路径 
require.config({
    baseUrl:'./11',
    paths:{
        a:'a',
        b:'b',
        jquery:'jquery-1.12.4'
    },
    //配置模块之间的依赖
    // shim:{
    //     bootstrap:{
    //         deps:['jquery']
    //     }
    // }
})
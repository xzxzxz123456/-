<?php
error_reporting(E_ALL & ~E_NOTICE);

//  1  获取 url 参数
$pathInfo = $_SERVER ['PATH_INFO'];  //      /index/inde

//  2  去掉 前面的第一个 /
$pathInfo =   substr($pathInfo,1);

// 切割成一个数组
$pathArr = explode ('/',$pathInfo );                                                                
// 获取到 文件夹名  和 文件名
$fordName = $pathArr [0];
$fileName = $pathArr [1];

// 判断下 用户输入的 个数  

if( count( $pathArr ) == 1){
    
    if( $fordName ){
        //注意  这里顺序不能换  因为 如果换了  $fileName   就永远都是 index 了
        $fileName = $fordName;
        $fordName = 'index' ;
    }else{
        $fordName = 'index' ;
        $fileName = 'index';
    }
};

//拼接下  
include '/views/'.$fordName.'/'.$fileName .'.html';
// print_r ( $pathArr )




?>
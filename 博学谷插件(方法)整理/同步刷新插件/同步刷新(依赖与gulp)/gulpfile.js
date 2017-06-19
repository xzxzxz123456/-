var  gulp = require("gulp"),
     html = require("gulp-htmlmin"),
     browserSync = require("browser-sync");

     // 下载  browser-sync 插件
     //其他的 方法和之前  一样 

     // 安装 //  引包 

     //  然后 同步刷新 要开启 browser-sync 服务 

    gulp.task("bs",function(){
        browserSync.init({
            server:{
                baseDir:'./'
            }
        })
    })
    // 监视 变化  
    gulp.watch("./index.html",['html'])


    gulp.task("html",function(){

        gulp.src("./index.html")
        .pipe( html({
            collapseWhitespace:true,
            minifyCSS:true,
            minifyJS:true
        }) )
        .pipe( gulp.dest('./a') )

        // 在最后加一句话
        // 文件渲染后 就同步到 浏览器  
        .pipe( browserSync.reload({stream:true}))
        // browserSync.reload({stream:true})
    })


    gulp.task('default', ['bs', 'html']);



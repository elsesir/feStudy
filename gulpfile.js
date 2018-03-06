/**
 * Created by bigWhite on 17/7/18.
 */
var gulp = require('gulp'); // 获取gulp
var uglify = require('gulp-uglify'); // 获取uglify 模块，用于压缩JS
var sass = require('gulp-sass'); // 获取gulp-ruby-sass模块，用于编译sass
// 压缩 js文件
// 在命令行使用 gulp sass 启动此任务
gulp.task('script', function() {
    // 找到文件
    gulp.src('js/*.js')
    // 压缩文件
        .pipe(uglify())
        // 另存压缩后的文件
        .pipe(gulp.dest('assets/js'))
});

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass',function() {
    gulp.src('./css/*.scss')
        .pipe(
            sass({
                // 编译格式
                outputStyle: 'compressed'
            }).on('error',sass.logError)
        )
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('default',function(){
    console.log('hello world');
});

gulp.task('auto', function() {
    // 监听文件修改，当前文件被修改则执行 script 任务
    gulp.watch('js/*.js', ['script']);
    gulp.watch('css/*.scss',['sass']);
});
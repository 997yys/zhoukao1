const gulp=require('gulp');
const webserver=require('gulp-webserver');
const minifycss=require('gulp-minify-css');
const concat=require('gulp-concat');
const rename=require('gulp-rename');
const sass=require('gulp-sass');
const format=require('./Script/date/data_format');
console.log(format)
gulp.task("minifycss",function(){
    gulp.src("./content/css/*.css")
    .pipe(concat("bunch.css"))
    .pipe(minifycss())
    .pipe(gulp.dest("./content/css"))
})
gulp.task("webserver",function(){
    gulp.src(".")
    .pipe(webserver({
        host:"localhost",
        port:8080,
        fillbase:"index.html"
    }))
})
gulp.watch();
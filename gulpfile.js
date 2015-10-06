/**
 * Created by Дмитрий on 01.10.2015.
 */
    //'use strict';

var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');

//css
gulp.task('css', function () {
        gulp.src('sass/style.scss')
        //.pipe(concatCSS("bundle.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions', '> 1%', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/bundle.min.css'))
        .pipe(livereload({ start: true }));
        //.pipe(notify('Done!'));
});

//html
gulp.task('html', function () {
    gulp.src('app/index.html')
        .pipe(livereload({ start: true }));
})

//watch
gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['css'])
    gulp.watch('app/index.html', ['html'])
});

//default
gulp.task('default', ['css', 'html', 'watch']);

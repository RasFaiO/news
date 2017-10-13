var gulp = require('gulp'),
server = require('gulp-server-livereload'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-clean-css');

gulp.task('news', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 8500
    }));
})
gulp.task('build-html', function () {
  return gulp.src(['*.html','pa*/*.html'])
      .pipe(useref())
      .pipe(gulpif('j*/*.js', uglify()))
      .pipe(gulpif('style*/**', minifyCss()))
      .pipe(gulp.dest('build'));
})
gulp.task('build-assets',function (){
  return gulp.src('asset*/im*/**').
  pipe(gulp.dest('build'))
})
gulp.task('build',['build-html','build-assets'])

var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./",
        },
    });  
});


gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch("./css/*.css").on('change', bs.reload);
    gulp.watch("./*.html").on('change', bs.reload);
     gulp.watch("./*.js").on('change', bs.reload);
});
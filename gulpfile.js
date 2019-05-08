const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');//minify js files
const minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Compile Sass
gulp.task('sass', function (done) {
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('public/css'));
    done();
});

// Images
gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

// Browser sync
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "http://localhost:3000/"
    });
});

// Watch for changes
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/*', gulp.series('images'));
});
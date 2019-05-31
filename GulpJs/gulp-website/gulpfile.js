var gulp = require('gulp');
var uglify = require('gulp-uglify');
// var watch = require('gulp-watch');

// File Paths
var SCRIPTS_PATH = 'public/scripts/**/*.js'

// Styles
gulp.task('styles', function () {
    console.log('starting styles task')
    return gulp.src('package.json');
});

// Scripts
gulp.task('scripts', function () {
    console.log('starting scripts task')

    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

// Images
gulp.task('images', function () {
    console.log('starting images task')
    return gulp.src('package.json');
});

gulp.task('default', function () {
    console.log('Starting default task')
    return gulp.src('package.json');
});

gulp.task('watch', function () {
    console.log('starting watch task')
    // return gulp.src('package.json');
    require('./server.js');
    gulp.watch(SCRIPTS_PATH, ['scripts']);
});
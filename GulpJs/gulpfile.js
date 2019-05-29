var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Styles
gulp.task('styles', function () {
    return gulp.src('package.json')
    console.log('starting styles task');
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('package.json')
    console.log('Starting scripts task');
})

// Images
gulp.task('images', function () {
    return gulp.src('package.json')
    console.log('Starting images task');
})

gulp.task('default', function () {
    return gulp.src('package.json')
    console.lof('Starting default task');
})
var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Styles
gulp.task('styles', function () {
    console.log('starting styles task')
    return gulp.src('package.json');
});

// Scripts
gulp.task('scripts', function () {
    console.log('starting scripts task')

    return gulp.src('public/scripts/*.js')
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
    console.log('Starting watch task');
});
var gulp = require('gulp');

// Styles
gulp.task('styles', function () {
    console.log('starting styles task')
    return gulp.src('package.json');
});

// Scripts
gulp.task('scripts', function () {
    console.log('starting scripts task')
    return gulp.src('package.json');
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
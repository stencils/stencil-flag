const gulp = require('gulp');
const util = require('gulp-util');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {

    var processors = [
        require('postcss-cssnext'),
        require('cssnano')
    ];

    if (util.env.prod) {
        return gulp.src('index.css')
            .pipe(postcss(processors))
            .pipe(gulp.dest('dist'));
    } else {
        return gulp.src('index.css')
            .pipe(sourcemaps.init())
            .pipe(postcss(processors))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist'));
    }
});

gulp.task('default', ['build']);

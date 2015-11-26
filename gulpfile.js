const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('default', ['clean'], () => {
  return gulp.src('src/entry.js')
    .pipe(webpack(require('./webpack/dev.config.js')))
    .pipe(gulp.dest('dist/'));
});

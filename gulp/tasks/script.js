const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rename = require("gulp-rename")

module.exports = function script() {
  return gulp.src('src/js/*.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
}

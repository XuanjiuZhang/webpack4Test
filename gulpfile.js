var gulp = require('gulp')
var del = require('del')

// 清空html
function cleanHtml() {
  return del([
    './dist/*.html'
  ])
}

// 复制html
function copyHtml() {
  return gulp.src(['./src/*.html'])
    .pipe(gulp.dest('./dist/'))
}

// 清空css
function cleanCss() {
  return del([
    './dist/style/*.css'
  ])
}

// 复制css
function copyCss() {
  return gulp.src(['./src/style/*.css'])
    .pipe(gulp.dest('./dist/style'))
}

// 清空img
function cleanImg() {
  return del([
    './dist/img/**/*'
  ])
}

// 复制img
function copyImg() {
  return gulp.src(['./src/img/**/*'])
    .pipe(gulp.dest('./dist/img'))
}

// 清空lib
function cleanLib() {
  return del([
    './dist/lib/**/*'
  ])
}

// 复制lib
function copyLib() {
  return gulp.src(['./src/lib/**/*'])
    .pipe(gulp.dest('./dist/lib'))
}

gulp.task('dist', gulp.series(
  cleanHtml,
  cleanCss,
  cleanImg,
  cleanLib,
  copyHtml,
  copyCss,
  copyImg,
  copyLib
))
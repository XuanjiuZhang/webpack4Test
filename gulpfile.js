var gulp = require('gulp')

function cleanDev() { console.log('kk') }
function cleanDist() { console.log('kk') }
function sprite() { console.log('kk') }
function compileCss() { console.log('kk') }
function compileJs() { console.log('kk') }
function copyHtml() { console.log('kk') }
function reversion() { console.log('kk') }
function replcae() { console.log('kk') }

gulp.task('dist', gulp.series(
  gulp.parallel(
    gulp.series(
      cleanDev,
      gulp.parallel(
        gulp.series(
          sprite,
          compileCss
        ),
        compileJs,
        copyHtml
      )
    ),
    cleanDist
  ),
  reversion,
  replcae
))
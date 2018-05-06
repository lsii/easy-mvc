require('./config/boot')
var gulp = require('gulp')
var browserSync = require('browser-sync')
var nodemon = require('gulp-nodemon')

// Run Nodemon and connect to BrowserSync
gulp.task('nodemon', (cb) => {
  var called = false
  var appScriptPath = $container.getPath('config/dev/app.js')
  return nodemon({

    // Nodemon the dev server
    script: appScriptPath,

    // Watch core server file(s) that require restart on change
    watch: ['config/**/*.*', 'app/**/*.*']
  })
    .on('start', function onStart () {
      // Ensure only one call
      if (!called) {
        called = true
        return cb()
      }
    })
    .on('restart', function onRestart () {
      // Reload connected browsers after a slight delay
      console.log('Reload')
      setTimeout(function () {
        browserSync.reload({
          stream: false
        })
      }, 1000)
    })
})

gulp.task('browser-sync', gulp.series('nodemon', (cb) => {
  // Config options: http://www.browsersync.io/docs/options/
  browserSync.init({

    // Watch the following files, inject changes or refresh
    files: ['public/assets/js/**/*.*', 'public/assets/css/**/*.*', 'public/assets/images/**/*.*'],

    // Proxy our Hapi app
    proxy: 'http://localhost:3000',
    // Use the following port for the proxied app to avoid clash
    port: 4000,
    reloadDelay: 500,
    injectChanges: true,
    open: false
  })
  console.log('Initiate BrowserSync')
  cb()
}))

// Build
gulp.task('default', gulp.series('browser-sync', (done) => {
  done()
}))

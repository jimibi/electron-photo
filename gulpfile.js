// get the dependencies
var childProcess = require('child_process');
var electron     = require('electron-prebuilt');
var gulp         = require('gulp');
//var jetpack      = require('fs-jetpack');
var usemin       = require('gulp-usemin');
var uglify       = require('gulp-uglify');

//var projectDir = jetpack;
//var srcDir     = projectDir.cwd('./app');
//var destDir    = projectDir.cwd('./build');

// create the gulp task
gulp.task('run', function () {
  childProcess.spawn(electron, ['.'], { stdio: 'inherit' });
});

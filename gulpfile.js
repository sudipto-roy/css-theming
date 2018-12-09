'use strict';

var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename');

var postcss = require('gulp-postcss'),
  atimport = require('postcss-import'),
  precss = require('precss'),
  customselectors = require('postcss-custom-selectors'),
  cssnext = require('postcss-cssnext'),
  cssnano = require('cssnano');

const CONFIG = require("./config.json");

// Default task
gulp.task('default', ['css'], function() {});

// Compile css
gulp.task('css', function() {
  var plugins = [
    atimport,
    precss,
    customselectors,
    cssnext
    // cssnano
  ];
  return gulp.src(CONFIG.paths.CSS.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.paths.CSS.dest));
});

// Watch for any file change
gulp.task('watch', ['css'], function() {});
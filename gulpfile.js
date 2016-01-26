'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');

var paths = {
    srcFiles: ['./index.js'],
    testFiles: ['./test/hashtable.js']
};

gulp.task('pre-test', function() {
    gulp.src(paths.srcFiles)
        .pipe(plumber())
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
});

gulp.task('test', ['pre-test'], function() {
    gulp.src(paths.testFiles)
        .pipe(plumber())
        .pipe(
            jasmine({
                verbose: false,
                includeStackTrace: true
            })
        )
        .pipe(
            istanbul.writeReports({
                dir: './coverage',
                reporters: [ 'lcov', 'json', 'text', 'text-summary' ],
                reportOpts: { dir: './coverage' }
            })
        )
        .pipe(
            istanbul.enforceThresholds({
                thresholds: { global: 50 }
            })
        )
});

gulp.task('coveralls', function() {
    gulp.src('./coverage/**/lcov.info')
        .pipe(coveralls())
});

// default task
gulp.task('default', ['test' ]);
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown')
var rename = require('gulp-rename')

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
                thresholds: { global: 90 }
            })
        )
});

gulp.task('coveralls', function() {
    gulp.src('./coverage/**/lcov.info')
        .pipe(plumber())
        .pipe(coveralls())
});
//{ template: fs.readFileSync('./readme.hbs', 'utf8') })
gulp.task('docs', function () {
    return gulp.src(paths.srcFiles)
        .pipe(plumber())
        .pipe(gulpJsdoc2md())
        .pipe(rename(function (path) {
            path.basename = 'API'
            path.extname = '.md'
        }))
        .pipe(gulp.dest('.'))
});

// default task
gulp.task('default', ['test' ]);
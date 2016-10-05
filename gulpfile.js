/* jshint node:true */
'use strict';

var process = require('process');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');

var SASS_PATH = './*/static/style/*/*.scss';

var JS_PATH = [
    './*/static/js/**/*.js',
    './*/static/js/**/*.html',
];

var SASS_DEPENDANCIES = [
    //'./node_modules/bootstrap/scss/'
];

var isProduction = process.env.NODE_ENV == 'production';

gulp.task('default', ['sass', 'webpack'], function() {
});

gulp.task('sass', function () {
    var options = {includePaths: SASS_DEPENDANCIES};

    var task = gulp.src(SASS_PATH);

    if (isProduction) {
        options.outputStyle = 'compressed';
    } else {
        task = task.pipe(sourcemaps.init());
    }

    task = task.pipe(sass(options).on('error', sass.logError));

    if (!isProduction) {
        task = task.pipe(sourcemaps.write());
    }

    return task.pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
    gulp.watch(SASS_PATH, ['sass']);
});

gulp.task('webpack', function(callback) {
    // run webpack
    webpack(
        require('./webpack.config.js'),
        function(err, stats) {
            if(err) throw new gutil.PluginError('webpack', err);
            gutil.log('[webpack]', stats.toString({
                // output options
            }));
            callback();
        }
    );
});

gulp.task('webpack:watch', function() {
    gulp.watch(JS_PATH, ['webpack']);
});

gulp.task('watch', ['sass:watch', 'webpack:watch'], function() {

});

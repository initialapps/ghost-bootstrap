const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const DEST = 'assets/';

// build the css assets
gulp.task('css', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',       
        'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        'node_modules/animate.css/animate.min.css'
      ])
      .pipe(concat('build.css'))
      .pipe(gulp.dest(DEST+'/css'))
      .pipe(browserSync.stream());
});

// build the js assets
gulp.task('scripts', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',      
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/fitvids/dist/fitvids.min.js',
        'node_modules/wowjs/dist/wow.min.js'
      ])
      .pipe(concat('build.js'))
      .pipe(gulp.dest(DEST+'/js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(DEST+'/js'))
      .pipe(browserSync.stream());
});

gulp.task('build', gulp.parallel('css', 'scripts'));
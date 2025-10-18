const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
    styles: {
        src: 'src/stylus/main.styl',
        watch: 'src/**/*.styl',
        dest: 'assets/css/'
    },
    scripts: {
        src: [
            'src/js/animations.js',
            'src/js/slider.js',
            'src/js/main.js'
        ],
        dest: 'assets/js/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'assets/img/'
    },
    php: {
        watch: 'src/**/*.php'
    }
};

// Clean assets
function clean() {
    return del(['assets/css/*', 'assets/js/*']);
}

// Compile Stylus to CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: false,
            'include css': true
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Concatenate and minify JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// Optimize images
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 80, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest(paths.images.dest));
}

// Watch files
function watchFiles() {
    browserSync.init({
        proxy: 'localhost/cnc-website/src/', // Adjust this to your local server
        notify: false,
        open: false
    });
    
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.php.watch).on('change', browserSync.reload);
}

// Build task
const build = gulp.series(
    clean,
    gulp.parallel(styles, scripts, images)
);

// Watch task
const watch = gulp.series(
    build,
    watchFiles
);

// Export tasks
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = build;
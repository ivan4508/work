const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');
const smartgrid = require('smart-grid');

const isDev = (process.argv.indexOf('--dev') !== -1);
const isProd = !isDev;
const isSync = (process.argv.indexOf('--sync') !== -1);

/*
	1. browserSync для html
	2. 
		gulp-uncss - удаление неиспользуемого css
		gulp-group-css-media-queries - соединение media-запрос
	3. по желанию pug html препроц
*/

/*
let cssFiles = [
	'./node_modules/normalize.css/normalize.css',
	'./scr01/src/css/base.css',
	'./scr01/src/css/grid.css',
	'./scr01/src/css/humans.css'
];
*/

function clear(){
	return del('build2/*');
}

function styles(){
	return gulp.src('./scr01/style/+(styles|styles-per|styles-ie9).less')
			   .pipe(gulpif(isDev, sourcemaps.init()))
			   .pipe(less())
			   //.pipe(concat('style.css'))
			   .pipe(gcmq())
			   .pipe(autoprefixer({
		            browsers: ['> 0.1%'],
		            cascade: false
		        }))
			   //.on('error', console.error.bind(console))
			   .pipe(gulpif(isProd, cleanCSS({
			   		level: 2
			   })))
			   .pipe(gulpif(isDev, sourcemaps.write()))
			   .pipe(gulp.dest('./build2/style'))
			   .pipe(gulpif(isSync, browserSync.stream()));
}

function img(){
	return gulp.src('./scr01/img/**/*')
			   .pipe(gulp.dest('./build2/img'))
}
function js(){
	return gulp.src('./scr01/src/**/*')
			   .pipe(gulp.dest('./build2/src'))
}
function font(){
	return gulp.src('./scr01/fonts/**/*')
			   .pipe(gulp.dest('./build2/fonts'))
}

function html(){
	return gulp.src('./scr01/*.html')
			   .pipe(gulp.dest('./build2'))
			   .pipe(gulpif(isSync, browserSync.stream()));
}

function watch(){
	if(isSync){
		browserSync.init({
	        server: {
	            baseDir: "./build2/",
	        }
	    });
	}

	gulp.watch('./scr01/style/**/*.less', styles);
	gulp.watch('./scr01/**/*.html', html);
	gulp.watch('./smartgrid.js', grid);
}

function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];

	let settings = require('./smartgrid.js');
	smartgrid('./scr01/style', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';
	smartgrid('./scr01/css', settings);

	done();
}

let build2 = gulp.series(clear, 
	gulp.parallel(styles, img, html, js, font)
);

gulp.task('build2', gulp.series(grid, build2));
gulp.task('watch', gulp.series(build2, watch));
gulp.task('grid', grid);
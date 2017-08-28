var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglifyjs'),
	concat = require('gulp-concat'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache =require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	rsync = require('gulp-rsync'),
	imageResize = require('gulp-image-resize'),
	pug = require('gulp-pug'),
	html2pug = require('gulp-html2pug');


gulp.task('pug', function buildHTML() {
  return gulp.src('app/pug/*.pug')
  	.pipe(pug({
  		pretty: true
  	}))
  	.pipe(gulp.dest('app/html'));
});

gulp.task('cpindex', function () {
	return gulp.src('app/html/index.html')
		.pipe(gulp.dest('app/'));
});

gulp.task('h2p', function() {
  return gulp.src('app/index.html')
  .pipe(html2pug())
  .pipe(gulp.dest('app/pug'));
});


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions',	'> 1%',	'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		'app/libs/owl.carousel/dist/owl.carousel.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: true
	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('img:min', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		prograssive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('img:resize', function(){
	gulp.src('app/img/diploms/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF}')
	.pipe(rename({suffix: '.thumbs'}))
	.pipe(imageResize({
		imageMagick: true,
		width : 300
	}))
	.pipe(gulp.dest('app/img/diploms/thumbs'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'pug', 'cpindex'], function () {
	gulp.watch('app/sass/**/*.sass', ['sass'], browserSync.reload);
	gulp.watch('app/pug/**/*.pug', ['pug'], browserSync.reload);
	gulp.watch('app/html/index.html', ['cpindex'], browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', /*'img:min'*/, 'sass', 'scripts'], function(){
	var buildCss = gulp.src([
			'app/css/libs.min.css',
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));


	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

		console.log(buildCss, buildFonts, buildJs, buildHtml);
});

gulp.task('deploy', function(){
	return gulp.src('./dist/**')
	.pipe(rsync({
		root: './dist',
		hostname: '',
		destination: 'name_folder_in_host/public_html',
		archive: true,
		silent: false,
		compress: true
	}));
});

gulp.task('deploy-img', function(){
	return gulp.src('./dist/img/**/*')
	.pipe(rsync({
		root: './dist',
		hostname: '',
		destination: 'name_folder_in_host/public_html/img',
		archive: true,
		silent: false,
		compress: true
	}));
});

//Default Gulp
var gulp = require('gulp');

// 
var gutil = require('gulp-util');

// Minifica JS
var uglify = require('gulp-uglify');

// Concatena arquivos 
var concat = require('gulp-concat');

// SASS
var sass = require('gulp-ruby-sass');

// Otimiza Imagens
var imagemin = require('gulp-imagemin');

// Minificar HTML
//var minifyHTML = require('gulp-minify-html');

// Sincroniza Navegadores e Dispositivos 
var browserSync = require('browser-sync');

// Sprite Image
var spritesmith = require('gulp.spritesmith');

// Define a pasta de produção
var directory = 'build';

// Scripts
gulp.task('scripts', function(){
	return gulp
	.src('src/js/scripts.js')
	.pipe(uglify())
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest(directory + '/js'));
});

// Sass
gulp.task('sass', function() {
	return sass('src/sass/', {style: 'compressed'})
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest(directory + '/css'));
});

// Compress Images
gulp.task('images', function(){
	return gulp
	.src('src/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest(directory + '/images'));
});

//Sprites
gulp.task('sprite', function() {
  var spriteData = gulp.src('src/sprites/*')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  spriteData.pipe(gulp.dest('build/sprites'));
});

// Minify HTML
/*gulp.task('minify-html', function(){
	var opts = {
		conditionals: true,
		spare:true
	};

	return gulp.src('*.html')
	.pipe(minifyHTML(opts))
	.pipe(concat('index.min.html'))
	.pipe(gulp.dest('build/'));
});*/

// Browser Sync
gulp.task('browser-sync', function() {
	browserSync.init(["index.html", "build/css/style.min.css", "build/js/scripts.min.js"], {
		server: {
			baseDir: "./"
		}
	});
});

// Watch 
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'images', 'browser-sync', 'sprite', 'watch']);
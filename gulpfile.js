	// Sass configuration
	var gulp = require('gulp');
	var concat = require('gulp-concat');
	var sass = require('gulp-sass');

	gulp.task('sass', function() {
	    gulp.src('src/css/*.scss') //路徑/*.scss
	        .pipe(concat('main.css')) //合并所有css到main.css
	        .pipe(sass().on('error', sass.logError)) //檢測錯誤
	        .pipe(gulp.dest('src/css/')) // 輸出資料夾

	});
	gulp.task('default', ['sass'], function() {
	    gulp.watch('src/css/*.scss', ['sass']); //監聽事項
	})
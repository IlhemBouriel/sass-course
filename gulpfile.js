const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles',()=> {
    /*Go to sass folder and compile the scss file with sass() function to css */
    return gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch',() =>{
    gulp.watch('./sass/**/*.scss',['styles']);
});

gulp.task('default',['styles']);
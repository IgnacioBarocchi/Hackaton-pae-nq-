import postcss from 'gulp-postcss';
import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

gulp.task('serve'['css'], () => {
  // @ts-ignore
  gulp.watch('./css/*.css', ['css']);
});

gulp.task('css', () => {
  const plugins = [autoprefixer(), cssnano()];

  return gulp
    .src('./src/style/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css'));
});

// @ts-ignore
gulp.task('default', ['serve']);

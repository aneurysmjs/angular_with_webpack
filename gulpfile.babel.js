'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack-stream';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';

let reload = () => serve.reload();
let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob) => {
   glob = glob || '';
   return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob) => {
   glob = glob || '';
   return path.join(root, 'app/components', glob); // app/components/{glob}
};

// map of all paths
let paths = {
   js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
   styl: resolveToApp('**/*.styl'), // stylesheets
   html: [
      resolveToApp('**/*.html'),
      path.join(root, 'index.html')
   ],
   entry: path.join(root, 'app/app.js'),
   output: root,
   blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', () => {
   return gulp.src(paths.entry)
      .pipe(webpack(require('./webpack.config')))
      .pipe(gulp.dest(paths.output));
});

gulp.task('serve', () => {
   serve({
      port: process.env.PORT || 3000,
      open: false,
      server: { baseDir: root }
   });
});

gulp.task('watch', () => {
   let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
   gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('default', (done) => {
   sync('webpack', 'serve', 'watch', done);
});
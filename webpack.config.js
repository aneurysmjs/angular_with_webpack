'use strict';

var path = require('path'),
    webpack = require('webpack'),
    node_modules = path.resolve(__dirname, 'node_modules'),
    pathToAngular = path.resolve(node_modules, 'angular/angular.min.js');

module.exports = {
   context: __dirname,
   entry: [
         './client/app/app.js'
      ],
   resolve: {
     alias: {
        //'angular': pathToAngular
     }
   },
   output: {
      path: __dirname + '/client/build',
      publicPath: 'http://localhost:3000/assets/[hash]',
      filename: 'bundle.js'
   },
   module: {
      preLoaders: [
         {
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: 'jshint-loader'
         }
      ],
      loaders: [
         {test: /\.html$/, loader: 'html', exclude: /node_modules/},
         {test: /\.css$/,  loader: 'style!css', exclude: /node_modules/},
         {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
         {test: /\.(jpe?g|png|gif|svg)$/i, loader:'url'}
      ],
     // norParse: [pathToAngular]
   }
};
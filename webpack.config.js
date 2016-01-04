'use strict';

var path = require('path');

var webpack = require('webpack');

module.exports = {
   //context: __dirname + '/client/app/app.js',
   entry:
      [
         'babel-polyfill',
         './client/app/app.js'
      ],
   output: {
      //path: __dirname + '/app/dist',
      //publicPath: '/',
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
         {
            test: /\.js$/,
            loader: 'babel',

            exclude: [
               path.resolve(__dirname, 'node_modules')
            ],
            // Options to configure babel with
            query: {
               plugins: ['transform-runtime'],
               presets: ['es2015', 'stage-0']
            }
         },
         {test: /\.html$/, loader: 'html', exclude: /node_modules/},
         {test: /\.css$/,  loader: 'style!css', exclude: /node_modules/},
         {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
         //{test: /\.(jpe?g|png|gif|svg)$/i, loader:'file'},
         //{test: /\.(jpe?g|png|gif|svg)$/i, loader:'file?name=[path][name].[hash].[ext]'}
         //{test: /\.(jpe?g|png|gif|svg)$/i, loader:'url?limit=25000'}
         //{test: /\.(jpe?g|png|gif|svg)$/i, loader:'url?name=assets/img/img-[hash:6].[ext]'}
         {test: /\.(jpe?g|png|gif|svg)$/i, loader:'url'}
      ]
   },
   plugins: [
      //new webpack.optimize.CommonsChunkPlugin('common.js')
   ],
   externals: {
      //angular: true
   }
};
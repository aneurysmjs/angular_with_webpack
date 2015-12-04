var path = require('path');

module.exports = {
   //context: __dirname + '/client/app/app.js',
   entry:
      [
         'babel-polyfill',
         './client/app/app.js'
      ],
   output: {
      //path: __dirname + '/app',
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            loader: "babel",

            exclude: [
               path.resolve(__dirname, "node_modules")
            ],
            // Options to configure babel with
            query: {
               plugins: ['transform-runtime'],
               presets: ['es2015', 'stage-0']
            }
         },
         {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
         {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
         {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
      ]
   }
};
var path = require('path');

module.exports = {
   context: __dirname + '/app',
   //entry: './index.js',
   entry:
      [
         'babel-polyfill',
         './index.js'
      ],
   output: {
      path: __dirname + '/app',
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         //{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
         {
            loader: "babel-loader",

            // Skip any files outside of your project's `app` directory
            include: [
               path.resolve(__dirname, "app")
            ],
            exclude: [
               path.resolve(__dirname, "node_modules")
            ],
            // Only run `.js` and `.jsx` files through Babel
            test: /\.jsx?$/,

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
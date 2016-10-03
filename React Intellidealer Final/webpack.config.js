var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './static/components/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  watch: true,
  resolve: {
    modulesDirectories: ['node_modules', 'modules'],
    extentions: ['', '.js']
  },
  devServer:{
    port:5000,
    inline:true
  },
  // plugins: process.env.NODE_ENV === 'production' ? [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin()
  // ] : [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPligin()
  // ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

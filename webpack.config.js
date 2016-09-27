var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
	'./app/main',
	],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer:{
	historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
	  exclude: /node_modules/,
	  include: path.resolve(__dirname, 'app'),
	  loader: 'babel'
    }]
  }
};

module.exports = config;
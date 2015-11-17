var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
  	'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
  	path.resolve(__dirname, 'client/src/index.js')
  ],
  output: {
      path: path.resolve(__dirname, 'client/dist'),
      filename: 'bundle.js',
  },
  plugins: [
  	new HtmlWebpackPlugin(),
  	new webpack.HotModuleReplacementPlugin()
  ],
  loaders: [
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'client')
    },
    {
      test: /\.css$/, // Only .css files
      loader: "style-loader!css-loader!postcss-loader"
    } 
  ],
  postcss: function () {
    return [autoprefixer];
  }
};
var path = require('path');
var webpack = require('webpack');
var postcssImport = require('postcss-import');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var rootDir = path.join(__dirname, '..');
var isomorphicConfig = require('./universal.config.js');
var isomorphicTools = require('webpack-isomorphic-tools/plugin');
var isomorphicTools = new isomorphicTools(isomorphicConfig).development()
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var host = (process.env.HOST || 'localhost');
var port = parseInt(process.env.PORT) + 1 || 3001;

module.exports = {
  devtool: 'source-map',
  context: rootDir,
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
    path.resolve(rootDir, 'src')
  ],
  output: {
    path: path.resolve(rootDir, '/dist'),
    publicPath: 'http://' + host + ':' + port + '/dist/',
    filename: 'bundle.js',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    isomorphicTools
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        // include: path.resolve(rootDir, 'src'),
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        include: path.resolve(rootDir, 'src'),
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: isomorphicTools.regular_expression('images'),
        loader: 'url-loader?limit=10240'
      },
      {
        test : /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'url-loader?limit=10240'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      require('postcss-clearfix'),
      require('postcss-mixins'),
      require('autoprefixer')({
        browsers: ['last 4 versions']
      }),
      require('postcss-custom-media'),
      require('postcss-css-variables'),
    ];
  },
  resolve: {
    alias: {
      assets: path.resolve(rootDir, 'src', 'assets'),
      components: path.resolve(rootDir, 'src', 'components'),
      css: path.resolve(rootDir, 'src', 'css'),
      src: path.resolve(rootDir, 'src'),
      utils: path.resolve(rootDir, 'src', 'utils'),
      views: path.resolve(rootDir, 'src', 'views'),
    }
  },

};
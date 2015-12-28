var path = require('path');
var webpack = require('webpack');
var postcssImport = require('postcss-import');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var rootDir = path.join(__dirname, '..');
var isomorphicConfig = require('./universal.config.js');
var isomorphicTools = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: rootDir,
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'normalize.css',
    path.resolve(rootDir, 'client', 'src', 'css', 'main.css'),
    path.resolve(rootDir, 'client', 'src')
  ],
  output: {
    path: path.resolve(rootDir, 'client/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new isomorphicTools(isomorphicConfig).development()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader", exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: 'react-hot',
        exclude: path.resolve(rootDir, 'node_modules'),
      },
      {
        test: /\.js?$/,
        exclude: path.resolve(rootDir, 'node_modules'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.css$/,
        loader: "css-loader!postcss-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  },
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      require('postcss-mixins'),
      require('autoprefixer'),
      require('postcss-custom-media'),
      require('postcss-css-variables'),
    ];
  },
  resolve: {
    alias: {
      components: path.resolve(rootDir, 'client', 'src', 'components'),
      views: path.resolve(rootDir, 'client', 'src', 'views'),
      assets: path.resolve(rootDir, 'client', 'src', 'assets'),
    }
  },

};
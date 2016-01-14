var path = require('path');
var webpack = require('webpack');
var postcssImport = require('postcss-import');
var isomorphicConfig = require('./universal.config.js');
var isomorphicTools = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var rootDir = path.join(__dirname, '..');

module.exports = {
  devtool: 'source-map',
  context: rootDir,
  entry: {
    bundle: [
     'babel-polyfill',
      path.resolve(rootDir, 'src'),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'history',
    ]
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js',
    pathinfo: true,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __CLIENT__: true,
      __SERVER__: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vender', 'vendor.[chunkhash].js'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new isomorphicTools(isomorphicConfig),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        include: path.resolve(rootDir, 'server', 'index.js')
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/i,
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
      require('postcss-clearfix'),
      require('postcss-mixins'),
      require('autoprefixer'),
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
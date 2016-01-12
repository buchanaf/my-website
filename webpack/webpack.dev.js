var path = require('path');
var webpack = require('webpack');
var postcssImport = require('postcss-import');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var rootDir = path.join(__dirname, '..');
var isomorphicConfig = require('./universal.config.js');
var isomorphicTools = require('webpack-isomorphic-tools/plugin');
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
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __CLIENT__: true,
      __SERVER__: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new isomorphicTools(isomorphicConfig).development(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
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
        loader: "style-loader!css-loader!postcss-loader"
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
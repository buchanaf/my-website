var path = require('path');
var webpack = require('webpack');
var postcssImport = require('postcss-import');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('client', 'src', 'index.html'),
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.js?$/,
        loader: 'react-hot',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.js?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      require('autoprefixer'),
      require('postcss-custom-media'),
      require('postcss-css-variables'),
    ];
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'client', 'src', 'components'),
      views: path.resolve(__dirname, 'client', 'src', 'views'),
      assets: path.resolve(__dirname, 'client', 'src', 'assets'),
    }
  },

};
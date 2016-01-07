var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.dev');
var compiler = webpack(webpackConfig);

var host = (process.env.HOST || 'localhost');
var port = parseInt(process.env.PORT) + 1 || 3001;

var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

var app = new express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function hotLoadingInit(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('Webpack development server listening on port %s', port);
  }
});
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path                 from 'path';
import config               from './webpack.config';
import render               from '../server';


const compiler = webpack(config);
const serverOptions = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, '..', 'client', 'dist'),
  stats: { colors: true, progress: true},
};

export default function universalServer(app) {
  app.use(webpackDevMiddleware(compiler, serverOptions));
  app.use(webpackHotMiddleware(compiler));
}
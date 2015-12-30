import isomorphicTools from 'webpack-isomorphic-tools';
import path            from 'path';
import universalConfig from '../webpack/universal.config.js';

const rootDir = path.resolve(__dirname, '..');
global.__DEVELOPMENT__ = true;
global.__CLIENT__ = true;
global.__SERVER__ = false;

global.isomorphicTools = new isomorphicTools(universalConfig)
  .development()
  .server(rootDir, function() {
    require('./render');
  })


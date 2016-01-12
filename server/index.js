import isomorphicTools from 'webpack-isomorphic-tools';
import universalConfig from '../webpack/universal.config.js';
import path from 'path';
import piping from 'piping';

const rootDir = path.resolve(__dirname, '..');

global.__DEVELOPMENT__ = true;
global.__CLIENT__ = false;
global.__SERVER__ = true;

global.isomorphicTools = new isomorphicTools(universalConfig)
  .development()
  .server(rootDir, function() {
    if (__DEVELOPMENT__) {
      if (!require('piping')({
          hook: true,
          ignore: /(\/\.|~$|\.svg|\.jpg|\.png|\.css$)/i
        })) {
        return;
      }
    }
    require('./router');
  });


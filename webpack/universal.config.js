var isomorphicTools = require('webpack-isomorphic-tools/plugin');
var path = require('path');
var rootDir = path.join(__dirname, '..');

module.exports = {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg'],
      parser: isomorphicTools.url_loader_parser
    },
    svg: {
      extension: 'svg',
      parser: isomorphicTools.url_loader_parser
    },
    style_modules: {
      extension: 'css',
      filter: function(module, regex, options, log) {
        if (options.development) {
          return isomorphicTools.style_loader_filter(module, regex, options, log);
        } else {
          return regex.test(module.name);
        }
      },
      path: isomorphicTools.style_loader_path_extractor,
      parser: isomorphicTools.css_loader_parser
    }
  },
  webpack_assets_file_path: 'webpack-assets.json',
  webpack_stats_file_path: 'webpack-stats.json',
  alias: {
    assets: path.resolve(rootDir, 'src', 'assets'),
    components: path.resolve(rootDir, 'src', 'components'),
    css: path.resolve(rootDir, 'src', 'css'),
    src: path.resolve(rootDir, 'src'),
    utils: path.resolve(rootDir, 'src', 'utils'),
  }
}
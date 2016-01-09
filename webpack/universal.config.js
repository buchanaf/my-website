var isomorphicTools = require('webpack-isomorphic-tools/plugin');
var path = require('path');
var rootDir = path.join(__dirname, '..');

module.exports = {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
    },
    style_modules: {
      extension: 'css',
      filter: function(module, regular_expression, options, log) {
        if (true) {
          return isomorphicTools.style_loader_filter(module, regular_expression, options, log)
        }
      },
      path: isomorphicTools.style_loader_path_extractor,
      parser: isomorphicTools.css_loader_parser
    }
  },
  webpack_assets_file_path: 'webpack-assets.json',
  webpack_stats_file_path: 'webpack-stats.json',
  alias: {
    components: path.resolve(rootDir, 'src', 'components'),
    views: path.resolve(rootDir, 'src', 'views'),
    assets: path.resolve(rootDir, 'src', 'assets'),
    utils: path.resolve(rootDir, 'src', 'utils'),
    css: path.resolve(rootDir, 'src', 'css'),
  }
}
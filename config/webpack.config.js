const path = require('path');

const rules = require('./webpack.rules');
const getPluginList = require('./webpack.plugins');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevMode ? 'development' : 'production',

  entry: {
    vendor: ['react', 'react-dom'],
    app: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      '~': path.resolve(__dirname, '..', 'node_modules'),
      components: path.resolve(__dirname, '..', 'src', 'components'),
      stores: path.resolve(__dirname, '..', 'src', 'stores'),
      pages: path.resolve(__dirname, '..', 'src', 'pages'),
      lib: path.resolve(__dirname, '..', 'src', 'lib'),
      API: path.resolve(__dirname, '..', 'src', 'API'),
      assets: path.resolve(__dirname, '..', 'src', 'assets'),
      constants: path.resolve(__dirname, '..', 'src', 'constants'),
    },
  },

  optimization: !isDevMode
    ? {
        minimize: true, // UglifyJsPlugin
        concatenateModules: true, // Tells webpack to find segments of the module graph which can be safely concatenated into a single module
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              enforce: true,
            },
          },
        },
      }
    : {},

  module: { rules },

  plugins: getPluginList(isDevMode),

  devtool: isDevMode ? 'inline-source-map' : 'cheap-module-source-map',

  devServer: isDevMode
    ? {
        contentBase: path.join(__dirname, '..', 'build'),
        index: 'index.html',
        port: 3000,
        host: '0.0.0.0',
        hot: true,
        historyApiFallback: true,
      }
    : {},
};

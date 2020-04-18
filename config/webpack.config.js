const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: [path.resolve(__dirname, '..', 'src', 'index.js')],
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    index: 'index.html',
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true,
  },
};

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      pages: path.resolve(__dirname, '..', 'src', 'pages'),
      lib: path.resolve(__dirname, '..', 'src', 'lib'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      // ts-loader
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
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

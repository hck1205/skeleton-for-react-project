const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      pages: path.resolve(__dirname, '..', 'src', 'pages'),
      lib: path.resolve(__dirname, '..', 'src', 'lib'),
      assets: path.resolve(__dirname, '..', 'src', 'assets'),
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

      // style-loader
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: path.resolve(__dirname, '..', 'node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: true },
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              prependData: `@import 'lib/index';`,
              sassOptions: {
                includePaths: [path.resolve(__dirname, '..', 'src', 'assets/styles')],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),

    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'styles.[contenthash:8].css',
      chunkFilename: 'styles.[contenthash:8].chunk.css',
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

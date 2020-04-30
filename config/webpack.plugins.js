const path = require('path');
const webpack = require('webpack');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Common Plugins
module.exports = (isDevMode) => {
  let pluginList = [
    // It removes old chunk files after webpack building
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build'],
    }),

    // build css files into styles and chunkfiles with hash naming
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, '..', 'build'),
      filename: 'styles/styles.[contenthash:8].css',
      chunkFilename: 'styles/styles.[contenthash:8].chunk.css',
    }),

    // Read index.html file and use it as a template for dev-server
    // Produce index.html when webpack build
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public', 'index.html'),
      //   favicon: path.resolve(__dirname, "../public", "favicon.ico")
    }),

    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: true, // Where loaders can be switched to minimize mode.
    }),
    new webpack.DefinePlugin({
      'process.env': {
        STAGE: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ];

  // Dev Plugins
  if (isDevMode) {
    pluginList.push(
      // Ts Type Checker
      new ForkTsCheckerWebpackPlugin({
        tsconfig: 'tsconfig.json',
      })
    );
    // Prod Plugins
  } else {
    pluginList.push(new CopyPlugin([{ from: 'public/robots.txt', to: 'robots.txt' }]));
  }

  return pluginList;
};

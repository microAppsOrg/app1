const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

import * as Common from './common';

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: {
      type: 'umd',
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      Common.createLessRule(),
      Common.createTsRule(),
      Common.createJsxRule(),
      Common.createAssetsRule(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
  ],
  devServer: {
    port: 8088,
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};

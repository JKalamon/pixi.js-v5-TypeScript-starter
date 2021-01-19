const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('webpack');
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
  context: ROOT,

  entry: {
    main: './main.ts'
  },

  output: {
    filename: '[name].bundle.js',
    path: DESTINATION,
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ROOT, 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PIXI.js with typescript starter',
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader',
      },
    ],
  },

  devtool: 'cheap-module-source-map',
  devServer: {},
};

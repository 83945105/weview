'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const multiPageHelper = require('../static/conf/multiPageHelper');

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    ...multiPageHelper.getThemes()
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "less-loader"
            }
          ]
        })
      }
    ]
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../lib/theme-chalk'),
    filename: path.posix.join('', '[name].css')
  },
  resolve: {
    extensions: ['.less']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig

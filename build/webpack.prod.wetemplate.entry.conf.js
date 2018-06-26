'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const glob = require('glob');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const env = process.env.NODE_ENV === 'testing'
  ? {
    NODE_ENV: '"testing"'
  }
  : {
    NODE_ENV: '"production"'
  };

const webpackConfig = {
  entry: {
    ...function () {
      let entries = {
        index: './wetemplate/packages/index.js'
      };
      glob.sync(`./wetemplate/packages/*/index.js`).forEach(f => {
        let name = f.match(new RegExp(`wetemplate\/packages\/(\\S*)\/index.js`))[1];
        entries[`${name}`] = f;
      });
      return entries;
    }()
  },
  context: path.resolve(__dirname, '../'),
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../wetemplate/lib'),
    filename: path.posix.join('', '[name].js'),
    publicPath: '/',
    library: 'wetemplate',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('wetemplate/packages'),
    }
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [
      ...utils.styleLoaders({
        sourceMap: false,
        extract: true,
        usePostCSS: true
      }),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('wetemplate/packages'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
};

module.exports = webpackConfig;

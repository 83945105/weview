/*!
 * Title: 构建多页应用
 * Description:
 * author: 白超
 * date: 2017/12/6
 * version: v1.0
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 入口文件前置路径
 * 注意,默认从src目录开始
 * 开头结尾不要带/
 */
const entriesBasePath = 'page';
/**
 * 入口文件名称
 */
const entriesJsName = 'index';
/**
 * html模板名称
 */
const htmlName = 'index';

const entryNames = [];
/**
 * 获取入口配置对象
 */
exports.getEntries = function () {
  let entries = {};
  glob.sync(`./packages/*/${entriesJsName}.js`).forEach(f => {
    console.log(f)
    let name = f.match(new RegExp(`packages\/(\\S*)\/${entriesJsName}.js`))[1];
    entries[`${name}`] = f;
    entryNames.push(name);
  });
  return entries;
};

/**
 * 获取prod时html配置信息
 */
/*
exports.getProdHtmlWebpackPlugins = function () {
  let prod = [];
  entryNames.forEach(n => {
    prod.push(new HtmlWebpackPlugin({
      filename: `${buildConf.assetsSubDirectory}/${buildConf.htmlsSubDirectory}/${n}/${htmlName}.html`,//该路径影响访问路径和打包路径
      template: path.join(__dirname, `../../src/${entriesBasePath}/${n}/${htmlName}.html`),
      inject: true,
      chunksSortMode: 'manual',//手动排序chunks
      chunks: [...new function () {
        let chunks = [];
        let vendors = buildConf.vendors;
        for (let vendor in vendors) {
          if(!Array.isArray(vendors[vendor].owners)) {
            throw new Error(`vendors ${vendor} owners属性必须是数组`);
          }
          for (let owner of vendors[vendor].owners) {
            if(owner === n) {
              chunks.push(vendor);
            }
          }
        }
        return chunks;
      }(), n]
    }));
  });
  return prod;
};
*/

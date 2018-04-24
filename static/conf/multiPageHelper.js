/*!
 * Title: 构建多页应用
 * Description:
 * author: 白超
 * date: 2017/12/6
 * version: v1.0
 */
const glob = require('glob');

/**
 * 入口文件名称
 */
const entriesJsName = 'index';

/**
 * 获取实体入口配置对象
 */
exports.getEntries = function () {
  let entries = {
    index: './packages/index.js'
  };
  glob.sync(`./packages/*/${entriesJsName}.js`).forEach(f => {
    let name = f.match(new RegExp(`packages\/(\\S*)\/${entriesJsName}.js`))[1];
    entries[`${name}`] = f;
  });
  return entries;
};

/**
 * 获取主题入口配置对象
 */
exports.getThemes = function () {
  let entries = {};
  glob.sync(`./packages/theme-chalk/*.less`).forEach(f => {
    let name = f.match(new RegExp(`packages\/theme-chalk\/(\\S*).less`))[1];
    entries[`${name}`] = f;
  });
  return entries;
};

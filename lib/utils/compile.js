const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const { error } = require("./log");

const ejsCompile = (templatePath, data = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, options, (err, result) => {
      if (err) {
        reject(err);
        error(err);
        return;
      }
      resolve(result);
    });
  });
};

const writeToFile = (path, content) => {
  if (fs.existsSync(path)) {
    error(`${path} already exists~`);
    return;
  }
  return fs.promises.writeFile(path, content);
};

const mkdirSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    // 不存在,判断父亲文件夹是否存在？
    if (mkdirSync(path.dirname(dirname))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(dirname);
      return true;
    }
  }
};

module.exports = {
  ejsCompile,
  writeToFile,
  mkdirSync,
};

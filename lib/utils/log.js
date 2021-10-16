const chalk = require("chalk");

const hint = (...info) => {
  console.log(chalk.bgGreen(info));
};

const info = (...info) => {
  console.log(chalk.blue(info));
};

const error = (...info) => {
  console.log(chalk.red(info));
};

/**
 * @description 清除命令行输出
 */
const clear = () => {
  console.clear();
};

module.exports = {
  hint,
  error,
  clear,
  info,
};

const { promisify } = require("util");
const chalk = require("chalk");
const path = require("path");
const open = require("open");
const downloadRepo = promisify(require("download-git-repo")); //https://www.npmjs.com/package/download-git-repo
const { vueRepo } = require("../config/repo_config");
const { commandSpawn } = require("../utils/terminal");
const { ejsCompile, writeToFile, mkdirSync } = require("../utils/compile");
const log = require("../utils/log");

// create命令 创建/拉取 项目模版
const createProjectAction = async (project) => {
  log.info(`✨  Creating project in ${chalk.yellow(project)}.`);
  // 1.从远程拉下项目
  await downloadRepo(vueRepo, project, { clone: true });

  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  log.info(`📦  Installing additional dependencies...`);
  // 2.执行npm i
  await commandSpawn(command, ["install"], { cwd: `./${project}` });

  log.info(`🚀  Invoking generators...`);
  // 3.执行npm run serve
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });
  log(`🎉  Successfully created project ${chalk.yellow(project)}.`);
  // TODO 打开浏览器，注意上方进程若使用await 会阻塞open,可以使用webpack打开自动打开项目
  // open("http://localchost:8080/");
};

const handleEjsToFile = async (name, dest, template, filename) => {
  const templatePath = path.resolve(__dirname, template);
  const data = {
    name,
    lowerName: name.toLowerCase(),
  };
  let res = await ejsCompile(templatePath, data);
  // 若不存在文件，就创建文件夹
  mkdirSync(dest);
  const targetPath = path.resolve(dest, filename);
  writeToFile(targetPath, res);
};

// addCpn命令 添加组件
const addComponent = async (name, dest) => {
  // 1.创建模版
  // 2.编译ejs
  // 3.写入文件
  handleEjsToFile(name, dest, "../templates/vue-component.ejs", `${name}.vue`);
};

// addpage命令 添加页面
const addPage = async (name, dest) => {
  addComponent(name, dest);
  handleEjsToFile(name, dest, "../templates/vue-router.ejs", "router.js");
};

// addstore命令 添加vuex仓库
const addStore = async (name, dest) => {
  handleEjsToFile(name, dest, "../templates/vue-store.ejs", "index.js");
  handleEjsToFile(name, dest, "../templates/vue-types.ejs", "types.js");
};

module.exports = {
  createProjectAction,
  addComponent,
  addPage,
  addStore,
};

#!/usr/bin/env node
const program = require("commander");
const helpOpthins = require("./lib/core/help");
const createCommands = require("./lib/core/create");

// 查看版本号
program.version(require("./package.json").version);

// 帮助和可选信息
helpOpthins();

// 创建create指令
createCommands();

program.parse(process.argv);

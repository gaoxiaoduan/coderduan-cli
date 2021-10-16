const program = require("commander");
const {
  createProjectAction,
  addComponent,
  addPage,
  addStore,
} = require("./actions");

const createCommands = () => {
  // 创建create 指令
  program
    .command("create <projectName> [Others...]")
    .description("clone a repository into a folder")
    .action(createProjectAction);

  // 创建addcpn 指令
  program
    .command("addcpn <name>")
    .description(
      "add vue component,例如：duan addcpn NavBar [-d src/components]"
    )
    .action((name) => {
      addComponent(name, program.dest || "src/components");
    });

  // 创建addpage 指令
  program
    .command("addpage <name>")
    .description("add vue page,例如：duan addpage helloWorld [-d src/pages]")
    .action((name) => {
      addPage(name, program.dest || `src/pages/${name.toLowerCase()}`);
    });

  // 创建addstore 指令
  program
    .command("addstore <name>")
    .description("add vuex store,例如：duan addstore user [-d src/store]")
    .action((name) => {
      addStore(name, program.dest || `src/store/modules/${name.toLowerCase()}`);
    });
};

module.exports = createCommands;

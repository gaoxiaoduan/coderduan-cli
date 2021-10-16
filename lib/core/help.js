const program = require("commander");

const helpOpthins = () => {
  program.option("-duan, --duan", "a duan cli");
  program.option(
    "-d, --dest <dest>",
    "a destination folder,例如: /src/components"
  );

  program.on("--help", () => {
    console.log("");
    console.log("Other:");
    console.log(" other options~");
  });
};

module.exports = helpOpthins;

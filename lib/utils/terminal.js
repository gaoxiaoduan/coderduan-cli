const spawn = require("child_process").spawn;

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const child_process = spawn(...args);
    child_process.stdout.pipe(process.stdout);
    child_process.stderr.pipe(process.stderr);

    child_process.on("close", () => {
      resolve();
    });
  });
};

module.exports = {
  commandSpawn,
};

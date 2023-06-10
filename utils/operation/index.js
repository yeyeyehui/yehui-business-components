const crossSpawn = require("cross-spawn");

const { error, greenBright, blueBright } = require("../chalk");

const inquirer = require("../inquirer");

// const progress = require("../progress");

const { node } = process.versions;

if (node.split(".")[0] < 16) {
  error(`您正在运行Node${node}\n组件库要求节点16及以上\n建议(16.4.0)\n请更新您的Node版本`);
  process.exit(1);
}

(async () => {
  const command = await inquirer();
  // console.log(command, args.join(" "), "命令执行中...");
  // const progressAvg = progress.start();

  console.log(blueBright(`${command} - 命令执行中...`));

  const result = crossSpawn.sync(command, { stdio: "inherit", shell: true });

  // console.log(result, "result");

  // console.log(greenBright(`命令执行完毕!`));

  // progress.stop(progressAvg);
})();

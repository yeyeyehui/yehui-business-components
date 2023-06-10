const shell = require("shelljs");

const { error, greenBright, blueBright } = require("../chalk");

const inquirer = require("../inquirer");

const progress = require("../progress");

const { node } = process.versions;

if (node.split(".")[0] < 16) {
  error(`您正在运行Node${node}\n组件库要求节点16及以上\n建议(16.4.0)\n请更新您的Node版本`);
  process.exit(1);
}

(async () => {
  const command = await inquirer();

  const progressAvg = progress.start();

  console.log(blueBright(`命令执行中...`));

  shell.exec(command);

  console.log(greenBright(`命令执行完毕!`));

  progress.stop(progressAvg);
})();

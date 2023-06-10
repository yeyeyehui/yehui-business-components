const fs = require("fs-extra");

const inquirer = require("inquirer");

const { error } = require("../chalk");

const {
  DEPENDENCY,
  ENVIRONMENT,
  DIRECTORY,
  PROMPTS,
  PACKAGES_LIST,
  GIT,
  GIT_TYPE,
  GIT_SCOPES,
  DESCRIPTION,
  CONFIRM_COMMIT,
} = require("./constant");

module.exports = async () => {
  const commandList = [];

  const { operation } = await inquirer.prompt([PROMPTS]);

  if (["pnpm add", "pnpm remove"].includes(operation)) {
    commandList.push(operation);

    let packagesDir = fs.readdirSync("packages");

    packagesDir.forEach((name) => {
      if (name.startsWith(".")) return;

      DIRECTORY.choices.push(PACKAGES_LIST(name));
    });

    const { directoryName, dependencyName, env } = await inquirer.prompt([
      DIRECTORY,
      DEPENDENCY,
      ENVIRONMENT,
    ]);

    commandList.push(dependencyName, env, directoryName);
  } else if (["git"].includes(operation)) {
    const { git } = await inquirer.prompt([GIT]);

    if (!git[0]) {
      error("选择你要提交的命令!");
      process.exit(1);
    }

    if (git.includes("git commit -m")) {
      const { gitType, gitScopes, description } = await inquirer.prompt([
        GIT_TYPE,
        GIT_SCOPES,
        DESCRIPTION,
      ]);

      if (!description) {
        error("请填写简短精炼的变更描述");
        process.exit(1);
      }

      git.forEach((res, index) => {
        if (res === "git commit -m")
          git[index] = `${res} "${gitType}(${gitScopes}): ${description}"`;
      });
    }

    const { confirmCommit } = await inquirer.prompt([CONFIRM_COMMIT]);

    if (!confirmCommit) process.exit(1);

    commandList.push(git.join(" && "));
  } else {
    commandList.push(operation);
  }

  return commandList.join(" ");
};

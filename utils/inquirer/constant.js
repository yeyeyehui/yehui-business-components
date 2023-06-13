const PROMPTS = {
  name: "operation",
  type: "list",
  loop: false,
  message: `请选择需要执行的操作:`,
  choices: [
    {
      name: "start:   启动项目",
      value: "pnpm -C",
    },
    {
      name: "git:     提交代码",
      value: "git",
    },
    {
      name: "add:     添加依赖",
      value: "pnpm add",
    },
    {
      name: "remove:  移除依赖",
      value: "pnpm remove",
    },
    // {
    //   name: "install: 下载node_modules",
    //   value: "pnpm install",
    // },
    {
      name: "clean:   删除node_modules",
      value: "rm -rf node_modules **/*/node_modules && pnpm store prune",
    },
  ],
};

const DEPENDENCY = {
  name: "dependencyName",
  type: "input",
  message: `请输入依赖名称:`,
};

const ENVIRONMENT = {
  name: "env",
  type: "list",
  message: `请选择依赖环境:`,
  choices: [
    {
      name: "dev:   开发依赖",
      value: "-D",
    },
    {
      name: "pro:   生产依赖",
      value: "-s",
    },
  ],
};

const DIRECTORY = {
  name: "directoryName",
  type: "list",
  message: `请选择需要安装依赖的项目:`,
  choices: [
    {
      name: "root:     根目录项目",
      value: "-w",
    },
  ],
};

const PACKAGES_LIST = (name) => {
  return {
    name: `packages: ${name}项目`,
    value: `--filter ./packages/${name}`,
  };
};

const GIT = {
  name: "git",
  type: "checkbox",
  message: `选择你要提交的命令:`,
  choices: [
    { value: "git add .", name: "add:     代码暂存" },
    { value: "git commit -m", name: "commit:  代码提交" },
    { value: "git push", name: "push:    代码发布" },
  ],
};

const GIT_TYPE = {
  name: "gitType",
  type: "list",
  message: `选择你要提交的类型:`,
  loop: false,
  choices: [
    { value: "feat", name: "feat:     新增功能" },
    { value: "fix", name: "fix:      修复 bug" },
    { value: "docs", name: "docs:     文档变更" },
    {
      value: "style",
      name: "style:    代码格式（不影响功能，例如空格、分号等格式修正）",
    },
    {
      value: "refactor",
      name: "refactor: 代码重构（不包括 bug 修复、功能新增）",
    },
    { value: "perf", name: "perf:     性能优化" },
    { value: "test", name: "test:     添加、修改测试用例" },
    {
      value: "build",
      name: "build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
    },
    { value: "ci", name: "ci:       修改 CI 配置、脚本" },
    {
      value: "chore",
      name: "chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）",
    },
    { value: "revert", name: "revert:   回滚 commit" },
  ],
};

const GIT_SCOPES = {
  name: "gitScopes",
  type: "list",
  loop: false,
  message: `选择一个 scope :`,
  choices: [
    { value: "components", name: "components:   组件相关" },
    { value: "deps", name: "deps:         项目依赖" },
    { value: "hooks", name: "hooks:        hook相关" },
    { value: "utils", name: "utils:        方法相关" },
    { value: "ui", name: "ui:           对ui的调整" },
    { value: "styles", name: "styles:       样式相关" },
    { value: "auth", name: "auth:         对角色修改" },
    { value: "other", name: "other:        其他修改" },
  ],
};

const DESCRIPTION = {
  name: "description",
  type: "input",
  message: `填写简短精炼的变更描述: `,
};

const CONFIRM_COMMIT = {
  name: "confirmCommit",
  type: "confirm",
  message: `确认提交？`,
};

module.exports = {
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
};

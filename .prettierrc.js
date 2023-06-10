module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-packagejson"),
  ],
  proseWrap: "never",
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  semi: true,
  endOfLine: "lf",
  "prettier.semi": true,
  overrides: [
    {
      files: "*.md",
      options: {
        proseWrap: "preserve",
      },
    },
  ],
};

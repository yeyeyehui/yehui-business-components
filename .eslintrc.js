module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    // "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0,
    "no-var": "error",
    "no-extra-semi": "error",
    "@typescript-eslint/indent": ["error", 2],
    "no-shadow": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/function-component-definition": 0,
  },
};

import { defineConfig } from "dumi";

// https://d.umijs.org/guide/initialize
export default defineConfig({
  outputPath: "docs-dist",
  monorepoRedirect: {
    srcDir: ["../components-pro"],
  },
  themeConfig: {
    name: "yehui-ui",
    footer: false,
    footerConfig: false,
  },
});

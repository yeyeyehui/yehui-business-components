import { defineConfig } from "dumi";

import { defineThemeConfig } from "dumi-theme-chakra";

// https://d.umijs.org/guide/initialize
export default defineConfig({
  outputPath: "docs-dist",
  monorepoRedirect: {
    srcDir: ["../components-pro"],
  },
  themeConfig: {
    name: "1",
    ...defineThemeConfig({}),
  },
});

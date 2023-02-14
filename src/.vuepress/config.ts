import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  port: 8686,

  base: "/docs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs",
      description: "A docs for ChineseYouthX"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档",
      description: "ChineseYouthX 的文档"
    }
  },

  theme,

  shouldPrefetch: false
});

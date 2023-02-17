import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  port: 8686,

  base: "/",

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "文档库",
      description: "ChineseYouthX 的文档"
    },
    "/": {
      lang: "en-US",
      title: "文档库",
      description: "A docs for ChineseYouthX"
    }
  },

  theme,

  shouldPrefetch: false
});

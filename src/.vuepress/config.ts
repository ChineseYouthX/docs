import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  port: 8686,

  base: "/docs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "文档库",
      description: "ChineseYouthX 的文档"
    }
  },

  theme,

  shouldPrefetch: false
});

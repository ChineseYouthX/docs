import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "前端", icon: "vue", link: "/zh/frontEnd/" },
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/zh/notes/",
    children: ["git","nodeJs"],
  },
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);

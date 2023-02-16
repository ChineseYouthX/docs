import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "vue",
      text: "前端",
      prefix: "frontEnd/",
      link: "frontEnd/",
      children: "structure",
    },
    {
      icon: "code",
      text: "代码笔记",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "演示",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    // {
    //   text: "文档",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
});

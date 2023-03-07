import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "html",
      text: "前端",
      prefix: "front-end/",
      link: "front-end/",
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
      icon: "tag",
      text: "书签",
      prefix: "bookmark/",
      link: "bookmark/",
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

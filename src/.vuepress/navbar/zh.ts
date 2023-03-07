import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  { text: '前端', icon: 'html', link: '/front-end/' },
  {
    text: '代码笔记',
    icon: 'code',
    prefix: '/notes/',
    children: ['vue', 'git', 'node-js']
  },
  {
    text: '书签',
    icon: 'tag',
    link: '/bookmark/'
  },
  { text: '演示', icon: 'discover', link: '/demo/' }
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
])

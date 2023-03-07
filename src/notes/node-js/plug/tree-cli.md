---
# 这是文章的标题
title: tree-cli
# 这是侧边栏的顺序
order: 1
# 设置作者
author: ChineseYouthX
# 设置写作时间
date: 2023-02-16
# 一个页面可以有多个分类
category:
  - node.js
# 一个页面可以有多个标签
tag:
  - node.js 插件
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## 介绍

[tree-cli](https://github.com/MrRaindrop/tree-cli) 是 windows 自动生成目录树结构的一个 node.js 插件

## 安装
```bash
npm install -g tree-cli
```

## 参数
[使用文档](https://github.com/MrRaindrop/tree-cli)
```bash
--help: outputs a verbose usage listing.
--version: outputs the version of tree-cli.
--debug: show debug info.
--fullpath: prints the full path prefix for each file.
--ignore: ignores directory or file you specify - accepts arrays as comma-delimited strings: 'node_modules/, .git/, .gitignore'
--link: follows symbolic links if they point to directories, as if they were directories. Symbolic links that will result in recursion are avoided when detected.
--noreport: omits printing of the file and directory report at the end of the tree listing and omits printing the tree on console.
--base: specify a root directory. Relative path from cwd root and absolute path are both acceptable. This argument is optional.
-a: all files are printed. By default tree does not print hidden files (those beginning with a dot '.'). In no event does tree print the file system constructs '.' (current directory) and '..' (previous directory).
-d: list directories only.
-f: append a '/' for directories, a '=' for socket files and a '|' for FIFOs.
-i: makes tree not print the indentation lines, useful when used in conjunction with the -f option.
-l: max display depth of the directory tree.
-o: send output to filename.

```

## 使用
::: info 注意
tree 命令被windows占用，需要使用 treee

```bash
treee -a -o tree.md
```

:::

## 结果

```bash
E:\***\***\docs
├── .git
├── .github
├── .gitignore
├── node_modules
├── pnpm-lock.yaml       
├── README.md
├── src
└── package.json
```
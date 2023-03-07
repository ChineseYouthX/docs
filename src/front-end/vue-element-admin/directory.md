---
# 这是文章的标题
title: 目录结构
# 这是页面的图标
order: 1
# 设置作者
author: ChineseYouthX
# 设置写作时间
date: 2023-03-06
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - vue-admin
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

```text            
vue-element-admin project
├── build                      # 构建相关
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store 管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .editorconfig              # 编码配置
├── .env.development           # 开发环境
├── .env.oss                   # oss 环境
├── .env.production            # 生产环境
├── .eslintignore              # eslint 忽略
├── .eslintrc.js               # eslint 配置
├── .gitignore                 # git 忽略
├── .gitlab-ci.yml             # 自动化CI配置
├── .postcssrc.js              # postcss 配置
├── babel.config.js            # babel-loader 配置
├── package.json               # package.json
├── README.md                  # README.md
├── vue.config.js              # vue-cli 配置
└── yarn.lock                  # yarn 锁包

```

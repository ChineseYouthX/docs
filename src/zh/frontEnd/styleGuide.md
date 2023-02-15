---
# 这是文章的标题
title: 风格指南
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 2
# 设置作者
author: ChineseYouthX
# 设置写作时间
date: 2023-02-15
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - 风格指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## uni-app

### 文件结构

## 中后台管理系统

### 文件结构

```text
admin-template
├─.editorconfig
├─.env.development
├─.env.oss
├─.env.production
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.gitlab-ci.yml
├─.postcssrc.js
├─babel.config.js
├─package.json
├─README.md
├─vue.config.js
├─yarn.lock
├─src
|  ├─main.js
|  ├─permission.js
|  ├─views
|  |   ├─redirect
|  |   |    └index.vue
|  |   ├─monitorManagement
|  |   |         ├─monitorList
|  |   ├─home
|  |   |  └index.vue
|  |   ├─errorPage
|  |   |     └404.vue
|  ├─utils
|  |   └index.js
|  ├─store
|  |   ├─getters.js
|  |   ├─index.js
|  |   ├─modules
|  |   |    ├─app.js
|  |   |    ├─permission.js
|  |   |    ├─settings.js
|  |   |    ├─tagsView.js
|  |   |    └user.js
|  ├─router
|  |   ├─index.js
|  |   ├─modules
|  |   |    └system.js
|  ├─mixin
|  |   └index.js
|  ├─layout
|  |   ├─index.vue
|  |   ├─mixin
|  |   |   └ResizeHandler.js
|  |   ├─components
|  |   |     ├─AppMain.vue
|  |   |     ├─index.js
|  |   |     ├─Navbar.vue
|  |   |     ├─TagsView
|  |   |     |    ├─index.vue
|  |   |     |    └ScrollPane.vue
|  |   |     ├─Sidebar
|  |   |     |    ├─FixiOSBug.js
|  |   |     |    ├─index.vue
|  |   |     |    ├─Item.vue
|  |   |     |    ├─Link.vue
|  |   |     |    ├─Logo.vue
|  |   |     |    └SidebarItem.vue
|  |   |     ├─Settings
|  |   |     |    └index.vue
|  ├─icons
|  |   ├─index.js
|  |   ├─svgo.yml
|  |   ├─svg
|  |   |  ├─404.svg
|  |   |  ├─browser.svg
|  |   |  ├─bug.svg
|  |   |  ├─exit-fullscreen.svg
|  |   |  ├─fullscreen.svg
|  |   |  ├─iPad.svg
|  |   |  ├─pc.svg
|  |   |  ├─phone.svg
|  |   |  ├─size.svg
|  |   |  ├─system.svg
|  |   |  └user.svg
|  ├─filters
|  |    └index.js
|  ├─components
|  |     ├─globalComponents.js
|  |     ├─ImportXLSX
|  |     |     └index.vue
|  ├─assets
|  |   ├─default
|  |   |    ├─avatar.png
|  |   |    └logo.png
|  |   ├─custom-theme
|  |   |      ├─index.css
|  |   |      ├─fonts
|  |   |      |   ├─element-icons.ttf
|  |   |      |   └element-icons.woff
|  |   ├─404_images
|  |   |     ├─404.png
|  |   |     └404_cloud.png
|  ├─api
|  |  └index.js
├─public
|   ├─favicon.ico
|   ├─index.html
|   └upgrade.html
├─build
|   └index.js
```
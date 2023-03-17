---
# 这是文章的标题
title: router
# 这是页面的图标
# icon: 
# 这是侧边栏的顺序
order: 3
# 设置作者
author: ChineseYouthX
# 设置写作时间
date: 2023-03-16
# 一个页面可以有多个分类
category:
  - 前端
# 一个页面可以有多个标签
tag:
  - vue-element-admin
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## router

``` js
<!--
****--@date ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
****--@author your name
****--@describe ${Describe}
-->

import Layout from "@/layout"

const ${NAME} = {
  path: "/",
  component: Layout,
  name: "",
  meta: { id: 0, title: "", icon: "" },
  children: []
}

export default ${NAME}
```
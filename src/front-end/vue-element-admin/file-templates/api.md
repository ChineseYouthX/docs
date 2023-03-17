---
# 这是文章的标题
title: api
# 这是页面的图标
# icon: 
# 这是侧边栏的顺序
order: 2
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

## api

``` js
<!--
****--@date ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
****--@author your name
****--@describe ${Describe}
-->
import request from "${DS}library/utils/request"

const basePath = ""

const Api = {
  list: data => {
    return request({
      url: basePath + "list",
      method: "post",
      data
    })
  },
  edit: data => {
    return request({
      url: basePath + "edit",
      method: "post",
      data
    })
  },
  isUse: data => {
    return request({
      url: basePath + "isUse",
      method: "post",
      data
    })
  },
  get: data => {
    return request({
      url: basePath + "get",
      method: "post",
      data
    })
  },
  del: data => {
    return request({
      url: basePath + "del",
      method: "post",
      data
    })
  }
}

export default Api
```
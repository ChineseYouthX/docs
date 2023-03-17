---
# 这是文章的标题
title: base-table-page
# 这是页面的图标
# icon: 
# 这是侧边栏的顺序
order: 8
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

## base table page

### page

``` vue
<!--
****--@date     ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
****--@author   your name
****--@describe ${Describe}
-->
<template>
  <div class="${ComponentName}">
    <base-container>
      <template #header>
        <el-row>
          <el-col :span="4">
            <el-button v-if="isCanEdit" type="primary" icon="el-icon-plus" @click="handleGoPage('${ComponentName}Add')">添加</el-button>
          </el-col>
          <el-col :span="20" align="right">
            <el-form ref="form" :model="requestSearch" onsubmit="return false" :inline="true">
              <el-form-item label="input" prop="input">
                <el-input
                  v-model.trim="requestSearch.input"
                  placeholder="请输入"
                  clearable
                />
              </el-form-item>
              <el-form-item label="select" prop="select">
                  <el-select v-model="requestSearch.select" placeholder="请选择" clearable>
                    <el-option
                      v-for="item in optionsList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              <el-form-item label="时间" prop="startEndTime">
                <el-date-picker
                  v-model="requestSearch.startEndTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :editable="true"
                  format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>
              <base-search-reset @search="getTableData(true)" @reset="handleResetForm" />
            </el-form>
          </el-col>
        </el-row>
      </template>
      <template #main>
        <base-table
          :loading="tableLoading"
          :table-data="tableData"
          :table-columns="tableColumns"
          :pagination="requestPage"
          @paginationEvent="handlePagination"
         >
           <template #col-isUse="scope">
            <base-text v-if="scope.row.isUse" type="success">已启用</base-text>
            <base-text v-else type="warning">已禁用</base-text>
          </template>
          <template #col-handle="scope">
            <table-button :type="scope.row.isUse ? 'warning' : 'success'" @click="handleIsUse(scope.row, 'id')">
              {{ isUseText[scope.row.isUse] }}
            </table-button>
            <table-button :disabled="scope.row.isUse" type="primary" @click="handleGoPage('${ComponentName}Edit', scope.row)">
              编辑
            </table-button>
            <table-button :disabled="scope.row.isUse" type="danger" @click="handleDel(scope.row, 'id')">
              删除
            </table-button>
          </template>
         </base-table>
      </template>
    </base-container>
  </div>
</template>

<script>
import Api from "./api"
import tableMixin from "${DS}library/mixin/table"

export default {
  name: "${ComponentName}",
  components: {},
  mixins: [tableMixin],
  data() {
    return {
      Api,
      requestSearch: {
        input: "",
        select: "",
        startEndTime: ""
      },
      optionsList: [{ label: "", value: "" }],
      tableColumns: [
        { label: "", prop: "" },
        { label: "", prop: "" },
        { label: "", prop: "" },
        { label: "状态", prop: "isUse", type: "slot" },
        { label: "操作", prop: "handle", type: "slot", align: "center", fixed: "right" }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getTableData()
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.${ComponentName}{
    height: 100%;
}
</style>
```

### api

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
  isUse: data => {
    return request({
      url: basePath + "isUse",
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

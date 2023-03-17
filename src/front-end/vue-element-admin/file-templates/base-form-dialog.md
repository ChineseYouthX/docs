---
# 这是文章的标题
title: base form dialog
# 这是页面的图标
# icon: 
# 这是侧边栏的顺序
order: 7
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

## base form dialog

### page
``` vue
<!--
****--@date ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
****--@author your name
****--@describe ${Describe}
-->
<template>
  <div class="${components}" v-loading="formLoading">
    <base-dialog :visible.sync="visible" title="">
      <template #content>
        <base-form ref="form" :form="form" :form-items="formItems" :rules="rules">
           <template #date>
             <el-form-item label="date" prop="date">
               <!-- date -->
             </el-form-item>
           </template>
        </base-form>
      </template>
      <template #handle>
        <el-button @click="handleCloseDialog">关 闭</el-button>
        <el-button type="primary" @click="handleSubmit">提 交</el-button>
      </template>
    </base-dialog>
  </div>
</template>

<script>
import Api from './api'
import dialogMixin from '${DS}library/mixin/dialog'
import formMixin from '${DS}library/mixin/form'

export default {
  name: '${components}',
  mixins: [dialogMixin, formMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    dialogInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      Api,
      form: {
        input: '',
        select: '',
        switch: false,
        date: ''
      },
      formItems: [
        { label: 'input', prop: 'input' },
        { label: 'select', prop: 'select', },
        { label: 'switch', prop: 'switch' },
        { label: 'date', prop: 'date', type: 'slot' },
      ],
      rules: {
        input: [{ required: true, message: '请输入', trigger: 'blur' }],
        select: [{ required: true, message: '请选择', trigger: 'change' }]
      }
    }
  },
  computed: {
    baseForm() {
      return this.${DS}refs.form.${DS}refs.form || {}
    }
  },
  created() {
    const { $id } = this.dialogInfo
    if($id) {
      this.getFormInfo()
    }
  },
  methods: {
    getFormInfo($id) {
      this.formLoading = true
      Api.apiName({ $id }).then(res => {
        this.form = res.data || {}
      }).finally(() => {
        this.formLoading = false
      })
    },
    handleSubmit() {
      this.baseForm.validate(valid => {
        if (!valid) return false
        else {
          this.submitLoading = true
          const reqData = this.form
          Api.edit(reqData).then(res => {
            this.${DS}resMsg(res)
            this.handleCloseDialog(true, false)
          }).finally(() => {
            this.submitLoading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.${components} {}
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
  edit: data => {
    return request({
      url: basePath + "edit",
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
  }
}

export default Api
```
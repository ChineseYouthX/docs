import{_ as i,X as n,Y as e,a3 as s}from"./framework-c4372ed1.js";const d={},l=s(`<h2 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app" aria-hidden="true">#</a> uni-app</h2><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uni-app project
├── common                     # 公用工具
|  ├── api.js                  # 请求接口
|  ├── config.js               # 配置文件
|  ├── data.encrypt.js         # 加解密数据   
|  ├── global.js               # 全局工具   
|  └── request.js              # 请求封装    
├── components                 # 公共组件
|  └── page-navbar             
├── pages                      # 所有页面
|  ├── home                    # 分包 首页
|  ├── login                   # 分包 登录
|  ├── personal                # 分包 个人中心
|  └── tabBar                  # tabBar 页面
├── static                     # 静态资源
|  └── tabBar                  # tabBar 静态资源
├── store                      # vue store
|  └── index.js
├── style                      # 样式文件
|  └── index.scss
├── App.vue                    # 入口页面
├── main.js                    # 入口文件
├── uni.scss                   # 全局样式
├── template.h5.html           # html模板
├── README.md                  # README.md  
├── .eslintignore              # eslint 忽略
├── .gitignore                 # git 忽略
├── .gitlab-ci.yml             # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── manifest.json              # 应用配置
├── pages.json                 # pages.json
├── package.json               # package.json
└── yarn.lock                  # yarn 锁包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3><h2 id="vue-element-admin-后台管理系统" tabindex="-1"><a class="header-anchor" href="#vue-element-admin-后台管理系统" aria-hidden="true">#</a> vue-element-admin 后台管理系统</h2><h3 id="文件结构-1" tabindex="-1"><a class="header-anchor" href="#文件结构-1" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue-element-admin project
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名规范-1" tabindex="-1"><a class="header-anchor" href="#命名规范-1" aria-hidden="true">#</a> 命名规范</h3>`,8),a=[l];function v(r,c){return n(),e("div",null,a)}const m=i(d,[["render",v],["__file","styleGuide.html.vue"]]);export{m as default};

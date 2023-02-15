import{_ as i,X as n,Y as e,a3 as s}from"./framework-b823b8b3.js";const d={},l=s(`<h2 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app" aria-hidden="true">#</a> uni-app</h2><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3><h2 id="中后台管理系统" tabindex="-1"><a class="header-anchor" href="#中后台管理系统" aria-hidden="true">#</a> 中后台管理系统</h2><h3 id="文件结构-1" tabindex="-1"><a class="header-anchor" href="#文件结构-1" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>admin-template
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[l];function a(r,c){return n(),e("div",null,v)}const m=i(d,[["render",a],["__file","styleGuide.html.vue"]]);export{m as default};

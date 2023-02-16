import{_ as t,X as r,Y as o,a0 as e,a2 as n,$ as a,a3 as i,H as l}from"./framework-c4372ed1.js";const d={},c=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),p={href:"https://github.com/MrRaindrop/tree-cli",target:"_blank",rel:"noopener noreferrer"},u=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> tree-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>`,3),h={href:"https://github.com/MrRaindrop/tree-cli",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--help: outputs a verbose usage listing.
--version: outputs the version of tree-cli.
--debug: show debug info.
--fullpath: prints the full path prefix <span class="token keyword">for</span> each file.
--ignore: ignores directory or <span class="token function">file</span> you specify - accepts arrays as comma-delimited strings: <span class="token string">&#39;node_modules/, .git/, .gitignore&#39;</span>
--link: follows symbolic links <span class="token keyword">if</span> they point to directories, as <span class="token keyword">if</span> they were directories. Symbolic links that will result <span class="token keyword">in</span> recursion are avoided when detected.
--noreport: omits printing of the <span class="token function">file</span> and directory report at the end of the tree listing and omits printing the tree on console.
--base: specify a root directory. Relative path from cwd root and absolute path are both acceptable. This argument is optional.
-a: all files are printed. By default tree does not print hidden files <span class="token punctuation">(</span>those beginning with a dot <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>. In no event does tree print the <span class="token function">file</span> system constructs <span class="token string">&#39;.&#39;</span> <span class="token punctuation">(</span>current directory<span class="token punctuation">)</span> and <span class="token string">&#39;..&#39;</span> <span class="token punctuation">(</span>previous directory<span class="token punctuation">)</span>.
-d: list directories only.
-f: append a <span class="token string">&#39;/&#39;</span> <span class="token keyword">for</span> directories, a <span class="token string">&#39;=&#39;</span> <span class="token keyword">for</span> socket files and a <span class="token string">&#39;|&#39;</span> <span class="token keyword">for</span> FIFOs.
-i: makes tree not print the indentation lines, useful when used <span class="token keyword">in</span> conjunction with the <span class="token parameter variable">-f</span> option.
-l: max display depth of the directory tree.
-o: send output to filename.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="hint-container info"><p class="hint-container-title">注意</p><p>tree 命令被windows占用，需要使用 treee</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>treee <span class="token parameter variable">-a</span> <span class="token parameter variable">-o</span> tree.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>***<span class="token punctuation">\\</span>***<span class="token punctuation">\\</span>docs
├── .git
├── .github
├── .gitignore
├── node_modules
├── pnpm-lock.yaml       
├── README.md
├── src
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,k){const s=l("ExternalLinkIcon");return r(),o("div",null,[c,e("p",null,[e("a",p,[n("tree-cli"),a(s)]),n(" 是 windows 自动生成目录树结构的一个 node.js 插件")]),u,e("p",null,[e("a",h,[n("使用文档"),a(s)])]),v])}const g=t(d,[["render",m],["__file","tree-cli.html.vue"]]);export{g as default};

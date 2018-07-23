---
    title: Web Front End Project Guide
    author: dondevi
    date: 2015-11-19
    update: 2017-04-17
    update: 2018-07-23
---


<style>
  body { width: auto; max-width: 50em; }
  h1 + blockquote { border: none !important; text-align: center; }
  body, h1, h2, h3, h4, h5, h6, label {
    font-family: Helvetica Neue,Hiragino Sans GB,STHeiti,Microsoft Yahei,SimSun,WenQuanYi Micro Hei,Arial,sans-serif;
  }
  h1 { font-weight: bold; text-align: center; }
  h2 > small { float: right; margin-top: 12px; font-size: 16px; color: #888; }
  abbr { color: red; font-size: smaller; vertical-align: super; text-decoration: none; }
</style>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-31356319-2', 'auto'); ga('send', 'pageview');
</script>



# 前端项目入门指南

> 前端开发师 - 项目基本要求





<br><br>





## 环境篇 <small>Environment</small>
> 准备出发

### 1. 工作环境
> 根据具体配置访问内部服务

- 知识库：项目文档
- 文档库：接口文档
- 项目管理系统
- 办公管理系统
- ...


### 2. 系统空间
> Projects：以项目为单位组织代码和文档
> <br> Work：与项目无关的办公文件

- Win 命名盘符：`C:System`、`D:Tools`、`E:Projects`、`F:Work`
- OSX 命名文件夹：`~/Projects`、`~/Work`
- Linux 命名文件夹：`~/projects`、`~/work`


### 3. 开发环境 <abbr title="important">\*</abbr>

1. [Node](https://nodejs.org/){:target="\_blank"} <sup><kbd>LTS</kbd></sup>
    - [nvm](https://github.com/creationix/nvm){:target="\_blank"} - <small>(win)</small>
    - [n](https://github.com/tj/n){:target="\_blank"} - <small>(linux)</small>

2. [Webpack](https://webpack.js.org/){:target="\_blank"}
    - [vue-cli](https://cli.vuejs.org/){:target="\_blank"}
    - [webpack-cli](https://webpack.js.org/api/cli/){:target="\_blank"}

3. Remote Debug
    - [Weinre](http://people.apache.org/~pmuellr/weinre-docs/latest/){:target="\_blank"}

4. Git / SVN
    - [TortoiseGit](https://tortoisegit.org/download/){:target="\_blank"}
    - [TortoiseSVN](https://tortoisesvn.net/downloads.html){:target="\_blank"}

5. HTTP Server
    - [Nginx](http://nginx.org/){:target="\_blank"}

6. HTTP Monitor
    - [Fiddler](https://www.telerik.com/fiddler){:target="\_blank"}
    - [Charles](https://www.charlesproxy.com/){:target="\_blank"}








<br><br><br>










## 流程篇 <small>Workflow</small>
> 打造优质产品


![项目流程简图](https://dondevi.github.io/web-frontend-guide/project-guide/pm-flow-min.png)

*(上图仅供参考)*


### 1. 了解项目 <abbr title="important">\*</abbr>
> 通过知识库

1. 阅读 需求文档
2. 浏览 原型、设计图
3. 阅读 概要设计
4. 浏览 接口文档


### 2. 获取项目
> 以 SVN 为例

1. 进入 `Projects/`
2. 根据 `项目代号` 创建文件夹
3. 创建 `code-h5/` 文件夹
4. SVN checkout 代码

```shell
Projects/
  ├─ (project-1)/   # 项目 1
    ├─ code-h5/     # H5源码 (SVN)
      ├─ branches/  # 分支
      ├─ tags/      # 标签
      └─ trunk/     # 主干
    ├─ code-iOS/    # iOS源码 (SVN)
    ├─ ...
    ├─ doc/         # 文档
    └─ ui/          # 设计图 (SVN)
  ├─ (project-2)/   # 项目 2
  └─ ...
```

### 3. 执行任务 <abbr title="important">\*</abbr>
> 通过项目管理系统








<br><br><br>










## 规范篇 <small>Convention</small>
> 编写优雅代码


### 1. 代码风格指南 <abbr title="important">\*</abbr>
> 网址：<https://dondevi.github.io/web-frontend-guide/style-guide/codestyle.html>{:target="\_blank"}
> <br> 参考：1 小时
> <br> 要求：完整遍历，注重代码风格的意识和习惯


### 2. 编程实践指南
> 网址：<https://dondevi.github.io/web-frontend-guide/style-guide/practice.html>{:target="\_blank"}
> <br> 参考：1 小时
> <br> 要求：完整遍历

- 界面层、业务层 和 数据层 分离
- 业务层中：事件绑定、事件处理 和 业务逻辑 分离


### 3. 文档注释规范
> JSDoc：<http://usejsdoc.org>{:target="\_blank"}
> <br> 参考：6 小时
> <br> 要求：完整遍历


### 5. 开发工具规约
> Sublime Text：Perferences > Settings > User

```javascript
{
  "rulers": [80],
  "tab_size": 2,
  "word_wrap": false,
  "translate_tabs_to_spaces": true,
  "ensure_newline_at_eof_on_save": true,
  "trim_trailing_white_space_on_save": true
}
```










<br><br><br>










## 框架篇 <small>Framework</small>
> 踩上前人肩膀


### 1. 微信 H5 通用框架 <abbr title="deprecated" style="color:gray">\*</abbr>
> 文档：<https://dondevi.github.io/wechat-h5-framework/docs/index.html>{:target="\_blank"}
> <br> 要求：熟练使用

### 2. 一般代码结构

```shell
/code-h5/trunk/
  ├─ mock/              # 仿真层
  ├─ src/               # 源码
    ├─ assets/          # 资源
      ├─ fonts/
      ├─ images/
      ├─ styles/
      └─ ...
    ├─ components/      # 通用组件
    ├─ config/          # 配置
    ├─ layouts/         # 布局
      ├─ default.vue
      ├─ login.vue
      └─ ...
    ├─ libs/            # 通用库
      ├─ moudule-1/
        └─ index.js
      └─ ...
    ├─ pages/           # 页面
      ├─ page-1/
        └─ index.vue
      └─ ...
    ├─ router/          # 路由
      ├─ index.js
      ├─ routes.js
      └─ session.js
    ├─ service/         # 通信层
      ├─ module-1/
        └─ index.js
      └─ ...
    └─ store/           # 状态层
```

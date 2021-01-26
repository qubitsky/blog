---
slug: "/articles/2021/gatsby-start"
title: Gatsby 入门指南
date: 2021-01-20
---

对于想要构建个人网站的开发者来说，使用 [Gatsby](https://www.gatsbyjs.com/) 是一个比较好的选择。当然还有其他优秀的网站生成工具，可以在这里找到：[https://jamstack.org/generators/](https://jamstack.org/generators/)。其中我还尝试过 [Jekyll](https://jekyllrb.com/)、[Hexo](https://hexo.io/)，他们被称作静态网站生成器（static website generator），通常被用来生成博客（Blog）网站，开发者可以在项目中按 markdown 格式编辑好文章（.md 文件），然后里面的构建工具将这些文件转换成静态网页（.html 文件）。

我之所以最终选择了 Gatsby，是出于以下几点考虑

1. 我是一名前端开发工程师，倾向基于 Javascript 的工具
2. 目前我对 React 使用较多，倾向基于 React 的工具
3. Gatsby 里使用了 GraphQL，抱着学习的态度，我想要继续尝试
4. Gatsby 有着丰富好用的插件，可以按照自己的需求自由组合，灵活搭建

目前 Gatsby 的官方文档还没有中文版本，内容虽然丰富，但是我体验下来，感觉组织庞杂，稍显混乱。曾多次试图从文档中寻找解答，都花费了比较多的时间，也可能是因为自己英文阅读功底不够。总之，就决定把使用经验总结一下，方便今后查阅，这是这篇指南的初衷。

## 开始使用

可从以下两种方式入手：

- 挑选模板生成
- 自行按需安装

### 挑选模板生成

[Gatsby CLI](<(https://www.gatsbyjs.com/docs/reference/gatsby-cli/)>) + [Starter](https://www.gatsbyjs.com/docs/how-to/local-development/starters/) 即可搭好项目。步骤如下：

1. 打开 [Starter 市场](https://www.gatsbyjs.com/starters/?v=2) 挑选模板
2. 安装 CLI：`npm i -g gatsby-cli`
3. 生成项目：`gatsby new {your-project-name} {link-to-starter}`

不妨进入 Starter 市场看看，便能明白。

推荐几个我喜欢的：

#### 1. [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/)

![gatsby-starter-blog](https://www.gatsbyjs.com/static/0e2cc8c09f8ba56fc8577df9c589c431/54967/3576b917c4111516bdfc044ec7465d09.png)

#### 2. [gatsby-starter-personal-blog](https://www.gatsbyjs.com/starters/greglobinski/gatsby-starter-personal-blog/)

![gatsby-starter-personal-blog](https://www.gatsbyjs.com/static/f711962897bdda482c311b31597b22ff/54967/e8db43d9ac6b90ddb001a918b4b0962e.png)

#### 3. [junhobaik.github.io](https://github.com/junhobaik/junhobaik.github.io)

第 3 个是从 github 上找的，如果 Starter 市场上没有找到满意的，可以试着在 github 上搜索一下。

使用模板生成项目一步到位、相当快捷，但是可能有以下缺陷：

1. 绝大多数是英文模板，换成中文效果不好
2. 进一步定制外观，会破坏原有视觉设计
3. 存在不需要的功能，移除比较费事
4. 依赖的工具版本过时，升级会碰到阻碍

如果追求省事儿、快速，并且对定制没有过多要求，推荐采用这种方式

### 自行按需安装

因为我对定制要求较高，又期望对用到的工具能够有详细的了解，最终选择这种方式。

可以从原始的 Starter 开始搭建，也可以从空目录开始。

#### 原始 Starter

严格来说也是用模板生成的方式，但这里强调项目内容原始，包括很少的依赖，和仅用于提供指导的页面，方便自行定制。推荐两个：

1. [gatsby-starter-hello-world](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
2. [gatsby-starter-default](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default/)

它们预装的依赖如下：

```json
{
  "gatsby": "^2.26.1",
  "react": "^16.12.0",
  "react-dom": "^16.12.0"
}
```

```json
{
  "gatsby": "^2.26.1",
  "gatsby-image": "^2.5.0",
  "gatsby-plugin-manifest": "^2.6.1",
  "gatsby-plugin-offline": "^3.4.0",
  "gatsby-plugin-react-helmet": "^3.4.0",
  "gatsby-plugin-sharp": "^2.8.0",
  "gatsby-source-filesystem": "^2.5.0",
  "gatsby-transformer-sharp": "^2.6.0",
  "prop-types": "^15.7.2",
  "react": "^16.12.0",
  "react-dom": "^16.12.0",
  "react-helmet": "^6.1.0"
}
```

#### 空目录开始

得到的项目和 gatsby-starter-hello-world 基本一致：

1. 新建目录，例：`mkdir blog`
2. 生成 package.json ：`cd blog && npm init -y`
3. 安装依赖 ：`npm i react react-dom gatsby`

#### 添加页面

页面必须放置在 `src/pages` 目录下，通常 `index.js` （首页） 和 `404.js`（404 not found） 是需要的。

往 package.json 中添加脚本命令

```json
{
  "scripts": {
    "start": "gatsby develop",
    "build": "gatsby build"
  }
}
```

至此，运行 `npm start` 启动即可按提示查看页面效果

### 部署

这里讲述如何部署到 [GitHub Pages](https://pages.github.com/)。

参考官方文档提供的指导：[How Gatsby Works with GitHub Pages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

总结整个过程就是：

1. 前往 github 项目仓库，找到并做好 GitHub Pages 相关配置
2. 安装 gh-pages 工具，并且添加 deploy 脚本命令到 package.json

```shell
gatsby build --prefix-paths && gh-pages -d public
```

很轻松，说一下 gh-pages 工具的原理，就是先在本地构建好需要发布的文件，然后 gh-pages 工具按指定目录将文件提交到 gh-pages 分支，再推送到远程 github 仓库上罢了。此外不多赘述。

### 样式

Gatsby 文档提供的指导：[Styling](https://www.gatsbyjs.com/docs/how-to/styling/)

上面列出了许多方案。考虑到以后想要方便切换主题，这里我选择了使用 [Theme UI](https://www.gatsbyjs.com/docs/how-to/styling/theme-ui/)

Theme UI 就是在一个文件中（`gatsby-plugin-theme-ui`）定义好一些样式变量，然后可以在组件文件中使用这些变量。它的官方文档提供了一些指导：[Theme UI Recipes](https://theme-ui.com/recipes)，可以参考它们搭建最基本的初始样式。

## 文章页

Markdown 语法简介，当今也被广泛地用于编辑文章内容。Gatsby 可以很方便地将 markdown 文章转化成页面，需要用到 `gatsby-source-filesystem` 和 `gatsby-transformer-remark` 页面。前者能够将文件解析成文件对象（ graphql 查询中的 file 节点），后者进一步将 markdown 文件内容转换成 html 内容，并生成特定的 markdown 数据对象（ graphql 查询中的 markdownRemark 节点）。

对比安装前后的 graphql 查询节点如下：

![query default](/assets/query_default.png)

![query markdown](/assets/query_markdown.png)

参考文档： [Adding Markdown Pages](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/)

总结过程含 3 步：

1. 安装插件，并在 `gatsby-config.js` 中做好配置
2. 添加文章，定义好文章头（ frontmatter ）
3. 在 `gatsby-node.js` 文件中定义好文章生成逻辑（ `createPages` 函数）

可以使用 Hexo 的测试文章来测试效果：https://github.com/hexojs/hexo-theme-unit-test

### PrismJS

技术分享类的博客网站，通常会涉及到许多代码内容，使用 [PrismJS](http://prismjs.com/) 将会得到非常美观的代码样式： [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/)

配置相当简单：

```js
{
   resolve: `gatsby-transformer-remark`,
   options: {
     plugins: [`gatsby-remark-prismjs`],
   },
}
```

它能够给代码块内容添加上特定的类名。

然后在 `gatsby-node.js` 文件中引入想要的样式即可

```js
import "prismjs/themes/prism.css"
```

## 结语

至此已经具备一个博客网站的雏形，入门所需就介绍到这里，往后可以继续探索更多细节。
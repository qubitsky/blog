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

- 使用 [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) 生成
- 自行按需安装

### 使用 Gatsby CLI 生成

即，使用 Gatsby 提供的 CLI（命令行工具），并从 [Starter 市场](https://www.gatsbyjs.com/starters/?v=2) 上挑选你中意的模板，来生成自己的项目。步骤如下：

1. 打开终端
2. 安装 CLI：`npm i -g gatsby-cli`
3. 检查 CLI 是否安装成功：`gatsby -v`
4. 生成项目：`gatsby new {your-project-name} {link-to-starter}`

不妨进入 Starter 市场看看，便能明白。

推荐几个我喜欢的：

1. [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/)

![gatsby-starter-blog](https://www.gatsbyjs.com/static/0e2cc8c09f8ba56fc8577df9c589c431/54967/3576b917c4111516bdfc044ec7465d09.png)

2. [gatsby-starter-personal-blog](https://www.gatsbyjs.com/starters/greglobinski/gatsby-starter-personal-blog/)

![gatsby-starter-personal-blog](https://www.gatsbyjs.com/static/f711962897bdda482c311b31597b22ff/54967/e8db43d9ac6b90ddb001a918b4b0962e.png)

3. [junhobaik.github.io](https://github.com/junhobaik/junhobaik.github.io)

第 3 个是从 github 上找的，如果 Starter 市场上没有找到满意的，可以试着在 github 上搜索一下。

使用模板生成项目一步到位、相当快捷，但是可能有以下缺陷：

1. 绝大多数是英文模板，换成中文效果不好
2. 进一步定制外观，会破坏原有视觉设计
3. 存在不需要的功能，移除比较费事
4. 依赖的工具版本过时，升级会碰到阻碍

如果搭建网站追求省事儿、快速，并且对定制没有过多要求，推荐采用这种方式

### 自行按需安装

因为我对定制要求较高，又期望对用到的工具能够有详细的了解，最终选择这种方式。
# 初中语文笔记

初中语文教学笔记与资料整理。

## 目录结构

```
├── index.html           # 首页 — 板块选择入口
├── topic.html           # 板块详情 — 无缝长图展示
├── css/
│   └── style.css        # 样式表
├── js/
│   ├── data.js          # 知识点数据配置
│   └── app.js           # 交互逻辑
├── jiao/
│   └── 比喻/            # 比喻修辞手法教学图示
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       └── 5.png
├── package.json         # 项目配置与开发脚本
├── .editorconfig
├── .gitignore
└── README.md
```

## 快速开始

```bash
npm install
npm run dev
```

浏览器将自动打开 `http://localhost:3000`。

## 使用说明

- **首页**：展示所有知识点板块，点击卡片进入对应板块
- **板块页**：内容图片按顺序纵向无缝拼接，滚动浏览
- **实时更新**：修改文件后浏览器自动刷新

## 添加新知识点

1. 在 `jiao/` 下创建新目录（如 `jiao/拟人/`），按顺序放入 `1.png`、`2.png`……
2. 在 `js/data.js` 的 `TOPICS` 数组中添加新条目：

```js
{
  id: 'niren',
  icon: '🌟',
  name: '拟人',
  summary: '拟人的简要说明……',
  path: 'jiao/拟人',
  files: ['1.png', '2.png', '3.png']
}
```

## 技术栈

- 原生 HTML5 + CSS3 + JavaScript
- [live-server](https://github.com/tapio/live-server) — 开发热重载
- 纯静态站点，无需构建步骤

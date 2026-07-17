# 初中语文笔记

初中语文教学笔记与资料整理。

## 目录结构

```
├── index.html           # 单页应用（含所有样式与逻辑）
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

## 在线访问

| 方式 | 链接 |
|------|------|
| GitHub Pages | https://cns-codenexus.github.io/chuzhong/ |
| jsDelivr CDN | https://cdn.jsdelivr.net/gh/CNS-CodeNexus/chuzhong@main/index.html |

## 本地开发

```bash
npm install
npm run dev
```

## 添加新知识点

1. 在 `jiao/` 下创建新目录（如 `jiao/拟人/`），按顺序放入 `1.png`、`2.png`……
2. 编辑 `index.html`，在 `TOPICS` 数组中添加新条目。

## 技术栈

- 原生 HTML5 + CSS3 + JavaScript（单文件自包含，无外部依赖）
- [live-server](https://github.com/tapio/live-server) — 开发热重载

# 初中语文笔记

初中语文教学笔记与资料整理。

## 目录结构

```
├── index.html          # 主页面 — 知识展示与串联
├── css/
│   └── style.css       # 样式表 — 优雅的视觉设计
├── js/
│   └── app.js          # 交互逻辑 — 导航、模态框等
├── jiao/
│   └── 比喻/           # 比喻修辞手法教学图示
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       └── 5.png
├── package.json        # 项目配置与开发脚本
├── .editorconfig       # 编辑器代码风格配置
├── .gitignore
└── README.md
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（含实时更新）
npm run dev
```

浏览器将自动打开 `http://localhost:3000`，修改文件后页面自动刷新。

## 功能特性

- **知识分类展示** — 按知识点分组，图文结合
- **图片按序浏览** — 图片按文件名顺序排列展示
- **点击放大查看** — 点击图片可放大查看详情
- **折叠式内容** — 知识点可折叠/展开，方便浏览
- **导航高亮** — 滚动时自动高亮当前章节
- **实时更新** — `npm run dev` 提供热重载开发体验
- **响应式设计** — 适配桌面与移动端

## 添加新知识点

1. 在 `jiao/` 下创建新目录（如 `jiao/拟人/`）
2. 将图片按顺序放入，命名为 `1.png`、`2.png`……
3. 在 `js/app.js` 的 `data` 数组中添加新条目：

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

- 原生 HTML5 + CSS3 + JavaScript（无框架依赖）
- [live-server](https://github.com/tapio/live-server) — 开发热重载
- 纯静态站点，无需构建步骤

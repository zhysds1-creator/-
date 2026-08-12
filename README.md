# 汽水音乐「同曲降噪」Interactive Product Prototype

这是一个基于 Vite + React + TypeScript 的高保真音乐原型，展示「汽水音乐」现有沉浸式播放页视觉语言，并新增“相似版本”选择功能。

## 项目特点

- 本地静态原型，无后端、无数据库、无外部 API
- 使用 Framer Motion 实现播放页切歌、底部 Sheet、Backdrop、版本切换动画
- 使用 Lucide React 统一图标体系
- 本地 mock 数据驱动：歌曲、版本、封面、文案、社交统计
- 竖向推荐 Feed 支持 Mouse Wheel / Trackpad / Touch Drag 切歌
- 相似版本 Bottom Sheet 支持点击遮罩、向下拖拽、Escape 关闭
- 版本切换后同步更新当前播放 artwork、标题、歌手、播放进度和状态

## 目录结构

- `src/components/`：界面组件
- `src/data/tracks.ts`：本地歌曲与版本数据
- `src/hooks/`：播放模拟与 Feed 导航逻辑
- `src/styles/`：设计 Tokens 与全局样式
- `public/assets/`：本地封面图片资源

## 运行方式

1. 进入项目目录：

```bash
cd app
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
```

4. 打开浏览器访问：

```text
http://localhost:5173
```

## 构建项目

```bash
npm run build
```

## GitHub 上传与 Vercel 部署

1. 将 `app/` 下的项目内容提交到你的 GitHub 仓库。
2. 在 GitHub 仓库中，确认 `package.json`、`src/`、`public/` 等文件已提交。
3. 前往 Vercel：
   - 新建项目时选择你的 GitHub 仓库。
   - Vercel 默认识别 Vite 项目，无需修改构建命令。
   - 构建命令：`npm run build`
   - 输出目录：`dist`
4. 点击部署，等待 Vercel 完成构建并发布。

## 访问效果

项目在桌面浏览器中以 Portfolio Shell 为外层，中心显示 390×844 的 PhoneViewport，保持沉浸式移动 App 视觉。

- 当前歌曲：`爱的主打歌 (Remix)`
- 相似版本入口：`相似版本 · 4 ›`
- 第二首歌曲无版本入口
- 第三首歌曲显示：`相似版本 · 2 ›`

## 说明

此原型旨在强调产品体验而非算法或后台框架，所有 UI 文案均使用简体中文，视觉风格克制、沉浸、贴近现有汽水音乐播放页。

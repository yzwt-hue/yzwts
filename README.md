# 个人主页 - 个人作品集网站

一个使用 Next.js 14 + TypeScript + TailwindCSS 构建的现代化个人主页网站。

## ✨ 特性

- 🚀 **Next.js 14** - 使用最新的 App Router
- 💎 **TypeScript** - 完整的类型安全
- 🎨 **TailwindCSS** - 现代化的 CSS 框架
- 📱 **响应式设计** - 完美适配所有设备
- 🌟 **优雅动画** - 流畅的用户体验
- 🎯 **模块化组件** - 易于维护和扩展

## 🎨 设计特色

- **配色方案**: slate-900 背景 + sky-400 强调色
- **现代UI**: 玻璃态效果、渐变文字、悬停动画
- **优雅排版**: 使用 Inter 字体，层次分明
- **交互体验**: 平滑滚动、悬停效果、加载动画

## 📁 项目结构

```
personal-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 主页面
│   └── components/
│       ├── Navigation.tsx   # 导航组件
│       ├── Hero.tsx         # 首页横幅
│       ├── About.tsx        # 关于我
│       ├── Projects.tsx     # 项目展示
│       ├── Contact.tsx      # 联系表单
│       └── Footer.tsx       # 页脚
├── public/                  # 静态资源
├── package.json            # 项目配置
├── tailwind.config.js      # TailwindCSS 配置
└── tsconfig.json           # TypeScript 配置
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
# 或
pnpm start
```

## 🎯 主要功能

### 1. Hero 部分
- 个人介绍和标题
- 行动号召按钮
- 滚动指示器

### 2. About 部分
- 个人简介
- 技能展示（带进度条）
- 工作经历时间线

### 3. Projects 部分
- 项目网格展示
- 分类筛选功能
- 项目详情和链接

### 4. Contact 部分
- 联系表单
- 联系信息展示
- 社交媒体链接

## 🛠️ 技术栈

- **前端框架**: Next.js 14
- **开发语言**: TypeScript
- **样式框架**: TailwindCSS
- **字体**: Inter (Google Fonts)
- **图标**: SVG 图标
- **动画**: CSS 动画 + TailwindCSS 动画类

## 📱 响应式设计

- **移动端**: 320px+
- **平板端**: 768px+
- **桌面端**: 1024px+
- **大屏端**: 1280px+

## 🎨 自定义配置

### 修改个人信息
编辑各个组件中的个人信息，包括：
- 姓名和标题
- 个人简介
- 技能和经验
- 项目信息
- 联系方式

### 修改配色方案
在 `tailwind.config.js` 中调整颜色：
```javascript
colors: {
  primary: {
    400: '#38bdf8', // 主要强调色
    // ... 其他色阶
  },
  background: {
    DEFAULT: '#0f172a', // 主背景色
    // ... 其他色阶
  }
}
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

如有问题或建议，请通过以下方式联系：
- 邮箱: your.email@example.com
- GitHub: github.com/yourusername
- LinkedIn: linkedin.com/in/yourusername

---

**享受编码，创造美好！** 🚀


import { defineConfig } from "vitepress"

export default defineConfig({
  title: "AI学习资源站",
  description: "面向零基础小白的AI学习资源汇总站",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "学习教程", link: "/tutorials/" },
      { text: "工具库", link: "/tools/" },
      { text: "实战案例", link: "/cases/" },
      { text: "资源下载", link: "/resources/" }
    ],
    search: { provider: "local" },
    footer: {
      message: "本站所有内容免费分享，欢迎学习交流",
      copyright: "Copyright © 2026 AI学习资源站"
    }
  }
})

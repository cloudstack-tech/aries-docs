import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白羊座 Aries",
  description: "新一代被控节点服务",
  base: "/aries-docs/", // 添加 base 配置
  lastUpdated: true,
  themeConfig: {
    logo: "/avatar.png",

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/cloudstack-tech/aries-docs/edit/main/src/:path'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/what-is-aries" },
      { text: "API", items: [
        {
          text: "云服务器",
          link: "/api/server/create-server",
        }
      ]
    },
      { text: "更新日志", link: "/changelog" },
    ],

    sidebar: {
      '/guide': [
        {
          text: "简介",
          items: [
            {
              text: "什么是 Aries?",
              link: "/guide/what-is-aries",
            },
            {
              text: "快速开始",
              link: "/guide/quick-start",
            },
          ],
        },
      ],
      '/api': [
        {
          text: "云服务器",
          items: [
            {
              text: "创建云服务器 CreateServer",
              link: "/api/server/create-server",
            },
          ],
        },
      ],
      '/changelog': [
        {
          text: "更新日志",
          link: "/changelog",
        },
      ],
    },
    
    socialLinks: [
      { icon: "github", link: "https://github.com/cloudstack-tech" },
    ],
  },
});

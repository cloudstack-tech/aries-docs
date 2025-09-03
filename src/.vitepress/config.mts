import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白羊座 Aries",
  description: "新一代被控节点服务",
  base: "/aries-docs/", // 添加 base 配置
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'https://github.com/cloudstack-tech/aries-docs/blob/main/src/avatar.png?raw=true' }],
  ],
  themeConfig: {
    
    logo: "https://github.com/cloudstack-tech/aries-docs/blob/main/src/avatar.png?raw=true",

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
      { text: "部署", link: "/deploy" },
      { text: "CLI", link: "/cli" },
      { text: "API", items: [
        {
          text: "云服务器",
          link: "/api/server/create-server",
        },
        {
          text: "镜像",
          link: "/api/image/create-image",
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
        {
          text: "核心概念",
          items: [
            {
              text: "被控节点",
              link: "/guide/concepts/controlled-node",
            },
            {
              text: "云服务器",
              link: "/guide/concepts/server",
            },
            {
              text: "网络",
              link: "/guide/concepts/network",
            },
            {
              text: "存储",
              link: "/guide/concepts/storage",
            },
            {
              text: "计算",
              link: "/guide/concepts/compute",
            },
            {
              text: "元数据",
              link: "/guide/concepts/metadata",
            },
            {
              text: "安全组",
              link: "/guide/concepts/security-group",
            },
            {
              text: "镜像",
              link: "/guide/concepts/image",
            },
            {
              text: "快照",
              link: "/guide/concepts/snapshot",
            },
            {
              text: "密钥对",
              link: "/guide/concepts/keypair",
            },
            {
              text: "标签",
              link: "/guide/concepts/tag",
            },
            {
              text: "监控",
              link: "/guide/concepts/monitor",
            },
            {
              text: "日志",
              link: "/guide/concepts/log",
            },
          ],
        },
        {
          text: "云栈互联",
          items: [
            {
              text: "关于我们",
              link: "/guide/about-us",
              target: "_blank",
            },
            {
              text: "联系我们",
              link: "/guide/contact-us",
              target: "_blank",
            },
            {
              text: "加入我们",
              link: "/guide/join-us",
              target: "_blank",
            },
          ],
        },
      ],
      '/deploy': [
        {
          text: "部署",
          items: [
            {
              text: "部署被控服务",
              link: "/deploy",
            },
            {
              text: "制作模版镜像",
              link: "/deploy/make-image",
            }
          ],
        },
        {
          text: "监控",
          items: [
            {
              text: "Prometheus 接入",
              link: "/deploy/prometheus-integration",
            },
            {
              text: "Grafana 接入",
              link: "/deploy/grafana-integration",
            },
          ],
        },
        {
          text: "日志",
          items: [
            {
              text: "日志服务",
              link: "/deploy/log-service",
            },
          ],
        }
      ],
      '/cli/': [
        {
          text: "CLI",
          items: [
            {
              text: "介绍",
              link: "/cli",
            },
            {
              text: "CLI 安装",
              link: "/cli/install",
            },
          ],
        },
        {
          text: "服务器",
          items: [
            {
              text: "创建服务器 CreateServer",
              link: "/cli/server/create-server",
            },
          ],
        },
        {
          text: "镜像",
          items: [
            {
              text: "创建镜像 CreateImage",
              link: "/cli/image/create-image",
            },
          ],
        }
      ],
      '/api': [
        {
          text: "云服务器",
          collapsed: true,
          items: [
            {
              text: "创建云服务器 CreateServer",
              link: "/api/server/create-server",
            },
            {
              text: "删除云服务器 DeleteServer",
              link: "/api/server/delete-server",
            },
            {
              text: "启动云服务器 StartServer",
              link: "/api/server/start-server",
            },
            {
              text: "停止云服务器 StopServer",
              link: "/api/server/stop-server",
            },
            {
              text: "重启云服务器 RebootServer",
              link: "/api/server/reboot-server",
            },
            {
              text: "销毁云服务器 DestroyServer",
              link: "/api/server/destroy-server",
            },
            {
              text: "修改云服务器配置 ModifyServerSpec",
              link: "/api/server/modify-server-spec",
            },
            {
              text: "更新云服务器密码 UpdateServerPassword",
              link: "/api/server/update-server-password",
            },
            {
              text: "查询云服务器详情 DescribeServer",
              link: "/api/server/describe-server",
            },
            {
              text: "查询云服务器列表 ListServer",
              link: "/api/server/list-server",
            }
          ],
        },
        {
          text: "镜像",
          collapsed: true,
          items: [
            {
              text: "创建镜像 CreateImage",
              link: "/api/image/create-image",
            },
            {
              text: "删除镜像 DeleteImage",
              link: "/api/image/delete-image",
            },
            {
              text: "更新镜像 UpdateImage",
              link: "/api/image/update-image",
            },
            {
              text: "查询镜像详情 DescribeImage",
              link: "/api/image/describe-image",
            },
            {
              text: "查询镜像列表 ListImage",
              link: "/api/image/list-image",
            }
          ],
        }
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

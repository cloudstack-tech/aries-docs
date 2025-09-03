import { defineConfig } from "vitepress";

const changelog = [
  {
    text: "v1.0.0",
    link: "/changelog/v1.0.0",
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白羊座 Aries",
  description: "新一代被控节点服务",
  base: "/aries-docs/", // 添加 base 配置
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'https://github.com/cloudstack-tech/aries-docs/blob/main/src/avatar.png?raw=true' }],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
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
      { text: "部署与运维", link: "/ops" },
      { text: "CLI 命令", link: "/cli" },
      { text: "API 接口", items: [
        {
          text: "云服务器",
          link: "/api/server/create-server",
        },
        {
          text: "镜像",
          link: "/api/image/create-image",
        },
        {
          text: "存储卷",
          link: "/api/volume/create-volume",
        },
        {
          text: "端口转发",
          link: "/api/port_forward/create-rule",
        },
        {
          text: "元数据",
          link: "/api/meta_data/get-meta-data",
        },
        {
          text: "监控指标",
          link: "/api/metrics/get-metrics",
        },
        {
          text: "资源管理",
          link: "/api/resource/request",
        },
        {
          text: "同步管理",
          link: "/api/sync/sync",
        },
      ],
    },
      { text: "更新日志", link: changelog[changelog.length - 1].link },
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
      '/ops/': [
        {
          text: "部署",
          items: [
            {
              text: "介绍",
              link: "/ops",
            },
            {
              text: "部署被控服务",
              link: "/ops/deploy",
            },
            {
              text: "制作模版镜像",
              link: "/ops/deploy/make-image",
            }
          ],
        },
        {
          text: "可观测",
          items: [
            {
              text: "介绍",
              link: "/ops/observability",
            },
            {
              text: "被控主机监测",
              link: "/ops/observability/controlled-host-monitor",
            },
            {
              text: "服务器监控",
              link: "/ops/observability/server-monitor",
              items: [
                {
                  text: "Windows 服务器监测",
                  link: "/ops/observability/server-monitor/windows",
                },
                {
                  text: "Linux 服务器监测",
                  link: "/ops/observability/server-monitor/linux",
                },
              ],
            },
            {
              text: "Prometheus 接入",
              link: "/ops/observability/integration/prometheus",
            },
            {
              text: "Grafana 接入",
              link: "/ops/observability/integration/grafana",
            },
          ],
        },
        {
          text: "日志",
          items: [
            {
              text: "介绍",
              link: "/ops/logging",
            },
            {
              text: "日志服务",
              link: "/ops/logging/log-service",
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
            {
              text: "示例",
              link: "/cli/example",
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
        },
        {
          text: "存储卷",
          collapsed: true,
          items: [
            {
              text: "创建存储卷 CreateVolume",
              link: "/api/volume/create-volume",
            },
            {
              text: "删除存储卷 DeleteVolume",
              link: "/api/volume/delete-volume",
            },
            {
              text: "扩容存储卷 ExtendVolume",
              link: "/api/volume/extend-volume",
            },
            {
              text: "导入存储卷 ImportVolume",
              link: "/api/volume/import-volume",
            },
            {
              text: "查询存储卷列表 ListVolume",
              link: "/api/volume/list-volume",
            }
          ],
        },
        {
          text: "端口转发",
          collapsed: true,
          items: [
            {
              text: "创建端口转发 CreatePortForwardRule",
              link: "/api/port_forward/create-rule",
            },
            {
              text: "删除端口转发 DeletePortForwardRule",
              link: "/api/port_forward/delete-by-source",
            },
            {
              text: "清除服务器端口转发 ClearPortForwardRule",
              link: "/api/port_forward/clear-by-server",
            }
          ],
        },
        {
          text: "元数据",
          collapsed: true,
          items: [
            {
              text: "获取元数据 GetMetaData",
              link: "/api/meta_data/get-meta-data",
            },
            {
              text: "获取用户数据 GetUserData",
              link: "/api/meta_data/get-user-data",
            }
          ],
        },
        {
          text: "监控指标",
          collapsed: true,
          items: [
            {
              text: "获取监控指标 GetMetrics",
              link: "/api/metrics/get-metrics",
            }
          ],
        },
        {
          text: "资源管理",
          collapsed: true,
          items: [
            {
              text: "资源请求 ResourceRequest",
              link: "/api/resource/request",
            },
            {
              text: "获取网络接口 GetNetworkInterface",
              link: "/api/resource/network-interface",
            }
          ],
        },
        {
          text: "同步管理",
          collapsed: true,
          items: [
            {
              text: "同步资源 Sync",
              link: "/api/sync/sync",
            }
          ],
        }
      ],
      '/changelog': [
        {
          text: "更新日志",
          items: changelog,
        },
      ],
    },
    
    socialLinks: [
      { icon: "github", link: "https://github.com/cloudstack-tech" },
    ],
  },
});

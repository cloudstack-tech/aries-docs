---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "白羊座 Aries"
  text: "新一代被控节点服务"
  tagline: 云栈互联提供的开箱即用的虚拟化平台被控服务
  image:
    src: /logo.png
    alt: Aries
  actions:
    - theme: brand
      text: 什么是 Aries？
      link: /guide/what-is-aries
    - theme: alt
      text: 部署文档
      link: /guide/deploy 
    - theme: alt
      text: API 文档
      link: /api

features:
  - title: 多用户授权管理
    details: 提供多层级用户权限控制，支持细粒度的访问权限配置，确保数据和资源的安全性
  - title: Cloud-Init 支持
    details: 支持密码修改、磁盘自动扩容、静态IP分配、开机自动化命令执行等功能
  - title: 完整监控体系
    details: 内置 Prometheus Exporter，支持对 CPU、内存、存储和网络等关键指标的实时监控
  - title: 网络管理
    details: 支持软路由一键对接NAT，DHCP/自助IP池管理，提供灵活的网络配置能力
  - title: 三方资源对接
    details: 支持云栈互联ECS资源池等多种云计算平台的一键对接，轻松实现资源整合
  - title: 自动化运维
    details: 提供操作日志记录、故障自动回滚、通用API接口等特性，简化运维流程
---


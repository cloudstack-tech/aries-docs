# 什么是 Aries？

Aries（白羊座）是我们在云栈互联"星空架构"中开发的核心被控节点服务。说白了，就是用来管理虚拟化平台的一个工具，让运维工作变得更简单。

这个项目最初是为了解决我们公司内部虚拟化管理的痛点而开发的。传统的虚拟化管理要么功能太复杂，要么缺少必要的自动化能力，所以我们决定自己造个轮子。

## 为什么要开发 Aries？

在实际运维工作中，我们遇到了这些问题：
- 手动创建虚拟机太繁琐，每次都要重复配置网络、存储
- 缺少统一的监控方案，出问题了不知道
- 软路由配置复杂，NAT 规则经常搞错
- 多个云平台管理起来很麻烦，没有统一界面

所以 Aries 就是为了解决这些实际问题而生的。

## 核心功能

### 虚拟机生命周期管理
基于 Go 语言开发，使用 Gin 框架提供 RESTful API。我们实现了完整的虚拟机生命周期管理：

```bash
# 创建虚拟机
aries server create --name test-vm --cpu 2 --memory 4096 --disk 50

# 启动/停止虚拟机
aries server start test-vm
aries server stop test-vm

# 查看虚拟机状态
aries server list
```

底层使用我们自己开发的 `github.com/rokukoo/hyperv` 库，直接调用 Hyper-V 的 WMI 接口，性能比 PowerShell 脚本快很多。

### Cloud-Init 自动化配置

- **密码自动修改**：虚拟机启动时自动设置随机密码
- **磁盘自动扩容**：根据配置自动扩展系统盘
- **静态 IP 配置**：从 IP 池自动分配并配置网络
- **开机脚本执行**：支持自定义初始化脚本

实际使用中，一个 Ubuntu 虚拟机从创建到可用只需要 2-3 分钟。

### 软路由集成
这是我们比较得意的功能。支持爱快（ikuai）和 OpenWrt 的自动对接：

```yaml
# config.yml 配置示例
network:
  soft-router:
    enable: true
    type: ikuai
    rpc-url: http://172.16.0.1
    username: admin
    password: your-password
```

配置好后，创建虚拟机时会自动：
- 在软路由上添加 NAT 规则
- 配置端口转发
- 设置防火墙规则

再也不用手动去软路由界面点来点去了。

### 监控系统
使用 Prometheus Exporter 暴露监控指标，默认监听 8066 端口。我们基于 Windows Performance Counters 实现了：

- **CPU 监控**：使用 `github.com/rokukoo/win_perf_counters` 获取实时 CPU 使用率
- **内存监控**：监控物理内存和虚拟内存使用情况  
- **磁盘 IOPS**：监控磁盘读写性能
- **网络流量**：监控网卡收发包统计

配合 Grafana 可以做出很漂亮的监控面板。

## 技术架构

### 后端技术栈
- **Go 1.24.4**：主要开发语言
- **Gin**：Web 框架，提供 RESTful API
- **GORM + SQLite**：数据持久化，也支持 MySQL
- **Cobra**：命令行工具框架
- **Logrus**：结构化日志

### 数据库设计
使用 GORM 做 ORM，支持 SQLite 和 MySQL。主要数据模型包括：
- `Server`：虚拟机信息
- `Volume`：存储卷管理
- `Image`：镜像模板
- `NetAdapter`：网络适配器
- `VSwitch`：虚拟交换机

### API 设计
遵循 RESTful 规范，使用 Swagger 生成 API 文档：

```
GET    /aries/api/v1/servers          # 获取虚拟机列表
POST   /aries/api/v1/servers          # 创建虚拟机
GET    /aries/api/v1/servers/{id}     # 获取虚拟机详情
PUT    /aries/api/v1/servers/{id}     # 更新虚拟机配置
DELETE /aries/api/v1/servers/{id}     # 删除虚拟机
```

## 部署和配置

### 系统要求
- Windows Server 2016+ 或 Linux
- 4核 CPU，8GB 内存（推荐配置）
- 启用 Hyper-V 角色（Windows 环境）

### 快速部署
1. 下载编译好的二进制文件
2. 复制 `config.template.yml` 为 `config.yml` 并修改配置
3. 运行 `aries server` 启动服务

```bash
# 启动 API 服务
aries server

# 启动后访问 http://localhost/swagger 查看 API 文档
```

## 平台对接能力

目前已经对接了云栈互联 ECS 资源池，正在开发对接：
- 魔方财务系统
- ProKVM 管理平台  
- 阿帕云/小鸟云
- 轻舟云平台
- 翼龙面板
- MCSM 面板

这些对接让我们可以在一个界面管理多个云平台的资源。

## 实际应用场景

### 开发测试环境
我们内部用 Aries 管理开发测试环境，开发人员可以通过 API 快速申请虚拟机：

```bash
# 申请一个开发环境
curl -X POST http://aries-api/servers \
  -d '{"name":"dev-env-001","cpu":2,"memory":4096,"template":"ubuntu-20.04"}'
```

### 客户环境部署
对于需要私有化部署的客户，Aries 可以快速搭建标准化的虚拟化环境。

### 混合云管理
通过平台对接能力，可以在一个界面管理本地 Hyper-V 和公有云的资源。

## 后续规划

- 支持更多虚拟化平台（VMware vSphere、KVM）
- 增加容器编排能力
- 完善 Web 管理界面
- 支持集群部署和高可用

总的来说，Aries 就是一个实用的虚拟化管理工具，专注解决实际运维中的痛点问题。 
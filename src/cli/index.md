---
title: CLI 命令行工具
version: v1
prev: true
next: true
---

# {{ $frontmatter.title }}

## 简介 Introduction

Aries CLI 是一个命令行工具，用于管理和操作Aries云平台的各种资源。通过CLI，您可以方便地创建和管理服务器、镜像等资源。

## 功能特性 Features

- 服务器管理：创建、删除、启动、停止等操作
- 镜像管理：创建、删除、更新镜像
- 存储管理：创建、挂载、卸载存储卷
- 网络管理：配置网络适配器、端口转发等
- 批量操作：支持批处理和自动化脚本

## 命令结构 Command Structure

Aries CLI 采用以下命令结构：

```bash
aries <resource> <action> [flags]
```

其中：
- `resource`: 资源类型，如server、image等
- `action`: 操作类型，如create、delete等
- `flags`: 命令参数

## 资源类型 Resources

| 资源类型 Resource | 说明 Description |
| --- | --- |
| server | 服务器资源管理 |
| image | 镜像资源管理 |
| volume | 存储卷资源管理 |
| network | 网络资源管理 |

## 全局参数 Global Flags

| 参数名 Name | 参数类型 Type | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| --config | string | ~/.aries/config | 配置文件路径 |
| --debug | boolean | false | 是否启用调试模式 |
| --output | string | json | 输出格式(json/yaml) |

## 使用示例 Examples

### 创建服务器

```bash
aries server create \
  --name test-server \
  --compute-cpu 2 \
  --compute-memory 4096 \
  --storage-size 40
```

### 查询镜像列表

```bash
aries image list
```

### 启动服务器

```bash
aries server start --server-ref i-2ze4hxw8hdik
```

## 环境变量 Environment Variables

| 变量名 Name | 说明 Description |
| --- | --- |
| ARIES_CONFIG | 配置文件路径 |
| ARIES_DEBUG | 是否启用调试模式 |
| ARIES_OUTPUT | 输出格式 |

## 配置文件 Configuration

默认配置文件位于 `~/.aries/config`，支持以下配置项：

```yaml
# 服务配置
server:
  endpoint: http://localhost:8080
  timeout: 30s

# 认证配置
auth:
  username: admin
  password: password

# 输出配置
output:
  format: json
  color: true
```

## 注意事项 Notes

1. 安装要求：
   - 支持Windows/Linux/macOS系统
   - 需要64位操作系统
   - 建议使用最新版本

2. 权限要求：
   - 某些命令需要管理员权限
   - 配置文件需要读写权限
   - 注意文件路径权限

3. 使用建议：
   - 使用配置文件管理认证信息
   - 重要操作建议使用--confirm确认
   - 建议启用命令自动补全

4. 其他说明：
   - 支持管道操作
   - 支持批处理脚本
   - 定期更新CLI版本
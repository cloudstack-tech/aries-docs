---
title: 创建镜像 CreateImage
version: v1
prev: true
next: true
---

# {{ $frontmatter.title }}

## 命令说明 Description

创建一个新的系统镜像。

## 命令格式 Syntax

```bash
aries image create [flags]
```

## 参数说明 Parameters

### 必选参数 Required Flags

| 参数名 Name | 参数类型 Type | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| --name | string | - | 镜像名称 |
| --os-type | string | - | 操作系统类型(linux/windows) |
| --os-name | string | - | 操作系统名称 |
| --source-path | string | - | 镜像源文件路径 |

### 可选参数 Optional Flags

| 参数名 Name | 参数类型 Type | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| --description | string | - | 镜像描述信息 |

## 使用示例 Examples

### 示例一：创建Linux系统镜像

```bash
aries image create \
  --name CentOS-7.9-x64 \
  --os-type linux \
  --os-name CentOS \
  --description "CentOS 7.9 64位基础镜像" \
  --source-path /path/to/centos.iso
```

### 示例二：创建Windows系统镜像

```bash
aries image create \
  --name Windows-Server-2019 \
  --os-type windows \
  --os-name "Windows Server" \
  --description "Windows Server 2019 标准版" \
  --source-path /path/to/windows.iso
```

## 输出说明 Output

命令执行成功后，将返回创建的镜像信息：

```json
{
  "id": 1,
  "name": "CentOS-7.9-x64",
  "os_type": "linux",
  "os_name": "CentOS",
  "description": "CentOS 7.9 64位基础镜像",
  "source_path": "/path/to/centos.iso",
  "created_at": "2024-03-20T10:30:00Z"
}
```

## 注意事项 Notes

1. 镜像命名：
   - 建议包含操作系统版本信息
   - 建议包含系统位数信息
   - 名称不能重复

2. 操作系统类型：
   - linux: Linux系统
   - windows: Windows系统
   - 必须小写

3. 源文件要求：
   - 必须是有效的ISO文件
   - 文件路径必须存在
   - 文件必须有读取权限

4. 其他说明：
   - 创建是同步操作
   - 创建后即可用于创建服务器
   - 建议提供详细的描述信息
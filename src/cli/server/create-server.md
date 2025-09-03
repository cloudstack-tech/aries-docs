---
title: 创建服务器 CreateServer
version: v1
prev: true
next: true
---

# {{ $frontmatter.title }}

## 命令说明 Description

创建一台新的云服务器实例。

## 命令格式 Syntax

```bash
aries server create [flags]
```

## 参数说明 Parameters

### 必选参数 Required Flags

| 参数名 Name | 参数类型 Type | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| --compute-cpu | integer | - | CPU核心数 |
| --compute-memory | integer | - | 内存大小(MB) |
| --storage-size | integer | - | 系统盘大小(GB) |
| --meta-data-user | string | - | 默认root用户名 |
| --meta-data-password | string | - | 默认root密码 |

### 可选参数 Optional Flags

| 参数名 Name | 参数类型 Type | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| --name | string | auto | 服务器名称，默认自动生成 |
| --ipv4-address | string | - | 指定IP地址，默认自动分配 |
| --boot | boolean | true | 创建后是否自动启动 |

## 使用示例 Examples

### 示例一：创建最小配置服务器

```bash
aries server create \
  --compute-cpu 1 \
  --compute-memory 1024 \
  --storage-size 20 \
  --meta-data-user root \
  --meta-data-password Password@123
```

### 示例二：创建指定配置和IP的服务器

```bash
aries server create \
  --name test-server \
  --compute-cpu 2 \
  --compute-memory 4096 \
  --storage-size 40 \
  --ipv4-address 192.168.1.100 \
  --meta-data-user root \
  --meta-data-password Password@123 \
  --boot true
```

## 输出说明 Output

命令执行成功后，将返回创建的服务器信息：

```json
{
  "id": "i-2ze4hxw8hdik",
  "name": "test-server",
  "status": "creating",
  "cpu_core_count": 2,
  "memory_size": 4096,
  "volumes": [
    {
      "id": "vol-001",
      "name": "system-disk",
      "size": 40,
      "type": "system"
    }
  ],
  "adapters": [
    {
      "name": "eth0",
      "ipv4_address": "192.168.1.100",
      "ipv4_subnet_mask": "255.255.255.0",
      "ipv4_gateway": "192.168.1.1"
    }
  ],
  "meta_data": {
    "username": "root",
    "password": "Password@123"
  },
  "created_at": "2024-03-20T10:30:00Z"
}
```

## 注意事项 Notes

1. 资源限制：
   - CPU核心数必须大于0
   - 内存大小必须大于0
   - 系统盘大小必须大于20GB

2. 命名规则：
   - 如果不指定名称，将自动生成
   - 自动生成的名称格式为"i-xxx"
   - 建议使用有意义的名称

3. 网络配置：
   - 如果不指定IP，将自动分配
   - IP地址必须在有效范围内
   - 确保IP未被占用

4. 密码要求：
   - 长度：8-30个字符
   - 必须包含：大小写字母、数字和特殊字符
   - 不要使用简单密码

5. 其他说明：
   - 创建是异步操作，需要等待一段时间
   - 可以通过describe命令查询创建进度
   - 创建完成后才能进行其他操作

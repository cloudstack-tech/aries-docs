---
title: 创建云服务器 CreateServer
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 创建一台新的云服务器实例。
- 通过指定的计算资源、存储资源和网络资源来创建服务器实例。
- 支持自定义元数据配置和启动选项。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/server/create</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name">name</span> <span class="type-string">string</span> | Body | auto | 服务器名称。如果为空或"auto",将自动生成以"i"开头的15位随机字符串作为名称 |
| <span class="param-name required">compute</span> <span class="type-object">object</span> | Body | - | 计算资源配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">cpu_core_count</span> <span class="type-integer">integer</span> | Body | - | CPU 核心数,不能为0 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">memory_size</span> <span class="type-integer">integer</span> | Body | - | 内存大小(MB),不能为0 |
| <span class="param-name required">storage</span> <span class="type-object">object</span> | Body | - | 存储资源配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">volumes</span> <span class="type-array">array</span> | Body | - | 存储卷列表 |
| <span class="param-name">ipv4_address</span> <span class="type-string">string</span> | Body | - | 服务器 IP 地址,如果为空则自动分配 |
| <span class="param-name required">networks</span> <span class="type-object">object</span> | Body | - | 网络资源配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">net_adapters</span> <span class="type-array">array</span> | Body | - | 网络适配器列表 |
| <span class="param-name required">meta_data</span> <span class="type-object">object</span> | Body | - | 元数据配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">default_root_user</span> <span class="type-string">string</span> | Body | - | 默认root用户名 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">default_root_password</span> <span class="type-string">string</span> | Body | - | 默认root密码 |
| <span class="param-name">option</span> <span class="type-object">object</span> | Body | - | 可选配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">boot_when_created</span> <span class="type-boolean">boolean</span> | Body | true | 创建后是否自动启动 |

### 请求示例 Example

::: details 示例一：创建 1 台 配置为 2H4G 40G 10M 且指定 IP 地址的服务器
```json
{
  "name": "example-server",
  "compute": {
    "cpu_core_count": 2,
    "memory_size": 4096
  },
  "storage": {
    "volumes": [
      {
        "name": "system-disk",
        "size": 40
      }
    ]
  },
  "networks": {
    "net_adapters": [
      {
        "name": "eth0",
        "ipv4_address": "192.168.1.100",
        "ipv4_subnet_mask": "255.255.255.0",
        "ipv4_gateway": "192.168.1.1",
        "dns_server1": "8.8.8.8",
        "dns_server2": "8.8.4.4"
      }
    ]
  },
  "meta_data": {
    "default_root_user": "root",
    "default_root_password": "Password@123"
  },
  "option": {
    "boot_when_created": true
  }
}
```
:::

::: details 示例二：创建最小配置的服务器（自动分配IP地址）
```json
{
  "name": "auto",
  "compute": {
    "cpu_core_count": 1,
    "memory_size": 1024
  },
  "storage": {
    "volumes": [
      {
        "name": "system-disk",
        "size": 20
      }
    ]
  },
  "networks": {
    "net_adapters": [
      {
        "name": "eth0"
      }
    ]
  },
  "meta_data": {
    "default_root_user": "root",
    "default_root_password": "Password@123"
  }
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">id</span> <span class="type-string">string</span> | 服务器实例 ID |
| <span class="param-name">name</span> <span class="type-string">string</span> | 服务器名称 |
| <span class="param-name">status</span> <span class="type-string">string</span> | 实例状态 |
| <span class="param-name">cpu_core_count</span> <span class="type-integer">integer</span> | CPU 核心数 |
| <span class="param-name">memory_size</span> <span class="type-integer">integer</span> | 内存大小(MB) |
| <span class="param-name">volumes</span> <span class="type-array">array</span> | 存储卷列表 |
| <span class="param-name">adapters</span> <span class="type-array">array</span> | 网络适配器列表 |
| <span class="param-name">meta_data</span> <span class="type-object">object</span> | 元数据信息 |
| <span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |

### 响应示例 Example

```json
{
  "id": "i-2ze4hxw8hdik",
  "name": "example-server",
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

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 400 | InvalidCPUCore | CPU核心数不能为0 | CPU核心数必须大于0 |
| 400 | InvalidMemorySize | 内存大小不能为0 | 内存大小必须大于0 |
| 500 | ServerStartFailed | 服务器启动失败 | 服务器创建成功但启动失败 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |
| 501 | VirtualMachineAlreadyExists | 虚拟机已存在 | 指定名称的虚拟机已存在 |

## 注意事项 Notes

1. 服务器名称规则:
   - 如果不指定或指定为"auto",将自动生成以"i"开头的15位随机字符串
   - 建议使用有意义的名称便于管理

2. 计算资源限制:
   - CPU核心数不能为0
   - 内存大小不能为0

3. 网络配置:
   - 如果不指定IP地址,系统将自动分配
   - 支持配置多个网络适配器

4. 创建流程:
   - 创建服务器实例
   - 创建并挂载存储卷
   - 配置网络适配器
   - 设置元数据
   - 根据option决定是否自动启动

5. 其他说明:
   - 服务器创建是异步操作,完成需要一定时间
   - 创建失败时会自动清理已创建的资源
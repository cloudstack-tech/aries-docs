---
title: 创建云服务器 CreateServer

prev: true
next: true
---

# {{ $frontmatter.title }}

## 描述 Description

- 创建一台新的云服务器实例。
- 通过指定的镜像以及 cloud-init 初始化信息实例化服务器环境。

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method">POST</span>
  <span class="route-path">/api/v1/server/create</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 类型 Type | 参数类型 | 说明 Description | 默认值 |
| --- | --- | --- | --- | --- |
| * name | string | Body | 服务器名称 Server instance name |  |
| image_id | string | Body | 镜像 ID Image ID |  |
| cpu | integer | Body | CPU 核心数 CPU cores | 1 |
| memory | integer | Body | 内存大小(GB) Memory size in GB | 1 |
| disk_size | integer | Body | 系统盘大小(GB) System disk size in GB | 20 |
| password | string | Body | 实例密码 Instance password |  |
| hostname | string | Body | 主机名 Hostname | 同 name |
| network_id | string | Body | 网络 ID Network ID |  |
| security_group_ids | array | Body | 安全组 ID 列表 Security group IDs | [] |
| user_data | string | Body | 实例自定义数据 User data | "" |

### 请求示例 Example

#### 示例一：创建 1 台 2核4G 40G系统盘的实例

```json
{
  "name": "example-instance",
  "image_id": "centos-7.9",
  "cpu": 2,
  "memory": 4,
  "disk_size": 40,
  "password": "Password@123",
  "hostname": "example-host",
  "network_id": "net-default",
  "security_group_ids": ["sg-default"],
  "user_data": "#!/bin/bash\necho 'Hello World'"
}
```

## 响应 Response

### 响应参数

| 参数名 Name | 类型 Type | 说明 Description |
| --- | --- | --- |
| id | string | 服务器实例 ID Server instance ID |
| name | string | 服务器名称 Server instance name |
| status | string | 实例状态 Instance status |
| cpu | integer | CPU 核心数 CPU cores |
| memory | integer | 内存大小(GB) Memory size in GB |
| disk_size | integer | 系统盘大小(GB) System disk size in GB |
| image_id | string | 镜像 ID Image ID |
| network_id | string | 网络 ID Network ID |
| private_ip | string | 私有 IP 地址 Private IP address |
| created_at | string | 创建时间 Creation time |

### 响应示例

```json
{
  "id": "i-2ze4hxw8hdik",
  "name": "example-instance",
  "status": "creating",
  "cpu": 2,
  "memory": 4,
  "disk_size": 40,
  "image_id": "centos-7.9",
  "network_id": "net-default",
  "private_ip": "192.168.1.100",
  "created_at": "2024-03-20T10:30:00Z"
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message |
| --- | --- | --- |
| 400 | InvalidParameter | 参数无效 The specified parameter is invalid |
| 400 | QuotaExceeded | 资源配额超限 The resource quota has been exceeded |
| 404 | ImageNotFound | 指定的镜像不存在 The specified image does not exist |
| 404 | NetworkNotFound | 指定的网络不存在 The specified network does not exist |
| 500 | InternalError | 内部错误 Internal server error |

## 备注 Notes

1. 实例创建后会进入 `creating` 状态，需要等待几分钟才能完成初始化
2. 密码要求：
   - 长度：8-30 个字符
   - 必须包含：大写字母、小写字母、数字和特殊字符
3. 主机名规则：
   - 长度：2-64 个字符
   - 只能包含：小写字母、数字和连字符(-)
   - 不能以连字符开头或结尾
4. 所有资源配额受限于当前用户的配额限制
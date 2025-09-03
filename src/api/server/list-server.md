---
title: 查询云服务器列表 ListServer
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 查询云服务器列表。
- 支持按条件筛选服务器。
- 返回服务器的基本信息和状态。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/server</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name">status</span> <span class="type-string">string</span> | Query | - | 服务器状态过滤 |
| <span class="param-name">name</span> <span class="type-string">string</span> | Query | - | 服务器名称过滤 |
| <span class="param-name">page</span> <span class="type-integer">integer</span> | Query | 1 | 页码 |
| <span class="param-name">page_size</span> <span class="type-integer">integer</span> | Query | 10 | 每页数量 |

### 请求示例 Example

```bash
# 查询所有服务器
GET /aries/api/v1/server

# 查询运行中的服务器
GET /aries/api/v1/server?status=running

# 按名称搜索并分页
GET /aries/api/v1/server?name=test&page=1&page_size=20
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">id</span> <span class="type-integer">integer</span> | 服务器ID |
| <span class="param-name">uuid</span> <span class="type-string">string</span> | 服务器UUID |
| <span class="param-name">name</span> <span class="type-string">string</span> | 服务器名称 |
| <span class="param-name">status</span> <span class="type-string">string</span> | 服务器状态 |
| <span class="param-name">cpu_core_count</span> <span class="type-integer">integer</span> | CPU核心数 |
| <span class="param-name">memory_size</span> <span class="type-integer">integer</span> | 内存大小(MB) |
| <span class="param-name">os_details</span> <span class="type-string">string</span> | 操作系统详情 |
| <span class="param-name">os_type</span> <span class="type-string">string</span> | 操作系统类型 |
| <span class="param-name">os_name</span> <span class="type-string">string</span> | 操作系统名称 |
| <span class="param-name">private_ip_address</span> <span class="type-string">string</span> | 私有IP地址 |

### 响应示例 Example

```json
[
  {
    "id": 1234,
    "uuid": "i-2ze4hxw8hdik",
    "name": "example-server",
    "status": "running",
    "cpu_core_count": 2,
    "memory_size": 4096,
    "os_details": "CentOS 7.9 64位",
    "os_type": "linux",
    "os_name": "CentOS",
    "private_ip_address": "192.168.1.100"
  },
  {
    "id": 1235,
    "uuid": "i-3ze4hxw8hdik",
    "name": "test-server",
    "status": "stopped",
    "cpu_core_count": 1,
    "memory_size": 2048,
    "os_details": "Ubuntu 20.04 64位",
    "os_type": "linux",
    "os_name": "Ubuntu",
    "private_ip_address": "192.168.1.101"
  }
]
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 参数格式错误或取值无效 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 查询参数：
   - status: 支持的状态包括 running, stopped, creating, error
   - name: 支持模糊匹配
   - 分页参数用于控制返回数量

2. 返回说明：
   - 返回结果按创建时间降序排序
   - 每次最多返回指定的page_size数量
   - 建议使用分页参数控制返回数量

3. 状态说明：
   - running: 运行中
   - stopped: 已停止
   - creating: 创建中
   - error: 错误状态

4. 其他说明：
   - 查询操作不会影响服务器运行
   - 可以频繁调用此接口
   - 返回的信息为服务器的基本信息 
---
title: 查询云服务器详情 DescribeServer
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 查询指定云服务器的详细信息。
- 支持通过ID或UUID查询。
- 返回服务器的配置、状态等详细信息。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/server/:id</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">id</span> <span class="type-string">string</span> | Path | - | 服务器ID或UUID |

### 请求示例 Example

```bash
# 通过ID查询
GET /aries/api/v1/server/1234

# 通过UUID查询
GET /aries/api/v1/server/i-2ze4hxw8hdik
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
| <span class="param-name">volumes</span> <span class="type-array">array</span> | 存储卷列表 |
| <span class="param-name">adapters</span> <span class="type-array">array</span> | 网络适配器列表 |
| <span class="param-name">meta_data</span> <span class="type-object">object</span> | 元数据信息 |
| <span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |

### 响应示例 Example

```json
{
  "id": 1234,
  "uuid": "i-2ze4hxw8hdik",
  "name": "example-server",
  "status": "running",
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
| 400 | InvalidParameter | 参数无效 | ID或UUID格式错误 |
| 404 | ServerNotFound | 服务器不存在 | 指定的服务器不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 查询方式：
   - 支持通过数字ID查询
   - 支持通过UUID查询
   - ID和UUID都是唯一标识

2. 返回信息：
   - 包含服务器的基本信息
   - 包含存储和网络配置
   - 包含元数据信息

3. 状态说明：
   - running: 运行中
   - stopped: 已停止
   - creating: 创建中
   - error: 错误状态

4. 其他说明：
   - 查询操作不会影响服务器运行
   - 可以频繁调用此接口
   - 建议使用UUID作为唯一标识 
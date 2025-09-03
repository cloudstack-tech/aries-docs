---
title: 查询镜像列表 ListImage
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 查询系统中的所有镜像列表。
- 返回镜像的基本信息。
- 支持按条件筛选镜像。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/image/list</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name">os_type</span> <span class="type-string">string</span> | Query | - | 操作系统类型过滤 |
| <span class="param-name">os_name</span> <span class="type-string">string</span> | Query | - | 操作系统名称过滤 |

### 请求示例 Example

```bash
# 查询所有镜像
GET /aries/api/v1/image/list

# 查询Linux系统镜像
GET /aries/api/v1/image/list?os_type=linux

# 查询CentOS镜像
GET /aries/api/v1/image/list?os_name=CentOS
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">id</span> <span class="type-integer">integer</span> | 镜像ID |
| <span class="param-name">name</span> <span class="type-string">string</span> | 镜像名称 |
| <span class="param-name">os_type</span> <span class="type-string">string</span> | 操作系统类型 |
| <span class="param-name">os_name</span> <span class="type-string">string</span> | 操作系统名称 |
| <span class="param-name">description</span> <span class="type-string">string</span> | 镜像描述 |
| <span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |
| <span class="param-name">updated_at</span> <span class="type-string">string</span> | 更新时间 |

### 响应示例 Example

```json
[
  {
    "id": 1,
    "name": "CentOS-7.9-x64",
    "os_type": "linux",
    "os_name": "CentOS",
    "description": "CentOS 7.9 64位基础镜像",
    "created_at": "2024-03-20T10:30:00Z",
    "updated_at": "2024-03-20T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Ubuntu-20.04-x64",
    "os_type": "linux",
    "os_name": "Ubuntu",
    "description": "Ubuntu 20.04 LTS 64位基础镜像",
    "created_at": "2024-03-20T11:30:00Z",
    "updated_at": "2024-03-20T11:30:00Z"
  }
]
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 过滤参数格式错误 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 查询过滤：
   - os_type: 支持linux、windows
   - os_name: 支持模糊匹配
   - 过滤参数可选，不指定则返回所有

2. 返回说明：
   - 返回结果按创建时间降序排序
   - 不返回镜像源文件路径等敏感信息
   - 返回基本的镜像信息

3. 使用建议：
   - 建议缓存镜像列表信息
   - 可用于选择创建服务器的镜像
   - 可用于查看可用的操作系统类型

4. 其他说明：
   - 查询操作不会影响镜像
   - 可以频繁调用此接口
   - 返回所有可用的镜像 
---
title: 查询云硬盘列表 ListVolume
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 查询云硬盘列表。
- 支持查看所有云硬盘的详细信息。
- 返回云硬盘的基本信息和状态。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/volume</span>
</div>

### 请求参数 Parameters

无

### 请求示例 Example

::: details 示例：查询云硬盘列表
```http
GET /aries/api/v1/volume
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">volumes</span> <span class="type-array">array</span> | 云硬盘列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">id</span> <span class="type-integer">integer</span> | 云硬盘 ID |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">name</span> <span class="type-string">string</span> | 云硬盘名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">type</span> <span class="type-integer">integer</span> | 云硬盘类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">size</span> <span class="type-number">number</span> | 云硬盘大小(GB) |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">save_path</span> <span class="type-string">string</span> | 存储路径 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">comment</span> <span class="type-string">string</span> | 描述信息 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |

### 响应示例 Example

```json
{
  "volumes": [
    {
      "id": 1,
      "name": "system-disk-1",
      "type": 0,
      "size": 40,
      "save_path": "/path/to/disk1",
      "comment": "系统盘1",
      "created_at": "2024-03-20T10:30:00Z"
    },
    {
      "id": 2,
      "name": "data-disk-1",
      "type": 1,
      "size": 100,
      "save_path": "/path/to/disk2",
      "comment": "数据盘1",
      "created_at": "2024-03-20T11:30:00Z"
    }
  ]
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 返回说明:
   - 返回所有云硬盘的列表
   - 按创建时间倒序排列

2. 类型说明:
   - type=0: 系统盘
   - type=1: 数据盘

3. 使用建议:
   - 定期查看云硬盘使用情况
   - 及时清理不需要的云硬盘 
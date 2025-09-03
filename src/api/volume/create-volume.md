---
title: 创建云硬盘 CreateVolume
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 创建一个新的云硬盘。
- 支持创建系统盘和数据盘。
- 可以指定硬盘大小和存储路径。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/volume/create</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">name</span> <span class="type-string">string</span> | Body | - | 云硬盘名称 |
| <span class="param-name required">type</span> <span class="type-integer">integer</span> | Body | - | 云硬盘类型：0-系统盘，1-数据盘 |
| <span class="param-name required">size</span> <span class="type-number">number</span> | Body | - | 云硬盘大小，单位GB |
| <span class="param-name">save_path</span> <span class="type-string">string</span> | Body | - | 云硬盘存储路径 |
| <span class="param-name">comment</span> <span class="type-string">string</span> | Body | - | 云硬盘描述信息 |

### 请求示例 Example

::: details 示例：创建一个 40GB 的系统盘
```json
{
  "name": "system-disk",
  "type": 0,
  "size": 40,
  "comment": "系统盘"
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">id</span> <span class="type-integer">integer</span> | 云硬盘 ID |
| <span class="param-name">name</span> <span class="type-string">string</span> | 云硬盘名称 |
| <span class="param-name">type</span> <span class="type-integer">integer</span> | 云硬盘类型 |
| <span class="param-name">size</span> <span class="type-number">number</span> | 云硬盘大小(GB) |
| <span class="param-name">save_path</span> <span class="type-string">string</span> | 存储路径 |
| <span class="param-name">comment</span> <span class="type-string">string</span> | 描述信息 |
| <span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |

### 响应示例 Example

```json
{
  "id": 1,
  "name": "system-disk",
  "type": 0,
  "size": 40,
  "save_path": "/path/to/disk",
  "comment": "系统盘",
  "created_at": "2024-03-20T10:30:00Z"
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 400 | InvalidDiskSize | 磁盘大小无效 | 磁盘大小必须大于0 |
| 400 | InvalidDiskType | 磁盘类型无效 | 磁盘类型必须为0或1 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 磁盘类型说明:
   - 0: 系统盘，用于安装操作系统
   - 1: 数据盘，用于存储数据

2. 磁盘大小限制:
   - 系统盘：建议不小于20GB
   - 数据盘：根据实际需求配置

3. 存储路径说明:
   - 如果不指定，系统会自动分配存储路径
   - 建议使用默认存储路径 
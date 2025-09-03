---
title: 扩容云硬盘 ExtendVolume
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 扩容指定的云硬盘容量。
- 只支持扩容，不支持缩容。
- 支持在线扩容。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/volume/extend</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">volume_ref</span> <span class="type-string">string</span> | Body | - | 云硬盘引用ID |
| <span class="param-name required">new_size</span> <span class="type-number">number</span> | Body | - | 新的云硬盘大小，单位GB |

### 请求示例 Example

::: details 示例：将云硬盘扩容到 100GB
```json
{
  "volume_ref": "vol-2ze4hxw8hdik",
  "new_size": 100
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
| <span class="param-name">size</span> <span class="type-number">number</span> | 扩容后的大小(GB) |
| <span class="param-name">save_path</span> <span class="type-string">string</span> | 存储路径 |
| <span class="param-name">comment</span> <span class="type-string">string</span> | 描述信息 |
| <span class="param-name">updated_at</span> <span class="type-string">string</span> | 更新时间 |

### 响应示例 Example

```json
{
  "id": 1,
  "name": "system-disk",
  "type": 0,
  "size": 100,
  "save_path": "/path/to/disk",
  "comment": "系统盘",
  "updated_at": "2024-03-20T10:30:00Z"
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 400 | InvalidSize | 无效的磁盘大小 | 新磁盘大小必须大于当前大小 |
| 404 | VolumeNotFound | 云硬盘不存在 | 指定的云硬盘不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 扩容限制:
   - 新容量必须大于当前容量
   - 不支持缩容操作

2. 扩容建议:
   - 建议在业务低峰期扩容
   - 扩容前建议备份数据

3. 文件系统说明:
   - 扩容后需要在操作系统中扩展文件系统
   - 不同文件系统扩展方式不同 
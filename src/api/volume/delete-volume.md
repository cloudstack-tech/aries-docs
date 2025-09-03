---
title: 删除云硬盘 DeleteVolume
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 删除指定的云硬盘。
- 删除后数据将无法恢复。
- 只能删除未挂载的云硬盘。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="delete">DELETE</span>
  <span class="route-path">/aries/api/v1/volume/delete</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">volume_ref</span> <span class="type-string">string</span> | Query | - | 云硬盘引用ID |

### 请求示例 Example

::: details 示例：删除指定云硬盘
```http
DELETE /aries/api/v1/volume/delete?volume_ref=vol-2ze4hxw8hdik
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">success</span> <span class="type-boolean">boolean</span> | 是否删除成功 |

### 响应示例 Example

```json
{
  "success": true
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 404 | VolumeNotFound | 云硬盘不存在 | 指定的云硬盘不存在 |
| 409 | VolumeInUse | 云硬盘使用中 | 云硬盘已挂载到实例，无法删除 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 删除前确认:
   - 确保云硬盘中的数据已备份
   - 确保云硬盘未挂载到任何实例

2. 删除说明:
   - 删除操作不可恢复
   - 建议谨慎操作

3. 使用建议:
   - 建议先卸载云硬盘再删除
   - 重要数据建议先备份 
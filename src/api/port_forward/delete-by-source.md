---
title: 删除端口转发规则 DeletePortForwardRule
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 删除指定服务器的端口转发规则。
- 根据源端口删除规则。
- 删除后规则将无法恢复。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="delete">DELETE</span>
  <span class="route-path">/aries/api/v1/port_forward_rule/delete_by_source</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Query | - | 服务器引用ID |
| <span class="param-name required">source</span> <span class="type-integer">integer</span> | Query | - | 源端口 |

### 请求示例 Example

::: details 示例：删除指定源端口的转发规则
```http
DELETE /aries/api/v1/port_forward_rule/delete_by_source?server_ref=i-2ze4hxw8hdik&source=80
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
| 404 | ServerNotFound | 服务器不存在 | 指定的服务器不存在 |
| 404 | RuleNotFound | 规则不存在 | 指定的转发规则不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 删除说明:
   - 删除操作不可恢复
   - 只删除指定源端口的规则

2. 参数说明:
   - server_ref 必须是有效的服务器ID
   - source 必须是已存在的源端口

3. 使用建议:
   - 删除前确认规则是否还需要
   - 建议保留规则配置记录 
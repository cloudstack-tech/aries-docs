---
title: 清除服务器端口转发规则 ClearPortForwardRule
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 清除指定服务器的所有端口转发规则。
- 删除后所有规则将无法恢复。
- 适用于批量删除场景。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="delete">DELETE</span>
  <span class="route-path">/aries/api/v1/port_forward_rule/clear_by_server</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Body | - | 服务器引用ID |

### 请求示例 Example

::: details 示例：清除指定服务器的所有转发规则
```json
{
  "server_ref": "i-2ze4hxw8hdik"
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">success</span> <span class="type-boolean">boolean</span> | 是否清除成功 |

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
| 500 | InternalError | 内部错误 | 服务器内部错误 |
| 500 | ClearFailed | 清除失败 | 清除规则失败 |

## 注意事项 Notes

1. 清除说明:
   - 清除操作不可恢复
   - 会删除所有端口转发规则

2. 使用场景:
   - 服务器重置时
   - 批量删除规则时
   - 规则配置错误需要重新配置时

3. 使用建议:
   - 清除前确认所有规则都不再需要
   - 建议先备份规则配置
   - 建议在业务低峰期操作 
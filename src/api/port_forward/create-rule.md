---
title: 创建端口转发规则 CreatePortForwardRule
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 为网络适配器创建端口转发规则。
- 支持指定源端口和目标端口。
- 支持自动分配目标端口。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/port_forward_rule/create</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">net_adapter_ref</span> <span class="type-string">string</span> | Body | - | 网络适配器引用ID |
| <span class="param-name required">type</span> <span class="type-string">string</span> | Body | - | 规则类型：peer-对等，unpeer-非对等 |
| <span class="param-name required">name</span> <span class="type-string">string</span> | Body | - | 规则名称 |
| <span class="param-name required">source</span> <span class="type-integer">integer</span> | Body | - | 源端口 |
| <span class="param-name">dest</span> <span class="type-integer">integer</span> | Body | 0 | 目标端口，0表示自动分配 |

### 请求示例 Example

::: details 示例一：创建指定端口的转发规则
```json
{
  "net_adapter_ref": "net-2ze4hxw8hdik",
  "type": "peer",
  "name": "web-server",
  "source": 80,
  "dest": 8080
}
```
:::

::: details 示例二：创建自动分配目标端口的转发规则
```json
{
  "net_adapter_ref": "net-2ze4hxw8hdik",
  "type": "peer",
  "name": "web-server",
  "source": 80
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">name</span> <span class="type-string">string</span> | 规则名称 |
| <span class="param-name">source</span> <span class="type-integer">integer</span> | 源端口 |
| <span class="param-name">destination</span> <span class="type-integer">integer</span> | 目标端口 |

### 响应示例 Example

```json
{
  "name": "web-server",
  "source": 80,
  "destination": 8080
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 404 | AdapterNotFound | 网络适配器不存在 | 指定的网络适配器不存在 |
| 409 | PortInUse | 端口已被使用 | 指定的端口已被其他规则使用 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 端口说明:
   - 源端口必须指定
   - 目标端口可以自动分配
   - 端口范围：1-65535

2. 规则类型:
   - peer: 对等转发
   - unpeer: 非对等转发

3. 使用建议:
   - 建议使用有意义的规则名称
   - 避免使用系统保留端口 
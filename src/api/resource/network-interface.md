---
title: 获取网络接口 GetNetworkInterface
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 获取系统可用的网络接口列表。
- 返回网络接口的详细信息。
- 用于网络配置和管理。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/resource/network_interface</span>
</div>

### 请求参数 Parameters

无

### 请求示例 Example

::: details 示例：获取网络接口列表
```http
GET /aries/api/v1/resource/network_interface
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">interfaces</span> <span class="type-array">array</span> | 网络接口列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">name</span> <span class="type-string">string</span> | 接口名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">mac_address</span> <span class="type-string">string</span> | MAC地址 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">ipv4_address</span> <span class="type-string">string</span> | IPv4地址 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">ipv4_subnet_mask</span> <span class="type-string">string</span> | IPv4子网掩码 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">ipv4_gateway</span> <span class="type-string">string</span> | IPv4网关 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">status</span> <span class="type-string">string</span> | 接口状态 |

### 响应示例 Example

```json
{
  "interfaces": [
    {
      "name": "eth0",
      "mac_address": "00:11:22:33:44:55",
      "ipv4_address": "192.168.1.100",
      "ipv4_subnet_mask": "255.255.255.0",
      "ipv4_gateway": "192.168.1.1",
      "status": "up"
    },
    {
      "name": "eth1",
      "mac_address": "00:11:22:33:44:66",
      "ipv4_address": "192.168.2.100",
      "ipv4_subnet_mask": "255.255.255.0",
      "ipv4_gateway": "192.168.2.1",
      "status": "down"
    }
  ]
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 接口状态:
   - up: 接口已启用
   - down: 接口已禁用

2. 数据说明:
   - 返回所有可用的网络接口
   - 包含接口的详细配置信息

3. 使用建议:
   - 定期检查接口状态
   - 注意网络配置的正确性
   - 保留网络配置记录 
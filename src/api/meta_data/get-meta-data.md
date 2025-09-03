---
title: 获取元数据 GetMetaData
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 获取云服务器的元数据信息。
- 用于云服务器初始化配置。
- 支持 OpenStack 元数据格式。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/openstack/latest/meta_data.json</span>
</div>

### 请求参数 Parameters

无。服务器通过请求的来源 IP 地址识别身份。

### 请求示例 Example

::: details 示例：获取元数据
```http
GET /aries/api/v1/openstack/latest/meta_data.json
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">uuid</span> <span class="type-string">string</span> | 服务器唯一标识符 |
| <span class="param-name">hostname</span> <span class="type-string">string</span> | 主机名 |
| <span class="param-name">name</span> <span class="type-string">string</span> | 服务器名称 |
| <span class="param-name">launch_index</span> <span class="type-integer">integer</span> | 启动索引 |
| <span class="param-name">availability_zone</span> <span class="type-string">string</span> | 可用区 |
| <span class="param-name">meta</span> <span class="type-object">object</span> | 自定义元数据 |
| <span class="param-name">public_keys</span> <span class="type-object">object</span> | SSH 公钥信息 |

### 响应示例 Example

```json
{
  "uuid": "i-2ze4hxw8hdik",
  "hostname": "server-001",
  "name": "web-server",
  "launch_index": 0,
  "availability_zone": "default",
  "meta": {
    "environment": "production"
  },
  "public_keys": {
    "default": "ssh-rsa AAAAB3..."
  }
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 403 | Forbidden | 访问被拒绝 | 请求的 IP 地址未授权 |
| 404 | NotFound | 元数据不存在 | 未找到对应的元数据信息 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 访问限制:
   - 只允许云服务器内部访问
   - 通过 IP 地址识别身份

2. 数据说明:
   - 元数据用于云服务器初始化
   - 遵循 OpenStack 元数据格式

3. 使用建议:
   - 建议在系统启动时获取
   - 定期刷新以获取最新配置 
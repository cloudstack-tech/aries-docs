---
title: 获取用户数据 GetUserData
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 获取云服务器的用户数据信息。
- 用于云服务器初始化用户配置。
- 返回 YAML 格式的配置数据。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/openstack/latest/user_data</span>
</div>

### 请求参数 Parameters

无。服务器通过请求的来源 IP 地址识别身份。

### 请求示例 Example

::: details 示例：获取用户数据
```http
GET /aries/api/v1/openstack/latest/user_data
```
:::

## 响应 Response

### 响应参数 Result

响应内容为 YAML 格式的文本数据，包含以下信息：

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">users</span> <span class="type-array">array</span> | 用户列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">name</span> <span class="type-string">string</span> | 用户名 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">passwd</span> <span class="type-string">string</span> | 用户密码 |

### 响应示例 Example

```yaml
#cloud-config
users:
  - name: admin
    passwd: Password@123
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 403 | Forbidden | 访问被拒绝 | 请求的 IP 地址未授权 |
| 404 | NotFound | 用户数据不存在 | 未找到对应的用户数据信息 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 访问限制:
   - 只允许云服务器内部访问
   - 通过 IP 地址识别身份

2. 数据格式:
   - 返回 YAML 格式数据
   - 以 #cloud-config 开头
   - 包含用户配置信息

3. 安全建议:
   - 建议在首次启动时获取
   - 获取后及时修改密码
   - 妥善保管配置信息 
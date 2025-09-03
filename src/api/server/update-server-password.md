---
title: 更新云服务器密码 UpdateServerPassword
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 更新指定云服务器的root用户密码。
- 密码更新后需要重新登录服务器。
- 建议使用复杂密码以提高安全性。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="put">PUT</span>
  <span class="route-path">/aries/api/v1/server/update_password</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Query | - | 服务器唯一标识 |
| <span class="param-name required">password</span> <span class="type-string">string</span> | Query | - | 新的root用户密码 |

### 请求示例 Example

```bash
PUT /aries/api/v1/server/update_password?server_ref=i-2ze4hxw8hdik&password=NewPassword@123
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">result</span> <span class="type-boolean">boolean</span> | 更新结果，true表示更新成功 |

### 响应示例 Example

```json
{
  "result": true
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 参数格式错误或取值无效 |
| 404 | ServerNotFound | 服务器不存在 | 指定的服务器不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 密码要求：
   - 长度：建议8-30个字符
   - 复杂度：建议包含大小写字母、数字和特殊字符
   - 不建议使用简单密码

2. 更新影响：
   - 更新后需要使用新密码登录
   - 当前已登录的会话不会断开
   - 新密码立即生效

3. 安全建议：
   - 定期更换密码
   - 不要使用易猜测的密码
   - 妥善保管密码信息

4. 其他说明：
   - 密码更新是同步操作
   - 更新成功后请立即验证新密码
   - 建议保留密码更新记录 
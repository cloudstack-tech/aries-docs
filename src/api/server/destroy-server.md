---
title: 销毁云服务器 DestroyServer
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 销毁指定的云服务器实例。
- 销毁操作会清理服务器的所有资源。
- 此操作不可恢复，请谨慎操作。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/server/destroy</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Query | - | 服务器唯一标识 |

### 请求示例 Example

```bash
POST /aries/api/v1/server/destroy?server_ref=i-2ze4hxw8hdik
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">result</span> <span class="type-boolean">boolean</span> | 销毁结果，true表示销毁成功 |

### 响应示例 Example

```json
{
  "result": true
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | server_ref参数为空或格式错误 |
| 404 | ServerNotFound | 服务器不存在 | 指定的服务器不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 销毁影响：
   - 销毁操作会清理所有相关资源
   - 包括磁盘数据、网络配置等
   - 所有数据将被永久删除

2. 操作限制：
   - 任何状态的服务器都可以销毁
   - 销毁操作不可撤销
   - 销毁后不可恢复

3. 资源清理：
   - 系统盘和数据盘将被删除
   - 网络配置将被清理
   - IP地址将被释放

4. 其他说明：
   - 销毁是异步操作，需要等待一定时间完成
   - 建议在销毁前备份重要数据
   - 销毁后相关资源将立即停止计费 
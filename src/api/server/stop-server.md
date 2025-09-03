---
title: 停止云服务器 StopServer
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 强制停止指定的云服务器实例。
- 相当于断电操作，可能会导致数据丢失。
- 建议先在系统内执行关机操作。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/server/stop</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Query | - | 服务器唯一标识 |

### 请求示例 Example

```bash
POST /aries/api/v1/server/stop?server_ref=i-2ze4hxw8hdik
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">result</span> <span class="type-boolean">boolean</span> | 停止结果，true表示停止指令发送成功 |

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
| 400 | InvalidOperation | 操作无效 | 服务器当前状态不允许停止 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 停止方式：
   - 此接口执行强制停止（相当于断电）
   - 建议先在系统内执行正常关机
   - 强制停止可能导致数据丢失或文件系统损坏

2. 状态限制：
   - 只能停止运行状态的服务器
   - 正在进行其他操作的服务器不能停止

3. 停止影响：
   - 停止后将暂停计费（如果有计费策略）
   - 网络连接会立即断开
   - 内存中的数据会丢失

4. 其他说明：
   - 停止是异步操作，需要等待一定时间完成
   - 可以通过查询服务器状态接口获取停止进度 
---
title: 启动云服务器 StartServer
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 启动指定的云服务器实例。
- 只能启动已停止状态的服务器。
- 启动是异步操作，接口返回后服务器可能仍在启动中。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/server/start</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Query | - | 服务器唯一标识 |

### 请求示例 Example

```bash
POST /aries/api/v1/server/start?server_ref=i-2ze4hxw8hdik
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">result</span> <span class="type-boolean">boolean</span> | 启动结果，true表示启动指令发送成功 |

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
| 400 | InvalidOperation | 操作无效 | 服务器当前状态不允许启动 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 状态限制：
   - 只能启动已停止状态的服务器
   - 正在进行其他操作的服务器不能启动

2. 启动过程：
   - 启动是异步操作，需要一定时间完成
   - 可以通过查询服务器状态接口获取启动进度

3. 启动影响：
   - 启动后将开始计费（如果有计费策略）
   - 启动可能会触发自动化任务（如果配置了启动脚本）

4. 其他说明：
   - 首次启动可能需要较长时间
   - 如果启动失败，服务器将恢复到停止状态 
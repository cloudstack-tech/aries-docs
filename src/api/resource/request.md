---
title: 资源请求 ResourceRequest
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 检查资源是否可用。
- 用于创建服务器前的资源预检。
- 支持检查计算、存储和网络资源。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/resource/request</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">cpu_core_count</span> <span class="type-integer">integer</span> | Body | - | 需要的CPU核心数 |
| <span class="param-name required">memory_size</span> <span class="type-integer">integer</span> | Body | - | 需要的内存大小(MB) |
| <span class="param-name required">disk_size</span> <span class="type-integer">integer</span> | Body | - | 需要的磁盘大小(GB) |
| <span class="param-name">network_bandwidth</span> <span class="type-integer">integer</span> | Body | - | 需要的网络带宽(Mbps) |

### 请求示例 Example

::: details 示例：检查2核4G配置是否可用
```json
{
  "cpu_core_count": 2,
  "memory_size": 4096,
  "disk_size": 40,
  "network_bandwidth": 100
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">available</span> <span class="type-boolean">boolean</span> | 资源是否可用 |

### 响应示例 Example

```json
{
  "available": true
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 资源限制:
   - CPU核心数必须大于0
   - 内存大小必须大于0
   - 磁盘大小必须大于0

2. 检查说明:
   - 检查是否有足够的资源
   - 检查资源是否可分配
   - 不会实际分配资源

3. 使用建议:
   - 创建服务器前先检查资源
   - 注意资源单位换算
   - 预留足够的资源余量 
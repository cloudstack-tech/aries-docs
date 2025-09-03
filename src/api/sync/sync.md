---
title: 同步资源 Sync
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 同步服务器和相关资源的配置。
- 支持批量同步多个服务器。
- 包含计算、存储和网络资源的同步。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/sync</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">data</span> <span class="type-array">array</span> | Body | - | 服务器配置列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">name</span> <span class="type-string">string</span> | Body | - | 服务器名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">compute</span> <span class="type-object">object</span> | Body | - | 计算资源配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">cpu_core_count</span> <span class="type-integer">integer</span> | Body | - | CPU核心数 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">memory_size</span> <span class="type-integer">integer</span> | Body | - | 内存大小(MB) |
| &nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">storage</span> <span class="type-object">object</span> | Body | - | 存储资源配置 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">volumes</span> <span class="type-array">array</span> | Body | - | 存储卷列表 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">name</span> <span class="type-string">string</span> | Body | - | 存储卷名称 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">size</span> <span class="type-number">number</span> | Body | - | 存储卷大小(GB) |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name required">type</span> <span class="type-integer">integer</span> | Body | - | 存储卷类型 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="param-name">image_ref</span> <span class="type-string">string</span> | Body | - | 镜像引用ID |

### 请求示例 Example

::: details 示例：同步多个服务器配置
```json
{
  "data": [
    {
      "name": "web-server-1",
      "compute": {
        "cpu_core_count": 2,
        "memory_size": 4096
      },
      "storage": {
        "volumes": [
          {
            "name": "system-disk",
            "size": 40,
            "type": 0,
            "image_ref": "img-2ze4hxw8hdik"
          }
        ]
      }
    },
    {
      "name": "web-server-2",
      "compute": {
        "cpu_core_count": 4,
        "memory_size": 8192
      },
      "storage": {
        "volumes": [
          {
            "name": "system-disk",
            "size": 80,
            "type": 0,
            "image_ref": "img-2ze4hxw8hdik"
          }
        ]
      }
    }
  ]
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">success</span> <span class="type-boolean">boolean</span> | 是否同步成功 |

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
| 404 | ImageNotFound | 镜像不存在 | 指定的镜像不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |
| 500 | SyncFailed | 同步失败 | 资源同步失败 |

## 注意事项 Notes

1. 同步范围:
   - 服务器基本信息
   - 计算资源配置
   - 存储资源配置

2. 同步说明:
   - 同步是异步操作
   - 可能需要一定时间完成
   - 不影响现有服务

3. 使用建议:
   - 建议在业务低峰期同步
   - 同步前备份重要数据
   - 注意资源配置的正确性 
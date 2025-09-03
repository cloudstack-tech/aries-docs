---
title: 修改云服务器配置 ModifyServerSpec
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 修改指定云服务器的配置规格。
- 支持修改CPU核心数和内存大小。
- 修改配置需要重启服务器才能生效。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="put">PUT</span>
  <span class="route-path">/aries/api/v1/server/modify_spec</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">server_ref</span> <span class="type-string">string</span> | Body | - | 服务器唯一标识 |
| <span class="param-name">cpu_core_count</span> <span class="type-integer">integer</span> | Body | - | CPU核心数 |
| <span class="param-name">memory_size</span> <span class="type-integer">integer</span> | Body | - | 内存大小(MB) |
| <span class="param-name">boot</span> <span class="type-boolean">boolean</span> | Body | true | 修改完成后是否自动启动服务器 |

### 请求示例 Example

```json
{
  "server_ref": "i-2ze4hxw8hdik",
  "cpu_core_count": 4,
  "memory_size": 8192,
  "boot": true
}
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">result</span> <span class="type-boolean">boolean</span> | 修改结果，true表示修改成功 |

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
| 400 | InvalidOperation | 操作无效 | 服务器当前状态不允许修改配置 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 修改限制：
   - CPU核心数必须大于0
   - 内存大小必须大于0
   - 至少需要指定CPU或内存其中一项

2. 操作影响：
   - 修改配置需要重启服务器
   - 重启过程中服务器将不可访问
   - 内存数据会丢失

3. 修改流程：
   - 服务器会先停止
   - 修改配置
   - 根据boot参数决定是否自动启动

4. 其他说明：
   - 建议在业务低峰期修改配置
   - 确保数据已保存后再执行修改
   - 修改完成后需要一定时间才能生效 
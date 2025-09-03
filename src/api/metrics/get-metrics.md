---
title: 获取监控指标 GetMetrics
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 获取系统和资源的监控指标。
- 支持获取多种类型的指标数据。
- 提供实时的性能监控数据。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/metrics/:id</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">id</span> <span class="type-string">string</span> | Path | - | 指标ID，支持以下值：<br/>- summary.total_cpu_core_count：CPU物理核心数<br/>- summary.total_cpu_core_count.logical：CPU逻辑核心数<br/>- summary.total_memory_size：内存总大小<br/>- summary.used_memory_size：已用内存大小<br/>- performance.cpu_usage_percent：CPU使用率 |

### 请求示例 Example

::: details 示例一：获取CPU物理核心数
```http
GET /aries/api/v1/metrics/summary.total_cpu_core_count
```
:::

::: details 示例二：获取CPU使用率
```http
GET /aries/api/v1/metrics/performance.cpu_usage_percent
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">name</span> <span class="type-string">string</span> | 指标名称 |
| <span class="param-name">description</span> <span class="type-string">string</span> | 指标描述 |
| <span class="param-name">value</span> <span class="type-any">any</span> | 指标值 |

### 响应示例 Example

::: details 示例一：CPU物理核心数响应
```json
{
  "name": "summary.total_cpu_core_count",
  "description": "The total number of physical CPU cores",
  "value": 4
}
```
:::

::: details 示例二：CPU使用率响应
```json
{
  "name": "performance.cpu_usage_percent",
  "description": "The percentage of CPU usage",
  "value": 0.45
}
```
:::

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 404 | MetricNotFound | 指标不存在 | 指定的指标不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 指标类型:
   - summary: 汇总类指标，如总量、容量等
   - performance: 性能类指标，如使用率、负载等

2. 数据说明:
   - CPU使用率范围：0-1
   - 内存大小单位：GB
   - 更新频率：实时

3. 使用建议:
   - 建议定期采集以监控趋势
   - 根据实际需求选择合适的指标
   - 注意数据单位的换算 
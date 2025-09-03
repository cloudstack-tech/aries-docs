---
title: 查询镜像详情 DescribeImage
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 查询指定镜像的详细信息。
- 支持通过镜像ID查询。
- 返回镜像的完整信息。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="get">GET</span>
  <span class="route-path">/aries/api/v1/image/:id</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">id</span> <span class="type-integer">integer</span> | Path | - | 镜像ID |

### 请求示例 Example

```bash
GET /aries/api/v1/image/1
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">id</span> <span class="type-integer">integer</span> | 镜像ID |
| <span class="param-name">name</span> <span class="type-string">string</span> | 镜像名称 |
| <span class="param-name">os_type</span> <span class="type-string">string</span> | 操作系统类型 |
| <span class="param-name">os_name</span> <span class="type-string">string</span> | 操作系统名称 |
| <span class="param-name">description</span> <span class="type-string">string</span> | 镜像描述 |
| <span class="param-name">source_path</span> <span class="type-string">string</span> | 镜像源文件路径 |
| <span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |
| <span class="param-name">updated_at</span> <span class="type-string">string</span> | 更新时间 |

### 响应示例 Example

```json
{
  "id": 1,
  "name": "CentOS-7.9-x64",
  "os_type": "linux",
  "os_name": "CentOS",
  "description": "CentOS 7.9 64位基础镜像",
  "source_path": "/path/to/image/file.iso",
  "created_at": "2024-03-20T10:30:00Z",
  "updated_at": "2024-03-20T10:30:00Z"
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | ID格式错误 |
| 404 | ImageNotFound | 镜像不存在 | 指定的镜像不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 查询方式：
   - 仅支持通过ID查询
   - ID必须为正整数
   - ID在创建时自动生成

2. 返回信息：
   - 包含镜像的基本信息
   - 包含镜像的系统信息
   - 包含时间戳信息

3. 使用建议：
   - 建议缓存常用镜像信息
   - 可用于验证镜像是否存在
   - 可用于获取镜像详细配置

4. 其他说明：
   - 查询操作不会影响镜像
   - 可以频繁调用此接口
   - 返回信息中包含敏感路径，注意保护 
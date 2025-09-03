---
title: 创建镜像 CreateImage
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 创建一个新的系统镜像。
- 支持自定义镜像名称和操作系统信息。
- 创建后的镜像可用于创建云服务器。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/image/create</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">name</span> <span class="type-string">string</span> | Body | - | 镜像名称 |
| <span class="param-name required">os_type</span> <span class="type-string">string</span> | Body | - | 操作系统类型(linux/windows) |
| <span class="param-name required">os_name</span> <span class="type-string">string</span> | Body | - | 操作系统名称 |
| <span class="param-name">description</span> <span class="type-string">string</span> | Body | - | 镜像描述信息 |
| <span class="param-name">source_path</span> <span class="type-string">string</span> | Body | - | 镜像源文件路径 |

### 请求示例 Example

```json
{
  "name": "CentOS-7.9-x64",
  "os_type": "linux",
  "os_name": "CentOS",
  "description": "CentOS 7.9 64位基础镜像",
  "source_path": "/path/to/image/file.iso"
}
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">image</span> <span class="type-object">object</span> | 镜像信息对象 |
| <span class="param-name">&nbsp;&nbsp;id</span> <span class="type-integer">integer</span> | 镜像ID |
| <span class="param-name">&nbsp;&nbsp;name</span> <span class="type-string">string</span> | 镜像名称 |
| <span class="param-name">&nbsp;&nbsp;os_type</span> <span class="type-string">string</span> | 操作系统类型 |
| <span class="param-name">&nbsp;&nbsp;os_name</span> <span class="type-string">string</span> | 操作系统名称 |
| <span class="param-name">&nbsp;&nbsp;description</span> <span class="type-string">string</span> | 镜像描述 |
| <span class="param-name">&nbsp;&nbsp;source_path</span> <span class="type-string">string</span> | 镜像源文件路径 |
| <span class="param-name">&nbsp;&nbsp;created_at</span> <span class="type-string">string</span> | 创建时间 |

### 响应示例 Example

```json
{
  "image": {
    "id": 1,
    "name": "CentOS-7.9-x64",
    "os_type": "linux",
    "os_name": "CentOS",
    "description": "CentOS 7.9 64位基础镜像",
    "source_path": "/path/to/image/file.iso",
    "created_at": "2024-03-20T10:30:00Z"
  }
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 400 | ImageExists | 镜像已存在 | 指定名称的镜像已存在 |
| 400 | InvalidSourcePath | 源文件路径无效 | 指定的镜像源文件路径无效或不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 镜像命名规则：
   - 建议使用有意义的名称
   - 建议包含操作系统版本信息
   - 建议包含系统位数信息

2. 操作系统类型：
   - linux: Linux系统
   - windows: Windows系统
   - 必须小写

3. 源文件要求：
   - 支持ISO格式
   - 文件必须可访问
   - 建议使用本地路径

4. 其他说明：
   - 创建镜像为同步操作
   - 创建后即可用于创建服务器
   - 建议提供详细的描述信息 
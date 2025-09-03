---
title: 更新镜像 UpdateImage
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 更新指定镜像的信息。
- 支持修改镜像的名称、描述等信息。
- 不支持修改镜像的源文件。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="put">PUT</span>
  <span class="route-path">/aries/api/v1/image</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">id</span> <span class="type-integer">integer</span> | Body | - | 镜像ID |
| <span class="param-name">name</span> <span class="type-string">string</span> | Body | - | 镜像名称 |
| <span class="param-name">os_type</span> <span class="type-string">string</span> | Body | - | 操作系统类型(linux/windows) |
| <span class="param-name">os_name</span> <span class="type-string">string</span> | Body | - | 操作系统名称 |
| <span class="param-name">description</span> <span class="type-string">string</span> | Body | - | 镜像描述信息 |

### 请求示例 Example

```json
{
  "id": 1,
  "name": "CentOS-7.9-x64-updated",
  "os_type": "linux",
  "os_name": "CentOS",
  "description": "CentOS 7.9 64位基础镜像 - 更新版"
}
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
  "name": "CentOS-7.9-x64-updated",
  "os_type": "linux",
  "os_name": "CentOS",
  "description": "CentOS 7.9 64位基础镜像 - 更新版",
  "source_path": "/path/to/image/file.iso",
  "created_at": "2024-03-20T10:30:00Z",
  "updated_at": "2024-03-20T11:30:00Z"
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 404 | ImageNotFound | 镜像不存在 | 指定的镜像不存在 |
| 400 | ImageNameExists | 镜像名称已存在 | 更新的镜像名称已被使用 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 更新限制：
   - 必须指定镜像ID
   - 不能修改镜像源文件
   - 名称不能与其他镜像重复

2. 可更新字段：
   - 镜像名称
   - 操作系统类型
   - 操作系统名称
   - 描述信息

3. 更新建议：
   - 保持命名的规范性
   - 及时更新描述信息
   - 记录重要的更新内容

4. 其他说明：
   - 更新是同步操作
   - 更新不影响已使用此镜像的服务器
   - 建议在更新前备份重要信息 
---
title: 删除镜像 DeleteImage
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 删除指定的系统镜像。
- 删除操作不可恢复，请谨慎操作。
- 正在使用的镜像不能删除。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="delete">DELETE</span>
  <span class="route-path">/aries/api/v1/image/delete</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">image_ref</span> <span class="type-string">string</span> | Query | - | 镜像唯一标识 |

### 请求示例 Example

```bash
DELETE /aries/api/v1/image/delete?image_ref=img-2ze4hxw8hdik
```

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">result</span> <span class="type-boolean">boolean</span> | 删除结果，true表示删除成功 |

### 响应示例 Example

```json
{
  "result": true
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | image_ref参数为空或格式错误 |
| 404 | ImageNotFound | 镜像不存在 | 指定的镜像不存在 |
| 400 | ImageInUse | 镜像使用中 | 镜像正在被服务器使用，不能删除 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 删除限制：
   - 不能删除正在使用的镜像
   - 不能删除系统内置镜像
   - 删除操作不可恢复

2. 删除影响：
   - 镜像相关的源文件将被清理
   - 镜像的元数据将被删除
   - 删除后不能用于创建服务器

3. 使用建议：
   - 删除前确认镜像未被使用
   - 建议保留重要镜像的备份
   - 谨慎删除生产环境使用的镜像

4. 其他说明：
   - 删除是同步操作
   - 删除后资源立即释放
   - 建议在镜像管理中做好版本控制 
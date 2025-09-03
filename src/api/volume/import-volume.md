---
title: 导入云硬盘 ImportVolume
version: v1
auth: true
prev: true
next: true
---

# {{ $frontmatter.title }}

## 接口说明 Description

- 导入已有的虚拟硬盘作为云硬盘。
- 支持导入系统盘和数据盘。
- 自动识别虚拟硬盘大小。

## 接口信息 API Info

- **接口版本**: v1
- **权限要求**: 需要认证
- **调用频率限制**: -

## 请求 Request

### 请求方式 Route

<div class="route">
  <span class="route-method" data-method="post">POST</span>
  <span class="route-path">/aries/api/v1/volume/import</span>
</div>

### 请求参数 Parameters

| 参数名 Name | 参数位置 In | 默认值 Default | 说明 Description |
| --- | --- | --- | --- |
| <span class="param-name required">name</span> <span class="type-string">string</span> | Body | - | 云硬盘名称 |
| <span class="param-name required">type</span> <span class="type-integer">integer</span> | Body | - | 云硬盘类型：0-系统盘，1-数据盘 |
| <span class="param-name required">save_path</span> <span class="type-string">string</span> | Body | - | 虚拟硬盘文件路径 |

### 请求示例 Example

::: details 示例：导入一个系统盘
```json
{
  "name": "imported-system-disk",
  "type": 0,
  "save_path": "/path/to/disk.vhdx"
}
```
:::

## 响应 Response

### 响应参数 Result

| 参数名 Name | 说明 Description |
| --- | --- |
| <span class="param-name">id</span> <span class="type-integer">integer</span> | 云硬盘 ID |
| <span class="param-name">name</span> <span class="type-string">string</span> | 云硬盘名称 |
| <span class="param-name">type</span> <span class="type-integer">integer</span> | 云硬盘类型 |
| <span class="param-name">size</span> <span class="type-number">number</span> | 云硬盘大小(GB) |
| <span class="param-name">save_path</span> <span class="type-string">string</span> | 存储路径 |
| <span class="param-name">created_at</span> <span class="type-string">string</span> | 创建时间 |

### 响应示例 Example

```json
{
  "id": 1,
  "name": "imported-system-disk",
  "type": 0,
  "size": 40,
  "save_path": "/path/to/disk.vhdx",
  "created_at": "2024-03-20T10:30:00Z"
}
```

## 错误码 Error Codes

| HTTP 状态码 | 错误码 Error Code | 错误信息 Error Message | 说明 Description |
| --- | --- | --- | --- |
| 400 | InvalidParameter | 参数无效 | 请求参数格式错误或缺失必要参数 |
| 400 | InvalidDiskType | 磁盘类型无效 | 磁盘类型必须为0或1 |
| 404 | FileNotFound | 文件不存在 | 指定的虚拟硬盘文件不存在 |
| 500 | InternalError | 内部错误 | 服务器内部错误 |

## 注意事项 Notes

1. 文件格式要求:
   - 支持 VHDX 格式
   - 文件必须可访问

2. 导入说明:
   - 导入过程中会自动识别硬盘大小
   - 导入后不会修改原文件

3. 使用建议:
   - 导入前确认文件完整性
   - 建议使用完整路径 
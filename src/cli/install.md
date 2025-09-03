---
title: CLI 安装指南
version: v1
prev: true
next: true
---

# {{ $frontmatter.title }}

## 系统要求 Requirements

- 操作系统：Windows/Linux/macOS
- 系统架构：x86_64/amd64
- 磁盘空间：至少100MB可用空间
- 网络：需要访问互联网下载安装包

## 下载安装 Installation

### Windows

1. 下载安装包：
   ```bash
   # PowerShell
   Invoke-WebRequest -Uri "https://github.com/cloudstack-tech/aries/releases/latest/download/aries-windows-amd64.zip" -OutFile "aries.zip"
   ```

2. 解压安装包：
   ```bash
   Expand-Archive -Path "aries.zip" -DestinationPath "C:\Program Files\Aries"
   ```

3. 添加环境变量：
   - 右键"此电脑" → "属性" → "高级系统设置" → "环境变量"
   - 在"系统变量"中找到"Path"
   - 点击"编辑" → "新建"
   - 添加"C:\Program Files\Aries"
   - 点击"确定"保存

### Linux

1. 下载并安装：
   ```bash
   # 下载安装包
   curl -LO https://github.com/cloudstack-tech/aries/releases/latest/download/aries-linux-amd64.tar.gz

   # 解压到/usr/local/bin
   sudo tar -C /usr/local/bin -xzf aries-linux-amd64.tar.gz
   ```

2. 添加执行权限：
   ```bash
   sudo chmod +x /usr/local/bin/aries
   ```

### macOS

1. 使用Homebrew安装：
   ```bash
   brew tap cloudstack-tech/aries
   brew install aries
   ```

2. 手动安装：
   ```bash
   # 下载安装包
   curl -LO https://github.com/cloudstack-tech/aries/releases/latest/download/aries-darwin-amd64.tar.gz

   # 解压到/usr/local/bin
   sudo tar -C /usr/local/bin -xzf aries-darwin-amd64.tar.gz
   ```

## 验证安装 Verification

安装完成后，运行以下命令验证：

```bash
# 查看版本
aries version

# 查看帮助
aries help
```

## 配置 Configuration

1. 创建配置目录：
   ```bash
   # Windows
   mkdir %USERPROFILE%\.aries

   # Linux/macOS
   mkdir ~/.aries
   ```

2. 创建配置文件：
   ```bash
   # Windows
   copy nul %USERPROFILE%\.aries\config

   # Linux/macOS
   touch ~/.aries/config
   ```

3. 编辑配置文件：
   ```yaml
   # 服务配置
   server:
     endpoint: http://localhost:8080
     timeout: 30s

   # 认证配置
   auth:
     username: admin
     password: password

   # 输出配置
   output:
     format: json
     color: true
   ```

## 命令补全 Shell Completion

### Bash

```bash
# 添加到 ~/.bashrc
source <(aries completion bash)
```

### Zsh

```bash
# 添加到 ~/.zshrc
source <(aries completion zsh)
```

### PowerShell

```powershell
# 添加到 $PROFILE
aries completion powershell | Out-String | Invoke-Expression
```

## 卸载 Uninstallation

### Windows

1. 删除程序文件：
   ```bash
   Remove-Item -Recurse -Force "C:\Program Files\Aries"
   ```

2. 删除配置文件：
   ```bash
   Remove-Item -Recurse -Force "$env:USERPROFILE\.aries"
   ```

3. 从环境变量中移除

### Linux/macOS

1. 删除程序文件：
   ```bash
   sudo rm /usr/local/bin/aries
   ```

2. 删除配置文件：
   ```bash
   rm -rf ~/.aries
   ```

## 常见问题 FAQ

1. 安装后提示"command not found"
   - 检查环境变量是否正确配置
   - 重新打开终端或重启系统
   - 验证安装路径是否正确

2. 配置文件无法加载
   - 检查配置文件权限
   - 验证配置文件格式
   - 确认配置文件路径正确

3. 命令补全不生效
   - 确认shell类型正确
   - 重新加载shell配置
   - 检查补全脚本是否正确安装

4. 其他问题
   - 查看详细日志：使用--debug参数
   - 检查系统要求是否满足
   - 参考在线文档或提交Issue 
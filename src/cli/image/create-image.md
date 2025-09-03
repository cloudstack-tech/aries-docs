# 创建镜像

```bash
@echo off
set GIN_MODE=release

:: 导入默认系统镜像卷
# aries.exe volume import win_server_2022_21H2_x64_dtc_zh-cn_40G_cloudstack_20241124.vhdx --uuid=70023a87-bd35-4d76-8e65-b546b393924e --file="D:\\Hyper-V\\Virtual Hard Disks\\win_server_2022_21H2_x64_dtc_zh-cn_40G_cloudstack_20241124.vhdx" --size=40 --type=0

:: 创建默认系统镜像
aries.exe image create win_server_2022_21H2_x64_dtc_zh-cn_20G_cloudstack_20241124.vhdx --uuid=01636970-e0a5-4f62-a1b7-3cfd8709e6b9 --version="v2024.11.24" --status="可用" --size=40 --os_name="Windows Server 2022 数据中心版 64位中文版" --os_type="Windows Server" --os_platform="windows" --os_architecture=x86_64 --boot_mode=BIOS --init_type=cloud-init --file="D:\\Hyper-V\\Virtual Hard Disks\\win_server_2022_21H2_x64_dtc_zh-cn_20G_cloudstack_20241124.vhdx"

pause
```
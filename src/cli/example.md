# Example 1

```bash
@echo off
set GIN_MODE=release
:: 导入默认系统镜像卷
# aries.exe volume import win_server_2022_21H2_x64_dtc_zh-cn_40G_cloudstack_20241124.vhdx --uuid=70023a87-bd35-4d76-8e65-b546b393924e --file="D:\\Hyper-V\\Virtual Hard Disks\\win_server_2022_21H2_x64_dtc_zh-cn_40G_cloudstack_20241124.vhdx" --size=40 --type=0
:: 创建默认系统镜像
aries.exe image create win_server_2022_21H2_x64_dtc_zh-cn_20G_cloudstack_20241124.vhdx --uuid=01636970-e0a5-4f62-a1b7-3cfd8709e6b9 --version="v2024.11.24" --status="可用" --size=40 --os_name="Windows Server 2022 数据中心版 64位中文版" --os_type="Windows Server" --os_platform="windows" --os_architecture=x86_64 --boot_mode=BIOS --init_type=cloud-init --file="D:\\Hyper-V\\Virtual Hard Disks\\win_server_2022_21H2_x64_dtc_zh-cn_20G_cloudstack_20241124.vhdx"
pause
```

# Example 2

```bash
# 导入虚拟交换机
aries vswitch import lan --vsw lan
aries vswitch import wan --vsw wan

# 创建ikuai软路由镜像
aries server create ikuai ^
  --uuid 01636970-e0a5-4f62-a1b7-3cfd8709e6b9^
  --version "v2024.11.24"^
  --status "可用"^
  --size 1^
  --os-name "IKuai"^
  --os-type "IKuai"^
  --os-platform "linux"^
  --os-architecture x86_64^
  --boot-mode bios^
  --file "D:\\Hyper-V\\Images\\ikuai.vhdx"

# 创建ikuai软路由 2H 2G 1G
aries server create ikuai ^
	--cpu-core-count 2 ^
	--memory-size 4096 ^
	--volume "type=1,size=1,image_ref=b25c23b3-0ad9-4a18-99db-6af737d7197c"^
	--net-adapter "name=lan1,vswitch_name=lan" ^
	--net-adapter "name=wan1,vswitch_name=wan" ^

# 创建镜像
aries image create win_server_2022_21H2_x64_dtc_zh-cn_20G_cloudstack_20250629.vhdx ^
  --uuid 01636970-e0a5-4f62-a1b7-3cfd8709e6b9^
  --version "v2024.11.24"^
  --status "可用"^
  --size 20^
  --os-name "Windows Server 2022 数据中心版 64位中文版"^
  --os-type "Windows Server"^
  --os-platform "windows"^
  --os-architecture x86_64^
  --boot-mode bios^
  --init-type "cloud-init"^
  --file "D:\\Hyper-V\\Images\\win_server_2022_21H2_x64_dtc_zh-cn_20G_cloudstack_20250629.vhdx"
  
# 创建服务器
# 创建 2H 4G 60G Windows Server 2022 服务器
aries server create iZgFdtlNTy9f^
	--cpu-core-count 2 ^
	--memory-size 4096 ^
	--volume "type=0,size=60,image_ref=01636970-e0a5-4f62-a1b7-3cfd8709e6b9"^
	--net-adapter "vswitch_name=lan,max_bandwitdh_out=10"^
	--username Administrator^
	--password "YTJTh2aIiOX47U1xn4QK"^
	--port 3389:11309^
	--port 25565:35656
	
# 查看服务器
aries server show iZgFdtlNTy9f
aries server show iZgFdtlNTy9f --json

# 检查服务器
aries server inspect iZgFdtlNTy9f
aries server inspect iZgFdtlNTy9f --json

# 关闭服务器
aries server stop iZgFdtlNTy9f

# 启动服务器
aries server start iZgFdtlNTy9f

# 重启服务器
aries server reboot iZgFdtlNTy9f

# 挂起服务器
aries server suspend iZgFdtlNTy9f

# 恢复服务器
aries server resume iZgFdtlNTy9f

# 强制关闭服务器
aries server stop iZgFdtlNTy9f --force

# 修改服务器配置, 仅修改 vCPU
aries server set iZgFdtlNTy9f --cpu-core-count 4 --stop

# 修改服务器配置, 仅修改 内存
aries server set iZgFdtlNTy9f --memory-size 2048

# 修改服务器配置, 同时修改 vCPU 和 内存
aries server set iZgFdtlNTy9f^
	--cpu-core-count 4^
	--memory-size 2048^
	--stop

# 扩容系统卷
aries volume expand $(aries inspect iZgFdtlNTy9f --resource volume[0] --ref-only) 20
aries volume expand $(aries inspect iZgFdtlNTy9f --resource system-volume --ref-only) 20

# 创建数据卷
aries volume create test^
  --size 20^
  --type "data"

# 挂载数据卷
aries volume mount test iZgFdtlNTy9f

# 扩容数据卷
aries volume expand test 10

# 卸载数据卷
aries volume unmount test

# 删除数据卷
aries volume delete test

# 设置服务器 IP
aries network set $(aries inspect iZgFdtlNTy9f --resource netadapter[0] --ref-only)^
  --ipv4-address "172.16.0.3"^
  --ipv4-netmask "255.255.0.0"^
  --ipv4-gateway "172.16.0.1"

# 设置服务器带宽限速
# aries network qos set 
aries network set $(aries inspect iZgFdtlNTy9f --resource netadapter[0] --ref-only)^
	--max-mbps 15^
	--max-burst-kbits 15

# 设置服务器网卡mac地址
aries network set $(aries inspect iZgFdtlNTy9f --resource netadapter[0] --ref-only)^
  --mac-address "50:02:0A:DA:AB:9F"

# 设置服务器网卡vLan ID
aries network set $(aries inspect iZgFdtlNTy9f --resource netadapter[0] --ref-only)^
  --vlan-id 2

# 设置服务器网卡连接交换机
aries network connect $(aries inspect iZgFdtlNTy9f --resource netadapter[0] --ref-only) lan

# 取消连接
aries network disconnect $(aries inspect iZgFdtlNTy9f --resource netadapter[0] --ref-only)

# 创建新网卡
aries network create nD9EmLld^
  --uuid ac59340b-4a1d-41df-b1f6-09c2386cbcbd^
  --ipv4_address "172.16.0.3"^
  --ipv4_netmask "255.255.0.0"^
  --ipv4_gateway "172.16.0.1"^
  --max-mbps 10^
	--max-burst-kbits 10^
	# --vlan-id 2
	# --mac-address "50:02:0A:DA:AB:9F"
	# --server_ref $(aries inspect iZgFdtlNTy9f --ref-only)

# 绑定新网卡
aries network attach nD9EmLld iZgFdtlNTy9f

# 创建端口映射
aries network pfr create nD9EmLld --source 3389 --target 13389

# 修改端口映射
aries network pfr set nD9EmLld --source 3389 --target 23389

# 查看端口映射
aries network pfr show nD9EmLld
aries network pfr show nD9EmLld --source 3389

# 删除端口映射
aries network pfr delete nD9EmLld --source 3389

# 解绑新网卡
aries network unattach nD9EmLld

# 删除网卡
aries network delete nD9EmLld

# 删除服务器
aries server delete iZgFdtlNTy9f --resource
```
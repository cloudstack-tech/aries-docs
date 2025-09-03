# 创建镜像

## Windows镜像制作流程

1. 配置临时 IP


2. 安装 [cloudbase-init](https://cloudbase.it/cloudbase-init/#download)

    - 开启自动启动服务(services.msc -> Cloudbase)
    - 修改配置文件 C:\\Program Files\\Cloudbase Solutions\\Cloudbase-Init\\conf

> https://github.com/cloudbase/cloudbase-init

```bash
metadata_base_url=http://172.16.0.2/
password_server_port=80
metadata_services=cloudbaseinit.metadata.services.httpservice.HttpService, cloudbaseinit.metadata.services.configdrive.ConfigDriveService
plugins=cloudbaseinit.plugins.common.sethostname.SetHostNamePlugin,cloudbaseinit.plugins.common.sethostname.SetHostNamePlugin,cloudbaseinit.plugins.common.setuserpassword.SetUserPasswordPlugin,cloudbaseinit.plugins.common.networkconfig.NetworkConfigPlugin,cloudbaseinit.plugins.common.sshpublickeys.SetUserSSHPublicKeysPlugin,cloudbaseinit.plugins.windows.extendvolumes.ExtendVolumesPlugin,cloudbaseinit.plugins.windows.winrmlistener.ConfigWinRMListenerPlugin,cloudbaseinit.plugins.windows.winrmcertificateauth.ConfigWinRMCertificateAuthPlugin,cloudbaseinit.plugins.common.localscripts.LocalScriptsPlugin,cloudbaseinit.plugins.windows.licensing.WindowsLicensingPlugin,cloudbaseinit.plugins.windows.ntpclient.NTPClientPlugin,cloudbaseinit.plugins.common.mtu.MTUPlugin,cloudbaseinit.plugins.common.userdata.UserDataPlugin,cloudbaseinit.plugins.common.trim.TrimConfigPlugin,cloudbaseinit.plugins.windows.sanpolicy.SANPolicyPlugin,cloudbaseinit.plugins.windows.rdp.RDPSettingsPlugin,cloudbaseinit.plugins.windows.rdp.RDPPostCertificateThumbprintPlugin,cloudbaseinit.plugins.windows.pagefiles.PageFilesPlugin,cloudbaseinit.plugins.windows.displayidletimeout.DisplayIdleTimeoutConfigPlugin,cloudbaseinit.plugins.windows.bootconfig.BootStatusPolicyPlugin,cloudbaseinit.plugins.windows.bootconfig.BCDConfigPlugin,cloudbaseinit.plugins.common.ephemeraldisk.EphemeralDiskPlugin,cloudbaseinit.plugins.windows.updates.WindowsAutoUpdatesPlugin,cloudbaseinit.plugins.windows.certificates.ServerCertificatesPlugin
netbios_host_name_compatibility=false
username=Administrator
rename_admin_user=true
first_logon_behaviour=no
volumes_to_extend=1,2,3
winrm_configure_http_listener=true
san_policy=OnlineAll
```
3. 关闭防火墙
4. 启用远程桌面连接
5. 桌面显示我的电脑
6. 关闭增强的IE安全配置
7. 查看隐藏项目和后缀名
8. 电源和睡眠设置 - 其他电源设置 - 高性能，同时设置 从不休眠
9. [关闭账户策略和密码策略](https://help.aliyun.com/zh/ecs/user-guide/for-safety-consideration-have-lock-the-user-account-the-reason-is-that-login-attempt-or-password-change-try-too-much?spm=a2c4g.11186623.help-menu-25365.d_4_1_5_10_1_1.76ad4e9cJZYtdw)

10. 删除恢复分区

```bash
diskpart
list disk
select disk 0
list partition
select partition 3
delete partition override
```

9. 删除临时 IP
10. ~~初始化分盘(系统盘+数据盘)~~
11. ~~安装默认应用(bandizip, vscode + 汉化, 百度网盘)~~
12. ~~关闭系统自动更新~~
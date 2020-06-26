# 百度云破解教程

---
> 教程前提是自己会爬梯子

## 安装油猴及网盘助手插件

【油猴(Tampermonkey)】下载地址：
<https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN>

【网盘助手】插件下载地址：
<https://greasyfork.org/zh-CN/scripts/378301>

【aria2管理插件(YAAW)】插件下载地址：
<https://chrome.google.com/webstore/detail/yaaw-for-chrome/dennnbdlpgjgbcjfgaohdahloollfgoc>

## 安装aria2下载软件

【aria2(已配置好)】下载地址：
<https://oldkingclub.github.io/soft/aria2.zip>

下载好后将软件解压到`D:\aria2`目录
解压后文件如下
![](https://oldkingclub.github.io/public_images/aria2_files.png)

双击`Aria2Run.vbs`运行即可。

Aria2管理后台为<https://aria2c.com>或通过【YAAW插件进入】

## 下载百度盘文件

> 保证前面的环境全部安装

网页登陆百度网盘<https://pan.baidu.com/disk/home>
勾选下载内容->生成链接->右击生成链接->选择`ARIA2 RPC`
即可将任务发送到`aria2`,前往【YAAW插件】查看任务即可。
![](https://oldkingclub.github.io/public_images/aria2_download_baidupan.png)
![](https://oldkingclub.github.io/public_images/aria2_yaaw_start.png)
![](https://oldkingclub.github.io/public_images/aria2_yaaw_status.png)

## 常见问题

### 1.无权限下载文件

一般可以通过修改应用ID可解决，应用ID通过<https://greasyfork.org/zh-CN/scripts/378301>中的`☆FAQ`获取备用ID，修改方法如下
![](https://oldkingclub.github.io/public_images/aria2_baidupan_change_id_1.png)
![](https://oldkingclub.github.io/public_images/aria2_baidupan_change_id_2.png)

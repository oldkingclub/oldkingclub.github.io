# WindowsHome 安装Docker

主要注意 开启 Hyper-v 修改 注册表为 专业版后再进行安装即可

* 修改注册表

`win + R 进入 regedit，定位到计算机
\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion ，将Edition ID 一栏双击点开，修改为 Professional`

* 参考链接：[https://www.jianshu.com/p/0d81c9359edf](https://www.jianshu.com/p/0d81c9359edf)
* 添加docker 镜像

```json
{
    "registry-mirrors": [
    "https://hub-mirror.c.163.com/",
    "https://reg-mirror.qiniu.com"
    ],
    "insecure-registries": [],
    "debug": true,
    "experimental": false
}
```


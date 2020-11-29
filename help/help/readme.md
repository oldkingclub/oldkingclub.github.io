# 老王帮你做交易使用教程

## 1. 网站注册（必须使用谷歌浏览器）

[点此进入网站主页](https://oldkingclub.gitee.io/)

初次使用请点击右上角登陆进行注册

![](https://oldkingclub.gitee.io/public_images/wkjbot_4.png)

![](https://oldkingclub.gitee.io/public_images/wkjbot_5.png)

需要使用QQ邮箱，并添加邮箱域名白名单，oldking.club

![](https://oldkingclub.gitee.io/public_images/qqmail_whitelist.png)

![](https://oldkingclub.gitee.io/public_images/wkjbot_6.png)

## 2. 配置交易所API 

* 玩客家交易所地址

![](https://oldkingclub.gitee.io/public_images/wkj_ref.png)

注册后获取API 密钥对

![](https://oldkingclub.gitee.io/public_images/wkj_getapi.png)

将获取到的密钥对填入软件

![](https://oldkingclub.gitee.io/public_images/wkjbot_7.png)

密钥正确则可以正确查询到余额

![](https://oldkingclub.gitee.io/public_images/wkjbot_8.png)

## 3. 配置交易对，开始自动交易



> 策略举例： 交易对为`usdt/bitcny` 挂单阀值为 0.003 利润为0.003，挂单数量为100`USDT`  初始价格为6.5元，当价格为 $6.5\times(1+0.003)=6.52$ 时机器挂一手卖单100`USDT`, 并再挂一手价格 为 $6.52 \times (1-0.003) = 6.5$ 数量为100`USDT`的买单，当价格到6.5时，机器人挂的两单都会成交，获利 $(6.52-6.5)\times100=2$元。



![](https://oldkingclub.gitee.io/public_images/wkjbot_9.png)

![](https://oldkingclub.gitee.io/public_images/wkjbot_10.png)

[点此进入网站主页](https://oldkingclub.gitee.io/)
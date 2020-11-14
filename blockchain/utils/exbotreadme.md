# 《老王帮你做交易》软件说明

> 自行准备*谷歌浏览器* 其它浏览器无法运行

## 1. 软件运行

[点此下载](http://cdn.oldking.club:2086/v1/download/wkjbot.rar)

软件压缩包解压到不含中文目录，如下

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_1.png)

提示网络请求请同意

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_2.png)



打开软件后，在桌面右下角托盘处右击 `BTC`图标，点击打开控制中心，即可进入网页端控制中心。

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_3.png)





初次使用请点击右上角登陆进行注册

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_4.png)





![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_5.png)

需要使用QQ邮箱，并添加邮箱域名白名单，oldking.club

![](http://cdn.oldking.club:2086/v1/download/public_images/qqmail_whitelist.png)

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_6.png)

## 2. 配置交易所API 

* 玩客家交易所地址

![](http://cdn.oldking.club:2086/v1/download/public_images/wkj_ref.png)

注册后获取API 密钥对

![](http://cdn.oldking.club:2086/v1/download/public_images/wkj_getapi.png)

将获取到的密钥对填入软件

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_7.png)

密钥正确则可以正确查询到余额

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_8.png)

## 3. 配置交易对，开始自动交易



> 策略举例： 交易对为btc/bitcny 挂单阀值为 0.003 利润为0.003，挂单数量为0.01  初始价格为100000元，当价格为100000*(1+0.003)=100300时机器挂一手卖单0.01, 并再挂一手价格 为 100300 * (1-0.003) = 99999.1 数量为0.01 的买单，当价格到99999.1时，机器人挂的两单都会成交，获利 1003-999.1=3.9元。



![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_9.png)

![](http://cdn.oldking.club:2086/v1/download/public_images/wkjbot_10.png)


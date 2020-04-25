## TCP协议灵魂之问，巩固你的网路底层基础
[https://juejin.im/post/5e527c58e51d4526c654bf41]

1. TCP 和UDP的区别
    共同点： 位于传输层(两种协议， 应用场景， 传输内容)
    应用层(HTTP)-> 表示层(解码和编码，加密解密...)-> 会话层(session)->传输层(TCP)->网络层(IP)->数据链路层(mac地址)->物理层   OSI七层(open system interconnection)
    Web   TCP/IP  jpeg  Content-Type  images/jpeg
    TCP Transmission Control System  传输控制协议

    客户端  Client  浏览器  domain/index.html   10kb  html   src  并发http请求  
    服务器 Server
    HTTP协议  domain   ->   服务器ip   建立连接  req
    res -> Client  
    10KB?    字节流
    TCP 建立连接  可信的  可控制的
    index.html  10KB 排序  不能少传 
    - TCP是一个面向连接的， 可靠的(按序到达，有状态， 可控制)， 基于字节流的传输层协议 
        buffer 
    - UDP 不太多，网络直播， 电影   传输速度为主要的要求的  数据的到达  完整性并不要求高 
    面向无连接的传输层协议 User Datagram Protocol      TCP 诸葛亮  UDP 老子


- http -> switch protocol tcp 链接不关闭
服务器端可以推送数据到客户端 
webscoket解决的就是服务器端不能推送数据的问题
wss: http https

    短轮询， -》 长轮询 -》 websocket

    web im 实时通信

    1. 二维码扫描问题 轮询， 不对的
        缺点: 
        setInterval(() => {
            错过一些数据， 不同步
        }, 300)
        - http 的开销太高了
        延迟性高， 非常消耗请求资源， 影响性能



    浏览器端越来越向传统的客户端迈进接近


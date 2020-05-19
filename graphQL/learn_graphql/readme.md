## 
- 简历技能点描述， 从词 -> 话语(vue + graphQL) -> 花语

- 看下这个url 设计的科学吗？ 文章posts   查看某一篇  /posts/show/1
    RESTFUL   URL里不要有动词
    不科学，    /posts/1
    因为  RERSTFUL  它是后端暴露资源的解决方案， 多年来一直受追捧 
    RESTFUL是URL的设计之美  
    1. HTTP动词
        GET/POST/DELETE/PATCH/PUT...  动词仅限这些
    2. 每一个URL 代表一种资源  /posts/1  名词
    3. 客户端通过http动词，对服务器资源进行操作， 实现表现层状态转化


    设计一个URL  网上汇款， 从账户1向账户2汇款520元， url?
    资源是什么？ 发生了什么样的改变呢？
    /transfer   动词

    /account/1/transfer/500/2    动词       /posts/show/1
    /transaction    交易  ->  website 独立的模块   HTTP 1.1
    POST 状态转化   from1&to=2$amount=500.00   req  body

- 不过在近几年来， RESTFUL 被前端新的理念革命了， GraphQL, 让前端更好的
使用及定义数据接口， swagger   API   文档  Apollo   不浪费数据， 数据格式更加严谨

restful  谓语动词， 受后端的影响大控制大， 
vuex -> GraphQL(api) -> mockjs -> server   RESTFUL
GraphQL  让前端对数据接口拥有了更大的话语权， 
GraphqL完善的api层的定义

QL  queryLanguage



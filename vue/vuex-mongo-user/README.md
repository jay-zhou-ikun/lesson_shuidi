1. 数据流通
    数据绑定 -> 数据流
    vuex 三峡 
    - mongodb  ->  api  -> vuex -> component
        1. 数据流源头在mongodb express 更数据库服务器通信
        store state 两种获取方式
        this.4store.state
        computed mapGetters 方法 state 读
        
        数据流
        node  :3000/users/  :3000/users/tag/:tag 数据的源头
        User.find({tags: tag}) 
        api
            fetchUsers
            fetchUsersByTag
        veux 接管一下  大型
        读 this.$store,state.users
            this.$store.dispatch('fetchUsers')
        写  tag  change 
            mapAction('queryTag',evt)
        components  APP.vue

    - 应用场景  vuex 设计思考  精彩  mongodb 索引 

      db.users.find({tags: 'coding'}).explain("executionStats");
    db.users.find({tags: 'coding'}).explain("executionStats");
"stage" : "COLLSCAN",   collectionScan  检索整个的collction
"totalDocsExamined" : 4, 
  "totalKeysExamined" : 0,  没有利用上任何一个索引

db.users.ensureIndex({"tags":1}); 建立索引

100万用户  查询就是慢下来？ 
为tags 集合建立一个索引
vuex mutations actions 
db.users.ensureIndex({"tags":1});
db.users.getIndexSpecs();  获得所有索引
db.users.dropIndex("")


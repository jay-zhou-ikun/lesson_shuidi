1. mongodb 跟mysql 的本质区别是？
 - NOSQL    SQL 数据库三大范式
 - NOSQL doc 允许一定的存储冗余

 user_id  name  orders  展示订单
 1. 展示订单  分页 element-ui PC后台  运营部门  
    总数  第一季度  单品最佳。。。。

 2. 用户来说  最多的查询是什么？    更大
    price  -> products  推荐
    orders   我的订单  user_id  name   不需要关联 user 表

orders  orderLines  total   便于查询  用户
- 总销量
   total  ->  _id
   $sum  total  
   fillter  | linux grep

   第一季度  每个州   销量最多的sku 的第一名

   aggregate 应用场景
   - 第一季度  orderDate  ISODate() $lt   $gt  2019
   - 每个州  $state   分组的依据    $group   state  
   - 销量最多 orderLines.sku  $group  分组  $sum    orderLines.qty
   - sku   第一名  orderby  

   $match   ==   where  
   db.orders.aggregate([ {     $match: {        status: "completed",        orderDate: {           $gte: ISODate("2019-01-01"),           $lt: ISODate("2019-04-01")        }     } } ]);

    $unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。

   db.orders.find({_id: ObjectId("5dbe7a545368f69de2b4d377")}).pretty();

   db.orders.aggregate([ {     $match: {        status: "completed",        orderDate: {           $gte: ISODate("2019-01-01"),           $lt: ISODate("2019-04-01")        }     } } ,{ $unwind: "$orderLines" }]);

   db.orders.aggregate([ {   $match: {       status: "completed",       orderDate: {           $gte: ISODate("2019-01-01"),           $lt: ISODate("2019-04-01")       }   } } , { $unwind: "$orderLines"}, {   $group: {     _id: {        state: "$state",        sku: "$orderLines.sku"     },     count: {       $sum: "$orderLines.qty"     }   } }]);

   db.orders.aggregate([ {   $match: {       status: "completed",       orderDate: {           $gte: ISODate("2019-01-01"),           $lt: ISODate("2019-04-01")       }   } } , { $unwind: "$orderLines"}, {   $group: {     _id: {        state: "$state",        sku: "$orderLines.sku"     },     count: {       $sum: "$orderLines.qty"     }   } }, {    $sort: {       "_id.state": 1,       "count": -1     } },  {     $group:          {            _id: "$_id.state",            sku: {                   $first: "_id.sku"            },            count: {                 $first: "$count"            }           }    } ]);

   db.orders.aggregate([
    {
        // 步骤1：匹配条件
        $match: {
            status: "completed",
            orderDate: {
                $gte: ISODate("2019-01-01"),
                $lt: ISODate("2019-04-01")
            }
        }
    }, {
        // 步骤2：按订单行展开
        $unwind: "$orderLines"
    }, {
        // 步骤3：按sku汇总
        $group: {
            _id: {
                state: "$state",
                sku: "$orderLines.sku"
            },
            count: {
                $sum: "$orderLines.qty"
            }
        }
    }, {
        // 步骤4：按州和销量排序
        $sort: {
            "_id.state": 1,
            "count": -1
        }
    }, {
        // 步骤4：取每个州top1
        $group: {
            _id: "$_id.state",
            sku: {
                $first: "$_id.sku"
            },
            count: {
                $first: "$count"
            }
        }
    }
])
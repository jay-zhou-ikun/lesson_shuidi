// nb email 正则表达式
//  543882743@qq.com

// 一定要匹配到，+    (\.[0-9a-zA-Z_-]+)+
//   shunwu2001@sina.com.cn
  console.log(/^[\w-]+@+[\w-]+(\.[0-9a-zA-Z_-]+)+$/.test("shunwu2001@sina.com.cn"));
    
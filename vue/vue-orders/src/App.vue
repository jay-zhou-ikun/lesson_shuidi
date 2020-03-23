<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <h1>订单管理</h1>
    <!-- el -form -->
    <el-table v-loading="listLoading" :data="list">
      <el-table-column label="ID" prop="_id" align="center" width="80" >
        <template slot-scope="{row}">
          <span class="red">{{row._id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200" >
        <template slot-scope="{row}">
          <span class="red">{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="500" >
        <template slot-scope="{row}">
          <span class="red">{{row.orderDate}}</span>
        </template>
      </el-table-column>
       <el-table-column label="状态" prop="status" align="center" width="100" >
        <template slot-scope="{row}">
          <span class="red">{{row.status}}</span>
        </template>
      </el-table-column>
       <el-table-column label="邮费" prop="shippingFee" align="center" width="100" >
        <template slot-scope="{row}">
          <span class="red">{{row.shippingFee}}</span>
        </template>
      </el-table-column>
      <el-table-column label="单价" prop="total" align="center" width="100" >
        <template slot-scope="{row}">
          <span class="red">{{row.total}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    :current-page.sync="page"
    :total="total"
    :pageSize="limit"
    layout="total, prev, pager, next"
    @current-change="handleCurrentChange"
    >

    </el-pagination>
  </div>
</template>

<style>
.red {

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Axios from 'axios';
export default {
  data() {
    return {
      page: 1,
      total: 0,
      limit: 20,
      listLoading: true, //加载数据中
      list: [
        // {
        //   '_id': "122323121",
        //   "name": '周小莫1',
        //   "orderDate": new Date(),
        //   "status": 'completed',
        //   "shippingFee": 0.5,
        //   "total": 999
        // },
        // {
        //   '_id': "122323121",
        //   "name": '周小莫2',
        //   "orderDate": new Date(),
        //   "status": 'canceled',
        //   "shippingFee": 2.5,
        //   "total": 9994
        // },
        // {
        //   '_id': "122323121",
        //   "name": '周小莫3',
        //   "orderDate": new Date(),
        //   "status": 'created',
        //   "shippingFee": 1.5,
        //   "total": 9996
        // }
      ]
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.listLoading = false;
    // }, 1000);
    Axios.post('/api/orders', {
      params: {
        // 分页
      }
    })
    .then((res) => {
      console.log(res);
      this.list = res.data.orders
      setTimeout(() => {
        this.listLoading = false
      }, 1000)
    })
  },
  methods: {
    handleCurrentChange(page) {
      console.log(page)
    }
  }
};
</script>

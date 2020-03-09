<template>
  <div id="app">
    <carousel height="150px">
      <carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </carousel-item>
    </carousel>
    <!-- <carousel-item /> -->
   <!-- <el-alert
    title="成功提示的文案"
    type="success"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="消息提示的文案"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="警告提示的文案"
    type="warning"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
  <el-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert> -->
  </div>
</template>

<script>
// import ElAlert from './components/ElAlert.vue'

export default {
  name: 'App',
  components: {
    // ElAlert
    // 'carousel': Carousel,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  background-color: green;
}
</style>

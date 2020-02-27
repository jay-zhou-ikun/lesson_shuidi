<template>
  <div class="search">
      搜索结果
      <hr />
      {{this.$route.query.searchData}}
  </div>
</template>

<script>
export default {
    name: 'Search',
    cpmponents: {

    },
    mounted() { // 生命周期
        console.log(this.$route.query.searchData);
    },
}
</script>

<style>

</style>
<template>
  <div @click="close">
      <!-- 头部 -->
      <Search />
      <!-- 导航部分 -->
      <navList />
      <!-- 产品部分 -->
      <Product />
      <!-- 底部 -->
      <Bottom />
  </div>
</template>

<script>
import Search from "./search"
import navList from "./navList"
import Product from "./product"
import Bottom from "./bottom"
export default {
  name: 'Tour',
  data() {
      return{

      }
  },
  components:{
      Search,
      navList,
      Product,
      Bottom
  },
   methods:{
     close() {
           this.$bus.$emit("close")
       }
   },
  
}
</script>

<style lang="less" scoped>

</style>

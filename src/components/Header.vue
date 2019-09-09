<template>
  <div class="header">
    <a href="#" class="return"></a>
    <div class="header-title">登录</div>
    <a href="#" class="skipHome"></a>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="scss">
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .header-title{
      color: #333;
      font-size: 18px;
    }
    .return{
      display: block;
      width: 25px;
      height: 25px;
      background: url("http://c-shuqi.11222.cn/assets/backIcon_ba492d1.png") no-repeat;
      background-size: cover;
    }
    .skipHome{
      display: block;
      width: 25px;
      height: 25px;
      background: url("http://c-shuqi.11222.cn/assets/home_48a04f5.png") no-repeat;
      background-size: cover;
    }
  }
</style>

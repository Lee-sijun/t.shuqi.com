<template>
  <div class="login">
    <div class="header">
      <a href="#" class="return"></a>
      <div class="header-title">登录</div>
      <a href="#" class="skipHome"></a>
    </div>
    <span class="login-header-bottom-xian"></span>
  </div>
</template>

<script>
  export default {
     name: "Login",
  }
</script>

<style scoped lang='scss'>
 .header{
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    .header-title{
      color: #333;
      font-size: 16px;
    }
    a{
      margin-top: 10px;
    }
    .return{
      display: block;
      width: 20px;
      height: 20px;
      background: url("http://c-shuqi.11222.cn/assets/backIcon_ba492d1.png") no-repeat;
      background-size: cover;
    }
    .skipHome{
      display: block;
      width: 20px;
      height: 20px;
      background: url("http://c-shuqi.11222.cn/assets/home_48a04f5.png") no-repeat;
      background-size: cover;
    }
  }
  .login-header-bottom-xian{
    display: block;
    width: 100%;
    height: 1px;
    background: #f3f3f3;
  }
</style>

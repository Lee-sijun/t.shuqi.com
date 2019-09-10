<template>
  <div class="login">
    <div class="header">
      <router-link to="/home">
        <a href="#" class="return">
          <img src="http://c-shuqi.11222.cn/assets/backIcon_ba492d1.png" alt="">
        </a>
      </router-link>
      <div class="header-title">登录</div>
      <a href="/home" class="skipHome">
        <img src="http://c-shuqi.11222.cn/assets/home_48a04f5.png" alt="">
      </a>
    </div>
    <span class="login-header-bottom-xian"></span>
    <div class="login-type">
      <a  @click="onClick(Account) ;flag = true" :class="{clickActive :flag}" >账户密码
        <span></span>
      </a>
      <a  @click="onClick(Verify) ;flag = false" :class="{clickActive : !flag}"> 手机验证码
        <span></span>
      </a>
    </div>
    <div :is="currentView" keep-alive></div>
  </div>
</template>

<script>
  import Account from './Account'
  import Verify from './Verify'

  export default {
    name: "Login",
    components:{ Account,Verify },
    data(){
       return {
         Account:'account',
         Verify:'verify',
         currentView: 'account',
         flag: true,
       }
     },
     methods:{
       onClick(title){
         this.currentView = title;
       }
     }
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
    .return img{
      display: block;
      width: 20px;
      height: 20px;
    }
    .skipHome img{
      display: block;
      width: 20px;
      height: 20px;
    }
  }
  .login-type{
    width: 100%;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #EAEAF0;
    a{
      display: inline-block;
      width: 50%;
      font-size: 16px;
      text-align: center;
      line-height: 46px;
      color: #333;
    }
  }
  .clickActive{
    color: #00c98d;
    border-bottom: #00c98d 2px solid;
  }
  .login-header-bottom-xian{
    display: block;
    width: 100%;
    height: 1px;
    background: #f3f3f3;
  }
</style>

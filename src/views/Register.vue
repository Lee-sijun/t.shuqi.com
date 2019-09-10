<template>
  <div class="container">
    <div class="header">
      <router-link to="/login">
        <a href="#" class="return">
          <img src="http://c-shuqi.11222.cn/assets/backIcon_ba492d1.png" alt="">
        </a>
      </router-link>
      <div class="header-title">注册</div>
      <a href="/home" class="skipHome">
        <img src="http://c-shuqi.11222.cn/assets/home_48a04f5.png" alt="">
      </a>
    </div>
    <span class="login-header-bottom-xian"></span>
    <div class="content">
      <van-field
        v-model="username"
        placeholder="请输入手机号"
        clearable
        :error-message="usernamemsg"
      />
      <van-field
        v-model="code"
        center
        clearable
        placeholder="请输入短信验证码"
        error-message="验证码格式错误"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
       <div class="pd15"><van-button type="primary" size="large" @click="onClickButtonSubmit">获取验证码</van-button></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'

Vue.use(Field)
Vue.use(Button)
export default {
  data () {
    return {
      username: '',
      code: ''
    }
  },
  methods: {
      // 表单提交
      onClickButtonSubmit: function (e,username,password) {
        if(this.username == ''){
          this.$toast("用户名不能为空");
          return false;
        }
        if(this.password == ''){
          this.$toast("密码不能为空");
          return false;
        }
        else{
              // this.$toast('token='+token);
         	 var that=this // 放置指针，便于then操作的获取

          axios.get('接口地址', {
              params: {
                  userName: this.username
              }
          }).then(function (response) {
              console.log(response);
              var reslutData=response;  
              console.log(reslutData.data.status )
              if(reslutData.data.status == 1002){
                  this.$toast(reslutData.data.desc);
              }
              if(reslutData.data.status == 1000){
                  this.$toast(reslutData.data.desc);
                  this.$router.push({
                  path: '/receData',
                  query: {
                    reslutData
                  }
                });
              }              
          }.bind(this))
          .catch(function (error) {
              console.log("请求失败"+error);
          });        
          e.preventDefault();
        }
      },
    },
  computed: {
    usernamemsg () {
      if (this.username === '') {
        return ''
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
 .header{
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
    position: relative;
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
</style>
<template>
  <div class="account">
    <van-field
          v-model="username"
          clearable
          label="用户名"
          placeholder="请输入用户名"
          @click-right-icon="$toast('用户名必须是手机号')"
        />
        <van-field
          v-model="password"
          clearable
          type="password"
          label="密码"
          right-icon="question-o"
          placeholder="请输入密码"
          @click-right-icon="$toast('密码必须是数字、字母、下划线')"
        />
    <div class="login-service">
      <div class="service-protocol">
       <van-checkbox v-model="checked" checked-color="#07c160" icon-size="14px"></van-checkbox>
          <p>同意</p> 
        <span class="go-service">《阿里文学用户服务协议》</span>
          <p>和</p> 
        <span class="go-secret">《隐私服务协议》</span>
      </div>
    </div>
    <div class="pd15"><van-button type="primary" size="large" @click="onClickButtonSubmit">登录</van-button></div>
    <div class="login-footer">
      <p class="forget">忘记密码</p>
      <router-link to="/register">
        <p class="go-register">注册</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant'
import { Checkbox, CheckboxGroup, Icon } from 'vant';

import { Button } from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.use(Checkbox).use(CheckboxGroup);

import axios from 'axios'
const token = '123456';
  export default {
    name: 'login',
    data () {
      return {
        errors: [],
        username: "",
        password: "",
        checked: false
      }
    },
    methods: {
      onClickRight() {
        this.$toast('请填写注册信息');
        this.$router.push({ path:'/register'});
      },
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
      validEmail: function (password) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(password);
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../assets/css/phoneset.css';
  @import '../../node_modules/vant/lib/index.css';
  .account{
    width: 100%;
    padding: 26px 28px 0 28px;
    box-sizing: border-box;
    font-size: 16px;
    .user{
      border-bottom: 1px solid #F8F8F8;
      margin-top: 22px;
      padding-bottom: 5px;
      box-sizing: border-box;
    }
    .cipher{
      border-bottom: 1px solid #F8F8F8;
      margin-top: 22px;
      padding-bottom: 10px;
       box-sizing: border-box;
    }
    label{
      margin-right: 30px;
      color: #333333;
    }
    .login-footer{
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 10px;
      .forget{
        color: #999;
      }
      .go-register{
        color: #00C98D;
      }
    }
  }
  input{
    outline-style: none;
    border: none;
    font-size: 16px;
    color: #757575;
  }
  .service-protocol{
    margin-top: 16px;
    padding: 20px 28px 0 28px;
    box-sizing: border-box;
    color: #999999;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    box-sizing: border-box;
    p{
      display: inline-block;
    }
    .van-checkbox{
      width: 15px;
      height: 15px;
      display:inline-block;
      margin-right: 5px;
    }
    .go-service{
      font-size: 12px;
      width: 144px;
      display:inline-block;
      color: #00C98D;
    }
    .go-secret{
      font-size: 12px;
      display:inline-block;
      color: #00C98D;
    }
  }
  .pd15{
    margin-top: 10px;
  }
</style>
<template>
<<<<<<< HEAD
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
=======
    <div>
        <div class="box">

            <div class="head">
                <router-link to='/Details'>
                    <img src="../assets/sq01.png" alt=""/>
                </router-link>
            </div>

                <div class="head"> {{titless}}</div>

             <div class="head">
                <router-link to='/Details'>
                    <img src="../assets/sq02.png" alt=""/>
                </router-link>
            </div>

        </div>

    </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['titless']
}
</script>

<style  lang="scss" scoped>

>>>>>>> d486cdf6edd5cdb9af279532b18da8c2e3ed7739
</style>

<template>
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
    <div>
      <div class="Tops">
        <div class="arr">
          <a href="javascript:history.back(-1)">
            <img src="../assets/backIcon.png" alt="back"/>
          </a>
        </div>
        <div class="ljj-c">{{titles}} {{titless}}</div>
        <div class="arr" @click="goBack">
            <img src="../assets/home.png" alt="Home"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: ['titles', 'titless'],
  methods: {
    goBack () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style scoped lang="scss">
   @import "../assets/css/header.css"
</style>

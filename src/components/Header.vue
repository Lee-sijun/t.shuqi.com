<template>
    <div>
        <div class="Tops">
             <div class="arr">
                 <img src="../assets/backIcon.png" alt="back"/>
             </div>
             <div class="ljj-c">{{titles}} {{titless}}</div>
             <div class="arr" @click="goBack">
                 <img src="../assets/home.png" alt="Home"/>
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

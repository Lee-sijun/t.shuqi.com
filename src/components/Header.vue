<template>
    <div>
        <div class="Tops">
             <div class="arr">
                 <img src="../assets/backIcon.png" alt="back"/>
             </div>
             <div class="ljj-c">{{titles}} {{titless}}</div>
             <div class="arr">
                 <img src="../assets/home.png" alt="Home"/>
             </div>
        </div>
        <h1>aa{{titles}}</h1>

    </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['titles', 'titless']
}
</script>

<style scoped lang="scss">
   @import "../assets/css/header.css"
</style>

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

    </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['titless']
}
</script>

<style  lang="scss" scoped>

</style>

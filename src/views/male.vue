<template>
    <Header :titless="titless"></Header>
</template>

<script>
import Header from '../components/Header'
export default {
  props: ['titles'],
  components: {
    Header
  },
  name: 'Male',
  data () {
    return {
      titless: '男生频道'
    }
  }

}
</script>

<style scoped>

</style>

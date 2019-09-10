<template>
<div>
    <Header :titles="titles"></Header>
    <ChannelOne></ChannelOne>
    <ChannelTwo></ChannelTwo>
    <ChannelThree></ChannelThree>
</div>

</template>

<script>
import Header from '../components/Header'
import ChannelOne from '../components/Channel1'
import ChannelTwo from '../components/Channel2'
import ChannelThree from '../components/Channel3'

export default {
  name: 'Female',
  components: {
    Header,
    ChannelOne,
    ChannelTwo,
    ChannelThree
  },
  data () {
    return {
      titles: '女生专区'
    }
  }
}
</script>

<style scoped>

</style>

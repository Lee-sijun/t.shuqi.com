<template>
<div>
    <Header titles='男生专区'></Header>
    <ChannelOne :toChannelOne="recommend"></ChannelOne>
     <div class="bottoms">
            <span class="modulear-text" @click="changeHotList(id,stamps)">换一换</span>
            <mt-spinner type="fading-circle" :size="20" style="display:none"></mt-spinner>
    </div>
    <ChannelTwo :toChannelTwo="hotList"></ChannelTwo>
    <ChannelOne :toChannelOne="newBook" style="margin-top:10px"></ChannelOne>
     <div class="bottoms">
            <span class="modulear-text" @click="changeHotLi(id,stamps)">换一换</span>
            <mt-spinner type="fading-circle" :size="20" style="display:none"></mt-spinner>
    </div>
    <ChannelThree :toChannelThree="greateBook"></ChannelThree>
</div>

</template>

<script>
import Header from '../components/Header'
import ChannelOne from '../components/Channel1'
import ChannelTwo from '../components/Channel2'
import ChannelThree from '../components/Channel3'
import { getList } from '../api/index'
export default {
  name: 'Female',

  data () {
    return {
      recommend: [],
      hotList: [],
      newBook: [],
      greateBook: [],
      id: '',
      stamps: '',
      a: ''
    }
  },
  components: {
    Header,
    ChannelOne,
    ChannelTwo,
    ChannelThree
  },
  created () {
    // console.log(this.$route.params)
    this.a = this.$route.params.a
    this.id = this.$route.params.id
    this.stamps = this.$route.params.stamps
  },
  methods: {
    getCategoryList (i, s, b) {
      var p1 = getList(i, s, b)
      p1.then((response) => {
        // console.log(response.data)
        // console.log(response.data.data.module)
        // console.log(response.data.data.module[11])
        this.recommend = response.data.data.module[1]
        this.hotList = response.data.data.module[6].content.data
        this.newBook = response.data.data.module[11]
        this.greateBook = response.data.data.module[16]
        // console.log(this.greateBook)
      })
    },
    changeHotList (a, b) {
      var p1 = getList(a, b)
      p1.then((response) => {
        this.recommend = response.data.data.module[1]
      })
    },
    changeHotLi (a, b) {
      var p1 = getList(a, b)
      p1.then((response) => {
        this.newBook = response.data.data.module[11]
      })
    }
  },
  mounted () {
    this.getCategoryList(this.id, this.stamps, this.a)
  }
}
</script>

<style scoped lang="scss">
.bottoms{
        width:100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background: white;
        .modulear-text{
            font-size: 14px;
            color: #333;
            margin-right: 10px;
        }

    }
</style>

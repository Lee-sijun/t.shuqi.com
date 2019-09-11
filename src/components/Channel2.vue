<template>
    <div class="box">
        <div class="common-tit">
            <span class="green"></span>
            热门女生系列
        </div>

  <div id="category">
    <div class="category-content" ref="scroll_content">
     <div id="chapter" v-for="(ele, index) in toChannelTwo" :key="index">
          <h1>{{ele.m_s_name}}</h1>
          <ul class="book">
            <li v-for="(val, index) in ele.content.slice(0,4)" :key="index">
                <img :src="val.book_cover" alt="poster" class="poster"/>
                <p class="book-title">{{val.bookname}} </p>
                <p class="author">{{val.author_name}} </p>
            </li>
          </ul>
      </div>
  </div>
  </div>
  <ul class="book-indicator">
    <li></li>
    <li class="on"></li>
    <li></li>
    <li></li>
  </ul>

</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      channelData: []
    }
  },
  props: ['toChannelTwo'],
  mounted () {
    // var rs = [];
    // if( type == 1){
    //   rs = 'data1';
    // }else if( type == 2 ){
    //   rs = 'data2';
    // }
    console.log(this.$pros)
    this.$nextTick(() => { // DOM已经重绘了
      this.scroll = new BScroll('#category', {
        scrollX: true, // 横向滚动
        eventPassthrough: 'vertical' // 忽略垂直方向的滚动
      })
    })
  }
}
</script>

<style scoped>
      @import '../assets/css/channel2.css'
</style>

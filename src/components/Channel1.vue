<template>
    <div class="pox">
        <div class="common-tit">
            <span class="green"></span>
            <!-- {{toChannelOne.m_s_name}} -->
            {{title}}
        </div>
        <div class="main-content">
            <ul class="book">
                <li v-for="(ele,index) in (toChannelOne.content || '').slice(0,4)" :key="index">
                    <img :src="ele.book_cover" alt="poster" class="poster"/>
                    <p class="book-title">{{ele.bookname}}</p>
                    <p class="author">{{ele.author_name}} </p>
                </li>
            </ul>

            <div class="book-list">
                <ul>
                    <li v-for="(ele,index) in (toChannelOne.content || '').slice(0,4)" :key="index">
                    <div>
                        <div class="title-text">{{ele.bookname}} </div>
                        <div class="tags">
                            <span class="isFinished">{{ele.stat_name}}</span>
                            <span class="describe">{{ele.class_name}}</span>
                        </div>
                    </div>
                        <div class="books-desc">{{ele.introduction}}</div>
                    </li>
                </ul>
            </div>

            <!-- <div class="bottoms">
            <span class="modulear-text">换一换</span>
            <mt-spinner type="fading-circle" :size="20" style="display:inline-block"></mt-spinner>
            </div> -->

        </div>
    </div>
</template>

<script>

export default {
  name: 'Channel1',
  props: ['toChannelOne', 'title'],
  data () {
    return {
      rsData: []

    }
  },
  mounted () {
    console.log(this.$props)
    console.log(this.$props.toChannelOne)
  }

}
</script>

<style scoped>
    @import '../assets/css/channel1.css'
</style>

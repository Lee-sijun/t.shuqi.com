<template>
    <div class="box">
        <div class="common-tit">
            <span class="green"></span>
            女生美文榜
        </div>

        <ul class="main-content">
        <li v-for="(ele ,index) in toChannelThree.content.slice(0,1)" :key="index">
            <div class="img-left">
                <img :src="ele.book_cover" alt="poster" />
            </div>
            <div class="des-right">
                <h3>{{ele.bookname}} </h3>
                <p>{{ele.author_name}} </p>
                <p class="text">{{ele.introduction}}</p>
                <div class="tags">
                    <span class="describe wj">{{ele.stat_name}}</span>
                    <span class="describe">{{ele.size / 10000}}万字</span>
                    <span class="describe">{{ele.class_name}}</span>
                </div>
            </div>
        </li>
        <li class="book-item" v-for="(ele ,index) in toChannelThree.content.slice(1)" :key="index+1">
            <i class="ranking">{{index+2}}</i>
            <h4>{{ele.bookname}}</h4>
            <p>
                <span class="describe lz">{{ele.stat_name}}</span>
                <span class="describe">{{ele.class_name}}</span>
            </p>
        </li>
        </ul>
        <div class="more">查看更多</div>
    </div>
</template>

<script>
export default {
  props: ['toChannelThree']
}
</script>

<style scoped>
    @import '../assets/css/channel3.css'
</style>

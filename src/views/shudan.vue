<template>

    <div class="shudan">
       <van-sticky>
        <div class="header">
            <i class="iconfont">&#xe60d;</i>
           <h3>精品书单</h3>
           <i class="iconfont">&#xe625;</i>
        </div>
         </van-sticky>
        <router-link to="/eat">
        <div class="content" v-for="item in Text" :key="item.id">
            <div class="content_left">
                <ul>
                    <li class="title">{{item.title}}</li>
                    <li class="sdlist-info">
                       {{item.sdesc}}
                    </li>
                    <li class="book-tag">
                        <span>{{item.tags}}</span>

                    </li>
                </ul>
            </div>
            <div class="content_right">
                   <div class="bg1">
                       <img  class="book-cover-img" :src="item.items[0].cover" alt="">
                   </div>
                     <div class="bg2">
                       <img  class="book-cover-img" :src="item.items[1].cover" alt="">
                   </div>
                     <div class="bg3">
                       <img  class="book-cover-img" :src="item.items[2].cover" alt="">
                   </div>

            </div>
        </div>
        </router-link>
        <Button></Button>
    </div>
</template>
<script>

import { getShuDan } from '../api/index.js'
import Button from '../components/Button'
export default {
  data () {
    return {
      Text: []
    }
  },
  components: {
    Button
  },
  methods: {
    BookList: function () {
      getShuDan().then(response => {
        console.log(response)
        this.Text = response.data.data
      })
    }
  },
  mounted: function () {
    this.BookList()
  }
}
</script>

<style lang="scss" scoped>
@import  "../assets/font/iconfont.css";
* {
  margin: 0;
  padding: 0;
}
li{
    list-style: none;
}
.header {
  background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
     border-bottom: 1px solid #ededed;
    h3{
        font-size: 16px;
        font-weight: 100;
        color: #333;
    }
    i{
        color: green;
        font-size: 28px;
    }
}
.content {
  display: flex;

  justify-content: space-around;
  border-bottom: 1px solid #ededed;
  padding: 20px 0 20px 0;

}
.content_left {
     width:243px;
  .title {
    color: #333;
    font-size:16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    margin-bottom:10px;
  }
  .sdlist-info {
    font-size: .24rem;
   // height: .72rem;
    color: #999;
   // line-height: .36rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 100%
  }
  .book-tag {
          height: .44rem;
          margin-top: .16rem;

    span {
    font-size: .2rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    padding: 0 .1rem;
    margin-right: .08rem;
    color: #999;
    display: inline-block;
    }
  }
}
.content_right {
  width: 84px;
  height: 80px;
  position: relative;
//   border: 1px solid red;
  .bg1 {
    position: absolute;
    width: 45px;
    height: 60px;
    bottom: 0;
    z-index: 1;
    left: 0;
  }
  .bg2 {
    width:64px;
    height:80px;
    bottom: 0;
    left: 12%;
    position: absolute;
    // -webkit-transform: translate(-50%, 0);
    // transform: translate(-50%, 0);
    z-index: 2;
  }
  .bg3{
    width: 45px;
    height: 60px;
    bottom: 0;
    z-index: 1;
    position: absolute;
    right: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

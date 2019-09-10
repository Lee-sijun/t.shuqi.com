<template>
    <div class="box">
        <div class="common-tit">
            <span class="green"></span>
            热门女生系列
        </div>

  <div id="category">
    <div class="category-content">
     <div id="chapter">
          <h1>现言精选</h1>
          <ul class="book">
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
               <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
          </ul>
      </div>
     <div id="chapter">
          <h1>古言精选</h1>
          <ul class="book">
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
               <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
          </ul>
      </div>
     <div id="chapter">
          <h1>穿越精选</h1>
          <ul class="book">
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
               <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
          </ul>
      </div>
     <div id="chapter">
          <h1>古言精选</h1>
          <ul class="book">
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
               <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
            </li>
            <li>
                <img src="http://img-tailor.11222.cn/bcv/big/201907191334353273.jpg" alt="poster" class="poster"/>
                <p class="book-title">半城繁华(共三册)</p>
                <p class="author">尤四姐</p>
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
  mounted () {
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

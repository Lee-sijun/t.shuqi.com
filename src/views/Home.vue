<template>
  <div class="home">
<!--header 开始-->
    <div class="header mian">

      <div class="logo">
        <img :src="'http://c-shuqi.11222.cn/assets/logo_7a44de2.png'" alt="">
        <h1>书旗小说</h1>
      </div>
      <ul>
        <li> </li>,
      </ul>
      <div class="h-right">
        <router-link to="/login">
          <img src="../assets/login-lcon.png" alt="">
        </router-link>
        <img src="../assets/bookrack.png">
        <img src="http://c-shuqi.11222.cn/assets/search_d5e5264.png" alt="">
      </div>
    </div>
<!-- header 结束-->

<!--    nav 开始-->
    <div class="nav mian">

    </div>
<!--    nav 结束-->

<!--    banner 开始-->
    <div class="banner">
      <img src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg" alt="">
    </div>
<!--    banner 结束-->

<!--    content 开始-->
    <div class="content">
<!--      精品推荐开始-->
      <div class="articlelist manbook">
        <div class="athead">
          <h2 class="attitle">精品推荐</h2>
        </div>
        <ul class="grop-book-4">
          <li v-for="book in jp">
            <router-link to="/">
              <img :src="book.book_cover" alt="">

              <p class="attext" v-text="book.bookname"></p>
              <p class="atactor" v-text="book.book_info"></p>
            </router-link>
          </li>

        </ul>
        <div class="ctfooter">
          <span class="change">
            换一换
          </span>
        </div>
      </div>
<!--      女生美文开始-->
      <div class="articlelist manbook">
        <div class="athead">
          <h2 class="attitle">{{ nsmw.m_s_name}}</h2>
        </div>
        <ul class="grop-book-4">
          <li v-for="mw in nsmw.content">
            <router-link to="/">
              <img :src="mw.book_cover" alt="">
              <p class="attext" v-text="mw.bookname"></p>
              <p class="atactor" v-text="mw.book_info"></p>
            </router-link>
          </li>

        </ul>
        <!--           book article list -->
        <div class="book-at-list">
          <div class="book-at-item" >
              <div class="book-at-title">
                  {{ nsmw.content[4].bookname }}
                <span class="at-type" v-text="nsmw.content[4].first_cate_name">
                </span><span class="at-status" v-text="nsmw.content[4].stat_name"></span>
              </div>
              <div class="book-at-article" v-text=" nsmw.content[4].book_info">
              </div>
          </div>
          <div class="book-at-item" >
            <div class="book-at-title">
              {{ nsmw.content[4].bookname }}
              <span class="at-type" v-text="nsmw.content[4].first_cate_name">
                </span><span class="at-status" v-text="nsmw.content[4].stat_name"></span>
            </div>
            <div class="book-at-article" v-text=" nsmw.content[4].book_info">
            </div>
          </div>
          <div class="book-at-item" >
            <div class="book-at-title">
              {{ nsmw.content[4].bookname }}
              <span class="at-type" v-text="nsmw.content[4].first_cate_name">
                </span><span class="at-status" v-text="nsmw.content[4].stat_name"></span>
            </div>
            <div class="book-at-article" v-text=" nsmw.content[4].book_info">
            </div>
          </div>

        </div>
        <!--           book article list -->
        <div class="ctfooter">
          <span class="change">
            换一换
          </span>
        </div>
      </div>
<!--      女生美文结束-->

<!--男生美文 开始-->
      <div class="articlelist manbook">
        <div class="athead">
          <h2 class="attitle">精品推荐</h2>
        </div>
        <ul class="grop-book-4">
          <li>
            <router-link to="/">
              <img src="http://img-tailor.11222.cn/bcv/big/1195997864935.jpg" alt="">

              <p class="attext">some fontsome fontsome fontsome fontsome fontsome font</p>
              <p class="atactor">some fsome fontsome fontsome fontsome fontsome fontsome fontont</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="http://img-tailor.11222.cn/bcv/big/1195997864935.jpg" alt="">

              <p class="attext">钟会水电费红烧豆腐</p>
              <p class="atactor">some font</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="http://img-tailor.11222.cn/bcv/big/1195997864935.jpg" alt="">

              <p class="attext">some font</p>
              <p class="atactor">some font</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img src="http://img-tailor.11222.cn/bcv/big/1195997864935.jpg" alt="">

              <p class="attext">some font</p>
              <p class="atactor">some font</p>
            </router-link>
          </li>

        </ul>
        <!--           book article list -->
        <div class="book-at-list">
          <div class="book-at-item">
            <div class="book-at-title" v-text=" ">99亿闪婚：豪门总裁夜夜忙<span class="at-status">连载</span><span class="at-type">都市言情</span></div>
            <div class="book-at-article">她二十年一次脚下失足，撞了他的豪车，留下签名和号码，走的不带一片云彩。不仅如此，还顺便牵走他‘未婚妻’的名义……
              隔日，全球惊爆季氏总裁惊现未婚妻……
            </div>
          </div>
          <div class="book-at-item">
            <div class="book-at-title">99亿闪婚：豪门总裁夜夜忙<span class="at-status">连载</span><span class="at-type">都市言情</span></div>
            <div class="book-at-article">她二十年一次脚下失足，撞了他的豪车，留下签名和号码，走的不带一片云彩。不仅如此，还顺便牵走他‘未婚妻’的名义……
              隔日，全球惊爆季氏总裁惊现未婚妻……
            </div>
          </div>
          <div class="book-at-item">
            <div class="book-at-title">99亿闪婚：豪门总裁夜夜忙<span class="at-status">连载</span><span class="at-type">都市言情</span></div>
            <div class="book-at-article">她二十年一次脚下失足，撞了他的豪车，留下签名和号码，走的不带一片云彩。不仅如此，还顺便牵走他‘未婚妻’的名义……
              隔日，全球惊爆季氏总裁惊现未婚妻……
            </div>
          </div>
        </div>
        <!--           book article list -->
        <div class="ctfooter">
          <span class="change">
            换一换
          </span>
        </div>
      </div>
      <!--      男生美文   结束-->

      </div>
<!--      content 结束-->
    </div>
<!--home 结束-->

  <!-- home 结束-->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      jp: [],
      nsmw: {}
    }
  },
  components: {
  },
  methods: {
    getdata () {
      var url = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568017715&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=9EB7D721971C5739E749AB9EC7B0522F&key=shuqiapi&_=1568017715944`
      var womanurl = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568028052&type=2&resetcache=&func_id=19&orderid=11&mid=12&lmkTxt=index&sign=662AC908478FEC4042F5DFA69F000918&key=shuqiapi&_=1568028052951`
      this.$axios({
        url,
        method: 'get'
      }).then((res) => {
        // 精品推荐3  res.data.data.module.3.content
        this.jp = res.data.data.module[3].content
      })

      this.$axios({
        url: womanurl,
        method: 'get'
      }).then((res1) => {
        console.log(res1)
        // 女生美文 res.data.data.module.3.content
        this.nsmw = res1.data.data.module[0]
        console.log(res1.data.data.module[0])
        console.log(this.nsmw)
      })
    }
  },
  created () {
    this.getdata()
  }
}
</script>

<style lang="scss">
  .mian{
    padding: 0 20px;
  }

  .header{
    height: 44px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between

  }
  .logo {
    height: 44px;
    display: flex;
    align-items:center;
    img{
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
    h1{
      font-size: 18px;
      font-weight: bold;
    }
  }
  .h-right{
    display: flex;
    align-items:center;
    img{
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }

  .nav{
    height: 94px;
    background-color: #ccc;
  }

  .banner{
    img{
      width: 100%;
      height: 100%;
    }
  }

  .articlelist{

    background-color:#ccc;
    margin-bottom: 7px;
    .athead{
      height: 32px;
      width: 100%;
      position: relative;
      .attitle{
        position: absolute;
        bottom: 0;
        left: 20px;
        font-size: 0.28rem;
        vertical-align: middle;
        text-align: left;

      }
      .attitle:before{
        content: '';
        width: 3px;
        height: 14px;
        display: inline-block;
        background: #00c98d;
        position: absolute;
        top: .02rem;
        left: -20px;
      }
    }
    .grop-book-4{
      display: flex;
      height: 172px;
      padding: 10px 0px 10px 20px;
      box-sizing: border-box;
      /*border-bottom: 1px solid red;*/
      li{
        img{
          width: 73px;
          height: 98px;
          margin-right: 15px;
        }
        p{
          height: 16px;
          line-height: 16px;
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 73px;
        }
        .attext{
          color: #333;
          margin: .16rem 0 .04rem;
        }
        .atactor{
          color: #999;
          margin: .16rem 0 .04rem;
        }
      }
    }
    .ctfooter{
      text-align: center;

      .change{
        height: 48px;
        line-height: 48px;
      }
    }
  }
  .content .book-at-list{
    padding-left: 20px;
    height: 231px;
    border-bottom: 1px solid red;
    .book-at-item{
      height: 77px;
      padding: 10px 20px 10px 0;
      border-top: 1px solid #f3f3f3;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .book-at-title, .book-at-article{
        color: #333;
        line-height: .4rem;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .book-at-title{
        font-size: .3rem;
        color: #333333;
      }
      .book-at-article{
        height: 16px;
        line-height: 20px;
        margin: 7px 0;
        color: #999999;
      }

    }
    .book-at-item:last-child {
      border-bottom: 0;
    }
    .at-type{
      float: right;
    }
    .at-status,{
      float: right;
    }
    .book-at-article{
      white-space: nowrap;
      width: 335/16 rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }
</style>

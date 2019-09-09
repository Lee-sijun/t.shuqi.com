<template>
  <div class="home">
<!--header 开始-->
    <div class="header mian">

      <div class="logo">
        <img :src="'http://c-shuqi.11222.cn/assets/logo_7a44de2.png'" alt="">
        <h1>书旗小说</h1>
      </div>
      <ul>
        <li> from='show  hafe='m='msssbwl''</li>,
      </ul>
      <div class="h-right">
        <img src="data:image/png;base64,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" alt="">
        <img src="http://c-shuqi.11222.cn/assets/alt="">
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

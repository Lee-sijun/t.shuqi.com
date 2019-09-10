<template>
  <div class="home">
<!--header 开始-->
    <div class="header mian">

      <div class="logo">
        <img :src="'http://c-shuqi.11222.cn/assets/logo_7a44de2.png'" alt="">
        <h1>书旗小说</h1>
      </div>
      <div class="h-right">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAACiNJREFUaAXtmeuCokgShRNEVNS6dO/7v2KXdxHFPV8ECXirdmqneubHRrUKSWbEici4JZ2cReFLVDer0gCH0+kUDlUdyvIQqqqy+z7bwWAQhsNhGI3ykA/TwH2SMKPj05//7HXyVQXQ+3g8hnJ/EOijXddS5Ky/xJHdYGBNor9UwLNsEEZjFBrZ9aM1N0yuBp5WgG3CYFgbK2+3u3A4HEPdgAoh1VNZ06x6JaV/C6NmLsqiTJ4PQ1FMbHfQPcrqL3t0/ZcUKA9V2KwBXt1KOUuBBNGG8JE8jYNQnyS6TrOkUWQ6kyJSSLdP0VMKsPWr9TZsNjvbgSQZCISAGuCn5Hw+yRRKxPJkcTGdTsJ8Vjx0xT6z+wq0e3hWMJ7Dx2JtbvNVP+0LfOYag40V7C+vs5AN2At9WkyXHO4r0Mypjqfw8bFUVqmbjHG5+Dvv2ODhcBDe3uZhqIB/RETeXSLD/Prl4EPycNrdtX/LoGRiODAcZchHsXUX2emkhR9rLVSeECOyxZ8mZJ6VksDw62MVjsJ0j24UwP8Wy420l9aWzwW+nzHucfmOMZOJ7MR2YrncKshvDXmjwFqZZr8vDXuivI79U7LEHyZkIhsMibIdmMB2TVl/4FAdLVVSLS3y+w+fciNt+62RLrjYpj6V5S+Nxh1p3FuRDnZ7hdy1ilStfiDB74WkZeFSL4BwE+eQXpM0taqaDvSra8b4heq6trm1/Phk190Yzz9Lz323OQsbGN/f5y22VoFDWTW5Xj3KSJVQ6A+HQyscQU4AS8JAn1xpbpjn6mUy5Ws1Zxq70DXuRmsJcdAYRjqq+Ttqx6tjJTm61r3vHotYgOtIjupALhkoQs9FGwNWMEKZaaiJm+1efU0dppNxeH2bOosoSCmVzIQFYleZqaNMtS6C2R9KK3qk33O0eONPzLMdkZID7cpAed2auUkeinRswKk5lVqUU001BnhqhkEeBoMWC7qBjbDuQj7C9ueQESDVsQ57LWbaeJwFtnq1XKuQ5PpkYSwLmDtoApiw3Fb+WKqZA3B0kcu40WSXa1b3L/VQDQmj8UQRmjlkTCYjBysZuBqpc7crlYUOYT6fqjpnaiITw0ptELSgf6laYvd9LAVQFu/UJm/1IaCxQPRrLF7LSnShgIr+678RcYQZ0fJ7+wzFy/Kkj5rEZGcykINX8AwZMQaKorDdk0A9U0csbEM1fhYDMOgLMGyamDTpE0Y1Ptqb9Slg8D5FZh4TTeHCcHxaknz+2joEpsYQdMazUIT0JPdhO+yBEJ4VB3I7Kaqb+Gk43tqwFfXFCzh+wrWRL9yGiVMfO8L9UYWWuEzxMz+UoPlZx8KTtlLBNtDm/LaAuRuxzj+/AWRg+4Axksu9tQA8RcLggTxQrHpPpMbbMIM9ZRCroxVuQaoiFsbjkaaJSaMEmkd/jNfmagJ11pwzBxqjRnBzd/njz3x+M7vhG3kz6tcCBF/9jcfjBpsSjbBFE4A1s9NVTwoH8t1+HzhU8Iz4GOgAM52Pm/uDZQsUJEcDBhe0bKG64dyjiB5ju3QjkHUmStdkIAyHK9Aq7BWYufL7SBlps94rHk52bgbLvtwrG3VZDHbcZ6RBD8hO2Gq1MReiF1/oMEMWKpTiTio6P95frIhYmiN25KcT8nkxslLPWplOn2sl3PovL1MzDla2mqHfPM/CZJybsfYyHrIwSl3rPKBDzUkYl2owr4mYyEhX10QLu1pvBPZVVkqsoKxWa7MadWGxWMlalaUzAp2dmE6LMJOlsChKm1Ea92MOf6/zmYGnaG42Wyt8uAkdx1hvKF5eZlo3DsjK9Qqm0mmQ6r5abKREl7IjXrBbGo0D8Rdb4TbYkIUOkrZhqAPGIux3+KKkAozHmkuPAvF2Abcr90d7boOaA8BCCq43pcDvLVGcz+w+OV+dgMbZ1XcZDdetBf4MaDFQzUeU+Bm39gsjqW7E4GvH7QL/pGhB+Cg+WzZ+ilUi4V7vcisqJe4T5/pz1rvkiQoRz9ba2fm8sDWxRWAuPIkBZCCLuSBWfrFYYc41mQKkqH4GiJPIRJg3uhi9yV6NVEtmEqbI3QR8Sy8lhS2w1OQpEzsJP+CGavh4Bj/msqaV2/BiATKQBVne50xyx8isBXtGf12WpS24/jL74SMNYY2bfdQIGQRLa0NNCVMe6wFedrD6qQurN/qlt6mqbhfh6uQWj3eA7ImPw+0v2DNaYgQ6TJj6lX1r3LXnzjVuV19csM7XuuupOCoF8jaB4MUdaBBpuZ1/dFuX1WfFeketk6B2Aje5nOVywGzYWUCLGyhETdZgiltLsDTMZHp2usWBrtnxrpwgHkuRDlPLHqWCnO7y58/X8J8fbyHP5H475XhlllxZzF2ng2U7pFt4U1/oBiTUZDOLNj8mNLsQVjCDXQYmTWIp+UfPF7GaaS8OCN2rY+U9zVyp0CDLl9le32ZZV+n25WVuPo6vp0qt0Xr4amy7SZXMpfpHF+EagjcykIVMCHwe0HZrGMHKIcqwMzxSEdn1A1RjBBAko9gBhKKy1uvFmV75ofBWfTqgUBphheoAO7VcrgLvNwlW5gNyoiKHMuR3lPyhXdmqDvDmAwvjWoUyD4cU1qAwh57QhOaFArbiLMyuoL69XGebwYWmsfOjqaMqUqhgvtRBpyjGemM2NQX5Yic4fq63B+tbaBUg66tkQYINN6vr3BQkTWJtjBMJY8CbmEMWBooZ8nSSoXqEAZ2nFTLOt6n6j8yOlRQlfJJCQlrM5L+0rmESzPrx1TqGwKr6tnhJFSwzDhhygUi0DX2iKcsGQ+ubyPnsGGQupEv+r8CBebuMO3kCQApzOewcbQ7KcW7WDnhGwKo7pUPtvE2lhh3ky0R6qQDEyshDAB9chBe/jGG1flECFNTg8xvjKncRv/mwMOPAA760Ip7tfCpj9D8TVfVKx1ewoABncjITWCEaSUevG/77BwuhVQzmSmfegYIFP+78UNxECBzqYM8O3QNvkz75sgDUWnh04J03spBJoKKAkaW+2rLUMHMXxQNaBfBRAhRrcA35YrmYfI43Bk488+fNQHN/PdY9vb36nAeykInVyWhOnBRx00K3naxGAWfIBIIL7VlsLa2yEUHp5+YIJTJA2f4nPv/db38N11DkSfDLdSWTRHLUkRc741b0W95mOF5WNQrARFVP3/Tis2Iqf5P76Cnby4Ge4OX87EtY1gnUzf9I8IKn3ohIhslS5kE2L9DAAiawubrM9StPplfi6RaPJ21jU4z4zzwqJIyLzAMoMrha+sVbB8Nimjlk4b74OIcd9wxc55Ye/g+N1wHZWZFP/n9Ty8wYOfg7CbclRX7oPzambUySqTqr9+UzepdgAtiDOkcqJCnxu8EDBBnIQiZdKzg859932Yc7ELWiq4Q81XVbHZ9/z68X0U7uYym/VaBbigX+nALPynroQh3wePWnwCPveVl/QYGoyL/r9/8K/NP78V9BBMjuC+8S2gAAAABJRU5ErkJggg==" alt="">
        <img src="http://c-shuqi.11222.cn/assets/bookshelf_606cf21.png">

        <img src="http://c-shuqi.11222.cn/assets/search_d5e5264.png" alt="">
      </div>
    </div>
<!-- header 结束-->

<!--    nav 开始-->
    <div class="nav mian">
            <ul>
              <li>
                <i></i>
                <span>分类</span>
              </li>
              <li>
                <i></i>
                <span>排行</span>
              </li>
              <li>
                <i></i>
                <span>女频</span>
              </li>
              <li>
                <i></i>
                <span>男频</span>
              </li>
              <li>
                <i></i>
                <span>书单</span>
              </li>
            </ul>
    </div>
<!--    nav 结束-->

    <div class="banner-gg" >
      <h3>最近阅读:</h3>
    </div>
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
          <span class="change"  v-on:click="getjp">
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
          <li v-for="(mw, index) in nsmw.content" v-if="index<4">
            <router-link to="/">
              <img :src="mw.book_cover" alt="">
              <p class="attext" v-text="mw.bookname"></p>
              <p class="atactor" v-text="mw.book_info"></p>
            </router-link>
          </li>

        </ul>
        <!--           book article list -->
        <div class="book-at-list">

          <div class="book-at-item" v-for="(item,index) in nsmw.content" v-if="index>=4&&index<=6" >
            <div class="book-at-title">
              {{ item.bookname }}
              <span class="at-type" v-text="item.first_cate_name">
                </span>
              <span :class="{lz:item.stat_name=='连载',wj:item.stat_name=='完结'}" v-text="item.stat_name"></span>
            </div>
            <div class="book-at-article" v-text=" item.book_info">
            </div>
          </div>


        </div>
        <!--           book article list -->
        <div class="ctfooter">
          <span class="change"  v-on:click="getns">
            换一换
          </span>
        </div>
      </div>
<!--      女生美文结束-->

      <!--      男生美文开始-->
      <!--无聊的注释-->
      <div class="articlelist manbook">
        <div class="athead">
          <h2 class="attitle">{{ manmw.m_s_name}}</h2>
        </div>
        <ul class="grop-book-4">
          <li v-for="(mw, index) in manmw.content" v-if="index<4">
            <router-link to="/">
              <img :src="mw.book_cover" alt="">
              <p class="attext" v-text="mw.bookname"></p>
              <p class="atactor" v-text="mw.book_info"></p>
            </router-link>
          </li>

        </ul>
        <!--           book article list -->
        <div class="book-at-list">

          <div class="book-at-item" v-for="(item,index) in manmw.content" v-if="index>=4&&index<=6" >
            <div class="book-at-title">
              {{ item.bookname }}
              <span class="at-type" v-text="item.first_cate_name">
                </span>
              <span :class="{lz:item.stat_name=='连载',wj:item.stat_name=='完结'}" v-text="item.stat_name"></span>
            </div>
            <div class="book-at-article" v-text=" item.book_info">
            </div>
          </div>


        </div>
        <!--           book article list -->
        <div class="ctfooter">
          <span class="change" @click="getnans">
            换一换
          </span>
        </div>
      </div>
      <!--      男生美文结束-->

      <!--      新书开始-->
      <div class="articlelist manbook">
        <div class="athead">
          <h2 class="attitle">{{xszq.m_s_name}}</h2>
        </div>
        <div>
          <!--排行榜第一-->
          <div class="newbook-one mian" >
            <div class="newbook-img">
              <img :src="xszq.content[0].book_cover" >
            </div>
            <div class="newbook-info">
              <h3 class="newbook-title">{{xszq.content[0].bookname}}</h3>
              <p class="newbook-autor">{{xszq.content[0].author_name}}</p>
              <p class="newbook-content">  {{xszq.content[0].book_info}}</p>
              <span :class="{lz:xszq.content[0].stat_name=='连载',wj:xszq.content[0].stat_name=='完结'}">{{xszq.content[0].stat_name}}</span>
              <span >{{xszq.content[0].size}}万字</span>
              <template class="book-tag" v-for="tag in xszq.content[0].tag">
                <span>{{ tag }}</span>
              </template>
            </div>
          </div>
          <!--排行榜第一结束-->

          <!--第一后面的拍行-->
          <div class="newbook-other mian" v-for="(item,key) in xszq.content" v-if="key>0">
            <div class="other-item">
              <div class="other-l">
                <p :key="key" class="pxb-book-name"><i>{{key+1}}</i>{{ item.bookname}}</p>
              </div>
              <div class="other-r">
                <!--判断类型直接给出样式-->
                <span :class="{lz:item.stat_name=='连载',wj:item.stat_name=='完结'}" :key="key">{{item.stat_name}}</span>

                <template v-for="(innerItem,index) in item.tag" :index="index" v-if="index<3">
                  <span class="newbook-type">{{innerItem}}</span>
                </template>
              </div>
            </div>
          </div>
          <!--第一后面的拍行-->
        </div>

        <div class="ctfooter">
          <span class="change">
            查看更多
          </span>
        </div>
      </div>
      <!--      新书结束-->

      <!--      畅销排行榜开始-->
      <div class="articlelist manbook">
        <div class="athead">
          <h2 class="attitle">{{cxb.m_s_name}}</h2>
        </div>
        <div>
          <!--排行榜第一-->
          <div class="newbook-one mian" >
            <div class="newbook-img">
              <img :src="cxb.content[0].book_cover" >
            </div>
            <div class="newbook-info">
              <h3 class="newbook-title">{{cxb.content[0].bookname}}</h3>
              <p class="newbook-autor">{{cxb.content[0].author_name}}</p>
              <p class="newbook-content">  {{cxb.content[0].book_info}}</p>
              <span :class="{lz:cxb.content[0].stat_name=='连载',wj:cxb.content[0].stat_name=='完结'}">{{cxb.content[0].stat_name}}</span>
              <span >{{cxb.content[0].size}}万字</span>
              <template class="book-tag" v-for="tag in cxb.content[0].tag">
                <span>{{ tag }}</span>
              </template>
            </div>
          </div>
          <!--排行榜第一结束-->

          <!--第一后面的拍行-->
         <div class="newbook-other mian" v-for="(item,key) in cxb.content" v-if="key>0">
            <div class="other-item">
              <div class="other-l">
                <p :key="key" class="pxb-book-name"><i>{{key+1}}</i>{{ item.bookname}}</p>
              </div>
              <div class="other-r">
                <!--判断类型直接给出样式-->
                <span :class="{lz:item.stat_name=='连载',wj:item.stat_name=='完结'}" :key="key">{{item.stat_name}}</span>

                <template v-for="(innerItem,index) in item.tag" :index="index">
                  <span class="newbook-type">{{innerItem}}</span>
                </template>
              </div>
            </div>
         </div>
          <!--第一后面的拍行-->
        </div>

        <div class="ctfooter">
          <span class="change">
            查看更多
          </span>
        </div>
      </div>
      <!--      新书结束-->

      <!--新书畅销榜一样的-->
      <!--新书畅销榜一样的-->

      <!--精选书单-->
      <div class="articlelist manbook mian">
        <div class="athead">
          <h2 class="attitle">{{wntj.m_s_name}}</h2>
        </div>
        <div class="newbook-one " v-for="(item,index) in wntj.content" :key="index" v-if="index<10">
          <div class="newbook-img">
            <img :src="item.book_cover" >
          </div>
          <div class="newbook-info">
            <h3 class="newbook-title">{{item.bookname}}</h3>
            <p class="newbook-autor">{{item.author_name}}</p>
            <p class="newbook-content">{{ item.book_info }}</p>
            <div class="book-tag">
              <span :class="{lz:item.stat_name=='连载',wj:item.stat_name=='完结'}">{{item.stat_name}}</span>
              <span>{{ item.size }}万字</span>
              <template class="book-tag" v-for="(tag,i) in item.tag" v-if="i<2">
                <span>{{ tag }}</span>
              </template>
            </div>
          </div>
        </div>

        <div class="ctfooter">
          <span class="change">
            查看更多
          </span>
        </div>
      </div>
      <!--精选书单 结束-->


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
      jp: [],//精品推荐书籍
      nsmw: {},//女生美文书籍
      manmw:{},//男生美文书籍
      cxb : {},//畅销排行榜
      xszq : {}, //新书
      wntj : {}, //为你推荐
    }
  },
  components: {
  },
  methods: {
    getnans(){
      var nansurl = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568108495&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=C683D6EE4543DC5FFB1329E9A15EDE4C&key=shuqiapi&_=${new Date()}`;
      this.$axios({
        url:nansurl,
        method: 'get'
      }).then((res) => {
        // this.jp = res.data.data.module[3].content
        this.manmw = res.data.data.module[8]
      })
    }
    ,
    getjp(){
      var url = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568017715&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=9EB7D721971C5739E749AB9EC7B0522F&key=shuqiapi&_=${new Date()}`;
      this.$axios({
        url,
        method: 'get'
      }).then((res) => {
        // 精品推荐3  res.data.data.module.3.content
        this.jp = res.data.data.module[3].content
        // console.log( "精品推荐书籍" );
        // console.log( res );
      })
    },
    getns(){
      var womanurl = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568028052&type=2&resetcache=&func_id=19&orderid=11&mid=12&lmkTxt=index&sign=662AC908478FEC4042F5DFA69F000918&key=shuqiapi&_=${new Date()}`;
      this.$axios({
        url: womanurl,
        method: 'get'
      }).then((res1) => {
        // 女生美文 res.data.data.module.3.content
        this.nsmw = res1.data.data.module[0]
        // console.log( "女生美文数据" );
        // console.log( res1 );
      })
    },

    getdata () {
       var manurl = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568078169&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C12%2C33%2C11%2C19%2C33&orderid=18%2C19%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&sign=187C8D766B6E20E86CEAF60D22966E8A&key=shuqiapi&_=${new Date()}`;
      this.$axios({
        url: manurl,
        method: 'get'
      }).then((res) => {
        // console.log(res)
        //畅销榜数据
        this.cxb = res.data.data.module[8];
        this.xszq = res.data.data.module[3];
      });

       var tjurl = `http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568103193&type=2&resetcache=&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=D1D1DB1640AB50B8D4F1D1F90CA1CC1A&key=shuqiapi&_=1568103193844`;
      this.$axios({
        url: tjurl,
        method: 'get'
      }).then((res2) => {
          // console.log( res2 );
          this.wntj = res2.data.data.module[8];
      }).catch((err)=>{
        console.log( "why not data?" );
      })

    }
  },
  created () {
    this.getdata();
    this.getjp();
    this.getns();
    this.getnans();
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
    background-color: #ffffff;
    ul{
      display: flex;
      height: 100%;
      li{
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        li{

        }
        span{
          margin-top: 7px;
        }
      }
      li:first-child i{
        display: block;
        width: 44px;
        height: 44px;
        background:url("http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png")  0px -44*0px;
        background-size:44px 44*5px;
      }
      li:nth-child(2) i{
        display: block;
        width: 44px;
        height: 44px;
        background:url("http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png")  0px -44*1px;
        background-size:44px 44*5px

      }
      li:nth-child(3) i{
        display: block;
        width: 44px;
        height: 44px;
        background:url("http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png")  0px -44*2px;
        background-size:44px 44*5px

      }
      li:nth-child(4) i{
        display: block;
        width: 44px;
        height: 44px;
        background:url("http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png")  0px -44*3px;
        background-size:44px 44*5px

      }
      li:nth-child(5) i{
        display: block;
        width: 44px;
        height: 44px;
        background:url("http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png")  0px -44*4px;
        background-size:44px 44*5px

      }

    }
  }

  .banner{
    img{
      width: 100%;
      height: 100%;
    }
  }

  .articlelist{

    background-color:#ffffff;
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
      overflow: hidden;
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
    border-bottom: 1px solid #f3f3f3;
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
  //广告
  .banner-gg{
    text-align: left;
    font-size: 16px;
    line-height: 18px;
    padding: 7px 0 7px 20px;
    color: #cccccc;
    background-color: #fff;
  }

  //为你推荐
  //新书
  .newbook-one{
    display: flex;
    padding-top: 10px;
    .newbook-img{
      margin-right: 20px;
      img{
        width: 84px;
        height: 112px;
      }
    }
    .newbook-info{


      overflow: hidden;
      .newbook-title{
        font-size: 16px;
        /*font-weight: bold;*/
      }
      .newbook-content{
        height: 64px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .newbook-other{
    .other-item{
      height: 50px;
      border-top: 1px solid rgba(73,159,255,.3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .book-tag{

      }
    }
    &:last-child{
      border-bottom: 1px solid rgba(73,159,255,.3);
    }
  }
  //排行榜第一样式
  .newbook-one {
    padding-bottom: 10px;
    .newbook-title {
      font-size: 16px;
    }
    .newbook-autor {
      font-size: 12px;
      color: #999;
    }
    .newbook-content {
      font-size: 12px;
      color: #999;
    }
  }
    //排行榜第二以后 状态样式
    .pxb-book-name{
      font-size: 14px;

    }
    .articlelist {
      span{
        display: inline-block;
        font-size: .2rem;
        height: .34rem;
        line-height: .36rem;
        color: #999999;
        border: 1px solid rgba(153,153,153,.3);
        border-radius: .04rem;
        padding: 0 .12rem;
        margin-left: 2px;
      }
      //连载样式
      .lz{

        display: inline-block;
        color: #499fff;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(73,159,255,.3);
        padding: 0 .12rem;
      }
      //完结样式
      .wj{
        display: inline-block;
        border-width: 1px;
        border-style: solid;
        padding: 0 .12rem;
        color: #00c98d;
        border-color: rgba(0,201,141,.3);
      }
      .change{
        border: none;
        color: #333333;
      }
    }
    //body
  body{
    background-color: #cccccc;
  }

</style>

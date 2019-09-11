
<template>
    <div>
        <van-sticky>
        <div class="header">

            <router-link class="iconfont icontu" to="/eat">
                &#xe60d;
            </router-link>
           <h3>书籍详情</h3>
           <!-- <i class="iconfont">&#xe625;</i> -->
           <router-link class="iconfont icontu" to="/home">
               &#xe625;
            </router-link>
        </div>
        </van-sticky>
        <div class="cover-content">
            <div class="cover-header">
                <div class="cover-header-img">
                    <img src="http://img-tailor.11222.cn/bcv/big/201603281112146142.jpg" alt="">
                </div>
                <div class="cover-header-info">
                        <h1 class="cover-book-title">隔壁那个饭桶</h1>
                        <a href="#" class="cover-book-author">泪染轻匀</a>
                        <p class="cover-book-classify-etc">
                            <span>现代言情</span>
                            <span>87万字</span>
                        </p>
                        <p class="cover-book-price">已完结</p>
                </div>
            </div>
        </div>
        <div class="cover-fn-buttons">
            <a href="#" class="bs-button">开始阅读</a>
            <a href="#" class="download">离线下载</a>
            <a href="#" class="addToShelf">加书架</a>

        </div>
        <div class="cover-mate">
            <div class="cover-book-desc">
                <p>
                     夏奕颖在参加自己表妹的婚礼时，被表妹推下了楼梯，命丧黄泉，再次睁开眼睛时，却发现自己回到了十三岁的豆蔻年华……人生在重来一次，她一定要抓住自己的幸福！来一次人生大逆转！ 脚踩一路极品，有仇报仇，有怨抱怨！活的潇洒，将自己的幸福人生稳稳地握在自己的手中！ 夏奕颖：额，是不是哪里搞错了，为什么我觉得我每天都在变美。
                </p>
                <a href="#" class="cover-book-latest-chapter">
                    <i class="icontime iconfont">&#xe64c;</i>
                    <div class="cover-mate-title">最新</div>
                    <div class="cover-mate-text">第168章</div>
                    <i class="iconright iconfont">&#xe727;</i>

                </a>
                <a href="#" class="cover-book-latest-chapter">
                    <i class="icontime iconfont">&#xe609;</i>
                    <div class="cover-mate-title">目录</div>
                    <div class="cover-mate-text">已完结</div>
                    <i class="iconright iconfont">&#xe727;</i>

                </a>
            </div>

        </div>

        <div class="cover-comments">
            <div class="header header-line">
                    <h3>精华评论</h3>
            </div>
            <ul class="comments-list" v-for="item in myDetail" :key="item.id">
                <li class="comment-item">
                    <div class="comment">
                        <div class="comment-header">
                                <img :src="item.userPhoto" alt="图片">

                        </div>
                        <div class="comment-body">
                                 <span class="user-info-name">{{item.nickName}}</span>
                                <p>{{item.text}}</p>
                        </div>

                    </div>
                </li>
            </ul>

        </div>
        <div class="cover-related-books">
            <div class="header header-nospaceing">
                <h3 class="title">看过这本书的人还在看</h3>
            </div>
            <div class="books-group-4n">
                <ul  class="booksul">
                    <li class="bookli">
                        <a href="#" v-for="item in myDetailGuess" :key="item.id" class="bookList">
                            <div class="book-cover">
                                <img :src="item.cover" alt="书">
                            </div>
                            <div class="book-title">{{item.bookname}}</div>
                            <div class="book-author">{{item.author_name}}</div>
                        </a>
                    </li>
                </ul>

            </div>
            <div class="modular-link">
                <span class="modular-text" v-on:click="fn1">换一换</span>
                <i class="refresh iconfont"></i>
            </div>
        </div>
        <div class="cover-author-other-books">
                <div class="header header-nospaceing">
                    <h3 class="title">作者的其他作品</h3>
                </div>
                <ul class="listsmall-ul">
                    <li class="data-act-class">
                        <a href="#">
                            <div class="big-wrap" v-for="item in outherDetail" :key="item.id" >
                                <div class="listbook-cove">
                                    <img :src="item.cover" alt="图片">
                                </div>
                                <div class="listbook-info">
                                    <h3>{{item.title}}</h3>
                                    <p>{{item.author}}</p>
                                    <div class="book-tag">
                                        <span class="wj">完结 </span>
                                        <span class="wj">19万字 </span>
                                        <span class="wj">{{item.tags}} </span>
                                        <span class="wj">末世 </span>
                                </div>
                                </div>

                            </div>
                        </a>
                    </li>
                </ul>
                <a href="#" class="more"><span>查看更多</span></a>
        </div>
        <Button></Button>
    </div>
</template>
<script>

import { getmyDetail, getmyDetailGuess, getOtherDetail } from '../api/index.js'
import Button from '../components/Button'
export default {
  name: 'Details',
  data () {
    return {
      myDetail: [],
      myDetailGuess: [],
      outherDetail: []
    }
  },
  components: {
    Button
  },
  methods: {
    myDetailtop: function () {
      getmyDetail().then(response => {
        console.log(response.data.data)
        this.myDetail = response.data.data
      })
    },
    fn1: function () {
      getmyDetailGuess().then(response => {
        console.log(response.data.data.dk.bookinfo)
        this.myDetailGuess = response.data.data.dk.bookinfo
      })
    },
    OtherDetail: function () {
      getOtherDetail().then(response => {
        console.log(response.data.data)
        this.outherDetail = response.data.data
      })
    }
  },
  mounted: function () {
    this.myDetailtop()
    this.fn1()
    this.OtherDetail()
  }
}
</script>

<style lang="scss"scoped>
@import "../assets/font/iconfont.css";
a {
  text-decoration: none;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #ededed;
    background: #fff;
  h3 {
    font-size: 16px;
    font-weight: 100;
    color: #333;
  }
  .icontu{
    color: green;
    font-size: 28px;
  }
}
.cover-header {
  display: flex;
}
.cover-content {
  margin-bottom: 26px;
}
.cover-header-img {
  width: 98px;
  height: 130px;
  margin-right: 16px;
  margin-left: 16px;
  img {
    width: 100%;
    height: 100%;
  }
}
.cover-header-info {
  .cover-book-title {
    font-size: 16px;
    font-weight: normal;
    color: #333;
  }
  .cover-book-author {
    color: #999;
    font-size: 14px;
    text-decoration: none;
  }
  .cover-book-classify-etc {
    color: #999;
    font-size: 14px;
    text-decoration: none;
  }
  .cover-book-price {
    color: #999;
    font-size: 14px;
    text-decoration: none;
  }
}
.cover-fn-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom:16px;
  .bs-button {
    padding: 10px 22px;
    border: 1px solid #00c98d;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    background: #00c98d;
    color: #fff;
  }
  .download {
    padding: 10px 22px;
    border: 1px solid #00c98d;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    color: #00c98d;
  }
  .addToShelf {
    padding: 10px 22px;
    border: 1px solid #00c98d;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    color: #00c98d;
  }
}
.cover-mate {
    .cover-book-desc{
        p{
          margin: 0 10px;

            color: #999;
           font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;

        }
    }
  .cover-book-latest-chapter {
    display: flex;
    padding: 0 10px;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #ccc;
    .icontime {
      margin: 0 10px 0px 0;
      color: #999;
    }
    .cover-mate-title {
      margin: 0 10px 0px 0;
      color: #333;
    }
    .cover-mate-text {
      flex: 1;
      color: #999;
    }
  }
}
.comment {
  display: flex;
  padding: 10px 0 5px 0;
  margin: 20px 0 20px 0;
}
.comment-header {
  margin: 0 10px 0 10px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}
.comment-body {
  font-size: 14px;

  p {
    margin: 10px 0 0 0;
  }
}
.booksul {
  margin: 20px 10px;

}
.bookli{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
.bookList{
    flex: 1;
}
.book-cover {
  width: 74px;
  height: 98px;

  img {
    width: 100%;
    height: 100%;
  }
}
.book-title {
  width: 74px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  display: block;
  font-size: 14px;
  text-align: left;
  color: #333;
}
.book-author {
  color: #999;
  font-size: 12px;
}
.modular-link {
  text-align: center;
}
.listsmall-ul{
    margin:0px  20PX;
    .big-wrap{
        display:flex;
        border-bottom:1px solid #cccccc;
        padding:20px 0;
    }
    .listbook-cove{
        margin-right: 10PX;
        width: 56px;
        height: 74px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .listbook-info{
        color: #000;
        font-size: 14px;
        h3{
            margin-bottom: 5px;
        }
        p{
            margin-bottom: 5px;
        }
    }
}
.more{
        height: 50px;
        line-height: 50px;
        text-align: center;
       display: block;
       color: #333;
    }
</style>

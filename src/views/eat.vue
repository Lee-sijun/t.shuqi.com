<template>
    <div>
         <van-sticky>
       <div class="header">
            <!-- <i class="iconfont">&#xe60d;</i> -->
            <router-link to="/shudan" class="iconfont icontu">
                &#xe60d;
            </router-link>
           <h3>吃货的盛宴</h3>
           <!-- <i class="iconfont">&#xe625;</i> -->
            <router-link to="/home" class="iconfont icontu">
               &#xe625;
            </router-link>
        </div>
             </van-sticky>
        <div class="sdinofbox">
            <p class="js_sdinfo sdinfo clamp5">最近看的那些小说们～要不就是美食文，要不就点亮了厨艺技能点，看着看着就饿了</p>
        </div>
        <router-link to="/detail" class="myrouter">
       <ul class="listsmall-ul">
           <li class="listBig-li" v-for="item in Eat" :key="item.bid">
              <div class="big-wrap">
                    <div class="listbook-cove">
                        <img :src="item.cover" alt="">
                    </div>
                    <div class="listbook-info">
                    <h3>{{item.title}}</h3>
                    <p>{{item.author}}</p>
                    <p>
                    <span class="wj">完结</span>
                    <span class="wz">{{Math.round(item.words/10000)}}万字</span>
                    </p>
               </div>
               </div>
                <p class="brief">
                      {{item.desc}}
                    </p>
                    <p class=" blurb">
                        <span>书语推荐</span>
                       {{item.recomment}}
                    </p>
           </li>
       </ul>
       </router-link>
       <Button></Button>
    </div>
</template>
<script>
import Button from '../components/Button'
import { getEat } from '../api/index.js'
export default {
  data () {
    return {
      Eat: []
    }
  },
  components: {
    Button
  },
  methods: {
    Eatlist () {
      getEat().then(response => {
        console.log(response.data.data)
        this.Eat = response.data.data
      })
    }
  },
  computed: {

  },
  mounted () {
    this.Eatlist()
  }
}
</script>

<style lang="scss">
@import  "../assets/font/iconfont.css";
a{
    text-decoration: none;
}
.header {
    background: #FFF;
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
    .icontu{
        color: green;
        font-size: 28px;
    }
}
.sdinofbox{
    background: #f8f8f8;
    padding: 8px 20px;
    line-height: 26PX;
    border-bottom: 1px solid #f3f3f3;
    .js_sdinfo{
        color: #494949;
        font-size: 14px;

    }
}
.listsmall-ul{
    margin-left:10px;
    list-style: none;
}
.myrouter{
    color: #333;
}
.listBig-li{
    border-bottom: 1px solid #f3f3f3;
    padding: 20px .32rem 20px 0;

    margin-left: .32rem;
    .big-wrap{
         display: flex;
         .wj{
            color: #00c98d;
            border-color: rgba(0,201,141,.3);
            font-size: .2rem;
            padding: 1px 3px;
            border: 1px solid #00c98d;
            border-radius: .04rem;
            display: inline-block;
            margin-right:5px;
         }
         .wz{
            color: #999;

            font-size: .2rem;
            padding: 1px 3px;
            border: 1px solid #999;
            border-radius: .04rem;
            display: inline-block;
            margin-right:5px;
         }
    }
         .brief{
             font-size: 14px;
         }
         .blurb{
             font-size: 14px;
             color: #999;
             span{
                 font-weight: bold;
             }
         }
    .listbook-cove{
    margin-right:16px;
    width: 56px;
    height: 74px;
    img{
        width: 100%;
        height: 100%;
    }
    }
}
</style>

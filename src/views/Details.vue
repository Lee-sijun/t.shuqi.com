<template>
    <div>

        <div class="tou">
             <div class="box">

            <div class="head">
                <router-link to='/Paihang'>
                    <img src="../assets/sq01.png" alt=""/>
                </router-link>
            </div>

                <div class="head"> {{titless}}</div>

             <div class="head">
                <router-link to='/Shouye'>
                    <img src="../assets/sq02.png" alt=""/>
                </router-link>
            </div>

        </div>
                <!-- <Header  :titless="titless"></Header> -->
        </div>

        <div>
            <van-tabs>
                <van-tab title="男生">
                    <div class="boy">
                        <template v-for="item in dataDetails">

                            <div class="boys">
                                <div class="one">
                                        <p class="imges"><img :src="item.cover" alt=""></p>
                                </div>
                                <div class="two">
                                    <h4>{{ item.title }}</h4>
                                    <h5>{{ item.author }}</h5>
                                    <h6>{{ item.tags }}</h6>
                                </div>
                            </div>

                        </template>
                    </div>
                </van-tab>

            <van-tab title="女生">
                    <div class="boy">
                        <template v-for="item in nvDetails">

                            <div class="boys">
                                <div class="one">
                                        <p class="imges"><img :src="item.cover" alt=""></p>
                                </div>
                                <div class="two">
                                    <h4>{{ item.title }}</h4>
                                    <h5>{{ item.author }}</h5>
                                    <h6>{{ item.tags }}</h6>
                                </div>
                            </div>

                        </template>
                    </div>
                </van-tab>

            </van-tabs>
        </div>

    </div>
</template>
<script>
// 引入
import Header from '../components/Header'

// 解构赋值进行调用精品畅销接口
import { ChangXiao, Nvsheng } from '../api/index.js'

// 男生 女生切换插件
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)

export default {
  data () {
    return {
      active: 2
    }
  },

  components: {
    Header
  },
  name: 'Details',
  data () {
    return {
      titless: '精品畅销',
      dataDetails: [],
      nvDetails: []

    }
  },

  methods: {// 专门定义方法
    jingpin: function () {
      var p1 = ChangXiao()
      p1.then((response) => {
        if (response.status == 200) {
          this.dataDetails = response.data.data
        }
        console.log(response)

        // console.log(response.data.data.films);
      })
    },
    nansheng: function () {
      var p2 = Nvsheng()
      p2.then((response) => {
        if (response.status == 200) {
          this.nvDetails = response.data.data
        }
        console.log(response)

        // console.log(response.data.data.films);
      })
    }
  },

  mounted: function () {
    this.jingpin()
    this.nansheng()
  }
}

</script>

<style scoped>
@import '../assets/css/phoneset.css';
.box{
    background: #fff;
    z-index: 999;
}
.tou{
    height: 44px;
}

.boy img{
    display: block;
   width: 56px;
   height: 74px;

}
.boys{
    width: 100%;
    height: 100px;
}

.boy .one{
    float: left;
    padding-left: 20px;
}
.boy .two{
    float: left;
    padding-left: 20px;
}
.boy .two h4{
    font-weight: normal;
    font-size: 16px;
    color: #333;
    padding-bottom: 8px;
}
.boy .two h5{
    font-weight: normal;
    font-size: 12px;
    color: #333;
     padding-bottom: 8px;
}
.boy .two h6{
    font-weight: normal;
    font-size: 10px;
    color: #333;
}

</style>

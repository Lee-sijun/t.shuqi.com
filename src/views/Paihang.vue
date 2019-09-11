<template>
<div>

            <div class="pai">

                <Header :titless="titless"></Header>

            </div>

        <div class="paihang">
            <div class="center">
                <div class="one">
                    <div class="left">
                    <span> <i class="iconfont icon-zuanshi"></i></span>
                    </div>
                    <div class="right">
                         <router-link to='./Details'>
                            <h3>精品畅销榜</h3>
                            <h4>全站最畅销，内容丰富超有料</h4>
                         </router-link>
                    </div>
                </div>

                <div class="two">
                    <div class="left">
                        <span><i class="iconfont icon-shouzhishoushang"></i></span>
                    </div>
                    <div class="right">
                        <router-link to='./Details'>
                            <h3>狂热点击榜</h3>
                            <h4>最最受小伙伴钟爱的就在这里了</h4>
                        </router-link>
                    </div>
                </div>

                <div class="three">
                    <div class="left">
                        <span><i class="iconfont icon-caomei"></i></span>
                    </div>
                    <div class="right">
                        <router-link to='./Details'>
                            <h3>新书潜力榜</h3>
                            <h4>你想要的这里都有哦</h4>
                        </router-link>
                    </div>
                </div>

                <div class="four">
                    <div class="left">
                        <span><i class="iconfont icon-shu"></i></span>
                    </div>
                    <div class="right">
                        <router-link to='./Details'>
                            <h3>大神力作榜</h3>
                            <h4>最热爽文这边看</h4>
                        </router-link>
                    </div>
                </div>

                <div class="five">
                    <div class="left">
                        <span><i class="iconfont icon-ico"></i></span>
                    </div>
                    <div class="right">
                        <router-link to='./Details'>
                            <h3>经典完结榜</h3>
                            <h4>红文热文，本本超神</h4>
                        </router-link>
                    </div>
                </div>
            </div>

            <router-link class="btns" to='/Xiazai'>
                <div class="btn">
                    <span><p>下载书旗小说客户端</p></span>
                </div>
                </router-link>

         </div>

</div>

</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header
  },
  name: 'Paihang',
  data () {
    return {
      titless: '排行'
    }
  }
}

</script>

<style scoped lang = 'scss'>
@import '../assets/css/phoneset.css';
@import '../assets/css/iconfont/iconfont.css';
*{
    margin: 0;
    padding: 0;
}
.paihang{
    width: 100%;
    height: 100%;
}
.center .left{
    float: left;
    padding-top: 25px;
    padding-left: 28px;
}
.center .right{
    float: left;
    padding-top:20px ;
    padding-left: 12px;

}
.center h3{
    font-size: 14px;
    padding-bottom: 5px;
    color: #333;
    font-weight: normal;
}
.center h4{
    font-size: 12px;
    color: #333;
    font-weight: normal;
}
.one{
    margin-top: 44px;
    width: 100%;
    height: 90px;
    border-bottom: 8px solid #F0F0F2;
}
.two{
    width: 100%;
    height: 90px;
    border-bottom: 8px solid #F0F0F2;
}
.three{
    width: 100%;
    height: 90px;
    border-bottom: 8px solid #F0F0F2;
}
.four{
    width: 100%;
    height: 90px;
    border-bottom: 8px solid #F0F0F2;
}
.five{
    width: 100%;
    height: 90px;
    border-bottom: 8px solid #F0F0F2;
}
.one .left span{
    display: block;
    width: 30px;
    height: 30px;
    background: #f37c69;
    border-radius: 50%;
}
.one .left span i{
    display: block;
    font-size: 26px;
    color: #f6fcf9;
    padding-left: 2px;
}

.two .left span{
    display: block;
    width: 30px;
    height: 30px;
    background: #ab91d6;
    border-radius: 50%;
}
.two .left span i{
    display: block;
    font-size: 26px;
    color: #f6fcf9;
}

.three .left span{
    display: block;
    width: 30px;
    height: 30px;
    background: #52c588;
    border-radius: 50%;
}
.three .left span i{
    display: block;
    font-size: 26px;
    color: #f6fcf9;
    padding-left: 2px;
}

.four .left span{
    display: block;
    width: 30px;
    height: 30px;
    background:#6993f0;
    border-radius: 50%;
}
.four .left span i{
    display: block;
    font-size: 26px;
    color: #f6fcf9;
    padding-left: 1px;
}

.five .left span{
    display: block;
    width: 30px;
    height: 30px;
    background: #f5aa59;
    border-radius: 50%;
}
.five .left span i{
    display: block;
    font-size: 26px;
    color: #f6fcf9;
}

.btn{
    background: #F0F0F2;
    width: 100%;
    height: 42px;
    justify-content:center;
    position: fixed;
    display: flex;
     padding-top:25px;
     border-bottom: 40px solid #F0F0F2;
}
.btn span{
    display: block;
    width: 80%;
    height: 42px;
    background: #52c588;
   border-radius: 4px;
}
.btn span p{
    line-height: 42px;
    padding-left: 66px;
    font-size: 14px;
    color: #F0F0F2;
}

</style>

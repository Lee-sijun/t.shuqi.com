<template>
    <div>
        <div class="bj">
            <!-- <img src="../assets/bj.png" alt="" /> -->
            <div>
                <div class="top">
                <img src="../assets/logos.png" alt="" />
                </div>
                <div class="tops">
                    <h2>新手福利 全场免费</h2>
                    <p>经典热门新书本本有</p>
                </div>
                <div class="center">
                    <img src="../assets/sq03.png" alt="" />
                    <img src="../assets/sq04.png" alt="" />
                    <img src="../assets/sq05.png" alt="" />
                    <img src="../assets/sq06.png" alt="" />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Xiazai'
}
</script>

<style scoped>
.dbj{
    width: 100%;
    height: 100%;

}
.bj{
    background: url('../assets/bj.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.bj img{
    display: block;
    width: 100%;
    height: 100%;

}
.top{
    width: 86px;
    height: 28px;
    padding-left: 140px;
    padding-top: 25px;
}

.tops{
    width: 254px;
    height: 50px;
    padding-left: 70px;
    padding-top: 70px;
}
.tops h2{
    font-size:28px;
   color: #fff;
   font-weight: normal;
   padding-bottom: 5px;
}
.tops p{
    color: #ccc;
    font-size: 14px;
    padding-left: 50px;
    padding-bottom: 25px;
}
.center{
    padding-left: 24px;
    padding-top:22px;
}
.center img{
    width: 140px;
    height: 140px;
    display: block;
    float: left;
    padding-left: 15px;
    padding-top:15px;
}
.tab i{
    color: #ccc;
}

</style>

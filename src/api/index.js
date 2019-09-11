<<<<<<< HEAD
alert('ljz');
=======
// 调用接口获取数据axios
import Axios from 'axios'

// 暴露单个写法
export const getShuDan = () => {
  var url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1568014593402'
  return Axios({
    method: 'get',
    url
  })
}
export const getEat = () => {
  var url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sddetail&sdid=28045&p=1&shuqi_h5=&onlyCpBooks=1&_=1568031251701'
  return Axios({
    method: 'get',
    url
  })
}
export const getmyDetail = () => {
  var url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=sp_get&authorId=1888364&bookId=5117739&fetch=merge&sqUid=8000000&source=store&size=3&page=1&shuqi_h5=&_=1568100119738'
  return Axios({
    method: 'get',
    url
  })
}
export const getmyDetailGuess = () => {
  var url = 'http://bookapi.shuqiapi.com/?bamp=sqdk&dataFrom=sm&bid=5117739&bkName=%E9%87%8D%E7%94%9F%E4%B9%8B%E5%A4%8F%E5%A5%95%E9%A2%96%E7%9A%84%E5%B9%B8%E7%A6%8F%E4%BA%BA%E7%94%9F&authName=%E6%B3%AA%E6%9F%93%E8%BD%BB%E5%8C%80&authorid=1888364&limit=8&ver=08.23.17.12&fr_pr_id=10002&tk=NTExNzczOTQxN2FjNTllOWYxODg4MzY0&shuqi_h5=&_=1568100119742'
  return Axios({
    method: 'get',
    url
  })
}
export const getOtherDetail = () => {
  var url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_author&authorId=1888364&p=3&size=100&page=1&_=1568103456385'
  return Axios({
    method: 'get',
    url
  })
}

// export const getmyDetail= () =>{
//     var url ='http://walden1.shuqireader.com/webapi/book/info/?_=1568077699774';
//     return Axios({
//         method:"post",
//         url,
//         headers:{
//             'Accept':' application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Origin': 'http://t.shuqi.com',
//             'Referer': 'http://t.shuqi.com/route.php?pagename=',
//             'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
//         },
//         data: {"bookId": 5117739,
//         "user_id": 8000000,
//         "timestamp": 1568097999730,
//         "sign": "0272c657161d57810474721ec6b6eac3",
//         "shuqi_h5": ""}

//     })
// }
>>>>>>> 370a2f886e10e3f3a849fb90691b352ae042be19

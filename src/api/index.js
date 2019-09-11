

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


// 调用接口获取数据 axios


// 定义很多的接口调用
// 1. 男生频道  单个暴露 { getMaleList }
export const getList = (pageId, timestamp, a) => {
  var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=' + pageId + '&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=' + timestamp + '&type=2&resetcache=&sign=1F6042806D3B8BF3613EE0041319A6A6&key=shuqiapi&_=' + a
  // var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=2&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568016468&type=2&resetcache=&sign=1F6042806D3B8BF3613EE0041319A6A6&key=shuqiapi&_=1568016468702'
  // 获取女生列表
  // var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568016564&type=2&resetcache=&sign=C1AA4528DD10466F228CD35378FA0639&key=shuqiapi&_=1568016564741'

  return Axios({
    method: 'get',
    url
  })
}

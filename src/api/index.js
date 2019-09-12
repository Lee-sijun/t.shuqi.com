// 调用接口获取数据 axios
import Axios from 'axios'

// 定义很多的接口调用
// 1. 男生频道  单个暴露 { getMaleList }
export const getList = (pageId, timestamp) => {
  var newStamps = new Date().getTime()
  var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=' + pageId + '&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=' + timestamp + '&type=2&resetcache=&sign=1F6042806D3B8BF3613EE0041319A6A6&key=shuqiapi&_=' + newStamps
  // var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=2&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568016468&type=2&resetcache=&sign=1F6042806D3B8BF3613EE0041319A6A6&key=shuqiapi&_=1568016468702'
  // 获取女生列表
  // var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568016564&type=2&resetcache=&sign=C1AA4528DD10466F228CD35378FA0639&key=shuqiapi&_=1568016564741'
  return Axios({
    method: 'get',
    url
  })
}

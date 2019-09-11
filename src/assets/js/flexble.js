// 请求axios

// 调用接口数据axios
import Axios from 'axios'

// 连接排行接口
var ranking = () => {
  var url = 'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1568028946&type=2&resetcache=&sign=A37CD60F40FBE54BD5401C79B1649743&key=shuqiapi&_=1568028946067'
  return Axios({
    method: 'get',
    url
  })
}

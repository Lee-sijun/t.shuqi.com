// alert('ljz');

// 首页请求axios

// 调用接口axios
import Axios from 'axios'

// 定义多个接口进行调用

// 精品畅销男生接口
const ChangXiao = () => {
  // 抓包
  var url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5=&_=1568103979393'

  return Axios({
    method: 'get',
    url

  })
}

// 精品畅销女生接口
const Nvsheng = () => {
  // 抓包
  var url = 'http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=2&type=1&shuqi_h5=&_=1568115857740'

  return Axios({
    method: 'get',
    url

  })
}

export { ChangXiao, Nvsheng }

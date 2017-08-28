var express = require('express');
var axios = require('axios');
var apiRouter = express.Router();


// 获取推荐页面的slider数据
apiRouter.get('/recommend/sliders', (req, res) => {
  var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  axios.get(url, {
    // 伪装请求头信息，实现代理，突破服务器端cors限制
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data);
  }).catch((e) => {
    console.log(e);
  });
});

module.exports = apiRouter;

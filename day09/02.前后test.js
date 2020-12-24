const express = require('express')

const cxx = express();

cxx.use(express.json())

cxx.get('/login', (req, res, next) => {
  //允许跨域
  console.log(req.query);
  res.header('Access-Control-Allow-Origin', "*")
  res.json({
    "name": "chenxinxin",
    "method": "get"
  })
})

cxx.post('/login', (req, res, next) => {
  req.setEncoding('utf-8')
  // req.on('data', (data) => {
  // const result = JSON.parse(data.toString())
  // req.body = result
  // console.log(data);
  // })
  //允许跨域
  console.log(req.body);
  res.header('Access-Control-Allow-Origin', "*");
  res.json({
    "name": "chenxinxin",
    "method": "post"
  })
})

cxx.listen(8000, () => {
  console.log('服务器开启成功');
})
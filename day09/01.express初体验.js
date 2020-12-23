const express = require('express')

const app = express();
//监听默认路径
app.get('/login', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  const data = {
    name: 'chenxinxin'
  };
  let str = JSON.stringify(data)
  res.end(str)
})

app.post('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  const data = {
    name: 'chenxinxin'
  };
  let str = JSON.stringify(data)
  res.end(str)
})

app.post('/login', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  res.end('Welcome Back~')
})

app.listen(8000, () => {
  console.log('expres初体验启动成功');
})
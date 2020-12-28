const express = require('express')

const cxx = express();

cxx.use((req, res, next) => {
  console.log('注册第1个中间件');
  next();
})

cxx.use((req, res, next) => {
  console.log('注册第2个中间件');
  next();
})

cxx.use((req, res, next) => {
  console.log('注册第3个中间件');
  next();
})

cxx.use((req, res, next) => {
  console.log('注册第4个中间件');
  res.end('zxccxz')
})

cxx.listen(8000, () => {
  console.log('服务器启动成功');
})
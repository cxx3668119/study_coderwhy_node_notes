const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer()

app.use(express.json());
app.use(upload.any())

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('用户登录成功')
})

app.listen(8001, () => {
  console.log('form-data解析服务器启动成功');
})
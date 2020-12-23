const http = require('http')

//创建一个web服务器
const server = http.createServer((req, res) => {
  console.log('服务器中的处理函数被调用');
  res.end('hello server');
})

server.listen(8888, '127.0.0.1', () => {
  console.log('服务器启动成功');
})
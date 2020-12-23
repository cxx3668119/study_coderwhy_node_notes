const http = require('http')

const server1 = http.createServer((req, res) => {
  res.end('server1')
})

server1.listen(8886, '127.0.0.1', () => {
  console.log('服务器启动成功');
})

// const server2 = http.createServer((req, res) => {
//   res.end('server2')
// })

// server2.listen(8887, '127.0.0.1', () => {
//   console.log('服务器启动成功');
// }) 

// 方式2
const server2 = new http.Server((req, res) => {
  res.end('server2')
})

server2.listen(() => { //如果没有写端口号
  console.log('服务器启动成功');
  console.log(server2.address().port); //返回当前端口号 
})
//一般监听0.0.0.0
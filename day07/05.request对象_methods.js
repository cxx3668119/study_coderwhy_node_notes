const http = require('http')
const url = require('url')
const qs = require('querystring')


const server = http.createServer((req, res) => {
  console.log(req.url);
  const {
    pathname
  } = url.parse(req.url)
  if (pathname === '/login') {
    if (req.method === 'POST') {
      req.setEncoding('utf-8')
      req.on('data', (data) => {
        const {
          username,
          password
        } = JSON.parse(data)
        console.log(username);
        console.log(password);
      })
    }
    res.end('cxxcszwlh')
  }
  // res.end('hello server')
})

server.listen(8888, () => {
  console.log('服务器启动成功');
})
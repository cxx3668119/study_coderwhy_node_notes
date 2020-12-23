const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {

  //test1
  // if (req.url === '/login') {
  //   res.end('欢迎回来~~')
  // } else if (req.url === '/users') {
  //   res.end('用户列表123')
  // } else {
  //   res.end('请求错误')
  // }
  // console.log(req.url);
  const {
    pathname,
    query
  } = url.parse(req.url);
  if (pathname === '/login') {
    console.log(query);
    console.log(qs.parse(query));
    const {
      username,
      password
    } = qs.parse(query)
    console.log(username, password);
    res.end('请求结果')
  }
  // console.log(req.url);
  // res.end('请求结果')
  // 普通判断：if(req.url.indexOf('/login')!== -1) 如果内容包含/login 会出错 一般不这么请求
})

server.listen(8888, () => {
  console.log('服务器启动成功');
})
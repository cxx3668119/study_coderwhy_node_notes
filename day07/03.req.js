const http = require('http')

const server = http.Server((req, res) => {
  console.log(req.url);
  console.log('---------');
  console.log(req.method);
  console.log('---------');
  console.log(req.headers);

  res.end('hello world')
});

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功');
})
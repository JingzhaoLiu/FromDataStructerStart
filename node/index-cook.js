const http = require('http');
// const session = require('koa-generic-session');

const server = http.createServer((req, res) => {
  //  req.headers

  console.log(req.headers);

  res.setHeader('Set-Cookie', 'a=100');
  console.log(req.headers['cookie'], 'cookie');
  res.end('this is test');
});

server.listen(3000);

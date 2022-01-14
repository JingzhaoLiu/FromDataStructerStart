import { createServer } from 'http';

const server = createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const path = url.split('?')[0];

  const reqType = req.headers['content-type'];

  // console.log(req.headers['content-type'],'content-type');

  if (method === 'GET' && path === '/api/html') {
    const html = `<h1>this is title</h1>`;
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(html);
  } else if (method === 'GET' && path === '/api/text') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('text');
  } else if (method === 'GET' && path === '/api/list') {
    const result = {
      total: 2,
      result: 'ok',
      list: [{ a: 1 }, { b: 2 }],
    };

    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
  } else if (method === 'POST' && path === '/api/create') {
    const result = {
      message: 'this is create',
      result: 'ok',
    };

    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
  } else if (method === 'POST' && path === '/api/create/article') {
    let str = '';

    req.on('data', chunk => {
      str += chunk;
    });

    req.on('end', () => {
      
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(str);
    });
  } else {
    const result = {
      message: 'this not a page',
      result: 'fail',
    };

    res.writeHead(404, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
  }
});

server.listen(8080);

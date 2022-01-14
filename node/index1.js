// const http = require('http');
import { createServer } from 'http';

import { sum } from './utils/util.js';
console.log(sum(3, 4));

console.log(process.argv);
console.log(process.argv.slice(2));

const server = createServer((req, res) => {
  const url = req.url;
  console.log('url=>', url)
  const path = url.split('?')[0];
  res.end(path);
});

server.listen(8080);



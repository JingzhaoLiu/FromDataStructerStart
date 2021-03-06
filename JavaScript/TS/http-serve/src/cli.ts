import { program } from 'commander';
import HttpServer, { IHttpServerOptions } from './http-serve';


program
  .version(require('../package.json').version);
program
  .option('--cache, <cache>', '设置缓存时间，秒数')
  .option('--root, <root>', '静态文件目录')
  .option('-p, --port, <port>', '监听端口', '3000')
  .action((options: Omit<IHttpServerOptions, 'cache'> & { cache?: string; port: string }) => {
    const { root, cache, port } = options;
    console.log(port, 'port');
    const server = new HttpServer({
      ...options,
      root,
      cache: cache === undefined ? cache : parseInt(cache)
    });
    server.listen(+port);
    console.log(`监听 ${port}`);
  });

program.parse(process.argv);


let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

let n = lastInArray([1, 2, 3, 5]);
let str = lastInArray<string | number>(['1', '2', '3', '5']);




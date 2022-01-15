const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'this is koa';
});

app.listen(8099);

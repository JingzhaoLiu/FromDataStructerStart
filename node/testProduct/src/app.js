const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const cors = require('koa2-cors');

const index = require('./routes/index');
const users = require('./routes/users');

// error handler
onerror(app);

// cors 配置
const corsConfig = {
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  credentials: true, // 运行跨域携带cookie
};
app.use(cors(corsConfig))

// 配置session
app.keys = ['*$keys*75^%##&&'];
const sessionConfig = {
  // 配置cookie
  cookie: {
    path: '/',
    httpOnly: true,  //  只能后端修改cookie 不允许前端修改js
    maxAge: 24 * 60 * 60 * 1000, //one day in ms,
    overwrite: true,
    signed: true,
  },
};
app.use(session(sessionConfig));

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;

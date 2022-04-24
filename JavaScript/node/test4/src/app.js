const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors');

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)
// cors 配置
app.use(cors({
  origin: 'http://localhost:8080', // FE origin
  credentials: true // 允许跨域带cookie
}))

// session配置
app.keys == ['0SD4@SD1A$S8G2H&03DG8H!1dbs92'] // 秘钥，用于加密
app.use(session({
  cookie:{
    pat: '/', 
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

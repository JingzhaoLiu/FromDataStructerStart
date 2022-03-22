const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");
// console.log('Router: ', Router);

const router = new Router();


const cors = require("koa-cors");


app.use(cors());

router.get("/hello", async (ctx, next) => {
  ctx.body = "this is hello";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

app.use(router.routes()).use(router.allowedMethods());

// app.use(async ctx => {
//   ctx.body = "this is koa 2";
// });

app.listen(9000);

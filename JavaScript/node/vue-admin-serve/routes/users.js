const router = require("koa-router")();

const { svgFunc } = require("../controller/user.js");

router.prefix("/api/users");

router.get("/", function (ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.get("/svg", svgFunc);

module.exports = router;

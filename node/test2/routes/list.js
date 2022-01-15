const router = require('koa-router')()

router.prefix('/api')

router.get('/list/all', (ctx,next)=>{
   ctx.body = 'this is all list'
})

router.get('/list', (ctx, next) => {
  const query = ctx.query;
  console.log(query);
  console.log(ctx.request);
  ctx.body = {
    result: 'ok',
    data: []
  }
});

router.post('/list/create', (ctx, next) => {
  const body = ctx.request.body;
  const query = ctx.request.query;
  console.log(body);
  console.log(query);
  // console.log(ctx.request);
  ctx.body = {
    result: 'ok',
    message: 'this is create'
  }
});


module.exports = router;

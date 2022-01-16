/**
 * @description login check middleware
 */


module.exports = async (ctx, next)=>{
  const session = ctx.session;
  if(session && session.userInfo) {
    return await next();
  }

  ctx.body = {
    result: 'fail',
    message: 'login is error'
  }


}
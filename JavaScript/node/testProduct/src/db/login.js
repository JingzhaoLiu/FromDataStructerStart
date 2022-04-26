/**
 * 用户登录模拟操作
 */

const user = require("../models/user");

!(async () => {
  /***register  new 一个新的用户 **/
  // await user.create({
  //   username: 'liujingzhao',
  //   pwd: 1232123
  // })
  // await user.create({
  //   username: "18366626195",
  //   pwd: 1232123,
  // });
  /****login***/
  const ming = await user.findOne({
    username: "liujingzhao",
    pwd: 1232123,
  });
  console.log("ming: ", ming);
})();

/**
 * 商店数据模拟操作
 */

const shop = require("../models/shop");

!(async () => {
  /***create 商店 **/
  // await shop.create({
  //   name: "沃尔玛",
  //   logo: "",
  //   sales: 1000,
  //   expressLimit: 0,
  //   expressPrice: 15,
  //   slogan: "vip 满10元起送",
  // });

  // await shop.create({
  //   name: "大润发",
  //   logo: "",
  //   sales: 100,
  //   expressLimit: 0,
  //   expressPrice: 25,
  //   slogan: "vip 满20元起送",
  // });


  /*** 获取商店列表 **/
  const list = await shop.find().sort({ updatedAt: -1 });
  console.log("list: ", list);

  /*** 获取商店 **/
  const id = "6267476e3acf817ffacf6313";
  const info = await shop.findById(id);
  console.log("info: ", info);


})();

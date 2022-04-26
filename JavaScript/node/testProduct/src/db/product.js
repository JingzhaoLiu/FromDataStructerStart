/**
 * 商品数据模拟操作
 */

const product = require("../models/product");

!(async () => {
  /***create 商品 **/
  // await product.create({
  //   shopId: "6267476e3acf817ffacf6313",
  //   name: "watermelon",
  //   img: "",
  //   price: 10,
  //   sales: 2,
  //   oldPrice: 3,
  //   tabs: ["seckilling"],
  // });

  // await product.create({
  //   shopId: "6267476f3acf817ffacf6316",
  //   name: "orange",
  //   img: "",
  //   price: 10,
  //   sales: 10,
  //   oldPrice: 4,
  //   tabs: ["seckilling"],
  // });

  /*** 获取商品列表 **/
  const list = await product.find().sort({ updatedAt: -1 });
  console.log("list222: ", list);
  /*** 获取商店商品分类列表 **/
  console.log("——————————————————————————");
  const allList = await product.find({ shopId:"6267476e3acf817ffacf6313", tabs: {
    $in: 'seckilling'
  }}).sort({ updatedAt: -1 });
  console.log("list111: ", allList);

  // /*** 获取商品 **/
  console.log("——————————————————————————");
  const id = "626757753612c2e23579d43c";
  const info = await product.findById(id);
  console.log("info: ", info);


})();

/**
 * 地址数据模拟操作
 */

const address = require("../models/address");

!(async () => {
  /***create 收获地址 **/
  // await address.create({
  //   username: "18366626195",
  //   city: "北京183666261951",
  //   department: "康得小区",
  //   houseNumber: "193号",
  //   name: "Martin",
  //   phone: 18378823812,
  // });

  /***获取单个收获地址 **/
  // const ming = await address.findOne({
  //   username: "18366626195",
  // });
  // console.log("ming: ", ming);

  // const ming = await address.findById('6266b762f938d1b8d76ed98b');
  // console.log("ming: ", ming);

  /***更新单个收获地址 **/
  //   update 已被弃用,返回{n:1, nModified:1}
  // 返回{n:1, nModified:1}
  // 更新一个就用updateOne,是对update的封装,不支持{multi:true}属性,加了也没用,返回{n:1, nModified:1}
  // 返回{n:1, nModified:1}
  // 更新多个就用updateMany,是对update的封装,自动加入了{multi:true}属性,设为false也不行,返回{n:1, nModified:1}
  // 返回{n:1, nModified:1}
  // findOneAndUpdate,实际调用的是findAndModify,这个的好处是会返回文档,设置{new: true}返回更新后的文档,默认为false.
  // 如果想用原生的findOneAndUpdate, 就设置mongoose.set('useFindAndModify', false);

  // await address.updateOne(
  //   {
  //  _id: "6266b762f938d1b8d76ed98b";
  //     department: "康得小区",
  //   },
  //   {
  //     name: "Amy",
  //   }
  // );

  const newAddress = await address.findOneAndUpdate(
    {
      _id: "6266b762f938d1b8d76ed98b",
      department: "康得小区",
    },
    {
      name: "jiale",
    },{
      new: true // 默认false  返回更新之前的数据 true返回更新后数据
    }
    );
    console.log('newAddress: ', newAddress);

  /*** 获取收获地址列表 **/
  console.log("——————————————————————");
  // const list = await address
  //   .find({
  //     username: "18366626195",
  //   })
  //   .sort({ updatedAt: -1 });
  // console.log("list: ", list);
})();

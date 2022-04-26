/**
 * 订单数据模拟操作
 */

const order = require("../models/order");
const address = require("../models/address");
const product = require("../models/product");

!(async () => {
  // 创建订单
  const body = {
    username: "liu",
    addressId: "6266b69e02fd50a657413e03",
    shopId: "6267476e3acf817ffacf6313",
    shopName: "沃尔玛",
    status: 1, // 0 未支付 1支付
    products: [
      {
        id: "626757743612c2e23579d439",
        num: 3,
      },
      {
        id: "6267616d3023a13b5df5c90c",
        num: 5,
      },
    ],
  };

  // 获取address

  const addressInfo = await address.findById(body.addressId);
  // console.log("addressInfo: ", addressInfo);

  // 获取商品
  // const productArr = body.products.map(async val => {

  // });

  const productID = body.products.map(val => val.id);
  // console.log('productID: ', productID);
  const productInfo = await product.find({
    _id: {
      $in: productID,
    },
    shopId: body.shopId,
  });
  // console.log("info: ", info);
  // return {
  //   product: info,
  //   orderSales: val.num,
  // };

  const productArr = productInfo.map((val, idx) => {
    // orderSales: body.products[idx].num,  // map有序的话可以用
    const id = val._id.toString();
    const filterProducts = body.products.filter(v => v.id === id);
    if (filterProducts.length === 0) {
      throw Error("未找到匹配项");
    }

    return {
      product: val,
      orderSales: filterProducts[0].num,
    };
  });

  console.log("productArr: ", productArr);

  const { addressId, products, ...restData } = body;
  const data = {
    // username: body.username,
    // shopId: body.shopId,
    // shopName: body.shopName,
    // status: body.status,
    ...restData,
    address: addressInfo,
    products: productArr,
  };

  console.log(data);

  await order.create(data)
})();

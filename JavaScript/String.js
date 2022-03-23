const products =  [
  { name: "鼠标", price: 20 },
  { name: "键盘", price: 40 },
  { name: "耳机", price: 60 },
  { name: "显示屏", price: 80 },
];

const prices = products.forEach(item => {
    item.price -= 3
})
console.log('prices: ', prices);
console.log("prices: ", products);

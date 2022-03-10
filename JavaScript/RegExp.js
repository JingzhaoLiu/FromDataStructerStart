var str = '我是一名{0},我来自{1},我的爱好是{2}'

var info = ['前端开发工程师', '中国', '旅行']

var newStr = str.replace(/{([0-9])}/g, function (all, val) {
  console.log('all: ', all);
  
  return info[val]
  
});



const arr = "是对方是的8888888888水电费水电费，999999".match(/\d+/g);

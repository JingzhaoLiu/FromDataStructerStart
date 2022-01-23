

function myInstanceOf(left, right){

  // 限定范围

  if(left === null || typeof left !== 'object') return false;
  
  // 原型链判断
  let proto = Object.getPrototypeOf(left);
  while(true) {
    // 找到最后了 没有找到
    if (proto === null) return false;

    // 找到了
    // Object.getPrototypeOf(value) === Number.prototype;  
    if (proto === right.prototype) return true;

    // 当前没有找到 查找上一层
    proto = Object.getPrototypeOf(proto);

  }

}


console.log(myInstanceOf(new Number(1), Number));
console.log(myInstanceOf(123, Number));
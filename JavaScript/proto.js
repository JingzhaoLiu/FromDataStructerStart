function User(QQNo, QQName, QQSlogan) {
  // 私有属性
  this._QQNo = QQNo;
  this._QQName = QQName;
  this._QQSlogan = QQSlogan;
  // 共有属性
  this.Friends = ['ming', 'fang', 'hong']; 
}

const qq1 = new User('71381309', 'JS', 'js');
debugger;
const qq2 = new User('0283924', 'Ts', 'ts');



// 每次实例生成的时候 开辟堆空间
// qq1会开辟一个
// qq2会开辟一个
// qq1 和 qq2 有共有属性  但是在自己内部都开了一个Friends的空间 浪费空间
// 私有属性需要单独开辟空间 共有属性需要放到原型上定义 解决不同实例分配共同的属性空间


// 每个实例都有一个默认的__proto__属性可以访问原型对象空间，标准写法是 `Object.getPrototypeOf(qq1)`
// Object.getPrototypeOf(qq1) === User.prototype;




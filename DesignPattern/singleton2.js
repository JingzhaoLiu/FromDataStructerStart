// 只是实例一次 通过内部一个参数的值控制返回
var Singleton = (function () {
  var value;
  return function (name) {
    if (!value) {
      this.name = name;
      value = this;
    }
    return value;
  };
})();

// (name) {
//   // this.name = name;
//   console.log(this);

//   var store;
//   if(!store){
//     store = new Singleton(name);
//   }

//   return store;

// }

// Singleton.prototype.getName = function () {
//   console.log(this.name);
// };

// function getInstance(name) {
//   if (!this.instance) {
//     return (this.instance = new Singleton(name));
//   }

//   return this.instance;
// }

// var a = getInstance('liu');
// var b = getInstance('liu');
// console.log(a);
// console.log(a === b);
// a.getName();

// var getSingleton = (function () {
//   var value;
//   return function (name) {
//     if (!value) {
//       value = new Singleton(name);
//     }
//     return value;
//   };
// })();

// var c = getSingleton('zhou');
// var d = getSingleton('zhou');
// console.log(c);
// console.log(c === d);

// var e = new Singleton("Le");
// var f = new Singleton("Le");
var g = Singleton('Le');
// console.log(e);
// console.log(e === f);
console.log(g);

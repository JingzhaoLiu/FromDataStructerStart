// 类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  getName() {
    return this.name;
  }

  getAge(){
    return this.age;
  }

  speak() {
    return 'say hello';
  }
}

class Student extends Person{
  constructor(name, age , number) {
    super(name, age);
    this.number = number;
  }

  study(){
    return `${this.name},今年${this.age}岁，学号${this.number},爱学习.`
  }
}

// 实例
// const p = new Person('liu', 27);
// const myName = p.getName();
// const lang = p.speak();
// const age = p.getAge();



// console.log(myName, lang, age);


const s = new Student('liu', 27, 21832190);
const myName = s.getName();
const lang = s.speak();
const age = s.getAge();


console.log(myName, lang, age);
console.log(s.study());
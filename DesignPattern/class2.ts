// 类
class People {
  name;
  age;
  protected weight; // 受保护的属性 自己以及子类能访问
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.weight = 120;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  speak() {
    return 'say hello';
  }
}

class Kid extends People {
  number;
  private girlfriend; // 只有自己能访问
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
    this.girlfriend = 'jia';
  }

  getWeight() {
    return this.weight;
  }
}

let xiao = new Kid('xiao', 10, 12312);
xiao.getWeight();

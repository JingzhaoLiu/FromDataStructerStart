class Person{
  name = 'dell'

  constructor(public age: number) {

  }

  getName(){
    return this.name;
  }

  say(){
    return 'http'
  }
}

// 类继承
class Teacher extends Person{
  
  getTeacherName(){
    console.log(this.name);
    console.log(this.say())
    return super.getName() + '_Ary'
  }

  // 类重写
  getName() {
    // super调用父类方法
    return (super.getName() + ' lee')
  }


}

const ming = new Teacher();
console.log('teacher: ', ming.getName());
console.log('teacher: ', ming.getTeacherName());

class Person{
  name = 'dell'

  getName(){
    return this.name;
  }
}

// 类继承
class Teacher extends Person{
  getTeacherName(){
    
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

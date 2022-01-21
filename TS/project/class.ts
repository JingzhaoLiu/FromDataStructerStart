class Person{
  name = 'dell'

  getName(){
    return this.name;
  }
}

class Teacher extends Person{
  getTeacherName(){
    return 'Ary'
  }
}

const ming = new Teacher();
console.log('teacher: ', ming.getName());
console.log('teacher: ', ming.getTeacherName());

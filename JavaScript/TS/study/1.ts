class Student {
  name: string = ''

  constructor(_name: string) {
    this.name = _name;
  }
}

class Shool {
  name: string = 'word'
  studentList: Student[] = [];

  constructor(_name: string, _studentList: Student[]) {
    this.name = _name;
    this.studentList = _studentList;
  }
}

const student1 = new Student('ming');
const student2 = new Student('hong');

const studentList = [student1, student2];
const shool = new Shool('shool', studentList);
console.log('shool: ', shool);



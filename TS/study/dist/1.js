class Student {
    constructor(_name) {
        this.name = '';
        this.name = _name;
    }
}
class Shool {
    constructor(_name, _studentList) {
        this.name = 'word';
        this.studentList = [];
        this.name = _name;
        this.studentList = _studentList;
    }
}
const student1 = new Student('ming');
const student2 = new Student('hong');
const studentList = [student1, student2];
const shool = new Shool('shool', studentList);
console.log('shool: ', shool);

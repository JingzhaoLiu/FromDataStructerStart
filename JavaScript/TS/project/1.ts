interface IPerson {
  name: string;
  age: number;
}

enum EColor {
  red,
  green,
  blue,
  yellow,
}

console.log(EColor['red']);

const study: IPerson = {
  name: 'ming',
  age: 24,
};

function tsDemo(data: IPerson) {
  return `${data.name} is ${data.age}`;
}

tsDemo(study);

interface IStudy {
  project: string;
  length: number;
  good: number;
}

enum EType {
  student,
  teacher,
  parents,
}

function add({ a, b }: { a: number; b: number }): number {
  return a + b;
}

function addNumber({ a }: { a: string }) {
  return a;
}

const total = add({ a: 1, b: 2 });
const all = addNumber({ a: 'stringify' });

const fn = (str: string) => {
  return parseInt(str, 10);
};

const fnc: (str: string) => number = str => {
  return parseInt(str, 10);
};

const objectArr: { name: string }[] = [{ name: 'liu' }, { name: 'ming' }];

const personArr: { name: string; age: number }[] = [
  { name: 'liu', age: 12 },
  { name: 'ming', age: 21 },
];

type TPerson = { name: string; age: number };
const personArr1: TPerson[] = [
  { name: 'liu', age: 12 },
  { name: 'ming', age: 21 },
];

const t1: [string, number, number][] = [
  ['1', 2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
];

interface IStudent {
  readonly firstName: string; // 只能读 不能修改
  lastName: string;
  age?: number; // 可以不存在
}

const getProp = (p: IStudent): void => {
  p.lastName = 'jia';
};

const prop = {
  firstName: 'l',
  lastName: 'ming',
  sex: 1,
};

getProp(prop);
getProp({
  firstName: 'l',
  lastName: 'ming',
  // sex: 1
});

interface ITeacher {
  readonly firstName: string; // 只能读 不能修改
  lastName: string;
  age?: number; // 可以不存在
  say(): string; // 可以加方法
  [propName: string]: any;  // 可以添加别的属性
}

const teacher: ITeacher = {
  firstName: 'l',
  lastName: 'ming',
  age: 24,
  say() {
    return 'I am a Teacher.';
  },
};

interface ITeach extends ITeacher {  // 接口继承
  speak(): string;
}

class Teach implements ITeach { // 类实现接口
  firstName: 'liu';
  lastName: 'ao';
  say() {
    return 'I can teach';
  }

  speak() {
    return 'I speak';
  }
}

new Teach();



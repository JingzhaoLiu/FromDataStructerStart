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


function add({ a, b }: { a: number, b: number }): number {
  return a + b
}

function addNumber({ a }: { a: string }) {
  return a
}

const total = add({ a: 1, b: 2 })
const all = addNumber({ a: 'stringify' })


const fn = (str: string) => {
  return parseInt(str, 10)
}

const fnc: (str: string) => number = (str) => {
  return parseInt(str, 10)
}

const objectArr: { name: string }[] = [
  { name: 'liu' },
  { name: 'ming' },
]

const personArr: { name: string, age: number }[] = [
  { name: 'liu', age: 12 },
  { name: 'ming', age: 21 },
]

type TPerson = { name: string, age: number }
const personArr1: TPerson[] = [
  { name: 'liu', age: 12 },
  { name: 'ming', age: 21 },
]

const t1: [string, number, number][] = [
  ['1', 2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
]
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

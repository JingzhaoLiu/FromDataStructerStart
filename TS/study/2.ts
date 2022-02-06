class ArrayList {
  constructor(public element: Array<object>) { }

  get(index: number) {
    return this.element[index];
  }

  remove(value: number): object;
  remove(value: object): number;
  remove(value: number | object): object | number {
    if (typeof value === "number") {
      return this.element.splice(value, 1);
    } else {
      const index = this.element.findIndex((e: object) => {
        return e === value;
      });
      this.element.splice(index, 1);
      return index;
    }
  }
}
const obj1 = { name: "liu", number: 18 };
const obj2 = { name: "xiu", number: 18 };
const obj3 = { name: "i", number: 18 };
const arrList = new ArrayList([obj1, obj2, obj3]);

const getObj = arrList.get(1);
console.log("getObj: ", getObj);

const rIndex: number = arrList.remove(obj3);
console.log("rIndex: ", rIndex);

const rObj: object = arrList.remove(1);
console.log("rObj: ", rObj);

const arr: number[] = [21, 13, 24, 5, 16, 1];
const target = 16;

function getTargetIndex(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

const targetIndex = getTargetIndex(arr);
console.log("targetIndex: ", targetIndex);

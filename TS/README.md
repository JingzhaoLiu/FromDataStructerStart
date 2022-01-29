# Typescript



``` shell
npm install -g typescript

tsc -v

tsc hello.ts
```

``` ts
function sayHello(person : string) {
  return 'hello,' + person;
}

console.log(sayHello('Tom'));

```



 TypeScript `只会在编译时对类型进行静态检查`，如果发现有错误，编译的时候就会报错


## 配置文件 tsconfig

``` json
"outDir": "./"
"rootDir": "./",

"target": "es2020",  

```

## 类型注解
我们明确告诉变量是什么类型
## 类型推断
TS自动分析变量类型，无法分析类型时要主动添加类型注解


## 基础类型
boolean string number undefined symbol  null  


## 对象类型

{}  Class function []  Date

``` ts
// function类型
const fn = (str: string): number => {
  return parseInt(str, 10)
}

const fnc: (str: string) => number = (str) => {
  return parseInt(str, 10)
}

const fn = (str: string) => {
  return parseInt(str, 10)
}

// Date 类型
const date = new Date();


class Teacher {
  name: string, 
  age: number
}

const arr : Teacher[] = [
  new Teacher(), 
  { name: 't', age: 20}
]

```
## 类型别名 type
起别名不会新建一个类型 - 它创建了一个新名字来引用那个类型

``` ts
type TPerson = { name: string, age: number }
```

``` ts
// 和接口的区别
type TString = 'string';

// 可以给普通类型声明别名
type TPerson = { 
  name: string, 
  age: number 
}

interface IPerson { 
  name: string; 
  age: number;
}
```


## Array
``` ts
let arr : string[] = ['a','b']
let arr2 : Array<string> = ['a','b']
let arr3 : number[] = [1,2]
let arr3 : Array<number> = [1,2]
let arr3 : any[] = [1,2,'123']


let arr4 : undefined[] = [undefined]


const objectArr: { name: string }[] = [
  { name: 'liu' },
  { name: 'ming' },
]

type TPerson = { name: string, age: number }
const personArr1: TPerson[] = [
  { name: 'liu', age: 12 },
  { name: 'ming', age: 21 },
]
```

## tuple （申明类型的固定长度的数组，区分联合类型）  位置类型不可更改 长度不可更改
``` ts
let tup : [string,number] = ['a',111]
tup[0] = 111; // 报错
tup[1] = '111'; // 报错
tup[2] = 111; // 报错 长度超过

const t : [string, number,number] = ['1',2, 3]
const t1 : [string, number,number][] = [
  ['1',2, 3],
  ['1',2, 3],
  ['1',2, 3],
  ['1', 2, 3],
  ['1', 2, 3],
]

```

## Union 联合
``` ts
let uni : number | string | boolean | string[];

```


## Literal 字面量类型
字面量也可以叫直接量，就是你看见什么，它就是什么 
变量 protagonist 被声明为 'Sherlock' 字面量类型，就只能赋值为 'Sherlock'
``` ts
let lite: 0 | 1 | 2;
lite = 2; // 字面量类型

let lit = 3;  // 数字类型

const n = 2;  // 字面量类型

let liter: 1 | '3' | true | [1,20]

let type = 'as-number' | 'as-string';

let protagonist : 'Sherlock' = 'Sherlock';
```

## enum
方法参数不能定义为具体类型，只能初级使用number，string 基本类型替代，降低了代码的可读性和可维护性


``` ts
enum Color{
  red = 6,
  green = 10,
  blue
}

生成：

type[type["red"] = 6] = "red"

数字枚举双重映射
type["red"] // 6
type[10] // "green"
可以取值 可以取key

enum type{
  s = 'school',
  t = 'teacher,
  p = 'parents'
}

生成普通对象

```

## any 与 unknow



## void、 undefined 、never
void 不返回
undefined 定义返回是空
never：永远执行不完


## 类型断言 type assertions

``` ts
let message: any;
message = 'abc' ;
const len = (message as string).length;
```

## 函数

``` ts
function sayHello (person: string, lastName?: string) {
    // lastName 不传的话 是undefined
}

function say (person: string, lastName: string = 'liu') {
    //  可以使用默认值
  
}

// 函数类型声明

interface SayHi {
  ( keyword: string) : string
}

```




## 接口
编译后并不会产生JavaScript代码，只是编写的时候做代码提示、验证的作用
接口也可以继承

``` ts
interface Person {
  firstName: string
  lastName: string
}

function greeter (person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = {
  firstName: 'liu',
  lastName: 'jingzhao'
}

console.log(greeter(user))

// 属性
interface IStudent {
  readonly firstName: string;  // 只能读 不能修改
  lastName: string;
  age?: number  // 可以不存在

}

const getProp = (p: IStudent):void => {
  p.lastName = 'jia';
}

const prop = {
  firstName: 'l',
  lastName: 'ming', 
  sex: 1
}

getProp(prop)  // 不报错

getProp({
  firstName: 'l',
  lastName: 'ming',
  sex: 1  // 报错
})

```

## 类

``` ts
class User {
  fullName: string
  firstName: string
  lastName: string

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter (person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new User('liu', 'jingzhao')

console.log(greeter(user))
```

## implements



## public、private、protected
public: 类内外都可以使用
private: 类内部使用
protected: 类以及继承的子类内部使用

## constructor
new 对象的时候会自动执行

设置私有 constructor  可以禁止 new 对象

``` ts
// 简化版
constructor(public age: number) {

}
// 构造器的参数加上public这个参数就变成了一个属性
// 第一步 定义了一个属性
// 第二步 默认构造函数给这个属性赋值【隐式操作】

// 原版
public age: number;
constructor(age: number) {
  this.age = age;
}
```

## generics 泛型

``` ts

let lastInArray = (arr: number[])=>{
  return arr[arr.length - 1];
}

let n = lastInArray([1,2,3,5]);
let str = lastInArray([1,2,3,5]); // 报错

-----------------------------

let lastInArray = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
}

let n = lastInArray([1, 2, 3, 5]);
let str = lastInArray(['1', '2', '3', '5']);
-----------------------------


let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

let n = lastInArray([1, 2, 3, 5]);
let str = lastInArray(['1', '2', '3', '5']);

-----------------------------

let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

let n = lastInArray([1, 2, 3, 5]);
let str = lastInArray<string|number>(['1', '2', '3', '5']);

// 多泛型

let tup = <T,Y>(x: T, y: Y)=>[x,y]

tup(1,2);
tup<string, number>('2',2);

let tup1 = <T,Y=number>(x: T, y: Y)=>[x,y]
tup<string>('2',2);
```

## abstract

抽象类只能继承


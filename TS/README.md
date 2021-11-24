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

## 接口

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

let user = new User('Yee', 'Huang')

console.log(greeter(user))
```
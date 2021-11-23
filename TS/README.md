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
function pow(value, n) {
  // if (n === 1) {
  //   return value;
  // }

  return n === 1 ? value : value * pow(value, n - 1);

  // return value * pow(value, n--);
}

pow(2, 2);
// pow(2, 3);
// pow(2, 4);

let company = {
  // 是同一个对象，简洁起见被压缩了
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, curr) => prev + curr.salary, 0);
  } else {
    let sum = 0;
    for (const iterator of Object.values(department)) {
      sum += sumSalaries(iterator);
    }
    return sum;
  }
}


sumSalaries(company);

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = { value: 5 };
list.next.next.next.next.next = null;
console.log("list: ", list);

function readLinked(element) {
  if (element === null) {
    return null;
  } else {
    return element.value + " => " + readLinked(element.next);
  }
}

const link = readLinked(list);
console.log("link: ", link);

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  
  return sumTo(n - 1) + n;
}

let a = sumTo(10);
console.log('a: ', a);




function readSortLinked(element) {
  if (element === null) {
    return null;
  } else {
    return  readSortLinked(element.next) + "<=" + element.value;
  }
}

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = { value: 5 };
list.next.next.next.next.next = null;
const sortLink = readSortLinked(list);
console.log("sortLink: ", sortLink);



function slow(x) {
  // 这里可能会有重负载的 CPU 密集型工作
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  // let cache = new Map();

  // return function(x) {
  //   if (cache.has(x)) {    // 如果缓存中有对应的结果
  //     return cache.get(x); // 从缓存中读取结果
  //   }

  //   let result = func(x);  // 否则就调用 func

  //   cache.set(x, result);  // 然后将结果缓存（记住）下来
  //   return result;
  // };

  let cache = new Map()
  return function(x){
    if(cache.has(x)) {
      return cache.get(x)
    }
    let result = func.call(this, x)
    cache.set(x, result)
    return result;
  }
}

slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1) 被缓存下来了，并返回结果
console.log( "Again: " + slow(1) ); // 返回缓存中的 slow(1) 的结果

console.log( slow(2) ); // slow(2) 被缓存下来了，并返回结果
console.log( "Again: " + slow(2) ); // 返回缓存中的 slow(2) 的结果


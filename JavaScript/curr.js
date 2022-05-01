let worker = {
  slow(min, max) {
    return min + max;
  },
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)

    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)

    cache.set(key, result);
    console.log(cache);
    return result;
  };
}

function hash(args) {
  return Array.from(args).join("_");
  // [].join.call(arguments)
  // return Array.from(args).reduce((prev,curr)=> prev + "_" + curr, '');
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // works
console.log("Again " + worker.slow(3, 5)); // same (cached)

let mySet = new Set();

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add("set")
mySet.add({a: 1})
mySet.add({a: 1})

mySet.has(1)
mySet.delete(5)

for (const iterator of mySet) {
  console.log('iterator: ', iterator);
}

const myArr = Array.from(mySet)


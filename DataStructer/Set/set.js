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


new Set(1) // 报错 1不可以迭代
new Set('12')
new Set([1,2])
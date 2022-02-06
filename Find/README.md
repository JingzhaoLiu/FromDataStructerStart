# find

```js
var targetIndex = -1;
var str = 'asdfg';
var c = 'd';

for (var i = 0; i < str.length; i++) {
  if (c === str[i]) {
    return (targetIndex = i);
  }
}

if (targetIndex === -1) {
  console.log('not find');
} else {
  console.log(`find . index: ${targetIndex} target:${str[targetIndex]}`);
}

```

``` ts
const arr: number[] = [21,13,24,5,16,1];
const target = 16;
let targetIndex = -1;

function getTargetIndex(arr){
  for (var i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return (targetIndex = i);
    }
  }

  return targetIndex;

}

// ================

const arr: number[] = [21,13,24,5,16,1];
const target = 16;

function getTargetIndex(arr:number[]){
  for (var i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return  i;
    }
  }

  return -1;

}

const targetIndex = getTargetIndex(arr);
console.log('targetIndex: ', targetIndex);



```


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


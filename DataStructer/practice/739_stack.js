// const T = [12,23,13,15,17];

// var dailyTemperatures = function(T) {
//     let res = []

//     for(let i = 0; i < T.length; i++) {
//       const curr = T[i];
//       for (let j = i + 1; j < T.length; j++) {
//         if (curr < T[j]) {
//           res.push(j - i);
//           break;
//         }
//       }

//       if (!res[i]) {
//         res[i] = 0;
//       }
      
//     }
    
//     return res;
// };



// const arr = dailyTemperatures(T)
// console.log('arr: ', arr);

// var dailyTemperatures = function (T) {
//   let res = new Array(T.length).fill(0);

//   for (let i = 0; i < T.length; i++) {
//     const curr = T[i];
//     for (let j = i + 1; j < T.length; j++) {
//       if (curr < T[j]) {
//         res[i] = (j - i);
//         break;
//       }
//     }
//   }

//   return res;
// };


// const arr = dailyTemperatures(T)
// console.log('arr: ', arr);



const T = [12,13, 24, 24,15,17, 45, 46];
// const T = [12,53, 24, 13,15,17, 45, 46];
// const T = [12,53, 24, 13,15,17, 45, 46];

var dailyTemperatures = function(T) {
  let res = new Array(T.length).fill(0);
  let stack = [];

  
  // 遍历所有元素
  for (let i = 0; i < T.length; i++) {
    const curr = T[i];
    
    // 后入数据和之前的栈顶数据对比， 之前小于之后数据  之前数据出栈 获取之前数据的索引所在标记 计算索引差值  后数据入栈
    while (stack.length && curr > T[stack[stack.length - 1]]) {
      const j = stack.pop();
      res[j] = i - j;
    }

    stack.push(i);
  }

  return res;
};

const arr = dailyTemperatures(T)
console.log('arr: ', arr);

















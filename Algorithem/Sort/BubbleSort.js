function bubbleSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let time = 0;
    
    for (let j = 1; j < len - i; j++) {
      if (arr[j] < arr[j - 1]) {
        time++;
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }

    if (time == 0) break;
  }
  console.log(arr);
}

bubbleSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]);
bubbleSort([1, 2, 3, 4, 5]);

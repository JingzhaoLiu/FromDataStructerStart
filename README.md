# practice programming ability

# Array
[实现动态数组](./Array/src/Array.java)
# Stack
[数组实现Stack](./Stack/src/ArrayStack.java)

Stack实现计算表达式[+-*/()]

- [Stack实现10以内计算表达式](./Stack/src/Compute.java)
- [Stack实现计算表达式](./Stack/src/ComputeAnything.java)


[Stack实现浏览器前进后退功能](./Stack/src/BrowserStack.java)
# Queue
数组实现Queue
数组实现loopQueue

# LinkedList

链表实现Queue
链表实现loopQueue

# Recursion
将原来的问题转成更小的同一个问题

```
计算1加到7的和 
// 1 + 2 + 3 + 4 + 5 + 6 + 7    
等同于1到6的和加上7  
// (1 + 2 + 3 + 4 + 5 + 6) + 7
等同于1到6的和（1到5的和加上6）加上7   
// ((1 + 2 + 3 + 4 + 5) + 6) + 7
等同于1到5的和（1到4的和加上5）加上6 加上7 
// ((1 + 2 + 3 + 4) + 5) + 6) + 7
等同于1到4的和（1到3的和加上4）加上5 加上6 加上7 
// ((1 + 2 + 3) + 4) + 5) + 6) + 7
等同于1到3的和（1到2的和加上3）加上4 加上5 加上6 加上7 
// ((1 + 2) + 3) + 4) + 5) + 6) + 7
等同于1到2的和（1的和加上2） 加上3加上4 加上5 加上6 加上7 
1没法再分解了 
// ((1) + 2) + 3) + 4) + 5) + 6) + 7
// n之前所有数之和 + n = 1到n的所有数之和
```


[递归加法](./Recursion/src/Sum.java)

# 链表和递归


[LeetCode 203](./Linked/src/Solution.java)
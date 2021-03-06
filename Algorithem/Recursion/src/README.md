# 递归

去的过程叫“递”,回来的过程叫“归”

1. 一个问题的解可以分解为几个子问题的解(将原来的问题转成更小的同一个问题)
2. 这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样
3. 存在递归终止条件


写递归代码的关键就是`找到如何将大问题分解为小问题的规律`，并且基于此`写出递推公式`，然后再推敲`终止条件`，最后将递推公式和终止条件翻译成代码


## 递归加法

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



[递归加法](./Sum.java)








## 老鼠走迷宫

![迷宫](../../img/recursion_mouse.png)

[老鼠出迷宫](./Mouse.java)



[猴子吃梨](./EatPear.java)

## 走台阶

假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？

如果有 7 个台阶，你可以 2，2，2，1 这样子上去，也可以 1，2，1，1，2 这样子上去，总之走法有很多，那如何用编程求得总共有多少种走法呢？

我们仔细想下，实际上，可以根据第一步的走法把所有走法分为两类，第一类是第一步走了 1 个台阶，另一类是第一步走了 2 个台阶。
所以 n 个台阶的走法就等于先走 1 阶后，n-1 个台阶的走法 加上先走 2 阶后，n-2 个台阶的走法。
``` java
	f(n) = f(n-1)+f(n-2)
```

有了递推公式，递归代码基本上就完成了一半。我们再来看下终止条件。当有一个台阶时，我们不需要再继续递归，就只有一种走法。所以 f(1)=1。这个递归终止条件足够吗？我们可以用 n=2，n=3 这样比较小的数试验一下。
n=2 时，f(2)=f(1)+f(0)。如果递归终止条件只有一个 f(1)=1，那 f(2) 就无法求解了。所以除了 f(1)=1 这一个递归终止条件外，还要有 f(0)=1，表示走 0 个台阶有一种走法，不过这样子看起来就不符合正常的逻辑思维了。所以，我们可以把 f(2)=2 作为一种终止条件，表示走 2 个台阶，有两种走法，一步走完或者分两步来走。
所以，递归终止条件就是 f(1)=1，f(2)=2。这个时候，你可以再拿 n=3，n=4 来验证一下，这个终止条件是否足够并且正确。
``` java
  f(1) = 1;	
  f(2) = 2;
  f(n) = f(n-1)+f(n-2)
```



## 汉诺塔

## 八皇后

## 注意

1. 堆栈溢出（限制递归调用的最大深度的方式）
``` java
// 全局变量，表示递归的深度。
int depth = 0;
 
int f(int n) {
  ++depth;
  if (depth > 1000) throw;

  if (n == 1) return 1;
  return f(n-1) + 1;
}

```

2. 重复计算（map存储值）

``` java
HashMap valueMap = new HashMap();
int f(int n) {
  
  if (valueMap.containsKey(n)) {
    return valueMap.get(n);
  }

  if (n == 1) return 1;
  int result = f(n-1) + 1;
  valueMap.put(n, result);
  return result;
}


```

3. 递归代码可以改写为非递归代码

那是不是所有的递归代码都可以改为这种迭代循环的非递归写法呢？

笼统地讲，是的。因为递归本身就是借助栈来实现的，只不过我们使用的栈是系统或者虚拟机本身提供的，我们没有感知罢了。如果我们自己在内存堆上实现栈，手动模拟入栈、出栈过程，这样任何递归代码都可以改写成看上去不是递归代码的样子。

但是这种思路实际上是将递归改为了“手动”递归，本质并没有变，而且也并没有解决前面讲到的某些问题，徒增了实现的复杂度。



`堆栈溢出、重复计算、函数调用耗时多、空间复杂度高等，所以，在编写递归代码的时候，一定要控制好这些副作用`





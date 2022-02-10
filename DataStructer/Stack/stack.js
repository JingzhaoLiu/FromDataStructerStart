const stack = []

stack.push(1)
stack.push(2)

const item1 = stack.pop();
const item2 = stack.pop();



// 栈的应用场景
// 十进制转二进制：后出来的余数反而排到前面，余数依次入栈，依次出栈，实现余数倒序输出
// 判断字符串的括号是否有效：有效的括号
// 函数的调用堆栈

// 打断点可以查看数据流动
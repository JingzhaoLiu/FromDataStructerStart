function foo(arg1 = arg2, arg2) {
  console.log(`${arg1} ${arg2}`);
}

// 在上面 foo 函数中，如果第一个参数没有传，将会使用第二个参数作为第一个实参值。调用：

foo('arg1', 'arg2') // arg1 arg2

// 返回内容正常，但是当第一个参数缺省时，执行 arg1 = arg2 会当作暂时性死区处理：
// 因为除了块级作用域以外，函数参数默认值也会受到 TDZ 影响。


foo(undefined, 'arg2') // Uncaught ReferenceError: arg2 is not defined
// 这里我再「抖个机灵」，看看下面的代码会输出什么？
// 这就涉及到 undefined 和 null 的区别了。在执行 foo(null, 'arg2') 时，
// 不会认为「函数第一个参数缺省」，而会直接接受 null 作为第一个参数值。

foo(null, 'arg2') // null arg2

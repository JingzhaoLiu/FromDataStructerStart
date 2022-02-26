parseInt("3.5"+ "5.1") // 3
0 / 0 // NaN
4 / 0 // Infinity
-5/ 0 // -Infinity
Boolean('false') // true



// 自动截取第一个非数字的字符之后的字符
parseInt("3.14是圆周率") // 3
parseInt("314是圆周率") // 314
parseInt("31.5") // 31
parseInt("-31.5") // -31
parseInt("圆周率是3.14") // NaN

parseFloat("3.14是圆周率") // 3.14
parseFloat("314是圆周率") // 314
parseFloat("31.5") // 31.5
parseFloat("-31.5") // -31.5
parseFloat("圆周率是3.14") // NaN // ?
parseFloat(true) // NaN // ?  先转成字符串 
parseFloat(false) // NaN // ?
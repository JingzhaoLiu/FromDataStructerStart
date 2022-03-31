# 格式化  

## eslint 开始
```
eslint --init  // 当前项目已经安装依赖  可以添加到node脚本中执行

npx eslint --init 


```

## eslint 使用
```
eslint src

```

## Prettier
创建`.prettierrc`文件
``` 
{
  // 不尾随分号
  "semi": false,
  // 使用单引号
  "singleQuote": true,
  // 多行逗号分割的语法中，最后一行不加逗号
  "trailingComma": "none",
  // 方法名后面增加空格
  'space-before-function-paren': 'off'
}
```

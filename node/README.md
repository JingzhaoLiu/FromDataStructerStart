## script 命令行传递参数

``` json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "nodemon index.js"
}

```

``` shell
npm run dev -- -p 8000
# dev中就会接收到参数，最终执行
nodemon index.js -p 8000
```


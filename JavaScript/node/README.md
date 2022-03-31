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


## node fs 读写文件

fs.writeFileSync 没有文件时可以创建文件 但是存在创建不了文件夹的情况， 所以当文件夹不存在时用fs.mkdir 创建文件夹比较保险

``` ts
const filePath = path.resolve(__dirname, '../data/course.json');
let courseJson: ICourseItem[] = [];
if (fs.existsSync(filePath)) {
  const text = fs.readFileSync(filePath, 'utf-8');
  courseJson = JSON.parse(text);
} else {
  fs.mkdir(path.join(__dirname, '../data'), (err) => {
    if (err) {
      return console.error(err);
    }
  })
}

courseJson.push(course);
fs.writeFileSync(filePath, JSON.stringify(courseJson));
```



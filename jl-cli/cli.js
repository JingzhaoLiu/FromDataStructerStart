#!/usr/bin/env node

// 如果linux和mac 需要改写文件权限为755
// chmod 755 cli.js

console.log("cli working!");

// 脚手架的工作过程
// 1. 通过命令行交互询问用户问题
// 2. 根据用户的回答的结果生成文件

const path = require('path')

const inquirer = require("inquirer");
const ejs = require("ejs");
const fs = require('fs');

inquirer.prompt([{ type: "input", name: "name", message: "Project name?" }]).then(res=>{
  console.log('res: ', res);
  // 模板目录
  const tempDir = path.join(__dirname, 'templates')
  // 目标目录
  const destDir = process.cwd();

  fs.readdir(tempDir, (err, files)=>{
    if(err) throw err;
    files.forEach(file=>{
        ejs.renderFile(path.join(tempDir, file), res, (err, result)=>{
          if (err) throw err;
          console.log('result: ', result);
          fs.writeFileSync(path.join(destDir, file), result)
        });
    })
  })

})


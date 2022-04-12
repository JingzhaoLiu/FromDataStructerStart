#!/usr/bin/env node

console.log("hello cli working  asdfsd");

// 脚手架的工作过程
// 1. 通过命令行交互询问用户问题
// 2. 创建模板文件
// 3. 根据用户的回答的结果根据模板文件生成文件

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Project name?",
  },
  {
    type: "input",
    name: "url",
    message: "Project url?",
  },
];

inquirer
  .prompt(questions)
  .then(answers => {
    // console.log("answers: ", answers);

    const tempDir = path.join(__dirname, "../templates");
    const destDir = process.cwd();

    fs.readdir(tempDir, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
        ejs.renderFile(path.join(tempDir, file), answers, (err, ctx) => {
          if (err) throw err;
          // console.log(ctx);
          fs.writeFileSync(path.join(destDir, file), ctx);
        });
      });
    });
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

#!/usr/bin/env node

// inquirer
// ejs

const path = require("path");
const inquirer = require("inquirer");
const ejs = require("ejs");
const fs = require("fs");

const questions = [
  { name: "name", type: "input", message: "project name?" },
  { name: "url", type: "input", message: "project url?" },
];

inquirer.prompt(questions).then(answers => {
  const tempDir = path.join(__dirname, "../templates");
  const destDir = process.cwd();

  fs.readdir(tempDir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      ejs.renderFile(path.join(tempDir, file), answers, (err, ctx) => {
        if (err) throw err;
        fs.writeFileSync(path.join(destDir, file), ctx);
      });
    });
  });
});

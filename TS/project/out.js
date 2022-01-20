var EColor = /* @__PURE__ */ ((EColor2) => {
  EColor2[EColor2["red"] = 0] = "red";
  EColor2[EColor2["green"] = 1] = "green";
  EColor2[EColor2["blue"] = 2] = "blue";
  EColor2[EColor2["yellow"] = 3] = "yellow";
  return EColor2;
})(EColor || {});
console.log(0 /* red */);
const study = {
  name: "ming",
  age: 24
};
function tsDemo(data) {
  return `${data.name} is ${data.age}`;
}
tsDemo(study);
var EType = /* @__PURE__ */ ((EType2) => {
  EType2[EType2["student"] = 0] = "student";
  EType2[EType2["teacher"] = 1] = "teacher";
  EType2[EType2["parents"] = 2] = "parents";
  return EType2;
})(EType || {});
function add({ a, b }) {
  return a + b;
}
function addNumber({ a }) {
  return a;
}
const total = add({ a: 1, b: 2 });
const all = addNumber({ a: "stringify" });
const fn = (str) => {
  return parseInt(str, 10);
};
const fnc = (str) => {
  return parseInt(str, 10);
};
const objectArr = [{ name: "liu" }, { name: "ming" }];
const personArr = [
  { name: "liu", age: 12 },
  { name: "ming", age: 21 }
];
const personArr1 = [
  { name: "liu", age: 12 },
  { name: "ming", age: 21 }
];
const t1 = [
  ["1", 2, 3],
  ["1", 2, 3],
  ["1", 2, 3],
  ["1", 2, 3],
  ["1", 2, 3]
];
const getProp = (p) => {
  p.lastName = "jia";
};
const prop = {
  firstName: "l",
  lastName: "ming",
  sex: 1
};
getProp(prop);
getProp({
  firstName: "l",
  lastName: "ming"
});
const teacher = {
  firstName: "l",
  lastName: "ming",
  age: 24,
  say() {
    return "I am a Teacher.";
  }
};
class Teach {
  say() {
    return "I can teach";
  }
  speak() {
    return "I speak";
  }
}
new Teach();

var EColor;
(function (EColor) {
    EColor[EColor["red"] = 0] = "red";
    EColor[EColor["green"] = 1] = "green";
    EColor[EColor["blue"] = 2] = "blue";
    EColor[EColor["yellow"] = 3] = "yellow";
})(EColor || (EColor = {}));
console.log(EColor['red']);
var study = {
    name: 'ming',
    age: 24
};
function tsDemo(data) {
    return "".concat(data.name, " is ").concat(data.age);
}
tsDemo(study);
var EType;
(function (EType) {
    EType[EType["student"] = 0] = "student";
    EType[EType["teacher"] = 1] = "teacher";
    EType[EType["parents"] = 2] = "parents";
})(EType || (EType = {}));
function add(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
function addNumber(_a) {
    var a = _a.a;
    return a;
}
var total = add({ a: 1, b: 2 });
var all = addNumber({ a: 'stringify' });
var fn = function (str) {
    return parseInt(str, 10);
};
var fnc = function (str) {
    return parseInt(str, 10);
};
var objectArr = [{ name: 'liu' }, { name: 'ming' }];
var personArr = [
    { name: 'liu', age: 12 },
    { name: 'ming', age: 21 },
];
var personArr1 = [
    { name: 'liu', age: 12 },
    { name: 'ming', age: 21 },
];
var t1 = [
    ['1', 2, 3],
    ['1', 2, 3],
    ['1', 2, 3],
    ['1', 2, 3],
    ['1', 2, 3],
];
var getProp = function (p) {
    p.lastName = 'jia';
};
var prop = {
    firstName: 'l',
    lastName: 'ming',
    sex: 1
};
getProp(prop);
getProp({
    firstName: 'l',
    lastName: 'ming'
});
var teacher = {
    firstName: 'l',
    lastName: 'ming',
    age: 24,
    say: function () {
        return 'I am a Teacher.';
    }
};
var Teach = /** @class */ (function () {
    function Teach() {
    }
    Teach.prototype.say = function () {
        return 'I can teach';
    };
    Teach.prototype.speak = function () {
        return 'I speak';
    };
    return Teach;
}());
new Teach();

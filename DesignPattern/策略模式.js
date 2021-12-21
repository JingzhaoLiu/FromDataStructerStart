var strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
};

var calculateBouns = function (level, salary) {
  return strategies[level](salary);
};

strategies['S'](5000);
calculateBouns('S', 5000);





var ValidatorItem = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isPhone: function (value, errorMsg) {
    if (!/(^1[3|5|7|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
};

ValidatorItem.isNonEmpty('aaa','字符串不能为空');
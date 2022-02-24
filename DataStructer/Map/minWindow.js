// 输入：s = "ADOBECODEBANC", t = "ABC"  {A=>0,B=>1,C=>2}
// 输出："BANC"

var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let l = 0;
  let r = 0;
  let map = new Map();
  let res = "";

  for (let v of t) {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1);
  }
  console.log('map: ', map);
  let needType = map.size;
  while (r < s.length) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1);
      if (map.get(s[r]) == 0) needType -= 1;
    }
    while (needType == 0) {
      let newStr = s.substring(l, r + 1);
      console.log('newStr: ', newStr);

      if(res === '' || newStr.length < res.length) {
        res = newStr
      }
      console.log('res: ', res);
      if (map.has(s[l])) {
        map.set(s[l], map.get(s[l]) + 1);
        if (map.get(s[l]) == 1) needType += 1;
      }

      l++;
    }
    r++;
  }

  return res;
};

minWindow("ADOBECODEBANC","ABC");
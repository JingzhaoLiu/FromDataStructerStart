var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let res = 0;
  let map = new Map();
  

  for (let r = 0; r < s.length; r++) {
    // get(key) 返回一个 Map 对象中与指定键相关联的值，如果找不到这个键则返回 undefined。
    // if (map.get(s[r]) !== undefined) {

    // 直接判断存不存在
    // if (map.has(s[r])) {
    //   l = l < map.get(s[r]) + 1 ? map.get(s[r]) + 1 : l;
    // }

    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }

    map.set(s[r], r);
    res = Math.max(res, r - l + 1);
  }

  console.log('res: ', res);
  return res;
};

lengthOfLongestSubstring('abba')

// var lengthOfLongestSubstring = function (s) {
//   const occ = new Set();
//   const n = s.length;

//   let rk = -1,
//     ans = 0;
//   for (let i = 0; i < n; ++i) {
//     if (i != 0) {
//       occ.delete(s.charAt(i - 1));
//     }
//     while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//       occ.add(s.charAt(rk + 1));
//       ++rk;
//     }

//     ans = Math.max(ans, rk - i + 1);
//   }
//   return ans;
// };
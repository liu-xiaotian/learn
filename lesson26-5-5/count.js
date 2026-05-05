// 1. 给定字符串，统计每个字符出现的次数
const str = "hello";

function countFn(str) {
  const res = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (res[char]) {
      res[char] = res[char] + 1;
    } else {
      res[char] = 1;
    }
  }
  return res;
}

console.log(countFn(str));

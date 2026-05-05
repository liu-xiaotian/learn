// 给定一个数字的数组，找出最大和最小值
const arr = [3, 8, 2, 10, 5];
// {
//   max: 10,
//   min: 2
// }

let max = arr[0];
let min = arr[0];

function getMaxMin(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      mim = arr[i];
    }
  }

  return { max, min };
}

console.log(getMaxMin(arr));

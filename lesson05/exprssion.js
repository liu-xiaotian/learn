//async 返回的是一个 Promise 对象
async function fn() {
  console.log("hello world");
}
console.log(fn()); //Promise { <resolved>: undefined }

let x;
console.log((x = "hello world"));
console.log(0 && 5);
console.log(0 || 5);

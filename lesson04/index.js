function helloFn(){
  console.log('hello');
  return this
}
console.log(helloFn());

async function asyncFn2() {//异步函数
  console.log("async2");
}
console.log(asyncFn2());

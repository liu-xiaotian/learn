'use strict'
//编译阶段都会进行变量提升 ，不同  第一：初始化：initialization 变量提升：hoisting   暂时性死区=》 TDZ 第二：作用域的区别scope， 第三：赋值
// console.log(a);
// var a = 10

// console.log(b);
// let b = 100

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// var shadowing = 'world'
// }
// shadowingFn();


// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// }
// shadowingFn();

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// shadowing = 'world'
// }
// shadowingFn();

// var shadowing = 'hello'
// function shadowingFn() {
// console.log('variable shadowing:',shadowing);
// let shadowing = 'world'
// }
// shadowingFn();


// var a = 10
// let b = 10
// console.log(globalThis.a);
// console.log(globalThis.b);

// for (let i=0; i<3; i++) setTimeout(()=>console.log(i))

// {
//   let c = 100 ; var d = 1000
// }
// // console.log(c);
// console.log(d);


// var a = 10
// var a = 100

// // let b = 10
// // let b = 100
// console.log(a);
// console.log(b);

// const c = 10
// const c = 100

const obj = {
  a : 1
}
obj.b = 20
obj.a = 100
console.log(obj);
delete obj.b
console.log(obj);



Object.freeze(obj)
obj.c = 30
// obj.a = 1000
// console.log(obj.a);
console.log(obj);



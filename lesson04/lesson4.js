// let globalval = 'global'
// var globalval2 = 'global'
// console.log(globalThis.globalval2);

// {
//   let blockval = 'block'
//   var blockval2 = 'block'
// }

// // console.log(blockval);
// // console.log(blockval2);

// function fun(){
//   var funvar = 'fun'
//   let funvar2 = 'fun2'
// }

// console.log();

var i = 0;
// for (var i=0; i<3; i++) setTimeout(()=>console.log(i))
// for (let i=0; i<3; i++) setTimeout(()=>console.log(i))
// for (var i=0; i<3; i++) console.log(i)

//词法作用域 lexical scope

// 课后题
// function lexicalFn1(){
//   console.log('lexical2',lexical2);
// }

// function lexicalFn2(){
//   let lexical2 = 'hello'
//   lexicalFn1()
// }
// lexicalFn2()

//词法作用域：词法作用域就是指作用域是由代码中函数声明的位置来决定的
// function lexicalFn1(lexical2){
//   console.log('lexical2',lexical2);
// }

// function lexicalFn2(){
//   let lexical2 = 'hello'
//   lexicalFn1(lexical2)
// }
// lexicalFn2()

// function lexicalFn2() {
//   let lexical2 = "hello";
//   function lexicalFn1() {
//     console.log("lexical2", lexical2);
//   }
//   // lexicalFn1();
//   return lexicalFn1;
// }
// const fn3 = lexicalFn2();

// fn3();

// function lexicalFn2() {
//   let lexical2 = "hello";
//   function lexicalFn1() {
//     console.log("lexical2", lexical2);
//   }
//   // lexicalFn1();
//   return lexicalFn1;
// }
// lexicalFn2()();

//1. 闭包会导致内存泄漏
//2. 持久闭包、短暂闭包

function make() {
  let n = 0;
  return () => ++n;
}
const c1 = make();
const c2 = make();

c1();
c1();
c1();
c2(); //创建了一个新的闭包，
// 1 2 3 1

function closureFn() {
  let num = 0;
  // function addFn() {
  //   num++;
  // }
  return {
    get: () => num,
    add: () => ++num,
    // add: () => num + 1,
  };
}

const result = closureFn();

console.log(result.get());
console.log(result.add());
console.log(result.add());
console.log(result.get());

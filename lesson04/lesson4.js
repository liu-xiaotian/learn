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

var i = 0
for (var i=0; i<3; i++) setTimeout(()=>console.log(i))
for (let i=0; i<3; i++) setTimeout(()=>console.log(i))
// for (var i=0; i<3; i++) console.log(i)

//词法作用域 lexical scope

// 课后题
function lexicalFn(){
  console.log('lexical2',lexical2);
}

function lexicalFn2(){
  let lexical2 = 'hello'
  lexicalFn()
}
lexicalFn2()
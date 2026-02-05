// 1. let基本用法-块级作用域
// {
//   let a = 20;
//   var b = 20;
// }
// console.log(a); //a is not defined
// console.log(b); //20

//2. 不存在变量提升
//var的情况
// console.log(c);//输出undefined
// var c = 30;


//let的情况
// console.log(c);// 报错ReferenceError
// let c = 30;

// 3. 不允许重复声明
// let c = 10;
// let c = 30;
// console.log(c); //报错

// function func(arg) {
//   let arg; // 报错
// }

//4. 暂时性死区 TDZ
// 为什么需要块级作用域？
// 原因一：内层变量可能会覆盖外层变量
// function foo(a){
//     console.log(a);
//     if(1===2){
//         var a = 'hello 小马哥';
//     }
// }
// var a = 10;
// foo(a);
// 原因二：用来计数的循环遍历泄露为全局变量 
// 变量i只用来控制循环，但是循环结束后，它并没有消失，用于变量提升，泄露成了全局变量。
// var arr = []
// for(var i = 0; i < 10; i++){
//     arr[i] = function(){
//         return i;
//     }
// }
// console.log(arr[5]());

// 解决循环计数问题
// //解决方式一：使用闭包
// var arr = []
// for(var i = 0; i < 10; i++){
//     arr[i] = (function(n){
        
//         return function(){
//             return n;
//         }
//     })(i)
// }
// //解决方式二：使用let声明i

// var arr = []
// for(let i = 0; i < 10; i++){
//     arr[i] = function () {
//         return i;
//     }
// }

//5. const基本用法-声明只读的常量

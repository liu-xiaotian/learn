//1.带参数默认值的函数
// ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法
// function log(x,y){
//     y = y || 'world';
//     console.log(x,y);
// }
// log('hello');//hello world
// log('hello','china') //hello china
// log('hello','')//hello world
// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello
// 默认的表达式可以是一个函数
// function getVal(val) {
//     return val + 5;
// }
// function add2(a, b = getVal(5)) {
//     return a + b;
// }
// console.log(add2(10));

// 小练习 请问下面两种写法有什么区别？
// 写法一
// function m1({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }
// // 上面两种写法都对函数的参数设定了默认值，
// // 区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
// // 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
// // 函数没有参数的情况
// // 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]


// rest 参数
//ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
// function add(...values){
//   let sum = 0;

//   for(var val of values){
//     sum +=val;
//   }
//   return sum;
// }

// console.log(add(1,2,3,4,5));

//箭头函数
// let f = v=>v;
// //等同于
// let f = function(v){
//     return v;
// }

// // 有一个参数
// let add = value => value;

// // 有两个参数
// let add = (value,value2) => value + value2;

// let add = (value1,value2)=>{
    
//     return value1 + value2;
// } 
// // 无参数
// let fn = () => "hello world";

// let doThing = () => {

// }
//如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
// let getId = id => ({id: id,name: 'mjj'}) //注意
// let obj = getId(1);
// console.log(obj);

// //箭头函数的作用
// // 表达更加简洁
// const isEven = n => n % 2 == 0;
// const square = n => n * n;

// // 简化回调函数
// // 正常函数写法
// [1,2,3].map(function (x) {
//   return x * x;
// });

// // 箭头函数写法
// [1,2,3].map(x => x * x);
// console.log([1,2,3].map(x => x * x));


//使用注意点
//没有this绑定
//箭头函数中没有arguments对象
//箭头函数不能使用new关键字来实例化对象
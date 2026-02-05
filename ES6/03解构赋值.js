// 1. 数组解构
// let [a,b,c] = [1,2,3];

// let [foo] = [];
// let [bar, foo] = [1];

//2. 对象解构
// let node = {
//     type:'identifier',
//     name:'foo'
// }

// let {type,name} = node;
// console.log(type,name)//identifier foo
// //对象的解构赋值时，可以对属性忽略和使用剩余运算符
// let obj = {
//     a:{
//         name:'张三'
//     },
//     b:[],
//     c:'hello world'
// }
// //可忽略 忽略b,c属性
// let {a} = obj;
// //剩余运算符 使用此法将其它属性展开到一个对象中存储
// let {a,...res} = obj;
// console.log(a,res);

// 默认值
// let {a, b = 10} = {a:20}
// console.log(a,b);

//函数参数解构赋值
// function addCart(n,num=0){
    
//     return n+num;
// }
// addCart(10);//10
// addCart(10,20); //30

// 用途
// 1.交换变量的值
// let x = 1;
// let y = 2;
// [x,y] = [y,x];
// console.log(x,y);

// 2. 从函数返回多个值

// // 返回一个数组

// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();

// // 返回一个对象

// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();
//3. 函数参数的定义
// // 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);

// // 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});
//4. 提取JSON数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
console.log(id, status, number);
// 42, "OK", [867, 5309]

//5. 输入模块的指定方法
// const {ajax} = require('xxx')

// ajax()

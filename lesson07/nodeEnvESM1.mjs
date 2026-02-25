// let a = 1;
// // export default a

// function add(a, b) {
//   return a + b;
// }

// // export default add;

// // export default function add(a, b) {
// //   return a + b;
// // }

// // export default let a = 1;//不可以接变量声明

// export default { a, add };

export let a = 1;
export function add(a, b) {
  a + b;
}

let b = 2;
export { b };

// export {123}
// export ()=>{}
// 不可以接 表达式

function add2() {}

export { add2 };

globalThis.obj = {
  a: 1,
};

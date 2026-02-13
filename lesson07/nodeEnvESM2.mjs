// import { a } from "./nodeEnvESM1.mjs";
// import obj from "./nodeEnvESM1.mjs"; //这里不可以解构
// const { a, add } = obj;
// console.log(a);
// console.log(add(1, 2));

import { b } from "./nodeEnvESM1.mjs";
console.log(b);

console.log(globalThis.obj);

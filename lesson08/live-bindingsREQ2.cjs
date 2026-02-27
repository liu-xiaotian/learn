// const { a, addFun } = require("./live-bindingsREQ1.cjs");

// console.log(a);
// addFun();
// console.log(a);

const REQ1 = require("./live-bindingsREQ1.cjs");
console.log(REQ1.getCounter());
REQ1.counterFun();
console.log(REQ1.getCounter());

// const { store, incCounter } = require("./live-bindingsREQ1.cjs");
// console.log(store.counter);
// incCounter();
// console.log(store.counter);

// let a = 0;
// const addFun = () => ++a;
// module.exports = { a, addFun };

let counter = 0;
function counterFun() {
  return counter++;
}
function getCounter() {
  return counter;
}
module.exports = {
  getCounter,
  counterFun,
};

// 包装成对象

// let store = {
//   counter: 0,
// };
// function incCounter() {
//   return store.counter++;
// }

// module.exports = { store, incCounter };

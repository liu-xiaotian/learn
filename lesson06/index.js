// async function oneFn(params) {
//   return 1;
// }
// console.log(oneFn());

// 闭包 Currying柯里化：设计的思想、模式
// 目的：将多个参数进行分解,单参数，一次传入一个参数，

const addFn = (a) => (b) => (c) => a + b + c;

// console.log(addFn(1)(2)(3));

function add(a) {
  console.log(a);
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3));

//偏函数 partialFunction
const partialFun =
  (fn, ...preset) =>
  (...rest) =>
    fn(...preset, ...rest);

// function partialFun2(fn, ...perset) {
//   return function (...rest) {
//     return fn(...preset, ...rest);
//   };
// }

function partialFun2(fn, ...preset) {
  console.log(fn, preset);
  return function (...rest) {
    return fn(...preset, ...rest);
  };
}

// const add2 = partialFun2((a, b) => a + b, 1);
// console.log(add2(2));

// const add3 = partialFun2(((a, b) => a + b, 2));
// console.log(add3(2));

const fetchFn = function (baseURl, path) {
  console.log(baseURl + path);

  return fetch(baseURl + path);
};

const apiFun = partialFun2(fetchFn, "http://api.baseUrl.com");

const loginApi = apiFun("/login");
const userApi = apiFun("/user");

async function async1() {//异步函数
  console.log("async1 start");
  await async2();
  console.log("async1 end");//放到异步任务里面的微任务
}

async function async2() {//异步函数
  console.log("async2");
}

console.log("script start");

setTimeout(function () {//setTimeout会立即执行，回调会放到宏任务队列
  console.log("setTimeout");
}, 0);

async1();//

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");//放到异步任务里面的微任务
});

console.log("script end");//

//script start
//setTimeout
//async1 start
//async2
//async1 end
//promise1
//script end

//script start
//async1 start
//async2
//promise1
//script end 最后的同步代码，执行微任务然后宏任务
//async1 end
//promise2
//setTimeout

// * **创建上下文：**

//   * 同步代码（全局代码）创建 `Global Context`。

//   * 异步代码（`async1`、`async2`、`Promise`）会分别创建对应的上下文（`async1 Context`、`async2 Context`、`Promise Executor Context` 等）。

//   * 每个函数执行时，都创建一个新的上下文。

// * **`pop` 顺序：**

//   1. `async2 Context` 弹出。

//   2. `Promise Executor Context` 弹出。

//   3. `async1_continuation Context` 弹出。

//   4. `Promise Then Context` 弹出。

//   5. `setTimeout Callback Context` 弹出。

// * **微任务和宏任务：**

//   * 微任务（`then` 回调和 `async1` 后续代码）会在所有同步代码执行完后执行，优先于宏任务。

//   * 宏任务（`setTimeout` 回调）会在所有微任务执行完后执行。
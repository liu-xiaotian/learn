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
async function async1() {//微任务
  console.log("async1 start");
  await async2();//不知道什么时候执行完毕，后面丢到微任务
  await async3();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async function async3() {
  console.log("async3");
}

console.log("script start");

setTimeout(function () {//宏任务，在浏览器中属于window对象，Node中是global
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {//微任务
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

//script start
//async1 start
//async2
//promise1
//script end
//async3
//promise2

//async1 end 微任务是“斩草除根”：只要微任务队列里有东西，哪怕是刚刚产生的，事件循环都会一直执行微任务，直到队列彻底清空，才会去碰 setTimeout。
//setTimeout
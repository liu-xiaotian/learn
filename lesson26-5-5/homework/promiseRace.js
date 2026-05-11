//谁先结束，就返回谁
Promise.myRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    for (const item of promiseArr) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
};

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
});

Promise.myRace([p1, p2]).then((res) => {
  console.log(res);
});

// 应用
// 1.请求超时控制
//接口请求 和 超时计时器,谁先结束用谁
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("请求超时");
    }, ms);
  });
}

Promise.race([fetch("/api/data"), timeout(3000)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 2.CDN 竞速
// 多个服务器同时请求 谁快用谁

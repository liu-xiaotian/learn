Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    // 参数校验
    if (!Array.isArray(promiseArr)) {
      return reject(new TypeError("参数必须是数组"));
    }

    const result = [];
    let count = 0;
    const len = promiseArr.length;

    // 空数组处理
    if (len === 0) {
      return resolve([]);
    }

    for (let i = 0; i < len; i++) {
      // 统一转 Promise
      Promise.resolve(promiseArr[i]).then(
        (res) => {
          // 保证结果顺序
          result[i] = res;

          count++;

          // 全部完成
          if (count === len) {
            resolve(result);
          }
        },
        (err) => {
          // 一个失败直接 reject
          reject(err);
        },
      );
    }
  });
};

// 测试
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const p2 = Promise.resolve(2);

const p3 = 3;

const p4 = Promise.reject("error");

Promise.myAll([p1, p2, p3, p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

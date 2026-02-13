let b = 2;
module.exports = b;

// exports.b = 2;

function add(a, b) {
  return a + b;
}
// 单个值接到等号后，多个值用对象
module.exports = {
  b,
  add,
};

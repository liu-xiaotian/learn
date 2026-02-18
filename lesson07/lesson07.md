## 什么是 .cjs 和 .mjs ？

1. .cjs 代表使用 CommonJS 模块
2. .mjs 代表使用 ES 模块

## 两种模块的差异

### CommonJS（CJS）

// 导出
module.exports = { foo: 1 };
// 或
exports.foo = 1;

// 导入
const myModule = require('./myModule');
const { foo } = require('./myModule');

### ES Modules（MJS / ESM）

// 导出
export const foo = 1;
export default { foo: 1 };

// 导入
import myModule from './myModule.js'; // 默认导出
import { foo } from './myModule.js'; // 命名导出
import { foo as bar } from './myModule.js'; // 重命名
import './side-effect-module.js'; // 仅执行副作用

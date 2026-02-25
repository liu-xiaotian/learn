## 什么是 .cjs 和 .mjs ？

1. .cjs 代表使用 CommonJS 模块
2. .mjs 代表使用 ES 模块

### commonjs 与 ES6module 的区别：

1. 两者的模块导入导出语法不同：commonjs是`module.exports` ，`exports` 导出， `require()`导入；ES6则是 `export` 和 `export default`导出， `import` 导入。

   commonjs //导出多个值用对象module.exports={}，对象可以直接解构const { b, add } = require("./nodeEnvCMJ1.cjs");// 单个值接到等号后，多个值用对象

   Modules //命名导出， 不可以接 表达式 。//默认导出：不可以接变量声明（let const var），导出多个值要用对象 ，果导出的是对象，这里不可以直接解构

   ~~~js
   // 命名导出
   export const name = 'John';
   export function greet() {
     console.log('Hello, ' + name);
   }
   import { name, greet } from './module';
   
   // 默认导出
   export default function() {
     console.log('This is the default export');
   }
   import defaultFunction from './module';//如果导出的是对象，这里不可以直接解构
   
   //定义模块,统一暴露
   let name = '张三';
   
   function way() {
       console.log('我可以用这种方式');
   }
   
   export { name, way }
   ~~~

   此外，`ES模块`是静态的，需要构建工具转换后才能在不支持`ES模块`的环境中运行，而`CommonJS模块`可以直接在`Node.js`等环境中运行。

   ~~~js
   // 动态导入模块
   import('./module').then(module => {
     module.greet();
   });
   ~~~

   

   它们有两个重大差异：

   **① CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用**。

   **② CommonJS 模块是运行时加载，ES6 模块是编译时输出接口**。

   第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

   下面重点解释第一个差异，我们还是举上面那个CommonJS模块的加载机制例子:

   ```
   // lib.js
   export let counter = 3;
   export function incCounter() {
     counter++;
   }
   // main.js
   import { counter, incCounter } from './lib';
   console.log(counter); // 3
   incCounter();
   console.log(counter); // 4
   ```

   

   ES6 模块的运行机制与 CommonJS 不一样。**ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块**。

5. commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。

### 总结：

- **ES6模块** 更适合于现代JavaScript开发，具有静态分析、支持异步加载、模块化和更清晰的语法。
- **CommonJS模块** 主要用于Node.js环境，特点是同步加载、动态模块解析，适用于服务器端开发，但不太适合浏览器环境，除非通过打包工具进行转换。




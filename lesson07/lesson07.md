### commonjs 与 ES6module 的区别：

1. 语法：

   commonjs是`module.exports` ，`exports` 导出， `require()`导入；

   ES6则是 `export` ， `export default`导出， `import`  导入。

2. 注意点：

   - cjs 导出单个值：module.exports.x = 1，多个值用对象 `module.exports={}` ，解构：const { b, add } = require("./nodeEnvCMJ1.cjs");
   - mjs 默认导出的对象不可以直接解构，不可以导出变量声明（let const var），命名导出不可以接表达式，例子： export {123} export ()=>{}

3. 静态导入和动态导入

   - cjs

     ~~~js
     let config;
     if (true) {
       //require() 是同步执行的，且可以写在判断语句（如 if...else）中 ，根据条件动态决定加载 CMJ2 还是 CMJ3
       config = require("./nodeEnvCMJ2.cjs");
     } else {
       config = require("./nodeEnvCMJ3.cjs");
     }
     ~~~

   - msj

     普通的 `import...from` 必须位于文件顶层，无法在逻辑判断中使用

     ~~~js
     let config;
     let path = 1 === 1 ? "./nodeEnvESM2.mjs" : "./nodeEnvESM3.mjs";
     //路径是一个变量。静态导入无法处理变量路径，只有动态导入才能根据逻辑加载不同的文件。
     try {
       const module = await import(path);//使用 import() 函数，返回一个 Promise
       config = module.default;
     } catch (err) {
       console.log(err);
     }
     // 方法二 动态导入模块
     import('./module').then(module => {
       module.greet();
     });
     ~~~

4. 变量绑定机制（live-bindings）：值拷贝 vs. 引用传递

   - cjs 输出的是一个值的拷贝，是导出那一刻的一个**副本** 

   - ES6 模块是动态引用，并且不会缓存值，`import` 导入的是原模块变量的一个**只读引用**

   - 例子：

        ```js
        // lib.cjs
        export let counter = 3;
        export function incCounter() {
          counter++;
        }
        // main.cjs
        import { counter, incCounter } from './lib';
        console.log(counter); // 3
        incCounter();
        console.log(counter); // 4
        ```

     

5. 解决CJS 的快照问题

   - 函数或利用 JS 的 `getter` 属性

     ~~~js
     // lib.cjs
     let counter = 3;
     
     function incCounter() {
       counter++;
     }
     
     module.exports = {
       // 定义一个 getter 属性
       get counter() {
         return counter;
       },
       incCounter,
     };
     
     // --- main.cjs ---
     const lib = require('./lib.cjs');
     
     // 注意：这里必须通过 lib.counter 访问，不能解构
     console.log(lib.counter); // 3
     lib.incCounter();
     console.log(lib.counter); // 4 (成功获取更新)
     ~~~

     解构赋值 `const { a } = ...` 相当于 `const a = lib.a`。这一瞬间，它触发了 `getter` 并把当时的数字 `0` 赋值给了新变量 `a`。之后新变量 `a` 就和原始模块脱离关系了。

     函数写法
     ~~~js
     // lib.cjs
     // 定义一个普通的返回函数
     function getCounter() {
       return counter;
     }
     module.exports = {
       getCounter, // 导出函数
       incCounter,
     };
     // --- main.cjs ---
     const { getCounter, incCounter } = require('./lib.cjs');
     
     console.log(getCounter()); // 3 (调用函数取值)
     incCounter();
     console.log(getCounter()); // 4 (成功获取最新闭包变量)
     ~~~

   - 将变量包装在对象中

     ~~~js
     // lib.cjs
     const state = {
       counter: 3
     };
     
     function incCounter() {
       state.counter++; // 直接修改对象内部属性
     }
     
     module.exports = {
       state,      // 导出整个对象
       incCounter,
     };
     
     // --- main.cjs ---
     const lib = require('./lib.cjs');
     
     console.log(lib.state.counter); // 3
     lib.incCounter();
     console.log(lib.state.counter); // 4 (成功获取更新)
     ~~~

     






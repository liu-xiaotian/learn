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

   

2. [commonjs](https://zhida.zhihu.com/search?content_id=163661770&content_type=Article&match_order=3&q=commonjs&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzE3MjQ0MzQsInEiOiJjb21tb25qcyIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjE2MzY2MTc3MCwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjozLCJ6ZF90b2tlbiI6bnVsbH0.4KCYRnnqrbuDxXdf-Xs6a51fHkmBjydj7GeX0TS2_rU&zhida_source=entity)是运行时加载模块，ES6是在静态编译期间就确定模块的依赖。

3. ES6在编译期间会将所有import提升到顶部，commonjs不会提升require。

4. commonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。ES6是导出的一个引用，内部修改可以同步到外部。

5. commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。

```javascript
// 动态导入模块
import('./module').then(module => {
  module.greet();
});
```

### 总结：

- **ES6模块** 更适合于现代JavaScript开发，具有静态分析、支持异步加载、模块化和更清晰的语法。
- **CommonJS模块** 主要用于Node.js环境，特点是同步加载、动态模块解析，适用于服务器端开发，但不太适合浏览器环境，除非通过打包工具进行转换。




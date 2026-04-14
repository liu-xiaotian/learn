 写累计器，通过获取元素，给btn添加监听事件，然后就count++

比较：

1. 原生js 是一种命令式的更新：我们要有count这个状态，然后要找到这个节点，绑定这个事件，通过textContent更新试图
2. React 是一种状态式驱动，声明式的渲染，把UI 更新到视图中，同过虚拟DOM的diff重新渲染：定义状态，ui视图由return的结果表示，通过出发setData来改变状态，react改变所有。
3. 原生dom 和更新是两条线,



HTML中写react：

1. react = 核心库（定义组件，只负责：描述 UI 长什么样，状态一改变，就渲染）	
2. react-dom = 渲染器（把组件染到浏览器 DOM）
3. bable

crossorigin 控制跨域请求



# 用 Vite（现代标准写法）

👉 这是实际开发中最常用的方式

## 1️⃣ 创建项目

```
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

------

## 2️⃣ 改成你的代码

### `main.jsx`

```
import React from "react";
import ReactDOM from "react-dom/client";
import Count from "./Count.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Count />);
```

------

### `Count.jsx`

```
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>加</button>
    </div>
  );
}
```

------

### `index.html`

```
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

------

# 🔥 总结（关键区别）

| 写法           | 特点                    |
| -------------- | ----------------------- |
| CDN + Babel    | 简单但性能差（学习用）  |
| ESM（无构建）  | 能 import，但不能写 JSX |
| Vite / Webpack | ✅ 正常开发（推荐）      |

------

# 🎯 一句话结论

👉 **想用 import + JSX，就必须有构建工具（比如 Vite）**


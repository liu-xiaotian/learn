表单 action 为空，获取form 添加 addEventListener ，模拟提交



方法

路径

以什么样的方式传输

### Content-Type

`Content-Type` 前端（客户端）发出，和 Express 后端（服务器）接收的应该对应。

如果两者不匹配，你的 `req.body` 就会是 `undefined` 或者空对象 `{}`。

1. `application/x-www-form-urlencoded`

这是传统的 HTML `<form>` 提交数据的方式。数据看起来像 URL 参数一样：`name=gemini&age=1`。

- **前端 Header:** `Content-Type: application/x-www-form-urlencoded`
- **Express 后端:** ```javascript app.use(express.urlencoded({ extended: true }));
- **场景:** 纯 HTML 页面表单提交，或者某些旧版的 API 调用。

2. `application/json`

 `axios`, `fetch`最常用的方式。数据是以 JSON 字符串的形式发送的：`{"name": "gemini", "age": 1}`。

- **前端 Header:** `Content-Type: application/json`|// body: JSON.stringify(payload),
- **Express 后端:** ```javascript app.use(express.json());
- **场景:** Vue/React 前后端分离项目、RESTful API 开发。

### FormData 和 entries

~~~js
const fd = new FormData(form); //FormData的api
const payload = Object.fromEntries(fd.entries()); //entries 的作用
~~~

把 HTML 表单里用户填的内容，瞬间转换成一个干净的 JavaScript 对象。

1. `new FormData(form)`：数据“打包”

   `FormData` 是一个内置的对象，它会自动扫描表单（`form`）中所有带有 `name` 属性的输入框（input, select, textarea），并将它们的值取出来。	

2. `fd.entries()`：生成“键值对列表”

   `entries()` 方法会把这个“黑盒”里的数据变成一个**迭代器**（Iterator）。你可以把它想象成一串由 `[key, value]` 组成的数组列表。

3. `Object.fromEntries(...)`：转换成“对象”

为什么我们要这么做？

1. 方便发送 JSON： 如果你直接发 `FormData`，后端需要用 `multer` 等库解析。 如果你通过这几行代码转成了 `payload` 对象，你就可以用 `JSON.stringify(payload)` 发送，后端直接用 `app.use(express.json())` 就能拿到。
2. 代码简洁： 以前我们需要手动一个一个去获取：`const name = input.value`。 现在不管表单有 5 个还是 50 个字段，这三行代码通杀。

| **方法**     | **作用**               | **备注**                            |
| ------------ | ---------------------- | ----------------------------------- |
| **append**   | 新增数据               | fd.append('tag', 'js')              |
| **set**      | 修改/替换数据          | fd.set('tag', 'ts')                 |
| **get**      | 获取单个值             | `fd.get('tag')` → `'js'`            |
| **getAll**   | 获取全部值             | `fd.getAll('tag')` → `['js', 'ts']` |
| **entries**  | 遍历接口               | 配合 `Object.fromEntries` 使用      |
| has(name)    | **判断**是否存在该字段 | `fd.has('tag')` → `true/false`      |
| delete(name) | **删除**指定字段       | fd.delete('tag')                    |
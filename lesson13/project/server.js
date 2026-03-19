const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ===== 中间件 =====
app.use(express.urlencoded({ extended: true })); // 解析 form
// app.use(express.json());
app.use(express.text());
// ===== 模拟数据库 =====
// const users = [
//   { username: "admin", password: "123456" },
//   { username: "test", password: "123456" },
// ];

// ===== 静态页面 =====
// Express 会自动寻找 public/index.html。
// 如果没有 index.html，你需要访问具体文件名，如 http://localhost:3000/login.html
app.use(express.static(path.join(__dirname, "public")));

// ===== 路由：首页 =====
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

// ===== 登录接口 =====
app.post("/login", (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  // console.log(username, password);

  // // 基础校验
  // if (!username || !password) {
  //   return res.status(400).send("用户名或密码不能为空");
  // }
  // const user = users.find(
  //   (item) => item.username === username && item.password === password,
  // );
  // if (!user) {
  //   return res.status(401).send("用户名或密码错误");
  // }
  // 登录成功
  res.send(`
    <h1>登录成功</h1>
    <p>欢迎你：${username}</p>
    <a href="/">返回</a>
    `);
});

// ===== 启动服务 =====
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

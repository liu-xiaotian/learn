const express = require("express");

const app = express();
const PORT = 3000;

// ===== 中间件 =====
app.use(express.urlencoded({ extended: true })); // 解析 form

// ===== 静态页面 =====
// Express 会自动寻找 public/index.html。
// 如果没有 index.html，你需要访问具体文件名，如 http://localhost:3000/login.html
app.use(express.static("public"));

// ===== 启动服务 =====
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

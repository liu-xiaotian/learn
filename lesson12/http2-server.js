const http2 = require("http2");
const fs = require("fs");

//生成 key.pem（私钥）和 cert.pem（证书）
//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
// 加载 SSL 证书
const sslOptions = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = http2.createSecureServer(sslOptions, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from HTTP/2!\n");
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`HTTP/2 服务器运行中：https://localhost:${PORT}`);
});

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from HTTP/1.1!\n");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`HTTP/1.1 服务器运行中：http://localhost:${PORT}`);
});

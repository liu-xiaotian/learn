const { createQuicSocket } = require("node:net");
const fs = require("fs");

const key = fs.readFileSync("key.pem");
const cert = fs.readFileSync("cert.pem");

// 创建 QUIC 套接字
const socket = createQuicSocket({ endpoint: { port: 443 } });

socket.on("session", (session) => {
  session.on("stream", (stream) => {
    stream.end("Hello from HTTP/3!");
  });
});

socket.listen({ key, cert, alpn: "h3" });
console.log("HTTP/3 server listening on port 443");

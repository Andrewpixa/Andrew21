// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // 设置默认的 HTML 文件路径
  const filePath = path.join(__dirname, "\work.html");

  // 读取 HTML 文件并发送
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

/* const express = require('express');
const app = express();
app.use(express.static('public'));  // 将public目录设为静态资源目录 
app.listen(3000,  '0.0.0.0', () => {
  console.log('Server  running on port 3000');
}); */
var http = require("http");

http.createServer(function(request, response) {
  console.log("Server is connected.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello world~~~");
  response.end();
}).listen(8888);
console.log("Server is created.");

// 用createServer建一個server，並且server會監聽電腦的8888的port
// 所以我開網頁連 127.0.0.1:8888
// 相當於我從外部發一個請求到某IP的某port，127.0.0.1就是本機電腦啦
// 他回傳hello world 給我show

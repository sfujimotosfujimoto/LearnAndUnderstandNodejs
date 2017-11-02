const http = require("http");
const fs = require("fs");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
    // fs.readFileSync(__dirname + "/index.html");
    // let message = "Hello world...";
    // html = html.replace("{Message}", message);
    // res.end(html);
  })
  .listen(1337, "127.0.0.1");

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
  })
  .listen(3000);

fs.appendFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

try {
  const data = fs.readFileSync("../node-checkpoint/welcome.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}

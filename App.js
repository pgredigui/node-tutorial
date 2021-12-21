const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome ot the home page");
  }
  if (req.url === "/about") {
    res.end("Welcome ot the about page");
  }
  res.end(`<h1>Oops the page does not exist <h1>`);
});

server.listen(5000);

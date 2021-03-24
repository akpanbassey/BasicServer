const http = require("http");

http
.createServer(function (req, res) {

    res.end("<strong>Hello World</strong>");


})
http.createServer(handler).listen(8080);

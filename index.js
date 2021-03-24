const http = require("http");
const fs = require("fs"); // file system
const path = require("path");
const mime = require("mime");
const { Console } = require("console");

// const parse = path.parse("C:/Users/Micah/Documents/code/node_class/main.js");

// console.log(parse);

const server = http.createServer(function (req, res) {
  console.time("Response Time");
  res.setHeader("Content-Type", "text/html");

  try {
    if(req.url === "/"){
      req.url = "index.html"
    }
    const pathToFile = path.join(__dirname, "public", req.url);
    console.log("pathToFile>>>", pathToFile);

    fs.open(pathToFile, function (err, fd) {
      if (err) {
        console.dir(err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("File Not Found");
      }

      fs.readFile(pathToFile, function (err, data) {
        if (err) {
          console.dir(err);
          res.writeHead(404, { "Content-Type": "text/plain" });
          return res.end("File Not Found");
        }
        // console.log(content);
        const contentType = mime.getType(pathToFile);
        res.setHeader("Content-Type", contentType);
        res.end(data);

      });


      // if (stats.isFile()) {
      //   res.end(content);
      // } else {
      //   res.writeHead(404, { "Content-Type": "text/plain" });
      //   res.end("File Not Found");
      // }
    });
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(err.toString());
  }
  console.timeEnd("Response Time");
  console.log(res.statusCode, req.method, req.url);

});

const PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);

});

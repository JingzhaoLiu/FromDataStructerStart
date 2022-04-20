import http from "http";
import url from "url";
import fs from "fs";
import path from "path";
const port = 5000;

const server = http.createServer((req, res) => {
  const urlObject = url.parse(req.url);
  const { pathname } = urlObject;
  console.log("urlObject: ", urlObject);

  const method = req.method;

  if (pathname.startsWith("/api")) {
    if (method === "GET") {
      const data = [
        {
          id: 1,
          name: "ming",
          age: 18,
        },
        {
          id: 2,
          name: "hong",
          age: 17,
        },
      ];

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
     
    }
  }else {
    if (pathname.endsWith('.json')) {
      const d = path.join(path.resolve(), pathname);
      fs.readFile(d, (err, result) => {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(result.toString());
   
      });
    }
  }

  // res.statusCode = 200;
  // res.end("hello world");
});

server.listen(port, () => {
  console.log("server is running at port", port);
});

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('../content/streams.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream("../content/streams.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // pipe reads from readStream and then pushes the content on the writeStream here on response to be shown on browser
    });
    fileStream.on("err", (err) => {
      res.end(err);
    });
  })
  .listen(5000);

/* 
1> pipe function -> if data can be read in chunks then it can also be written in chunks. So for this process pipe function is used.
*/

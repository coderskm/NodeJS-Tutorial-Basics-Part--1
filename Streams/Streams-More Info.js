const { createReadStream } = require("fs");

const stream = createReadStream("../content/streams.txt", { highWaterMark: 90000, encoding: "utf8" });
// highWaterMark property used to control size of buffer

stream.on("data", (result) => {
  console.log(result);
});

stream.on('error', err => console.log(err));

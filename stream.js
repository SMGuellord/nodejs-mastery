const { createReadStream } = require("fs");

const stream = createReadStream("./content/subfolder/first.txt", {
  highWaterMark: 9000,
  encoding: "utf8",
});

stream.on("data", (res) => {
  console.log(res);
});

stream.on("error", (err) => console.log(err));

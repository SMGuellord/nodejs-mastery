const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf8", (e, r) => {
    if (e) {
      console.log(e);
      return;
    }
    const second = r;
    writeFile(
      "./content/subfolder/result-async.txt",
      `Here is the result : ${first} ${second}`,
      (error, res) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(res);
      }
    );
  });
});

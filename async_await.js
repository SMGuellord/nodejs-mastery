const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/subfolder/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    // const first = await getText("./content/subfolder/first.txt");
    const first = await readFile("./content/subfolder/first.txt", "utf8");
    const second = await readFile("./content/subfolder/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade,txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(result);
      }
    });
  });
};

const start = async () => {
   try {
    const first = await getText("../content/first.txt");
    const second = await getText("../content/second.txt");
       console.log(first);
       console.log(second);
   } catch (error) {
       console.log(error);
   }  
}

start();
const { readFile, writeFile } = require("fs").promises;
const util = require('util');
// const readFilePromise = util.promisify(readFile); // promisify makes working with promises simple. 
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("../content/first.txt",'utf8');
    const second = await readFile("../content/second.txt", 'utf8');
    await writeFile("../content/AsyncPatterns.txt",`this file content written with help of promisify:- ${first}\n${second} `,{flag:'a'});
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

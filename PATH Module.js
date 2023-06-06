/**
 1> PATH is used to work easily with absolute or relative locations of files and folders
 */

const path = require('path');

console.log(path.sep);// returns path separator of the system in which user is working

const filePath = path.join('/content', 'subfolder', 'test.txt'); // joins all arguments and converts it into path
console.log(filePath);

const base = path.basename(filePath);
console.log(base);// returns last portion of path

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');// it accepts a sequence of path or path segments and resolves it into absolute path
console.log(absolute);
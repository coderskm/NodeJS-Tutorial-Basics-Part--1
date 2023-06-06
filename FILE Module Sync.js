/*
 1> FILE module used for working with files and folders such as reading, writing and updating the file information
 and content either in synchronous way or asynchronous way.
 2> if file is not created while writing then new file is created.
 3> to avoid old information of file being overridden, use following flag to append information :- {flag:'a'}
 */
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

writeFileSync('./content/resultSync.txt', `Here is content :-\n${first}\n${second}`);

writeFileSync("./content/resultSync.txt", `\n learning NodeJS course`,{flag:'a'});
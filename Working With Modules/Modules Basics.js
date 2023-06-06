/*
1> module is like encapsulated code using which we share only required part (as minimum as possible).
2> NodeJS uses CommonJS library by default to work with modules.
3> every file in NodeJS is module by default.
4> module variable is an object which has 'exports' property using which we share code.
*/

console.log(`hello`);
console.log(module);
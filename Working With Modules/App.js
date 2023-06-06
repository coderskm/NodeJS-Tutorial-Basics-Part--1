/*
1> we can give any name of the variable while we are importing the exported code if we are not destructuring it.
2> we can destructure the exported code while importing it but property name should be same as that of when it was exported. 
3> we can execute a function by simply importing it (using 'require') only if it has been called in the file where its defined.
*/
const names = require('./Names'); 
const saHi = require('./Utils');
const {items, singlePerson } = require('./Items'); 

require('./Add Numbers')

saHi(names.john);
saHi(names.peter);

console.log(items);
console.log(singlePerson);

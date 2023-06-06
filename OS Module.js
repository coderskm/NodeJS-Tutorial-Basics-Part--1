/*
1> OS is built-in module provides useful properties and methods used for interacting with computer or server. 
*/

const os = require('os');

const user = os.userInfo();// info about current user
console.log(user);

console.log(`the system is ${os.uptime()} s`);// method returns the system uptime

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), // methods and properties for current OS configuration
  freeMem: os.freemem(),
};

console.log(currentOS);
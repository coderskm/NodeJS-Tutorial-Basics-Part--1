/*
1> In NodeJS there is no window object but it has global variables which can be accessed anywhere.
2> Few generally used global variables:-
--> __dirname - path to current directory where we are working currently.
--> __filename - file name where we are working currently.
--> require - function which helps us to use modules (CommonJS).
--> module - info about current module (file).
--> process - info about current environment where the program is being executed.
*/

console.log(__dirname)

setInterval(() => {
    console.log(`working with global variables of node`)
}, 1000);
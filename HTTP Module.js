/*
1> HTTP used to setup server and database connection and basic network management through request and response.
2> we can see response send by server on following URLs:-
--> localhost:PORT
--> 127.0.0.1:PORT
*/
const http = require('http');
const server = http.createServer((req, res) => { // req & res both are JS objects. 
    if (req.url === '/') {
    return res.end(`Welcome to our page`);  
    }
    else if (req.url === '/about') {
       return res.end('about me')
    }
    return res.end(`<h1>OOPS!</h1><p>Page not found</p><a href='/'>HOME</a>`);
    
})
server.listen(5000);
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request recieved...');
    res.end('<h1>Hello World</h1>');
});

server.listen(5000, () => console.log('server listening on PORT 5000...'));
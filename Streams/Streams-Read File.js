const { createReadStream } = require('fs');

const stream = createReadStream('../content/streams.txt');
stream.on('data', (result) => {
    console.log(result);
})

/*
1> As file is very large, streams will read data in chunks hence correct
data will not be shown which is present inside file.
*/
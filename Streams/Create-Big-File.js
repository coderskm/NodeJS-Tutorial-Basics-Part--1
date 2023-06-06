const { writeFile } = require('fs');
for (let i = 0; i < 1000; i++){
    writeFile('../content/streams.txt',`hello world - ${i}\n` , { flag: 'a' }, (err, result) => {
    if (err) {
        console.log(err);
        return;
    } 
})
}

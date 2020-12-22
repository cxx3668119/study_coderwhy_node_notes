const buffer = Buffer.alloc(8);

//console.log(buffer);

//读取文本文件

const fs = require('fs');

fs.readFile('./test.txt', (err, data) => {
  console.log(data);
  console.log(data.toString());
})
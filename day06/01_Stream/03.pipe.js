const fs = require('fs')


//嵌套逻辑多
// fs.readFile('./bar.txt',(err,data)=>{
//   fs.writeFile('./bar1.txt',data,(err)=>{
//     console.log(err);
//   })
// })

//流的写法
const reader = fs.createReadStream('./1.txt');
const writer = fs.createWriteStream('./2.txt');

reader.pipe(writer);
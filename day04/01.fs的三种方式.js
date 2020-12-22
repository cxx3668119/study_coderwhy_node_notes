const fs = require('fs')
//方式一 同步
const filepath = './123.txt'
const info = fs.statSync(filepath);
// console.log("后续");
// console.log(info);

fs.promises.stat(filepath).then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
})
console.log('123');
const fs = require('fs')

// fs.readFile('./1.txt', {encoding:'utf-8'},(err, data) => {
//   console.log(data);
// })

//流的方式读取 可以指定读取

const reader = fs.createReadStream('./1.txt', {
  start: 3,
  end: 6,
  highWaterMark: 2
})

//数据读取的过程
reader.on('data', (data) => {
  console.log(data);
})

reader.on('open',(data)=>{
  console.log('文件被打开');
})

reader.on('close',(data)=>{
  console.log('文件被关闭');
})
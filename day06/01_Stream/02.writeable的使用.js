const fs = require('fs')

//传统的写入方式
// fs.writeFile('./bar.txt', 'hello borden', err => {
//   console.log(err);
// })

//Stream的写入方式
const writer = fs.createWriteStream('./bar.txt', {
  //mac a windows flags 使用 r+
  flags: 'r+',
  start: 4
})

writer.write('你好吗', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('写入成功');
})

//第二次写入
writer.write('cxx', (err) => {
  console.log(err);
  return
})

// writer.close();
writer.end('hello world')

writer.on('close', () => {
  console.log('文件被关闭');
})
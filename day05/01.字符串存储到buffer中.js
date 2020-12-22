const message = 'hello world'

//创建buffer 

// const buffer = new Buffer(message);

// console.log(buffer);

const buffer = Buffer.from(message);
console.log(buffer);
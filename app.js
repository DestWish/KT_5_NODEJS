const fs = require('fs');

//реализовал чтение файла в синхронном варианте
let fileContent = fs.readFileSync('hellosync.txt', 'utf8')
console.log(fileContent);
const fs = require('fs');

// реализовал чтение файла в асинхронном варианте(Для наглядности сделал его с другим именем
// и раньше(чтобы вызывался первым, а обрабатывался вторым))
fs.readFile('helloAsync.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла', err);
        return;
    }
    console.log(data);
});

//реализовал чтение файла в синхронном варианте
let fileContent = fs.readFileSync('hellosync.txt', 'utf8')
console.log(fileContent);
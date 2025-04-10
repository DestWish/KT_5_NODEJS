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

// реализовал запись текстового файла в асинхронном варианте
fs.writeFile('loveAsync.txt', 'I LOVE ITHUB <3 Async', (err) => {
    if (err) {
        console.error('Ошибка записи файла', err);
        return;
    }
    console.log('Файл loveAsync.txt записан');


    // читаем файл после записи
    fs.readFile('loveAsync.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка чтения файла', err);
            return;
        }
        console.log(`Файл loveAsync.txt записан: \n ${data}`);
    });

    // реализовал дозапись текстового файла в асинхронном варианте
    fs.appendFile('loveAsync.txt', ' I LOVE NODE.JS <3 Async', (err) => {
        if (err) {
            console.error('Ошибка записи файла', err);
            return;
        }
        console.log('Файл loveAsync.txt "дозаписан"');
    });

    // читаем файл после дозаписи
    fs.readFile('loveAsync.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка чтения файла', err);
            return;
        }
        console.log(`Файл loveAsync.txt записан: \n ${data}`);
    }


    // Реализовал удаление текстового файла в асинхронном варианте(после чтения)
    fs.unlink('loveAsync.txt', (err) => {
        if (err) {
            console.error('Ошибка удаления файла', err);
            return;
        }
        console.log('Файл loveAsync.txt удален');
    });    
});

// реализовал запись текстового файла в синхронном варианте
fs.writeFileSync('loveSync.txt', 'I LOVE ITHUB <3 Sync');
fileContent = fs.readFileSync('loveSync.txt', 'utf8')
console.log(`Файл loveSync.txt записан: \n ${fileContent}`); 
// Реализовал удаление текстового файла в синхронном варианте(после чтения)
fs.unlinkSync('loveSync.txt');
console.log('Файл loveSync.txt удален');

const fs = require('fs');
const Emitter = require('events');

let emitter = new Emitter();

// реализовал чтение файла в асинхронном варианте(Для наглядности сделал его с другим именем
// и раньше(чтобы вызывался первым, а обрабатывался вторым))
fs.readFile('helloAsync.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла', err);
        return;
    }
    console.log(data);


    // реализовал запись текстового файла в асинхронном варианте
    fs.writeFile('loveAsync.txt', 'I LOVE ITHUB <3 Async', (err) => {
        if (err) {
            console.error('Ошибка записи файла 1', err);
            return;
        }
        console.log('Файл loveAsync.txt записан 1');


        // читаем файл после записи
        fs.readFile('loveAsync.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Ошибка чтения файла 2', err);
                return;
            }
            console.log(`Файл loveAsync.txt прочитан 2: ${data}`);


            // реализовал дозапись текстового файла в асинхронном варианте
            fs.appendFile('loveAsync.txt', ' I LOVE NODE.JS <3 Async', (err) => {
                if (err) {
                    console.error('Ошибка записи файла 3', err);
                    return;
                }
                console.log('Файл loveAsync.txt "дозаписан" 3');


                // читаем файл после дозаписи
                fs.readFile('loveAsync.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Ошибка чтения файла 4', err);
                        return;
                    }
                    console.log(`Файл loveAsync.txt прочитан после дозаписи 4: ${data}`);


                    // Реализовал удаление текстового файла в асинхронном варианте(после чтения)
                    fs.unlink('loveAsync.txt', (err) => {
                        if (err) {
                            console.error('Ошибка удаления файла 5', err);
                            return;
                        }
                        console.log('Файл loveAsync.txt удален 5');

                        // Сгенерировал вызов обработчика события event1
                        emitter.emit('event1');
                    });
                });
            });
        });
    });
});





//реализовал чтение файла в синхронном варианте
let fileContent = fs.readFileSync('hellosync.txt', 'utf8')
console.log(`Синхронное чтение файла: ${fileContent}`);
// реализовал запись текстового файла в синхронном варианте
fs.writeFileSync('loveSync.txt', 'I LOVE ITHUB <3 Sync');
fileContent = fs.readFileSync('loveSync.txt', 'utf8')
console.log(`Синхронно записан файл loveSync.txt: ${fileContent}`);
// реализовал дозапись текстового файла в синхронном варианте
fs.appendFileSync('loveSync.txt', ' I LOVE NODE.JS <3 Sync');
fileContent = fs.readFileSync('loveSync.txt', 'utf8')
console.log(`Синхронно "дозаписан" файл loveSync.txt: ${fileContent}`);
// Реализовал удаление текстового файла в синхронном варианте(после чтения)
fs.unlinkSync('loveSync.txt');
// Сгенерировал обработчики события event1
console.log('Синхронно удален файл loveSync.txt');
emitter.on('event1', () => {
    console.log('Событие 1');
});
emitter.on('event1', () => {
    console.log('Событие 1 еще один обработчик');
});
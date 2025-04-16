const fs = require('fs');
const Emitter = require('events');
const util = require('util');

let emitter = new Emitter();

function User() {
};
util.inherits(User, Emitter);

let user = new User();

user.on('userEvent', () => {
    console.log('Событие userEvent');
});

user.on('userEvent', (data) => {
    console.log(`Событие userEvent ${data}`);
});

User.prototype.emitUserEvent = function (data) {
    this.emit('userEvent', data);
}

user.emitUserEvent('(параметр события)');


// Не прибегая к функции util.inherits
class User2 extends Emitter {
    emitUser2Event(data) {
        this.emit('user2Event', data);
    };
};
let user2 = new User2();

user2.on('user2Event', () => {
    console.log('Событие user2Event');
});

user2.on('user2Event', (data) => {
    console.log(`Событие user2Event ${data}`);
});
user2.emitUser2Event('(параметр события2)')


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
                        // добавил к вызову обработчика - параметр
                        emitter.emit('event1', 'Событие 1 но с переданным параметром');
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
//передал параметр в обработчик события event1
emitter.on('event1', (data) => {
    console.log(`Событие 1 ${data}`);
});
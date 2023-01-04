// 4. Написать реализацию игры "Угадай число", правила игры выглядят следующим образом:
// 4.1. Задаётся количество попыток (в нашем случае  5) и загадывается случайное число в каком-то диапазоне (в нашем случае от 1 до 10).
// 4.2. Пользователь пытается угадать загаданное число (спрашивать пользователя можно при попощи метода prompt).
//  Если введённое число больше/меньше загаданного, выводится сообщение-подсказка, например "Загаданное число больше/меньше введённого",
// Если же число отгадано, то выводится сообщение с поздравлением, например "Поздравляю! Число ... отгадано".
// 4.3 С каждым неверным ответом число попыток уменьшается и если они закончились, выводится соответствующее сообщение.


function getNumInInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function doesNumbersMatch(secretNum, userNum, biggerF, smallerF, itsWin, countOfAttempt) {
    if (secretNum === userNum) {
        itsWin(countOfAttempt);

        return true;
    }

    if (userNum > secretNum) {
        biggerF();
    } else {
        smallerF();
    }

    return false;
}

function userNumIsBigger() {
    alert(`Загаданное число меньше.`);
}

function userNumIsSmaller() {
    alert(`Загаданное число больше.`);
}

function userWin(countOfAttempt) {
    alert(`Вы победили ^_^ Попыток осталось: ${countOfAttempt - 1}`);
}

let min = 1;
let max = 10;
let secretNum = getNumInInterval(min, max);
let countOfAttempt = 5;

console.log(secretNum);

while (countOfAttempt > 0 &&
    !doesNumbersMatch(secretNum, prompt(`Отгадайте число от ${1} до ${10}. Количество попыток: ${countOfAttempt}`),
        userNumIsBigger, userNumIsSmaller, userWin, countOfAttempt)) {
    countOfAttempt--;
    
    if (countOfAttempt < 1) {
        alert(`Вы проиграли :( Загаданное число: ${secretNum}`);
    }
}
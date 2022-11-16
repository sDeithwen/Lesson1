// 1. Написать стрелочную функцию capitalise. Которая принимает на вход строку, 
// переводит первый символ строки в верхний регистр, возвращает новую строку.
// Для вывода строки использовать методы объекта console (log, warn или error).

let capitalise = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(capitalise("hello world"));
alert(capitalise("hello world"));
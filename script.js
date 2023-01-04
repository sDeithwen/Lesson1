"use strict";

let userFirstName = "Super";
let userLastName = "Murloc";
let userBirthDay = "";
let userBirthMonth = "";
let userBirthYear = "";
let userAge = "";

function getData() {
    userFirstName = prompt("Введите имя");
    userLastName = prompt("Введите фамилию");
    userBirthYear = prompt("Введите год рождения");
    userBirthMonth = prompt("Введите месяц рождения в виде числа");
    userBirthDay = prompt("Введите день рождения");
    userAge = 2022 - userBirthYear;

    alert("Я знаю о Вас всё... Вы: " + userLastName + " " + userFirstName
        + ", Вам столько лет: " + userAge + " лет, ибо день рождения у Вас: "
        + userBirthDay + "." + userBirthMonth + "." + userBirthYear);
}

getData();
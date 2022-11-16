// 3. Написать стрелочную функцию getDigitsSum, которая параметром принимает
//  целое число и возвращает сумму его цифр.

let getDigitsSum = (num) => {
    if (num % 2 != 0) {
        return `Ввёденное число (${num}) не целое!`;
    }
    const arrayOfDigits = Array.from(String(String(num)), Number)
    let sum = 0;
    for (i = 0; i < arrayOfDigits.length; i++)
        sum += arrayOfDigits[i];
    return sum;
}

console.log(getDigitsSum(123321.2));
alert(getDigitsSum(1233212));
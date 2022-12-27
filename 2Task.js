let array = [45, 78, 10, 3];
// console.log(array);

function my(a, b) {
    return a - b;
}

array.sort(my).map(digit => {
    let arr = digit.toString().split('').map(Number);
    let res = arr.reduce((sum, current) => sum + current, 0);
    console.log(res);
});
console.log(array);
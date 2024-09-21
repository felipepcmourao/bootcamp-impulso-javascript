"use strict";
function print(num1, num2) {
    console.log(num1 + num2);
}
function sum(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function square(num) {
    return num * num;
}
function cube(num) {
    return num ** 3;
}
console.log(sum(1, 9, cube));

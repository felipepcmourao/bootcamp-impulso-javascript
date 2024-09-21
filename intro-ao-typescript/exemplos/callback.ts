function print(num1: number, num2: number): void { //O TIPO VOID NAO RETORNA
    console.log(num1 + num2);
}

function sum(num1: number, num2: number, callback: (num: number) => number): number {
    let resultado = num1 + num2;
    return callback(resultado);
}

function square(num: number): number {
    return num * num;
}

function cube(num: number): number {
    return num ** 3;
}

console.log (sum(1, 9, cube));
/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function tamanhoArray(array, size) {
    try {
        if (!array || !size) {
            throw new ReferenceError("Um ou mais parâmetros não foram informados.")
        }
        else if (typeof array !== "object") {
            throw new TypeError("O parâmetro informado não é do tipo objeto.")
        }
        else if (typeof size !== "number") {
            throw new TypeError("O parâmetro informado não é do tipo número.")
        }
        else if (array.length !== size) {
            throw new RangeError(`O tamanho do array é ${array.length} e, por isso, é diferente do número (${size}) informado.`)
        }
        return console.log(array);
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Erro de referência: " + e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Erro de tipo: " + e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Erro de intervalo: " + e.message);
        }
    }
}

tamanhoArray(4);

// sem uso do try...catch e instanceof

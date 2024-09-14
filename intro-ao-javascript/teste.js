/* var y = 0;
var x = 1; */ 

// Variável Preço
var preco = 2;
var desconto = 0.2;

preco = preco - desconto;

console.log (preco)

// Constante Preço
const valor = 2;
var total = valor - desconto;

console.log (total);

// Declaração de Função
// Dentro dos parenteses se declara os parametros

function soma (a, b) {
    return a + b;
}

soma (3, 5); // Chamar a funçao

console.log ("Hello World!");

function returnEvenValues (array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++)
        if (array[i] % 2 === 0) {
            evenNums.push (array[i]);
        }
        else {
            console.log (`${array[i]} não é par`);
        }
        console.log (`Os números pares são ${evenNums}`);
}

let array = [1, 3, 4, 5, 6, 8, 9];
returnEvenValues (array);



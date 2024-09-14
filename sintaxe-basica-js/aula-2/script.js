// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF)); // typeof informa qual o tipo da variável

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = "felipe";
console.log(typeof(nome));

// function
var funcao = function() {
    console.log(typeof(funcao));
}

// como declarar
var variavel = "felipe";
variavel = "mourao";
console.log(variavel);

let variavel2 = "felipe";
variavel2 = "mourao"
console.log(variavel2);

const constante = "felipe"; // tem que ter um valor inicial

// escopo
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    var escopoLocalInterno = "local";
}

escopoLocal();

// atribuição
var atribuicao = "atribuição";

// comparação
var comparacao = "0" == 0 /// compara o valor
console.log(comparacao);

// comparação identica
var comparacaoIdentica = 0 == 0 /// compara valor e tipo
console.log(comparacaoIdentica)

// adicao
var adicao = 1 + 1;

// subtracao
var subtracao = 1 - 1;

// multiplicacao
var multiplicacao = 1 * 1;

// divisao real
var divisaoReal = 4 / 2;

// divisao inteira
var divisaoInteira = 5 % 2;

// potenciacao
var potenciacao = 2 ** 10;

// maior que
var maiorQue = 5 > 2;

// menor que 
var menorQue = 5 < 2;

// maior ou igual a 
var maiorOuIgual = 5 >= 2;

// menor ou igual a 
var menorOuIgual = 5 <= 2;

// e
var e = true && false;

// ou
var ou = true || false;

// nao
var não = !true;






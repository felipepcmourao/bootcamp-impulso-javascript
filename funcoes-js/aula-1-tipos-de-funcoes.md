# Tipos de Função
### Estrutura

```
function nome(parametros){
    //instruções
}
```
Variáveis criadas dentro de funções podem ser usadas apenas dentro delas.

Quando invocamos "return" a função para de ser executada.

### Função anônima
São funções que representam uma expressao.
```
const soma = function (a, b) {
    return a + b;
}

soma(1, 2) //3
soma(3, 5) //8
```

### Função autoinvocável
IIFE (Immediately Invoked Function Expression)

```
(
    function(a,b) {
        return a + b;
    }
)(1,2);

// 3
```
Uma função anônima entre parenteses, seguida por outro par de parenteses, que representa sua chamada.

```
const soma3 = (
    function() {
        return a + b;
    }
)(1,2);

console.log(soma3) //3
```

Também pode ser utilizada com parâmetros ou armazenada em uma variável.

### Callbacks
Uma função passada como argumento para outra.
```
const calc = function(operacao, num1, num2) {
    return operacao (num1, num2);
｝

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
｝

const resultSoma = calc(soma, 1, 2);
const resultsub = calc(sub, 1, 2);

console.log(resultSub); // -1 
console.log(resultSoma); // 3
```

Utilizando callbacks, você tem maior controle da ordem de chamadas.
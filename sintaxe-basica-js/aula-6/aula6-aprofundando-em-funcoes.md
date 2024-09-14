# Tipos de funções
## Funções declarativas
São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada “function” seguida do nome da função, parênteses “()” e chaves “{}”:

Ex.: 
```
function nomeDaFuncao() {
${instrucao};
}
```
// o nome da função é obrigatório;

## Expressões de Funções
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

Ex. 1: 

```
var funcao = function nomeDaFuncao() {

${instrucao};
}
```

Ex. 2: 
```
var funcao = function() {

${instrucao};
};
```

## Arrow Function
São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com parênteses `()`, seguido de `=>` e depois chaves `{}`

Ex. 1: 
```
var funcao = () => {
${instrucao};
}
```
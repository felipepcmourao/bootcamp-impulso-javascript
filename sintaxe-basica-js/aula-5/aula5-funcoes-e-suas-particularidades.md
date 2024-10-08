# O que são funções?
## Funções
São blocos de comandos e instruções para a execução de
determinadas tarefas:

Ex.: 
```
function nomeDaFuncao() {
${instrucao};
}

nomeDaFuncao();
```

## Como declarar?
Geralmente se utiliza a palavra reservada “function” seguida de parênteses “()” e chaves “{}”:

Ex.:
```
function funcao() {
console.log(“mensagem”);
}

funcao();
```

() – indica que é um objeto do tipo function;
{} – indica que é um bloco de instrução;

## Funções com parâmetros
As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex.: 
```
function nomeDaFuncao(parametro) {
${instrucao};
}

nomeDaFuncao(valorDoParametro);
```

Ex.: 
```
function mensagem(primeiro, segundo) {
console.log(primeiro, segundo);
}

nomeDaFuncao(“Tudo certo”, “jovem!”);
```
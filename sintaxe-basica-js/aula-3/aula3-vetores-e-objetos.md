# O que são vetores?
## Vetores ou Arrays
Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo algum valor;

Ex.: `let array = [‘string’, 1, true...]`

O array deve ser declarado entre colchetes “[]”, e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays.

Ex.: `let array = ['string', 1, true, false, [‘array1’], [‘array2’]...]`

Obs.: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.

## Manipulando Arrays
Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

- `forEach()` – itera um array;
- `push()` – add item no final do array;
- `pop()` – remove item no final do array;
- `unshift()` – add item no início do array;
- `indexOf()` – retorna o índice de um valor;
- `shift()` – remove item no início do array;
- `splice()` – remove ou substitui um item pelo índice;
- `slice()` – retorna uma parte de um array existente;

# O que são objetos?
## Objetos
Dados que possuem propriedades e valores que definem suas
características. Deve ser declarado entre chaves “{}”.

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções(quero cafééé). Pode ser declarada assim:
```
var xicara = {
cor: ‘azul’,
tamanho: ‘p’,
funcao: tomarCafe()
}
```

## Manipulando objetos
As propriedades de ojbetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex.: <br>
```
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
```
```
var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();
```

Outra forma de fazer a desestruturação é utilizando chaves aodeclarar a variável:

Ex.: 
```
var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
```

```
var { cor, tamanho, funcao } = xicara;
```
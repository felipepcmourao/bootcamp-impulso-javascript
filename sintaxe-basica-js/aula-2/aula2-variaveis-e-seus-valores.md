# Entendendo variáveis e seus valores

## O que é tipagem?
A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo
de dado.

A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.

Ex.: Ao criarmos uma variável com valor entre aspas (“valor”) o JavaScript já converte o dado para o tipo String.

`var numero = 1;`
// o JavaScript já converte o valor 1 para o tipo Number.

## Declaração de variáveis

### Tipos primitivos
As variáveis em JavaScript podem guardar tipos de dados que chamamos de tipos primitivos

Variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.

### O que são variáveis?

São dados que variam. Ora, ora Diana eu nem pensei nisso.

Imagina uma caixa, tu pode colocar quase qualquer coisa dentro dela, pode ser uma lista de nomes, cartões com números, objetos no geral...

Variáveis funcionam dessa forma. Como uma caixa que guarda valores.

### Declaração de variáveis
Existem 3 modos de declarar as variáveis em JavaScript:

var – escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

let – escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

const – escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

### Escopo

O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

Escopo global – quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

### Regras de uso das variáveis

• Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número. </br>
Ex.: var 1nome ❌ </br>
`var nome` || `var _nome` ✔

• Não usar espaços (use o camelCase ou _); </br>
Ex.: var nome completo ❌ </br>
`var nomeCompleto` || `var nome_completo`✔

• Não usar palavras reservadas;</br>
Ex.: `var function` ❌

• Declarar variáveis no topo do bloco de código.

## Atribuição, comparação e comparação idêntica
### Atribuição
O sinal de igualdade `=` em JavaScript, significa atribuição.

Ex.: <br>
como declarar: `var nome = “meu nome”;` <br>
como ler: variável nome recebe o valor meunome;

### Comparação

Para fazermos uma comparação de valores em JavaScript usamos `==`.

Ex.:<br>
como declarar: `"0" == 0;` <br>
como ler: “0” tem o valor igual a 0?

// nesse caso retorna true

### Comparação idêntica

Para fazermos uma comparação de valores e tipos em JavaScript usamos `===`.

Ex.:<br>
como declarar: `"0" === 0;`<br>
como ler: “0” tem o valor e o tipo idêntico a 0?

// nesse caso retorna false

## Operadores aritméticos, racionais e lógicos

### Operadores aritméticos
São tipos de operadores matemáticos com valor numérico:

- `+` adição;
- `-` subtração;
- `*` multiplicação;
- `/` divisão real;
- `%` divisão inteira;
- `**` potenciação;

## Operadores relacionais
São tipos de operadores que consultam a relação entre valores:

- `>` maior que;
- `<` menor que;
- `>=` maior ou igual a;
- `<=` menor ou igual a;

## Operadores lógicos
São tipos de operadores que consultam valores lógicos:

- `&&` - “e” – considera que todos os valores sejam true;
- `||` - “ou” – considera que qualquer valor seja true;
- `!` - “não” – inverte o valor de true para false ou vice-versa;
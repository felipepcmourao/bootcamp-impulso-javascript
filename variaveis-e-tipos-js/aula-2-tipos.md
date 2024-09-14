# Tipos de Valores e Propriedades

### 1. **Strings**:
- **Definição**: Uma sequência de caracteres delimitada por aspas simples (`'...'`), aspas duplas (`"..."`), ou crases (template literals: `` `...` ``).
- **Principais Propriedades/Características**:
  - `length`: Retorna o número de caracteres na string.
  - Imutabilidade: Strings são imutáveis, ou seja, uma vez criada, seu valor não pode ser alterado. Em vez disso, é necessário criar uma nova string se você quiser mudar o conteúdo.
  - Métodos Comuns:
    - `charAt()`: Retorna o caractere em um índice específico.
    - `concat()`: Concatena duas ou mais strings.
    - `includes()`: Verifica se uma string contém outra.
    - `slice()`, `substring()`, `substr()`: Extraem parte de uma string.
    - `toUpperCase()`, `toLowerCase()`: Transformam a string para maiúsculas ou minúsculas.

### 2. **Numbers**:
- **Definição**: Representa tanto inteiros quanto números de ponto flutuante (números com decimais).
- **Principais Propriedades/Características**:
  - Precisão: Os números de ponto flutuante são precisos até 17 dígitos decimais, mas operações aritméticas podem introduzir pequenos erros devido à forma como os números são armazenados em binário.
  - Métodos Comuns:
    - `toFixed()`: Define o número de casas decimais.
    - `toString()`: Converte o número para uma string.
    - `parseInt()`, `parseFloat()`: Convertem strings em inteiros ou decimais.
  - Limites: 
    - `Number.MAX_VALUE` e `Number.MIN_VALUE`: Valores máximos e mínimos representáveis.
    - `Number.POSITIVE_INFINITY` e `Number.NEGATIVE_INFINITY`: Representam infinito positivo e negativo.
    - `NaN`: "Not-a-Number", representa um valor que não é um número.

### 3. **Booleans**:
- **Definição**: Um tipo de dado que só pode ter dois valores: `true` ou `false`.
- **Principais Propriedades/Características**:
  - Usado para controle de fluxo em estruturas condicionais (como `if`, `while`, etc.).
  - Qualquer valor pode ser convertido em um booleano usando o operador `Boolean()`.
  - Valores "falsy" (que são tratados como `false`):
    - `false`, `0`, `""` (string vazia), `null`, `undefined`, `NaN`.
  - Valores "truthy" (que são tratados como `true`):
    - Qualquer valor que não seja "falsy", incluindo strings não vazias, arrays, objetos, etc.

### 4. **Arrays**:
- **Definição**: Um tipo de dado que armazena uma coleção ordenada de valores (chamados elementos).
- **Principais Propriedades/Características**:
  - `length`: Retorna o número de elementos no array.
  - Arrays são mutáveis, ou seja, você pode adicionar, remover ou modificar seus elementos.
  - Arrays podem conter qualquer tipo de dado: números, strings, outros arrays, objetos, etc.
  - Métodos Comuns:
    - `push()`: Adiciona um ou mais elementos ao final do array.
    - `pop()`: Remove o último elemento do array.
    - `shift()`: Remove o primeiro elemento do array.
    - `unshift()`: Adiciona um ou mais elementos no início do array.
    - `map()`, `filter()`, `reduce()`, `forEach()`: Iteram sobre os elementos do array e realizam operações específicas.
    - `concat()`, `slice()`, `splice()`: Manipulam o array ou criam novos arrays a partir de partes de arrays existentes.

### 5. **Objects**:
- **Definição**: Um tipo de dado usado para armazenar coleções de pares chave-valor.
- **Principais Propriedades/Características**:
  - Cada valor no objeto é acessado através de uma chave (ou propriedade), que pode ser uma string ou um símbolo.
  - Objetos são mutáveis, ou seja, suas propriedades podem ser alteradas, adicionadas ou removidas.
  - Métodos Comuns:
    - `Object.keys()`: Retorna todas as chaves do objeto.
    - `Object.values()`: Retorna todos os valores das propriedades do objeto.
    - `Object.entries()`: Retorna um array de pares `[chave, valor]`.
    - `hasOwnProperty()`: Verifica se o objeto possui uma determinada chave.
    - Acessando propriedades: Pode ser feito via notação de ponto (`obj.prop`) ou notação de colchetes (`obj['prop']`).

Esses tipos de dados são fundamentais em JavaScript e compõem a base da programação com a linguagem.
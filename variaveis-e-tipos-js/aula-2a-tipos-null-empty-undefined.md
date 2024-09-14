
### 1. **`null`**:
- **Definição**: Representa a **ausência intencional de um valor**. Em outras palavras, é usado quando você deseja indicar que uma variável ou propriedade deve estar vazia ou que um objeto não existe.
- **Características**:
  - `null` é um valor atribuído explicitamente para indicar "nenhum valor".
  - Quando você define algo como `null`, está dizendo que a variável contém "nada", mas de forma proposital.
  - **Tipo**: Curiosamente, `typeof null` retorna `"object"`, o que é considerado um bug no JavaScript, mas é amplamente aceito.
  - Exemplos:
    ```javascript
    let x = null; // x está intencionalmente vazio
    ```

### 2. **`undefined`**:
- **Definição**: Significa que uma variável foi declarada, mas **não recebeu valor**. É o valor padrão atribuído automaticamente pelo JavaScript a variáveis que não foram inicializadas.
- **Características**:
  - É usado para representar a ausência de valor quando algo **não foi definido ainda**.
  - Se uma função não tem `return`, ela retorna `undefined` por padrão.
  - **Tipo**: O tipo de `undefined` é `"undefined"`.
  - Diferença com `null`: `undefined` é automático, enquanto `null` é atribuído manualmente.
  - Exemplos:
    ```javascript
    let y; // y é undefined, pois não foi inicializado
    function example() {}
    console.log(example()); // retorna undefined
    ```

### 3. **"Empty"** (Vazio):
- **Definição**: O conceito de **"empty"** não é um tipo de dado por si só em JavaScript, mas refere-se a variáveis ou estruturas de dados que estão **vazias**. O significado de "vazio" depende do contexto.
- **Características**:
  - Para **strings**: Uma string vazia é representada por `""`, ou seja, não contém nenhum caractere.
    ```javascript
    let str = ""; // string vazia
    ```
  - Para **arrays**: Um array vazio é representado por `[]`, ou seja, não contém elementos.
    ```javascript
    let arr = []; // array vazio
    ```
  - Para **objetos**: Um objeto vazio é representado por `{}`, ou seja, não contém propriedades.
    ```javascript
    let obj = {}; // objeto vazio
    ```
  - **Verificação de vazio**:
    - Strings: Para verificar se uma string está vazia, você pode usar `str.length === 0`.
    - Arrays: Verifique se o array está vazio com `arr.length === 0`.
    - Objetos: Para verificar se um objeto está vazio, você pode usar `Object.keys(obj).length === 0`.
  - Exemplo de string, array e objeto vazios:
    ```javascript
    let emptyString = "";    // string vazia
    let emptyArray = [];     // array vazio
    let emptyObject = {};    // objeto vazio
    ```

### Comparação entre `null`, `undefined` e "empty":
- `null`: Ausência intencional de valor. Algo definido para ser "nada".
- `undefined`: Algo que foi declarado, mas ainda não recebeu valor.
- **Empty**: Refere-se a estruturas de dados (strings, arrays, objetos) que não contêm elementos, caracteres ou propriedades.

### Exemplos de uso:
```javascript
let a = null;       // a foi intencionalmente definido como vazio
let b;              // b é undefined, pois não foi inicializado
let c = "";         // c é uma string vazia
let d = [];         // d é um array vazio
let e = {};         // e é um objeto vazio

console.log(a);     // null
console.log(b);     // undefined
console.log(c);     // ""
console.log(d);     // []
console.log(e);     // {}
```

Esses conceitos são fundamentais para entender como o JavaScript lida com valores, e é importante saber diferenciá-los para evitar comportamentos inesperados em seu código.
# This

## **O que é `this`?**

A palavra reservada `this` em JavaScript refere-se ao **contexto** no qual a função é executada. Seu valor pode mudar dependendo de onde ela é chamada.

### Contextos de `this`:
- **Em um objeto (método)**: Refere-se ao próprio objeto que contém o método.
- **Sozinha**: Refere-se ao objeto global. Em navegadores, é o `window`.
- **Dentro de uma função**: Refere-se ao objeto global (ou `undefined` em strict mode).
- **Em um evento**: Refere-se ao elemento que recebeu o evento.

### Exemplos:

**No navegador** (fora de qualquer função):

```javascript
console.log(this); // Refere-se ao objeto global (window)
```

**Dentro de uma função:**

```javascript
function mostrarThis() {
  console.log(this);
}

mostrarThis(); // Refere-se ao objeto global (window)
```

**Dentro de um objeto (método):**

```javascript
const pessoa = {
  nome: "João",
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

pessoa.saudacao(); // "Olá, meu nome é João"
```

**Em um evento HTML:**

```html
<button onclick="console.log(this)">Clique em mim</button>
```
Quando o botão é clicado, `this` refere-se ao próprio botão.

---

## **Manipulando o valor de `this`**

Há três métodos principais para manipular o valor de `this`: **call**, **apply** e **bind**.

### **Call**
O método `call()` permite que uma função seja chamada com um valor específico para `this` e argumentos separados por vírgulas.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João"
};

function saudacao(sobrenome) {
  console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
}

saudacao.call(pessoa, "Silva"); // "Olá, meu nome é João Silva"
```

### **Apply**
O método `apply()` é semelhante a `call()`, mas os argumentos são passados em um array.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João"
};

function saudacao(sobrenome) {
  console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
}

saudacao.apply(pessoa, ["Silva"]); // "Olá, meu nome é João Silva"
```

### **Bind**
O método `bind()` clona a função e retorna uma nova com o valor de `this` vinculado ao objeto passado como argumento. Ele não executa a função imediatamente, apenas a "prepara" para ser executada com o contexto definido.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João"
};

function saudacao() {
  console.log(`Olá, meu nome é ${this.nome}`);
}

const saudacaoPessoa = saudacao.bind(pessoa);
saudacaoPessoa(); // "Olá, meu nome é João"
```

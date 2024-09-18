# Aula 3: **Criando Erros Personalizados** em JavaScript

## Objetivos
1. Explicar como manipular o objeto `Error` para criar erros personalizados.

---

## Etapa 1: **O objeto Error**

Em JavaScript, o objeto `Error` pode ser usado para criar erros personalizados com uma mensagem específica. Isso é útil para sinalizar problemas que precisam ser tratados de forma personalizada no código.

### Criando um erro personalizado:

Você pode criar um erro manualmente usando o construtor `Error` e lançar esse erro com `throw`.

### Exemplo 1:

```javascript
function divisao(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}

try {
  console.log(divisao(10, 0)); // Lança erro
} catch (error) {
  console.log(error.name);    // Error
  console.log(error.message); // "Não é possível dividir por zero."
}
```

### Exemplo 2:

```javascript
class MeuErro extends Error {
  constructor(message) {
    super(message);
    this.name = "MeuErro";
  }
}

function validarNumero(num) {
  if (isNaN(num)) {
    throw new MeuErro("O valor fornecido não é um número.");
  }
  return true;
}

try {
  validarNumero("abc"); // Lança erro personalizado
} catch (error) {
  console.log(error.name);    // MeuErro
  console.log(error.message); // "O valor fornecido não é um número."
}
```

Neste exemplo, criamos uma classe customizada `MeuErro` que herda de `Error`, permitindo criar exceções personalizadas com nomes e mensagens específicas.


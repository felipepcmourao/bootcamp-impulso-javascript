# Aula 2: **Tratando Erros** em JavaScript

## Objetivos
1. Explicar a diferença entre `throw` e `return`.
2. Apresentar a implementação da declaração `try/catch`.

---

## Etapa 1: **Throw**

O comando `throw` em JavaScript é utilizado para **lançar um erro** manualmente. Ele interrompe a execução normal e lança uma exceção que pode ser capturada por um bloco `try/catch`.

### Diferença entre `throw` e `return`:
- **`throw`**: Lança um erro e interrompe a execução da função ou do script até que o erro seja tratado.
- **`return`**: Apenas retorna um valor da função e encerra sua execução normalmente.

### Exemplo com `throw`:

```javascript
function verificarIdade(idade) {
  if (idade < 18) {
    throw new Error("Menor de idade");
  }
  return "Maior de idade";
}

try {
  console.log(verificarIdade(15)); // Lança erro
} catch (error) {
  console.log(error.message); // "Menor de idade"
}
```

---

## Etapa 2: **Try…catch**

A declaração `try/catch` é usada para capturar erros em tempo de execução, permitindo que o código continue rodando mesmo após um erro.

### Estrutura:

```javascript
try {
  // Código que pode gerar um erro
} catch (erro) {
  // Código a ser executado se um erro ocorrer
}
```

### Exemplo de uso:

```javascript
try {
  let resultado = 10 / 0;
  console.log(resultado); // Infinity (não gera erro)
} catch (erro) {
  console.log("Erro capturado: " + erro.message);
}
```

---

## Etapa 3: **Finally**

O bloco `finally` é utilizado em conjunto com `try/catch` e garante que o código dentro dele seja executado **sempre**, independentemente se um erro ocorreu ou não.

### Estrutura:

```javascript
try {
  // Código que pode gerar um erro
} catch (erro) {
  // Código para tratar o erro
} finally {
  // Código que sempre será executado
}
```

### Exemplo de uso:

```javascript
try {
  let resultado = 10 / 2;
  console.log(resultado); // 5
} catch (erro) {
  console.log("Erro capturado: " + erro.message);
} finally {
  console.log("Execução finalizada.");
}
// Saída:
// 5
// Execução finalizada.
```

> **Importante**: O bloco `finally` é útil para executar ações como fechar conexões, limpar recursos, ou finalizar processos, mesmo que haja erro.

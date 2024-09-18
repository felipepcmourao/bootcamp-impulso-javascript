# Aula 1: **Tipos de Erros** em JavaScript

## Objetivos
1. Apresentar o objeto `Error` do ECMAScript.
2. Explicar a `DOMException`.

---

## Etapa 1: **ECMAScript Error**

Os erros do ECMAScript ocorrem **em tempo de execução** e fornecem informações importantes sobre o problema que ocorreu.

### Composição de um **ECMAScript Error**:
- **Mensagem**: Descreve o erro.
- **Nome**: Indica o tipo do erro (ex: `TypeError`, `ReferenceError`).
- **Linha**: Informa a linha do código onde o erro ocorreu.
- **Call Stack**: Mostra a sequência de chamadas que levaram ao erro.

### Exemplo de um **Error**:

```javascript
try {
  // Código que pode gerar um erro
  let x = y + 1; // 'y' não foi definido
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // y is not defined
  console.log(error.stack);   // Exibe a pilha de chamadas
}
```

> O bloco `try/catch` captura erros e permite que você lide com eles de maneira controlada.

---

## Etapa 2: **DOMException**

As **DOMExceptions** estão relacionadas a erros que ocorrem ao manipular o **DOM** (Document Object Model) de uma página web.

### Exemplos de **DOMException**:

1. **Acesso a um elemento inexistente no DOM**:

```javascript
try {
  let elemento = document.getElementById("inexistente");
  elemento.innerHTML = "Texto"; // Gera erro se o elemento não existir
} catch (error) {
  console.log(error.name); // TypeError
}
```

2. **Violação das regras do DOM**:

```javascript
try {
  let node = document.createTextNode("Texto");
  document.appendChild(node); // Gera erro, appendChild deve ser chamado em um elemento
} catch (error) {
  console.log(error.name); // DOMException
}
```
# Aula 1: **Entendendo o DOM**

## Objetivos
1. Explicar o que é o **DOM**.
2. Diferenciar **DOM** de **BOM**.

---

## Etapa 1: **O que é o DOM**

- **DOM** significa **Document Object Model**.
- O **DOM HTML** é um padrão que define como acessar e modificar os elementos HTML de uma página.
- Ele representa a estrutura do documento como uma árvore de objetos, onde cada elemento HTML é um nó nessa árvore.
  
### Exemplo de árvore DOM:
- `<html>` é o nó raiz.
- Dentro de `<html>`, temos nós filhos como `<head>` e `<body>`.
- Dentro de `<body>`, podemos ter outros nós como `<div>`, `<p>`, etc.

---

## Etapa 2: **DOM vs BOM**

- **DOM (Document Object Model)**:
  - Refere-se à estrutura do documento HTML, permitindo que você manipule elementos da página.
  
- **BOM (Browser Object Model)**:
  - Refere-se a tudo que está dentro do objeto **`window`** no navegador.
  - Inclui funções e propriedades para manipular aspectos do navegador, como o histórico, a barra de navegação, etc.
  
### Exemplos de BOM:
- `window.alert()`
- `window.history`
- `window.location`
# Trabalhando com Estilos**

1. **Manipulando Classes:**
   - Para trabalhar com classes nos elementos HTML, utilizamos o **`Element.classList`**, que oferece métodos para adicionar, remover, ou alternar classes dinamicamente.

   **Métodos Comuns de `classList`:**
   - `add()`: Adiciona uma ou mais classes a um elemento.
   - `remove()`: Remove uma ou mais classes.
   - `toggle()`: Alterna entre adicionar ou remover uma classe.
   - `contains()`: Verifica se uma classe está presente no elemento.

   **Exemplo:**
   ```javascript
   let elemento = document.getElementById('meuElemento');
   elemento.classList.add('novaClasse');
   ```

2. **Acessando e Alterando CSS diretamente:**
   - O estilo de um elemento HTML pode ser acessado e modificado diretamente através de `element.style`.
   - Isso permite alterar propriedades como cor, fonte, tamanhos e margens diretamente via JavaScript.

   **Exemplo:**
   ```javascript
   let elemento = document.getElementById('meuElemento');
   elemento.style.color = 'red';  // Altera a cor do texto para vermelho
   elemento.style.backgroundColor = 'yellow';  // Altera a cor de fundo para amarelo
   ```
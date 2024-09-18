# Aula 2: **Selecionando Elementos**

## Objetivos
1. Apresentar a estrutura HTML.
2. Apresentar métodos para interagir com os elementos de uma página.

---

## Etapa 1: **Estrutura HTML**

Em um documento HTML, os elementos são organizados em:

- **Tags**: Elementos HTML, como `<div>`, `<p>`, `<h1>`, etc.
- **IDs**: Identificadores únicos atribuídos a elementos, referenciados com `#id`.
- **Classes**: Agrupamentos de elementos que compartilham um mesmo estilo ou comportamento, referenciados com `.classe`.

---

## Etapa 2: **Métodos para Selecionar Elementos**

Para interagir com os elementos de uma página, podemos utilizar métodos JavaScript que acessam a árvore do DOM:

### Selecionar Elementos:
1. **`document.getElementById(id)`**: Seleciona o elemento com um ID específico.
2. **`document.getElementsByClassName(class)`**: Seleciona todos os elementos com uma classe específica.
3. **`document.getElementsByTagName(tag)`**: Seleciona todos os elementos de uma tag específica.
4. **`document.querySelector(selector)`**: Seleciona o **primeiro** elemento que corresponde ao seletor CSS.
5. **`document.querySelectorAll(selector)`**: Seleciona **todos** os elementos que correspondem ao seletor CSS.

### Exemplo de Seleção:
```javascript
let elemento = document.getElementById('meuID');
let classes = document.getElementsByClassName('minhaClasse');
let paragrafos = document.getElementsByTagName('p');
let primeiroDiv = document.querySelector('div');
let todasAsDivs = document.querySelectorAll('div');
```

---

## Etapa 3: **Adicionar e Deletar Elementos**

JavaScript permite que você crie, remova, substitua e adicione novos elementos no DOM.

### Métodos para Manipular Elementos:

| Método                            | Descrição                               |
|------------------------------------|-----------------------------------------|
| `document.createElement('tag')`    | Cria um novo elemento HTML.             |
| `document.removeChild(element)`    | Remove um elemento existente.           |
| `document.appendChild(element)`    | Adiciona um elemento como filho de outro elemento. |
| `document.replaceChild(new, old)`  | Substitui um elemento por outro.        |

### Exemplo de Criação e Adição:
```javascript
let novoParagrafo = document.createElement('p'); // Cria um parágrafo
novoParagrafo.textContent = 'Novo texto';        // Adiciona texto ao parágrafo
document.body.appendChild(novoParagrafo);        // Adiciona o parágrafo ao final do body
```
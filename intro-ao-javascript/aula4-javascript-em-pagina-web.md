# Estrutura de Projeto

## Primeiros passos e como abrir o projeto na web

### Passo 1:
Criar uma pasta com um nome a escolha e depois um arquivo `index.html`

### Passo 2:
Acessar o arquivo index.html

Para criar a estrutura simples no VSCode digite `html:5` e clique `Enter`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### Passo 3:
Criar uma pasta chamada `assets` que é onde vão ficar os outros arquivos que não são HTML mas que vão compor a página HTML.

Dentro dessa pasta criar os arquivos `script.js` e `style.css`

### Passo 4:
Inserir o CSS no código HTML dentro de `<head> </head>` conforme abaixo:

```
<link rel="stylesheet" href="assets/style.css" />
```

### Passo 5:
Inserir o JavaScript no código HTML logo antes do encerramento da tag `</html>`.

```
<script src="assets/script.js"></script>
```

### Passo 6:
Abrir o arquivo `index.html` em um navegador

## Interagindo com elementos DOM

**DOM** = Document Object Model

O DOM é a estrutura dos elementos dentro da janela.

![DOM](https://www.lambdatest.com/blog/wp-content/uploads/2023/01/image18-27.png)


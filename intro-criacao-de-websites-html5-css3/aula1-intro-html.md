# HTML
HTML (Hypertext Markup Language) é a linguagem padrão utilizada para criar páginas na web.

### História
HTML (Hypertext Markup Language) foi criado por **Tim Berners-Lee** em 1991, quando trabalhava no CERN, como parte da World Wide Web. A primeira versão, **HTML 1.0**, permitia links, imagens e textos simples.

- **HTML 2.0** (1995): Formalizou e expandiu o HTML com suporte a formulários e tabelas.
- **HTML 3.2** (1997): Introduziu suporte para JavaScript e layouts mais complexos.
- **HTML 4.01** (1999): Incorporou o uso de CSS e melhorou a acessibilidade.
- **HTML5** (2014): Adicionou suporte nativo para áudio, vídeo e APIs avançadas.

O HTML segue evoluindo, permitindo experiências mais ricas na web.

### Elemento HTML
É um componente básico usado para estruturar e organizar o conteúdo de uma página web. Ele é composto por uma tag de abertura, um conteúdo e uma tag de encerramento (em alguns casos, a tag de encerramento pode ser omitida).

![ELEMENTOHTML](https://developer.mozilla.org/pt-BR/docs/Glossary/HTML/mdn_anatomia_de_um_elemento_html.png)

### Estrutura básica

```
<!DOCTYPE html> 
    <html>
        <head>
            <meta>
            <title></title>
        </head>
        <body>
        </body>
    </html>
```

A primeira linha do documento deve ser o `<!DOCTYPE html>`, apesar de parecer um elemento HTML ela apenas diz ao navegador que ele está lidando com um arquivo do tipo HTML5. Os elementos HTML vem logo abaixo.

#### `<html>`

A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

#### `<head>`

A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

#### `<body>`

E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

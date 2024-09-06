# Estilizando elementos
### Padding e Margin
Se quisermos atribuir tamanhos diferentes para cada lado do box nós podemos, e vamos ver três formas de fazer isso.

#### Forma 1
A primeira é colocando um valor para as partes superior e inferior e depois para os lados esquerdo e direito.

```
.post {
    padding: 10px 5px;
}
```
O valor de 10 pixels se refere ao eixo Y, ou partes superior e inferior, e os 5 pixels se referem aos lados esquerdo e direito.

#### Forma 2
A segunda forma é dando valores para cada lado do box.

Então começamos pelo topo com 15 pixels, passamos o lado direito com 10 pixels, depois para a parte inferior com 5 pixels e por último o lado esquerdo com 0, e sempre nessa ordem.

```
.post {
    padding: 15px 10px 5px 0;
}
```
Uma boa dica também é que quando o valor for 0 não precisamos não precisamos colocar a unidade.

#### Forma 3
A terceira forma é com as propriedades específicas para cada lado, até agora tínhamos visto atalhos para essas propriedades.

Essa opção é mais usada quando temos o mesmo valor para 3 lados, e o quarto precisa ter um valor diferente, então usamos o padding com apenas um valor e uma dessas opções para representar o lado diferente.

```
.post {
    padding-top: 15px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 0;
}
```

### Background
A propriedade background também é um atalho para várias propriedades, mas isso vocês podem absorver aos poucos, e uma boa opção de leitura é a documentação do [MDN](https://developer.mozilla.org/en-US/).

```
 .post {
    background-color: green;
    background-image: url("bg.png");
    background-position: top;
 }
```

Por enquanto veremos apenas como mudar a cor de fundo.

```
.post {
    background-color: green;
    background-color: #008800;
    background: #008800;
}
```

E aqui temos 3 formas de colocar uma cor de fundo, e ainda existem outras.

A primeira é pelo nome da cor em inglês, a segunda é pelo código hexadecimal e a terceira é usando apenas o atalho background.

### Border
Vimos que a propriedade border pode ter 3 valores: a largura, a cor e o estilo, mas existem algumas particularidades nisso.

A largura pode ser usada com várias unidades, como px, em e mm. A cor pode ser atribuída pelo nome ou por um código hexadecimal, assim como fizemos com o background, e o estilo é representada por palavras-chave, vamos ver algumas delas:

- solid: mostra uma borda simples e reta;

- dotted: são bolinhas com um pequeno espaçamento entre elas;

- dashed: forma uma linha tracejada.

```
.post {
    border: 3px solid blue;
    border-top: 2px dotted green;
    border-right: 4px dashed pink;
}
```

E aproveitando que mostrei esse código temos que falar sobre como separar a estilização dos lados de uma borda.

```
.post {
    border-top: 2px dotted green;
    border-right: 4px dashed pink;
    border-bottom: 5px solid purple;
    border-left: 3px dotted cyan;
}
```

E se você não quiser usar a propriedade border existem as propriedade específicas para cada aspecto de uma borda, são elas ***border-width*** para a largura, ***border-color*** para a cor e ***border-style*** para o estilo.

Aqui temos o mesmo código anterior de duas formas diferentes, a primeira com o atalho border e a segunda com cada propriedade específica.

```
.post {
    border: 3px solid blue;
}

.post {
    border-width: 3px;
    border-color: blue;
    border-style: solid;
}
```

E depois disso podemos juntar os lados com os aspectos de uma borda e criar uma regra mais específica ainda.
 ```
.post {
    border-top-width: 4px;
    border-top-color: cyan;
    border-top-style: dashed;
}
```

#### Border-radius

E a última propriedade é o border-radius, ele permite arredondar os cantos de um elemento. Podemos usar várias unidades, mas as mais comuns são os pixels e a porcentagem.

```
border-radius: 10px;

border-radius: 50%

border-radius: 10% 20%

border-radius: 10% 20% 15% 22%
```
Colocando apenas um valor mudamos todos os cantos do elemento, mas seguindo aquela mesma ordem que vimos no padding e margin - ***topo, direita, inferior e esquerda*** -  conseguimos alterar cada canto separadamente.

# Estilizando textos

Já sabemos que podemos mudar cor e tamanho de algumas fontes, e agora vamos nos aprofundar nisso.

#### font-family
Com o font-family podemos alterar a fonte dos nossos textos, como uma fonte da internet ou uma que esteja instalada no nosso computador, mas vamos nos ater às fontes seguras, chamadas de web safe fonts.

Essas fontes são chamadas assim pois são encontradas em quases todos os sistemas e podem ser usadas sem preocupação.

```
#title {
    font-family: Verdana;
}

.post_title {
    font-family: Verdana, Arial;
}
```
#### font-size
O font-size nos ajuda a mudar o tamanho do texto, existem algumas unidades de medida para ele mas por enquanto os pixels são suficientes para nós.

```
#title {
    font-size: 30px;
}

.post_title {
    font-size: 18px;
}
```

#### font-style
Usamos o font-style para tornar um texto itálico, na maioria das vezes você usará apenas o valor italic para ele, mas se precisar tirar o itálico de um texto você pode usar o valor normal.
```
#title {
    font-style: normal;
}

.post_title {
    font-style: italic;
}
```

#### font-weight
Altera o peso do texto.

```
#title {
    font-weight: normal;
}

.post_title {
    font-weight: bold;
}
```
#### text-transform
Altera entre maiúsculo e minúsculo.

```
#title {
    text-transform: uppercase;
}

.subtitle {
    text-transform: lowercase;
}

.post_title {
    text-transform: capitalize;
}
```
### text-decoration
Serve para dar destaque a um texto, colocando linhas.

```
#title {
    text-decoration: underline;
}

.subtitle {
    text-decoration: overline;
}

.post_title {
    text-decoration: line-through;
}
```

# Estilizando listas
Para alterar os marcadores dessas listas é utilizado o ***list-style-type***

```
ul {
    list-style-type: square;
}

ol {
    list-style-type: upper-roman;
}

ul {
    list-style-type: "\1F44D";
}
```

Também é possível adicionar imagens como marcadores.

```
ul {
    list-style-type: url("rocket.png")
}
```
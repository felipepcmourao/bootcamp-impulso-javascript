# Propriedades

## display: flex;
Torna a tag um elemento do tipo flex container, e assim automaticamente todos os filhos diretos dessa tag se tornam flex items.

Pode ser aplicada a qualquer tag do código HTML.

## flex-direction
É a propriedade que estabelece o eixo principal do container definindo assim a direção que os flex items são colocados no flex container.

```
.flex-container {
  display: flex;
}
```

#### Os eixos são:
- row (padrão): linha da esquerda para a direita
- row-reverse: linha da direita para a esquerda
- column: coluna de cima para baixo
- column-reverse: coluna de baixo para cima

```
.row-reverse {
    flex-direction: row-reverse;
}
```

## flex-wrap
É a propriedade ue define se os itens devem ou não quebrar a linha. 

Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

- nowrap: comportamento padrão, não permite a quebra de linha
- wrap: permite a quebra de linha quando um dos items não puder ser mais compactado
- wrap-reverse: permite a quebra de linha, porém na direção contrária da linha, ficando acima

## flex-flow
É um atalho para as propriedades ***flex-direction*** e ***flex-wrap***. 

Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

## justify-content
Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles.

Se os elementos ocupam 100% do container, ela não se aplica.

- flex-start
- flex-end
- center
- space-between
- space-around

```
.flex-start {
    justify-content: flex-start;
}
```

## align-items
Trata do alinhamento dos flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas. Permite o alinhamento central no eixo vertical.

- center
- stretch
- flex-start
- flex-end
- baseline

```
.flex-end {
    align-items: flex-end;
}
```

## align-content
É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.

É preciso utilizar a quebra de linhas e a altura do container deve ser maior do que a soma das linhas dos itens.

- center
- stretch
- flex-start
- flex-end
- space-between
- space-around

```
.space-between {
    align-content: space-between;
}
```
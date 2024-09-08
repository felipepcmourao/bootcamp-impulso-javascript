# Propriedades relacionadas aos flex items

## flex-grow
Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos. Não funciona se houver justify-content adicionado ao flex-container.

## flex-basis
É a propriedade que estabelece o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

- auto : proporcionalmente ao conteúdo
- px, %, em,... : valores exatos
- 0 : terá relação com o flex-grow

## flex-shrink
Estabelece a capacidade de redução ou compressão do tamanho de um item.

## flex
Atalho ou abreviação para as propriedades flex-grow, flex-shrink e flex-basis, nessa ordem.

## order
Ordenar os itens.

## align-self
Estabelece o alinhamento de forma individual sobre um determinado item.

- auto
- flex-start
- flex-end
- flex-start
- stretch
- baseline
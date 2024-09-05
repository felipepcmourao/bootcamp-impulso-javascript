# Fundamentos de Algoritmos - Intro
A função do computador é processar as informações que são passadas a ele.

As informações são compostas por 2 tipos de conteúdo: os ***dados*** e as ***instruções***.

- Os dados são tratados e processados.
- As instruções são as operações que vão processar esses dados.

#### Tipos de dados
1. **Numéricos (Inteiros e Reais)**
2. **Caracteres:** Tudo que não se representa por um número, mas também podem ser números
3. **Lógicos (Booleano):** Verdadeiro ou falso

Para utilizar esses dados dentro de um programa, são utilizadas variáveis.

# Variáveis

#### O que é uma variável?
Um tipo de estrutura mutável que pode variar dentro do seu valor e é inconstante. Pode assumir qualquer valor dentro de um conjunto de valores.

#### Regras / Boas práticas para nome
- Um ou mais caracteres que deem sentido a variável
- Começa com uma letra
- Sem espaços
- Vedado utilização de palavras reservadas à linguagem de programação
- Pode receber caracteres e números

#### Papel
1. Ação: modificação de estado
2. Controle: vigiado, controle de alguma estrutura

#### Constante
Constante é um valor inalterável e invariável. Pode-se usar uma variável para definir uma constante.

# Instruções primitivas

As instruções vão determinar as ações que serão executadas em cima dos dados.

Geralmente são cálculos matemáticos, no qual são usadas os operadores.

Dentro desse cálculo, as variáveis e as constantes serão os ***inputs***. Os operadores seráo binarios ou unários.

![Operadores](https://igorcadelima.github.io/curso-webdesign/logica-de-programacao/aula02/img/operadores-aritmeticos.jpg)

#### Definição formal
Instruuções são linguagem de palavras-chave (vocabulário) de uma determinada programação que tem por finalidade comandar um computador que irá tratar os dados.

# Estruturas condicionais e operadores

#### Condição
Estado de uma pessoa ou coisa

#### Condicional
Que expressa uma condição ou suposição. Ele contem ou implica em uma suposição ou hipotese.

#### Estrutura condicional
Dado uma condição que foi satisfeita, determinada operação é executada. Caso a condição não seja satisfeita, acarreta-se em uma excessão.

1. Simples: Apenas verifa-se se a condição foi satisfeita
2. Composta: Após verificação, se a condição não for satisfeita, acontece uma excessão.
3. Encadeada: Se, se não. Uma sucessão de estruturas condicionais.

#### Operadores relacionais
![Operadores Relacionais](https://gnulinuxbr.wordpress.com/wp-content/uploads/2010/01/operadores-relacionais2.png)

#### Operadores lógicos
![Operadores Logicos2](https://eitech.net.br/wp-content/uploads/2024/05/Operadores-logicos.webp)
![Operadores Logicos](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMV18W6tLfodY3v7OhfWJeKQFvHp5nb7IbE85evMYPcBdL8zBzB9pkvl6QNDqXDuMjuE&usqp=CAU)

# Estruturas de repetição

Uma estrutura de repetição irá executar novamente um trecho de um programa a partir de certos parametros definidos em uma estrura de repetição. Deve haver uma condição de parada para evitar um **loop infito**.

#### Enquanto (While)
Repetição enquanto uma condição for verdadeira.

#### Repita até (Do while)
Primeiro executa o código, depois verifica a condição. Ele sempre executa pelo menos uma vez.

#### Para...de...até (For)
Repetição para um número conhecido de vezes.

# Vetores e Matrizes
Vetores são uma sequência de tipos de dados.

![vetorematriz](https://miro.medium.com/v2/resize:fit:998/1*Y-B1y0UMWBo6F8CeS1mwKg.png)

#### Definição Formal: Vetores
Um vetor é caracterizado por uma variável dimensionada com tamanho pré-fixado.

É uma lista de elementos (números, por exemplo) dispostos em uma única linha. Ele pode ser pensado como uma sequência de valores.


#### Definição Formal: Matrizes
Matriz é uma tabela organizada em linhas e colunas no formato m x n, onde m representa o número de linhas (horizontal) e n o número de colunas (vertical).

É uma tabela de elementos organizada em linhas e colunas. Pode ser vista como uma coleção de vetores.

# Funções
Uma função em programação é um bloco de código que realiza uma tarefa específica. Ela permite organizar o código em partes reutilizáveis, evitando a repetição e facilitando a manutenção.

Funções tornam o código mais organizado, modular e fácil de entender.

#### Como funciona?
Uma função é definida com um nome e pode receber parâmetros (valores de entrada) e retornar um resultado.

#### Chamando a função
Para usar a função, basta chamá-la pelo nome e passar os argumentos necessários.

# Instruções de entrada/saída
Dado que se tem um conjunto de dados, e o computador os processa. Pode-se através de um determinado algoritmo exprimir os resultados.

#### Definição Formal: Entrada
Consiste na inserção e recebimento de dados do mundo real por meio de ação de alguma interface, seja teclado, mouse, arquivos, entre outros.

#### Definição Formal: Saída
Consiste na impressão dos dados do mundo abstracto, digital por meio de ação de alguma interface.   

Os formatos podem variar desde simples arquivos binários até complexas querys de bancos de dados.

#### Tipos de saída
1. Saída programada: condicional ou incondicional
2. Saída por interrupção: definida pelos periféricos

#### Casos na saída
1. Bem sucedida
2. Erros de sintaxe ou outro
3. Erros de programação
4. Problemas com a interface

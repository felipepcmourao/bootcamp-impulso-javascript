# Configuração

## tsconfig.json

1. **`target`**: Define a versão do JavaScript para a qual o código TypeScript será compilado. Exemplo: `"es5"`, `"es6"`, `"esnext"`.

2. **`lib`**: Especifica as bibliotecas que o compilador vai incluir automaticamente. Exemplo: `["es2017", "dom"]` adiciona suporte para as APIs do ECMAScript 2017 e do DOM.

3. **`outDir`**: Diretório de saída para onde os arquivos JavaScript compilados serão enviados. Exemplo: `"./dist"`.

4. **`dist`**: Não é uma configuração no `tsconfig.json`, mas geralmente é a pasta onde os arquivos compilados são armazenados. O `outDir` define o caminho para essa pasta.

5. **`rootDir`**: Define o diretório raiz de onde o compilador irá buscar os arquivos TypeScript para compilar. Exemplo: `"./src"`.

6. **`src`**: Geralmente se refere à pasta onde estão os arquivos de origem (`source`) do projeto. Não é uma configuração, mas uma convenção comum.

7. **`noImplicitAny`**: Se `true`, impede que o TypeScript infira o tipo `any` automaticamente quando ele não pode determinar um tipo. Isso obriga a declarar explicitamente o tipo em casos ambíguos.

8. **`strictNullChecks`**: Se `true`, habilita verificações estritas de nulidade. Isso significa que valores `null` e `undefined` devem ser tratados explicitamente, o que ajuda a evitar erros em tempo de execução.

Essas configurações são usadas para controlar como o TypeScript compila o código e quais regras ele deve aplicar.
#### **Etapa 1: Paradigmas de Programação**

Os paradigmas de programação definem diferentes formas de estruturar e organizar o código. Na **Orientação a Objetos**, o programa é composto por "objetos" que possuem propriedades e métodos.

Os paradigmas podem ser imperativos ou declarativos.

![PARADIGMAS](https://hermes.dio.me/articles/cover/a36a19d7-0aa7-4715-911c-b2d097764784.png)

##### **Pilares da Orientação a Objetos**:
- **Herança**: Um objeto filho pode herdar propriedades e métodos de um objeto pai.
- **Polimorfismo**: Objetos que herdam de uma mesma classe podem se comportar de maneira diferente ao invocar seus métodos.
- **Encapsulamento**: Cada classe tem suas propriedades e métodos independentes, ocultando detalhes de implementação do resto do código.
- **Abstração**: Processo de isolar aspectos essenciais de um objeto, simplificando a comunicação e avaliação.

---

#### **Etapa 2: Detalhamento dos Pilares**

1. **Abstração**:
   - A abstração simplifica a avaliação de um sistema complexo, isolando os aspectos mais importantes para a comunicação ou classificação.

2. **Herança**:
   - Um objeto "filho" herda características (propriedades e métodos) de um objeto "pai", permitindo reutilização de código e organização hierárquica.

   **Exemplo:**
   ```javascript
   class Animal {
       constructor(nome) {
           this.nome = nome;
       }
       falar() {
           console.log(this.nome + ' faz um som.');
       }
   }

   class Cachorro extends Animal {
       falar() {
           console.log(this.nome + ' late.');
       }
   }

   let cachorro = new Cachorro('Rex');
   cachorro.falar();  // Output: "Rex late."
   ```

3. **Encapsulamento**:
   - Os detalhes de implementação de uma classe são escondidos, e somente métodos ou propriedades relevantes são expostos para uso externo.

   **Exemplo:**
   ```javascript
   class Pessoa {
       constructor(nome, idade) {
           this.nome = nome;
           this._idade = idade;  // Propriedade privada
       }
       get idade() {
           return this._idade;
       }
       set idade(novaIdade) {
           if (novaIdade > 0) {
               this._idade = novaIdade;
           }
       }
   }

   let pessoa = new Pessoa('João', 25);
   console.log(pessoa.idade);  // Output: 25
   pessoa.idade = 30;
   console.log(pessoa.idade);  // Output: 30
   ```

4. **Polimorfismo**:
   - O polimorfismo permite que diferentes classes derivadas de uma mesma classe base executem métodos de maneira específica, mesmo que compartilhem o nome do método.

   **Exemplo:**
   ```javascript
   class Forma {
       calcularArea() {
           return 0;
       }
   }

   class Circulo extends Forma {
       constructor(raio) {
           super();
           this.raio = raio;
       }
       calcularArea() {
           return Math.PI * this.raio * this.raio;
       }
   }

   class Retangulo extends Forma {
       constructor(largura, altura) {
           super();
           this.largura = largura;
           this.altura = altura;
       }
       calcularArea() {
           return this.largura * this.altura;
       }
   }

   let formas = [new Circulo(5), new Retangulo(10, 5)];
   formas.forEach(forma => console.log(forma.calcularArea()));
   // Output: 78.53981633974483 (área do círculo), 50 (área do retângulo)
   ```
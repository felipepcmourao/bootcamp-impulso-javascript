#### **Etapa 1: Protótipos**

1. **Conceito de Protótipos**:
   - Em JavaScript, todos os objetos herdam propriedades e métodos de um **prototype**.
   - O objeto **`Object.prototype`** está no topo da cadeia de protótipos (também conhecida como **prototype chain**).

   **Exemplo:**
   ```javascript
   let obj = {};
   console.log(obj.__proto__ === Object.prototype);  // true
   ```

2. **Cadeia de Protótipos (Prototype Chain)**:
   - A cadeia de protótipos permite que os objetos herdem características de outros objetos.
   - Quando uma propriedade ou método é acessado em um objeto, o JavaScript busca essa propriedade diretamente no objeto. Se não for encontrada, ele procura no **prototype** do objeto, e assim por diante, até chegar ao `Object.prototype`.

   **Exemplo de Prototype Chain:**
   ```javascript
   let animal = {
       comer: function() {
           console.log("Comendo...");
       }
   };

   let cachorro = {
       latir: function() {
           console.log("Au au!");
       }
   };

   cachorro.__proto__ = animal;

   cachorro.latir();  // Output: "Au au!"
   cachorro.comer();  // Output: "Comendo..." (herdado do prototype animal)
   ```

---

#### **Etapa 2: Classes**

1. **Classes em JavaScript**:
   - As **classes** em JavaScript são na verdade uma **sintaxe de açúcar (syntactic sugar)** para facilitar a criação de objetos e heranças via protótipos.
   - Internamente, tudo ainda funciona por meio de protótipos, e as classes facilitam a escrita, mas não mudam o comportamento fundamental da linguagem.

2. **Estrutura de Classes**:
   - A palavra-chave `class` permite criar uma "classe" com métodos e um construtor. No entanto, por baixo dos panos, é uma maneira mais elegante de criar e gerenciar objetos prototípicos.

   **Exemplo de Classe:**
   ```javascript
   class Animal {
       constructor(nome) {
           this.nome = nome;
       }

       falar() {
           console.log(`${this.nome} faz um som.`);
       }
   }

   class Cachorro extends Animal {
       falar() {
           console.log(`${this.nome} late.`);
       }
   }

   let cachorro = new Cachorro("Rex");
   cachorro.falar();  // Output: "Rex late."
   ```

3. **Getters e Setters**:
   - Em uma classe, é possível definir métodos especiais para obter (getter) e definir (setter) valores de propriedades privadas de um objeto.

   **Exemplo com Getter e Setter:**
   ```javascript
   class Pessoa {
       constructor(nome, idade) {
           this.nome = nome;
           this._idade = idade;  // Propriedade privada
       }

       get idade() {
           return this._idade;
       }

       set idade(valor) {
           if (valor > 0) {
               this._idade = valor;
           }
       }
   }

   let pessoa = new Pessoa('João', 25);
   console.log(pessoa.idade);  // Output: 25
   pessoa.idade = 30;
   console.log(pessoa.idade);  // Output: 30
   ```

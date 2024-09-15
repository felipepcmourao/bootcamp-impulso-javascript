# Loops

## **If/else**

### Estrutura de Controle Condicional

- O bloco `if` é executado caso a condição seja verdadeira.
- O bloco `else` é executado caso a condição seja falsa.

**Exemplo:**

```javascript
if (condicao) {
  // Declaração 1: Ocorre se a condição for verdadeira
} else {
  // Declaração 2: Ocorre se a condição for falsa
}
```

> Observação: Em JavaScript, não existe `elseif`. O correto é `else if` com espaço entre as palavras.

---

## **Switch/case**

- Realiza uma comparação de tipo e valor estritamente (`===`).
- Sempre precisa de um caso `default` para cobrir todas as possibilidades.
- Ideal para quando se precisa comparar muitos valores.

**Exemplo:**

```javascript
switch (expressao) {
  case valor1:
    // Código a ser executado
    break;
  case valor2:
    // Código a ser executado
    break;
  default:
    // Código a ser executado se nenhum caso corresponder
}
```

---

## **For, For...in e For...of**

### **For**
Executa um loop dentro de elementos iteráveis como arrays e strings.

**Exemplo:**

```javascript
for (let i = 0; i < array.length; i++) {
  // Código a ser executado para cada elemento do array
}
```

### **For...in**
Executa um loop sobre as propriedades enumeráveis de um objeto.

**Exemplo:**

```javascript
for (let propriedade in objeto) {
  // Código a ser executado para cada propriedade do objeto
}
```

### **For...of**
Executa um loop sobre estruturas iteráveis, como arrays e strings.

**Exemplo:**

```javascript
for (let elemento of array) {
  // Código a ser executado para cada elemento do array
}
```

---

## **While e Do...while**

### **While**
Executa instruções até que a condição seja falsa.

**Exemplo:**

```javascript
while (condicao) {
  // Código a ser executado enquanto a condição for verdadeira
}
```

### **Do...while**
Executa instruções até que a condição se torne falsa, mas sempre executa o bloco pelo menos uma vez.

**Exemplo:**

```javascript
do {
  // Código a ser executado pelo menos uma vez
} while (condicao);
```

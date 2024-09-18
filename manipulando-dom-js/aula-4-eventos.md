#### **Etapa 1: Tipos de Eventos**

1. **Eventos do Mouse**:
   - **`mouseover`**: Acionado quando o cursor passa sobre um elemento.
   - **`mouseout`**: Acionado quando o cursor sai de um elemento.

2. **Eventos de Clique**:
   - **`click`**: Acionado em um único clique.
   - **`dblclick`**: Acionado em um clique duplo.

3. **Eventos de Atualização**:
   - **`change`**: Acionado quando o valor de um campo é alterado (em formulários, por exemplo).
   - **`load`**: Acionado quando um recurso (como uma imagem ou página) termina de carregar.

---

#### **Etapa 2: Acionando Eventos**

1. **Event Listener (Ouvidor de Eventos)**:
   - O **`addEventListener()`** permite associar eventos a elementos diretamente no JavaScript. Ele escuta quando o evento ocorre e executa a ação programada.

   **Exemplo:**
   ```javascript
   let botao = document.getElementById('meuBotao');
   botao.addEventListener('click', function() {
       alert('Botão clicado!');
   });
   ```

2. **Atributo HTML**:
   - Um evento pode ser acionado diretamente no HTML utilizando atributos como `onclick` ou `onmouseover` no próprio elemento.

   **Exemplo:**
   ```html
   <button onclick="alert('Botão clicado!')">Clique em mim</button>
   ```

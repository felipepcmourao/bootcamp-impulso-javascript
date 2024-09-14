  function comparar (num1,num2) {
    let maiorOuMenor10;
    let maiorOuMenor20;

    let soma = num1 + num2;

    num1 === num2 ? iguaisOuNao = "são iguais" : iguaisOuNao = "não são iguais"

    if (soma > 10) {
        maiorOuMenor10 = "maior que";
    }
    else if (soma < 10) {
        maiorOuMenor10 = "menor que";
    }
    else {
        maiorOuMenor10 = "igual a";
    }

    if (soma > 20) {
        maiorOuMenor20 = "maior que";
    }
    else if (soma < 20) {
        maiorOuMenor20 = "menor que";
    }
    else {
        maiorOuMenor20 = "igual a";
    }


    console.log(`Os números ${num1} e ${num2} ${iguaisOuNao}. Sua soma é ${soma}, que é ${maiorOuMenor10} 10 e ${maiorOuMenor20} 20.`);
}

comparar(0,10);
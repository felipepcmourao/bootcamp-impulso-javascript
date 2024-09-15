/*
- Crie uma função que recebe o array alunos e um número que irá representar a média final;
- Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
- Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

// Minha versão

let maria = {
    name: "Maria",
    grade: 6
}

let joao = {
    name: "João",
    grade: 8
}

let carlos = {
    name: "Carlos",
    grade: 3
}

let luiza = {
    name: "Luiza",
    grade: 9
}

let alunos = [maria, joao, carlos, luiza];

function avaliarNota(alunos, media) {
    let alunosAprovados = []

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].grade >= media) {
            alunosAprovados.push([alunos[i]]);
            console.log(`${alunos[i].name} foi aprovado(a) com a nota ${alunos[i].grade} `)
        }
        else {
            console.log(`${alunos[i].name} foi reprovado(a) com a nota ${alunos[i].grade}`)
        }
    }
    return alunosAprovados;
}

console.log(avaliarNota(alunos, 6));


// não utilizei object destructuring
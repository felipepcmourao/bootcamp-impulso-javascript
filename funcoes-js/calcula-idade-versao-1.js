/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/

// MINHA VERSAO

const felipe = {
    nome: "Felipe",
    idade: 29
}

const alice = {
	nome: "Alice",
	idade: 24
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(felipe, 10)); /// call
console.log(calculaIdade.apply(alice, [30]));  /// apply
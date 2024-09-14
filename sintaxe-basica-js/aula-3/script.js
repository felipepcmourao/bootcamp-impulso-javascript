//////////// ARRAYS ///////////////

// um array pode guardar vários tipos

let array = ["string", 0, false, ["array2"], ["array3"]];
console.log(array[0]);

// forEach()
array.forEach(function(item, index) {console.log(item, index)});

// push()
array.push('novo item');
console.log(array);

// pop()
array.pop();
console.log(array);

// shift()
array.shift();
console.log(array);

// unshift ()
array.unshift("mais um item");
console.log(array);

// indexOf
console.log(array.indexOf(false));

// splice()
array.splice(0,3);
console.log (array);

// slice()
let novoArray = array.slice(0,1);
console.log (array);

///////// OBJETOS ////////////

// Acessar propriedades
let object = {
    string: "string",
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno: {objectInterno: "objeto interno"},
}

console.log(object.boolean);

// Desestruturação
var string = object.string
var number = object.number
var array2 = object.array

var {string, number, boolean} = object;
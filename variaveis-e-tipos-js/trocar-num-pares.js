// MINHA SOLUÇAO

function trocarNum(array) {
   if (!array) {
    return "Isso não é um array!";
   }

   if (array == "") {
    return "-1";
   }

   for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        array.splice(i,1,0);
    }
   }
   return array;
}

console.log(trocarNum(["carlos",0,1,3,6,122,157]));


// SOLUÇAO DA PROFESSORA

function substituiPares(array) {
    if (!array) {
        return -1;
    }
    if (!array.length) {
        return -1;
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!");
        }
        else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por zero...`);
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];

console.log (substituiPares(arr));


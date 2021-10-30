// O que são vetores ou arrays

// como declarar um array
/*let array = ['string',1,true];
console.log(array);*/

// pode guardar qualquer tipo de dados
let array = ['string',1,true,['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array);
//declarando apenas um índice
//console.log(array[0])


// forEach -- itera um array
/*array.forEach(function(item, index){console.log(item, index)});*/


//push add um item no final do array
/*array.push(1)*/


//pop --remove um item no final do array
/*array.pop();
console.log(array);*/


/*shift -- remove um item do final do array
array.shift();
console.log(array);*/


//unshift -- adiciona um item no inicio do array
/*array.unshift(8);
console.log(array);*/


//indexOf --retorna o índice de um valor
/*console.log(array.indexOf(true));*/


//splice --remove/substitui um item atrfvéz do índice
/*array.splice(0, 3);
console.log(array);*/
 

//slice -- retorna uma parte de um array existente
/*let = novoArray = array.slice(0, 3);
console.log(novoArray);*/


//objetos
let object = {
    string: 'string',
    number: 1,
    boolean: false,
    array: ['array'], 
    objectInterno: {objectInterno: 'objeto interno'}
};
/*console.log(object*/

    //aparece apenas o item citado
/*console.log(object.string);*/
 

//desestruturando um objeto
/*var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/
 
var {string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);
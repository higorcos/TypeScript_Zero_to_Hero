"use strict";
//Formas de declaração
let F1 = ['', ''];
let F2 = ['', ''];
let F3 = new Array('', '');
// => Exemplo 01 - Uso de colchetes
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// => Exemplo 02 - Array Object
let frutasSegundaDeclaração = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutasSegundaDeclaração[2]);
//Array de objetos
let frutasObject = [{ 'icone': '🍍', 'CodigoFruta': 'Aba01', }, { 'icone': '🍎', 'CodigoFruta': 'MA01', }];
console.log(frutasObject);
// => Exemplo 03 - Adicionar mais strings com método push
let pessoas = ['Higor', 'Hugo'];
pessoas.push('Nathy');
console.log(pessoas);
// => Exemplo 04 - Identificar tamanho array - length
console.log(frutas.length);
// => Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumero = [1, 2, 3, 4, 5];
listaNumero = [...listaNumero, 6, 7, 8, 9, 10];
console.log(listaNumero);
// => Exemplo 06 - Exemplo de array com laço de iteração
let linguagemArray = new Array('JavaScript', 'Python');
const listItens = (linguagem) => {
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagem[i]);
    }
};
listItens(linguagemArray);
console.log('ww');

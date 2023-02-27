"use strict";
let F1 = ['', ''];
let F2 = ['', ''];
let F3 = new Array('', '');
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
let frutasSegundaDeclaração = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutasSegundaDeclaração[2]);
let frutasObject = [{ 'icone': '🍍', 'CodigoFruta': 'Aba01', }, { 'icone': '🍎', 'CodigoFruta': 'MA01', }];
console.log(frutasObject);
let pessoas = ['Higor', 'Hugo'];
pessoas.push('Nathy');
console.log(pessoas);
console.log(frutas.length);
let listaNumero = [1, 2, 3, 4, 5];
listaNumero = [...listaNumero, 6, 7, 8, 9, 10];
console.log(listaNumero);
let linguagemArray = new Array('JavaScript', 'Python');
const listItens = (linguagem) => {
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagem[i]);
    }
};
listItens(linguagemArray);
console.log('ww');

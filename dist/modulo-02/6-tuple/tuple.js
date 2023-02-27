"use strict";
let pessoas0 = ['higor', 'dev junior', 21];
console.log(' \nExemplo 01 - Uso simples de Tuplas \n');
console.log(pessoas0);
console.log(' \nExemplo 02 - Acessando o valor da Tupla \n');
console.log(pessoas0[0]);
console.log(' \nExemplo 03 - Usando com labels \n');
let pessoas2;
pessoas2 = ['higor', 'dev junior', 21];
console.log(...pessoas2);
console.log(' \nExemplo 04 - Usando com Spread Operator \n');
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
console.log(' \nExemplo 05 - Lista Heterogênea  \n');
let listaFrutas02 = [5, true, ...listaFrutas];
console.log(...listaFrutas02);
console.log(' \nExemplo 06 - Uso de Função \n');
const listPerson = (name, age) => {
    return [...name, ...age];
};
console.log(listPerson(['higor', 'hugo'], [22, 24]));
console.log('\n Exemplo 07 - Labeled Spread Operator\n');
const createdPerson = (...name) => {
    return [...name];
};
console.log(createdPerson('Higor', 'Costa'));
console.log(createdPerson('Higor', 'Pinheiro', 'Costa'));

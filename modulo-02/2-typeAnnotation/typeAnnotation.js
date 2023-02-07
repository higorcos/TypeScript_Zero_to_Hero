"use strict";
// => Variáveis [type Annotations]
let nome = 'Higor Costa';
console.log("\n" + nome);
// => Array [type Annotations]
let animais = ['elefante', 'cachorro'];
console.log("\n" + animais);
// => Objeto [type Annotations]
let carros;
carros = {
    nome: 'Toyota',
    ano: 2021,
    preço: 9000,
};
console.log(carros);
// => function [type Annotations]
const multiplicarNumero = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplicarNumero(2, 3));

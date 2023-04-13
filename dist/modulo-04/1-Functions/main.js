"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}
console.log(somarDoisNumeros(3, 5));
console.log(`\n\t==> Exemplo 02\n`);
const saudar = function (msg) {
    return msg;
};
console.log(saudar('OIIIII !!!'));
console.log(`\n\t==> Exemplo 03\n`);
const saudarArrow = (msg) => {
    return msg;
};
console.log(saudarArrow('OIIIII !!! ARROW'));
console.log(`\n\t==> Exemplo 04\n`);
const saudarContructor = new Function('mensagem', 'return "MSG: " + mensagem');
console.log(saudarContructor('AQUI contructor'));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
const numeroMax = 100;
let contador = 100;
if (contador < numeroMax) {
    contador++;
}
console.log(`\n\t==> Exemplo 01\n`);
console.log(contador);
console.log(`\n\t==> Exemplo 02\n`);
const permissaoParaDigirir = 20;
if (permissaoParaDigirir >= 18) {
    console.log(`Você tem permissao`);
}
else {
    console.log('Você não tem permisão');
}
console.log(`\n\t==> Exemplo 04\n`);
let desconto;
const valorCompra = 14;
if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
}
else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
console.log(`Você recebeu um desconto de ${desconto}%`);
console.log(`\n\t==> Exemplo 05\n`);
const idadePessoa = 14;
const podeVotar = (idadePessoa >= 18) ? 'Você é elegivel' : 'Você não é elegivel';
console.log(podeVotar);

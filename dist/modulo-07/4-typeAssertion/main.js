"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
const exibirPreco = (preco, desconto, formato) => {
    const precoDesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoDesconto}` : precoDesconto;
};
const descontoFinalS = exibirPreco(100, 0.05, true);
console.log(typeof descontoFinalS);
const descontoFinalN = exibirPreco(100, 0.05, false);
console.log(descontoFinalS);
console.log(descontoFinalN);
console.log(`\n\t==> Exemplo 02\n`);
const humano = {
    idade: 25,
    idioma: 'Português'
};
const humano0 = humano;

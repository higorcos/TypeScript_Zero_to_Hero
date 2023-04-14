"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
const descontoCompra = (preco, desconto = 0.08) => {
    return preco * (1 - desconto);
};
console.log(descontoCompra(100));
console.log(`\n\t==> Exemplo 02\n`);
const exibirMesagem = (nome, saudar = 'Oi, ') => {
    return saudar + nome;
};
console.log(exibirMesagem('Jessica'));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
function somarNumero(...numeros) {
    let total = 0;
    numeros.forEach(numero => (total += numero));
    return total;
}
console.log(somarNumero(1, 2, 3, 4, 5, 5));
console.log(somarNumero(1, 2));
console.log(`\n\t==> Exemplo 02\n`);
const listarFrutas = (frase, ...frutas) => {
    return frase + ' ' + frutas.join(', ');
};
console.log(listarFrutas('Lista de compras ', '🥥', '🍓', '🍌', '🍍'));
console.log(`\n\t==> Exemplo 03\n`);
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log('Todos os produtos do departamento de informatica disponiveis: ');
departamentoInformatica.exibirProdutos('tv', 'mouse', 'pc');

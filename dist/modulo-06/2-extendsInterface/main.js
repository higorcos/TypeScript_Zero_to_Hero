"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01 => Interface com extends\n`);
const meuCachorro = {
    nome: '',
    idade: 0,
    porte: 'pequeno',
    raca: 'Akita'
};
console.log(meuCachorro.raca);
console.log(`\n\t==> Exemplo 02 => Extensão de múltiplos interfaces \n`);
const meuGato = {
    nome: 'meu Gato',
    raca: 'Não definido'
};
console.log(meuGato);
console.log(`\n\t==> Exemplo 03 => Uso do Omit \n`);
const fun_padrao = {
    id: 33,
    nome: 'Funcionario padrão'
};
const desenvolvedor = {
    id: 'dev_js_2023/05/02',
    nome: 'Glaucia Costa',
    linguagemProgramacao: 'typescript'
};
const desenvolvedor1 = {
    id: 'dev_js_2023/05/02',
    nome: 2345762394,
    linguagemProgramacao: 'typescript'
};
console.log(fun_padrao);
console.log(desenvolvedor);
console.log(desenvolvedor1);

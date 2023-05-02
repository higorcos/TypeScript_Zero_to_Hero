"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01  - Interface Simple\n`);
const camily = {
    nome: 'Camily',
    sobrenome: 'Costa',
    idade: 15
};
const exibirDados = (pessoa) => {
    return pessoa;
};
console.log(exibirDados(camily));
console.log(`\n\t==> Exemplo 02 com propriedades opcionais\n`);
const livro00 = {
    titulo: 'clean code',
    autor: 'Robert'
};
const livro01 = {
    titulo: 'SCRUM',
    autor: 'Não definido',
    paginas: 203
};
console.log(livro00);
console.log(livro01);
console.log(`\n\t==> Exemplo 03 - com propriedades de somente leitura e opcionais\n`);
const fusca = {
    modelo: 'Fusca 1.0',
    ano: 1999,
};
fusca.ano = 1998;
console.log(fusca);
console.log(`\n\t==> Exemplo 04 => Com implemts\n`);
class Gato {
    constructor(nome, idade, estarVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estarVivo = estarVivo;
    }
    comer(tipoComida) {
        console.log(`o gato ${this.nome} está comendo ${tipoComida}`);
    }
}
const cat = new Gato('Cat00', 10, true);
console.log(cat);
cat.comer('Ração');
console.log(`\n\t==> Exemplo 0\n`);

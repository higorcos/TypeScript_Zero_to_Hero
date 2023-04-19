"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostrar() {
        return `O nome é ${this.nome}, a idade é ${this.idade}`;
    }
}
const pessoa = new Pessoa('Keven', 20);
console.log(pessoa.mostrar());
console.log(`\n\t==> Exemplo 02\n`);
class Estudante {
    listar() {
        console.log(`O nome é ${this.nome} com o codigo ${this.codigo}`);
    }
}
const estudante = new Estudante();
estudante.codigo = 293056;
estudante.nome = 'ALUNO SILVA SILVA';
estudante.listar();
console.log(`\n\t==> Exemplo 03\n`);
class Estudante01 {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
}
const estudante01 = new Estudante01(9965, '1- ALUNO COM CONTRU');
const estudante02 = new Estudante01(11, '2 - ALUNO COM CONTRU');
estudante02.codigo = 293056;
estudante02.nome = 'NOME SENDO ALTERADO';
console.log(estudante01);
console.log(estudante02);

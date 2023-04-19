"use strict";
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

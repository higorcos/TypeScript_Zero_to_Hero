"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
console.log(`\n\t==> Exemplo 02\n`);
class Pessoa {
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('teste de silva');
console.log(`Meu nome é ${pessoa.nome}`);
console.log(`\n\t==> Exemplo 03\n`);
class Estudante {
    constructor() {
        this._nome = 'teste de silva';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);
console.log(`\n\t==> Exemplo 04\n`);
class Estudante_02 {
    constructor(nomeEstudante, semestre, curso) {
        this.nome = nomeEstudante;
        this.curso = curso;
        this.semestre = semestre;
    }
    get cursos() {
        return this.curso;
    }
    set setCursos(setCursos) {
        this.curso = setCursos;
    }
}
const estudante_02 = new Estudante_02('higor', 7, 'BICT');
console.log(estudante_02);
estudante_02.setCursos = 'Mudei o nome aqui ';
console.log(estudante_02);

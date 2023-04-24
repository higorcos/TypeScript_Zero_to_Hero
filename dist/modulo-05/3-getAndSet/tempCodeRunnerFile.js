"use strict";
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

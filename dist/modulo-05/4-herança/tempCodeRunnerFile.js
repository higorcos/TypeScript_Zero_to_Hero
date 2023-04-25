"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    mostrarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentar() {
        return `Oi, o meu nome é: ${this.nome} ${this.sobrenome}`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
}
const funcionario0 = new Funcionario('Nathy', 'de jesus', 'pisicologa');
console.log(funcionario0.apresentar());
console.log(funcionario0.mostrarNomeCompleto());

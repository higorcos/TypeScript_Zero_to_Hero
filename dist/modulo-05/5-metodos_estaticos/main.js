"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
class Animal {
    mover(distancia = 0) {
        console.log("Animal se moveu..." + distancia + 'metros');
    }
}
class Cachorro extends Animal {
    latir() {
        console.log('Au Au !!');
    }
}
const akita = new Cachorro();
akita.latir();
akita.mover();
console.log(`\n\t==> Exemplo 02\n`);
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario.contratacoes++;
    }
    static verificar() {
        return this.contratacoes;
    }
    verificar() {
        return Funcionario.contratacoes;
    }
}
Funcionario.contratacoes = 0;
const funcionario0 = new Funcionario('higor', 'costa', 'dev');
const funcionario1 = new Funcionario('hugo', 'costa', 'Padre');
console.log(Funcionario.contratacoes);
console.log(Funcionario.verificar());
console.log(funcionario0.verificar());
console.log(`\n\t==> Exemplo 02\n`);
class Funcionario1 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario1.contratacoes++;
    }
    static verificar() {
        return Funcionario1.contratacoes;
    }
}
Funcionario1.contratacoes = 0;
const funcionario2 = new Funcionario1('higor', 'costa', 'dev');
const funcionario3 = new Funcionario1('hugo', 'costa', 'Padre');
const funcionario4 = new Funcionario1('hugo', 'costa', 'Padre');
console.log(Funcionario1.verificar());
console.log(`\n\t==> Exemplo 03\n`);
class Cachorro {
    constructor(nome, idade, raça) {
        this.nome = nome;
        this.idade = idade;
        this.raça = raça;
        Cachorro.qtdCachorroVendido++;
    }
    exibirInformações() {
        console.log(`O cachorro é ${this.nome} tem ${this.idade}`);
    }
    static exibirNumeroVendas() {
        console.log(Cachorro.qtdCachorroVendido);
    }
}
Cachorro.qtdCachorroVendido = 0;
const dog0 = new Cachorro('dog0', 0.3, ['Akita']);
const dog1 = new Cachorro('caramelo', 0.3, ['Poodle']);
dog0.exibirInformações();
Cachorro.exibirNumeroVendas();

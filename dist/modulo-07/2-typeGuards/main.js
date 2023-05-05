"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
const exibirTipo = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return `É um número:  ${a + b}`;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return `É uma string  ${a.concat(b)}`;
    }
    throw new Error('Argumento inválido!');
};
console.log(exibirTipo('Texto', '2'));
console.log(exibirTipo(4, 2));
console.log(`\n\t==> Exemplo 02\n`);
class Carro {
    constructor(nome, marca) {
        this.marca = marca;
        this.nome = nome;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
        this.nome = nome;
        this.ano = ano;
    }
}
const detalhesVeiculo = (veiculo) => {
    if (veiculo instanceof Carro) {
        return `O nome do carro é ${veiculo.nome} e a marcar é ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto) {
        return `O nome da moto é ${veiculo.nome} e o ano é ${veiculo.ano}`;
    }
};
const moto = new Moto('CB100', 2015);
const carro = new Carro('Jetta', 'Volkswagen');
console.log(detalhesVeiculo(moto));
console.log(detalhesVeiculo(carro));
console.log(`\n\t==> Exemplo 03\n`);
class Animal {
}
class Ave {
    constructor(grupo, tamanhoBico) {
        this.grupo = grupo;
        this.tamanhoBico = tamanhoBico;
    }
}
class Peixe {
    constructor(grupo, tipoAgua) {
        this.grupo = grupo;
        this.tipoAgua = tipoAgua;
    }
}
const nadar = (grupo) => {
    console.log(`O ${grupo} está nadando `);
};
const voar = (grupo) => {
    console.log(`O ${grupo} está voando `);
};
const mover = (animal) => {
    if ('tipoAgua' in animal) {
        nadar(animal.grupo);
    }
    else if ('tamanhoBico' in animal) {
        voar(animal.grupo);
    }
};
mover(new Peixe('Peixe', "Doce"));
mover(new Ave('Beija-Flor', "Pequena"));

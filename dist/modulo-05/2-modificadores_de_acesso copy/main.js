"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
console.log(`\n\t==> Exemplo 01\n`);
class Celular {
    constructor(marca, android) {
        this.ano = 2020;
        this.marca = marca;
        this.android = android;
    }
}
const lg = new Celular('LG', 15.45);
lg.numeroSIM = 98991190311;
console.log(lg);
console.log(`\n\t==> Exemplo 02\n`);
class Celular01 {
    constructor(marca, android, codigoDeSegurança) {
        this.marca = marca;
        this.android = android;
        this.codigoDeSegurança = codigoDeSegurança;
    }
    testeMetodo(codigoDeSegurança) {
        this.codigoDeSegurança = codigoDeSegurança;
    }
}
const sam = new Celular01('SAMSUNG', 15.45, 3879873465);
sam.testeMetodo(11);
console.log(sam);
console.log(`\n\t==> Exemplo 03\n`);
class Celular02 {
    constructor(marca, android, codigoDeSegurança) {
        this.marca = marca;
        this.android = android;
        this.codigoDeSegurança = codigoDeSegurança;
    }
    testeHerençaMetodo() {
    }
}
class Eletronicos extends Celular02 {
    constructor(marca, android, codigoDeSegurança, ano) {
        super(marca, codigoDeSegurança, android);
        this.ano = ano;
    }
    mudarCodigodeVerificação(newCod) {
        this.codigoDeSegurança = newCod;
    }
    ;
}
const motorola = new Eletronicos('motorola', 4, 100, 2020);
motorola.testeHerençaMetodo();
console.log(motorola);
